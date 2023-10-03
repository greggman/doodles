export function generateMipmap(device/*: GPUDevice*/, texture/*: GPUTexture*/) {
  let perDeviceInfo = byDevice.get(device);
  if (!perDeviceInfo) {
    perDeviceInfo = {
      pipelineByFormatAndView: {},
      moduleByView: {},
    };
    byDevice.set(device, perDeviceInfo);
  }
  let {
    sampler,
    uniformBuffer,
    uniformValues,
  } = perDeviceInfo;
  const {
    pipelineByFormatAndView,
    moduleByView,
  } = perDeviceInfo;
  const view = getViewDimensionForTexture(texture);
  let module = moduleByView[view];
  if (!module) {
    let textureSnippet;
    let sampleSnippet;
    switch (view) {
      case '2d':
        textureSnippet = 'texture_2d<f32>';
        sampleSnippet = 'textureSample(ourTexture, ourSampler, fsInput.texcoord)'
        break;
      case '2d-array':
        textureSnippet = 'texture_2d_array<f32>';
        sampleSnippet = `
          textureSample(
              ourTexture,
              ourSampler,
              fsInput.texcoord,
              uni.layer)`;
        break;
      case 'cube':
        textureSnippet = 'texture_cube<f32>';
        sampleSnippet = `
          textureSample(
              ourTexture,
              ourSampler,
              faceMat[uni.layer] * vec3(fract(fsInput.texcoord), 1))`;
        break;
      default:
        throw new Error(`unsupported view: ${type}`)
    }

    module = device.createShaderModule({
      label: `mip level generation`,
      code: `
        const faceMat = array(
          mat3x3f( 0,  0,  -2,  0, -2,   0,  1,  1,   1),   // posx
          mat3x3f( 0,  0,   2,  0, -2,   0, -1,  1,  -1),   // negx
          mat3x3f( 2,  0,   0,  0,  0,   2, -1,  1,  -1),   // posy
          mat3x3f( 2,  0,   0,  0,  0,  -2, -1, -1,   1),   // negy
          mat3x3f( 2,  0,   0,  0, -2,   0, -1,  1,   1),   // posz
          mat3x3f(-2,  0,   0,  0, -2,   0,  1,  1,  -1));  // negz

        struct VSOutput {
          @builtin(position) position: vec4f,
          @location(0) texcoord: vec2f,
        };

        @vertex fn vs(
          @builtin(vertex_index) vertexIndex : u32
        ) -> VSOutput {
          var pos = array<vec2f, 3>(
            vec2f(-1.0, -1.0),
            vec2f(-1.0,  3.0),
            vec2f( 3.0, -1.0),
          );

          var vsOutput: VSOutput;
          let xy = pos[vertexIndex];
          vsOutput.position = vec4f(xy, 0.0, 1.0);
          vsOutput.texcoord = xy * vec2f(0.5, -0.5) + vec2f(0.5);
          return vsOutput;
        }

        struct Uniforms {
          layer: u32,
        };

        @group(0) @binding(0) var ourSampler: sampler;
        @group(0) @binding(1) var ourTexture: ${textureSnippet};
        @group(0) @binding(2) var<uniform> uni: Uniforms;

        @fragment fn fs(fsInput: VSOutput) -> @location(0) vec4f {
          _ = uni.layer; // make sure this is used so all pipelines have the same bindings
          return ${sampleSnippet};
        }
      `,
    });
    moduleByView[view] = module;
  }

  if (!sampler) {
    sampler = device.createSampler({
      minFilter: 'linear',
      magFilter: 'linear',
    });
    uniformBuffer = device.createBuffer({
      size: 16,
      usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
    });
    uniformValues = new Uint32Array(1);
    Object.assign(perDeviceInfo, { sampler, uniformBuffer, uniformValues });
  }


  const id = `${texture.format}.${view}`;

  if (!pipelineByFormatAndView[id]) {
    pipelineByFormatAndView[id] = device.createRenderPipeline({
      label: `mip level generator pipeline`,
      layout: 'auto',
      vertex: {
        module,
        entryPoint: 'vs',
      },
      fragment: {
        module,
        entryPoint: 'fs',
        targets: [{ format: texture.format }],
      },
    });
  }
  const pipeline = pipelineByFormatAndView[id];

  const dimension = getViewDimensionForTexture(texture);
  for (let baseMipLevel = 1; baseMipLevel < texture.mipLevelCount; ++baseMipLevel) {
    for (let baseArrayLayer = 0; baseArrayLayer < texture.depthOrArrayLayers; ++baseArrayLayer) {
      uniformValues[0] = baseArrayLayer;
      device.queue.writeBuffer(uniformBuffer, 0, uniformValues);

      const bindGroup = device.createBindGroup({
        layout: pipeline.getBindGroupLayout(0),
        entries: [
          { binding: 0, resource: sampler },
          {
            binding: 1,
            resource: texture.createView({
              dimension,
              baseMipLevel: baseMipLevel - 1,
              mipLevelCount: 1,
            }),
          },
          { binding: 2, resource: { buffer: uniformBuffer }},
        ],
      });

      const renderPassDescriptor/*: GPURenderPassDescriptor*/ = {
        label: 'mip gen renderPass',
        colorAttachments: [
          {
            view: texture.createView({
               dimension: '2d',
               baseMipLevel,
               mipLevelCount: 1,
               baseArrayLayer,
               arrayLayerCount: 1,
            }),
            loadOp: 'clear',
            storeOp: 'store',
          },
        ],
      };

      const encoder = device.createCommandEncoder({
        label: 'mip gen encoder',
      });

      const pass = encoder.beginRenderPass(renderPassDescriptor);
      pass.setPipeline(pipeline);
      pass.setBindGroup(0, bindGroup);
      pass.draw(3);
      pass.end();

      const commandBuffer = encoder.finish();
      device.queue.submit([commandBuffer]);
    }
  }
}
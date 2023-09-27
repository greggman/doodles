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
  } = perDeviceInfo;
  const {
    pipelineByFormatAndView,
    moduleByView,
  } = perDeviceInfo;
  const view = '2d';
  let module = moduleByView[view];
  if (!module) {
    module = device.createShaderModule({
      label: `mip level generation`,
      code: `
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

        @group(0) @binding(0) var ourSampler: sampler;
        @group(0) @binding(1) var ourTexture: texture_2d<f32>;
        @group(0) @binding(2) var<uniform> uni: Uniforms;

        @fragment fn fs(fsInput: VSOutput) -> @location(0) vec4f {
          return textureSample(ourTexture, ourSampler, fsInput.texcoord);
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
    Object.assign(perDeviceInfo, { sampler });
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

  for (let baseMipLevel = 1; baseMipLevel < texture.mipLevelCount; ++baseMipLevel) {
    for (let baseArrayLayer = 0; baseArrayLayer < texture.depthOrArrayLayers; ++baseArrayLayer) {
      const bindGroup = device.createBindGroup({
        layout: pipeline.getBindGroupLayout(0),
        entries: [
          { binding: 0, resource: sampler },
          {
            binding: 1,
            resource: texture.createView({
              dimension: '2d',
              baseMipLevel: baseMipLevel - 1,
              mipLevelCount: 1,
              baseArrayLayer,
              arrayLayerCount: 1,
            }),
          },
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
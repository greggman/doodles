/**
 *
 * @author greggman / http://greggman.com/
 *
 * Full-screen textured quad shader
 */

THREE.GlyphShader = {

	uniforms: {

		"color":             { type: "c",  value: new THREE.Color( 0xFFFFFF ) },  // color render text as
		"tDiffuse":          { type: "t",  value: null },                         // the image to Glyph shader
		"diffuseDimensions": { type: "v2", value: new THREE.Vector2() },          // dimension of diffuse texture
		"tGlyphs":           { type: "t",  value: null },                         // the glyph texture
		"glyphDimensions":   { type: "v4", value: new THREE.Vector4() },          // xy = glyphWidth, glyphHeight, zw = segmentWidth, segmentHeight
		"resolution":        { type: "v2", value: new THREE.Vector2() },          // output resolution
		"textSize":          { type: "v2", value: new THREE.Vector2() },          // num glyphs across, down output

	},

	vertexShader: [

		"void main() {",

			"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

		"}"

	].join("\n"),

	fragmentShader: [

		"uniform vec3 color;",
		"uniform vec4 glyphDimensions;",
		"uniform vec2 diffuseDimensions;",
		"uniform vec2 resolution;",
		"uniform vec2 textSize;",

		"uniform sampler2D tDiffuse;",
		"uniform sampler2D tGlyphs;",


		"vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);",

		"float rgb2v(vec3 c) {",
		"    vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);",
		"    vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));",
		"    vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));",
		"    return q.x;",
		"}",


		"float getBrightness(vec2 uv, vec2 offset) {",
		"    vec4 texel = texture2D(tDiffuse, uv + offset / diffuseDimensions);",
		"    float brightness = rgb2v(texel.rgb); //max(texel.r, max(texel.g, texel.b));",
		"    return floor(min(7.0, brightness * 8.0)) / 1.0;",
		"}",

		"void main() {",

			"vec2 screenUv  = gl_FragCoord.xy / resolution;",
			//"gl_FragColor = texture2D(tDiffuse, screenUv) + vec4(screenUv, 0, 1); return;",
			//"gl_FragColor = texture2D(tGlyphs, screenUv) + vec4(screenUv, 0, 1); return;",


			"vec2 glyphUv   = fract(screenUv * textSize);",
			"vec2 diffuseUv = floor(screenUv * textSize) / textSize;",

			"vec4 gUv = vec4(getBrightness(diffuseUv, vec2(0, 0)),",
			"                getBrightness(diffuseUv, vec2(1, 0)),",
			"                getBrightness(diffuseUv, vec2(0, 1)),",
			"                getBrightness(diffuseUv, vec2(1, 1)));",
			//"gl_FragColor = vec4(diffuseUv, 0, 1); return;",
			//"gl_FragColor = vec4(glyphUv, 0, 1); return;",
			//"gl_FragColor = vec4(gUv.xyz, 1); return;",
			//"gl_FragColor = vec4(gUv.xyw, 1); return;",
			//"gl_FragColor = mix(vec4(1,0,0,1), vec4(0,1,0,1), step(7.0/8.0, gUv.w)); return;",
			//"gl_FragColor = vec4(gUv.xyz, 1); return;",
			"gUv = gUv * glyphDimensions.xzyw;",
			"vec2 uv = vec2(gUv.x + gUv.y, gUv.z + gUv.w) +",
			"               vec2(glyphUv.x, 1.0 - glyphUv.y) * glyphDimensions.xy;",

			"vec4 tColor = texture2D(tGlyphs, uv);",
			"gl_FragColor = vec4(tColor.rgb * color, tColor.a);",

		"}"

	].join("\n")

};

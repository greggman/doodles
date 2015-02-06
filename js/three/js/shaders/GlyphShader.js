/**
 *
 * @author greggman / http://greggman.com/
 *
 * Full-screen textured quad shader
 */

THREE.GlyphShader = {

	uniforms: {

		"color":             { type: "c",   value: new THREE.Color( 0xFFFFFF ) },  // color render text as
		"tDiffuse":          { type: "t",   value: null },                         // the image to Glyph shader
		"diffuseDimensions": { type: "v2",  value: new THREE.Vector2() },          // dimension of diffuse texture
		"tGlyphs":           { type: "t",   value: null },                         // the glyph texture
		"glyphDimensions":   { type: "v4",  value: new THREE.Vector4() },          // xy = glyphWidth, glyphHeight, zw = segmentWidth, segmentHeight
		"resolution":        { type: "v2",  value: new THREE.Vector2() },          // output resolution
		"textSize":          { type: "v2",  value: new THREE.Vector2() },          // num glyphs across, down output
		"tDosBrightness":    { type: "t",   value: null },                         // Used to shade dosColors
	},

	vertexShader: [

		"void main() {",

			"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

		"}"

	].join("\n"),

	fragmentShader: [

		"#define USE_DOS_COLORS 0",

		"uniform vec3 color;",
		"uniform vec4 glyphDimensions;",
		"uniform vec2 diffuseDimensions;",
		"uniform vec2 resolution;",
		"uniform vec2 textSize;",

		"uniform sampler2D tDiffuse;",
		"uniform sampler2D tGlyphs;",
		"uniform sampler2D tDosBrightness;",

		"vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);",

		"vec3 rgb2hsv(vec3 c) {",
		"    vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);",
		"    vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));",
		"    vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));",

		"    float d = q.x - min(q.w, q.y);",
		"    float e = 1.0e-10;",
		"    return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);",
		"}",

		"vec3 hsv2rgb(vec3 c) {",
		"     c = vec3(c.x, clamp(c.yz, 0.0, 1.0));",
		"     vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);",
		"     vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);",
		"     return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);",
		"}",

		"float rgb2v(vec3 c) {",
		"    vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);",
		"    vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));",
		"    vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));",
		"    return q.x;",
		"}",

		"vec4 getSrcTexel(vec2 uv, vec2 offset) {",
		"    return texture2D(tDiffuse, uv + offset / diffuseDimensions);",
		"}",

		"float getBrightness(vec2 uv, vec2 offset) {",
		"    vec4 texel = getSrcTexel(uv, offset);",
		"    float brightness = rgb2v(texel.rgb); //max(texel.r, max(texel.g, texel.b));",
		"    #if USE_DOS_COLORS",
		"        return floor(mod(brightness * 23.999, 8.0)) / 1.0;",
		"    #else",
		"        return floor(min(7.0, brightness * 8.0)) / 1.0;",
		"    #endif",
		"}",

		"vec4 getDosColor(vec2 uv, vec2 offset) {",
		"    vec4 texel = getSrcTexel(uv, offset);",
		"    vec3 hsv = rgb2hsv(texel.rgb);",
		"    hsv = floor(hsv * vec3(8, 1, 3)) / vec3(8, 1, 3);",
		"    hsv.y = 1.0;",
		"    hsv.z = hsv.z > 0.6 ? 1.0 : (hsv.z > 0.2 ? 0.5 : 0.0);",
		"    return vec4(hsv2rgb(hsv), 1);",
		"}",

		"void main() {",

			"vec2 screenUv  = gl_FragCoord.xy / resolution;",
			//"gl_FragColor = texture2D(tDiffuse, screenUv) + vec4(screenUv, 0, 1); return;",
			//"gl_FragColor = texture2D(tGlyphs, screenUv) + vec4(screenUv, 0, 1); return;",

			"vec2 glyphUv   = fract(screenUv * textSize);",
			"vec2 diffuseUv = floor(screenUv * textSize) / textSize;",

			"vec4 gUv = vec4(getBrightness(diffuseUv, vec2(0, 1)),",
			"                getBrightness(diffuseUv, vec2(1, 1)),",
			"                getBrightness(diffuseUv, vec2(0, 0)),",
			"                getBrightness(diffuseUv, vec2(1, 0)));",
			"#if USE_DOS_COLORS",
			"    vec3 srcHSV = rgb2hsv(getSrcTexel(diffuseUv, vec2(0.5, 0.5)).rgb);",
			"    srcHSV = floor(srcHSV * vec3(8, 1, 3)) / vec3(8, 1, 3);",
			"    vec2 dBright = texture2D(tDosBrightness, vec2(srcHSV.z, 0.5)).xy;",
			//"    gl_FragColor = texture2D(tDosBrightness, screenUv); return;",
			//"    gl_FragColor = vec4(srcHSV.zzz, 1); return;",
			//"    gl_FragColor = vec4(dBright.xy, 0, 1); return;",
			"    vec4 srcColor0 = vec4(hsv2rgb(vec3(srcHSV.x, 1, dBright.x)), 1);",
			"    vec4 srcColor1 = vec4(hsv2rgb(vec3(srcHSV.x, 1, dBright.y)), 1);",
			"#endif",

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
			"#if USE_DOS_COLORS",
			"    gl_FragColor = mix(srcColor0, srcColor1, tColor.a);",
			"#else",
			"    gl_FragColor = vec4(tColor.rgb * color, tColor.a);",
			"#endif",

		"}"

	].join("\n")

};

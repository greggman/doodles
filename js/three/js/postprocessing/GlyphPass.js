/**
 * @author greggman / http://greggman.com/
 */
"use strict";

THREE.GlyphPass = function ( options ) {

	// glyph texture
	this.updateGlyphs( options );

	this.color = options.color || new THREE.Color( 0xFFFFFF );
	this.textScale = options.textScale || 1;
	this.dosColors = options.dosColors || false;
	this.oldDosColors = false;

	// glyph material

	if ( THREE.GlyphShader === undefined )
		console.error( "THREE.GlyphPass relies on THREE.GlyphShader" );

	var glyphShader = THREE.GlyphShader;

	this.uniforms = THREE.UniformsUtils.clone( glyphShader.uniforms );

	this.uniforms[ "tGlyphs" ].value   = this.glyphTexture;

	var data = new Uint8Array( [
	    0, 128, 0,
	    0, 255, 0,
	    128, 255, 0,
	]);
	var dosBrightTex = new THREE.DataTexture( data, 3, 1, THREE.RGBFormat, THREE.UnsignedByteType, THREE.Texture.DEFAULT_MAPPNG, THREE.ClampToEdgeWrapping, THREE.ClampToEdgeWrapping, THREE.NearestFilter, THREE.NearestFilter );
	dosBrightTex.needsUpdate = true;

	this.uniforms[ "tDosBrightness" ].value = dosBrightTex;

	this.materialGlyph = new THREE.ShaderMaterial( {

		uniforms: this.uniforms,
		vertexShader: glyphShader.vertexShader,
		fragmentShader: glyphShader.fragmentShader,
//		blending: THREE.AdditiveBlending,
//		transparent: true

	} );

	this.enabled = true;
	this.needsSwap = false;
	this.clear = false;


	this.camera = new THREE.OrthographicCamera( -1, 1, 1, -1, 0, 1 );
	this.scene  = new THREE.Scene();

	this.quad = new THREE.Mesh( new THREE.PlaneBufferGeometry( 2, 2 ), this.materialGlyph );
	this.scene.add( this.quad );

};

THREE.GlyphPass.prototype = {

	updateGlyphs: function ( options ) {

		var glyphs = THREE.GlyphUtils.makeGlyphShadingCanvas( options.glyphOptions, this.glyphs );

		if ( !this.glyphTexture ) {

			this.glyphTexture = new THREE.Texture( glyphs.glyphCanvas, THREE.Texture.DEFAULT_MAPPNG, THREE.ClampToEdgeWrapping, THREE.ClampToEdgeWrapping, THREE.LinearFilter, THREE.NearestFilter );
			this.glyphMapTexture = new THREE.Texture( glyphs.glyphMapCanvas, THREE.Texture.DEFAULT_MAPPNG, THREE.ClampToEdgeWrapping, THREE.ClampToEdgeWrapping, THREE.NearestFilter, THREE.NearestFilter );

			glyphs.glyphCanvas.style.zIndex = 10;
			glyphs.glyphCanvas.style.position = "absolute";
			glyphs.glyphCanvas.style.left = "20px";
			glyphs.glyphCanvas.style.bottom = "20px";

//			document.body.appendChild( glyphs.glyphCanvas );

		}

		this.glyphTexture.needsUpdate = true;
		this.glyphTexture.flipY = false;

		this.glyphTextureWidth     = glyphs.glyphCanvas.width;
		this.glyphTextureHeight    = glyphs.glyphCanvas.height;

		this.glyphs = glyphs;

//  console.log(this.glyphs);

	},

	render: function ( renderer, writeBuffer, readBuffer, delta, maskActive ) {

		if ( this.dosColors != this.oldDosColors ) {

			this.oldDosColors = this.dosColors;
			var glyphShader = THREE.GlyphShader;
			this.materialGlyph.fragmentShader =
				glyphShader.fragmentShader.replace("USE_DOS_COLORS 0", "USE_DOS_COLORS " + (this.dosColors ? "1" : "0"))
			this.materialGlyph.needsUpdate = true;

		}

		this.uniforms[ "numGlyphs" ].value = this.glyphs.numGlyphs;
		this.uniforms[ "color" ].value = this.color;
		this.uniforms[ "tDiffuse" ].value = readBuffer;
		this.uniforms[ "diffuseDimensions" ].value.set( readBuffer.width, readBuffer.height );
		this.uniforms[ "glyphDimensions" ].value.set(
			this.glyphTextureWidth  / this.glyphs.glyphWidth,
			this.glyphTextureHeight / this.glyphs.glyphHeight,
			0, 0);

		if ( this.renderToScreen ) {

			var tw = renderer.context.drawingBufferWidth  / this.glyphs.glyphWidth  / this.textScale | 0;
			var th = renderer.context.drawingBufferHeight / this.glyphs.glyphHeight / this.textScale | 0;

			this.uniforms[ "textSize" ].value.set( tw, th );
			this.uniforms[ "resolution" ].value.set( renderer.context.drawingBufferWidth, renderer.context.drawingBufferHeight );
			renderer.render( this.scene, this.camera );

		} else {

			var tw = writeBuffer.width  / this.glyphs.glyphWidth  / this.textScale | 0;
			var th = writeBuffer.Height / this.glyphs.glyphHeight / this.textScale | 0;

			this.uniforms[ "textSize" ].value.set( tw, th );
			this.uniforms[ "resolution" ].value.set( writeBuffer.width, writeBuffer.height );
			renderer.render( this.scene, this.camera, writeBuffer, this.clear );

		}

	}

};


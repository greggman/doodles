"use strict";

( function() {

	var copyArray = function( defaults, array ) {

		var src = array || defaults;
		return src.slice();

	};

	var copyOptions = function( defaults, options ) {

		options = options || {};
		var settings = {};

		Object.keys( defaults ).forEach( function( key ) {

			var value = defaults[ key ];
			if ( value instanceof Array ) {

				settings[ key ] = copyArray( value, options[ key ] );

			} else if ( typeof value === "object" ) {

				settings[ key ] = copyOptions( value, options[ key ] );

			} else {

				settings[ key ] = options[ key ] || value;

			}

		} );

		return settings;

	};

	THREE.GlyphUtils = {

		unicodeRanges: {
			ascii:              [ { start:     33, end:    127 } ],
			ansi:               [ { start:   0x21, end:   0x7F },
			                      { start:   0xA0, end:   0xFE },
			                      { codePoints: [
			                          0x20AC, 0x201A, 0x0192, 0x201E, 0x2026, 0x2020, 0x2021, 0x02C6,
			                          0x2030, 0x0160, 0x2039, 0x0152, 0x017D, 0x2018, 0x2019, 0x201C,
			                          0x201D, 0x2022, 0x2013, 0x2014, 0x02DC, 0x2122, 0x0161, 0x203A,
			                          0x0153, 0x017E, 0x0178,
			                        ]
			                      } ],
			dos:                [ { start:   0x21, end:   0x7E },
			                      { codePoints: [
			                          0x263A, 0x263B, 0x2665, 0x2666, 0x2663, 0x2660, 0x2022, 0x25D8,
			                          0x25CB, 0x25D9, 0x2642, 0x2640, 0x266A, 0x266B, 0x263C, 0x25BA,
			                          0x25C4, 0x2195, 0x203C, 0x00B6, 0x00A7, 0x25AC, 0x21A8, 0x2191,
			                          0x2193, 0x2192, 0x2190, 0x221F, 0x2194, 0x25B2, 0x25BC, 0x2302,
			                          0x00C7, 0x00FC, 0x00E9, 0x00E2, 0x00E4, 0x00E0, 0x00E5, 0x00E7,
			                          0x00EA, 0x00EB, 0x00E8, 0x00EF, 0x00EE, 0x00EC, 0x00C4, 0x00C5,
			                          0x00C9, 0x00E6, 0x00C6, 0x00F4, 0x00F6, 0x00F2, 0x00FB, 0x00F9,
			                          0x00FF, 0x00D6, 0x00DC, 0x00A2, 0x00A3, 0x00A5, 0x20A7, 0x0192,
			                          0x00E1, 0x00ED, 0x00F3, 0x00FA, 0x00F1, 0x00D1, 0x00AA, 0x00BA,
			                          0x00BF, 0x2310, 0x00AC, 0x00BD, 0x00BC, 0x00A1, 0x00AB, 0x00BB,
			                          0x2591, 0x2592, 0x2593, 0x2502, 0x2524, 0x2561, 0x2562, 0x2556,
			                          0x2555, 0x2563, 0x2551, 0x2557, 0x255D, 0x255C, 0x255B, 0x2510,
			                          0x2514, 0x2534, 0x252C, 0x251C, 0x2500, 0x253C, 0x255E, 0x255F,
			                          0x255A, 0x2554, 0x2569, 0x2566, 0x2560, 0x2550, 0x256C, 0x2567,
			                          0x2568, 0x2564, 0x2565, 0x2559, 0x2558, 0x2552, 0x2553, 0x256B,
			                          0x256A, 0x2518, 0x250C, 0x2588, 0x2584, 0x258C, 0x2590, 0x2580,
			                          0x03B1, 0x00DF, 0x0393, 0x03C0, 0x03A3, 0x03C3, 0x00B5, 0x03C4,
			                          0x03A6, 0x0398, 0x03A9, 0x03B4, 0x221E, 0x03C6, 0x03B5, 0x2229,
			                          0x2261, 0x00B1, 0x2265, 0x2264, 0x2320, 0x2321, 0x00F7, 0x2248,
			                          0x00B0, 0x2219, 0x00B7, 0x221A, 0x207F, 0x00B2, 0x25A0, 0x00A0
			                        ]
			                      } ],
			greek:              [ { start:  0x370, end:  0x3FF } ],
			tamil:              [ { start:  0xB80, end:  0xBFF } ],
			telugu:             [ { start:  0xC00, end:  0xC7F } ],
			runic:              [ { start: 0x16A0, end: 0x16FF } ],
			canadian:           [ { start: 0x1400, end: 0x167F } ],
			phoneticExtensions: [ { start: 0x1D00, end: 0x1DfF } ],
			mathOps:            [ { start: 0x2200, end: 0x22FF } ],
			miscTech:           [ { start: 0x2300, end: 0x23FF } ],
			boxDrawing:         [ { start: 0x2500, end: 0x257F } ],
			blockElements:      [ { start: 0x2580, end: 0x259F } ],
			geometricShapes:    [ { start: 0x25A0, end: 0x25FF } ],
			miscShapes:         [ { start: 0x2600, end: 0x26FF } ],
			dingbats:           [ { start: 0x2700, end: 0x27BF } ],
			cjk:                [ { start: 0x4E00, end: 0x5200 } ], // really 0x9FCC!
		},

		makeGlyphShadingCanvas: ( function( options, glyphsInfo ) {

			glyphsInfo = glyphsInfo || {};
			var defaults = {

				glyphs: "",
				glyphSets: [ "ascii" ],
				fontOptions: {

					font: "20px monospace",
					fillStyle: "white",
					textAlign: "center",
					textBaseLine: undefined,

				},
				maxWidth: 32,
				maxHeight: 32,
				baseLine: 20,
				pack: 0,
				checker: false,
				shade: false,
                weighNeighbors: false,

			};

			function generateGlyphRange( start, end ) {

				var s = ""
				for ( var ii = start; ii <= end; ++ii ) {

					s += String.fromCharCode( ii );	// warning. Won't work for all unicode

				}
				return s;

			}

			function generateGlyphsFromCodePoints( codePoints ) {

				return codePoints.map( function( codePoint ) {

					return String.fromCharCode( codePoint );

				} ).join( "" );

			}

			function generate( rangeName ) {

				var ranges = THREE.GlyphUtils.unicodeRanges[ rangeName ];
				return ranges.map( function( range ) {

				  if ( range.codePoints ) {

					return generateGlyphsFromCodePoints( range.codePoints );

				  } else {

					return generateGlyphRange( range.start, range.end );

				  }
				} ).join( "" );

			}

			var settings = copyOptions( defaults, options );
			if ( !settings.glyphs ) {

				settings.glyphs = " ";
				if ( !settings.glyphSets.length ) {

					settings.glyphSets.push( "ascii" );

				}
			}

			settings.glyphs += settings.glyphSets.map( function( setName ) {

				return generate( setName );

			} ).join( "" );

			var canvas = glyphsInfo.canvas || document.createElement( "canvas" );
			canvas.width	= settings.maxWidth;
			canvas.height = settings.maxHeight;
			var ctx = canvas.getContext( "2d" );

			var setFontSettings = function() {

				Object.keys( settings.fontOptions ).forEach( function( key ) {

					ctx[ key ] = settings.fontOptions[ key ];

				} );

			};

			var allZero = function( imageData, offset, start, end, stride ) {

				for ( ; start < end; ++start ) {

					if ( imageData.data[ offset ] ) {

						return false;

					}
					offset += stride;

				}
				return true;

			};

			var columnEmpty = function( imageData, column, opt_y, opt_height ) {

				var y      = opt_y || 0;
				var end    = Math.min( y + ( opt_height || imageData.height ), imageData.height );
				var offset = ( imageData.width * y + column ) * 4 + 3;
				var stride = imageData.width * 4;
				return allZero( imageData, offset, y, end, stride );

			};

			var rowEmpty = function( imageData, row, opt_x, opt_width ) {

				var x      = opt_x || 0;
				var end    = Math.min( x + ( opt_width || imageData.width ), imageData.width );
				var offset = ( imageData.width * row + x ) * 4 + 3;
				return allZero( imageData, offset, x, end, 4 );

			};

			var offsetX = Math.floor( ctx.canvas.width / 2 );
			var offsetY = settings.baseLine;
			var getExtentsForGlyph = function( glyph ) {

				var x0 = 0;
				var y0 = 0;
				var x1 = settings.maxWidth  - 1;
				var y1 = settings.maxHeight - 1;

				ctx.clearRect( 0, 0, ctx.canvas.width, ctx.canvas.height );
				ctx.fillText( glyph, offsetX, offsetY );
				var imageData = ctx.getImageData( 0, 0, ctx.canvas.width, ctx.canvas.height );

				// scan left to right
				while ( x0 < settings.maxWidth && columnEmpty( imageData, x0 )) {

					++x0;

				}

				// scan right to left
				while ( x1 >= x0 && columnEmpty( imageData, x1 )) {

					--x1;

				}

				var width = x1 - x0 + 1;

				// scan left to right
				while ( y0 < settings.maxHeight && rowEmpty( imageData, y0, x0, width )) {

					++y0;

				}

				// scan right to left
				while ( y1 >= y0 && rowEmpty( imageData, y1, x0, width )) {

					--y1;

				}

				var extents = {

					x0: x0,
					y0: y0,
					x1: x1,
					y1: y1,
					width:	x1 - x0 + 1,
					height: y1 - y0 + 1,
					glyph: glyph,

				};

				return extents;

			};

			setFontSettings();
			var glyphs = Array.prototype.map.call( settings.glyphs, getExtentsForGlyph );
			var limits = glyphs.filter( function( glyph ) {

				return glyph.x0 <= glyph.x1 && glyph.y0 <= glyph.y1;

			} ).reduce( function( prev, curr ) {

				return {

					x0: Math.min( prev.x0, curr.x0 ),
					y0: Math.min( prev.y0, curr.y0 ),
					x1: Math.max( prev.x1, curr.x1 ),
					y1: Math.max( prev.y1, curr.y1 ),
					width:	Math.max( prev.width , curr.width ),
					height: Math.max( prev.height, curr.height ),

				};

			} );

			var maxWidth = 0;
			var maxWidthGlyph;
			var maxHeight = 0;
			var maxHeightGlyph;

			glyphs.forEach( function( glyph ) {

				if ( glyph.width > maxWidth ) {

					maxWidth = glyph.width;
					maxWidthGlyph = glyph.glyph;

				}
				if ( glyph.height > maxHeight ) {

					maxHeight = glyph.height;
					maxHeightGlyph = glyph.glyph;

				}
			} );

			//console.log( "mw: " + maxWidth + " mwg: " + maxWidthGlyph + " : 0x" + maxWidthGlyph.charCodeAt( 0 ).toString( 16 ));
			//console.log( "mh: " + maxHeight + " mhg: " + maxHeightGlyph + " : 0x" + maxHeightGlyph.charCodeAt( 0 ).toString( 16 ));

			var glyphWidth	= limits.x1 - limits.x0 + 1 - settings.pack * 2;
			var glyphHeight = limits.y1 - limits.y0 + 1 - settings.pack * 2;
			//console.log( "gw: " + glyphWidth + ", w: " + limits.width );
			//console.log( "gh: " + glyphHeight + ", h: " + limits.height );

			offsetX = Math.floor( glyphWidth / 2 );// - limits.x0;
			offsetY -= limits.y0 + settings.pack;

			function getBrightness( imageData, x, y, width, height ) {

				var total = 0;
				for ( var yy = 0; yy < height; ++yy ) {

					var offset = ( ( yy + y ) * imageData.width + x ) * 4 + 3;
					for ( var xx = 0; xx < width; ++xx ) {

						var alpha = imageData.data[ offset ];
						total += alpha;

                        if ( settings.weighNeighbors ) {

    						if ( xx < width - 1 ) {

    							var alpha2 = imageData.data[ offset + 4 ];
                                var extra  = alpha * alpha2 / 255 | 0;
                                total += extra
                            }

                            if ( yy < height - 1 ) {

                                var alpha3 = imageData.data[ offset + imageData.with * 4 ];
                                var extra  = alpha * alpha3 / 255 | 0;
                                total += extra;

                            }

                        }

						offset += 4;

					}
				}
				var maxBrightness = width * height * 255 + ( width - 1 ) * ( height - 1 ) * 255;
				return total / maxBrightness;

			}

			function computeBrightnessOfGlyphs() {

				ctx.canvas.width  = glyphWidth;
				ctx.canvas.height = glyphHeight;
				setFontSettings();

				glyphs.forEach( function( glyph, ndx ) {

					ctx.clearRect( 0, 0, ctx.canvas.width, ctx.canvas.height );
					ctx.fillText( glyph.glyph, offsetX, offsetY );
					var imageData = ctx.getImageData( 0, 0, glyphWidth, glyphHeight );
					var brightness =  [];
					for ( var yy = 0; yy < 2; ++yy ) {

						for ( var xx = 0; xx < 2; ++xx ) {

							var width  = glyphWidth  / 2 | 0;
							var height = glyphHeight / 2 | 0;
							var x      = xx * width;
							var y      = yy * height;
							if ( glyphWidth % 2 == 1 ) {

								width += 1;

							}
							if ( glyphHeight % 2 == 1 ) {

								height += 1;

							}
							brightness.push( getBrightness( imageData, x, y, width, height ));

						}
					}
					glyph.brightness = brightness;
					glyph.totalBrightness = brightness.reduce( function( a, b ) { return a + b; } ) / 4;

				} );

			}

			computeBrightnessOfGlyphs();

			var maxBrightness = glyphs.reduce( function( prev, curr ) {

				return prev.map( function( a, ndx ) {

					return Math.max( a, curr.brightness[ ndx ] );

				} );

			}, [ 0, 0, 0, 0 ] );
			glyphs.forEach( function( glyph ) {

				glyph.brightness = glyph.brightness.map( function( value, ndx ) {

					return value / maxBrightness[ ndx ];

				} );

			} );

			//console.log( maxBrightness );

			function getDistanceSq( quadBrightness, glyph ) {

				return glyph.brightness.reduce( function( prev, curr, ndx ) {

					var delta = curr - quadBrightness[ ndx ];
					return prev + delta * delta;

				}, 0 );

			}

			function getClosestMatches( quadBrightness ) {

				var matches =  [];
				var closestDistSq = 10000000;
				glyphs.forEach( function( glyph ) {

					var distSq = getDistanceSq( quadBrightness, glyph );
					if ( distSq < closestDistSq ) {

						closestDistSq = distSq;
						matches = [ glyph ];

					} else if ( distSq === closestDistSq ) {

						matches.push( glyph );

					}
				} );

				return matches;

			}

			function createFontCanvas() {

				var numGlyphs        = settings.glyphs.length;
				var maxTextureSize   = 2048;     // look up from GL?
				var glyphsPerSegment = 1 << 3;   // 3 bits
				var segmentWidth     = glyphsPerSegment * glyphWidth;
				var segmentHeight    = glyphsPerSegment * glyphHeight;
				var textureWidth     = glyphsPerSegment * segmentWidth;
				var textureHeight    = glyphsPerSegment * segmentHeight;

				if ( textureWidth > maxTextureSize || textureHeight > maxTextureSize ) {

					throw "can't make texture size " + textureWidth + " x " + textureHeight;

				}

				ctx.canvas.width  = textureWidth;
				ctx.canvas.height = textureHeight;
				setFontSettings();
				ctx.clearRect( 0, 0, ctx.canvas.width, ctx.canvas.height );

				function v( v ) {

				  var b = v / 7 * 200 | 0;
				  return "rgb( " + b + "," + b + "," + b + " )";

				}

				function drawClosestGlyph( spot ) {

					var ll = spot[ 0 ];
					var lr = spot[ 1 ];
					var rl = spot[ 2 ];
					var rr = spot[ 3 ];
					var matches = getClosestMatches( [ ll / maxSegmentIndex, lr / maxSegmentIndex, rl / maxSegmentIndex, rr / maxSegmentIndex ] );
					if ( matches.length ) {

						var match = matches[ ( ll + lr + rl + rr ) % matches.length ];
						match.spots = match.spots ||  [];
						match.spots.push( { spot: [ ll, lr, rl, rr ] } );
						var xOff = ll * glyphWidth	+ lr * segmentWidth;
						var yOff = rl * glyphHeight + rr * segmentHeight;
						ctx.clearRect( xOff, yOff, glyphWidth, glyphHeight );
						if ( settings.checker ) {

							ctx.save();
							ctx.fillStyle = ( ll + lr + rl + rr ) % 2 ? "red" : "green";
							ctx.fillRect( xOff, yOff, glyphWidth, glyphHeight );
							ctx.restore();

						}
						if ( settings.shade ) {

						    var hw = glyphWidth  / 2;
						    var hh = glyphHeight / 2;
						    ctx.save();
						    ctx.fillStyle = v( ll );
						    ctx.fillRect( xOff, yOff, hw, hh );
						    ctx.fillStyle = v( lr );
						    ctx.fillRect( xOff + hw, yOff, hw, hh );
						    ctx.fillStyle = v( rl );
						    ctx.fillRect( xOff, yOff + hh, hw, hh );
						    ctx.fillStyle = v( rr );
						    ctx.fillRect( xOff + hw, yOff + hh, hw, hh );
						    ctx.restore();

						}
						ctx.fillText( match.glyph, offsetX + xOff, offsetY + yOff );

					}
				}

				//	console.log( glyphs.map( JSON.stringify ).join( "\n" ));
				var maxSegmentIndex = glyphsPerSegment - 1;
				for ( var ll = 0; ll < glyphsPerSegment; ++ll ) {

					for ( var lr = 0; lr < glyphsPerSegment; ++lr ) {

						for ( var rl = 0; rl < glyphsPerSegment; ++rl ) {

							for ( var rr = 0; rr < glyphsPerSegment; ++rr ) {

								drawClosestGlyph( [ ll, lr, rl, rr ] )

							}
						}

					}
				}

				glyphsInfo.glyphWidth = glyphWidth;
				glyphsInfo.glyphHeight = glyphHeight;
				glyphsInfo.segmentWidth = segmentWidth;
				glyphsInfo.segmentHeight = segmentHeight;
				glyphsInfo.canvas = canvas;

				return glyphsInfo;

				for ( ;; ) {

					// for every glyph that was used more than once. Find which thing it best matches
					var multiUsed = glyphs.filter( function( glyph ) {

						return glyph.spots && glyph.spots.length > 1;

					} );

					if ( !multiUsed.length ) {

						console.log( "no more multi-used" );
						return;

					}

					var redoSpots =  [];
					multiUsed.forEach( function( glyph ) {

						// find best matching spot
						var bestSpot = glyph.spots.reduce( function( prev, curr ) {

							var pDist = getDistanceSq( prev.spot, glyph );
							var cDist = getDistanceSq( curr.spot, glyph );
							return pDist > cDist ? prev : curr;

						} );
						var allButBestSpot = glyph.spots.filter( function( spot ) {

							return spot !== bestSpot;

						} );
						redoSpots.push.apply( redoSpots, allButBestSpot );

					} );

					// remove every glyph that's already used.
					glyphs = glyphs.filter( function( glyph ) {

						return !glyph.spots;

					} );

					if ( !glyphs.length ) {

						console.log( "no more glyphs" );
						return;

					}

					redoSpots.forEach( function( spot ) {

						drawClosestGlyph( spot.spot );

					} );

				};
		//console.log( "--" );
		//console.log( redo );
		//		glyphs.forEach( function( glyph, ndx ) {

		//			var col = ndx % numCols;
		//			var row = ndx / numCols | 0;
		//	//		console.log( glyph + ": " + col + "," + row + ": " + ( offsetX + col * glyphWidth ) + "," + ( offsetY + row * glyphHeight ));
		//			ctx.save();
		//			if ( settings.checker ) {

		//				ctx.fillStyle = ( col + row ) % 2 ? "black" : "gray";
		//				ctx.fillRect( col * glyphWidth, row * glyphHeight, glyphWidth, glyphHeight );
		//			}
		//			ctx.beginPath();
		//			ctx.rect( col * glyphWidth, row * glyphHeight, glyphWidth, glyphHeight );
		//			ctx.clip();
		//			ctx.fillStyle = settings.fontOptions.fillStyle;
		//			ctx.fillTexty( glyph.glyph, offsetX + col * glyphWidth, offsetY + row * glyphHeight );
		//			ctx.restore();
		//		} );

			}

			return createFontCanvas();

		} ),

	};
}() );


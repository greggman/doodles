Doodles = (function() {
  var compressor = new LZMA( "js/lzma_worker.js" );

  var log = function(msg) {
    if (window.console && window.console.log) {
      window.console.log(msg);
    }
  };

  var error = function(msg) {
    if (window.console && window.console.error) {
      window.console.error(msg);
    } else {
      log("ERROR: " + msg);
    }
  };

  var convertHexToBytes = function(text) {
    var array = [];
    for (var i = 0; i < text.length; i += 2) {
      var tmpHex = text.substring(i, i + 2);
      array.push(parseInt(tmpHex, 16));
    }
    return array;
  };

  var convertBytesToHex = function(byteArray) {
    var hex = "";
    for (var i = 0, il = byteArray.length; i < il; i++) {
      if (byteArray[i] < 0) {
        byteArray[i] = byteArray[i] + 256;
      }
      var tmpHex = byteArray[i].toString(16);
      // add leading zero
      if (tmpHex.length == 1) {
        tmpHex = "0" + tmpHex;
      }
      hex += tmpHex;
    }
    return hex;
  };

  var nop = function() {};

  var readURL = function(ui, hash, fn) {
    var args = hash.split("&");
    var data = {};
    for (var i = 0; i < args.length; ++i) {
      var parts = args[i].split("=");
      data[parts[0]] = parts[1];
    }
    var bytes = convertHexToBytes(data.params);
    compressor.decompress(bytes, function(text) {
      try {
        var params = JSON.parse(text);
        var nameToIndex = {};
        ui.forEach(function(gadget, index) {
          nameToIndex[gadget.name] = index;
        });
        for(var key in params) {
          var index = nameToIndex[key];
          if (index !== undefined) {
            var gadget = ui[index];
            var min = gadget.min || 0;
            var max = gadget.max;
            ui[index].value = Math.min(max, Math.max(min, params[key]));
          } else {
            error("unknown param key");
          }
        }
      } catch (e) {
        error("error parsing URL");
      }
      fn();
    },
    nop);
  };

  var setURL = function(ui) {
    var params = {};
    ui.forEach(function(gadget) {
       params[gadget.name] = gadget.value;
    });
    var str = JSON.stringify(params);
    compressor.compress(str, 1, function(bytes) {
      var hex = convertBytesToHex(bytes);
      window.location.replace('#params=' + hex);
    },
    nop);
  };

  var getUIValue = function(gadget) {
    return gadget.value * 1000;
  };

  var setUIValue = function(gadget, newValue, params) {
    gadget.value = newValue / 1000;
    if (gadget.type) {
      switch (gadget.type) {
      case 'int':
        gadget.value = Math.floor(gadget.value);
        break;
      }
    }
    if (gadget.valueElem) {
      gadget.valueElem.innerHTML = gadget.value;
    }
    params[gadget.name] = gadget.value;
  };

  var setUIParam = function(event, qui, gadget, params) {
    setUIValue(gadget, qui.value, params);
  };

  // This is to update the URL only 1 second after we stop updating the params
  // That way we won't add lots of processing while updating the params.
  var queueURLUpdate = (function() {
    var id = undefined;

    return function(gadgets) {
      var updateURL = function() {
        id = undefined;
        setURL(gadgets);
      };

      if (id !== undefined) {
        window.clearTimeout(id);
        id = undefined;
      }
      id = window.setTimeout(updateURL, 1000);
    };
  }());

  var setupUI = function(container, gadgets, params, fn) {
    gadgets.forEach(function(gadget) {
      var textDiv = document.createElement('div');
      var labelDiv = document.createElement('span');
      labelDiv.appendChild(document.createTextNode(gadget.label || gadget.name));
      var valueDiv = document.createElement('span');
      valueDiv.appendChild(document.createTextNode("0"));
      valueDiv.style.float = "right";
      var sliderDiv = document.createElement('div');
      sliderDiv.id = ui.name;
      textDiv.appendChild(labelDiv);
      textDiv.appendChild(valueDiv);
      container.appendChild(textDiv);
      container.appendChild(sliderDiv);
      gadget.valueElem = valueDiv;
      setUIValue(gadget, getUIValue(gadget), params);
      $(sliderDiv).slider({
        range: false,
        step: 1,
        max: gadget.max * 1000,
        min: (gadget.min || 0) * 1000,
        value: getUIValue(gadget),
        slide: function(gadget, params) {
          return function(event, qui) {
            var oldValue = gadget.value;
            setUIParam(event, qui, gadget, params);
            if (gadget.value != oldValue) {
              var f = gadget.fn || fn;
              if (f) {
                f(gadget, params);
              }
              queueURLUpdate(gadgets);
            }
          };
        }(gadget, params),
      });
    });
  };

  var lerp = function(a, b, l) {
    return a + (b - a) * l;
  };

  var lerpVector = function(a, b, l) {
    var dest = [];
    for (var ii = 0; ii < a.length; ++ii) {
      dest.push(lerp(a[ii], b[ii], l));
    }
    return dest;
  };

  var colorRamp = function(ramp, l) {
    // compute place in ramp;
    l = Math.min(0.999999, l);
    var pos = (ramp.length - 1) * l;
    var start = Math.min(Math.floor(pos), ramp.length - 1);
    var lerp = pos % 1;
    //log("l: " + l + ", start: " + start + ", lerp: " + lerp);
    var result = lerpVector(ramp[start], ramp[start + 1], lerp);
    //log(result);
    return result;
  };

  var makeColor = function(color) {
    return "rgb(" + Math.floor(color[0]) + "," + Math.floor(color[1]) + "," + Math.floor(color[2]) + ")";
  };

  var addAlphaToRGB = function(color, alpha) {
    return "rgba" + color.substring(3, color.length - 1) + "," + alpha + ")";
  };

  var clearCanvas = function(ctx) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  };

  var resetCanvases = function(ctx) {
    ctx.contexts.forEach(function(ctx) {
      clearCanvas(ctx);
    });
    ctx.time = 0;
  };

  var initStep2 = function(ui, updateFn, finishFn) {
    $("body").html([
      '<div id="content">                           ',
      '  <table>                                    ',
      '    <tr id="frame">                          ',
      '      <td id="editorPane">                   ',
      '        <textarea id="editor"></textarea>    ',
      '      </td>                                  ',
      '      <td id="canvasPane">                   ',
      '        <div id="canvasContainer">           ',
      '          <canvas id="drawCanvas"></canvas>  ',
      '          <canvas id="animCanvas"></canvas>  ',
      '        </div>                               ',
      '      </td>                                  ',
      '  </table>                                   ',
      '</div>                                       ',
      '<div id="uiContainer">                       ',
      '  <div id="ui"></div>                        ',
      '</div>                                       ',
      ].join(""));

    var contexts = [];
    var animCanvas = document.getElementById("animCanvas");
    var animCtx = animCanvas.getContext("2d");
    contexts.push(animCtx);
    var drawCanvas = document.getElementById("drawCanvas");
    if (drawCanvas) {
      var drawCtx = drawCanvas.getContext("2d");
      contexts.push(drawCtx);
    }


    var frame = document.getElementById("frame");
    var editorPane = document.getElementById("editorPane");
    var canvasPane = document.getElementById("canvasPane");
    var source = document.getElementById("code").text;
    var editor = document.getElementById("editor");
    var func = function() {};
    editor.value = source;

    var ctx = {
      contexts: contexts,
      animCtx: animCtx,
      drawCtx: drawCtx,
      time: 0,
      elapsedTime: 0,
      _: {
        params: {},
        ui: ui,
      },
    };

    setupUI(document.getElementById("ui"), ctx._.ui, ctx._.params, updateFn);

    var resizeCanvas = function() {
      var resizeFn = function(canvas) {
        if (canvas.width != canvas.clientWidth ||
            canvas.heigt != canvas.clientHeight) {
          canvas.width = canvas.clientWidth;
          canvas.height = canvas.clientHeight;
        }
      };
      contexts.forEach(function(ctx) {
        resizeFn(ctx.canvas);
      });
      resetCanvases(ctx);
    };

    $(window).resize(resizeCanvas);

    var toggleEditor = function() {
      if (editorPane.parentElement) {
        frame.removeChild(editorPane);
      } else {
        frame.insertBefore(editorPane, canvasPane);
      }
      resizeCanvas();
    };
    toggleEditor();

    var applyToCanvases = function(f, ctx) {
      var success = true;
      ctx.contexts.forEach(function(ctx) {
        ctx.save();
      });
      try {
        f(ctx);
      } catch (e) {
        success = false;
        error(e);
      }
      ctx.contexts.forEach(function(ctx) {
        for (var ii = 0; ii < 100; ++ii) {
          ctx.restore();
         }
      });
      return success;
    };

    var func = function() {};

    editor.value = source;

    var temp;
    var onSourceChange = function() {
      source = editor.value;
      var success = true;
      var e;
      var temp;
      try {
        var t = "temp = {fn: function() { return function(runCtx) {" + source + "}; }()}";
        var f = eval(t).fn;
        success = applyToCanvases(f, ctx);
      } catch (e) {
        error(e);
        success = false
      }

      if (success) {
        resetCanvases(ctx);
        func = f;
      }
    };

    var then = Date.now() * 0.001;
    var render = function() {
      var now = Date.now() * 0.001;
      ctx.elapsedTime = now - then;
      then = now;
      ctx.elapsedTime = 1/30; // We need to time to be consistent.
      ctx.time += ctx.elapsedTime;
      applyToCanvases(func, ctx);
      requestAnimFrame(render);
    };
    render();

    window.addEventListener('keyup', function(event) {
      switch (event.keyCode) {
      case 27: // esc
        toggleEditor();
        break;
      }
    });
    editor.addEventListener('keyup', function(event) {
      switch (event.keyCode) {
      case 27: // esc
        toggleEditor();
        break;
      case 37:
      case 38:
      case 39:
      case 40:
        return;
      }
      onSourceChange();
    });

    resizeCanvas();
    onSourceChange();

    if (finishFn) {
      finishFn(ctx);
    }
  };

  var init = function(ui, updateFn, finishFn) {
    var nextStep = function() {
      initStep2(ui, updateFn, finishFn);
    };

    if (window.location.hash) {
      var hash = window.location.hash.substr(1);
      readURL(ui, hash, nextStep);
    } else {
      nextStep();
    }
  };

  return {
    init: init,
    setupUI: setupUI,
    lerp: lerp,
    lerpVector: lerpVector,
    colorRamp: colorRamp,
    makeColor: makeColor,
    resetCanvases: resetCanvases,
    addAlphaToRGB: addAlphaToRGB,
  }
}());


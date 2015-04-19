requirejs([
    './tweeny',
    './twgl-full.min',
    './chroma.min',
  ], function(
    tweeny,
    twgl,
    chroma) {
  /*eslint no-unused-vars:0*/
  "use strict";

  var m4 = twgl.m4;
  var v3 = twgl.v3;
  var easeFuncs = Object.keys(tweeny.fn);
  var gl = twgl.getWebGLContext(document.getElementById("c"));
  twgl.resizeCanvasToDisplaySize(gl.canvas);
  twgl.setAttributePrefix("a_");

  var colorPI = twgl.createProgramInfo(gl, ["color-vs", "color-fs"]);
  var discBI = twgl.primitives.createCylinderBufferInfo(gl, 1, 2, 24, 1);

  var then = 0;
  //var bc = [1, 1, 1, 1];
  var bc = [0, 0, 0, 1];

  function rand(min, max) {
    if (max === undefined) {
      max = min;
      min = 0;
    }
    return Math.random() * (max - min) + min;
  }

  function randPlusMinus(v) {
    return Math.random() < 0.5 ? -v : v;
  }

  var sharedUniforms = {
    u_viewProjection: m4.identity(),
  };

  var tmgr = new tweeny.TweenManager();
  var objects = [];
  var drawObjects = [];
  var across = 10;
  var down = 10;
  var spreadX = across;
  var spreadZ = down;
  for (var zz = 0; zz < down; ++zz) {
    for (var xx = 0; xx < across; ++xx) {
      var u = (xx / (across - 1)) * 2 - 1;
      var v = (zz / (down   - 1)) * 2 - 1;
      var world = m4.identity();
      var color = [1, 0, 0, 1];

      var x;
      var z;
      if (rand(2) < 1) {
        x = rand(-spreadX, spreadX) * 4;
        z = (rand(2) < 1 ? -spreadZ : spreadZ) * 2;
      } else {
        x = (rand(2) < 1 ? -spreadX : spreadX) * 2;
        z = rand(-spreadZ, spreadZ) * 4;
      }
      objects.push({
        origX: u * spreadX,
        origY: 0,
        origZ: v * spreadZ,
        xx: xx,
        zz: zz,
        u: u,
        v: v,
        trans: [x, 0, z],
        rx: 0,
        ry: 0,
        rz: 0,
        xScale: 1,
        yScale: 1,
        zScale: 1,
        dstX: 0,
        dstY: 0,
        dstZ: 0,
        color: color,
        world: world,
      });
      drawObjects.push({
        programInfo: colorPI,
        bufferInfo: discBI,
        uniforms: [sharedUniforms, {
          u_color: color,
          u_world: world,
        }],
      });
    }
  }

  var tweenFuncs = [
    tweeny.fn.bounce,
    tweeny.fn.elastic,
    tweeny.fn.swingFromTo,
    tweeny.fn.bouncePast,
    tweeny.fn.easeFromTo,
    tweeny.fn.easeInOutQuad,
    tweeny.fn.easeInOutQuint,
    tweeny.fn.easeInOutSine,
    tweeny.fn.easyInOutCirc,
    tweeny.fn.boomerang,
    tweeny.fn.boomerangSmooth,
  ];
  function selectEase() {
    return tweenFuncs[rand(tweenFuncs.length) | 0];
  }

  function moveToOrigin(obj, ndx) {
    tmgr.to(obj, 1, { trans: [obj.origX, 0, obj.origZ], ease: tweeny.fn.bounce });
  }

  function toColor(color, delay, ease) {
    return function(obj, ndx) {
      tmgr.to(obj, 1, { delay: ndx * delay, color: color, ease: ease });
    };
  }

  function moveOffset(x, z, delay, ease) {
    return function(obj, ndx) {
      tmgr.to(obj, 1, { delay: ndx * delay, trans: [obj.origX + x, 0,  obj.origZ + z], ease: ease });
    };
  }

  function moveScale(sx, sz, delay, ease) {
    return function(obj, ndx) {
      tmgr.to(obj, 1, { delay: ndx * delay, xScale: sx, zScale: sz, ease: ease });
    };
  }

  function toRot(axis, rot, delay, ease) {
    return function(obj, ndx) {
      var tw = {
        delay: ndx * delay,
        easy: ease,
      };
      tw[axis] = rot;
      tmgr.to(obj, 1, tw);
    };
  }

  function toRotY(rx, delay, ease) {
    return function(obj, ndx) {
      tmgr.to(obj, 1, { delay: ndx * delay, rx: rx, easy: ease });
    };
  }

  function toRainbow(delay, ease) {
    return function(obj, ndx) {
      var r = obj.u * 0.5 + 0.5;
      var g = obj.v * 0.5 + 0.5;
      tmgr.to(obj, 1, { delay: ndx * delay, color: [ r, g, 1 - (r + g) / 2, 1], ease: ease });
    };
  }

  function toRainbowByNdx(delay, ndxMult, ease) {
    return function(obj, ndx) {
      var color = chroma.hsv(Math.abs(ndx * ndxMult) % 360, 1, 1).gl();
      tmgr.to(obj, 1, { delay: ndx * delay, color: color, ease: ease });
    };
  }

  function toGradient(hue, delay, ease) {
    return function(obj, ndx) {
      var color = chroma.hsv(hue, ndx / 100, 1).gl();
      tmgr.to(obj, 1, { delay: ndx * delay, color: color, ease: ease });
    };
  }

  function oldToNew(fn) {
    objects.forEach(fn);
  }

  function newToOld(fn) {
    var lastNdx = objects.length - 1;
    objects.forEach(function(obj, ndx) {
      fn(obj, lastNdx - ndx);
    });
  }

  function fromRight(fn) {
    objects.forEach(function(obj, ndx) {
     fn(obj, (obj.xx) * 10);
    });
  }

  function fromLeft(fn) {
    objects.forEach(function(obj, ndx) {
     fn(obj, (across - obj.xx) * 10);
    });
  }

  function fromBottom(fn) {
    objects.forEach(function(obj, ndx) {
     fn(obj, (obj.zz) * 10);
    });
  }

  function fromTop(fn) {
    objects.forEach(function(obj, ndx) {
     fn(obj, (down - obj.zz) * 10);
    });
  }

  function fromBottomRight(fn) {
    objects.forEach(function(obj, ndx) {
     fn(obj, (obj.xx + obj.zz) * 10);
    });
  }

  function fromBottomLeft(fn) {
    objects.forEach(function(obj, ndx) {
     fn(obj, ((across - obj.xx) +  obj.zz) * 10);
    });
  }

  function fromTopLeft(fn) {
    objects.forEach(function(obj, ndx) {
     fn(obj, ((across - obj.xx) + (down - obj.zz)) * 10);
    });
  }

  function fromTopRight(fn) {
    objects.forEach(function(obj, ndx) {
     fn(obj, ((obj.xx) + (down - obj.zz)) * 10);
    });
  }

  function fromCenterOut(fn) {
    objects.forEach(function(obj, ndx) {
     fn(obj, Math.abs(obj.u * obj.v * 100));
    });
  }

  function fromCircleOut(fn) {
    objects.forEach(function(obj, ndx) {
     fn(obj, Math.sqrt(obj.u * obj.u + obj.v * obj.v) * 100);
    });
  }

  function fromCircleIn(fn) {
    objects.forEach(function(obj, ndx) {
     fn(obj, (1 - Math.sqrt(obj.u * obj.u + obj.v * obj.v)) * 100);
    });
  }

  var taskNdx = 0;
  var tasks = [
    function() { fromCircleOut(toRainbowByNdx(0.01, 2)); },
    function() { fromTopLeft(toRot("rx", Math.PI * 0.5, 0.01)); },
    function() { fromRight(toColor( [0.2, 0.2, 0.2, 1], 0.01)); },
    function() { fromBottom(toRot("rz", Math.PI * 0.25, 0.01)); },
    function() { fromRight(toRainbow(0.01)); },
    function() { fromBottom(toRot("rx", Math.PI * 0, 0.01)); },
    function() { fromRight(toColor( [0,1,0,1], 0.01)); },
    function() { fromCircleIn(toColor( [1,1,1,1], 0.01)); },
    function() { fromTop(toRot("rz", Math.PI * 0, 0.01)); },
    function() { fromRight(toColor( [0,1,1,1], 0.01)); },
    function() { fromRight(toColor( [1,0,0,1], 0.01)); },
    function() { fromRight(moveScale( 1, -1, 0.01)); },
    function() { fromCircleIn(moveScale( 1, -1, 0.01)); },
    function() { fromLeft(moveScale( 1, 1, 0.01)); },
    function() { fromTop(moveScale( 1, -1, 0.01)); },
    function() { fromBottom(moveScale( 1, 1, 0.01)); },
    function() { fromCenterOut(moveScale( -1, -1, 0.01)); },
    function() { fromCircleOut(moveScale( 1, 1, 0.01)); },
    function() { newToOld(moveOffset( 10, 0, 0.01)); },
    function() { oldToNew(moveOffset(-10, 0, 0.01)); },
    function() { fromTopLeft(moveScale( 1, -1, 0.01));  },
    function() { fromBottomRight(moveScale(-1, -1, 0.01));  },
    function() { fromTopRight(moveScale(-1,  1, 0.01));  },
    function() { fromBottomLeft(moveScale( 1,  1, 0.01));  },
  ];

  var orderFuncs = [
    oldToNew,
    newToOld,
    fromLeft,
    fromRight,
    fromTop,
    fromBottom,
    fromBottomRight,
    fromBottomLeft,
    fromTopLeft,
    fromTopRight,
    fromCenterOut,
    fromCircleOut,
    fromCircleIn,
  ];

  function addTween(fn) {
    var orderFn = orderFuncs[rand(orderFuncs.length) | 0];
    orderFn(fn);
  }

  var moveMgr = new (function() {
    var offset = [0, 0, 0];
    var maxOffset = 3;
    var timer = 2;

    function selectTween() {
      var axis = rand(2) | 0;
      var value = offset[axis];
      value += (rand(2) | 0) ? maxOffset : -maxOffset;
      if (value > maxOffset || value < -maxOffset) {
        value = 0;
      }
      offset[axis] = value;
      addTween(moveOffset(offset[0], offset[1], 0.01, selectEase()));
    }

    this.process = function(deltaTime) {
      timer -= deltaTime;
      if (timer <= 0) {
        timer = rand(3) + 2;
        selectTween();
      }
    }
  });

  var rotMgr = new (function() {
    var rot = [0, 0];
    var mult = [0.5, 0.25];
    var name = ["rx", "rz"];
    var timer = 3;

    function selectTween() {
      var axis = rand(2) | 0;
      rot[axis] += randPlusMinus(Math.PI * mult[axis]);
      addTween(toRot(name[axis], rot[axis], 0.01, selectEase()));
    }

    this.process = function(deltaTime) {
      timer -= deltaTime;
      if (timer <= 0) {
        timer = rand(5) + 3;
        selectTween();
      }
    }
  });

  var scaleMgr = new (function() {
    var scale = [1, 1];
    var timer = 4;

    function selectTween() {
      var axis = rand(2) | 0;
      scale[axis] = -scale[axis];
      addTween(moveScale(scale[0], scale[1], 0.01, selectEase()));
    }

    this.process = function(deltaTime) {
      timer -= deltaTime;
      if (timer <= 0) {
        timer = rand(5) + 3;
        selectTween();
      }
    }
  });

  var colorMgr = new (function() {
    var scale = [1, 1];
    var timer = 5;
    var lastSelectionNdx = -1;

    function selectSaturated() {
      return toColor(chroma.hsv(rand(360), 1, 1).gl(), 0.01, selectEase());
    }

    function selectPastel() {
      return toColor(chroma.hsv(rand(360), 0.5, 1).gl(), 0.01, selectEase());
    }

    function selectDark() {
      return toColor(chroma.hsv(rand(360), 1, 0.4).gl(), 0.01, selectEase());
    }

    function selectBlackOrWhite() {
      return toColor(bc[0] ? [0, 0, 0, 1] : [1, 1, 1, 1], 0.01, selectEase());
    }

    function selectRainbowByNdx() {
      return toRainbowByNdx(0.01, 2, selectEase());
    }

    function selectRainbow() {
      return toRainbow(0.01, selectEase());
    }

    function selectGradient() {
      var h = rand(360);
      return toGradient(h, 0.01, selectEase());
    }

    var colorFuncs = [
      selectSaturated,
      selectPastel,
      selectDark,
      selectBlackOrWhite,
      selectRainbowByNdx,
      selectRainbow,
      selectGradient,
    ];

    function selectTween() {
      var ndx = rand(colorFuncs.length - 1) | 0;
      if (ndx == lastSelectionNdx) {
        ndx += 1;
      }
      lastSelectionNdx = ndx;
      addTween(colorFuncs[ndx]());
    }

    this.process = function(deltaTime) {
      timer -= deltaTime;
      if (timer <= 0) {
        timer = rand(5) + 3;
        selectTween();
      }
    }
  });

  objects.forEach(moveToOrigin);

  var ts = v3.create();
  var tr = v3.create();
  var tt = v3.create();

  function render(time) {
    time *= 0.001;
    var deltaTime = time - then;
    then = time;

    twgl.resizeCanvasToDisplaySize(gl.canvas);
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

    gl.clearColor(bc[0], bc[1], bc[2], bc[3]);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    var dist = 56;
    var aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
    var orthoSize = 15;
    var projection = m4.ortho(-orthoSize * aspect, orthoSize * aspect, orthoSize, -orthoSize, 0.5, dist + 10);
    var eye    = [0, dist, 0];
    var target = [0, 0, 0];
    var up     = [0, 0, 1];

    var camera = m4.lookAt(eye, target, up);
    var view = m4.inverse(camera);
    m4.multiply(view, projection, sharedUniforms.u_viewProjection);

    tmgr.update(deltaTime);

    objects.forEach(function(o) {
      var world = o.world;
      ts[0] = o.xScale; ts[1] = o.yScale; ts[2] = o.zScale;
      m4.translation(o.trans, world);
      m4.rotateX(world, o.rx, world);
      m4.rotateY(world, o.ry, world);
      m4.rotateZ(world, o.rz, world);
      m4.scale(world, ts, world);
    });

    twgl.drawObjectList(gl, drawObjects);

    moveMgr.process(deltaTime);
    rotMgr.process(deltaTime);
    scaleMgr.process(deltaTime);
    colorMgr.process(deltaTime);

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);

});


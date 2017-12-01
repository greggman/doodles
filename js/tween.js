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
  twgl.setAttributePrefix("a_");

  var dirColorPI = twgl.createProgramInfo(gl, ["dir-color-vs", "dir-color-fs"]);
  var discBI = twgl.primitives.createCylinderBufferInfo(gl, 1, 2, 24, 1);

  var projectionSwitchDuration = 20;
  var projectionSwitchTimer = projectionSwitchDuration;
  var usePerspective = false;
  var globals = {
    perspMix: 0,
  };

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
    u_lightDir: v3.normalize([1, 0.5, 0.7]),
    u_lightMix: 0,
  };

  var tmgr = new tweeny.TweenManager();
  var objects = [];
  var drawObjects = [];
  var across = 16;
  var down = 16;
  var delay = 2;
  var spreadX = across * 1.1;
  var spreadZ = down * 1.1;
  for (var zz = 0; zz < down; ++zz) {
    for (var xx = 0; xx < across; ++xx) {
      var s = xx / (across - 1);
      var t = zz / (down - 1)
      var u = s * 2 - 1;
      var v = t * 2 - 1;
      var world = m4.identity();
      var worldInverseTranspose = m4.identity();
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
        origTrans: [u * spreadX, 0, v * spreadZ],
        xx: xx,
        zz: zz,
        s: s,
        t: t,
        u: u,
        v: v,
        trans: [x, 0, z],
        rx: 0,
        ry: 0,
        rz: 0,
        scale: [1, 1, 1],
        color: color,
        world: world,
        worldInverseTranspose: worldInverseTranspose,
      });
      drawObjects.push({
        programInfo: dirColorPI,
        bufferInfo: discBI,
        uniforms: [sharedUniforms, {
          u_color: color,
          u_world: world,
          u_worldInverseTranspose: worldInverseTranspose,
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
    tweeny.fn.bounceBack,
  ];
  function selectEase() {
    return tweenFuncs[rand(tweenFuncs.length) | 0];
  }

  function moveToOrigin(obj, order) {
    tmgr.to(obj, 1, { trans: obj.origTrans, ease: tweeny.fn.bounce });
  }

  function toColor(color, delay, ease) {
    return function(obj, order) {
      tmgr.to(obj, 1, { delay: order * delay, color: color, ease: ease });
    };
  }

  function moveOffset(x, z, delay, ease) {
    return function(obj, order) {
      tmgr.to(obj, 1, { delay: order * delay, trans: [obj.origTrans[0] + x, 0,  obj.origTrans[2] + z], ease: ease });
    };
  }

  function moveScale(scale, delay, ease) {
    return function(obj, order) {
      tmgr.to(obj, 1, { delay: order * delay, scale: scale, ease: ease });
    };
  }

  function toRot(axis, rot, delay, ease) {
    return function(obj, order) {
      var tw = {
        delay: order * delay,
        ease: ease,
      };
      tw[axis] = rot;
      tmgr.to(obj, 1, tw);
    };
  }

  function toRainbow(delay, ease) {
    return function(obj, order) {
      var r = obj.s;
      var g = obj.t;
      tmgr.to(obj, 1, { delay: order * delay, color: [ r, g, 1 - (r + g) / 2, 1], ease: ease });
    };
  }

  function toRainbowByNdx(delay, ease) {
    return function(obj, order) {
      var color = chroma.hsv(Math.abs(order * 360) % 360, 1, 1).gl();
      tmgr.to(obj, 1, { delay: order * delay, color: color, ease: ease });
    };
  }

  function toGradient(hue, delay, ease) {
    return function(obj, order) {
      var color = chroma.hsv(hue, order, 1).gl();
      tmgr.to(obj, 1, { delay: order * delay, color: color, ease: ease });
    };
  }

  function oldToNew(fn) {
    var lastNdx = objects.length - 1;
    objects.forEach(function(o, ndx) {
      fn(o, ndx / lastNdx);
    });
  }

  function newToOld(fn) {
    var lastNdx = objects.length - 1;
    objects.forEach(function(obj, ndx) {
      fn(obj, 1 - (ndx / lastNdx));
    });
  }

  function fromRight(fn) {
    objects.forEach(function(obj) {
     fn(obj, 1 - obj.s);
    });
  }

  function fromLeft(fn) {
    objects.forEach(function(obj) {
     fn(obj, obj.s);
    });
  }

  function fromBottom(fn) {
    objects.forEach(function(obj) {
     fn(obj, obj.t);
    });
  }

  function fromTop(fn) {
    objects.forEach(function(obj) {
     fn(obj, 1 - obj.t);
    });
  }

  function fromBottomRight(fn) {
    objects.forEach(function(obj) {
     fn(obj, (obj.s + obj.t) / 2);
    });
  }

  function fromBottomLeft(fn) {
    objects.forEach(function(obj) {
     fn(obj, ((1 - obj.s) + obj.t) / 2);
    });
  }

  function fromTopLeft(fn) {
    objects.forEach(function(obj) {
     fn(obj, ((1 - obj.s) + (1 - obj.t)) / 2);
    });
  }

  function fromTopRight(fn) {
    objects.forEach(function(obj) {
     fn(obj, (obj.s + (1 - obj.t)) / 2);
    });
  }

  function fromCenterOut(fn) {
    objects.forEach(function(obj) {
     fn(obj, Math.abs(obj.u * obj.v));
    });
  }

  function fromCircleOut(fn) {
    objects.forEach(function(obj) {
     fn(obj, Math.sqrt(obj.u * obj.u + obj.v * obj.v));
    });
  }

  function fromCircleIn(fn) {
    objects.forEach(function(obj) {
     fn(obj, 1 - Math.sqrt(obj.u * obj.u + obj.v * obj.v));
    });
  }

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
      addTween(moveOffset(offset[0], offset[1], delay, selectEase()));
    }

    this.process = function(deltaTime) {
      timer -= deltaTime;
      if (timer <= 0) {
        timer = rand(3) + delay * 1.1 + 1;
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
      addTween(toRot(name[axis], rot[axis], delay, selectEase()));
    }

    this.process = function(deltaTime) {
      timer -= deltaTime;
      if (timer <= 0) {
        timer = rand(5) + delay * 1.1 + 1;
        selectTween();
      }
    }
  });

  var scaleMgr = new (function() {
    var scale = [1, 1, 1];
    var timer = 4;

    function selectTween() {
      var axis = rand(2) < 1 ? 0 :  2;
      scale[axis] = -scale[axis];
      addTween(moveScale(scale, delay, selectEase()));
    }

    this.process = function(deltaTime) {
      timer -= deltaTime;
      if (timer <= 0) {
        timer = rand(5) + delay * 1.1 + 1;
        selectTween();
      }
    }
  });

  var colorMgr = new (function() {
    var scale = [1, 1];
    var timer = 5;
    var lastSelectionNdx = -1;

    function selectSaturated() {
      return toColor(chroma.hsv(rand(360), 1, 1).gl(), delay, selectEase());
    }

    function selectPastel() {
      return toColor(chroma.hsv(rand(360), 0.5, 1).gl(), delay, selectEase());
    }

    function selectDark() {
      return toColor(chroma.hsv(rand(360), 1, 0.4).gl(), delay, selectEase());
    }

    function selectBlackOrWhite() {
      return toColor(bc[0] ? [0, 0, 0, 1] : [1, 1, 1, 1], delay, selectEase());
    }

    function selectRainbowByNdx() {
      return toRainbowByNdx(delay, selectEase());
    }

    function selectRainbow() {
      return toRainbow(delay, selectEase());
    }

    function selectGradient() {
      var h = rand(360);
      return toGradient(h, delay, selectEase());
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
      var ndx = rand(colorFuncs.length) | 0;
      if (ndx == lastSelectionNdx) {
        ndx = (ndx + 1) % colorFuncs.length;
      }
      lastSelectionNdx = ndx;
      addTween(colorFuncs[ndx]());
    }

    this.process = function(deltaTime) {
      timer -= deltaTime;
      if (timer <= 0) {
        timer = rand(5) + delay + 1;
        selectTween();
      }
    }
  });

  objects.forEach(moveToOrigin);

  function switchProjection() {
    usePerspective = !usePerspective;
    projectionSwitchTimer = projectionSwitchDuration;
    tmgr.to(globals, 5, { perspMix: usePerspective ? 1 : 0, ease: tweeny.fn.easeInOutSine });
  }
  window.addEventListener('click', switchProjection, false);
  window.addEventListener('keypress', switchProjection, false);
  window.addEventListener('touchstart', switchProjection, false);

  var ts = v3.create();
  var tr = v3.create();
  var tt = v3.create();
  var projection = m4.identity();
  var perspective = m4.identity();
  var ortho = m4.identity();

  function lerp(a, b, t) {
    return a + (b - a) * t;
  }

  function render(time) {
    time *= 0.001;
    var deltaTime = time - then;
    then = time;

    twgl.resizeCanvasToDisplaySize(gl.canvas);

    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

    var dist = 56;
    var aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
    var orthoSize = 15;

    projectionSwitchTimer -= deltaTime;
    if (projectionSwitchTimer <= 0) {
      switchProjection();
    }

    m4.perspective(30 * Math.PI / 180, aspect, 0.5, dist * 10, perspective);
    var perspEye = [Math.sin(time * 0.1) * across * 2, across * 0.5, Math.cos(time * 0.1) * across * 2];
    var perspTarget = [0, across * -0.2, 0];
    var perspUp  = [0, 1, 0];

    m4.ortho(-orthoSize * aspect, orthoSize * aspect, -orthoSize, orthoSize, 0.5, dist + 10, ortho);
    var orthoEye    = [0, dist, 0];
    var orthoTarget = [0, 0, 0];
    var orthoUp     = [Math.sin(time * 0.1), 0, -Math.cos(time * 0.1)];

    sharedUniforms.u_lightMix = globals.perspMix;
    var eye    = v3.lerp(orthoEye, perspEye, globals.perspMix);
    var target = v3.lerp(orthoTarget, perspTarget, globals.perspMix);
    var up     = v3.normalize(v3.lerp(orthoUp, perspUp, globals.perspMix));
    for (var ii = 0; ii < 16; ++ii) {
      projection[ii] = lerp(ortho[ii], perspective[ii], globals.perspMix);
    }

    gl.clearColor(bc[0], bc[1], bc[2], bc[3]);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    gl.enable(gl.DEPTH_TEST);

    var camera = m4.lookAt(eye, target, up);
    var view = m4.inverse(camera);
    m4.multiply(projection, view, sharedUniforms.u_viewProjection);

    tmgr.update(deltaTime);

    objects.forEach(function(o) {
      var world = o.world;
      var s = o.scale;
      ts[0] = Math.abs(s[0]); ts[1] = Math.abs(s[1]); ts[2] = Math.abs(s[2]);
      m4.translation(o.trans, world);
      m4.rotateX(world, o.rx, world);
      m4.rotateY(world, o.ry, world);
      m4.rotateZ(world, o.rz, world);
      m4.scale(world, ts, world);
      m4.inverse(world, o.worldInverseTranspose);
      m4.transpose(o.worldInverseTranspose, o.worldInverseTranspose);
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


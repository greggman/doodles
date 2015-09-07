requirejs([
    './tweeny',
    './chroma.min',
    './canvas-wrapper',
  ], function(
    tweeny,
    chroma,
    canvasWrapper) {
  /*eslint no-unused-vars:0*/
  "use strict";

  var canvas = document.getElementById("c");
  var ctx = canvas.getContext("2d");
  var easeFuncs = Object.keys(tweeny.fn);

  var globals = {
    perspMix: 0,
    maxShapers: 100,
    maxLiners: 60,
    lineWidth: 3,
    radius: 20,
    time: 0,
    duration: 0.1,
    lineDuration: 0.2,
  };

  var then = 0;

  function euclideanModulo(n, m) {
      return ((n % m) + m) % m;
  };

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

  function randInt(min, max) {
    return rand(min, max) | 0;
  }

  function randElement(array) {
    return array[randInt(array.length)];
  }

  var tmgr = new tweeny.TweenManager();

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

  function lerp(a, b, t) {
    return a + (b - a) * t;
  }

  function lerpV2(a, b, t) {
    return [
      lerp(a[0], b[0], t),
      lerp(a[1], b[1], t),
    ];
  }

  function lerpPoint(start, end, l, dst, ndx) {
    dst[ndx + 0] = lerp(start[ndx + 0], end[ndx + 0], l);
    dst[ndx + 1] = lerp(start[ndx + 1], end[ndx + 1], l);
  }

  function lerpPoints(start, end, l, dst) {
    start.forEach(function(startCurve, ndx) {
      var endCurve = end[ndx];
      var dstCurve = dst[ndx];
      startCurve.forEach(function(value, ndx) {
        dstCurve[ndx] = lerp(value, endCurve[ndx], l);
      });
    });
  }

  function makeCircle(numSegments, radius) {
    var start = addCirclePoint([], radius, 0);
    var points = [];
    var verts = [];
    for (var ii = 0; ii < numSegments; ++ii) {
      var startAngle = (ii + 0  ) / numSegments * Math.PI * 2;
      var endAngle   = (ii + 1  ) / numSegments * Math.PI * 2;
      var midAngle   = lerp(startAngle, endAngle, 0.5);
      var curve = [];
      verts.push(addCirclePoint([], radius, startAngle));
      addCirclePoint(curve, radius * 1.14, midAngle);
      addCirclePoint(curve, radius, endAngle);
      points.push(curve);
    }
    return {
      start: start,
      points: points,
      varts: verts,
    };
  }

  // map from corners to segments points
  // ---segments---
  // 0     1     2     3     4     5     6
  // |     |     |     |     |     |     |
  //
  // |        |        |        |        |
  // 0        1        2        3        4
  // ---corners

  function makeShape(numSegments, radius, numEdges) {
    var maxSegmentsPerEdge = Math.ceil(numSegments / numEdges);
    var minSegmentsPerEdge = Math.floor(numSegments / numEdges);

    var start = addCirclePoint([], radius, 0);
    var points = [];
    var verts = [];
    for (var ii = 0; ii < numEdges; ++ii) {
      var startAngle = (ii + 0) / numEdges * Math.PI * 2;
      var endAngle   = (ii + 1) / numEdges * Math.PI * 2;
      var startPoint = addCirclePoint([], radius, startAngle);
      var endPoint   = addCirclePoint([], radius, endAngle);

      verts.push({
        angle: startAngle,
        point: startPoint,
      });

      var startSegment = (ii + 0) * numSegments / numEdges | 0;
      var endSegment   = (ii + 1) * numSegments / numEdges | 0;

      var numSegmentsThisEdge = endSegment - startSegment;
      for (var jj = 0; jj < numSegmentsThisEdge; ++jj) {
        var p1 = (jj + 0.5) / numSegmentsThisEdge;
        var p2 = (jj +   1) / numSegmentsThisEdge;
        points.push(
          lerpV2(startPoint, endPoint, p1).concat(lerpV2(startPoint, endPoint, p2)));
      }
    }

    return {
      start: start,
      points: points,
      verts: verts,
    }
  }

  var numSegments = 6;
  var radius = globals.radius;
  var shapes = {
    circle: makeCircle(numSegments, radius),
    hexagon: makeShape(numSegments, radius, 6),
    pentagon: makeShape(numSegments, radius, 5),
    triangle: makeShape(numSegments, radius, 3),
    square: makeShape(numSegments, radius, 4),
  };
  var shapeArray = Object.keys(shapes).map(function(key) { return shapes[key]; });

  function addCirclePoint(array, radius, angle) {
    angle += Math.PI * -0.5;
    array.push(Math.cos(angle) * radius, Math.sin(angle) * radius);
    return array;
  }

  function Liner() {
  }

  Liner.prototype.init = function(options) {
    this.startX = options.startX;
    this.startY = options.startY;
    this.endX   = options.endX;
    this.endY   = options.endY;
    this.timer  = 0;
    this.duration = options.duration || globals.lineDuration;
    this.shapeNdx = options.shapeNdx;
    this.spawn    = options.spawn;
    this.rot      = options.rot || 0;
  };

  Liner.prototype.process = function() {
    var oldTimer = this.timer;
    this.timer += globals.deltaTime;
    if (oldTimer < this.duration * 0.5 && this.timer >= this.duration * 0.5) {
      if (this.shapeNdx >= 0) {
        shaperMgr.get({
          x: euclideanModulo(this.endX, ctx.canvas.clientWidth),
          y: euclideanModulo(this.endY, ctx.canvas.clientHeight),
          rot: this.rot,
          shapeNdx: this.shapeNdx,
          spawn: this.spawn,
        });
      }
    }

    if (this.timer >= this.duration) {
      linerMgr.put(this);
    }

  };

  Liner.prototype.draw = function(ctx) {
    var l = Math.min(1, this.timer / this.duration);
    var startLerp = Math.max(0, l - 0.5) * 2;
    var endLerp = Math.min(l * 2, 1);
    ctx.beginPath();
    ctx.moveTo(
      lerp(this.startX, this.endX, startLerp),
      lerp(this.startY, this.endY, startLerp));
    ctx.lineTo(
      lerp(this.startX, this.endX, endLerp),
      lerp(this.startY, this.endY, endLerp));
    ctx.stroke();
  };

  function Shaper() {
  }

  Shaper.prototype.init = function(options) {
    options = options || {};
    this.x     = options.x || 0;
    this.y     = options.y || 0;
    this.rot   = options.rot || 0;
    this.scale = options.scale || 1;
    this.spawn = options.spawn;
    this.newShapeNdx = 0;

    var shape = shapeArray[options.shapeNdx || 1];
    this.start = shape.start.slice();
    this.points = shape.points.slice().map(function(a) { return Array.prototype.slice.call(a); });

    this.duration = globals.duration + rand(0.1);
    this.setTargetShape(options.shapeNdx || 1);
    this.setState("grow");
  };

  Shaper.prototype.setState = function(state) {
    this.state = state;
    var initFn = Shaper.prototype["init_" + state];
    if (initFn) {
      initFn.call(this);
    }
    this.process = Shaper.prototype["state_" + state];
    if (!this.process) {
      throw "unknonw state: " + state;
    }
  };

  Shaper.prototype.setTargetShape = function(shapeNdx) {
    this.timer = 0;
    this.oldShapeNdx = this.newShapeNdx;
    this.newShapeNdx = shapeNdx;
  };


  Shaper.prototype.pickNewTargetShape = function() {
    var ndx = randInt(shapeArray.length - 1);
    if (ndx === this.oldShapeNdx) {
      ++ndx;
    }
    this.setTargetShape(ndx);
  };

  // spawn
  //   if tri 1 or 3
  //   if circle 1, 2, 3, 4
  //   if square 1, 2, 3, 4
  //   if pentagon 1 2, 5?
  //   if hex 1, 2, 3, 6
  // morph
  // disappear
  // flash

  Shaper.prototype.pickNewState = function() {
    if (this.spawn) {
      var shape = shapeArray[this.newShapeNdx];
      if (linerMgr.numAvailable >= shape.verts.length) {
        var shapeNdx = randInt(shapeArray.length);
        var spawn = randInt(shape.verts.length);
        var count = randInt(2) + 1;
        var rot = 0;
        if (Math.random() > 0.5) {
          rot = Math.PI * 2 / shape.verts.length * 0.5;
        }
        shape.verts.forEach(function(vert, ndx) {
          linerMgr.get({
            startX: this.x + vert.point[0],
            startY: this.y + vert.point[1],
            endX: this.x + vert.point[0] * 3,
            endY: this.y + vert.point[1] * 3,
            shapeNdx: shapeNdx,
            spawn: (spawn / count | 0) === (ndx / count | 0),
            rot: rot,
          });
        }.bind(this));
      }
    }
    this.setState("shrink");
  };

  Shaper.prototype.init_shrink = function() {
    this.timer = 0;
    this.duration = this.duration * 0.5;
  };

  Shaper.prototype.state_shrink = function() {
    this.timer += globals.deltaTime;
    var l = Math.min(1, this.timer / this.duration);
    this.scale = 1 - l;
    if (this.timer >= this.duration) {
      shaperMgr.put(this);
    }
  };

  Shaper.prototype.init_grow = function() {
      this.timer = 0;
      this.scale = 0;
  };

  Shaper.prototype.state_grow = function() {
    this.timer += globals.deltaTime;
    var l = Math.min(1, this.timer / this.duration);
    this.scale = l;
    if (l === 1) {
      this.setState("morph");
    }
  };

  Shaper.prototype.init_morph = function() {
  };

  Shaper.prototype.state_morph = function() {
    this.timer += globals.deltaTime;
    var l = Math.min(1, this.timer / this.duration);
    var oldShape = shapeArray[this.oldShapeNdx];
    var newShape = shapeArray[this.newShapeNdx];
    lerpPoint(oldShape.start, newShape.start, l, this.start, 0);
    lerpPoints(oldShape.points, newShape.points, l, this.points);
    if (l === 1) {
      this.pickNewState();
    }
  };

  Shaper.prototype.draw = function(ctx) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rot);
    ctx.scale(this.scale, this.scale);
    //var shape = shapes.pentagon;
    //var shape = shapes.hexagon;
    //var shape = shapes.circle;
    //var shape = shapes.square;
    //var shape = shapes.triangle;
    ctx.beginPath();
    ctx.moveTo.apply(ctx, this.start);
    this.points.forEach(function(curvePoints) {
        ctx.quadraticCurveTo.apply(ctx, curvePoints);
    });
    ctx.closePath();
    ctx.stroke();
    ctx.restore();
  };

  function ClassManager(ctor, max) {
    var unused = [];
    var numCreated = 0;
    var active = [];
    var deactivated = [];

    Object.defineProperties(this, {
      numAvailable: {
        get: function() {
          var numActive = numCreated - unused.length;
          return max - numActive;
        },
      },
    });

    this.get = function() {
      var instance = unused.pop();
      if (!instance) {
        instance = new ctor();
        ++numCreated;
      }
      instance.init.apply(instance, arguments);
      active.push(instance);
      return instance;
    };

    this.put = function(instance) {
      deactivated.push(instance);
    };

    this.forEach = function(fn) {
      if (deactivated.length) {
        while(deactivated.length) {
          var instance = deactivated.pop();
          var ndx = active.indexOf(instance);
          if (ndx < 0) {
            throw "what!";
          }
          active.splice(ndx, 1);
          unused.push(instance);
        };
      }
      active.forEach(fn);
    };
  }

  var shaperMgr = new ClassManager(Shaper, globals.maxShapers);
  var linerMgr = new ClassManager(Liner, globals.maxLiners);

  resize(ctx.canvas);
  shaperMgr.get({
    x: ctx.canvas.width  / 2,
    y: ctx.canvas.height / 2,
    spawn: true,
  });

  function resize(canvas) {
    var width = canvas.clientWidth;
    var height = canvas.clientHeight;
    if (width != canvas.width || height != canvas.height) {
      canvas.width  = width;
      canvas.height = height;
      return true;
    }
  }

  function process(o) {
    o.process();
  }

  function draw(o) {
    o.draw(ctx);
  }

  function render(time) {
    time *= 0.001;
    globals.deltaTime = Math.min(0.1, time - then);
    globals.time += globals.deltaTime;
    then = time;

    resize(ctx.canvas);

    ctx.lineWidth = globals.lineWidth;
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    //moveMgr.process(deltaTime);
    //rotMgr.process(deltaTime);
    //scaleMgr.process(deltaTime);
    //colorMgr.process(deltaTime);
    shaperMgr.forEach(process);
    linerMgr.forEach(process);
    shaperMgr.forEach(draw);
    linerMgr.forEach(draw);

    ctx.restore();

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);

});


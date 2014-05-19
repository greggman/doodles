/*
 * Copyright 2014, Gregg Tavares.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Gregg Tavares. nor the names of his
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
"use strict";

var main = function(
  GameClock,
  HandJS,
  Input,
  Misc,
  Strings) {

  var globals = {
    numSymbols: 200,
    moveSpeed: 300,
  };
  Misc.applyUrlSettings(globals);

  var canvas = document.getElementById("c");
  var ctx = canvas.getContext("2d");
  Misc.resize(canvas);

  var setTransform = function(s, t) {
    s.transform = t;
    s.webkitTransform = t;
    s.mozTransform = t;
    s.msTransform = t;
  };

  var setElemPosition = function(sym) {
    var s = sym.e.style;
    s.left = Math.floor(sym.x) + "px";
    s.top = Math.floor(sym.y) + "px";
  };

  var nextZIndex = 100;
  var addElem = function(sym) {
    var elem = document.createElement("div");
    elem.appendChild(document.createTextNode(sym.s));
    var s = elem.style;
    s.position = "absolute";
    s.zIndex = ++nextZIndex;
    s.fontFamily = "sans-serif";
    s.fontSize = "20px";
    setTransform(s, "rotate(" + sym.r + "rad)");
    s.border = "2px solid red";
    document.getElementById("content").appendChild(elem);
    return elem;
  };

  var symbols = [];
  for (var ii = 0; ii < globals.numSymbols; ++ii) {
    var s = {
      x: Misc.randInt(canvas.width),
      y: Misc.randInt(canvas.height),
      r: Misc.rand(Math.PI * 2),
      s: Strings.fromCodePoint(0x1F680 + Misc.randInt(0x40)),
    };
//    s.e = addElem(s);
//    setElemPosition(s);
    symbols.push(s);
  };

  var requestId = undefined;
  var statusElement = document.getElementById("status");
  var statusNode = statusElement.firstChild;
  if (!statusNode) {
    statusNode = document.createTextNode("");
    statusElement.appendChild(statusNode);
  }

  var normalize = function(v) {
    var mag = Math.sqrt(v.x * v.x + v.y * v.y);
    if (mag > 0.0000001) {
      v.x /= mag;
      v.y /= mag;
    }
  };

  var lengthSq = function(v) {
    return v.x * v.x + v.y * v.y;
  };

  var length = function(v) {
    return Math.sqrt(lengthSq(v));
  };

  var distance = function(p0, p1) {
    var dx = p0.x - p1.x;
    var dy = p0.y - p1.y;
  };

  var wrapAngle = function(a) {
      if (a < -Math.PI) {
          return a + Math.PI * 2;
      }
      if (a > Math.PI) {
          return a - Math.PI * 2;
      }
      return a;
  };

  var clock = new GameClock();
  var render = function() {
    var s = [];
    Misc.resize(canvas, true);
    globals.elapsedTime = clock.getElapsedTime();
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.font = "40px sans-serif";

    for (var ii = 0; ii < symbols.length; ++ii) {
      var symbol = symbols[ii];
      var velX = Math.cos(symbol.r) * globals.moveSpeed * globals.elapsedTime;
      var velY = Math.sin(symbol.r) * globals.moveSpeed * globals.elapsedTime;
      symbol.x = (symbol.x + velX + ctx.canvas.width ) % ctx.canvas.width;
      symbol.y = (symbol.y + velY + ctx.canvas.height) % ctx.canvas.height;
      ctx.save();
      ctx.translate(symbol.x, symbol.y);
      ctx.rotate(symbol.r);
      ctx.fillText(symbol.s, 0, 0);
      ctx.restore();
//      setElemPosition(symbol);
    }

    statusNode.nodeValue = s.join("\n");
    requestId = requestAnimationFrame(render);
  };

  var startRendering = function() {
    if (requestId === undefined) {
      render();
    }
  };

  var stopRendering = function() {
    if (requestId !== undefined) {
      cancelAnimationFrame(requestId);
      requestId = undefined;
    }
  };

  window.addEventListener('blur', stopRendering);
  window.addEventListener('focus', startRendering);
  startRendering();
};

requirejs(
    [ 'js/gameclock',
      'js/hand-1.3.7',
      'js/input',
      'js/misc',
      'js/strings',
    ],
    main);


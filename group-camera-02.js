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
  HandJS,
  Input,
  Misc) {

  var globals = {
    numPlayers: 3,
    minDist: 100,
    positionSpeed: 0.1,
    targetSpeed: 0.1,
    fovExtra: Misc.degToRad(-10),
  };
  Misc.applyUrlSettings(globals);

  var canvas = document.getElementById("c");
  var ctx = canvas.getContext("2d");

  var playerRadius = 16;
  var players = [];

  for (var ii = 0; ii < globals.numPlayers; ++ii) {
    players.push({
      x: ii * 40 + 100,
      y: ii * 10 + 70,
    });
  };

  var camera = {
    x: 150,
    y: 200,
    fov: Math.PI / 4,
    dir: 0,
  };

  var drawCircle = function(position, radius) {
    ctx.beginPath();
    ctx.arc(position.x, position.y, radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  };

  var requestId = undefined;
  var statusElement = document.getElementById("status");
  var statusNode = statusElement.firstChild;
  if (!statusNode) {
    statusNode = document.createTextNode("");
    statusElement.appendChild(statusNode);
  }

  var currentPlayer;
  var startOffset;

  var inputElem = document.getElementById("input");

  var inPlayer = function(player, pos) {
    var dx = player.x - pos.x;
    var dy = player.y - pos.y;
    return dx * dx + dy * dy < playerRadius * playerRadius;
  };

  inputElem.addEventListener('pointerdown', function(e) {
    var pos = Input.getRelativeCoordinates(e.target, e);
    for (var ii = 0; ii < players.length; ++ii) {
      var player = players[ii];
      if (inPlayer(player, pos)) {
        currentPlayer = player;
        startOffset = { x: player.x - pos.x, y: player.y - pos.y };
        return;
      }
    }
  }, false);

  inputElem.addEventListener('pointermove', function(e) {
    if (!currentPlayer) {
      return;
    }
    var pos = Input.getRelativeCoordinates(e.target, e);
    currentPlayer.x = pos.x + startOffset.x;
    currentPlayer.y = pos.y + startOffset.y;
  }, false);

  var pointerFinish = function() {
    currentPlayer = undefined;
  };

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

  inputElem.addEventListener('pointerup', pointerFinish, false);
  inputElem.addEventListener('pointerout', pointerFinish, false);

  var render = function() {
    var s = [];
    Misc.resize(canvas, true);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.save();
    ctx.scale(2, 2);

    var playerSort = [];
    var min = { x: players[0].x, y: players[0].y };
    var max = { x: players[0].x, y: players[0].y };
    for (var ii = 0; ii < players.length; ++ii) {
      var player = players[ii];
      ctx.fillStyle = "#48F";
      ctx.strokeStyle = "#000";
      drawCircle(player, playerRadius);

      // Compute angle from camera.
      var dx = player.x - camera.x;
      var dy = player.y - camera.y;

      min.x = Math.min(player.x, min.x);
      min.y = Math.min(player.y, min.y);
      max.x = Math.max(player.x, max.x);
      max.y = Math.max(player.y, max.y);

      var realAngle = Math.atan2(dx, -dy);
      var deltaAngle = wrapAngle(realAngle - camera.dir);

      ctx.fillStyle = "#000";
      ctx.fillText("ra: " + realAngle.toFixed(3), player.x, player.y - 10);
      ctx.fillText("da: " + deltaAngle.toFixed(3), player.x, player.y - 20);
      ctx.fillText(" #: " + ii, player.x, player.y - 30);

      playerSort.push({
        player: player,
        deltaAngle: deltaAngle,
      });
    }
    playerSort.sort(function(a, b) {
      return a.deltaAngle < b.deltaAngle;
    });

    // take the players at both ends. compute the midpoint
    // assume we want to be perpendicular to that midpoint.
    var p0 = playerSort[0].player;
    var p1 = playerSort[playerSort.length - 1].player;

    var center = {
      x: (p0.x + p1.x) * 0.5,
      y: (p0.y + p1.y) * 0.5,
    };

    var bbCenter = {
      x: (min.x + max.x) * 0.5,
      y: (min.y + max.y) * 0.5,
    };

    ctx.fillStyle = "#4F4";
    drawCircle(bbCenter, 5);

    ctx.fillStyle = "#F00";
    drawCircle(center, 4);

    var dx = p0.x - p1.x;
    var dy = p0.y - p1.y;
    var bbSize = Math.sqrt(dx * dx + dy * dy);

    var desiredDistFromBBCenter = (bbSize / 2.0) / Math.tan((camera.fov + globals.fovExtra) / 2.0);
    desiredDistFromBBCenter = Math.max(desiredDistFromBBCenter, globals.minDist);
    s.push("ddfbbc: " + desiredDistFromBBCenter.toFixed(3));

    //var direction = {
    //  x:   p0.y - p1.y,
    //  y: -(p0.x - p1.x),
    //};
    //
    //
    //normalize(direction);
    //var l = length(direction);
    //s.push(l);
    //if (l < 0.00001) {
    //  var temp = {
    //    x: center.x - camera.x,
    //    y: center.y - camera.y,
    //  };
    //  direction.x = temp.x;
    //  direction.y = temp.y;
    //  normalize(direction);
    //}

    var direction = {
      x: bbCenter.x - camera.x,
      y: bbCenter.y - camera.y,
    };
    normalize(direction);


    // Is this the right direction?
    var desiredAngle = Math.atan2(direction.x, -direction.y);
    var angle = wrapAngle(desiredAngle - camera.dir);
    s.push("dsagl: " + desiredAngle.toFixed(3));
    s.push("angle: " + angle.toFixed(3));


    var desiredPosition = {
      x: center.x + direction.x * -desiredDistFromBBCenter,
      y: center.y + direction.y * -desiredDistFromBBCenter,
    };

    // Draw desired position and desired direction
    ctx.fillStyle = "#FF0";
    drawCircle(desiredPosition, 5);
    ctx.save();
    ctx.translate(desiredPosition.x, desiredPosition.y);
    ctx.rotate(Math.atan2(direction.x, -direction.y));
    ctx.strokeStyle = "green";
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(0, -100);
    ctx.stroke();

    ctx.strokeStyle = "black";
    for (var ii = -1; ii <= 1; ii += 2) {
      ctx.save();
      ctx.rotate(camera.fov * ii * 0.5);
      ctx.beginPath();
      ctx.moveTo(0,0);
      ctx.lineTo(0, -1000);
      ctx.stroke();
      ctx.restore();
    }

    ctx.restore();

    // Draw camera
    ctx.fillStyle = "#F84";
    drawCircle(camera, playerRadius);
    ctx.save();
    ctx.translate(camera.x, camera.y);
    ctx.rotate(camera.dir);
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(0,-100);
    ctx.stroke();

    ctx.strokeStyle = "blue";
    for (var ii = -1; ii <= 1; ii += 2) {
      ctx.save();
      ctx.rotate(camera.fov * ii * 0.5);
      ctx.beginPath();
      ctx.moveTo(0,0);
      ctx.lineTo(0, -1000);
      ctx.stroke();
      ctx.restore();
    }

    ctx.restore();


    ctx.restore();

    camera.x += (desiredPosition.x - camera.x) * globals.positionSpeed;
    camera.y += (desiredPosition.y - camera.y) * globals.positionSpeed;

    camera.dir += wrapAngle(desiredAngle - camera.dir) * globals.targetSpeed;

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
    [ 'js/hand-1.3.7',
      'js/input',
      'js/misc',
    ],
    main);


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
 *     * Neither the name of Gregg Tavares. nor the names of its
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
import {PseudoRandomGenerator} from './random.js';
import {applyUrlSettings} from './misc.js';
import * as ui from './ui.js';
import {LocalSyncedClock} from './LocalSyncedClock.js';
import * as THREE from '../js/threejs/r108/build/three.module.js';

function $(id) {
  return document.getElementById(id);
}

// port of https://github.com/greggman/hft-syncThreeJS

// You can set these from the URL with
// http://path/syncThreeJS.html?x=500&shared.fieldOfView=60
// etc...
const globals = {
  master: false,

  // top left offset in rectangle of fullWidth x fullHeight for this instance.
  // width and height will be determined by the size of the canvas.
  x: 0,
  y: 0,

  shared: {
    // fullWidth and fullHeight define the size in css pixels of the entire display covering how ever
    // many windows/machines you have. For example, if you had 9 machines and each one
    // had a display 1024x768 and you put them all next to each other in a 3x3 grid
    // the fullWidth would be 1024*3 or 3072 and the fullHeight would be 768*3 or 2304
    fullWidth: 1000,
    fullHeight: 1000,

    // this is the field of view for fullHeight in degrees.
    fieldOfView: 50,

    zNear: 1,
    zFar: 10000,

    // Set to true to use window position for x,y above. See window-position-launcher.html
    useWindowPosition: true,

    // cameraPosition
    cameraPosition: {
      x: 0,
      y: 0,
      z: 0,
    },

    numBalls: 100,
  }
};
applyUrlSettings(globals);

function noop() { };

function handleSetMsg(data) {
  Object.assign(globals.shared, data);
}

const uis = [];
{
  const uiElement = $("ui");
  uiElement.style.display = "block";

  function addRange(label, propertyName, min, max) {  
    return ui.addRange(uiElement, label, globals.shared, propertyName, min, max, function() {
      sendToOtherWindows();
    });
  }

  // Only the server has ui
  uis.push(
    addRange("field of view", "fieldOfView", 2, 170),
    addRange("number of balls", "numBalls", 1, 200),
  );

  try {
    const data = JSON.parse(localStorage.getItem('data'));
    if (Object.keys(data).join(',') === Object.keys(globals.shared).join(',')) {
      Object.assign(globals.shared, data);
    }
  } catch (e) {

  }
    
  sendToOtherWindows();
}

function sendToOtherWindows() {
  localStorage.setItem('data', JSON.stringify(globals.shared));
}

window.addEventListener('storage', (e) => {
  const v = JSON.parse(e.newValue);
  switch (e.key) {
    case 'data':
      Object.assign(globals.shared, v);
      uis.forEach((u) => {
        u.update();
      });
      break;
  }
});

const clock = new LocalSyncedClock();

const canvas = $("c");
const renderer = new THREE.WebGLRenderer({canvas: canvas});

const camera = new THREE.PerspectiveCamera(20, 1, 1, 10000);
const scene = new THREE.Scene();
scene.background = new THREE.Color('white');

const sphereGeo = new THREE.SphereGeometry(40, 16, 8);

var light = new THREE.DirectionalLight(0xE0E0FF, 1);
light.position.set(200, 500, 200);
scene.add(light);
var light = new THREE.DirectionalLight(0xFFE0E0, 0.5);
light.position.set(-200, -500, -200);
scene.add(light);

const balls = [];

// Because we don't make all the balls at startup time we
// need separate random functions for making balls vs moving them.
const ballMakerRand = new PseudoRandomGenerator();
const ballMoveRand = new PseudoRandomGenerator();

function updateBalls() {
  while (balls.length < globals.shared.numBalls) {
    const color = hsl(ballMakerRand.random(), 0.8, 0.6);
    const material = new THREE.MeshPhongMaterial({
      color: color,
      specular: 0xFFFFFF,
      shininess: 30,
      flatShading: true,
    });
    const mesh = new THREE.Mesh(sphereGeo, material);
    mesh.position.x = ballMakerRand.randomRange(-1000, 1000);
    mesh.position.y = ballMakerRand.randomRange(-1000, 1000);
    mesh.position.z = ballMakerRand.randomRange(-1000, 1000);

    // Put the balls on a node that's at tha origin. We can the just rotate this node
    // and the ball will orbit the center of the world.
    const center = new THREE.Object3D();

    // Give this node a random rotation. We'll just rotate the Z axis every frame
    // and it will have a unique orbit.
    center.rotation.x = ballMakerRand.randomRange(0, Math.PI);
    center.rotation.y = ballMakerRand.randomRange(0, Math.PI);
    center.add(mesh);
    scene.add(center);
    balls.push({center: center, mesh: mesh});
  }

  const time = clock.getTime();
  ballMoveRand.reset();
  for (let ii = 0; ii < balls.length; ++ii) {
    const ball = balls[ii];
    ball.mesh.visible = ii < globals.shared.numBalls;
    const speed = ballMoveRand.randomRange(0.2, 0.4);
    ball.center.rotation.z = speed * time;
  }
}

function hsl(h, s, l) {
  return `hsl(${(h * 360 | 0)},${(s * 100 | 0)}%,${(l * 100 | 0)}%)`;
}

function resizeRendererToDisplaySize(renderer) {
  const canvas = renderer.domElement;
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  const needResize = canvas.width !== width || canvas.height !== height;
  if (needResize) {
    renderer.setSize(width, height, false);
  }
  return needResize;
}

function render() {
  resizeRendererToDisplaySize(renderer);

  if (globals.shared.useWindowPosition) {
    globals.x = window.screenX;
    globals.y = window.screenY;
  }

  camera.setViewOffset(
      globals.shared.fullWidth, globals.shared.fullHeight,
      globals.x, globals.y,
      canvas.clientWidth, canvas.clientHeight);
  camera.aspect = globals.shared.fullWidth / globals.shared.fullHeight;
  camera.fov    = globals.shared.fieldOfView;
  camera.zNear  = globals.shared.zNear;
  camera.zFar   = globals.shared.zFar;
  camera.position.x = globals.shared.cameraPosition.x;
  camera.position.y = globals.shared.cameraPosition.y;
  camera.position.z = 800;
  camera.updateProjectionMatrix();

  updateBalls();

  renderer.render(scene, camera);

  requestAnimationFrame(render);
}
render();




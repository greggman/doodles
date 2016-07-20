var ctx = document.querySelector("canvas").getContext("2d");

function resize(canvas) {
  var width = canvas.clientWidth;
  var height = canvas.clientHeight;
  if (width != canvas.width || height != canvas.height) {
    canvas.width = width;
    canvas.height = height;
  }
}

var colorSets = [
  [
    "pink",
    "white",
    "pink",
    "gray",
  ],
  [
    "lightblue",
    "lightgreen",
  ],
  [
    "rgb(255, 192, 255)",
    "pink",
  ],
];

var colorSetNdx = 0;
var colorNdx = 0;
var colors = colorSets[0];

ctx.canvas.addEventListener('mousemove', function(e) {
  resize(ctx.canvas);
  var rect = ctx.canvas.getBoundingClientRect();

  var x = e.clientX - rect.left;
  var y = e.clientY - rect.top;

  ctx.fillStyle = colors[colorNdx];
  colorNdx = (colorNdx + 1) % colors.length;
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI * 2, false);
  ctx.fill();
});

ctx.canvas.addEventListener('click', function(e) {
  colorSetNdx = (colorSetNdx + 1) % colorSets.length;
  colors = colorSets[colorSetNdx];
});

function draw(time) {
  ctx.save();
  var w = ctx.canvas.width;
  var h = ctx.canvas.height;
  var hw = w / 2;
  var hh = h / 2;
  ctx.translate(hw, hh);
  ctx.rotate(time * 0.1);
  for (var ii = 0; ii < 100; ++ii) {
    ctx.rotate(Math.sin(time * 0.1) * 0.2);
    ctx.strokeRect(-hw, -hh, w, h);
    ctx.scale(0.9, 0.9);
  }
  ctx.restore();
}

var oldTime = 0;
function render(time) {
  time *= 0.001;
  resize(ctx.canvas);

  ctx.strokeStyle = "white";
  draw(oldTime);
  ctx.strokeStyle = "red";
  draw(time);
  oldTime = time;

  requestAnimationFrame(render);
}
requestAnimationFrame(render);


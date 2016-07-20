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


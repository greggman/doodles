requirejs([
    './tweeny',
    './strings',
  ], function(
    tweeny,
    strings
  ) {

  var $ = document.getElementById.bind(document);
  var ctx = document.createElement("canvas").getContext("2d");

  var template = $("template").text;
  Object.keys(tweeny.fn).forEach(function(name) {

    var width  = ctx.canvas.width;
    var height = ctx.canvas.height;
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    var ease = tweeny.fn[name];
    var fn = function(u) {
      var v = ease(u);
      return (0.25 + v * 0.5) * height;
    };

    ctx.lineWidth = 2;
    ctx.strokeStyle = "#CCF";
    ctx.beginPath();
    ctx.moveTo(    0, height * 0.25);
    ctx.lineTo(width, height * 0.25);
    ctx.moveTo(    0, height * 0.75);
    ctx.lineTo(width, height * 0.75);
    ctx.stroke();

    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.moveTo(0, fn(0));
    var steps = 100;
    for (var ii = 0; ii <= steps; ++ii) {
      var u = ii / steps;
      var v = fn(u);
      ctx.lineTo(u * width, v);
    }
    ctx.stroke();

    var html = strings.replaceParams(template, {
      name: name,
      img: ctx.canvas.toDataURL(),
    });
    var div = document.createElement("div");
    div.innerHTML = html;
    while (div.firstChild) {
      var element = div.firstChild;
      div.removeChild(element);
      document.body.appendChild(element);
    }
  });
});

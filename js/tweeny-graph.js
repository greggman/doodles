requirejs([
    './tweeny',
    './strings',
  ], function(
    tweeny,
    strings
  ) {

  const $ = document.getElementById.bind(document);
  const ctx = document.createElement("canvas").getContext("2d");

  const template = $("template").text;
  const dots = Object.keys(tweeny.fn).map(function(name) {
    const width  = ctx.canvas.width;
    const height = ctx.canvas.height;
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
    const div = document.createElement("div");
    div.innerHTML = html;
    const dot = div.querySelector(".dot");
    while (div.firstChild) {
      var element = div.firstChild;
      div.removeChild(element);
      document.body.appendChild(element);
    }

    return {
      dot: dot,
      ease: ease,
    };
  });

  function px(v) {
    return `${v.toFixed(0)}px`;
  }
  function move(time) {
    time *= 0.001;
    time  = time % 1;
    dots.forEach((dot) => {
      const elem = dot.dot;
      const pos = dot.ease(time);
      elem.style.left = px(pos * (elem.parentElement.clientWidth - elem.clientWidth));
    });
    requestAnimationFrame(move);
  }
  requestAnimationFrame(move);
});

requirejs([
    './chroma.min',
    './strings',
  ], function(
    chroma,
    strings
  ) {

  var $ = document.getElementById.bind(document);
  var template = $("template").text;
  var labelTemplate = $("label").text;

  function insertHTML(html) {
    var div = document.createElement("div");
    div.innerHTML = html;
    while (div.firstChild) {
      var element = div.firstChild;
      div.removeChild(element);
      document.body.appendChild(element);
    }
  }

  function makeSwatch(colorFn, label) {
    insertHTML(strings.replaceParams(labelTemplate, {
      label: label,
    }));
    for (var ii = 0; ii < 64; ++ii) {
      var colorInfo = colorFn(ii);

      var html = strings.replaceParams(template, {
        index: colorInfo.label,
        color: colorInfo.color.css(),
        textColor: colorInfo.color.luminance() > 0.5 ? "black" : "white",
      });

      insertHTML(html);
    }
  }

  function hsvColor(colorNdx) {
    var hue = (((colorNdx & 0x01) << 5) |
               ((colorNdx & 0x02) << 3) |
               ((colorNdx & 0x04) << 1) |
               ((colorNdx & 0x08) >> 1) |
               ((colorNdx & 0x10) >> 3) |
               ((colorNdx & 0x20) >> 5)) / 64.0;
    var sat   = (colorNdx & 0x10) != 0 ? 0.5 : 1.0;
    var value = (colorNdx & 0x20) != 0 ? 0.5 : 1.0;

    return {
      color: chroma(hue * 360, sat, value, 'hsv'),
      label: "#" + colorNdx + "<br/>h: " + (hue * 360).toFixed(0) + "<br/>s: " + sat.toFixed(1) + "<br/>v: " + value.toFixed(1),
    };
  }

  function hslColor(colorNdx) {
    var hue = (((colorNdx & 0x01) << 5) |
               ((colorNdx & 0x02) << 3) |
               ((colorNdx & 0x04) << 1) |
               ((colorNdx & 0x08) >> 1) |
               ((colorNdx & 0x10) >> 3) |
               ((colorNdx & 0x20) >> 5)) / 64.0;
    var sat   = 1;(colorNdx & 0x20) != 0 ? 0.5  : 1.0;
    var light = (colorNdx & 0x10) != 0 ? 0.75 : 0.5;
    if (colorNdx & 0x20) {
      light = 0.25;
    }
    if (colorNdx >= 0x30) {
      sat = 0.35;
    }

    return {
      color: chroma(hue * 360, sat, light, 'hsl'),
      label: "#" + colorNdx + "<br/>h: " + (hue * 360).toFixed(0) + "<br/>s: " + sat.toFixed(1) + "<br/>l: " + light.toFixed(1),
    };
  }

  function hftGamepadAPI(ndx) {
    var majorHue = ndx % 4;
    var minorHue = ndx / 4 | 0;
    var tinyHue  = (ndx & 0x10) ? 0 : 1;
    var hue = (majorHue * 90 + minorHue * 22.5 + tinyHue * 12.5) % 360;
    var saturation = (ndx & 0x10) ? 1 : 0.4;
    var value = (ndx & 0x20) ? 0.5 : 1;
    return {
      color: chroma.hsv(hue, saturation, value),
      label: "#" + ndx + "<br/>h: " + (hue).toFixed(0) + "<br/>s: " + saturation.toFixed(1) + "<br/>v: " + value.toFixed(1),
    }
  }

  makeSwatch(hsvColor, "HSV Based");
  makeSwatch(hslColor, "HSL Based");
  makeSwatch(hftGamepadAPI, "HFT-Gamepad-API");
});

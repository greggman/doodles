importScripts(
    // from https://github.com/eugeneware/jpeg-js
    'js/JPG-decoder.js',
    // from https://github.com/photopea/UPNG.js
    'js/UPNG.js',
);

let imgNdx = 0;
let imgAspect = 1;

const imageUrls = [
  'https://i.imgur.com/KjUybBD.png',
  'https://i.imgur.com/AyOufBk.jpg',
  'https://i.imgur.com/UKBsvV0.jpg',
  'https://i.imgur.com/TSiyiJv.jpg',
];

function decodePNG(arraybuffer) {
  return UPNG.decode(arraybuffer)
}

function decodeJPG(arrayBuffer) {
  return decode(new Uint8Array(arrayBuffer), true);
}

const decoders = {
  'image/png': decodePNG,
  'image/jpeg': decodeJPG,
  'image/jpg': decodeJPG,
};

async function loadNextImage() {
  const url = \`\${imageUrls[imgNdx]}?cachebust=\${performance.now()}\`;
  imgNdx = (imgNdx + 1) % imageUrls.length;
  const res = await fetch(url, {mode: 'cors'});
  const arrayBuffer = await res.arrayBuffer();
  const type = res.headers.get('Content-Type');
  let decoder = decoders[type];
  if (!decoder) {
    console.error('unknown image type:', type);
  }
  const imgData = decoder(arrayBuffer);
  postMessage({
    width: imgData.width,
    height: imgData.height,
    arrayBuffer: imgData.data.buffer,
  }, [imgData.data.buffer]);
}

onmessage = loadNextImage;


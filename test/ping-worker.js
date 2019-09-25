console.log('Started worker');

self.postMessage('Hello');

self.onmessage = (e) => {
  self.postMessage(`relayed from worker: ${e.data}`);
};


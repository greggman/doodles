console.log('Started worker');

self.postMessage('Hello');

self.onMessage = (e) => {
  self.postMessage(`from worker: ${e.data}`);
};


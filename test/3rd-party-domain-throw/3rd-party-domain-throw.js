HTMLElement.prototype.test = function() {
  throw new Error('this is a test 1');
};

window.test = function() {
    throw new Error('this is a test 2');
};

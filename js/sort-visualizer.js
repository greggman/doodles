var SortVisualizer = function(canvas) {
  this.ctx = canvas.getContext("2d");
};

SortVisualizer.prototype.get = function(id) {
  var v = (this.num && this.num[id]) ? this.num[id] : 0;
  if (id == 'swap') {
    v /= 2;
  }
  return v;
};

SortVisualizer.prototype.runSort = function(sortFn, size, type) {
  type = type || 'random';
  size = size || 50;
  this.steps = [];
  var self = this;

  var ascendingValues = function(ii, size) {
    return ii;
  };
  var descendingValues = function(ii, size) {
    return size - ii - 1;
  };
  var manyEqualValues = function(ii, size) {
    return (1 + Math.floor(ii / 10)) * 10;
  };
  var equalValues = function(ii, size) {
    return Math.floor(size / 2);
  };
  var totallyRandom = function(ii, size) {
    return self.rand(size);
  };
  var slightlyRandom = function(ii, size) {
    return Math.min(size - 1, Math.max(0, ii - 1 + self.rand(3)));
  };
  var makeRandomArray = function(size, valueFn, swapIndexFn) {
    var array = [];
    for (var ii = 0; ii < size; ++ii) {
      array.push(valueFn(ii, size));
    }
    if (swapIndexFn) {
      for (var ii = 0; ii < size; ++ii) {
        var a = swapIndexFn(ii, size);
        var b = swapIndexFn(ii, size);
        var t = array[a];
        array[a] = array[b];
        array[b] = t;
      }
    }
    for (var ii = 0; ii < size; ++ii) {
      self.addStep_(ii, array[ii], 'start');
    }
    return array;
  };

  var types = {
    random:     { valueFn: ascendingValues, swapFn: totallyRandom, },
    similar:    { valueFn: ascendingValues, swapFn: slightlyRandom, },
    ascending:  { valueFn: ascendingValues, },
    descending: { valueFn: descendingValues, },
    mostEqual:  { valueFn: manyEqualValues, swapFn: totallyRandom, },
    equal:      { valueFn: equalValues, },
  };
  var t = types[type];
  var array = makeRandomArray(size, t.valueFn, t.swapFn);
  sortFn(array, this);
};

SortVisualizer.prototype.addStep_ = function(index, value, type) {
  this.steps.push({index: index, value: value, type: type});
};

SortVisualizer.prototype.playback = function(fn) {
  var index = 0;
  var self = this;
  var steps = this.steps;
  var ctx = this.ctx;
  var size = 0;
  var maxValue = 0;

  this.num = {cycles: 0};

  var totalCycles = 0;
  var cycleCount = 0;
  var cyclesPerFrame = 10;
  var columnState = [];
  var columnsModified = [];
  var time = 0;
  var timeToRestore = 20;

  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  steps.forEach(function(step) {
    switch (step.type) {
    case 'start':
      size = Math.max(size, step.index + 1);
      maxValue = Math.max(maxValue, step.value);
      columnState[step.index] = {index: step.index, time: 0, value: step.value, state: 'start'};
      break;
    default:
      self.num[step.type] = self.num[step.type] ? (self.num[step.type] + 1) : 1;
      break;
    }
  });

  var queueTask = function(fn) {
    requestAnimFrame(fn);
    //setTimeout(fn, 1000);
  };

  var queueNextStep = function() {
    queueTask(processStep);
  };

  var modifyColumn = function(step) {
    var state = columnState[step.index];
    state.value = step.value;
    if (state.state == 'start' || state.state == 'cmp') {
      state.state = step.type;
      state.time  = time + timeToRestore;
      return true;
    }
    return false;
  };

  var drawColumn = function(step, color) {
    var width = ctx.canvas.width / size;
    var height = ctx.canvas.height * step.value / maxValue;
    var x = width * step.index;
    var y = ctx.canvas.height - height;
    ctx.fillStyle = "black";
    ctx.fillRect(x, 0, width, ctx.canvas.height);
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
  };

  var restoreColumns = function() {
    var checkTime = time;
    columnState.forEach(function(state) {
      if (state.state != 'start') {
        if (state.time < checkTime) {
          state.state = 'start';
          drawColumn(state, 'white');
        }
      }
    });
  };

  // Each function returns the number of cycles it takes.
  // TODO: Seems like we could simulate cache times since we
  // know which elements have been references at what time.
  var stepFuncs = {
    start: function(step) {
      drawColumn(step, "white");
      return 0;
    },
    cmp: function(step) {
      if (modifyColumn(step)) {
        drawColumn(step, "blue");
      }
      return 3;
    },
    swap: function(step) {
      drawColumn(step, "red");
      modifyColumn(step);
      return 6;
    },
    copy: function(step) {
      drawColumn(step, "purple");
      modifyColumn(step);
      return 4;
    },
    set: function(step) {
      drawColumn(step, "orange");
      modifyColumn(step);
      return 2;
    },
  };

  var drawAllColumns = function() {
    var index = 0;
    var drawNextColumn = function() {
      if (index < columnState.length) {
        columnState[index].state = 'start';
        drawColumn(columnState[index++], "rgb(0,255,0)");
        restoreColumns();
        queueTask(drawNextColumn);
        ++time;
      }
    };
    drawNextColumn();
  };

  var processStep = function() {
    var done = false;
    while (!done) {
      if (index >= steps.length) {
        self.num.cycles = totalCycles;
        fn();
        drawAllColumns();
        done = true;
      } else {
        var step = steps[index++];
        var typeFn = stepFuncs[step.type];
        if (!typeFn) {
          throw("unknown step type");
        }
        var cycles = typeFn(step);
        totalCycles += cycles;
        cycleCount += cycles;
        if (cycleCount >= cyclesPerFrame) {
          cycleCount -= cyclesPerFrame;
          queueNextStep();
          done = true;
        }
      }
    }
    ++time;
    restoreColumns();
  };
  processStep();
};

SortVisualizer.prototype.rand = function(range) {
  return Math.floor(Math.random() * range);
};

SortVisualizer.prototype.swap = function(array, a, b) {
  var temp = array[a];
  array[a] = array[b];
  array[b] = temp;
  this.addStep_(a, array[a], 'swap');
  this.addStep_(b, array[b], 'swap');
};

SortVisualizer.prototype.copy = function(array, src, dst) {
  array[dst] = array[src];
  this.addStep_(dst, array[dst], 'copy');
};

SortVisualizer.prototype.set = function(array, ndx, value) {
  array[ndx] = value;
  this.addStep_(ndx, value, 'set');
};

SortVisualizer.prototype.cmp = function(array, ndx, value) {
  this.addStep_(ndx, array[ndx], 'cmp');
  return array[ndx] - value;
};

SortVisualizer.prototype.gt = function(array, ndx, value) {
  return this.cmp(array, ndx, value) > 0;
};

SortVisualizer.prototype.lt = function(array, ndx, value) {
  return this.cmp(array, ndx, value) < 0;
};

SortVisualizer.prototype.ge = function(array, ndx, value) {
  return this.cmp(array, ndx, value) >= 0;
};

SortVisualizer.prototype.le = function(array, ndx, value) {
  return this.cmp(array, ndx, value) <= 0;
};

SortVisualizer.prototype.eq = function(array, ndx, value) {
  return this.cmp(array, ndx, value) == 0;
};

SortVisualizer.prototype.ne = function(array, ndx, value) {
  return this.cmp(array, ndx, value) != 0;
};


/*!
 * BSD License
 * 
 * For yoga software
 * 
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 * 
 *  * Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 * 
 *  * Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 * 
 *  * Neither the name Facebook nor the names of its contributors may be used to
 *    endorse or promote products derived from this software without specific
 *    prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
 * ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Yoga"] = factory();
	else
		root["Yoga"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, Buffer) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, wrapper) {
  if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
    return wrapper;
  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if (typeof module == "object" && module.exports) module.exports = wrapper;else (root.nbind = root.nbind || {}).init = wrapper;
})(this, function (Module, cb) {
  if (typeof Module == "function") {
    cb = Module;Module = {};
  }Module.onRuntimeInitialized = function (init, cb) {
    return function () {
      if (init) init.apply(this, arguments);try {
        Module.ccall("nbind_init");
      } catch (err) {
        cb(err);return;
      }cb(null, { bind: Module._nbind_value, reflect: Module.NBind.reflect, queryType: Module.NBind.queryType, toggleLightGC: Module.toggleLightGC, lib: Module });
    };
  }(Module.onRuntimeInitialized, cb);var Module;if (!Module) Module = (typeof Module !== "undefined" ? Module : null) || {};var moduleOverrides = {};for (var key in Module) {
    if (Module.hasOwnProperty(key)) {
      moduleOverrides[key] = Module[key];
    }
  }var ENVIRONMENT_IS_WEB = false;var ENVIRONMENT_IS_WORKER = false;var ENVIRONMENT_IS_NODE = false;var ENVIRONMENT_IS_SHELL = false;if (Module["ENVIRONMENT"]) {
    if (Module["ENVIRONMENT"] === "WEB") {
      ENVIRONMENT_IS_WEB = true;
    } else if (Module["ENVIRONMENT"] === "WORKER") {
      ENVIRONMENT_IS_WORKER = true;
    } else if (Module["ENVIRONMENT"] === "NODE") {
      ENVIRONMENT_IS_NODE = true;
    } else if (Module["ENVIRONMENT"] === "SHELL") {
      ENVIRONMENT_IS_SHELL = true;
    } else {
      throw new Error("The provided Module['ENVIRONMENT'] value is not valid. It must be one of: WEB|WORKER|NODE|SHELL.");
    }
  } else {
    ENVIRONMENT_IS_WEB = typeof window === "object";ENVIRONMENT_IS_WORKER = typeof importScripts === "function";ENVIRONMENT_IS_NODE = typeof process === "object" && "function" === "function" && !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_WORKER;ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;
  }if (ENVIRONMENT_IS_NODE) {
    if (!Module["print"]) Module["print"] = console.log;if (!Module["printErr"]) Module["printErr"] = console.warn;var nodeFS;var nodePath;Module["read"] = function read(filename, binary) {
      if (!nodeFS) nodeFS = {}("");if (!nodePath) nodePath = {}("");filename = nodePath["normalize"](filename);var ret = nodeFS["readFileSync"](filename);return binary ? ret : ret.toString();
    };Module["readBinary"] = function readBinary(filename) {
      var ret = Module["read"](filename, true);if (!ret.buffer) {
        ret = new Uint8Array(ret);
      }assert(ret.buffer);return ret;
    };Module["load"] = function load(f) {
      globalEval(read(f));
    };if (!Module["thisProgram"]) {
      if (process["argv"].length > 1) {
        Module["thisProgram"] = process["argv"][1].replace(/\\/g, "/");
      } else {
        Module["thisProgram"] = "unknown-program";
      }
    }Module["arguments"] = process["argv"].slice(2);if (true) {
      module["exports"] = Module;
    }process["on"]("uncaughtException", function (ex) {
      if (!(ex instanceof ExitStatus)) {
        throw ex;
      }
    });Module["inspect"] = function () {
      return "[Emscripten Module object]";
    };
  } else if (ENVIRONMENT_IS_SHELL) {
    if (!Module["print"]) Module["print"] = print;if (typeof printErr != "undefined") Module["printErr"] = printErr;if (typeof read != "undefined") {
      Module["read"] = read;
    } else {
      Module["read"] = function read() {
        throw "no read() available";
      };
    }Module["readBinary"] = function readBinary(f) {
      if (typeof readbuffer === "function") {
        return new Uint8Array(readbuffer(f));
      }var data = read(f, "binary");assert(typeof data === "object");return data;
    };if (typeof scriptArgs != "undefined") {
      Module["arguments"] = scriptArgs;
    } else if (typeof arguments != "undefined") {
      Module["arguments"] = arguments;
    }if (typeof quit === "function") {
      Module["quit"] = function (status, toThrow) {
        quit(status);
      };
    }
  } else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
    Module["read"] = function read(url) {
      var xhr = new XMLHttpRequest();xhr.open("GET", url, false);xhr.send(null);return xhr.responseText;
    };if (ENVIRONMENT_IS_WORKER) {
      Module["readBinary"] = function read(url) {
        var xhr = new XMLHttpRequest();xhr.open("GET", url, false);xhr.responseType = "arraybuffer";xhr.send(null);return xhr.response;
      };
    }Module["readAsync"] = function readAsync(url, onload, onerror) {
      var xhr = new XMLHttpRequest();xhr.open("GET", url, true);xhr.responseType = "arraybuffer";xhr.onload = function xhr_onload() {
        if (xhr.status == 200 || xhr.status == 0 && xhr.response) {
          onload(xhr.response);
        } else {
          onerror();
        }
      };xhr.onerror = onerror;xhr.send(null);
    };if (typeof arguments != "undefined") {
      Module["arguments"] = arguments;
    }if (typeof console !== "undefined") {
      if (!Module["print"]) Module["print"] = function print(x) {
        console.log(x);
      };if (!Module["printErr"]) Module["printErr"] = function printErr(x) {
        console.warn(x);
      };
    } else {
      var TRY_USE_DUMP = false;if (!Module["print"]) Module["print"] = TRY_USE_DUMP && typeof dump !== "undefined" ? function (x) {
        dump(x);
      } : function (x) {};
    }if (ENVIRONMENT_IS_WORKER) {
      Module["load"] = importScripts;
    }if (typeof Module["setWindowTitle"] === "undefined") {
      Module["setWindowTitle"] = function (title) {
        document.title = title;
      };
    }
  } else {
    throw "Unknown runtime environment. Where are we?";
  }function globalEval(x) {
    eval.call(null, x);
  }if (!Module["load"] && Module["read"]) {
    Module["load"] = function load(f) {
      globalEval(Module["read"](f));
    };
  }if (!Module["print"]) {
    Module["print"] = function () {};
  }if (!Module["printErr"]) {
    Module["printErr"] = Module["print"];
  }if (!Module["arguments"]) {
    Module["arguments"] = [];
  }if (!Module["thisProgram"]) {
    Module["thisProgram"] = "./this.program";
  }if (!Module["quit"]) {
    Module["quit"] = function (status, toThrow) {
      throw toThrow;
    };
  }Module.print = Module["print"];Module.printErr = Module["printErr"];Module["preRun"] = [];Module["postRun"] = [];for (var key in moduleOverrides) {
    if (moduleOverrides.hasOwnProperty(key)) {
      Module[key] = moduleOverrides[key];
    }
  }moduleOverrides = undefined;var Runtime = { setTempRet0: function (value) {
      tempRet0 = value;return value;
    }, getTempRet0: function () {
      return tempRet0;
    }, stackSave: function () {
      return STACKTOP;
    }, stackRestore: function (stackTop) {
      STACKTOP = stackTop;
    }, getNativeTypeSize: function (type) {
      switch (type) {case "i1":case "i8":
          return 1;case "i16":
          return 2;case "i32":
          return 4;case "i64":
          return 8;case "float":
          return 4;case "double":
          return 8;default:
          {
            if (type[type.length - 1] === "*") {
              return Runtime.QUANTUM_SIZE;
            } else if (type[0] === "i") {
              var bits = parseInt(type.substr(1));assert(bits % 8 === 0);return bits / 8;
            } else {
              return 0;
            }
          }}
    }, getNativeFieldSize: function (type) {
      return Math.max(Runtime.getNativeTypeSize(type), Runtime.QUANTUM_SIZE);
    }, STACK_ALIGN: 16, prepVararg: function (ptr, type) {
      if (type === "double" || type === "i64") {
        if (ptr & 7) {
          assert((ptr & 7) === 4);ptr += 4;
        }
      } else {
        assert((ptr & 3) === 0);
      }return ptr;
    }, getAlignSize: function (type, size, vararg) {
      if (!vararg && (type == "i64" || type == "double")) return 8;if (!type) return Math.min(size, 8);return Math.min(size || (type ? Runtime.getNativeFieldSize(type) : 0), Runtime.QUANTUM_SIZE);
    }, dynCall: function (sig, ptr, args) {
      if (args && args.length) {
        return Module["dynCall_" + sig].apply(null, [ptr].concat(args));
      } else {
        return Module["dynCall_" + sig].call(null, ptr);
      }
    }, functionPointers: [], addFunction: function (func) {
      for (var i = 0; i < Runtime.functionPointers.length; i++) {
        if (!Runtime.functionPointers[i]) {
          Runtime.functionPointers[i] = func;return 2 * (1 + i);
        }
      }throw "Finished up all reserved function pointers. Use a higher value for RESERVED_FUNCTION_POINTERS.";
    }, removeFunction: function (index) {
      Runtime.functionPointers[(index - 2) / 2] = null;
    }, warnOnce: function (text) {
      if (!Runtime.warnOnce.shown) Runtime.warnOnce.shown = {};if (!Runtime.warnOnce.shown[text]) {
        Runtime.warnOnce.shown[text] = 1;Module.printErr(text);
      }
    }, funcWrappers: {}, getFuncWrapper: function (func, sig) {
      assert(sig);if (!Runtime.funcWrappers[sig]) {
        Runtime.funcWrappers[sig] = {};
      }var sigCache = Runtime.funcWrappers[sig];if (!sigCache[func]) {
        if (sig.length === 1) {
          sigCache[func] = function dynCall_wrapper() {
            return Runtime.dynCall(sig, func);
          };
        } else if (sig.length === 2) {
          sigCache[func] = function dynCall_wrapper(arg) {
            return Runtime.dynCall(sig, func, [arg]);
          };
        } else {
          sigCache[func] = function dynCall_wrapper() {
            return Runtime.dynCall(sig, func, Array.prototype.slice.call(arguments));
          };
        }
      }return sigCache[func];
    }, getCompilerSetting: function (name) {
      throw "You must build with -s RETAIN_COMPILER_SETTINGS=1 for Runtime.getCompilerSetting or emscripten_get_compiler_setting to work";
    }, stackAlloc: function (size) {
      var ret = STACKTOP;STACKTOP = STACKTOP + size | 0;STACKTOP = STACKTOP + 15 & -16;return ret;
    }, staticAlloc: function (size) {
      var ret = STATICTOP;STATICTOP = STATICTOP + size | 0;STATICTOP = STATICTOP + 15 & -16;return ret;
    }, dynamicAlloc: function (size) {
      var ret = HEAP32[DYNAMICTOP_PTR >> 2];var end = (ret + size + 15 | 0) & -16;HEAP32[DYNAMICTOP_PTR >> 2] = end;if (end >= TOTAL_MEMORY) {
        var success = enlargeMemory();if (!success) {
          HEAP32[DYNAMICTOP_PTR >> 2] = ret;return 0;
        }
      }return ret;
    }, alignMemory: function (size, quantum) {
      var ret = size = Math.ceil(size / (quantum ? quantum : 16)) * (quantum ? quantum : 16);return ret;
    }, makeBigInt: function (low, high, unsigned) {
      var ret = unsigned ? +(low >>> 0) + +(high >>> 0) * +4294967296 : +(low >>> 0) + +(high | 0) * +4294967296;return ret;
    }, GLOBAL_BASE: 8, QUANTUM_SIZE: 4, __dummy__: 0 };Module["Runtime"] = Runtime;var ABORT = 0;var EXITSTATUS = 0;function assert(condition, text) {
    if (!condition) {
      abort("Assertion failed: " + text);
    }
  }function getCFunc(ident) {
    var func = Module["_" + ident];if (!func) {
      try {
        func = eval("_" + ident);
      } catch (e) {}
    }assert(func, "Cannot call unknown function " + ident + " (perhaps LLVM optimizations or closure removed it?)");return func;
  }var cwrap, ccall;(function () {
    var JSfuncs = { "stackSave": function () {
        Runtime.stackSave();
      }, "stackRestore": function () {
        Runtime.stackRestore();
      }, "arrayToC": function (arr) {
        var ret = Runtime.stackAlloc(arr.length);writeArrayToMemory(arr, ret);return ret;
      }, "stringToC": function (str) {
        var ret = 0;if (str !== null && str !== undefined && str !== 0) {
          var len = (str.length << 2) + 1;ret = Runtime.stackAlloc(len);stringToUTF8(str, ret, len);
        }return ret;
      } };var toC = { "string": JSfuncs["stringToC"], "array": JSfuncs["arrayToC"] };ccall = function ccallFunc(ident, returnType, argTypes, args, opts) {
      var func = getCFunc(ident);var cArgs = [];var stack = 0;if (args) {
        for (var i = 0; i < args.length; i++) {
          var converter = toC[argTypes[i]];if (converter) {
            if (stack === 0) stack = Runtime.stackSave();cArgs[i] = converter(args[i]);
          } else {
            cArgs[i] = args[i];
          }
        }
      }var ret = func.apply(null, cArgs);if (returnType === "string") ret = Pointer_stringify(ret);if (stack !== 0) {
        if (opts && opts.async) {
          EmterpreterAsync.asyncFinalizers.push(function () {
            Runtime.stackRestore(stack);
          });return;
        }Runtime.stackRestore(stack);
      }return ret;
    };var sourceRegex = /^function\s*[a-zA-Z$_0-9]*\s*\(([^)]*)\)\s*{\s*([^*]*?)[\s;]*(?:return\s*(.*?)[;\s]*)?}$/;function parseJSFunc(jsfunc) {
      var parsed = jsfunc.toString().match(sourceRegex).slice(1);return { arguments: parsed[0], body: parsed[1], returnValue: parsed[2] };
    }var JSsource = null;function ensureJSsource() {
      if (!JSsource) {
        JSsource = {};for (var fun in JSfuncs) {
          if (JSfuncs.hasOwnProperty(fun)) {
            JSsource[fun] = parseJSFunc(JSfuncs[fun]);
          }
        }
      }
    }cwrap = function cwrap(ident, returnType, argTypes) {
      argTypes = argTypes || [];var cfunc = getCFunc(ident);var numericArgs = argTypes.every(function (type) {
        return type === "number";
      });var numericRet = returnType !== "string";if (numericRet && numericArgs) {
        return cfunc;
      }var argNames = argTypes.map(function (x, i) {
        return "$" + i;
      });var funcstr = "(function(" + argNames.join(",") + ") {";var nargs = argTypes.length;if (!numericArgs) {
        ensureJSsource();funcstr += "var stack = " + JSsource["stackSave"].body + ";";for (var i = 0; i < nargs; i++) {
          var arg = argNames[i],
              type = argTypes[i];if (type === "number") continue;var convertCode = JSsource[type + "ToC"];funcstr += "var " + convertCode.arguments + " = " + arg + ";";funcstr += convertCode.body + ";";funcstr += arg + "=(" + convertCode.returnValue + ");";
        }
      }var cfuncname = parseJSFunc(function () {
        return cfunc;
      }).returnValue;funcstr += "var ret = " + cfuncname + "(" + argNames.join(",") + ");";if (!numericRet) {
        var strgfy = parseJSFunc(function () {
          return Pointer_stringify;
        }).returnValue;funcstr += "ret = " + strgfy + "(ret);";
      }if (!numericArgs) {
        ensureJSsource();funcstr += JSsource["stackRestore"].body.replace("()", "(stack)") + ";";
      }funcstr += "return ret})";return eval(funcstr);
    };
  })();Module["ccall"] = ccall;Module["cwrap"] = cwrap;function setValue(ptr, value, type, noSafe) {
    type = type || "i8";if (type.charAt(type.length - 1) === "*") type = "i32";switch (type) {case "i1":
        HEAP8[ptr >> 0] = value;break;case "i8":
        HEAP8[ptr >> 0] = value;break;case "i16":
        HEAP16[ptr >> 1] = value;break;case "i32":
        HEAP32[ptr >> 2] = value;break;case "i64":
        tempI64 = [value >>> 0, (tempDouble = value, +Math_abs(tempDouble) >= +1 ? tempDouble > +0 ? (Math_min(+Math_floor(tempDouble / +4294967296), +4294967295) | 0) >>> 0 : ~~+Math_ceil((tempDouble - +(~~tempDouble >>> 0)) / +4294967296) >>> 0 : 0)], HEAP32[ptr >> 2] = tempI64[0], HEAP32[ptr + 4 >> 2] = tempI64[1];break;case "float":
        HEAPF32[ptr >> 2] = value;break;case "double":
        HEAPF64[ptr >> 3] = value;break;default:
        abort("invalid type for setValue: " + type);}
  }Module["setValue"] = setValue;function getValue(ptr, type, noSafe) {
    type = type || "i8";if (type.charAt(type.length - 1) === "*") type = "i32";switch (type) {case "i1":
        return HEAP8[ptr >> 0];case "i8":
        return HEAP8[ptr >> 0];case "i16":
        return HEAP16[ptr >> 1];case "i32":
        return HEAP32[ptr >> 2];case "i64":
        return HEAP32[ptr >> 2];case "float":
        return HEAPF32[ptr >> 2];case "double":
        return HEAPF64[ptr >> 3];default:
        abort("invalid type for setValue: " + type);}return null;
  }Module["getValue"] = getValue;var ALLOC_NORMAL = 0;var ALLOC_STACK = 1;var ALLOC_STATIC = 2;var ALLOC_DYNAMIC = 3;var ALLOC_NONE = 4;Module["ALLOC_NORMAL"] = ALLOC_NORMAL;Module["ALLOC_STACK"] = ALLOC_STACK;Module["ALLOC_STATIC"] = ALLOC_STATIC;Module["ALLOC_DYNAMIC"] = ALLOC_DYNAMIC;Module["ALLOC_NONE"] = ALLOC_NONE;function allocate(slab, types, allocator, ptr) {
    var zeroinit, size;if (typeof slab === "number") {
      zeroinit = true;size = slab;
    } else {
      zeroinit = false;size = slab.length;
    }var singleType = typeof types === "string" ? types : null;var ret;if (allocator == ALLOC_NONE) {
      ret = ptr;
    } else {
      ret = [typeof _malloc === "function" ? _malloc : Runtime.staticAlloc, Runtime.stackAlloc, Runtime.staticAlloc, Runtime.dynamicAlloc][allocator === undefined ? ALLOC_STATIC : allocator](Math.max(size, singleType ? 1 : types.length));
    }if (zeroinit) {
      var ptr = ret,
          stop;assert((ret & 3) == 0);stop = ret + (size & ~3);for (; ptr < stop; ptr += 4) {
        HEAP32[ptr >> 2] = 0;
      }stop = ret + size;while (ptr < stop) {
        HEAP8[ptr++ >> 0] = 0;
      }return ret;
    }if (singleType === "i8") {
      if (slab.subarray || slab.slice) {
        HEAPU8.set(slab, ret);
      } else {
        HEAPU8.set(new Uint8Array(slab), ret);
      }return ret;
    }var i = 0,
        type,
        typeSize,
        previousType;while (i < size) {
      var curr = slab[i];if (typeof curr === "function") {
        curr = Runtime.getFunctionIndex(curr);
      }type = singleType || types[i];if (type === 0) {
        i++;continue;
      }if (type == "i64") type = "i32";setValue(ret + i, curr, type);if (previousType !== type) {
        typeSize = Runtime.getNativeTypeSize(type);previousType = type;
      }i += typeSize;
    }return ret;
  }Module["allocate"] = allocate;function getMemory(size) {
    if (!staticSealed) return Runtime.staticAlloc(size);if (!runtimeInitialized) return Runtime.dynamicAlloc(size);return _malloc(size);
  }Module["getMemory"] = getMemory;function Pointer_stringify(ptr, length) {
    if (length === 0 || !ptr) return "";var hasUtf = 0;var t;var i = 0;while (1) {
      t = HEAPU8[ptr + i >> 0];hasUtf |= t;if (t == 0 && !length) break;i++;if (length && i == length) break;
    }if (!length) length = i;var ret = "";if (hasUtf < 128) {
      var MAX_CHUNK = 1024;var curr;while (length > 0) {
        curr = String.fromCharCode.apply(String, HEAPU8.subarray(ptr, ptr + Math.min(length, MAX_CHUNK)));ret = ret ? ret + curr : curr;ptr += MAX_CHUNK;length -= MAX_CHUNK;
      }return ret;
    }return Module["UTF8ToString"](ptr);
  }Module["Pointer_stringify"] = Pointer_stringify;function AsciiToString(ptr) {
    var str = "";while (1) {
      var ch = HEAP8[ptr++ >> 0];if (!ch) return str;str += String.fromCharCode(ch);
    }
  }Module["AsciiToString"] = AsciiToString;function stringToAscii(str, outPtr) {
    return writeAsciiToMemory(str, outPtr, false);
  }Module["stringToAscii"] = stringToAscii;var UTF8Decoder = typeof TextDecoder !== "undefined" ? new TextDecoder("utf8") : undefined;function UTF8ArrayToString(u8Array, idx) {
    var endPtr = idx;while (u8Array[endPtr]) ++endPtr;if (endPtr - idx > 16 && u8Array.subarray && UTF8Decoder) {
      return UTF8Decoder.decode(u8Array.subarray(idx, endPtr));
    } else {
      var u0, u1, u2, u3, u4, u5;var str = "";while (1) {
        u0 = u8Array[idx++];if (!u0) return str;if (!(u0 & 128)) {
          str += String.fromCharCode(u0);continue;
        }u1 = u8Array[idx++] & 63;if ((u0 & 224) == 192) {
          str += String.fromCharCode((u0 & 31) << 6 | u1);continue;
        }u2 = u8Array[idx++] & 63;if ((u0 & 240) == 224) {
          u0 = (u0 & 15) << 12 | u1 << 6 | u2;
        } else {
          u3 = u8Array[idx++] & 63;if ((u0 & 248) == 240) {
            u0 = (u0 & 7) << 18 | u1 << 12 | u2 << 6 | u3;
          } else {
            u4 = u8Array[idx++] & 63;if ((u0 & 252) == 248) {
              u0 = (u0 & 3) << 24 | u1 << 18 | u2 << 12 | u3 << 6 | u4;
            } else {
              u5 = u8Array[idx++] & 63;u0 = (u0 & 1) << 30 | u1 << 24 | u2 << 18 | u3 << 12 | u4 << 6 | u5;
            }
          }
        }if (u0 < 65536) {
          str += String.fromCharCode(u0);
        } else {
          var ch = u0 - 65536;str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
        }
      }
    }
  }Module["UTF8ArrayToString"] = UTF8ArrayToString;function UTF8ToString(ptr) {
    return UTF8ArrayToString(HEAPU8, ptr);
  }Module["UTF8ToString"] = UTF8ToString;function stringToUTF8Array(str, outU8Array, outIdx, maxBytesToWrite) {
    if (!(maxBytesToWrite > 0)) return 0;var startIdx = outIdx;var endIdx = outIdx + maxBytesToWrite - 1;for (var i = 0; i < str.length; ++i) {
      var u = str.charCodeAt(i);if (u >= 55296 && u <= 57343) u = 65536 + ((u & 1023) << 10) | str.charCodeAt(++i) & 1023;if (u <= 127) {
        if (outIdx >= endIdx) break;outU8Array[outIdx++] = u;
      } else if (u <= 2047) {
        if (outIdx + 1 >= endIdx) break;outU8Array[outIdx++] = 192 | u >> 6;outU8Array[outIdx++] = 128 | u & 63;
      } else if (u <= 65535) {
        if (outIdx + 2 >= endIdx) break;outU8Array[outIdx++] = 224 | u >> 12;outU8Array[outIdx++] = 128 | u >> 6 & 63;outU8Array[outIdx++] = 128 | u & 63;
      } else if (u <= 2097151) {
        if (outIdx + 3 >= endIdx) break;outU8Array[outIdx++] = 240 | u >> 18;outU8Array[outIdx++] = 128 | u >> 12 & 63;outU8Array[outIdx++] = 128 | u >> 6 & 63;outU8Array[outIdx++] = 128 | u & 63;
      } else if (u <= 67108863) {
        if (outIdx + 4 >= endIdx) break;outU8Array[outIdx++] = 248 | u >> 24;outU8Array[outIdx++] = 128 | u >> 18 & 63;outU8Array[outIdx++] = 128 | u >> 12 & 63;outU8Array[outIdx++] = 128 | u >> 6 & 63;outU8Array[outIdx++] = 128 | u & 63;
      } else {
        if (outIdx + 5 >= endIdx) break;outU8Array[outIdx++] = 252 | u >> 30;outU8Array[outIdx++] = 128 | u >> 24 & 63;outU8Array[outIdx++] = 128 | u >> 18 & 63;outU8Array[outIdx++] = 128 | u >> 12 & 63;outU8Array[outIdx++] = 128 | u >> 6 & 63;outU8Array[outIdx++] = 128 | u & 63;
      }
    }outU8Array[outIdx] = 0;return outIdx - startIdx;
  }Module["stringToUTF8Array"] = stringToUTF8Array;function stringToUTF8(str, outPtr, maxBytesToWrite) {
    return stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite);
  }Module["stringToUTF8"] = stringToUTF8;function lengthBytesUTF8(str) {
    var len = 0;for (var i = 0; i < str.length; ++i) {
      var u = str.charCodeAt(i);if (u >= 55296 && u <= 57343) u = 65536 + ((u & 1023) << 10) | str.charCodeAt(++i) & 1023;if (u <= 127) {
        ++len;
      } else if (u <= 2047) {
        len += 2;
      } else if (u <= 65535) {
        len += 3;
      } else if (u <= 2097151) {
        len += 4;
      } else if (u <= 67108863) {
        len += 5;
      } else {
        len += 6;
      }
    }return len;
  }Module["lengthBytesUTF8"] = lengthBytesUTF8;var UTF16Decoder = typeof TextDecoder !== "undefined" ? new TextDecoder("utf-16le") : undefined;function demangle(func) {
    var __cxa_demangle_func = Module["___cxa_demangle"] || Module["__cxa_demangle"];if (__cxa_demangle_func) {
      try {
        var s = func.substr(1);var len = lengthBytesUTF8(s) + 1;var buf = _malloc(len);stringToUTF8(s, buf, len);var status = _malloc(4);var ret = __cxa_demangle_func(buf, 0, 0, status);if (getValue(status, "i32") === 0 && ret) {
          return Pointer_stringify(ret);
        }
      } catch (e) {} finally {
        if (buf) _free(buf);if (status) _free(status);if (ret) _free(ret);
      }return func;
    }Runtime.warnOnce("warning: build with  -s DEMANGLE_SUPPORT=1  to link in libcxxabi demangling");return func;
  }function demangleAll(text) {
    var regex = /__Z[\w\d_]+/g;return text.replace(regex, function (x) {
      var y = demangle(x);return x === y ? x : x + " [" + y + "]";
    });
  }function jsStackTrace() {
    var err = new Error();if (!err.stack) {
      try {
        throw new Error(0);
      } catch (e) {
        err = e;
      }if (!err.stack) {
        return "(no stack trace available)";
      }
    }return err.stack.toString();
  }function stackTrace() {
    var js = jsStackTrace();if (Module["extraStackTrace"]) js += "\n" + Module["extraStackTrace"]();return demangleAll(js);
  }Module["stackTrace"] = stackTrace;var HEAP;var buffer;var HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;function updateGlobalBufferViews() {
    Module["HEAP8"] = HEAP8 = new Int8Array(buffer);Module["HEAP16"] = HEAP16 = new Int16Array(buffer);Module["HEAP32"] = HEAP32 = new Int32Array(buffer);Module["HEAPU8"] = HEAPU8 = new Uint8Array(buffer);Module["HEAPU16"] = HEAPU16 = new Uint16Array(buffer);Module["HEAPU32"] = HEAPU32 = new Uint32Array(buffer);Module["HEAPF32"] = HEAPF32 = new Float32Array(buffer);Module["HEAPF64"] = HEAPF64 = new Float64Array(buffer);
  }var STATIC_BASE, STATICTOP, staticSealed;var STACK_BASE, STACKTOP, STACK_MAX;var DYNAMIC_BASE, DYNAMICTOP_PTR;STATIC_BASE = STATICTOP = STACK_BASE = STACKTOP = STACK_MAX = DYNAMIC_BASE = DYNAMICTOP_PTR = 0;staticSealed = false;function abortOnCannotGrowMemory() {
    abort("Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value " + TOTAL_MEMORY + ", (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which adjusts the size at runtime but prevents some optimizations, (3) set Module.TOTAL_MEMORY to a higher value before the program runs, or if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ");
  }function enlargeMemory() {
    abortOnCannotGrowMemory();
  }var TOTAL_STACK = Module["TOTAL_STACK"] || 5242880;var TOTAL_MEMORY = Module["TOTAL_MEMORY"] || 134217728;if (TOTAL_MEMORY < TOTAL_STACK) Module.printErr("TOTAL_MEMORY should be larger than TOTAL_STACK, was " + TOTAL_MEMORY + "! (TOTAL_STACK=" + TOTAL_STACK + ")");if (Module["buffer"]) {
    buffer = Module["buffer"];
  } else {
    {
      buffer = new ArrayBuffer(TOTAL_MEMORY);
    }
  }updateGlobalBufferViews();function getTotalMemory() {
    return TOTAL_MEMORY;
  }HEAP32[0] = 1668509029;HEAP16[1] = 25459;if (HEAPU8[2] !== 115 || HEAPU8[3] !== 99) throw "Runtime error: expected the system to be little-endian!";Module["HEAP"] = HEAP;Module["buffer"] = buffer;Module["HEAP8"] = HEAP8;Module["HEAP16"] = HEAP16;Module["HEAP32"] = HEAP32;Module["HEAPU8"] = HEAPU8;Module["HEAPU16"] = HEAPU16;Module["HEAPU32"] = HEAPU32;Module["HEAPF32"] = HEAPF32;Module["HEAPF64"] = HEAPF64;function callRuntimeCallbacks(callbacks) {
    while (callbacks.length > 0) {
      var callback = callbacks.shift();if (typeof callback == "function") {
        callback();continue;
      }var func = callback.func;if (typeof func === "number") {
        if (callback.arg === undefined) {
          Module["dynCall_v"](func);
        } else {
          Module["dynCall_vi"](func, callback.arg);
        }
      } else {
        func(callback.arg === undefined ? null : callback.arg);
      }
    }
  }var __ATPRERUN__ = [];var __ATINIT__ = [];var __ATMAIN__ = [];var __ATEXIT__ = [];var __ATPOSTRUN__ = [];var runtimeInitialized = false;var runtimeExited = false;function preRun() {
    if (Module["preRun"]) {
      if (typeof Module["preRun"] == "function") Module["preRun"] = [Module["preRun"]];while (Module["preRun"].length) {
        addOnPreRun(Module["preRun"].shift());
      }
    }callRuntimeCallbacks(__ATPRERUN__);
  }function ensureInitRuntime() {
    if (runtimeInitialized) return;runtimeInitialized = true;callRuntimeCallbacks(__ATINIT__);
  }function preMain() {
    callRuntimeCallbacks(__ATMAIN__);
  }function exitRuntime() {
    callRuntimeCallbacks(__ATEXIT__);runtimeExited = true;
  }function postRun() {
    if (Module["postRun"]) {
      if (typeof Module["postRun"] == "function") Module["postRun"] = [Module["postRun"]];while (Module["postRun"].length) {
        addOnPostRun(Module["postRun"].shift());
      }
    }callRuntimeCallbacks(__ATPOSTRUN__);
  }function addOnPreRun(cb) {
    __ATPRERUN__.unshift(cb);
  }Module["addOnPreRun"] = addOnPreRun;function addOnInit(cb) {
    __ATINIT__.unshift(cb);
  }Module["addOnInit"] = addOnInit;function addOnPreMain(cb) {
    __ATMAIN__.unshift(cb);
  }Module["addOnPreMain"] = addOnPreMain;function addOnExit(cb) {
    __ATEXIT__.unshift(cb);
  }Module["addOnExit"] = addOnExit;function addOnPostRun(cb) {
    __ATPOSTRUN__.unshift(cb);
  }Module["addOnPostRun"] = addOnPostRun;function intArrayFromString(stringy, dontAddNull, length) {
    var len = length > 0 ? length : lengthBytesUTF8(stringy) + 1;var u8array = new Array(len);var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);if (dontAddNull) u8array.length = numBytesWritten;return u8array;
  }Module["intArrayFromString"] = intArrayFromString;function intArrayToString(array) {
    var ret = [];for (var i = 0; i < array.length; i++) {
      var chr = array[i];if (chr > 255) {
        chr &= 255;
      }ret.push(String.fromCharCode(chr));
    }return ret.join("");
  }Module["intArrayToString"] = intArrayToString;function writeStringToMemory(string, buffer, dontAddNull) {
    Runtime.warnOnce("writeStringToMemory is deprecated and should not be called! Use stringToUTF8() instead!");var lastChar, end;if (dontAddNull) {
      end = buffer + lengthBytesUTF8(string);lastChar = HEAP8[end];
    }stringToUTF8(string, buffer, Infinity);if (dontAddNull) HEAP8[end] = lastChar;
  }Module["writeStringToMemory"] = writeStringToMemory;function writeArrayToMemory(array, buffer) {
    HEAP8.set(array, buffer);
  }Module["writeArrayToMemory"] = writeArrayToMemory;function writeAsciiToMemory(str, buffer, dontAddNull) {
    for (var i = 0; i < str.length; ++i) {
      HEAP8[buffer++ >> 0] = str.charCodeAt(i);
    }if (!dontAddNull) HEAP8[buffer >> 0] = 0;
  }Module["writeAsciiToMemory"] = writeAsciiToMemory;if (!Math["imul"] || Math["imul"](4294967295, 5) !== -5) Math["imul"] = function imul(a, b) {
    var ah = a >>> 16;var al = a & 65535;var bh = b >>> 16;var bl = b & 65535;return al * bl + (ah * bl + al * bh << 16) | 0;
  };Math.imul = Math["imul"];if (!Math["fround"]) {
    var froundBuffer = new Float32Array(1);Math["fround"] = function (x) {
      froundBuffer[0] = x;return froundBuffer[0];
    };
  }Math.fround = Math["fround"];if (!Math["clz32"]) Math["clz32"] = function (x) {
    x = x >>> 0;for (var i = 0; i < 32; i++) {
      if (x & 1 << 31 - i) return i;
    }return 32;
  };Math.clz32 = Math["clz32"];if (!Math["trunc"]) Math["trunc"] = function (x) {
    return x < 0 ? Math.ceil(x) : Math.floor(x);
  };Math.trunc = Math["trunc"];var Math_abs = Math.abs;var Math_cos = Math.cos;var Math_sin = Math.sin;var Math_tan = Math.tan;var Math_acos = Math.acos;var Math_asin = Math.asin;var Math_atan = Math.atan;var Math_atan2 = Math.atan2;var Math_exp = Math.exp;var Math_log = Math.log;var Math_sqrt = Math.sqrt;var Math_ceil = Math.ceil;var Math_floor = Math.floor;var Math_pow = Math.pow;var Math_imul = Math.imul;var Math_fround = Math.fround;var Math_round = Math.round;var Math_min = Math.min;var Math_clz32 = Math.clz32;var Math_trunc = Math.trunc;var runDependencies = 0;var runDependencyWatcher = null;var dependenciesFulfilled = null;function getUniqueRunDependency(id) {
    return id;
  }function addRunDependency(id) {
    runDependencies++;if (Module["monitorRunDependencies"]) {
      Module["monitorRunDependencies"](runDependencies);
    }
  }Module["addRunDependency"] = addRunDependency;function removeRunDependency(id) {
    runDependencies--;if (Module["monitorRunDependencies"]) {
      Module["monitorRunDependencies"](runDependencies);
    }if (runDependencies == 0) {
      if (runDependencyWatcher !== null) {
        clearInterval(runDependencyWatcher);runDependencyWatcher = null;
      }if (dependenciesFulfilled) {
        var callback = dependenciesFulfilled;dependenciesFulfilled = null;callback();
      }
    }
  }Module["removeRunDependency"] = removeRunDependency;Module["preloadedImages"] = {};Module["preloadedAudios"] = {};var ASM_CONSTS = [function ($0, $1, $2, $3, $4, $5, $6, $7) {
    {
      return _nbind.callbackSignatureList[$0].apply(this, arguments);
    }
  }];function _emscripten_asm_const_iiiiiiii(code, a0, a1, a2, a3, a4, a5, a6) {
    return ASM_CONSTS[code](a0, a1, a2, a3, a4, a5, a6);
  }function _emscripten_asm_const_iiiii(code, a0, a1, a2, a3) {
    return ASM_CONSTS[code](a0, a1, a2, a3);
  }function _emscripten_asm_const_iiidddddd(code, a0, a1, a2, a3, a4, a5, a6, a7) {
    return ASM_CONSTS[code](a0, a1, a2, a3, a4, a5, a6, a7);
  }function _emscripten_asm_const_iiididi(code, a0, a1, a2, a3, a4, a5) {
    return ASM_CONSTS[code](a0, a1, a2, a3, a4, a5);
  }function _emscripten_asm_const_iiii(code, a0, a1, a2) {
    return ASM_CONSTS[code](a0, a1, a2);
  }function _emscripten_asm_const_iiiid(code, a0, a1, a2, a3) {
    return ASM_CONSTS[code](a0, a1, a2, a3);
  }function _emscripten_asm_const_iiiiii(code, a0, a1, a2, a3, a4) {
    return ASM_CONSTS[code](a0, a1, a2, a3, a4);
  }STATIC_BASE = 8;STATICTOP = STATIC_BASE + 12640;__ATINIT__.push({ func: function () {
      __GLOBAL__sub_I_nbind_cc();
    } }, { func: function () {
      __GLOBAL__sub_I_common_cc();
    } }, { func: function () {
      __GLOBAL__sub_I_Binding_cc();
    } });allocate([1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 192, 127, 0, 0, 192, 127, 0, 0, 192, 127, 0, 0, 192, 127, 3, 0, 0, 0, 0, 0, 192, 127, 0, 0, 0, 0, 0, 0, 192, 127, 0, 0, 0, 0, 0, 0, 192, 127, 0, 0, 0, 0, 0, 0, 192, 127, 0, 0, 0, 0, 0, 0, 192, 127, 0, 0, 0, 0, 0, 0, 192, 127, 0, 0, 0, 0, 0, 0, 192, 127, 0, 0, 0, 0, 0, 0, 192, 127, 0, 0, 0, 0, 0, 0, 192, 127, 0, 0, 0, 0, 0, 0, 192, 127, 0, 0, 0, 0, 0, 0, 192, 127, 0, 0, 0, 0, 0, 0, 192, 127, 0, 0, 0, 0, 0, 0, 192, 127, 0, 0, 0, 0, 0, 0, 192, 127, 0, 0, 0, 0, 0, 0, 192, 127, 0, 0, 0, 0, 0, 0, 192, 127, 0, 0, 0, 0, 0, 0, 192, 127, 0, 0, 0, 0, 0, 0, 192, 127, 0, 0, 0, 0, 0, 0, 192, 127, 0, 0, 0, 0, 0, 0, 192, 127, 0, 0, 0, 0, 0, 0, 192, 127, 0, 0, 0, 0, 0, 0, 192, 127, 0, 0, 0, 0, 0, 0, 192, 127, 0, 0, 0, 0, 0, 0, 192, 127, 0, 0, 0, 0, 0, 0, 192, 127, 0, 0, 0, 0, 0, 0, 192, 127, 0, 0, 0, 0, 0, 0, 192, 127, 0, 0, 0, 0, 0, 0, 192, 127, 0, 0, 0, 0, 0, 0, 192, 127, 0, 0, 0, 0, 0, 0, 192, 127, 0, 0, 0, 0, 0, 0, 192, 127, 0, 0, 0, 0, 0, 0, 192, 127, 0, 0, 0, 0, 0, 0, 192, 127, 0, 0, 0, 0, 0, 0, 192, 127, 0, 0, 0, 0, 0, 0, 192, 127, 0, 0, 0, 0, 0, 0, 192, 127, 0, 0, 0, 0, 0, 0, 192, 127, 3, 0, 0, 0, 0, 0, 192, 127, 3, 0, 0, 0, 0, 0, 192, 127, 0, 0, 0, 0, 0, 0, 192, 127, 0, 0, 0, 0, 0, 0, 192, 127, 0, 0, 0, 0, 0, 0, 192, 127, 0, 0, 0, 0, 0, 0, 192, 127, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 192, 127, 0, 0, 192, 127, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 192, 127, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 192, 127, 0, 0, 192, 127, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 128, 191, 0, 0, 128, 191, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 244, 3, 0, 0, 244, 3, 0, 0, 0, 0, 192, 127, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128, 63, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 3, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 192, 127, 3, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 139, 16, 0, 0, 149, 16, 0, 0, 157, 16, 0, 0, 101, 16, 0, 0, 115, 16, 0, 0, 127, 16, 0, 0, 32, 45, 0, 0, 33, 45, 0, 0, 34, 45, 0, 0, 33, 45, 0, 0, 34, 45, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 3, 0, 0, 0, 4, 0, 0, 0, 2, 0, 0, 0, 5, 0, 0, 0, 35, 45, 0, 0, 33, 45, 0, 0, 33, 45, 0, 0, 33, 45, 0, 0, 33, 45, 0, 0, 33, 45, 0, 0, 33, 45, 0, 0, 36, 45, 0, 0, 37, 45, 0, 0, 33, 45, 0, 0, 33, 45, 0, 0, 34, 45, 0, 0, 38, 45, 0, 0, 37, 45, 0, 0, 208, 4, 0, 0, 3, 0, 0, 0, 39, 45, 0, 0, 224, 4, 0, 0, 40, 45, 0, 0, 2, 0, 0, 0, 41, 45, 0, 0, 224, 4, 0, 0, 40, 45, 0, 0, 37, 45, 0, 0, 224, 4, 0, 0, 37, 45, 0, 0, 224, 4, 0, 0, 40, 45, 0, 0, 33, 45, 0, 0, 34, 45, 0, 0, 33, 45, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 6, 0, 0, 0, 7, 0, 0, 0, 2, 0, 0, 0, 8, 0, 0, 0, 35, 45, 0, 0, 34, 45, 0, 0, 33, 45, 0, 0, 42, 45, 0, 0, 42, 45, 0, 0, 34, 45, 0, 0, 34, 45, 0, 0, 37, 45, 0, 0, 33, 45, 0, 0, 37, 45, 0, 0, 34, 45, 0, 0, 33, 45, 0, 0, 37, 45, 0, 0, 34, 45, 0, 0, 37, 45, 0, 0, 108, 5, 0, 0, 3, 0, 0, 0, 116, 5, 0, 0, 1, 0, 0, 0, 41, 45, 0, 0, 37, 45, 0, 0, 224, 4, 0, 0, 136, 5, 0, 0, 2, 0, 0, 0, 43, 45, 0, 0, 38, 45, 0, 0, 34, 45, 0, 0, 37, 45, 0, 0, 34, 45, 0, 0, 38, 45, 0, 0, 37, 45, 0, 0, 136, 5, 0, 0, 136, 5, 0, 0, 188, 5, 0, 0, 34, 45, 0, 0, 33, 45, 0, 0, 2, 0, 0, 0, 42, 45, 0, 0, 188, 5, 0, 0, 208, 21, 0, 0, 208, 5, 0, 0, 2, 0, 0, 0, 36, 45, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 9, 0, 0, 0, 10, 0, 0, 0, 2, 0, 0, 0, 11, 0, 0, 0, 0, 6, 0, 0, 33, 45, 0, 0, 33, 45, 0, 0, 2, 0, 0, 0, 32, 45, 0, 0, 0, 6, 0, 0, 2, 0, 0, 0, 46, 45, 0, 0, 32, 6, 0, 0, 249, 21, 0, 0, 49, 45, 0, 0, 62, 45, 0, 0, 63, 45, 0, 0, 64, 45, 0, 0, 65, 45, 0, 0, 66, 45, 0, 0, 40, 45, 0, 0, 34, 45, 0, 0, 67, 45, 0, 0, 68, 45, 0, 0, 69, 45, 0, 0, 70, 45, 0, 0, 71, 45, 0, 0, 33, 45, 0, 0, 0, 0, 0, 0, 37, 45, 0, 0, 6, 22, 0, 0, 38, 45, 0, 0, 11, 22, 0, 0, 73, 45, 0, 0, 16, 22, 0, 0, 208, 4, 0, 0, 28, 22, 0, 0, 148, 6, 0, 0, 41, 22, 0, 0, 74, 45, 0, 0, 60, 22, 0, 0, 75, 45, 0, 0, 69, 22, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 156, 6, 0, 0, 1, 0, 0, 0, 39, 45, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 12, 0, 0, 0, 13, 0, 0, 0, 2, 0, 0, 0, 14, 0, 0, 0, 37, 45, 0, 0, 76, 45, 0, 0, 216, 6, 0, 0, 40, 45, 0, 0, 224, 6, 0, 0, 232, 6, 0, 0, 2, 0, 0, 0, 240, 6, 0, 0, 7, 0, 0, 0, 76, 45, 0, 0, 7, 0, 0, 0, 216, 6, 0, 0, 1, 0, 0, 0, 64, 45, 0, 0, 37, 45, 0, 0, 76, 45, 0, 0, 224, 6, 0, 0, 37, 45, 0, 0, 76, 45, 0, 0, 216, 6, 0, 0, 37, 45, 0, 0, 76, 45, 0, 0, 62, 45, 0, 0, 62, 45, 0, 0, 74, 45, 0, 0, 62, 45, 0, 0, 76, 45, 0, 0, 74, 45, 0, 0, 62, 45, 0, 0, 76, 45, 0, 0, 224, 6, 0, 0, 74, 45, 0, 0, 62, 45, 0, 0, 76, 45, 0, 0, 40, 45, 0, 0, 74, 45, 0, 0, 62, 45, 0, 0, 92, 7, 0, 0, 40, 45, 0, 0, 2, 0, 0, 0, 76, 45, 0, 0, 37, 45, 0, 0, 40, 45, 0, 0, 40, 45, 0, 0, 40, 45, 0, 0, 40, 45, 0, 0, 74, 45, 0, 0, 76, 45, 0, 0, 208, 4, 0, 0, 37, 45, 0, 0, 208, 4, 0, 0, 208, 4, 0, 0, 208, 4, 0, 0, 208, 4, 0, 0, 208, 4, 0, 0, 37, 45, 0, 0, 216, 6, 0, 0, 208, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 15, 0, 0, 0, 16, 0, 0, 0, 2, 0, 0, 0, 17, 0, 0, 0, 200, 7, 0, 0, 2, 0, 0, 0, 77, 45, 0, 0, 35, 45, 0, 0, 40, 45, 0, 0, 220, 7, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 86, 45, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 43, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 80, 9, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 2, 0, 0, 0, 94, 45, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 111, 117, 108, 100, 32, 110, 111, 116, 32, 97, 108, 108, 111, 99, 97, 116, 101, 32, 109, 101, 109, 111, 114, 121, 32, 102, 111, 114, 32, 108, 105, 115, 116, 0, 67, 111, 117, 108, 100, 32, 110, 111, 116, 32, 97, 108, 108, 111, 99, 97, 116, 101, 32, 109, 101, 109, 111, 114, 121, 32, 102, 111, 114, 32, 105, 116, 101, 109, 115, 0, 67, 111, 117, 108, 100, 32, 110, 111, 116, 32, 101, 120, 116, 101, 110, 100, 32, 97, 108, 108, 111, 99, 97, 116, 105, 111, 110, 32, 102, 111, 114, 32, 105, 116, 101, 109, 115, 0, 67, 111, 117, 108, 100, 32, 110, 111, 116, 32, 97, 108, 108, 111, 99, 97, 116, 101, 32, 109, 101, 109, 111, 114, 121, 32, 102, 111, 114, 32, 110, 111, 100, 101, 0, 37, 115, 10, 0, 67, 97, 110, 110, 111, 116, 32, 114, 101, 115, 101, 116, 32, 97, 32, 110, 111, 100, 101, 32, 119, 104, 105, 99, 104, 32, 115, 116, 105, 108, 108, 32, 104, 97, 115, 32, 99, 104, 105, 108, 100, 114, 101, 110, 32, 97, 116, 116, 97, 99, 104, 101, 100, 0, 67, 97, 110, 110, 111, 116, 32, 114, 101, 115, 101, 116, 32, 97, 32, 110, 111, 100, 101, 32, 115, 116, 105, 108, 108, 32, 97, 116, 116, 97, 99, 104, 101, 100, 32, 116, 111, 32, 97, 32, 112, 97, 114, 101, 110, 116, 0, 67, 111, 117, 108, 100, 32, 110, 111, 116, 32, 97, 108, 108, 111, 99, 97, 116, 101, 32, 109, 101, 109, 111, 114, 121, 32, 102, 111, 114, 32, 99, 111, 110, 102, 105, 103, 0, 67, 97, 110, 110, 111, 116, 32, 115, 101, 116, 32, 109, 101, 97, 115, 117, 114, 101, 32, 102, 117, 110, 99, 116, 105, 111, 110, 58, 32, 78, 111, 100, 101, 115, 32, 119, 105, 116, 104, 32, 109, 101, 97, 115, 117, 114, 101, 32, 102, 117, 110, 99, 116, 105, 111, 110, 115, 32, 99, 97, 110, 110, 111, 116, 32, 104, 97, 118, 101, 32, 99, 104, 105, 108, 100, 114, 101, 110, 46, 0, 67, 104, 105, 108, 100, 32, 97, 108, 114, 101, 97, 100, 121, 32, 104, 97, 115, 32, 97, 32, 112, 97, 114, 101, 110, 116, 44, 32, 105, 116, 32, 109, 117, 115, 116, 32, 98, 101, 32, 114, 101, 109, 111, 118, 101, 100, 32, 102, 105, 114, 115, 116, 46, 0, 67, 97, 110, 110, 111, 116, 32, 97, 100, 100, 32, 99, 104, 105, 108, 100, 58, 32, 78, 111, 100, 101, 115, 32, 119, 105, 116, 104, 32, 109, 101, 97, 115, 117, 114, 101, 32, 102, 117, 110, 99, 116, 105, 111, 110, 115, 32, 99, 97, 110, 110, 111, 116, 32, 104, 97, 118, 101, 32, 99, 104, 105, 108, 100, 114, 101, 110, 46, 0, 79, 110, 108, 121, 32, 108, 101, 97, 102, 32, 110, 111, 100, 101, 115, 32, 119, 105, 116, 104, 32, 99, 117, 115, 116, 111, 109, 32, 109, 101, 97, 115, 117, 114, 101, 32, 102, 117, 110, 99, 116, 105, 111, 110, 115, 115, 104, 111, 117, 108, 100, 32, 109, 97, 110, 117, 97, 108, 108, 121, 32, 109, 97, 114, 107, 32, 116, 104, 101, 109, 115, 101, 108, 118, 101, 115, 32, 97, 115, 32, 100, 105, 114, 116, 121, 0, 67, 97, 110, 110, 111, 116, 32, 103, 101, 116, 32, 108, 97, 121, 111, 117, 116, 32, 112, 114, 111, 112, 101, 114, 116, 105, 101, 115, 32, 111, 102, 32, 109, 117, 108, 116, 105, 45, 101, 100, 103, 101, 32, 115, 104, 111, 114, 116, 104, 97, 110, 100, 115, 0, 60, 100, 105, 118, 32, 0, 108, 97, 121, 111, 117, 116, 61, 34, 0, 119, 105, 100, 116, 104, 58, 32, 37, 103, 59, 32, 0, 104, 101, 105, 103, 104, 116, 58, 32, 37, 103, 59, 32, 0, 116, 111, 112, 58, 32, 37, 103, 59, 32, 0, 108, 101, 102, 116, 58, 32, 37, 103, 59, 0, 34, 32, 0, 115, 116, 121, 108, 101, 61, 34, 0, 102, 108, 101, 120, 45, 100, 105, 114, 101, 99, 116, 105, 111, 110, 58, 32, 37, 115, 59, 32, 0, 106, 117, 115, 116, 105, 102, 121, 45, 99, 111, 110, 116, 101, 110, 116, 58, 32, 37, 115, 59, 32, 0, 97, 108, 105, 103, 110, 45, 105, 116, 101, 109, 115, 58, 32, 37, 115, 59, 32, 0, 97, 108, 105, 103, 110, 45, 99, 111, 110, 116, 101, 110, 116, 58, 32, 37, 115, 59, 32, 0, 97, 108, 105, 103, 110, 45, 115, 101, 108, 102, 58, 32, 37, 115, 59, 32, 0, 102, 108, 101, 120, 45, 103, 114, 111, 119, 0, 102, 108, 101, 120, 45, 115, 104, 114, 105, 110, 107, 0, 102, 108, 101, 120, 45, 98, 97, 115, 105, 115, 0, 102, 108, 101, 120, 0, 102, 108, 101, 120, 87, 114, 97, 112, 58, 32, 37, 115, 59, 32, 0, 111, 118, 101, 114, 102, 108, 111, 119, 58, 32, 37, 115, 59, 32, 0, 100, 105, 115, 112, 108, 97, 121, 58, 32, 37, 115, 59, 32, 0, 109, 97, 114, 103, 105, 110, 0, 112, 97, 100, 100, 105, 110, 103, 0, 98, 111, 114, 100, 101, 114, 0, 119, 105, 100, 116, 104, 0, 104, 101, 105, 103, 104, 116, 0, 109, 97, 120, 45, 119, 105, 100, 116, 104, 0, 109, 97, 120, 45, 104, 101, 105, 103, 104, 116, 0, 109, 105, 110, 45, 119, 105, 100, 116, 104, 0, 109, 105, 110, 45, 104, 101, 105, 103, 104, 116, 0, 112, 111, 115, 105, 116, 105, 111, 110, 58, 32, 37, 115, 59, 32, 0, 108, 101, 102, 116, 0, 114, 105, 103, 104, 116, 0, 116, 111, 112, 0, 98, 111, 116, 116, 111, 109, 0, 104, 97, 115, 45, 99, 117, 115, 116, 111, 109, 45, 109, 101, 97, 115, 117, 114, 101, 61, 34, 116, 114, 117, 101, 34, 0, 62, 0, 10, 0, 60, 47, 100, 105, 118, 62, 0, 37, 115, 58, 32, 97, 117, 116, 111, 59, 32, 0, 112, 120, 0, 37, 0, 37, 115, 58, 32, 37, 103, 37, 115, 59, 32, 0, 37, 115, 45, 37, 115, 0, 37, 115, 58, 32, 37, 103, 59, 32, 0, 32, 32, 0, 37, 115, 37, 100, 46, 123, 91, 115, 107, 105, 112, 112, 101, 100, 93, 32, 0, 119, 109, 58, 32, 37, 115, 44, 32, 104, 109, 58, 32, 37, 115, 44, 32, 97, 119, 58, 32, 37, 102, 32, 97, 104, 58, 32, 37, 102, 32, 61, 62, 32, 100, 58, 32, 40, 37, 102, 44, 32, 37, 102, 41, 32, 37, 115, 10, 0, 42, 0, 37, 115, 37, 100, 46, 123, 37, 115, 0, 119, 109, 58, 32, 37, 115, 44, 32, 104, 109, 58, 32, 37, 115, 44, 32, 97, 119, 58, 32, 37, 102, 32, 97, 104, 58, 32, 37, 102, 32, 37, 115, 10, 0, 37, 115, 37, 100, 46, 125, 37, 115, 0, 119, 109, 58, 32, 37, 115, 44, 32, 104, 109, 58, 32, 37, 115, 44, 32, 100, 58, 32, 40, 37, 102, 44, 32, 37, 102, 41, 32, 37, 115, 10, 0, 79, 117, 116, 32, 111, 102, 32, 99, 97, 99, 104, 101, 32, 101, 110, 116, 114, 105, 101, 115, 33, 0, 97, 118, 97, 105, 108, 97, 98, 108, 101, 87, 105, 100, 116, 104, 32, 105, 115, 32, 105, 110, 100, 101, 102, 105, 110, 105, 116, 101, 32, 115, 111, 32, 119, 105, 100, 116, 104, 77, 101, 97, 115, 117, 114, 101, 77, 111, 100, 101, 32, 109, 117, 115, 116, 32, 98, 101, 32, 89, 71, 77, 101, 97, 115, 117, 114, 101, 77, 111, 100, 101, 85, 110, 100, 101, 102, 105, 110, 101, 100, 0, 97, 118, 97, 105, 108, 97, 98, 108, 101, 72, 101, 105, 103, 104, 116, 32, 105, 115, 32, 105, 110, 100, 101, 102, 105, 110, 105, 116, 101, 32, 115, 111, 32, 104, 101, 105, 103, 104, 116, 77, 101, 97, 115, 117, 114, 101, 77, 111, 100, 101, 32, 109, 117, 115, 116, 32, 98, 101, 32, 89, 71, 77, 101, 97, 115, 117, 114, 101, 77, 111, 100, 101, 85, 110, 100, 101, 102, 105, 110, 101, 100, 0, 115, 116, 114, 101, 116, 99, 104, 0, 109, 117, 108, 116, 105, 108, 105, 110, 101, 45, 115, 116, 114, 101, 116, 99, 104, 0, 97, 98, 115, 45, 109, 101, 97, 115, 117, 114, 101, 0, 97, 98, 115, 45, 108, 97, 121, 111, 117, 116, 0, 69, 120, 112, 101, 99, 116, 32, 99, 117, 115, 116, 111, 109, 32, 98, 97, 115, 101, 108, 105, 110, 101, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 116, 111, 32, 110, 111, 116, 32, 114, 101, 116, 117, 114, 110, 32, 78, 97, 78, 0, 109, 101, 97, 115, 117, 114, 101, 0, 69, 120, 112, 101, 99, 116, 101, 100, 32, 110, 111, 100, 101, 32, 116, 111, 32, 104, 97, 118, 101, 32, 99, 117, 115, 116, 111, 109, 32, 109, 101, 97, 115, 117, 114, 101, 32, 102, 117, 110, 99, 116, 105, 111, 110, 0, 76, 65, 89, 95, 85, 78, 68, 69, 70, 73, 78, 69, 68, 0, 76, 65, 89, 95, 69, 88, 65, 67, 84, 76, 89, 0, 76, 65, 89, 95, 65, 84, 95, 77, 79, 83, 84, 0, 85, 78, 68, 69, 70, 73, 78, 69, 68, 0, 69, 88, 65, 67, 84, 76, 89, 0, 65, 84, 95, 77, 79, 83, 84, 0, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 0, 105, 110, 105, 116, 105, 97, 108, 0, 78, 111, 100, 101, 0, 99, 114, 101, 97, 116, 101, 68, 101, 102, 97, 117, 108, 116, 0, 99, 114, 101, 97, 116, 101, 87, 105, 116, 104, 67, 111, 110, 102, 105, 103, 0, 100, 101, 115, 116, 114, 111, 121, 0, 114, 101, 115, 101, 116, 0, 99, 111, 112, 121, 83, 116, 121, 108, 101, 0, 115, 101, 116, 80, 111, 115, 105, 116, 105, 111, 110, 84, 121, 112, 101, 0, 115, 101, 116, 80, 111, 115, 105, 116, 105, 111, 110, 0, 115, 101, 116, 80, 111, 115, 105, 116, 105, 111, 110, 80, 101, 114, 99, 101, 110, 116, 0, 115, 101, 116, 65, 108, 105, 103, 110, 67, 111, 110, 116, 101, 110, 116, 0, 115, 101, 116, 65, 108, 105, 103, 110, 73, 116, 101, 109, 115, 0, 115, 101, 116, 65, 108, 105, 103, 110, 83, 101, 108, 102, 0, 115, 101, 116, 70, 108, 101, 120, 68, 105, 114, 101, 99, 116, 105, 111, 110, 0, 115, 101, 116, 70, 108, 101, 120, 87, 114, 97, 112, 0, 115, 101, 116, 74, 117, 115, 116, 105, 102, 121, 67, 111, 110, 116, 101, 110, 116, 0, 115, 101, 116, 77, 97, 114, 103, 105, 110, 0, 115, 101, 116, 77, 97, 114, 103, 105, 110, 80, 101, 114, 99, 101, 110, 116, 0, 115, 101, 116, 77, 97, 114, 103, 105, 110, 65, 117, 116, 111, 0, 115, 101, 116, 79, 118, 101, 114, 102, 108, 111, 119, 0, 115, 101, 116, 68, 105, 115, 112, 108, 97, 121, 0, 115, 101, 116, 70, 108, 101, 120, 0, 115, 101, 116, 70, 108, 101, 120, 66, 97, 115, 105, 115, 0, 115, 101, 116, 70, 108, 101, 120, 66, 97, 115, 105, 115, 80, 101, 114, 99, 101, 110, 116, 0, 115, 101, 116, 70, 108, 101, 120, 71, 114, 111, 119, 0, 115, 101, 116, 70, 108, 101, 120, 83, 104, 114, 105, 110, 107, 0, 115, 101, 116, 87, 105, 100, 116, 104, 0, 115, 101, 116, 87, 105, 100, 116, 104, 80, 101, 114, 99, 101, 110, 116, 0, 115, 101, 116, 87, 105, 100, 116, 104, 65, 117, 116, 111, 0, 115, 101, 116, 72, 101, 105, 103, 104, 116, 0, 115, 101, 116, 72, 101, 105, 103, 104, 116, 80, 101, 114, 99, 101, 110, 116, 0, 115, 101, 116, 72, 101, 105, 103, 104, 116, 65, 117, 116, 111, 0, 115, 101, 116, 77, 105, 110, 87, 105, 100, 116, 104, 0, 115, 101, 116, 77, 105, 110, 87, 105, 100, 116, 104, 80, 101, 114, 99, 101, 110, 116, 0, 115, 101, 116, 77, 105, 110, 72, 101, 105, 103, 104, 116, 0, 115, 101, 116, 77, 105, 110, 72, 101, 105, 103, 104, 116, 80, 101, 114, 99, 101, 110, 116, 0, 115, 101, 116, 77, 97, 120, 87, 105, 100, 116, 104, 0, 115, 101, 116, 77, 97, 120, 87, 105, 100, 116, 104, 80, 101, 114, 99, 101, 110, 116, 0, 115, 101, 116, 77, 97, 120, 72, 101, 105, 103, 104, 116, 0, 115, 101, 116, 77, 97, 120, 72, 101, 105, 103, 104, 116, 80, 101, 114, 99, 101, 110, 116, 0, 115, 101, 116, 65, 115, 112, 101, 99, 116, 82, 97, 116, 105, 111, 0, 115, 101, 116, 66, 111, 114, 100, 101, 114, 0, 115, 101, 116, 80, 97, 100, 100, 105, 110, 103, 0, 115, 101, 116, 80, 97, 100, 100, 105, 110, 103, 80, 101, 114, 99, 101, 110, 116, 0, 103, 101, 116, 80, 111, 115, 105, 116, 105, 111, 110, 84, 121, 112, 101, 0, 103, 101, 116, 80, 111, 115, 105, 116, 105, 111, 110, 0, 103, 101, 116, 65, 108, 105, 103, 110, 67, 111, 110, 116, 101, 110, 116, 0, 103, 101, 116, 65, 108, 105, 103, 110, 73, 116, 101, 109, 115, 0, 103, 101, 116, 65, 108, 105, 103, 110, 83, 101, 108, 102, 0, 103, 101, 116, 70, 108, 101, 120, 68, 105, 114, 101, 99, 116, 105, 111, 110, 0, 103, 101, 116, 70, 108, 101, 120, 87, 114, 97, 112, 0, 103, 101, 116, 74, 117, 115, 116, 105, 102, 121, 67, 111, 110, 116, 101, 110, 116, 0, 103, 101, 116, 77, 97, 114, 103, 105, 110, 0, 103, 101, 116, 70, 108, 101, 120, 66, 97, 115, 105, 115, 0, 103, 101, 116, 70, 108, 101, 120, 71, 114, 111, 119, 0, 103, 101, 116, 70, 108, 101, 120, 83, 104, 114, 105, 110, 107, 0, 103, 101, 116, 87, 105, 100, 116, 104, 0, 103, 101, 116, 72, 101, 105, 103, 104, 116, 0, 103, 101, 116, 77, 105, 110, 87, 105, 100, 116, 104, 0, 103, 101, 116, 77, 105, 110, 72, 101, 105, 103, 104, 116, 0, 103, 101, 116, 77, 97, 120, 87, 105, 100, 116, 104, 0, 103, 101, 116, 77, 97, 120, 72, 101, 105, 103, 104, 116, 0, 103, 101, 116, 65, 115, 112, 101, 99, 116, 82, 97, 116, 105, 111, 0, 103, 101, 116, 66, 111, 114, 100, 101, 114, 0, 103, 101, 116, 79, 118, 101, 114, 102, 108, 111, 119, 0, 103, 101, 116, 68, 105, 115, 112, 108, 97, 121, 0, 103, 101, 116, 80, 97, 100, 100, 105, 110, 103, 0, 105, 110, 115, 101, 114, 116, 67, 104, 105, 108, 100, 0, 114, 101, 109, 111, 118, 101, 67, 104, 105, 108, 100, 0, 103, 101, 116, 67, 104, 105, 108, 100, 67, 111, 117, 110, 116, 0, 103, 101, 116, 80, 97, 114, 101, 110, 116, 0, 103, 101, 116, 67, 104, 105, 108, 100, 0, 115, 101, 116, 77, 101, 97, 115, 117, 114, 101, 70, 117, 110, 99, 0, 117, 110, 115, 101, 116, 77, 101, 97, 115, 117, 114, 101, 70, 117, 110, 99, 0, 109, 97, 114, 107, 68, 105, 114, 116, 121, 0, 105, 115, 68, 105, 114, 116, 121, 0, 99, 97, 108, 99, 117, 108, 97, 116, 101, 76, 97, 121, 111, 117, 116, 0, 103, 101, 116, 67, 111, 109, 112, 117, 116, 101, 100, 76, 101, 102, 116, 0, 103, 101, 116, 67, 111, 109, 112, 117, 116, 101, 100, 82, 105, 103, 104, 116, 0, 103, 101, 116, 67, 111, 109, 112, 117, 116, 101, 100, 84, 111, 112, 0, 103, 101, 116, 67, 111, 109, 112, 117, 116, 101, 100, 66, 111, 116, 116, 111, 109, 0, 103, 101, 116, 67, 111, 109, 112, 117, 116, 101, 100, 87, 105, 100, 116, 104, 0, 103, 101, 116, 67, 111, 109, 112, 117, 116, 101, 100, 72, 101, 105, 103, 104, 116, 0, 103, 101, 116, 67, 111, 109, 112, 117, 116, 101, 100, 76, 97, 121, 111, 117, 116, 0, 103, 101, 116, 67, 111, 109, 112, 117, 116, 101, 100, 77, 97, 114, 103, 105, 110, 0, 103, 101, 116, 67, 111, 109, 112, 117, 116, 101, 100, 66, 111, 114, 100, 101, 114, 0, 103, 101, 116, 67, 111, 109, 112, 117, 116, 101, 100, 80, 97, 100, 100, 105, 110, 103, 0, 67, 111, 110, 102, 105, 103, 0, 99, 114, 101, 97, 116, 101, 0, 115, 101, 116, 69, 120, 112, 101, 114, 105, 109, 101, 110, 116, 97, 108, 70, 101, 97, 116, 117, 114, 101, 69, 110, 97, 98, 108, 101, 100, 0, 105, 115, 69, 120, 112, 101, 114, 105, 109, 101, 110, 116, 97, 108, 70, 101, 97, 116, 117, 114, 101, 69, 110, 97, 98, 108, 101, 100, 0, 86, 97, 108, 117, 101, 0, 76, 97, 121, 111, 117, 116, 0, 83, 105, 122, 101, 0, 103, 101, 116, 73, 110, 115, 116, 97, 110, 99, 101, 67, 111, 117, 110, 116, 0, 73, 110, 116, 54, 52, 0, 1, 1, 1, 2, 2, 4, 4, 4, 4, 8, 8, 4, 8, 118, 111, 105, 100, 0, 98, 111, 111, 108, 0, 115, 116, 100, 58, 58, 115, 116, 114, 105, 110, 103, 0, 99, 98, 70, 117, 110, 99, 116, 105, 111, 110, 32, 38, 0, 99, 111, 110, 115, 116, 32, 99, 98, 70, 117, 110, 99, 116, 105, 111, 110, 32, 38, 0, 69, 120, 116, 101, 114, 110, 97, 108, 0, 66, 117, 102, 102, 101, 114, 0, 78, 66, 105, 110, 100, 73, 68, 0, 78, 66, 105, 110, 100, 0, 98, 105, 110, 100, 95, 118, 97, 108, 117, 101, 0, 114, 101, 102, 108, 101, 99, 116, 0, 113, 117, 101, 114, 121, 84, 121, 112, 101, 0, 108, 97, 108, 108, 111, 99, 0, 108, 114, 101, 115, 101, 116, 0, 33, 34, 97, 108, 108, 111, 99, 97, 116, 111, 114, 60, 84, 62, 58, 58, 97, 108, 108, 111, 99, 97, 116, 101, 58, 58, 98, 97, 100, 95, 97, 108, 108, 111, 99, 34, 0, 47, 85, 115, 101, 114, 115, 47, 103, 114, 101, 103, 103, 47, 115, 114, 99, 47, 101, 109, 115, 100, 107, 47, 101, 109, 115, 99, 114, 105, 112, 116, 101, 110, 47, 49, 46, 51, 55, 46, 57, 47, 115, 121, 115, 116, 101, 109, 47, 105, 110, 99, 108, 117, 100, 101, 47, 108, 105, 98, 99, 120, 120, 47, 109, 101, 109, 111, 114, 121, 0, 97, 108, 108, 111, 99, 97, 116, 101, 0, 123, 114, 101, 116, 117, 114, 110, 40, 95, 110, 98, 105, 110, 100, 46, 99, 97, 108, 108, 98, 97, 99, 107, 83, 105, 103, 110, 97, 116, 117, 114, 101, 76, 105, 115, 116, 91, 36, 48, 93, 46, 97, 112, 112, 108, 121, 40, 116, 104, 105, 115, 44, 97, 114, 103, 117, 109, 101, 110, 116, 115, 41, 41, 59, 125, 0, 95, 110, 98, 105, 110, 100, 95, 110, 101, 119, 0, 17, 0, 10, 0, 17, 17, 17, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 11, 0, 0, 0, 0, 0, 0, 0, 0, 17, 0, 15, 10, 17, 17, 17, 3, 10, 7, 0, 1, 19, 9, 11, 11, 0, 0, 9, 6, 11, 0, 0, 11, 0, 6, 17, 0, 0, 0, 17, 17, 17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 0, 0, 0, 0, 0, 0, 0, 0, 17, 0, 10, 10, 17, 17, 17, 0, 10, 0, 0, 2, 0, 9, 11, 0, 0, 0, 9, 0, 11, 0, 0, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 12, 0, 0, 0, 0, 9, 12, 0, 0, 0, 0, 0, 12, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 0, 0, 0, 4, 13, 0, 0, 0, 0, 9, 14, 0, 0, 0, 0, 0, 14, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 0, 0, 0, 0, 15, 0, 0, 0, 0, 9, 16, 0, 0, 0, 0, 0, 16, 0, 0, 16, 0, 0, 18, 0, 0, 0, 18, 18, 18, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 18, 0, 0, 0, 18, 18, 18, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 10, 0, 0, 0, 0, 9, 11, 0, 0, 0, 0, 0, 11, 0, 0, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 12, 0, 0, 0, 0, 9, 12, 0, 0, 0, 0, 0, 12, 0, 0, 12, 0, 0, 45, 43, 32, 32, 32, 48, 88, 48, 120, 0, 40, 110, 117, 108, 108, 41, 0, 45, 48, 88, 43, 48, 88, 32, 48, 88, 45, 48, 120, 43, 48, 120, 32, 48, 120, 0, 105, 110, 102, 0, 73, 78, 70, 0, 110, 97, 110, 0, 78, 65, 78, 0, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 65, 66, 67, 68, 69, 70, 46, 0, 84, 33, 34, 25, 13, 1, 2, 3, 17, 75, 28, 12, 16, 4, 11, 29, 18, 30, 39, 104, 110, 111, 112, 113, 98, 32, 5, 6, 15, 19, 20, 21, 26, 8, 22, 7, 40, 36, 23, 24, 9, 10, 14, 27, 31, 37, 35, 131, 130, 125, 38, 42, 43, 60, 61, 62, 63, 67, 71, 74, 77, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 99, 100, 101, 102, 103, 105, 106, 107, 108, 114, 115, 116, 121, 122, 123, 124, 0, 73, 108, 108, 101, 103, 97, 108, 32, 98, 121, 116, 101, 32, 115, 101, 113, 117, 101, 110, 99, 101, 0, 68, 111, 109, 97, 105, 110, 32, 101, 114, 114, 111, 114, 0, 82, 101, 115, 117, 108, 116, 32, 110, 111, 116, 32, 114, 101, 112, 114, 101, 115, 101, 110, 116, 97, 98, 108, 101, 0, 78, 111, 116, 32, 97, 32, 116, 116, 121, 0, 80, 101, 114, 109, 105, 115, 115, 105, 111, 110, 32, 100, 101, 110, 105, 101, 100, 0, 79, 112, 101, 114, 97, 116, 105, 111, 110, 32, 110, 111, 116, 32, 112, 101, 114, 109, 105, 116, 116, 101, 100, 0, 78, 111, 32, 115, 117, 99, 104, 32, 102, 105, 108, 101, 32, 111, 114, 32, 100, 105, 114, 101, 99, 116, 111, 114, 121, 0, 78, 111, 32, 115, 117, 99, 104, 32, 112, 114, 111, 99, 101, 115, 115, 0, 70, 105, 108, 101, 32, 101, 120, 105, 115, 116, 115, 0, 86, 97, 108, 117, 101, 32, 116, 111, 111, 32, 108, 97, 114, 103, 101, 32, 102, 111, 114, 32, 100, 97, 116, 97, 32, 116, 121, 112, 101, 0, 78, 111, 32, 115, 112, 97, 99, 101, 32, 108, 101, 102, 116, 32, 111, 110, 32, 100, 101, 118, 105, 99, 101, 0, 79, 117, 116, 32, 111, 102, 32, 109, 101, 109, 111, 114, 121, 0, 82, 101, 115, 111, 117, 114, 99, 101, 32, 98, 117, 115, 121, 0, 73, 110, 116, 101, 114, 114, 117, 112, 116, 101, 100, 32, 115, 121, 115, 116, 101, 109, 32, 99, 97, 108, 108, 0, 82, 101, 115, 111, 117, 114, 99, 101, 32, 116, 101, 109, 112, 111, 114, 97, 114, 105, 108, 121, 32, 117, 110, 97, 118, 97, 105, 108, 97, 98, 108, 101, 0, 73, 110, 118, 97, 108, 105, 100, 32, 115, 101, 101, 107, 0, 67, 114, 111, 115, 115, 45, 100, 101, 118, 105, 99, 101, 32, 108, 105, 110, 107, 0, 82, 101, 97, 100, 45, 111, 110, 108, 121, 32, 102, 105, 108, 101, 32, 115, 121, 115, 116, 101, 109, 0, 68, 105, 114, 101, 99, 116, 111, 114, 121, 32, 110, 111, 116, 32, 101, 109, 112, 116, 121, 0, 67, 111, 110, 110, 101, 99, 116, 105, 111, 110, 32, 114, 101, 115, 101, 116, 32, 98, 121, 32, 112, 101, 101, 114, 0, 79, 112, 101, 114, 97, 116, 105, 111, 110, 32, 116, 105, 109, 101, 100, 32, 111, 117, 116, 0, 67, 111, 110, 110, 101, 99, 116, 105, 111, 110, 32, 114, 101, 102, 117, 115, 101, 100, 0, 72, 111, 115, 116, 32, 105, 115, 32, 100, 111, 119, 110, 0, 72, 111, 115, 116, 32, 105, 115, 32, 117, 110, 114, 101, 97, 99, 104, 97, 98, 108, 101, 0, 65, 100, 100, 114, 101, 115, 115, 32, 105, 110, 32, 117, 115, 101, 0, 66, 114, 111, 107, 101, 110, 32, 112, 105, 112, 101, 0, 73, 47, 79, 32, 101, 114, 114, 111, 114, 0, 78, 111, 32, 115, 117, 99, 104, 32, 100, 101, 118, 105, 99, 101, 32, 111, 114, 32, 97, 100, 100, 114, 101, 115, 115, 0, 66, 108, 111, 99, 107, 32, 100, 101, 118, 105, 99, 101, 32, 114, 101, 113, 117, 105, 114, 101, 100, 0, 78, 111, 32, 115, 117, 99, 104, 32, 100, 101, 118, 105, 99, 101, 0, 78, 111, 116, 32, 97, 32, 100, 105, 114, 101, 99, 116, 111, 114, 121, 0, 73, 115, 32, 97, 32, 100, 105, 114, 101, 99, 116, 111, 114, 121, 0, 84, 101, 120, 116, 32, 102, 105, 108, 101, 32, 98, 117, 115, 121, 0, 69, 120, 101, 99, 32, 102, 111, 114, 109, 97, 116, 32, 101, 114, 114, 111, 114, 0, 73, 110, 118, 97, 108, 105, 100, 32, 97, 114, 103, 117, 109, 101, 110, 116, 0, 65, 114, 103, 117, 109, 101, 110, 116, 32, 108, 105, 115, 116, 32, 116, 111, 111, 32, 108, 111, 110, 103, 0, 83, 121, 109, 98, 111, 108, 105, 99, 32, 108, 105, 110, 107, 32, 108, 111, 111, 112, 0, 70, 105, 108, 101, 110, 97, 109, 101, 32, 116, 111, 111, 32, 108, 111, 110, 103, 0, 84, 111, 111, 32, 109, 97, 110, 121, 32, 111, 112, 101, 110, 32, 102, 105, 108, 101, 115, 32, 105, 110, 32, 115, 121, 115, 116, 101, 109, 0, 78, 111, 32, 102, 105, 108, 101, 32, 100, 101, 115, 99, 114, 105, 112, 116, 111, 114, 115, 32, 97, 118, 97, 105, 108, 97, 98, 108, 101, 0, 66, 97, 100, 32, 102, 105, 108, 101, 32, 100, 101, 115, 99, 114, 105, 112, 116, 111, 114, 0, 78, 111, 32, 99, 104, 105, 108, 100, 32, 112, 114, 111, 99, 101, 115, 115, 0, 66, 97, 100, 32, 97, 100, 100, 114, 101, 115, 115, 0, 70, 105, 108, 101, 32, 116, 111, 111, 32, 108, 97, 114, 103, 101, 0, 84, 111, 111, 32, 109, 97, 110, 121, 32, 108, 105, 110, 107, 115, 0, 78, 111, 32, 108, 111, 99, 107, 115, 32, 97, 118, 97, 105, 108, 97, 98, 108, 101, 0, 82, 101, 115, 111, 117, 114, 99, 101, 32, 100, 101, 97, 100, 108, 111, 99, 107, 32, 119, 111, 117, 108, 100, 32, 111, 99, 99, 117, 114, 0, 83, 116, 97, 116, 101, 32, 110, 111, 116, 32, 114, 101, 99, 111, 118, 101, 114, 97, 98, 108, 101, 0, 80, 114, 101, 118, 105, 111, 117, 115, 32, 111, 119, 110, 101, 114, 32, 100, 105, 101, 100, 0, 79, 112, 101, 114, 97, 116, 105, 111, 110, 32, 99, 97, 110, 99, 101, 108, 101, 100, 0, 70, 117, 110, 99, 116, 105, 111, 110, 32, 110, 111, 116, 32, 105, 109, 112, 108, 101, 109, 101, 110, 116, 101, 100, 0, 78, 111, 32, 109, 101, 115, 115, 97, 103, 101, 32, 111, 102, 32, 100, 101, 115, 105, 114, 101, 100, 32, 116, 121, 112, 101, 0, 73, 100, 101, 110, 116, 105, 102, 105, 101, 114, 32, 114, 101, 109, 111, 118, 101, 100, 0, 68, 101, 118, 105, 99, 101, 32, 110, 111, 116, 32, 97, 32, 115, 116, 114, 101, 97, 109, 0, 78, 111, 32, 100, 97, 116, 97, 32, 97, 118, 97, 105, 108, 97, 98, 108, 101, 0, 68, 101, 118, 105, 99, 101, 32, 116, 105, 109, 101, 111, 117, 116, 0, 79, 117, 116, 32, 111, 102, 32, 115, 116, 114, 101, 97, 109, 115, 32, 114, 101, 115, 111, 117, 114, 99, 101, 115, 0, 76, 105, 110, 107, 32, 104, 97, 115, 32, 98, 101, 101, 110, 32, 115, 101, 118, 101, 114, 101, 100, 0, 80, 114, 111, 116, 111, 99, 111, 108, 32, 101, 114, 114, 111, 114, 0, 66, 97, 100, 32, 109, 101, 115, 115, 97, 103, 101, 0, 70, 105, 108, 101, 32, 100, 101, 115, 99, 114, 105, 112, 116, 111, 114, 32, 105, 110, 32, 98, 97, 100, 32, 115, 116, 97, 116, 101, 0, 78, 111, 116, 32, 97, 32, 115, 111, 99, 107, 101, 116, 0, 68, 101, 115, 116, 105, 110, 97, 116, 105, 111, 110, 32, 97, 100, 100, 114, 101, 115, 115, 32, 114, 101, 113, 117, 105, 114, 101, 100, 0, 77, 101, 115, 115, 97, 103, 101, 32, 116, 111, 111, 32, 108, 97, 114, 103, 101, 0, 80, 114, 111, 116, 111, 99, 111, 108, 32, 119, 114, 111, 110, 103, 32, 116, 121, 112, 101, 32, 102, 111, 114, 32, 115, 111, 99, 107, 101, 116, 0, 80, 114, 111, 116, 111, 99, 111, 108, 32, 110, 111, 116, 32, 97, 118, 97, 105, 108, 97, 98, 108, 101, 0, 80, 114, 111, 116, 111, 99, 111, 108, 32, 110, 111, 116, 32, 115, 117, 112, 112, 111, 114, 116, 101, 100, 0, 83, 111, 99, 107, 101, 116, 32, 116, 121, 112, 101, 32, 110, 111, 116, 32, 115, 117, 112, 112, 111, 114, 116, 101, 100, 0, 78, 111, 116, 32, 115, 117, 112, 112, 111, 114, 116, 101, 100, 0, 80, 114, 111, 116, 111, 99, 111, 108, 32, 102, 97, 109, 105, 108, 121, 32, 110, 111, 116, 32, 115, 117, 112, 112, 111, 114, 116, 101, 100, 0, 65, 100, 100, 114, 101, 115, 115, 32, 102, 97, 109, 105, 108, 121, 32, 110, 111, 116, 32, 115, 117, 112, 112, 111, 114, 116, 101, 100, 32, 98, 121, 32, 112, 114, 111, 116, 111, 99, 111, 108, 0, 65, 100, 100, 114, 101, 115, 115, 32, 110, 111, 116, 32, 97, 118, 97, 105, 108, 97, 98, 108, 101, 0, 78, 101, 116, 119, 111, 114, 107, 32, 105, 115, 32, 100, 111, 119, 110, 0, 78, 101, 116, 119, 111, 114, 107, 32, 117, 110, 114, 101, 97, 99, 104, 97, 98, 108, 101, 0, 67, 111, 110, 110, 101, 99, 116, 105, 111, 110, 32, 114, 101, 115, 101, 116, 32, 98, 121, 32, 110, 101, 116, 119, 111, 114, 107, 0, 67, 111, 110, 110, 101, 99, 116, 105, 111, 110, 32, 97, 98, 111, 114, 116, 101, 100, 0, 78, 111, 32, 98, 117, 102, 102, 101, 114, 32, 115, 112, 97, 99, 101, 32, 97, 118, 97, 105, 108, 97, 98, 108, 101, 0, 83, 111, 99, 107, 101, 116, 32, 105, 115, 32, 99, 111, 110, 110, 101, 99, 116, 101, 100, 0, 83, 111, 99, 107, 101, 116, 32, 110, 111, 116, 32, 99, 111, 110, 110, 101, 99, 116, 101, 100, 0, 67, 97, 110, 110, 111, 116, 32, 115, 101, 110, 100, 32, 97, 102, 116, 101, 114, 32, 115, 111, 99, 107, 101, 116, 32, 115, 104, 117, 116, 100, 111, 119, 110, 0, 79, 112, 101, 114, 97, 116, 105, 111, 110, 32, 97, 108, 114, 101, 97, 100, 121, 32, 105, 110, 32, 112, 114, 111, 103, 114, 101, 115, 115, 0, 79, 112, 101, 114, 97, 116, 105, 111, 110, 32, 105, 110, 32, 112, 114, 111, 103, 114, 101, 115, 115, 0, 83, 116, 97, 108, 101, 32, 102, 105, 108, 101, 32, 104, 97, 110, 100, 108, 101, 0, 82, 101, 109, 111, 116, 101, 32, 73, 47, 79, 32, 101, 114, 114, 111, 114, 0, 81, 117, 111, 116, 97, 32, 101, 120, 99, 101, 101, 100, 101, 100, 0, 78, 111, 32, 109, 101, 100, 105, 117, 109, 32, 102, 111, 117, 110, 100, 0, 87, 114, 111, 110, 103, 32, 109, 101, 100, 105, 117, 109, 32, 116, 121, 112, 101, 0, 78, 111, 32, 101, 114, 114, 111, 114, 32, 105, 110, 102, 111, 114, 109, 97, 116, 105, 111, 110, 0, 0, 33, 34, 118, 101, 99, 116, 111, 114, 32, 108, 101, 110, 103, 116, 104, 95, 101, 114, 114, 111, 114, 34, 0, 47, 85, 115, 101, 114, 115, 47, 103, 114, 101, 103, 103, 47, 115, 114, 99, 47, 101, 109, 115, 100, 107, 47, 101, 109, 115, 99, 114, 105, 112, 116, 101, 110, 47, 49, 46, 51, 55, 46, 57, 47, 115, 121, 115, 116, 101, 109, 47, 105, 110, 99, 108, 117, 100, 101, 47, 108, 105, 98, 99, 120, 120, 47, 118, 101, 99, 116, 111, 114, 0, 95, 95, 116, 104, 114, 111, 119, 95, 108, 101, 110, 103, 116, 104, 95, 101, 114, 114, 111, 114, 0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE);var tempDoublePtr = STATICTOP;STATICTOP += 16;function _atexit(func, arg) {
    __ATEXIT__.unshift({ func: func, arg: arg });
  }function ___cxa_atexit() {
    return _atexit.apply(null, arguments);
  }Module["_i64Subtract"] = _i64Subtract;Module["_i64Add"] = _i64Add;Module["_memset"] = _memset;function __decorate(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;return c > 3 && r && Object.defineProperty(target, key, r), r;
  }function _defineHidden(value) {
    return function (target, key) {
      Object.defineProperty(target, key, { configurable: false, enumerable: false, value: value, writable: true });
    };
  }var _nbind = {};function __nbind_register_primitive(id, size, flags) {
    var spec = { flags: 1024 | flags, id: id, ptrSize: size };_nbind.makeType(_nbind.constructType, spec);
  }Module["_bitshift64Shl"] = _bitshift64Shl;function _abort() {
    Module["abort"]();
  }function __nbind_free_external(num) {
    _nbind.externalList[num].dereference(num);
  }function _YGWrapToString() {
    Module["printErr"]("missing function: YGWrapToString");abort(-1);
  }function __nbind_reference_external(num) {
    _nbind.externalList[num].reference();
  }function ___assert_fail(condition, filename, line, func) {
    ABORT = true;throw "Assertion failed: " + Pointer_stringify(condition) + ", at: " + [filename ? Pointer_stringify(filename) : "unknown filename", line, func ? Pointer_stringify(func) : "unknown function"] + " at " + stackTrace();
  }function _YGFlexDirectionToString() {
    Module["printErr"]("missing function: YGFlexDirectionToString");abort(-1);
  }function _YGJustifyToString() {
    Module["printErr"]("missing function: YGJustifyToString");abort(-1);
  }function __nbind_register_pool(pageSize, usedPtr, rootPtr, pagePtr) {
    _nbind.Pool.pageSize = pageSize;_nbind.Pool.usedPtr = usedPtr / 4;_nbind.Pool.rootPtr = rootPtr;_nbind.Pool.pagePtr = pagePtr / 4;HEAP32[usedPtr / 4] = 16909060;if (HEAP8[usedPtr] == 1) _nbind.bigEndian = true;HEAP32[usedPtr / 4] = 0;_nbind.makeTypeKindTbl = (_a = {}, _a[1024] = _nbind.PrimitiveType, _a[64] = _nbind.Int64Type, _a[2048] = _nbind.BindClass, _a[3072] = _nbind.BindClassPtr, _a[4096] = _nbind.SharedClassPtr, _a[5120] = _nbind.ArrayType, _a[6144] = _nbind.ArrayType, _a[7168] = _nbind.CStringType, _a[9216] = _nbind.CallbackType, _a[10240] = _nbind.BindType, _a);_nbind.makeTypeNameTbl = { "Buffer": _nbind.BufferType, "External": _nbind.ExternalType, "Int64": _nbind.Int64Type, "_nbind_new": _nbind.CreateValueType, "bool": _nbind.BooleanType, "cbFunction &": _nbind.CallbackType, "const cbFunction &": _nbind.CallbackType, "const std::string &": _nbind.StringType, "std::string": _nbind.StringType };Module["toggleLightGC"] = _nbind.toggleLightGC;_nbind.callUpcast = Module["dynCall_ii"];var globalScope = _nbind.makeType(_nbind.constructType, { flags: 2048, id: 0, name: "" });globalScope.proto = Module;_nbind.BindClass.list.push(globalScope);var _a;
  }function _emscripten_set_main_loop_timing(mode, value) {
    Browser.mainLoop.timingMode = mode;Browser.mainLoop.timingValue = value;if (!Browser.mainLoop.func) {
      return 1;
    }if (mode == 0) {
      Browser.mainLoop.scheduler = function Browser_mainLoop_scheduler_setTimeout() {
        var timeUntilNextTick = Math.max(0, Browser.mainLoop.tickStartTime + value - _emscripten_get_now()) | 0;setTimeout(Browser.mainLoop.runner, timeUntilNextTick);
      };Browser.mainLoop.method = "timeout";
    } else if (mode == 1) {
      Browser.mainLoop.scheduler = function Browser_mainLoop_scheduler_rAF() {
        Browser.requestAnimationFrame(Browser.mainLoop.runner);
      };Browser.mainLoop.method = "rAF";
    } else if (mode == 2) {
      if (!window["setImmediate"]) {
        var setImmediates = [];var emscriptenMainLoopMessageId = "setimmediate";function Browser_setImmediate_messageHandler(event) {
          if (event.source === window && event.data === emscriptenMainLoopMessageId) {
            event.stopPropagation();setImmediates.shift()();
          }
        }window.addEventListener("message", Browser_setImmediate_messageHandler, true);window["setImmediate"] = function Browser_emulated_setImmediate(func) {
          setImmediates.push(func);if (ENVIRONMENT_IS_WORKER) {
            if (Module["setImmediates"] === undefined) Module["setImmediates"] = [];Module["setImmediates"].push(func);window.postMessage({ target: emscriptenMainLoopMessageId });
          } else window.postMessage(emscriptenMainLoopMessageId, "*");
        };
      }Browser.mainLoop.scheduler = function Browser_mainLoop_scheduler_setImmediate() {
        window["setImmediate"](Browser.mainLoop.runner);
      };Browser.mainLoop.method = "immediate";
    }return 0;
  }function _emscripten_get_now() {
    abort();
  }function _emscripten_set_main_loop(func, fps, simulateInfiniteLoop, arg, noSetTiming) {
    Module["noExitRuntime"] = true;assert(!Browser.mainLoop.func, "emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters.");Browser.mainLoop.func = func;Browser.mainLoop.arg = arg;var browserIterationFunc;if (typeof arg !== "undefined") {
      browserIterationFunc = function () {
        Module["dynCall_vi"](func, arg);
      };
    } else {
      browserIterationFunc = function () {
        Module["dynCall_v"](func);
      };
    }var thisMainLoopId = Browser.mainLoop.currentlyRunningMainloop;Browser.mainLoop.runner = function Browser_mainLoop_runner() {
      if (ABORT) return;if (Browser.mainLoop.queue.length > 0) {
        var start = Date.now();var blocker = Browser.mainLoop.queue.shift();blocker.func(blocker.arg);if (Browser.mainLoop.remainingBlockers) {
          var remaining = Browser.mainLoop.remainingBlockers;var next = remaining % 1 == 0 ? remaining - 1 : Math.floor(remaining);if (blocker.counted) {
            Browser.mainLoop.remainingBlockers = next;
          } else {
            next = next + .5;Browser.mainLoop.remainingBlockers = (8 * remaining + next) / 9;
          }
        }console.log('main loop blocker "' + blocker.name + '" took ' + (Date.now() - start) + " ms");Browser.mainLoop.updateStatus();if (thisMainLoopId < Browser.mainLoop.currentlyRunningMainloop) return;setTimeout(Browser.mainLoop.runner, 0);return;
      }if (thisMainLoopId < Browser.mainLoop.currentlyRunningMainloop) return;Browser.mainLoop.currentFrameNumber = Browser.mainLoop.currentFrameNumber + 1 | 0;if (Browser.mainLoop.timingMode == 1 && Browser.mainLoop.timingValue > 1 && Browser.mainLoop.currentFrameNumber % Browser.mainLoop.timingValue != 0) {
        Browser.mainLoop.scheduler();return;
      } else if (Browser.mainLoop.timingMode == 0) {
        Browser.mainLoop.tickStartTime = _emscripten_get_now();
      }if (Browser.mainLoop.method === "timeout" && Module.ctx) {
        Module.printErr("Looks like you are rendering without using requestAnimationFrame for the main loop. You should use 0 for the frame rate in emscripten_set_main_loop in order to use requestAnimationFrame, as that can greatly improve your frame rates!");Browser.mainLoop.method = "";
      }Browser.mainLoop.runIter(browserIterationFunc);if (thisMainLoopId < Browser.mainLoop.currentlyRunningMainloop) return;if (typeof SDL === "object" && SDL.audio && SDL.audio.queueNewAudioData) SDL.audio.queueNewAudioData();Browser.mainLoop.scheduler();
    };if (!noSetTiming) {
      if (fps && fps > 0) _emscripten_set_main_loop_timing(0, 1e3 / fps);else _emscripten_set_main_loop_timing(1, 1);Browser.mainLoop.scheduler();
    }if (simulateInfiniteLoop) {
      throw "SimulateInfiniteLoop";
    }
  }var Browser = { mainLoop: { scheduler: null, method: "", currentlyRunningMainloop: 0, func: null, arg: 0, timingMode: 0, timingValue: 0, currentFrameNumber: 0, queue: [], pause: function () {
        Browser.mainLoop.scheduler = null;Browser.mainLoop.currentlyRunningMainloop++;
      }, resume: function () {
        Browser.mainLoop.currentlyRunningMainloop++;var timingMode = Browser.mainLoop.timingMode;var timingValue = Browser.mainLoop.timingValue;var func = Browser.mainLoop.func;Browser.mainLoop.func = null;_emscripten_set_main_loop(func, 0, false, Browser.mainLoop.arg, true);_emscripten_set_main_loop_timing(timingMode, timingValue);Browser.mainLoop.scheduler();
      }, updateStatus: function () {
        if (Module["setStatus"]) {
          var message = Module["statusMessage"] || "Please wait...";var remaining = Browser.mainLoop.remainingBlockers;var expected = Browser.mainLoop.expectedBlockers;if (remaining) {
            if (remaining < expected) {
              Module["setStatus"](message + " (" + (expected - remaining) + "/" + expected + ")");
            } else {
              Module["setStatus"](message);
            }
          } else {
            Module["setStatus"]("");
          }
        }
      }, runIter: function (func) {
        if (ABORT) return;if (Module["preMainLoop"]) {
          var preRet = Module["preMainLoop"]();if (preRet === false) {
            return;
          }
        }try {
          func();
        } catch (e) {
          if (e instanceof ExitStatus) {
            return;
          } else {
            if (e && typeof e === "object" && e.stack) Module.printErr("exception thrown: " + [e, e.stack]);throw e;
          }
        }if (Module["postMainLoop"]) Module["postMainLoop"]();
      } }, isFullscreen: false, pointerLock: false, moduleContextCreatedCallbacks: [], workers: [], init: function () {
      if (!Module["preloadPlugins"]) Module["preloadPlugins"] = [];if (Browser.initted) return;Browser.initted = true;try {
        new Blob();Browser.hasBlobConstructor = true;
      } catch (e) {
        Browser.hasBlobConstructor = false;console.log("warning: no blob constructor, cannot create blobs with mimetypes");
      }Browser.BlobBuilder = typeof MozBlobBuilder != "undefined" ? MozBlobBuilder : typeof WebKitBlobBuilder != "undefined" ? WebKitBlobBuilder : !Browser.hasBlobConstructor ? console.log("warning: no BlobBuilder") : null;Browser.URLObject = typeof window != "undefined" ? window.URL ? window.URL : window.webkitURL : undefined;if (!Module.noImageDecoding && typeof Browser.URLObject === "undefined") {
        console.log("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available.");Module.noImageDecoding = true;
      }var imagePlugin = {};imagePlugin["canHandle"] = function imagePlugin_canHandle(name) {
        return !Module.noImageDecoding && /\.(jpg|jpeg|png|bmp)$/i.test(name);
      };imagePlugin["handle"] = function imagePlugin_handle(byteArray, name, onload, onerror) {
        var b = null;if (Browser.hasBlobConstructor) {
          try {
            b = new Blob([byteArray], { type: Browser.getMimetype(name) });if (b.size !== byteArray.length) {
              b = new Blob([new Uint8Array(byteArray).buffer], { type: Browser.getMimetype(name) });
            }
          } catch (e) {
            Runtime.warnOnce("Blob constructor present but fails: " + e + "; falling back to blob builder");
          }
        }if (!b) {
          var bb = new Browser.BlobBuilder();bb.append(new Uint8Array(byteArray).buffer);b = bb.getBlob();
        }var url = Browser.URLObject.createObjectURL(b);var img = new Image();img.onload = function img_onload() {
          assert(img.complete, "Image " + name + " could not be decoded");var canvas = document.createElement("canvas");canvas.width = img.width;canvas.height = img.height;var ctx = canvas.getContext("2d");ctx.drawImage(img, 0, 0);Module["preloadedImages"][name] = canvas;Browser.URLObject.revokeObjectURL(url);if (onload) onload(byteArray);
        };img.onerror = function img_onerror(event) {
          console.log("Image " + url + " could not be decoded");if (onerror) onerror();
        };img.src = url;
      };Module["preloadPlugins"].push(imagePlugin);var audioPlugin = {};audioPlugin["canHandle"] = function audioPlugin_canHandle(name) {
        return !Module.noAudioDecoding && name.substr(-4) in { ".ogg": 1, ".wav": 1, ".mp3": 1 };
      };audioPlugin["handle"] = function audioPlugin_handle(byteArray, name, onload, onerror) {
        var done = false;function finish(audio) {
          if (done) return;done = true;Module["preloadedAudios"][name] = audio;if (onload) onload(byteArray);
        }function fail() {
          if (done) return;done = true;Module["preloadedAudios"][name] = new Audio();if (onerror) onerror();
        }if (Browser.hasBlobConstructor) {
          try {
            var b = new Blob([byteArray], { type: Browser.getMimetype(name) });
          } catch (e) {
            return fail();
          }var url = Browser.URLObject.createObjectURL(b);var audio = new Audio();audio.addEventListener("canplaythrough", function () {
            finish(audio);
          }, false);audio.onerror = function audio_onerror(event) {
            if (done) return;console.log("warning: browser could not fully decode audio " + name + ", trying slower base64 approach");function encode64(data) {
              var BASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";var PAD = "=";var ret = "";var leftchar = 0;var leftbits = 0;for (var i = 0; i < data.length; i++) {
                leftchar = leftchar << 8 | data[i];leftbits += 8;while (leftbits >= 6) {
                  var curr = leftchar >> leftbits - 6 & 63;leftbits -= 6;ret += BASE[curr];
                }
              }if (leftbits == 2) {
                ret += BASE[(leftchar & 3) << 4];ret += PAD + PAD;
              } else if (leftbits == 4) {
                ret += BASE[(leftchar & 15) << 2];ret += PAD;
              }return ret;
            }audio.src = "data:audio/x-" + name.substr(-3) + ";base64," + encode64(byteArray);finish(audio);
          };audio.src = url;Browser.safeSetTimeout(function () {
            finish(audio);
          }, 1e4);
        } else {
          return fail();
        }
      };Module["preloadPlugins"].push(audioPlugin);function pointerLockChange() {
        Browser.pointerLock = document["pointerLockElement"] === Module["canvas"] || document["mozPointerLockElement"] === Module["canvas"] || document["webkitPointerLockElement"] === Module["canvas"] || document["msPointerLockElement"] === Module["canvas"];
      }var canvas = Module["canvas"];if (canvas) {
        canvas.requestPointerLock = canvas["requestPointerLock"] || canvas["mozRequestPointerLock"] || canvas["webkitRequestPointerLock"] || canvas["msRequestPointerLock"] || function () {};canvas.exitPointerLock = document["exitPointerLock"] || document["mozExitPointerLock"] || document["webkitExitPointerLock"] || document["msExitPointerLock"] || function () {};canvas.exitPointerLock = canvas.exitPointerLock.bind(document);document.addEventListener("pointerlockchange", pointerLockChange, false);document.addEventListener("mozpointerlockchange", pointerLockChange, false);document.addEventListener("webkitpointerlockchange", pointerLockChange, false);document.addEventListener("mspointerlockchange", pointerLockChange, false);if (Module["elementPointerLock"]) {
          canvas.addEventListener("click", function (ev) {
            if (!Browser.pointerLock && Module["canvas"].requestPointerLock) {
              Module["canvas"].requestPointerLock();ev.preventDefault();
            }
          }, false);
        }
      }
    }, createContext: function (canvas, useWebGL, setInModule, webGLContextAttributes) {
      if (useWebGL && Module.ctx && canvas == Module.canvas) return Module.ctx;var ctx;var contextHandle;if (useWebGL) {
        var contextAttributes = { antialias: false, alpha: false };if (webGLContextAttributes) {
          for (var attribute in webGLContextAttributes) {
            contextAttributes[attribute] = webGLContextAttributes[attribute];
          }
        }contextHandle = GL.createContext(canvas, contextAttributes);if (contextHandle) {
          ctx = GL.getContext(contextHandle).GLctx;
        }
      } else {
        ctx = canvas.getContext("2d");
      }if (!ctx) return null;if (setInModule) {
        if (!useWebGL) assert(typeof GLctx === "undefined", "cannot set in module if GLctx is used, but we are a non-GL context that would replace it");Module.ctx = ctx;if (useWebGL) GL.makeContextCurrent(contextHandle);Module.useWebGL = useWebGL;Browser.moduleContextCreatedCallbacks.forEach(function (callback) {
          callback();
        });Browser.init();
      }return ctx;
    }, destroyContext: function (canvas, useWebGL, setInModule) {}, fullscreenHandlersInstalled: false, lockPointer: undefined, resizeCanvas: undefined, requestFullscreen: function (lockPointer, resizeCanvas, vrDevice) {
      Browser.lockPointer = lockPointer;Browser.resizeCanvas = resizeCanvas;Browser.vrDevice = vrDevice;if (typeof Browser.lockPointer === "undefined") Browser.lockPointer = true;if (typeof Browser.resizeCanvas === "undefined") Browser.resizeCanvas = false;if (typeof Browser.vrDevice === "undefined") Browser.vrDevice = null;var canvas = Module["canvas"];function fullscreenChange() {
        Browser.isFullscreen = false;var canvasContainer = canvas.parentNode;if ((document["fullscreenElement"] || document["mozFullScreenElement"] || document["msFullscreenElement"] || document["webkitFullscreenElement"] || document["webkitCurrentFullScreenElement"]) === canvasContainer) {
          canvas.exitFullscreen = document["exitFullscreen"] || document["cancelFullScreen"] || document["mozCancelFullScreen"] || document["msExitFullscreen"] || document["webkitCancelFullScreen"] || function () {};canvas.exitFullscreen = canvas.exitFullscreen.bind(document);if (Browser.lockPointer) canvas.requestPointerLock();Browser.isFullscreen = true;if (Browser.resizeCanvas) Browser.setFullscreenCanvasSize();
        } else {
          canvasContainer.parentNode.insertBefore(canvas, canvasContainer);canvasContainer.parentNode.removeChild(canvasContainer);if (Browser.resizeCanvas) Browser.setWindowedCanvasSize();
        }if (Module["onFullScreen"]) Module["onFullScreen"](Browser.isFullscreen);if (Module["onFullscreen"]) Module["onFullscreen"](Browser.isFullscreen);Browser.updateCanvasDimensions(canvas);
      }if (!Browser.fullscreenHandlersInstalled) {
        Browser.fullscreenHandlersInstalled = true;document.addEventListener("fullscreenchange", fullscreenChange, false);document.addEventListener("mozfullscreenchange", fullscreenChange, false);document.addEventListener("webkitfullscreenchange", fullscreenChange, false);document.addEventListener("MSFullscreenChange", fullscreenChange, false);
      }var canvasContainer = document.createElement("div");canvas.parentNode.insertBefore(canvasContainer, canvas);canvasContainer.appendChild(canvas);canvasContainer.requestFullscreen = canvasContainer["requestFullscreen"] || canvasContainer["mozRequestFullScreen"] || canvasContainer["msRequestFullscreen"] || (canvasContainer["webkitRequestFullscreen"] ? function () {
        canvasContainer["webkitRequestFullscreen"](Element["ALLOW_KEYBOARD_INPUT"]);
      } : null) || (canvasContainer["webkitRequestFullScreen"] ? function () {
        canvasContainer["webkitRequestFullScreen"](Element["ALLOW_KEYBOARD_INPUT"]);
      } : null);if (vrDevice) {
        canvasContainer.requestFullscreen({ vrDisplay: vrDevice });
      } else {
        canvasContainer.requestFullscreen();
      }
    }, requestFullScreen: function (lockPointer, resizeCanvas, vrDevice) {
      Module.printErr("Browser.requestFullScreen() is deprecated. Please call Browser.requestFullscreen instead.");Browser.requestFullScreen = function (lockPointer, resizeCanvas, vrDevice) {
        return Browser.requestFullscreen(lockPointer, resizeCanvas, vrDevice);
      };return Browser.requestFullscreen(lockPointer, resizeCanvas, vrDevice);
    }, nextRAF: 0, fakeRequestAnimationFrame: function (func) {
      var now = Date.now();if (Browser.nextRAF === 0) {
        Browser.nextRAF = now + 1e3 / 60;
      } else {
        while (now + 2 >= Browser.nextRAF) {
          Browser.nextRAF += 1e3 / 60;
        }
      }var delay = Math.max(Browser.nextRAF - now, 0);setTimeout(func, delay);
    }, requestAnimationFrame: function requestAnimationFrame(func) {
      if (typeof window === "undefined") {
        Browser.fakeRequestAnimationFrame(func);
      } else {
        if (!window.requestAnimationFrame) {
          window.requestAnimationFrame = window["requestAnimationFrame"] || window["mozRequestAnimationFrame"] || window["webkitRequestAnimationFrame"] || window["msRequestAnimationFrame"] || window["oRequestAnimationFrame"] || Browser.fakeRequestAnimationFrame;
        }window.requestAnimationFrame(func);
      }
    }, safeCallback: function (func) {
      return function () {
        if (!ABORT) return func.apply(null, arguments);
      };
    }, allowAsyncCallbacks: true, queuedAsyncCallbacks: [], pauseAsyncCallbacks: function () {
      Browser.allowAsyncCallbacks = false;
    }, resumeAsyncCallbacks: function () {
      Browser.allowAsyncCallbacks = true;if (Browser.queuedAsyncCallbacks.length > 0) {
        var callbacks = Browser.queuedAsyncCallbacks;Browser.queuedAsyncCallbacks = [];callbacks.forEach(function (func) {
          func();
        });
      }
    }, safeRequestAnimationFrame: function (func) {
      return Browser.requestAnimationFrame(function () {
        if (ABORT) return;if (Browser.allowAsyncCallbacks) {
          func();
        } else {
          Browser.queuedAsyncCallbacks.push(func);
        }
      });
    }, safeSetTimeout: function (func, timeout) {
      Module["noExitRuntime"] = true;return setTimeout(function () {
        if (ABORT) return;if (Browser.allowAsyncCallbacks) {
          func();
        } else {
          Browser.queuedAsyncCallbacks.push(func);
        }
      }, timeout);
    }, safeSetInterval: function (func, timeout) {
      Module["noExitRuntime"] = true;return setInterval(function () {
        if (ABORT) return;if (Browser.allowAsyncCallbacks) {
          func();
        }
      }, timeout);
    }, getMimetype: function (name) {
      return { "jpg": "image/jpeg", "jpeg": "image/jpeg", "png": "image/png", "bmp": "image/bmp", "ogg": "audio/ogg", "wav": "audio/wav", "mp3": "audio/mpeg" }[name.substr(name.lastIndexOf(".") + 1)];
    }, getUserMedia: function (func) {
      if (!window.getUserMedia) {
        window.getUserMedia = navigator["getUserMedia"] || navigator["mozGetUserMedia"];
      }window.getUserMedia(func);
    }, getMovementX: function (event) {
      return event["movementX"] || event["mozMovementX"] || event["webkitMovementX"] || 0;
    }, getMovementY: function (event) {
      return event["movementY"] || event["mozMovementY"] || event["webkitMovementY"] || 0;
    }, getMouseWheelDelta: function (event) {
      var delta = 0;switch (event.type) {case "DOMMouseScroll":
          delta = event.detail;break;case "mousewheel":
          delta = event.wheelDelta;break;case "wheel":
          delta = event["deltaY"];break;default:
          throw "unrecognized mouse wheel event: " + event.type;}return delta;
    }, mouseX: 0, mouseY: 0, mouseMovementX: 0, mouseMovementY: 0, touches: {}, lastTouches: {}, calculateMouseEvent: function (event) {
      if (Browser.pointerLock) {
        if (event.type != "mousemove" && "mozMovementX" in event) {
          Browser.mouseMovementX = Browser.mouseMovementY = 0;
        } else {
          Browser.mouseMovementX = Browser.getMovementX(event);Browser.mouseMovementY = Browser.getMovementY(event);
        }if (typeof SDL != "undefined") {
          Browser.mouseX = SDL.mouseX + Browser.mouseMovementX;Browser.mouseY = SDL.mouseY + Browser.mouseMovementY;
        } else {
          Browser.mouseX += Browser.mouseMovementX;Browser.mouseY += Browser.mouseMovementY;
        }
      } else {
        var rect = Module["canvas"].getBoundingClientRect();var cw = Module["canvas"].width;var ch = Module["canvas"].height;var scrollX = typeof window.scrollX !== "undefined" ? window.scrollX : window.pageXOffset;var scrollY = typeof window.scrollY !== "undefined" ? window.scrollY : window.pageYOffset;if (event.type === "touchstart" || event.type === "touchend" || event.type === "touchmove") {
          var touch = event.touch;if (touch === undefined) {
            return;
          }var adjustedX = touch.pageX - (scrollX + rect.left);var adjustedY = touch.pageY - (scrollY + rect.top);adjustedX = adjustedX * (cw / rect.width);adjustedY = adjustedY * (ch / rect.height);var coords = { x: adjustedX, y: adjustedY };if (event.type === "touchstart") {
            Browser.lastTouches[touch.identifier] = coords;Browser.touches[touch.identifier] = coords;
          } else if (event.type === "touchend" || event.type === "touchmove") {
            var last = Browser.touches[touch.identifier];if (!last) last = coords;Browser.lastTouches[touch.identifier] = last;Browser.touches[touch.identifier] = coords;
          }return;
        }var x = event.pageX - (scrollX + rect.left);var y = event.pageY - (scrollY + rect.top);x = x * (cw / rect.width);y = y * (ch / rect.height);Browser.mouseMovementX = x - Browser.mouseX;Browser.mouseMovementY = y - Browser.mouseY;Browser.mouseX = x;Browser.mouseY = y;
      }
    }, asyncLoad: function (url, onload, onerror, noRunDep) {
      var dep = !noRunDep ? getUniqueRunDependency("al " + url) : "";Module["readAsync"](url, function (arrayBuffer) {
        assert(arrayBuffer, 'Loading data file "' + url + '" failed (no arrayBuffer).');onload(new Uint8Array(arrayBuffer));if (dep) removeRunDependency(dep);
      }, function (event) {
        if (onerror) {
          onerror();
        } else {
          throw 'Loading data file "' + url + '" failed.';
        }
      });if (dep) addRunDependency(dep);
    }, resizeListeners: [], updateResizeListeners: function () {
      var canvas = Module["canvas"];Browser.resizeListeners.forEach(function (listener) {
        listener(canvas.width, canvas.height);
      });
    }, setCanvasSize: function (width, height, noUpdates) {
      var canvas = Module["canvas"];Browser.updateCanvasDimensions(canvas, width, height);if (!noUpdates) Browser.updateResizeListeners();
    }, windowedWidth: 0, windowedHeight: 0, setFullscreenCanvasSize: function () {
      if (typeof SDL != "undefined") {
        var flags = HEAPU32[SDL.screen + Runtime.QUANTUM_SIZE * 0 >> 2];flags = flags | 8388608;HEAP32[SDL.screen + Runtime.QUANTUM_SIZE * 0 >> 2] = flags;
      }Browser.updateResizeListeners();
    }, setWindowedCanvasSize: function () {
      if (typeof SDL != "undefined") {
        var flags = HEAPU32[SDL.screen + Runtime.QUANTUM_SIZE * 0 >> 2];flags = flags & ~8388608;HEAP32[SDL.screen + Runtime.QUANTUM_SIZE * 0 >> 2] = flags;
      }Browser.updateResizeListeners();
    }, updateCanvasDimensions: function (canvas, wNative, hNative) {
      if (wNative && hNative) {
        canvas.widthNative = wNative;canvas.heightNative = hNative;
      } else {
        wNative = canvas.widthNative;hNative = canvas.heightNative;
      }var w = wNative;var h = hNative;if (Module["forcedAspectRatio"] && Module["forcedAspectRatio"] > 0) {
        if (w / h < Module["forcedAspectRatio"]) {
          w = Math.round(h * Module["forcedAspectRatio"]);
        } else {
          h = Math.round(w / Module["forcedAspectRatio"]);
        }
      }if ((document["fullscreenElement"] || document["mozFullScreenElement"] || document["msFullscreenElement"] || document["webkitFullscreenElement"] || document["webkitCurrentFullScreenElement"]) === canvas.parentNode && typeof screen != "undefined") {
        var factor = Math.min(screen.width / w, screen.height / h);w = Math.round(w * factor);h = Math.round(h * factor);
      }if (Browser.resizeCanvas) {
        if (canvas.width != w) canvas.width = w;if (canvas.height != h) canvas.height = h;if (typeof canvas.style != "undefined") {
          canvas.style.removeProperty("width");canvas.style.removeProperty("height");
        }
      } else {
        if (canvas.width != wNative) canvas.width = wNative;if (canvas.height != hNative) canvas.height = hNative;if (typeof canvas.style != "undefined") {
          if (w != wNative || h != hNative) {
            canvas.style.setProperty("width", w + "px", "important");canvas.style.setProperty("height", h + "px", "important");
          } else {
            canvas.style.removeProperty("width");canvas.style.removeProperty("height");
          }
        }
      }
    }, wgetRequests: {}, nextWgetRequestHandle: 0, getNextWgetRequestHandle: function () {
      var handle = Browser.nextWgetRequestHandle;Browser.nextWgetRequestHandle++;return handle;
    } };var SYSCALLS = { varargs: 0, get: function (varargs) {
      SYSCALLS.varargs += 4;var ret = HEAP32[SYSCALLS.varargs - 4 >> 2];return ret;
    }, getStr: function () {
      var ret = Pointer_stringify(SYSCALLS.get());return ret;
    }, get64: function () {
      var low = SYSCALLS.get(),
          high = SYSCALLS.get();if (low >= 0) assert(high === 0);else assert(high === -1);return low;
    }, getZero: function () {
      assert(SYSCALLS.get() === 0);
    } };function ___syscall6(which, varargs) {
    SYSCALLS.varargs = varargs;try {
      var stream = SYSCALLS.getStreamFromFD();FS.close(stream);return 0;
    } catch (e) {
      if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);return -e.errno;
    }
  }function ___syscall54(which, varargs) {
    SYSCALLS.varargs = varargs;try {
      return 0;
    } catch (e) {
      if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);return -e.errno;
    }
  }Module["_bitshift64Lshr"] = _bitshift64Lshr;function _typeModule(self) {
    var structureList = [[0, 1, "X"], [1, 1, "const X"], [128, 1, "X *"], [256, 1, "X &"], [384, 1, "X &&"], [512, 1, "std::shared_ptr<X>"], [640, 1, "std::unique_ptr<X>"], [5120, 1, "std::vector<X>"], [6144, 2, "std::array<X, Y>"], [9216, -1, "std::function<X (Y)>"]];function applyStructure(outerName, outerFlags, innerName, innerFlags, param, flip) {
      if (outerFlags == 1) {
        var ref = innerFlags & 896;if (ref == 128 || ref == 256 || ref == 384) outerName = "X const";
      }var name;if (flip) {
        name = innerName.replace("X", outerName).replace("Y", param);
      } else {
        name = outerName.replace("X", innerName).replace("Y", param);
      }return name.replace(/([*&]) (?=[*&])/g, "$1");
    }function reportProblem(problem, id, kind, structureType, place) {
      throw new Error(problem + " type " + kind.replace("X", id + "?") + (structureType ? " with flag " + structureType : "") + " in " + place);
    }function getComplexType(id, constructType, getType, queryType, place, kind, prevStructure, depth) {
      if (kind === void 0) {
        kind = "X";
      }if (depth === void 0) {
        depth = 1;
      }var result = getType(id);if (result) return result;var query = queryType(id);var structureType = query.placeholderFlag;var structure = structureList[structureType];if (prevStructure && structure) {
        kind = applyStructure(prevStructure[2], prevStructure[0], kind, structure[0], "?", true);
      }var problem;if (structureType == 0) problem = "Unbound";if (structureType >= 10) problem = "Corrupt";if (depth > 20) problem = "Deeply nested";if (problem) reportProblem(problem, id, kind, structureType, place || "?");var subId = query.paramList[0];var subType = getComplexType(subId, constructType, getType, queryType, place, kind, structure, depth + 1);var srcSpec;var spec = { flags: structure[0], id: id, name: "", paramList: [subType] };var argList = [];var structureParam = "?";switch (query.placeholderFlag) {case 1:
          srcSpec = subType.spec;break;case 2:
          if ((subType.flags & 15360) == 1024 && subType.spec.ptrSize == 1) {
            spec.flags = 7168;break;
          };case 3:case 6:case 5:
          srcSpec = subType.spec;if ((subType.flags & 15360) != 2048) {}break;case 8:
          structureParam = "" + query.paramList[1];spec.paramList.push(query.paramList[1]);break;case 9:
          for (var _i = 0, _a = query.paramList[1]; _i < _a.length; _i++) {
            var paramId = _a[_i];var paramType = getComplexType(paramId, constructType, getType, queryType, place, kind, structure, depth + 1);argList.push(paramType.name);spec.paramList.push(paramType);
          }structureParam = argList.join(", ");break;default:
          break;}spec.name = applyStructure(structure[2], structure[0], subType.name, subType.flags, structureParam);if (srcSpec) {
        for (var _b = 0, _c = Object.keys(srcSpec); _b < _c.length; _b++) {
          var key = _c[_b];spec[key] = spec[key] || srcSpec[key];
        }spec.flags |= srcSpec.flags;
      }return makeType(constructType, spec);
    }function makeType(constructType, spec) {
      var flags = spec.flags;var refKind = flags & 896;var kind = flags & 15360;if (!spec.name && kind == 1024) {
        if (spec.ptrSize == 1) {
          spec.name = (flags & 16 ? "" : (flags & 8 ? "un" : "") + "signed ") + "char";
        } else {
          spec.name = (flags & 8 ? "u" : "") + (flags & 32 ? "float" : "int") + (spec.ptrSize * 8 + "_t");
        }
      }if (spec.ptrSize == 8 && !(flags & 32)) kind = 64;if (kind == 2048) {
        if (refKind == 512 || refKind == 640) {
          kind = 4096;
        } else if (refKind) kind = 3072;
      }return constructType(kind, spec);
    }var Type = function () {
      function Type(spec) {
        this.id = spec.id;this.name = spec.name;this.flags = spec.flags;this.spec = spec;
      }Type.prototype.toString = function () {
        return this.name;
      };return Type;
    }();var output = { Type: Type, getComplexType: getComplexType, makeType: makeType, structureList: structureList };self.output = output;return self.output || output;
  }function __nbind_register_type(id, namePtr) {
    var name = _nbind.readAsciiString(namePtr);var spec = { flags: 10240, id: id, name: name };_nbind.makeType(_nbind.constructType, spec);
  }function __nbind_register_callback_signature(typeListPtr, typeCount) {
    var typeList = _nbind.readTypeIdList(typeListPtr, typeCount);var num = _nbind.callbackSignatureList.length;_nbind.callbackSignatureList[num] = _nbind.makeJSCaller(typeList);return num;
  }function __extends(Class, Parent) {
    for (var key in Parent) if (Parent.hasOwnProperty(key)) Class[key] = Parent[key];function Base() {
      this.constructor = Class;
    }Base.prototype = Parent.prototype;Class.prototype = new Base();
  }function __nbind_register_class(idListPtr, policyListPtr, superListPtr, upcastListPtr, superCount, destructorPtr, namePtr) {
    var name = _nbind.readAsciiString(namePtr);var policyTbl = _nbind.readPolicyList(policyListPtr);var idList = HEAPU32.subarray(idListPtr / 4, idListPtr / 4 + 2);var spec = { flags: 2048 | (policyTbl["Value"] ? 2 : 0), id: idList[0], name: name };var bindClass = _nbind.makeType(_nbind.constructType, spec);bindClass.ptrType = _nbind.getComplexType(idList[1], _nbind.constructType, _nbind.getType, _nbind.queryType);bindClass.destroy = _nbind.makeMethodCaller(bindClass.ptrType, { boundID: spec.id, flags: 0, name: "destroy", num: 0, ptr: destructorPtr, title: bindClass.name + ".free", typeList: ["void", "uint32_t", "uint32_t"] });if (superCount) {
      bindClass.superIdList = Array.prototype.slice.call(HEAPU32.subarray(superListPtr / 4, superListPtr / 4 + superCount));bindClass.upcastList = Array.prototype.slice.call(HEAPU32.subarray(upcastListPtr / 4, upcastListPtr / 4 + superCount));
    }Module[bindClass.name] = bindClass.makeBound(policyTbl);_nbind.BindClass.list.push(bindClass);
  }function _removeAccessorPrefix(name) {
    var prefixMatcher = /^[Gg]et_?([A-Z]?([A-Z]?))/;return name.replace(prefixMatcher, function (match, initial, second) {
      return second ? initial : initial.toLowerCase();
    });
  }function __nbind_register_function(boundID, policyListPtr, typeListPtr, typeCount, ptr, direct, signatureType, namePtr, num, flags) {
    var bindClass = _nbind.getType(boundID);var policyTbl = _nbind.readPolicyList(policyListPtr);var typeList = _nbind.readTypeIdList(typeListPtr, typeCount);var specList;if (signatureType == 5) {
      specList = [{ direct: ptr, name: "__nbindConstructor", ptr: 0, title: bindClass.name + " constructor", typeList: ["uint32_t"].concat(typeList.slice(1)) }, { direct: direct, name: "__nbindValueConstructor", ptr: 0, title: bindClass.name + " value constructor", typeList: ["void", "uint32_t"].concat(typeList.slice(1)) }];
    } else {
      var name = _nbind.readAsciiString(namePtr);var title = (bindClass.name && bindClass.name + ".") + name;if (signatureType == 3 || signatureType == 4) {
        name = _removeAccessorPrefix(name);
      }specList = [{ boundID: boundID, direct: direct, name: name, ptr: ptr, title: title, typeList: typeList }];
    }for (var _i = 0, specList_1 = specList; _i < specList_1.length; _i++) {
      var spec = specList_1[_i];spec.signatureType = signatureType;spec.policyTbl = policyTbl;spec.num = num;spec.flags = flags;bindClass.addMethod(spec);
    }
  }function _YGEdgeToString() {
    Module["printErr"]("missing function: YGEdgeToString");abort(-1);
  }function _nbind_value(name, proto) {
    if (!_nbind.typeNameTbl[name]) _nbind.throwError("Unknown value type " + name);Module["NBind"].bind_value(name, proto);_defineHidden(_nbind.typeNameTbl[name].proto.prototype.__nbindValueConstructor)(proto.prototype, "__nbindValueConstructor");
  }Module["_nbind_value"] = _nbind_value;function __nbind_get_value_object(num, ptr) {
    var obj = _nbind.popValue(num);if (!obj.fromJS) {
      throw new Error("Object " + obj + " has no fromJS function");
    }obj.fromJS(function () {
      obj.__nbindValueConstructor.apply(this, Array.prototype.concat.apply([ptr], arguments));
    });
  }function _emscripten_memcpy_big(dest, src, num) {
    HEAPU8.set(HEAPU8.subarray(src, src + num), dest);return dest;
  }Module["_memcpy"] = _memcpy;function _llvm_stackrestore(p) {
    var self = _llvm_stacksave;var ret = self.LLVM_SAVEDSTACKS[p];self.LLVM_SAVEDSTACKS.splice(p, 1);Runtime.stackRestore(ret);
  }var cttz_i8 = allocate([8, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 5, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 6, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 5, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 7, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 5, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 6, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 5, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0], "i8", ALLOC_STATIC);Module["_llvm_cttz_i32"] = _llvm_cttz_i32;Module["___udivmoddi4"] = ___udivmoddi4;Module["___udivdi3"] = ___udivdi3;function _YGOverflowToString() {
    Module["printErr"]("missing function: YGOverflowToString");abort(-1);
  }function ___setErrNo(value) {
    if (Module["___errno_location"]) HEAP32[Module["___errno_location"]() >> 2] = value;return value;
  }Module["_sbrk"] = _sbrk;function _llvm_stacksave() {
    var self = _llvm_stacksave;if (!self.LLVM_SAVEDSTACKS) {
      self.LLVM_SAVEDSTACKS = [];
    }self.LLVM_SAVEDSTACKS.push(Runtime.stackSave());return self.LLVM_SAVEDSTACKS.length - 1;
  }function _YGAlignToString() {
    Module["printErr"]("missing function: YGAlignToString");abort(-1);
  }Module["___uremdi3"] = ___uremdi3;Module["_llvm_bswap_i32"] = _llvm_bswap_i32;function _YGPositionTypeToString() {
    Module["printErr"]("missing function: YGPositionTypeToString");abort(-1);
  }function ___syscall140(which, varargs) {
    SYSCALLS.varargs = varargs;try {
      var stream = SYSCALLS.getStreamFromFD(),
          offset_high = SYSCALLS.get(),
          offset_low = SYSCALLS.get(),
          result = SYSCALLS.get(),
          whence = SYSCALLS.get();var offset = offset_low;assert(offset_high === 0);FS.llseek(stream, offset, whence);HEAP32[result >> 2] = stream.position;if (stream.getdents && offset === 0 && whence === 0) stream.getdents = null;return 0;
    } catch (e) {
      if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);return -e.errno;
    }
  }function ___syscall146(which, varargs) {
    SYSCALLS.varargs = varargs;try {
      var stream = SYSCALLS.get(),
          iov = SYSCALLS.get(),
          iovcnt = SYSCALLS.get();var ret = 0;if (!___syscall146.buffer) {
        ___syscall146.buffers = [null, [], []];___syscall146.printChar = function (stream, curr) {
          var buffer = ___syscall146.buffers[stream];assert(buffer);if (curr === 0 || curr === 10) {
            (stream === 1 ? Module["print"] : Module["printErr"])(UTF8ArrayToString(buffer, 0));buffer.length = 0;
          } else {
            buffer.push(curr);
          }
        };
      }for (var i = 0; i < iovcnt; i++) {
        var ptr = HEAP32[iov + i * 8 >> 2];var len = HEAP32[iov + (i * 8 + 4) >> 2];for (var j = 0; j < len; j++) {
          ___syscall146.printChar(stream, HEAPU8[ptr + j]);
        }ret += len;
      }return ret;
    } catch (e) {
      if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);return -e.errno;
    }
  }function __nbind_finish() {
    for (var _i = 0, _a = _nbind.BindClass.list; _i < _a.length; _i++) {
      var bindClass = _a[_i];bindClass.finish();
    }
  }function _YGDisplayToString() {
    Module["printErr"]("missing function: YGDisplayToString");abort(-1);
  }var ___dso_handle = STATICTOP;STATICTOP += 16;(function (_nbind) {
    var typeIdTbl = {};_nbind.typeNameTbl = {};var Pool = function () {
      function Pool() {}Pool.lalloc = function (size) {
        size = size + 7 & ~7;var used = HEAPU32[Pool.usedPtr];if (size > Pool.pageSize / 2 || size > Pool.pageSize - used) {
          var NBind = _nbind.typeNameTbl["NBind"].proto;return NBind.lalloc(size);
        } else {
          HEAPU32[Pool.usedPtr] = used + size;return Pool.rootPtr + used;
        }
      };Pool.lreset = function (used, page) {
        var topPage = HEAPU32[Pool.pagePtr];if (topPage) {
          var NBind = _nbind.typeNameTbl["NBind"].proto;NBind.lreset(used, page);
        } else {
          HEAPU32[Pool.usedPtr] = used;
        }
      };return Pool;
    }();_nbind.Pool = Pool;function constructType(kind, spec) {
      var construct = kind == 10240 ? _nbind.makeTypeNameTbl[spec.name] || _nbind.BindType : _nbind.makeTypeKindTbl[kind];var bindType = new construct(spec);typeIdTbl[spec.id] = bindType;_nbind.typeNameTbl[spec.name] = bindType;return bindType;
    }_nbind.constructType = constructType;function getType(id) {
      return typeIdTbl[id];
    }_nbind.getType = getType;function queryType(id) {
      var placeholderFlag = HEAPU8[id];var paramCount = _nbind.structureList[placeholderFlag][1];id /= 4;if (paramCount < 0) {
        ++id;paramCount = HEAPU32[id] + 1;
      }var paramList = Array.prototype.slice.call(HEAPU32.subarray(id + 1, id + 1 + paramCount));if (placeholderFlag == 9) {
        paramList = [paramList[0], paramList.slice(1)];
      }return { paramList: paramList, placeholderFlag: placeholderFlag };
    }_nbind.queryType = queryType;function getTypes(idList, place) {
      return idList.map(function (id) {
        return typeof id == "number" ? _nbind.getComplexType(id, constructType, getType, queryType, place) : _nbind.typeNameTbl[id];
      });
    }_nbind.getTypes = getTypes;function readTypeIdList(typeListPtr, typeCount) {
      return Array.prototype.slice.call(HEAPU32, typeListPtr / 4, typeListPtr / 4 + typeCount);
    }_nbind.readTypeIdList = readTypeIdList;function readAsciiString(ptr) {
      var endPtr = ptr;while (HEAPU8[endPtr++]);return String.fromCharCode.apply("", HEAPU8.subarray(ptr, endPtr - 1));
    }_nbind.readAsciiString = readAsciiString;function readPolicyList(policyListPtr) {
      var policyTbl = {};if (policyListPtr) {
        while (1) {
          var namePtr = HEAPU32[policyListPtr / 4];if (!namePtr) break;policyTbl[readAsciiString(namePtr)] = true;policyListPtr += 4;
        }
      }return policyTbl;
    }_nbind.readPolicyList = readPolicyList;function getDynCall(typeList, name) {
      var mangleMap = { float32_t: "d", float64_t: "d", int64_t: "d", uint64_t: "d", "void": "v" };var signature = typeList.map(function (type) {
        return mangleMap[type.name] || "i";
      }).join("");var dynCall = Module["dynCall_" + signature];if (!dynCall) {
        throw new Error("dynCall_" + signature + " not found for " + name + "(" + typeList.map(function (type) {
          return type.name;
        }).join(", ") + ")");
      }return dynCall;
    }_nbind.getDynCall = getDynCall;function addMethod(obj, name, func, arity) {
      var overload = obj[name];if (obj.hasOwnProperty(name) && overload) {
        if (overload.arity || overload.arity === 0) {
          overload = _nbind.makeOverloader(overload, overload.arity);obj[name] = overload;
        }overload.addMethod(func, arity);
      } else {
        func.arity = arity;obj[name] = func;
      }
    }_nbind.addMethod = addMethod;function throwError(message) {
      throw new Error(message);
    }_nbind.throwError = throwError;_nbind.bigEndian = false;_a = _typeModule(_typeModule), _nbind.Type = _a.Type, _nbind.makeType = _a.makeType, _nbind.getComplexType = _a.getComplexType, _nbind.structureList = _a.structureList;var BindType = function (_super) {
      __extends(BindType, _super);function BindType() {
        var _this = _super !== null && _super.apply(this, arguments) || this;_this.heap = HEAPU32;_this.ptrSize = 4;return _this;
      }BindType.prototype.needsWireRead = function (policyTbl) {
        return !!this.wireRead || !!this.makeWireRead;
      };BindType.prototype.needsWireWrite = function (policyTbl) {
        return !!this.wireWrite || !!this.makeWireWrite;
      };return BindType;
    }(_nbind.Type);_nbind.BindType = BindType;var PrimitiveType = function (_super) {
      __extends(PrimitiveType, _super);function PrimitiveType(spec) {
        var _this = _super.call(this, spec) || this;var heapTbl = spec.flags & 32 ? { 32: HEAPF32, 64: HEAPF64 } : spec.flags & 8 ? { 8: HEAPU8, 16: HEAPU16, 32: HEAPU32 } : { 8: HEAP8, 16: HEAP16, 32: HEAP32 };_this.heap = heapTbl[spec.ptrSize * 8];_this.ptrSize = spec.ptrSize;return _this;
      }PrimitiveType.prototype.needsWireWrite = function (policyTbl) {
        return !!policyTbl && !!policyTbl["Strict"];
      };PrimitiveType.prototype.makeWireWrite = function (expr, policyTbl) {
        return policyTbl && policyTbl["Strict"] && function (arg) {
          if (typeof arg == "number") return arg;throw new Error("Type mismatch");
        };
      };return PrimitiveType;
    }(BindType);_nbind.PrimitiveType = PrimitiveType;function pushCString(str, policyTbl) {
      if (str === null || str === undefined) {
        if (policyTbl && policyTbl["Nullable"]) {
          return 0;
        } else throw new Error("Type mismatch");
      }if (policyTbl && policyTbl["Strict"]) {
        if (typeof str != "string") throw new Error("Type mismatch");
      } else str = str.toString();var length = Module.lengthBytesUTF8(str) + 1;var result = _nbind.Pool.lalloc(length);Module.stringToUTF8Array(str, HEAPU8, result, length);return result;
    }_nbind.pushCString = pushCString;function popCString(ptr) {
      if (ptr === 0) return null;return Module.Pointer_stringify(ptr);
    }_nbind.popCString = popCString;var CStringType = function (_super) {
      __extends(CStringType, _super);function CStringType() {
        var _this = _super !== null && _super.apply(this, arguments) || this;_this.wireRead = popCString;_this.wireWrite = pushCString;_this.readResources = [_nbind.resources.pool];_this.writeResources = [_nbind.resources.pool];return _this;
      }CStringType.prototype.makeWireWrite = function (expr, policyTbl) {
        return function (arg) {
          return pushCString(arg, policyTbl);
        };
      };return CStringType;
    }(BindType);_nbind.CStringType = CStringType;var BooleanType = function (_super) {
      __extends(BooleanType, _super);function BooleanType() {
        var _this = _super !== null && _super.apply(this, arguments) || this;_this.wireRead = function (arg) {
          return !!arg;
        };return _this;
      }BooleanType.prototype.needsWireWrite = function (policyTbl) {
        return !!policyTbl && !!policyTbl["Strict"];
      };BooleanType.prototype.makeWireRead = function (expr) {
        return "!!(" + expr + ")";
      };BooleanType.prototype.makeWireWrite = function (expr, policyTbl) {
        return policyTbl && policyTbl["Strict"] && function (arg) {
          if (typeof arg == "boolean") return arg;throw new Error("Type mismatch");
        } || expr;
      };return BooleanType;
    }(BindType);_nbind.BooleanType = BooleanType;var Wrapper = function () {
      function Wrapper() {}Wrapper.prototype.persist = function () {
        this.__nbindState |= 1;
      };return Wrapper;
    }();_nbind.Wrapper = Wrapper;function makeBound(policyTbl, bindClass) {
      var Bound = function (_super) {
        __extends(Bound, _super);function Bound(marker, flags, ptr, shared) {
          var _this = _super.call(this) || this;if (!(_this instanceof Bound)) {
            return new (Function.prototype.bind.apply(Bound, Array.prototype.concat.apply([null], arguments)))();
          }var nbindFlags = flags;var nbindPtr = ptr;var nbindShared = shared;if (marker !== _nbind.ptrMarker) {
            var wirePtr = _this.__nbindConstructor.apply(_this, arguments);nbindFlags = 4096 | 512;nbindShared = HEAPU32[wirePtr / 4];nbindPtr = HEAPU32[wirePtr / 4 + 1];
          }var spec = { configurable: true, enumerable: false, value: null, writable: false };var propTbl = { "__nbindFlags": nbindFlags, "__nbindPtr": nbindPtr };if (nbindShared) {
            propTbl["__nbindShared"] = nbindShared;_nbind.mark(_this);
          }for (var _i = 0, _a = Object.keys(propTbl); _i < _a.length; _i++) {
            var key = _a[_i];spec.value = propTbl[key];Object.defineProperty(_this, key, spec);
          }_defineHidden(0)(_this, "__nbindState");return _this;
        }Bound.prototype.free = function () {
          bindClass.destroy.call(this, this.__nbindShared, this.__nbindFlags);this.__nbindState |= 2;disableMember(this, "__nbindShared");disableMember(this, "__nbindPtr");
        };return Bound;
      }(Wrapper);__decorate([_defineHidden()], Bound.prototype, "__nbindConstructor", void 0);__decorate([_defineHidden()], Bound.prototype, "__nbindValueConstructor", void 0);__decorate([_defineHidden(policyTbl)], Bound.prototype, "__nbindPolicies", void 0);return Bound;
    }_nbind.makeBound = makeBound;function disableMember(obj, name) {
      function die() {
        throw new Error("Accessing deleted object");
      }Object.defineProperty(obj, name, { configurable: false, enumerable: false, get: die, set: die });
    }_nbind.ptrMarker = {};var BindClass = function (_super) {
      __extends(BindClass, _super);function BindClass(spec) {
        var _this = _super.call(this, spec) || this;_this.wireRead = function (arg) {
          return _nbind.popValue(arg, _this.ptrType);
        };_this.wireWrite = function (arg) {
          return pushPointer(arg, _this.ptrType, true);
        };_this.pendingSuperCount = 0;_this.ready = false;_this.methodTbl = {};if (spec.paramList) {
          _this.classType = spec.paramList[0].classType;_this.proto = _this.classType.proto;
        } else _this.classType = _this;return _this;
      }BindClass.prototype.makeBound = function (policyTbl) {
        var Bound = _nbind.makeBound(policyTbl, this);this.proto = Bound;this.ptrType.proto = Bound;return Bound;
      };BindClass.prototype.addMethod = function (spec) {
        var overloadList = this.methodTbl[spec.name] || [];overloadList.push(spec);this.methodTbl[spec.name] = overloadList;
      };BindClass.prototype.registerMethods = function (src, staticOnly) {
        var setter;for (var _i = 0, _a = Object.keys(src.methodTbl); _i < _a.length; _i++) {
          var name = _a[_i];var overloadList = src.methodTbl[name];for (var _b = 0, overloadList_1 = overloadList; _b < overloadList_1.length; _b++) {
            var spec = overloadList_1[_b];var target = void 0;var caller = void 0;target = this.proto.prototype;if (staticOnly && spec.signatureType != 1) continue;switch (spec.signatureType) {case 1:
                target = this.proto;case 5:
                caller = _nbind.makeCaller(spec);_nbind.addMethod(target, spec.name, caller, spec.typeList.length - 1);break;case 4:
                setter = _nbind.makeMethodCaller(src.ptrType, spec);break;case 3:
                Object.defineProperty(target, spec.name, { configurable: true, enumerable: false, get: _nbind.makeMethodCaller(src.ptrType, spec), set: setter });break;case 2:
                caller = _nbind.makeMethodCaller(src.ptrType, spec);_nbind.addMethod(target, spec.name, caller, spec.typeList.length - 1);break;default:
                break;}
          }
        }
      };BindClass.prototype.registerSuperMethods = function (src, firstSuper, visitTbl) {
        if (visitTbl[src.name]) return;visitTbl[src.name] = true;var superNum = 0;var nextFirst;for (var _i = 0, _a = src.superIdList || []; _i < _a.length; _i++) {
          var superId = _a[_i];var superClass = _nbind.getType(superId);if (superNum++ < firstSuper || firstSuper < 0) {
            nextFirst = -1;
          } else {
            nextFirst = 0;
          }this.registerSuperMethods(superClass, nextFirst, visitTbl);
        }this.registerMethods(src, firstSuper < 0);
      };BindClass.prototype.finish = function () {
        if (this.ready) return this;this.ready = true;this.superList = (this.superIdList || []).map(function (superId) {
          return _nbind.getType(superId).finish();
        });var Bound = this.proto;if (this.superList.length) {
          var Proto = function () {
            this.constructor = Bound;
          };Proto.prototype = this.superList[0].proto.prototype;Bound.prototype = new Proto();
        }if (Bound != Module) Bound.prototype.__nbindType = this;this.registerSuperMethods(this, 1, {});return this;
      };BindClass.prototype.upcastStep = function (dst, ptr) {
        if (dst == this) return ptr;for (var i = 0; i < this.superList.length; ++i) {
          var superPtr = this.superList[i].upcastStep(dst, _nbind.callUpcast(this.upcastList[i], ptr));if (superPtr) return superPtr;
        }return 0;
      };return BindClass;
    }(_nbind.BindType);BindClass.list = [];_nbind.BindClass = BindClass;function popPointer(ptr, type) {
      return ptr ? new type.proto(_nbind.ptrMarker, type.flags, ptr) : null;
    }_nbind.popPointer = popPointer;function pushPointer(obj, type, tryValue) {
      if (!(obj instanceof _nbind.Wrapper)) {
        if (tryValue) {
          return _nbind.pushValue(obj);
        } else throw new Error("Type mismatch");
      }var ptr = obj.__nbindPtr;var objType = obj.__nbindType.classType;var classType = type.classType;if (obj instanceof type.proto) {
        while (objType != classType) {
          ptr = _nbind.callUpcast(objType.upcastList[0], ptr);objType = objType.superList[0];
        }
      } else {
        ptr = objType.upcastStep(classType, ptr);if (!ptr) throw new Error("Type mismatch");
      }return ptr;
    }_nbind.pushPointer = pushPointer;function pushMutablePointer(obj, type) {
      var ptr = pushPointer(obj, type);if (obj.__nbindFlags & 1) {
        throw new Error("Passing a const value as a non-const argument");
      }return ptr;
    }var BindClassPtr = function (_super) {
      __extends(BindClassPtr, _super);function BindClassPtr(spec) {
        var _this = _super.call(this, spec) || this;_this.classType = spec.paramList[0].classType;_this.proto = _this.classType.proto;var isConst = spec.flags & 1;var isValue = (_this.flags & 896) == 256 && spec.flags & 2;var push = isConst ? pushPointer : pushMutablePointer;var pop = isValue ? _nbind.popValue : popPointer;_this.makeWireWrite = function (expr, policyTbl) {
          return policyTbl["Nullable"] ? function (arg) {
            return arg ? push(arg, _this) : 0;
          } : function (arg) {
            return push(arg, _this);
          };
        };_this.wireRead = function (arg) {
          return pop(arg, _this);
        };_this.wireWrite = function (arg) {
          return push(arg, _this);
        };return _this;
      }return BindClassPtr;
    }(_nbind.BindType);_nbind.BindClassPtr = BindClassPtr;function popShared(ptr, type) {
      var shared = HEAPU32[ptr / 4];var unsafe = HEAPU32[ptr / 4 + 1];return unsafe ? new type.proto(_nbind.ptrMarker, type.flags, unsafe, shared) : null;
    }_nbind.popShared = popShared;function pushShared(obj, type) {
      if (!(obj instanceof type.proto)) throw new Error("Type mismatch");return obj.__nbindShared;
    }function pushMutableShared(obj, type) {
      if (!(obj instanceof type.proto)) throw new Error("Type mismatch");if (obj.__nbindFlags & 1) {
        throw new Error("Passing a const value as a non-const argument");
      }return obj.__nbindShared;
    }var SharedClassPtr = function (_super) {
      __extends(SharedClassPtr, _super);function SharedClassPtr(spec) {
        var _this = _super.call(this, spec) || this;_this.readResources = [_nbind.resources.pool];_this.classType = spec.paramList[0].classType;_this.proto = _this.classType.proto;var isConst = spec.flags & 1;var push = isConst ? pushShared : pushMutableShared;_this.wireRead = function (arg) {
          return popShared(arg, _this);
        };_this.wireWrite = function (arg) {
          return push(arg, _this);
        };return _this;
      }return SharedClassPtr;
    }(_nbind.BindType);_nbind.SharedClassPtr = SharedClassPtr;_nbind.externalList = [0];var firstFreeExternal = 0;var External = function () {
      function External(data) {
        this.refCount = 1;this.data = data;
      }External.prototype.register = function () {
        var num = firstFreeExternal;if (num) {
          firstFreeExternal = _nbind.externalList[num];
        } else num = _nbind.externalList.length;_nbind.externalList[num] = this;return num;
      };External.prototype.reference = function () {
        ++this.refCount;
      };External.prototype.dereference = function (num) {
        if (--this.refCount == 0) {
          if (this.free) this.free();_nbind.externalList[num] = firstFreeExternal;firstFreeExternal = num;
        }
      };return External;
    }();_nbind.External = External;function popExternal(num) {
      var obj = _nbind.externalList[num];obj.dereference(num);return obj.data;
    }function pushExternal(obj) {
      var external = new External(obj);external.reference();return external.register();
    }var ExternalType = function (_super) {
      __extends(ExternalType, _super);function ExternalType() {
        var _this = _super !== null && _super.apply(this, arguments) || this;_this.wireRead = popExternal;_this.wireWrite = pushExternal;return _this;
      }return ExternalType;
    }(_nbind.BindType);_nbind.ExternalType = ExternalType;_nbind.callbackSignatureList = [];var CallbackType = function (_super) {
      __extends(CallbackType, _super);function CallbackType() {
        var _this = _super !== null && _super.apply(this, arguments) || this;_this.wireWrite = function (func) {
          if (typeof func != "function") _nbind.throwError("Type mismatch");return new _nbind.External(func).register();
        };return _this;
      }return CallbackType;
    }(_nbind.BindType);_nbind.CallbackType = CallbackType;_nbind.valueList = [0];var firstFreeValue = 0;function pushValue(value) {
      var num = firstFreeValue;if (num) {
        firstFreeValue = _nbind.valueList[num];
      } else num = _nbind.valueList.length;_nbind.valueList[num] = value;return num * 2 + 1;
    }_nbind.pushValue = pushValue;function popValue(num, type) {
      if (!num) _nbind.throwError("Value type JavaScript class is missing or not registered");if (num & 1) {
        num >>= 1;var obj = _nbind.valueList[num];_nbind.valueList[num] = firstFreeValue;firstFreeValue = num;return obj;
      } else if (type) {
        return _nbind.popShared(num, type);
      } else throw new Error("Invalid value slot " + num);
    }_nbind.popValue = popValue;var valueBase = 0x10000000000000000;function push64(num) {
      if (typeof num == "number") return num;return pushValue(num) * 4096 + valueBase;
    }function pop64(num) {
      if (num < valueBase) return num;return popValue((num - valueBase) / 4096);
    }var CreateValueType = function (_super) {
      __extends(CreateValueType, _super);function CreateValueType() {
        return _super !== null && _super.apply(this, arguments) || this;
      }CreateValueType.prototype.makeWireWrite = function (expr) {
        return "(_nbind.pushValue(new " + expr + "))";
      };return CreateValueType;
    }(_nbind.BindType);_nbind.CreateValueType = CreateValueType;var Int64Type = function (_super) {
      __extends(Int64Type, _super);function Int64Type() {
        var _this = _super !== null && _super.apply(this, arguments) || this;_this.wireWrite = push64;_this.wireRead = pop64;return _this;
      }return Int64Type;
    }(_nbind.BindType);_nbind.Int64Type = Int64Type;function pushArray(arr, type) {
      if (!arr) return 0;var length = arr.length;if ((type.size || type.size === 0) && length < type.size) {
        throw new Error("Type mismatch");
      }var ptrSize = type.memberType.ptrSize;var result = _nbind.Pool.lalloc(4 + length * ptrSize);HEAPU32[result / 4] = length;var heap = type.memberType.heap;var ptr = (result + 4) / ptrSize;var wireWrite = type.memberType.wireWrite;var num = 0;if (wireWrite) {
        while (num < length) {
          heap[ptr++] = wireWrite(arr[num++]);
        }
      } else {
        while (num < length) {
          heap[ptr++] = arr[num++];
        }
      }return result;
    }_nbind.pushArray = pushArray;function popArray(ptr, type) {
      if (ptr === 0) return null;var length = HEAPU32[ptr / 4];var arr = new Array(length);var heap = type.memberType.heap;ptr = (ptr + 4) / type.memberType.ptrSize;var wireRead = type.memberType.wireRead;var num = 0;if (wireRead) {
        while (num < length) {
          arr[num++] = wireRead(heap[ptr++]);
        }
      } else {
        while (num < length) {
          arr[num++] = heap[ptr++];
        }
      }return arr;
    }_nbind.popArray = popArray;var ArrayType = function (_super) {
      __extends(ArrayType, _super);function ArrayType(spec) {
        var _this = _super.call(this, spec) || this;_this.wireRead = function (arg) {
          return popArray(arg, _this);
        };_this.wireWrite = function (arg) {
          return pushArray(arg, _this);
        };_this.readResources = [_nbind.resources.pool];_this.writeResources = [_nbind.resources.pool];_this.memberType = spec.paramList[0];if (spec.paramList[1]) _this.size = spec.paramList[1];return _this;
      }return ArrayType;
    }(_nbind.BindType);_nbind.ArrayType = ArrayType;function pushString(str, policyTbl) {
      if (str === null || str === undefined) {
        if (policyTbl && policyTbl["Nullable"]) {
          str = "";
        } else throw new Error("Type mismatch");
      }if (policyTbl && policyTbl["Strict"]) {
        if (typeof str != "string") throw new Error("Type mismatch");
      } else str = str.toString();var length = Module.lengthBytesUTF8(str);var result = _nbind.Pool.lalloc(4 + length + 1);HEAPU32[result / 4] = length;Module.stringToUTF8Array(str, HEAPU8, result + 4, length + 1);return result;
    }_nbind.pushString = pushString;function popString(ptr) {
      if (ptr === 0) return null;var length = HEAPU32[ptr / 4];return Module.Pointer_stringify(ptr + 4, length);
    }_nbind.popString = popString;var StringType = function (_super) {
      __extends(StringType, _super);function StringType() {
        var _this = _super !== null && _super.apply(this, arguments) || this;_this.wireRead = popString;_this.wireWrite = pushString;_this.readResources = [_nbind.resources.pool];_this.writeResources = [_nbind.resources.pool];return _this;
      }StringType.prototype.makeWireWrite = function (expr, policyTbl) {
        return function (arg) {
          return pushString(arg, policyTbl);
        };
      };return StringType;
    }(_nbind.BindType);_nbind.StringType = StringType;function makeArgList(argCount) {
      return Array.apply(null, Array(argCount)).map(function (dummy, num) {
        return "a" + (num + 1);
      });
    }function anyNeedsWireWrite(typeList, policyTbl) {
      return typeList.reduce(function (result, type) {
        return result || type.needsWireWrite(policyTbl);
      }, false);
    }function anyNeedsWireRead(typeList, policyTbl) {
      return typeList.reduce(function (result, type) {
        return result || !!type.needsWireRead(policyTbl);
      }, false);
    }function makeWireRead(convertParamList, policyTbl, type, expr) {
      var paramNum = convertParamList.length;if (type.makeWireRead) {
        return type.makeWireRead(expr, convertParamList, paramNum);
      } else if (type.wireRead) {
        convertParamList[paramNum] = type.wireRead;return "(convertParamList[" + paramNum + "](" + expr + "))";
      } else return expr;
    }function makeWireWrite(convertParamList, policyTbl, type, expr) {
      var wireWrite;var paramNum = convertParamList.length;if (type.makeWireWrite) {
        wireWrite = type.makeWireWrite(expr, policyTbl, convertParamList, paramNum);
      } else wireWrite = type.wireWrite;if (wireWrite) {
        if (typeof wireWrite == "string") {
          return wireWrite;
        } else {
          convertParamList[paramNum] = wireWrite;return "(convertParamList[" + paramNum + "](" + expr + "))";
        }
      } else return expr;
    }function buildCallerFunction(dynCall, ptrType, ptr, num, policyTbl, needsWireWrite, prefix, returnType, argTypeList, mask, err) {
      var argList = makeArgList(argTypeList.length);var convertParamList = [];var callExpression = makeWireRead(convertParamList, policyTbl, returnType, "dynCall(" + [prefix].concat(argList.map(function (name, index) {
        return makeWireWrite(convertParamList, policyTbl, argTypeList[index], name);
      })).join(",") + ")");var resourceSet = _nbind.listResources([returnType], argTypeList);var sourceCode = "function(" + argList.join(",") + "){" + (mask ? "this.__nbindFlags&mask&&err();" : "") + resourceSet.makeOpen() + "var r=" + callExpression + ";" + resourceSet.makeClose() + "return r;" + "}";return eval("(" + sourceCode + ")");
    }function buildJSCallerFunction(returnType, argTypeList) {
      var argList = makeArgList(argTypeList.length);var convertParamList = [];var callExpression = makeWireWrite(convertParamList, null, returnType, "_nbind.externalList[num].data(" + argList.map(function (name, index) {
        return makeWireRead(convertParamList, null, argTypeList[index], name);
      }).join(",") + ")");var resourceSet = _nbind.listResources(argTypeList, [returnType]);resourceSet.remove(_nbind.resources.pool);var sourceCode = "function(" + ["dummy", "num"].concat(argList).join(",") + "){" + resourceSet.makeOpen() + "var r=" + callExpression + ";" + resourceSet.makeClose() + "return r;" + "}";return eval("(" + sourceCode + ")");
    }_nbind.buildJSCallerFunction = buildJSCallerFunction;function makeJSCaller(idList) {
      var argCount = idList.length - 1;var typeList = _nbind.getTypes(idList, "callback");var returnType = typeList[0];var argTypeList = typeList.slice(1);var needsWireRead = anyNeedsWireRead(argTypeList, null);var needsWireWrite = returnType.needsWireWrite(null);if (!needsWireWrite && !needsWireRead) {
        switch (argCount) {case 0:
            return function (dummy, num) {
              return _nbind.externalList[num].data();
            };case 1:
            return function (dummy, num, a1) {
              return _nbind.externalList[num].data(a1);
            };case 2:
            return function (dummy, num, a1, a2) {
              return _nbind.externalList[num].data(a1, a2);
            };case 3:
            return function (dummy, num, a1, a2, a3) {
              return _nbind.externalList[num].data(a1, a2, a3);
            };default:
            break;}
      }return buildJSCallerFunction(returnType, argTypeList);
    }_nbind.makeJSCaller = makeJSCaller;function makeMethodCaller(ptrType, spec) {
      var argCount = spec.typeList.length - 1;var typeIdList = spec.typeList.slice(0);typeIdList.splice(1, 0, "uint32_t", spec.boundID);var typeList = _nbind.getTypes(typeIdList, spec.title);var returnType = typeList[0];var argTypeList = typeList.slice(3);var needsWireRead = returnType.needsWireRead(spec.policyTbl);var needsWireWrite = anyNeedsWireWrite(argTypeList, spec.policyTbl);var ptr = spec.ptr;var num = spec.num;var dynCall = _nbind.getDynCall(typeList, spec.title);var mask = ~spec.flags & 1;function err() {
        throw new Error("Calling a non-const method on a const object");
      }if (!needsWireRead && !needsWireWrite) {
        switch (argCount) {case 0:
            return function () {
              return this.__nbindFlags & mask ? err() : dynCall(ptr, num, _nbind.pushPointer(this, ptrType));
            };case 1:
            return function (a1) {
              return this.__nbindFlags & mask ? err() : dynCall(ptr, num, _nbind.pushPointer(this, ptrType), a1);
            };case 2:
            return function (a1, a2) {
              return this.__nbindFlags & mask ? err() : dynCall(ptr, num, _nbind.pushPointer(this, ptrType), a1, a2);
            };case 3:
            return function (a1, a2, a3) {
              return this.__nbindFlags & mask ? err() : dynCall(ptr, num, _nbind.pushPointer(this, ptrType), a1, a2, a3);
            };default:
            break;}
      }return buildCallerFunction(dynCall, ptrType, ptr, num, spec.policyTbl, needsWireWrite, "ptr,num,pushPointer(this,ptrType)", returnType, argTypeList, mask, err);
    }_nbind.makeMethodCaller = makeMethodCaller;function makeCaller(spec) {
      var argCount = spec.typeList.length - 1;var typeList = _nbind.getTypes(spec.typeList, spec.title);var returnType = typeList[0];var argTypeList = typeList.slice(1);var needsWireRead = returnType.needsWireRead(spec.policyTbl);var needsWireWrite = anyNeedsWireWrite(argTypeList, spec.policyTbl);var direct = spec.direct;var dynCall;var ptr = spec.ptr;if (spec.direct && !needsWireRead && !needsWireWrite) {
        dynCall = _nbind.getDynCall(typeList, spec.title);switch (argCount) {case 0:
            return function () {
              return dynCall(direct);
            };case 1:
            return function (a1) {
              return dynCall(direct, a1);
            };case 2:
            return function (a1, a2) {
              return dynCall(direct, a1, a2);
            };case 3:
            return function (a1, a2, a3) {
              return dynCall(direct, a1, a2, a3);
            };default:
            break;}ptr = 0;
      }var prefix;if (ptr) {
        var typeIdList = spec.typeList.slice(0);typeIdList.splice(1, 0, "uint32_t");typeList = _nbind.getTypes(typeIdList, spec.title);prefix = "ptr,num";
      } else {
        ptr = direct;prefix = "ptr";
      }dynCall = _nbind.getDynCall(typeList, spec.title);return buildCallerFunction(dynCall, null, ptr, spec.num, spec.policyTbl, needsWireWrite, prefix, returnType, argTypeList);
    }_nbind.makeCaller = makeCaller;function makeOverloader(func, arity) {
      var callerList = [];function call() {
        return callerList[arguments.length].apply(this, arguments);
      }call.addMethod = function (_func, _arity) {
        callerList[_arity] = _func;
      };call.addMethod(func, arity);return call;
    }_nbind.makeOverloader = makeOverloader;var Resource = function () {
      function Resource(open, close) {
        var _this = this;this.makeOpen = function () {
          return Object.keys(_this.openTbl).join("");
        };this.makeClose = function () {
          return Object.keys(_this.closeTbl).join("");
        };this.openTbl = {};this.closeTbl = {};if (open) this.openTbl[open] = true;if (close) this.closeTbl[close] = true;
      }Resource.prototype.add = function (other) {
        for (var _i = 0, _a = Object.keys(other.openTbl); _i < _a.length; _i++) {
          var key = _a[_i];this.openTbl[key] = true;
        }for (var _b = 0, _c = Object.keys(other.closeTbl); _b < _c.length; _b++) {
          var key = _c[_b];this.closeTbl[key] = true;
        }
      };Resource.prototype.remove = function (other) {
        for (var _i = 0, _a = Object.keys(other.openTbl); _i < _a.length; _i++) {
          var key = _a[_i];delete this.openTbl[key];
        }for (var _b = 0, _c = Object.keys(other.closeTbl); _b < _c.length; _b++) {
          var key = _c[_b];delete this.closeTbl[key];
        }
      };return Resource;
    }();_nbind.Resource = Resource;function listResources(readList, writeList) {
      var result = new Resource();for (var _i = 0, readList_1 = readList; _i < readList_1.length; _i++) {
        var bindType = readList_1[_i];for (var _a = 0, _b = bindType.readResources || []; _a < _b.length; _a++) {
          var resource = _b[_a];result.add(resource);
        }
      }for (var _c = 0, writeList_1 = writeList; _c < writeList_1.length; _c++) {
        var bindType = writeList_1[_c];for (var _d = 0, _e = bindType.writeResources || []; _d < _e.length; _d++) {
          var resource = _e[_d];result.add(resource);
        }
      }return result;
    }_nbind.listResources = listResources;_nbind.resources = { pool: new Resource("var used=HEAPU32[_nbind.Pool.usedPtr],page=HEAPU32[_nbind.Pool.pagePtr];", "_nbind.Pool.lreset(used,page);") };var ExternalBuffer = function (_super) {
      __extends(ExternalBuffer, _super);function ExternalBuffer(buf, ptr) {
        var _this = _super.call(this, buf) || this;_this.ptr = ptr;return _this;
      }ExternalBuffer.prototype.free = function () {
        _free(this.ptr);
      };return ExternalBuffer;
    }(_nbind.External);function getBuffer(buf) {
      if (buf instanceof ArrayBuffer) {
        return new Uint8Array(buf);
      } else if (buf instanceof DataView) {
        return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength);
      } else return buf;
    }function pushBuffer(buf, policyTbl) {
      if (buf === null || buf === undefined) {
        if (policyTbl && policyTbl["Nullable"]) buf = [];
      }if (typeof buf != "object") throw new Error("Type mismatch");var b = buf;var length = b.byteLength || b.length;if (!length && length !== 0 && b.byteLength !== 0) throw new Error("Type mismatch");var result = _nbind.Pool.lalloc(8);var data = _malloc(length);var ptr = result / 4;HEAPU32[ptr++] = length;HEAPU32[ptr++] = data;HEAPU32[ptr++] = new ExternalBuffer(buf, data).register();HEAPU8.set(getBuffer(buf), data);return result;
    }var BufferType = function (_super) {
      __extends(BufferType, _super);function BufferType() {
        var _this = _super !== null && _super.apply(this, arguments) || this;_this.wireWrite = pushBuffer;_this.readResources = [_nbind.resources.pool];_this.writeResources = [_nbind.resources.pool];return _this;
      }BufferType.prototype.makeWireWrite = function (expr, policyTbl) {
        return function (arg) {
          return pushBuffer(arg, policyTbl);
        };
      };return BufferType;
    }(_nbind.BindType);_nbind.BufferType = BufferType;function commitBuffer(num, data, length) {
      var buf = _nbind.externalList[num].data;var NodeBuffer = Buffer;if (typeof Buffer != "function") NodeBuffer = function () {};if (buf instanceof Array) {} else {
        var src = HEAPU8.subarray(data, data + length);if (buf instanceof NodeBuffer) {
          var srcBuf = void 0;if (typeof Buffer.from == "function" && Buffer.from.length >= 3) {
            srcBuf = Buffer.from(src);
          } else srcBuf = new Buffer(src);srcBuf.copy(buf);
        } else getBuffer(buf).set(src);
      }
    }_nbind.commitBuffer = commitBuffer;var dirtyList = [];var gcTimer = 0;function sweep() {
      for (var _i = 0, dirtyList_1 = dirtyList; _i < dirtyList_1.length; _i++) {
        var obj = dirtyList_1[_i];if (!(obj.__nbindState & (1 | 2))) {
          obj.free();
        }
      }dirtyList = [];gcTimer = 0;
    }_nbind.mark = function (obj) {};function toggleLightGC(enable) {
      if (enable) {
        _nbind.mark = function (obj) {
          dirtyList.push(obj);if (!gcTimer) gcTimer = setTimeout(sweep, 0);
        };
      } else {
        _nbind.mark = function (obj) {};
      }
    }_nbind.toggleLightGC = toggleLightGC;
  })(_nbind);Module["requestFullScreen"] = function Module_requestFullScreen(lockPointer, resizeCanvas, vrDevice) {
    Module.printErr("Module.requestFullScreen is deprecated. Please call Module.requestFullscreen instead.");Module["requestFullScreen"] = Module["requestFullscreen"];Browser.requestFullScreen(lockPointer, resizeCanvas, vrDevice);
  };Module["requestFullscreen"] = function Module_requestFullscreen(lockPointer, resizeCanvas, vrDevice) {
    Browser.requestFullscreen(lockPointer, resizeCanvas, vrDevice);
  };Module["requestAnimationFrame"] = function Module_requestAnimationFrame(func) {
    Browser.requestAnimationFrame(func);
  };Module["setCanvasSize"] = function Module_setCanvasSize(width, height, noUpdates) {
    Browser.setCanvasSize(width, height, noUpdates);
  };Module["pauseMainLoop"] = function Module_pauseMainLoop() {
    Browser.mainLoop.pause();
  };Module["resumeMainLoop"] = function Module_resumeMainLoop() {
    Browser.mainLoop.resume();
  };Module["getUserMedia"] = function Module_getUserMedia() {
    Browser.getUserMedia();
  };Module["createContext"] = function Module_createContext(canvas, useWebGL, setInModule, webGLContextAttributes) {
    return Browser.createContext(canvas, useWebGL, setInModule, webGLContextAttributes);
  };if (ENVIRONMENT_IS_NODE) {
    _emscripten_get_now = function _emscripten_get_now_actual() {
      var t = process["hrtime"]();return t[0] * 1e3 + t[1] / 1e6;
    };
  } else if (typeof dateNow !== "undefined") {
    _emscripten_get_now = dateNow;
  } else if (typeof self === "object" && self["performance"] && typeof self["performance"]["now"] === "function") {
    _emscripten_get_now = function () {
      return self["performance"]["now"]();
    };
  } else if (typeof performance === "object" && typeof performance["now"] === "function") {
    _emscripten_get_now = function () {
      return performance["now"]();
    };
  } else {
    _emscripten_get_now = Date.now;
  }__ATEXIT__.push(function () {
    var fflush = Module["_fflush"];if (fflush) fflush(0);var printChar = ___syscall146.printChar;if (!printChar) return;var buffers = ___syscall146.buffers;if (buffers[1].length) printChar(1, 10);if (buffers[2].length) printChar(2, 10);
  });DYNAMICTOP_PTR = allocate(1, "i32", ALLOC_STATIC);STACK_BASE = STACKTOP = Runtime.alignMemory(STATICTOP);STACK_MAX = STACK_BASE + TOTAL_STACK;DYNAMIC_BASE = Runtime.alignMemory(STACK_MAX);HEAP32[DYNAMICTOP_PTR >> 2] = DYNAMIC_BASE;staticSealed = true;function invoke_viiiii(index, a1, a2, a3, a4, a5) {
    try {
      Module["dynCall_viiiii"](index, a1, a2, a3, a4, a5);
    } catch (e) {
      if (typeof e !== "number" && e !== "longjmp") throw e;Module["setThrew"](1, 0);
    }
  }function invoke_vid(index, a1, a2) {
    try {
      Module["dynCall_vid"](index, a1, a2);
    } catch (e) {
      if (typeof e !== "number" && e !== "longjmp") throw e;Module["setThrew"](1, 0);
    }
  }function invoke_fiff(index, a1, a2, a3) {
    try {
      return Module["dynCall_fiff"](index, a1, a2, a3);
    } catch (e) {
      if (typeof e !== "number" && e !== "longjmp") throw e;Module["setThrew"](1, 0);
    }
  }function invoke_vi(index, a1) {
    try {
      Module["dynCall_vi"](index, a1);
    } catch (e) {
      if (typeof e !== "number" && e !== "longjmp") throw e;Module["setThrew"](1, 0);
    }
  }function invoke_vii(index, a1, a2) {
    try {
      Module["dynCall_vii"](index, a1, a2);
    } catch (e) {
      if (typeof e !== "number" && e !== "longjmp") throw e;Module["setThrew"](1, 0);
    }
  }function invoke_ii(index, a1) {
    try {
      return Module["dynCall_ii"](index, a1);
    } catch (e) {
      if (typeof e !== "number" && e !== "longjmp") throw e;Module["setThrew"](1, 0);
    }
  }function invoke_viddi(index, a1, a2, a3, a4) {
    try {
      Module["dynCall_viddi"](index, a1, a2, a3, a4);
    } catch (e) {
      if (typeof e !== "number" && e !== "longjmp") throw e;Module["setThrew"](1, 0);
    }
  }function invoke_vidd(index, a1, a2, a3) {
    try {
      Module["dynCall_vidd"](index, a1, a2, a3);
    } catch (e) {
      if (typeof e !== "number" && e !== "longjmp") throw e;Module["setThrew"](1, 0);
    }
  }function invoke_iiii(index, a1, a2, a3) {
    try {
      return Module["dynCall_iiii"](index, a1, a2, a3);
    } catch (e) {
      if (typeof e !== "number" && e !== "longjmp") throw e;Module["setThrew"](1, 0);
    }
  }function invoke_diii(index, a1, a2, a3) {
    try {
      return Module["dynCall_diii"](index, a1, a2, a3);
    } catch (e) {
      if (typeof e !== "number" && e !== "longjmp") throw e;Module["setThrew"](1, 0);
    }
  }function invoke_di(index, a1) {
    try {
      return Module["dynCall_di"](index, a1);
    } catch (e) {
      if (typeof e !== "number" && e !== "longjmp") throw e;Module["setThrew"](1, 0);
    }
  }function invoke_iid(index, a1, a2) {
    try {
      return Module["dynCall_iid"](index, a1, a2);
    } catch (e) {
      if (typeof e !== "number" && e !== "longjmp") throw e;Module["setThrew"](1, 0);
    }
  }function invoke_iii(index, a1, a2) {
    try {
      return Module["dynCall_iii"](index, a1, a2);
    } catch (e) {
      if (typeof e !== "number" && e !== "longjmp") throw e;Module["setThrew"](1, 0);
    }
  }function invoke_viiddi(index, a1, a2, a3, a4, a5) {
    try {
      Module["dynCall_viiddi"](index, a1, a2, a3, a4, a5);
    } catch (e) {
      if (typeof e !== "number" && e !== "longjmp") throw e;Module["setThrew"](1, 0);
    }
  }function invoke_viiiiii(index, a1, a2, a3, a4, a5, a6) {
    try {
      Module["dynCall_viiiiii"](index, a1, a2, a3, a4, a5, a6);
    } catch (e) {
      if (typeof e !== "number" && e !== "longjmp") throw e;Module["setThrew"](1, 0);
    }
  }function invoke_dii(index, a1, a2) {
    try {
      return Module["dynCall_dii"](index, a1, a2);
    } catch (e) {
      if (typeof e !== "number" && e !== "longjmp") throw e;Module["setThrew"](1, 0);
    }
  }function invoke_i(index) {
    try {
      return Module["dynCall_i"](index);
    } catch (e) {
      if (typeof e !== "number" && e !== "longjmp") throw e;Module["setThrew"](1, 0);
    }
  }function invoke_iiiiii(index, a1, a2, a3, a4, a5) {
    try {
      return Module["dynCall_iiiiii"](index, a1, a2, a3, a4, a5);
    } catch (e) {
      if (typeof e !== "number" && e !== "longjmp") throw e;Module["setThrew"](1, 0);
    }
  }function invoke_viiid(index, a1, a2, a3, a4) {
    try {
      Module["dynCall_viiid"](index, a1, a2, a3, a4);
    } catch (e) {
      if (typeof e !== "number" && e !== "longjmp") throw e;Module["setThrew"](1, 0);
    }
  }function invoke_viififi(index, a1, a2, a3, a4, a5, a6) {
    try {
      Module["dynCall_viififi"](index, a1, a2, a3, a4, a5, a6);
    } catch (e) {
      if (typeof e !== "number" && e !== "longjmp") throw e;Module["setThrew"](1, 0);
    }
  }function invoke_viii(index, a1, a2, a3) {
    try {
      Module["dynCall_viii"](index, a1, a2, a3);
    } catch (e) {
      if (typeof e !== "number" && e !== "longjmp") throw e;Module["setThrew"](1, 0);
    }
  }function invoke_v(index) {
    try {
      Module["dynCall_v"](index);
    } catch (e) {
      if (typeof e !== "number" && e !== "longjmp") throw e;Module["setThrew"](1, 0);
    }
  }function invoke_viid(index, a1, a2, a3) {
    try {
      Module["dynCall_viid"](index, a1, a2, a3);
    } catch (e) {
      if (typeof e !== "number" && e !== "longjmp") throw e;Module["setThrew"](1, 0);
    }
  }function invoke_idd(index, a1, a2) {
    try {
      return Module["dynCall_idd"](index, a1, a2);
    } catch (e) {
      if (typeof e !== "number" && e !== "longjmp") throw e;Module["setThrew"](1, 0);
    }
  }function invoke_viiii(index, a1, a2, a3, a4) {
    try {
      Module["dynCall_viiii"](index, a1, a2, a3, a4);
    } catch (e) {
      if (typeof e !== "number" && e !== "longjmp") throw e;Module["setThrew"](1, 0);
    }
  }Module.asmGlobalArg = { "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array, "NaN": NaN, "Infinity": Infinity };Module.asmLibraryArg = { "abort": abort, "assert": assert, "enlargeMemory": enlargeMemory, "getTotalMemory": getTotalMemory, "abortOnCannotGrowMemory": abortOnCannotGrowMemory, "invoke_viiiii": invoke_viiiii, "invoke_vid": invoke_vid, "invoke_fiff": invoke_fiff, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viddi": invoke_viddi, "invoke_vidd": invoke_vidd, "invoke_iiii": invoke_iiii, "invoke_diii": invoke_diii, "invoke_di": invoke_di, "invoke_iid": invoke_iid, "invoke_iii": invoke_iii, "invoke_viiddi": invoke_viiddi, "invoke_viiiiii": invoke_viiiiii, "invoke_dii": invoke_dii, "invoke_i": invoke_i, "invoke_iiiiii": invoke_iiiiii, "invoke_viiid": invoke_viiid, "invoke_viififi": invoke_viififi, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_viid": invoke_viid, "invoke_idd": invoke_idd, "invoke_viiii": invoke_viiii, "_emscripten_asm_const_iiiii": _emscripten_asm_const_iiiii, "_emscripten_asm_const_iiidddddd": _emscripten_asm_const_iiidddddd, "_YGDisplayToString": _YGDisplayToString, "__nbind_finish": __nbind_finish, "__nbind_reference_external": __nbind_reference_external, "_emscripten_asm_const_iiiiiiii": _emscripten_asm_const_iiiiiiii, "_removeAccessorPrefix": _removeAccessorPrefix, "_typeModule": _typeModule, "__nbind_register_pool": __nbind_register_pool, "___syscall6": ___syscall6, "__decorate": __decorate, "_llvm_stackrestore": _llvm_stackrestore, "___assert_fail": ___assert_fail, "___cxa_atexit": ___cxa_atexit, "_YGAlignToString": _YGAlignToString, "__extends": __extends, "_YGOverflowToString": _YGOverflowToString, "__nbind_get_value_object": __nbind_get_value_object, "_emscripten_set_main_loop_timing": _emscripten_set_main_loop_timing, "__nbind_register_primitive": __nbind_register_primitive, "__nbind_register_type": __nbind_register_type, "_YGWrapToString": _YGWrapToString, "_emscripten_memcpy_big": _emscripten_memcpy_big, "_YGJustifyToString": _YGJustifyToString, "___setErrNo": ___setErrNo, "__nbind_register_class": __nbind_register_class, "_emscripten_asm_const_iiiid": _emscripten_asm_const_iiiid, "_nbind_value": _nbind_value, "_llvm_stacksave": _llvm_stacksave, "_YGPositionTypeToString": _YGPositionTypeToString, "___syscall54": ___syscall54, "_defineHidden": _defineHidden, "_emscripten_set_main_loop": _emscripten_set_main_loop, "_emscripten_get_now": _emscripten_get_now, "__nbind_register_callback_signature": __nbind_register_callback_signature, "_emscripten_asm_const_iiiiii": _emscripten_asm_const_iiiiii, "__nbind_register_function": __nbind_register_function, "__nbind_free_external": __nbind_free_external, "_emscripten_asm_const_iiii": _emscripten_asm_const_iiii, "_emscripten_asm_const_iiididi": _emscripten_asm_const_iiididi, "_YGEdgeToString": _YGEdgeToString, "_abort": _abort, "_atexit": _atexit, "___syscall140": ___syscall140, "___syscall146": ___syscall146, "_YGFlexDirectionToString": _YGFlexDirectionToString, "DYNAMICTOP_PTR": DYNAMICTOP_PTR, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "cttz_i8": cttz_i8, "___dso_handle": ___dso_handle }; // EMSCRIPTEN_START_ASM
  var asm = function (global, env, buffer) {
    "use asm";
    var a = new global.Int8Array(buffer);var b = new global.Int16Array(buffer);var c = new global.Int32Array(buffer);var d = new global.Uint8Array(buffer);var e = new global.Uint16Array(buffer);var f = new global.Uint32Array(buffer);var g = new global.Float32Array(buffer);var h = new global.Float64Array(buffer);var i = env.DYNAMICTOP_PTR | 0;var j = env.tempDoublePtr | 0;var k = env.ABORT | 0;var l = env.STACKTOP | 0;var m = env.STACK_MAX | 0;var n = env.cttz_i8 | 0;var o = env.___dso_handle | 0;var p = 0;var q = 0;var r = 0;var s = 0;var t = global.NaN,
        u = global.Infinity;var v = 0,
        w = 0,
        x = 0,
        y = 0,
        z = 0.0,
        A = 0,
        B = 0,
        C = 0,
        D = 0.0;var E = 0;var F = global.Math.floor;var G = global.Math.abs;var H = global.Math.sqrt;var I = global.Math.pow;var J = global.Math.cos;var K = global.Math.sin;var L = global.Math.tan;var M = global.Math.acos;var N = global.Math.asin;var O = global.Math.atan;var P = global.Math.atan2;var Q = global.Math.exp;var R = global.Math.log;var S = global.Math.ceil;var T = global.Math.imul;var U = global.Math.min;var V = global.Math.max;var W = global.Math.clz32;var X = global.Math.fround;var Y = env.abort;var Z = env.assert;var _ = env.enlargeMemory;var $ = env.getTotalMemory;var aa = env.abortOnCannotGrowMemory;var ba = env.invoke_viiiii;var ca = env.invoke_vid;var da = env.invoke_fiff;var ea = env.invoke_vi;var fa = env.invoke_vii;var ga = env.invoke_ii;var ha = env.invoke_viddi;var ia = env.invoke_vidd;var ja = env.invoke_iiii;var ka = env.invoke_diii;var la = env.invoke_di;var ma = env.invoke_iid;var na = env.invoke_iii;var oa = env.invoke_viiddi;var pa = env.invoke_viiiiii;var qa = env.invoke_dii;var ra = env.invoke_i;var sa = env.invoke_iiiiii;var ta = env.invoke_viiid;var ua = env.invoke_viififi;var va = env.invoke_viii;var wa = env.invoke_v;var xa = env.invoke_viid;var ya = env.invoke_idd;var za = env.invoke_viiii;var Aa = env._emscripten_asm_const_iiiii;var Ba = env._emscripten_asm_const_iiidddddd;var Ca = env._YGDisplayToString;var Da = env.__nbind_finish;var Ea = env.__nbind_reference_external;var Fa = env._emscripten_asm_const_iiiiiiii;var Ga = env._removeAccessorPrefix;var Ha = env._typeModule;var Ia = env.__nbind_register_pool;var Ja = env.___syscall6;var Ka = env.__decorate;var La = env._llvm_stackrestore;var Ma = env.___assert_fail;var Na = env.___cxa_atexit;var Oa = env._YGAlignToString;var Pa = env.__extends;var Qa = env._YGOverflowToString;var Ra = env.__nbind_get_value_object;var Sa = env._emscripten_set_main_loop_timing;var Ta = env.__nbind_register_primitive;var Ua = env.__nbind_register_type;var Va = env._YGWrapToString;var Wa = env._emscripten_memcpy_big;var Xa = env._YGJustifyToString;var Ya = env.___setErrNo;var Za = env.__nbind_register_class;var _a = env._emscripten_asm_const_iiiid;var $a = env._nbind_value;var ab = env._llvm_stacksave;var bb = env._YGPositionTypeToString;var cb = env.___syscall54;var db = env._defineHidden;var eb = env._emscripten_set_main_loop;var fb = env._emscripten_get_now;var gb = env.__nbind_register_callback_signature;var hb = env._emscripten_asm_const_iiiiii;var ib = env.__nbind_register_function;var jb = env.__nbind_free_external;var kb = env._emscripten_asm_const_iiii;var lb = env._emscripten_asm_const_iiididi;var mb = env._YGEdgeToString;var nb = env._abort;var ob = env._atexit;var pb = env.___syscall140;var qb = env.___syscall146;var rb = env._YGFlexDirectionToString;var sb = X(0);const tb = X(0);
    // EMSCRIPTEN_START_FUNCS
    function Tb(a) {
      a = a | 0;var b = 0;b = l;l = l + a | 0;l = l + 15 & -16;return b | 0;
    }function Ub() {
      return l | 0;
    }function Vb(a) {
      a = a | 0;l = a;
    }function Wb(a, b) {
      a = a | 0;b = b | 0;l = a;m = b;
    }function Xb(a, b) {
      a = a | 0;b = b | 0;if (!p) {
        p = a;q = b;
      }
    }function Yb(a) {
      a = a | 0;E = a;
    }function Zb() {
      return E | 0;
    }function _b(a) {
      a = a | 0;var b = 0;b = zb[c[2] & 31](12) | 0;vc((b | 0) != 0, 2632);c[b >> 2] = a;c[b + 4 >> 2] = 0;a = zb[c[2] & 31](a << 2) | 0;c[b + 8 >> 2] = a;vc((a | 0) != 0, 2667);return b | 0;
    }function $b(a) {
      a = a | 0;if (!a) return;xb[c[4] & 127](c[a + 8 >> 2] | 0);xb[c[4] & 127](a);return;
    }function ac(a) {
      a = a | 0;if (!a) a = 0;else a = c[a + 4 >> 2] | 0;return a | 0;
    }function bc(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0;e = c[a >> 2] | 0;if (!e) {
        e = _b(4) | 0;c[a >> 2] = e;
      }g = e + 4 | 0;a = c[g >> 2] | 0;if ((a | 0) == (c[e >> 2] | 0)) {
        c[e >> 2] = a << 1;f = e + 8 | 0;a = Gb[c[3] & 15](c[f >> 2] | 0, a << 3) | 0;c[f >> 2] = a;vc((a | 0) != 0, 2703);a = c[g >> 2] | 0;
      } else f = e + 8 | 0;e = c[f >> 2] | 0;if (a >>> 0 <= d >>> 0) {
        f = e;e = a;e = e + 1 | 0;c[g >> 2] = e;d = f + (d << 2) | 0;c[d >> 2] = b;return;
      }do {
        h = a;a = a + -1 | 0;c[e + (h << 2) >> 2] = c[e + (a << 2) >> 2];e = c[f >> 2] | 0;
      } while (a >>> 0 > d >>> 0);h = e;f = c[g >> 2] | 0;f = f + 1 | 0;c[g >> 2] = f;h = h + (d << 2) | 0;c[h >> 2] = b;return;
    }function cc(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0;d = a + 8 | 0;e = (c[d >> 2] | 0) + (b << 2) | 0;f = c[e >> 2] | 0;c[e >> 2] = 0;e = a + 4 | 0;a = (c[e >> 2] | 0) + -1 | 0;if (a >>> 0 <= b >>> 0) {
        d = a;c[e >> 2] = d;return f | 0;
      }do {
        g = c[d >> 2] | 0;a = b;b = b + 1 | 0;c[g + (a << 2) >> 2] = c[g + (b << 2) >> 2];c[(c[d >> 2] | 0) + (b << 2) >> 2] = 0;a = (c[e >> 2] | 0) + -1 | 0;
      } while (b >>> 0 < a >>> 0);c[e >> 2] = a;return f | 0;
    }function dc(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0;e = c[a + 4 >> 2] | 0;if (!e) {
        g = 0;return g | 0;
      }f = c[a + 8 >> 2] | 0;d = 0;while (1) {
        if ((c[f + (d << 2) >> 2] | 0) == (b | 0)) break;d = d + 1 | 0;if (d >>> 0 >= e >>> 0) {
          d = 0;g = 6;break;
        }
      }if ((g | 0) == 6) return d | 0;g = cc(a, d) | 0;return g | 0;
    }function ec(a, b) {
      a = a | 0;b = b | 0;if (!(ac(a) | 0)) {
        b = 0;return b | 0;
      }b = c[(c[a + 8 >> 2] | 0) + (b << 2) >> 2] | 0;return b | 0;
    }function fc(b) {
      b = b | 0;var d = 0,
          e = 0;d = zb[c[2] & 31](992) | 0;gc(b, (d | 0) != 0, 2741);c[2248] = (c[2248] | 0) + 1;AF(d | 0, 20, 992) | 0;if (!(a[b + 2 >> 0] | 0)) {
        e = d + 968 | 0;c[e >> 2] = b;return d | 0;
      }c[d + 4 >> 2] = 2;c[d + 12 >> 2] = 4;e = d + 968 | 0;c[e >> 2] = b;return d | 0;
    }function gc(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0;f = l;l = l + 16 | 0;e = f;if (b) {
        l = f;return;
      }c[e >> 2] = d;hc(a, 5, 2776, e);l = f;return;
    }function hc(a, b, d, e) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0;f = l;l = l + 16 | 0;g = f;c[g >> 2] = e;ic(a, 0, b, d, g);l = f;return;
    }function ic(a, b, d, e, f) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;f = f | 0;a = a | 0 ? a : 1020;Lb[c[a + 8 >> 2] & 1](a, b, d, e, f) | 0;if ((d | 0) == 5) nb();else return;
    }function jc(a, b, d, e, f) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;f = f | 0;switch (d | 0) {case 5:case 0:
          {
            f = pE(c[502] | 0, e, f) | 0;return f | 0;
          }default:
          {
            f = dF(e, f) | 0;return f | 0;
          }}return 0;
    }function kc() {
      return fc(1020) | 0;
    }function lc(a) {
      a = a | 0;var b = 0,
          d = 0;b = a + 944 | 0;d = c[b >> 2] | 0;if (d | 0) {
        dc(c[d + 948 >> 2] | 0, a) | 0;c[b >> 2] = 0;
      }d = mc(a) | 0;if (d | 0) {
        b = 0;do {
          c[(nc(a, b) | 0) + 944 >> 2] = 0;b = b + 1 | 0;
        } while ((b | 0) != (d | 0));
      }$b(c[a + 948 >> 2] | 0);xb[c[4] & 127](a);c[2248] = (c[2248] | 0) + -1;return;
    }function mc(a) {
      a = a | 0;return ac(c[a + 948 >> 2] | 0) | 0;
    }function nc(a, b) {
      a = a | 0;b = b | 0;return ec(c[a + 948 >> 2] | 0, b) | 0;
    }function oc(a, b) {
      a = a | 0;b = b | 0;if (!(dc(c[a + 948 >> 2] | 0, b) | 0)) return;AF(b + 400 | 0, 420, 540) | 0;c[b + 944 >> 2] = 0;pc(a);return;
    }function pc(b) {
      b = b | 0;var d = 0;while (1) {
        d = b + 976 | 0;if (a[d >> 0] | 0) {
          b = 4;break;
        }a[d >> 0] = 1;g[b + 504 >> 2] = X(t);b = c[b + 944 >> 2] | 0;if (!b) {
          b = 4;break;
        }
      }if ((b | 0) == 4) return;
    }function qc(b) {
      b = b | 0;var d = 0,
          e = 0;rc(b, (mc(b) | 0) == 0, 2780);rc(b, (c[b + 944 >> 2] | 0) == 0, 2834);$b(c[b + 948 >> 2] | 0);d = b + 968 | 0;e = c[d >> 2] | 0;AF(b | 0, 20, 992) | 0;if (!(a[e + 2 >> 0] | 0)) {
        c[d >> 2] = e;return;
      }c[b + 4 >> 2] = 2;c[b + 12 >> 2] = 4;c[d >> 2] = e;return;
    }function rc(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0;f = l;l = l + 16 | 0;e = f;if (!b) {
        c[e >> 2] = d;sc(a, 5, 2776, e);
      }l = f;return;
    }function sc(a, b, d, e) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0;g = l;l = l + 16 | 0;f = g;c[f >> 2] = e;if (!a) e = 0;else e = c[a + 968 >> 2] | 0;ic(e, a, b, d, f);l = g;return;
    }function tc() {
      return c[2248] | 0;
    }function uc() {
      var a = 0;a = zb[c[2] & 31](16) | 0;vc((a | 0) != 0, 2881);c[2249] = (c[2249] | 0) + 1;c[a >> 2] = c[255];c[a + 4 >> 2] = c[256];c[a + 8 >> 2] = c[257];c[a + 12 >> 2] = c[258];return a | 0;
    }function vc(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0;e = l;l = l + 16 | 0;d = e;if (!a) {
        c[d >> 2] = b;sc(0, 5, 2776, d);
      }l = e;return;
    }function wc(a) {
      a = a | 0;xb[c[4] & 127](a);c[2249] = (c[2249] | 0) + -1;return;
    }function xc(a, b) {
      a = a | 0;b = b | 0;var d = 0;if (!b) {
        d = 0;b = 0;
      } else {
        rc(a, (mc(a) | 0) == 0, 2918);d = 1;
      }c[a + 956 >> 2] = b;c[a + 980 >> 2] = d;return;
    }function yc(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0;e = b + 944 | 0;rc(a, (c[e >> 2] | 0) == 0, 2998);rc(a, (c[a + 956 >> 2] | 0) == 0, 3052);bc(a + 948 | 0, b, d);c[e >> 2] = a;pc(a);return;
    }function zc(a) {
      a = a | 0;return c[a + 944 >> 2] | 0;
    }function Ac(a) {
      a = a | 0;rc(a, (c[a + 956 >> 2] | 0) != 0, 3121);pc(a);return;
    }function Bc(b) {
      b = b | 0;return (a[b + 976 >> 0] | 0) != 0 | 0;
    }function Cc(a, b) {
      a = a | 0;b = b | 0;if (!(nE(a, b, 400) | 0)) return;AF(a | 0, b | 0, 400) | 0;pc(a);return;
    }function Dc(a) {
      a = a | 0;var b = tb;b = X(g[a + 44 >> 2]);a = Ec(b) | 0;return X(a ? X(0.0) : b);
    }function Ec(a) {
      a = X(a);return ((Fc(a) | 0) & 2147483647) >>> 0 > 2139095040 | 0;
    }function Fc(a) {
      a = X(a);return (g[j >> 2] = a, c[j >> 2] | 0) | 0;
    }function Gc(b) {
      b = b | 0;var d = tb;d = X(g[b + 48 >> 2]);if (!(Ec(d) | 0)) return X(d);d = a[(c[b + 968 >> 2] | 0) + 2 >> 0] | 0 ? X(1.0) : X(0.0);return X(d);
    }function Hc(a, b) {
      a = a | 0;b = b | 0;c[a + 972 >> 2] = b;return;
    }function Ic(a) {
      a = a | 0;return c[a + 972 >> 2] | 0;
    }function Jc(a, b) {
      a = a | 0;b = b | 0;var d = 0;d = a + 4 | 0;if ((c[d >> 2] | 0) == (b | 0)) return;c[d >> 2] = b;pc(a);return;
    }function Kc(a) {
      a = a | 0;return c[a + 4 >> 2] | 0;
    }function Lc(a, b) {
      a = a | 0;b = b | 0;var d = 0;d = a + 8 | 0;if ((c[d >> 2] | 0) == (b | 0)) return;c[d >> 2] = b;pc(a);return;
    }function Mc(a) {
      a = a | 0;return c[a + 8 >> 2] | 0;
    }function Nc(a, b) {
      a = a | 0;b = b | 0;var d = 0;d = a + 12 | 0;if ((c[d >> 2] | 0) == (b | 0)) return;c[d >> 2] = b;pc(a);return;
    }function Oc(a) {
      a = a | 0;return c[a + 12 >> 2] | 0;
    }function Pc(a, b) {
      a = a | 0;b = b | 0;var d = 0;d = a + 16 | 0;if ((c[d >> 2] | 0) == (b | 0)) return;c[d >> 2] = b;pc(a);return;
    }function Qc(a) {
      a = a | 0;return c[a + 16 >> 2] | 0;
    }function Rc(a, b) {
      a = a | 0;b = b | 0;var d = 0;d = a + 20 | 0;if ((c[d >> 2] | 0) == (b | 0)) return;c[d >> 2] = b;pc(a);return;
    }function Sc(a) {
      a = a | 0;return c[a + 20 >> 2] | 0;
    }function Tc(a, b) {
      a = a | 0;b = b | 0;var d = 0;d = a + 24 | 0;if ((c[d >> 2] | 0) == (b | 0)) return;c[d >> 2] = b;pc(a);return;
    }function Uc(a) {
      a = a | 0;return c[a + 24 >> 2] | 0;
    }function Vc(a, b) {
      a = a | 0;b = b | 0;var d = 0;d = a + 28 | 0;if ((c[d >> 2] | 0) == (b | 0)) return;c[d >> 2] = b;pc(a);return;
    }function Wc(a) {
      a = a | 0;return c[a + 28 >> 2] | 0;
    }function Xc(a, b) {
      a = a | 0;b = b | 0;var d = 0;d = a + 32 | 0;if ((c[d >> 2] | 0) == (b | 0)) return;c[d >> 2] = b;pc(a);return;
    }function Yc(a) {
      a = a | 0;return c[a + 32 >> 2] | 0;
    }function Zc(a, b) {
      a = a | 0;b = b | 0;var d = 0;d = a + 36 | 0;if ((c[d >> 2] | 0) == (b | 0)) return;c[d >> 2] = b;pc(a);return;
    }function _c(a) {
      a = a | 0;return c[a + 36 >> 2] | 0;
    }function $c(a, b) {
      a = a | 0;b = X(b);var c = 0;c = a + 40 | 0;if (!(X(g[c >> 2]) != b)) return;g[c >> 2] = b;pc(a);return;
    }function ad(a, b) {
      a = a | 0;b = X(b);var c = 0;c = a + 44 | 0;if (!(X(g[c >> 2]) != b)) return;g[c >> 2] = b;pc(a);return;
    }function bd(a, b) {
      a = a | 0;b = X(b);var c = 0;c = a + 48 | 0;if (!(X(g[c >> 2]) != b)) return;g[c >> 2] = b;pc(a);return;
    }function cd(a, b) {
      a = a | 0;b = X(b);var d = 0,
          e = 0;e = a + 52 | 0;d = a + 56 | 0;if (!(X(g[e >> 2]) != b) ? (c[d >> 2] | 0) == 1 : 0) return;g[e >> 2] = b;e = Ec(b) | 0;c[d >> 2] = e ? 3 : 1;pc(a);return;
    }function dd(a, b) {
      a = a | 0;b = X(b);var d = 0,
          e = 0;e = a + 52 | 0;d = a + 56 | 0;if (!(X(g[e >> 2]) != b) ? (c[d >> 2] | 0) == 2 : 0) return;g[e >> 2] = b;e = Ec(b) | 0;c[d >> 2] = e ? 3 : 2;pc(a);return;
    }function ed(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0;e = b + 52 | 0;d = c[e + 4 >> 2] | 0;b = a;c[b >> 2] = c[e >> 2];c[b + 4 >> 2] = d;return;
    }function fd(a, b, d) {
      a = a | 0;b = b | 0;d = X(d);var e = 0;e = a + 132 + (b << 3) | 0;b = a + 132 + (b << 3) + 4 | 0;if (!(X(g[e >> 2]) != d) ? (c[b >> 2] | 0) == 1 : 0) return;g[e >> 2] = d;c[b >> 2] = ((Ec(d) | 0) ^ 1) & 1;pc(a);return;
    }function gd(a, b, d) {
      a = a | 0;b = b | 0;d = X(d);var e = 0;e = a + 132 + (b << 3) | 0;b = a + 132 + (b << 3) + 4 | 0;if (!(X(g[e >> 2]) != d) ? (c[b >> 2] | 0) == 2 : 0) return;g[e >> 2] = d;e = Ec(d) | 0;c[b >> 2] = e ? 0 : 2;pc(a);return;
    }function hd(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0;e = b + 132 + (d << 3) | 0;b = c[e + 4 >> 2] | 0;d = a;c[d >> 2] = c[e >> 2];c[d + 4 >> 2] = b;return;
    }function id(a, b, d) {
      a = a | 0;b = b | 0;d = X(d);var e = 0;e = a + 60 + (b << 3) | 0;b = a + 60 + (b << 3) + 4 | 0;if (!(X(g[e >> 2]) != d) ? (c[b >> 2] | 0) == 1 : 0) return;g[e >> 2] = d;c[b >> 2] = ((Ec(d) | 0) ^ 1) & 1;pc(a);return;
    }function jd(a, b, d) {
      a = a | 0;b = b | 0;d = X(d);var e = 0;e = a + 60 + (b << 3) | 0;b = a + 60 + (b << 3) + 4 | 0;if (!(X(g[e >> 2]) != d) ? (c[b >> 2] | 0) == 2 : 0) return;g[e >> 2] = d;e = Ec(d) | 0;c[b >> 2] = e ? 0 : 2;pc(a);return;
    }function kd(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0;e = b + 60 + (d << 3) | 0;b = c[e + 4 >> 2] | 0;d = a;c[d >> 2] = c[e >> 2];c[d + 4 >> 2] = b;return;
    }function ld(a, b) {
      a = a | 0;b = b | 0;var d = 0;d = a + 60 + (b << 3) + 4 | 0;if ((c[d >> 2] | 0) == 3) return;g[a + 60 + (b << 3) >> 2] = X(t);c[d >> 2] = 3;pc(a);return;
    }function md(a, b, d) {
      a = a | 0;b = b | 0;d = X(d);var e = 0;e = a + 204 + (b << 3) | 0;b = a + 204 + (b << 3) + 4 | 0;if (!(X(g[e >> 2]) != d) ? (c[b >> 2] | 0) == 1 : 0) return;g[e >> 2] = d;c[b >> 2] = ((Ec(d) | 0) ^ 1) & 1;pc(a);return;
    }function nd(a, b, d) {
      a = a | 0;b = b | 0;d = X(d);var e = 0;e = a + 204 + (b << 3) | 0;b = a + 204 + (b << 3) + 4 | 0;if (!(X(g[e >> 2]) != d) ? (c[b >> 2] | 0) == 2 : 0) return;g[e >> 2] = d;e = Ec(d) | 0;c[b >> 2] = e ? 0 : 2;pc(a);return;
    }function od(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0;e = b + 204 + (d << 3) | 0;b = c[e + 4 >> 2] | 0;d = a;c[d >> 2] = c[e >> 2];c[d + 4 >> 2] = b;return;
    }function pd(a, b, d) {
      a = a | 0;b = b | 0;d = X(d);var e = 0;e = a + 276 + (b << 3) | 0;b = a + 276 + (b << 3) + 4 | 0;if (!(X(g[e >> 2]) != d) ? (c[b >> 2] | 0) == 1 : 0) return;g[e >> 2] = d;c[b >> 2] = ((Ec(d) | 0) ^ 1) & 1;pc(a);return;
    }function qd(a, b) {
      a = a | 0;b = b | 0;return X(g[a + 276 + (b << 3) >> 2]);
    }function rd(a, b) {
      a = a | 0;b = X(b);var d = 0,
          e = 0;e = a + 348 | 0;d = a + 352 | 0;if (!(X(g[e >> 2]) != b) ? (c[d >> 2] | 0) == 1 : 0) return;g[e >> 2] = b;e = Ec(b) | 0;c[d >> 2] = e ? 3 : 1;pc(a);return;
    }function sd(a, b) {
      a = a | 0;b = X(b);var d = 0,
          e = 0;e = a + 348 | 0;d = a + 352 | 0;if (!(X(g[e >> 2]) != b) ? (c[d >> 2] | 0) == 2 : 0) return;g[e >> 2] = b;e = Ec(b) | 0;c[d >> 2] = e ? 3 : 2;pc(a);return;
    }function td(a) {
      a = a | 0;var b = 0;b = a + 352 | 0;if ((c[b >> 2] | 0) == 3) return;g[a + 348 >> 2] = X(t);c[b >> 2] = 3;pc(a);return;
    }function ud(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0;e = b + 348 | 0;d = c[e + 4 >> 2] | 0;b = a;c[b >> 2] = c[e >> 2];c[b + 4 >> 2] = d;return;
    }function vd(a, b) {
      a = a | 0;b = X(b);var d = 0,
          e = 0;e = a + 356 | 0;d = a + 360 | 0;if (!(X(g[e >> 2]) != b) ? (c[d >> 2] | 0) == 1 : 0) return;g[e >> 2] = b;e = Ec(b) | 0;c[d >> 2] = e ? 3 : 1;pc(a);return;
    }function wd(a, b) {
      a = a | 0;b = X(b);var d = 0,
          e = 0;e = a + 356 | 0;d = a + 360 | 0;if (!(X(g[e >> 2]) != b) ? (c[d >> 2] | 0) == 2 : 0) return;g[e >> 2] = b;e = Ec(b) | 0;c[d >> 2] = e ? 3 : 2;pc(a);return;
    }function xd(a) {
      a = a | 0;var b = 0;b = a + 360 | 0;if ((c[b >> 2] | 0) == 3) return;g[a + 356 >> 2] = X(t);c[b >> 2] = 3;pc(a);return;
    }function yd(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0;e = b + 356 | 0;d = c[e + 4 >> 2] | 0;b = a;c[b >> 2] = c[e >> 2];c[b + 4 >> 2] = d;return;
    }function zd(a, b) {
      a = a | 0;b = X(b);var d = 0,
          e = 0;e = a + 364 | 0;d = a + 368 | 0;if (!(X(g[e >> 2]) != b) ? (c[d >> 2] | 0) == 1 : 0) return;g[e >> 2] = b;e = Ec(b) | 0;c[d >> 2] = e ? 3 : 1;pc(a);return;
    }function Ad(a, b) {
      a = a | 0;b = X(b);var d = 0,
          e = 0;e = a + 364 | 0;d = a + 368 | 0;if (!(X(g[e >> 2]) != b) ? (c[d >> 2] | 0) == 2 : 0) return;g[e >> 2] = b;e = Ec(b) | 0;c[d >> 2] = e ? 3 : 2;pc(a);return;
    }function Bd(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0;e = b + 364 | 0;d = c[e + 4 >> 2] | 0;b = a;c[b >> 2] = c[e >> 2];c[b + 4 >> 2] = d;return;
    }function Cd(a, b) {
      a = a | 0;b = X(b);var d = 0,
          e = 0;e = a + 372 | 0;d = a + 376 | 0;if (!(X(g[e >> 2]) != b) ? (c[d >> 2] | 0) == 1 : 0) return;g[e >> 2] = b;e = Ec(b) | 0;c[d >> 2] = e ? 3 : 1;pc(a);return;
    }function Dd(a, b) {
      a = a | 0;b = X(b);var d = 0,
          e = 0;e = a + 372 | 0;d = a + 376 | 0;if (!(X(g[e >> 2]) != b) ? (c[d >> 2] | 0) == 2 : 0) return;g[e >> 2] = b;e = Ec(b) | 0;c[d >> 2] = e ? 3 : 2;pc(a);return;
    }function Ed(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0;e = b + 372 | 0;d = c[e + 4 >> 2] | 0;b = a;c[b >> 2] = c[e >> 2];c[b + 4 >> 2] = d;return;
    }function Fd(a, b) {
      a = a | 0;b = X(b);var d = 0,
          e = 0;e = a + 380 | 0;d = a + 384 | 0;if (!(X(g[e >> 2]) != b) ? (c[d >> 2] | 0) == 1 : 0) return;g[e >> 2] = b;e = Ec(b) | 0;c[d >> 2] = e ? 3 : 1;pc(a);return;
    }function Gd(a, b) {
      a = a | 0;b = X(b);var d = 0,
          e = 0;e = a + 380 | 0;d = a + 384 | 0;if (!(X(g[e >> 2]) != b) ? (c[d >> 2] | 0) == 2 : 0) return;g[e >> 2] = b;e = Ec(b) | 0;c[d >> 2] = e ? 3 : 2;pc(a);return;
    }function Hd(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0;e = b + 380 | 0;d = c[e + 4 >> 2] | 0;b = a;c[b >> 2] = c[e >> 2];c[b + 4 >> 2] = d;return;
    }function Id(a, b) {
      a = a | 0;b = X(b);var d = 0,
          e = 0;e = a + 388 | 0;d = a + 392 | 0;if (!(X(g[e >> 2]) != b) ? (c[d >> 2] | 0) == 1 : 0) return;g[e >> 2] = b;e = Ec(b) | 0;c[d >> 2] = e ? 3 : 1;pc(a);return;
    }function Jd(a, b) {
      a = a | 0;b = X(b);var d = 0,
          e = 0;e = a + 388 | 0;d = a + 392 | 0;if (!(X(g[e >> 2]) != b) ? (c[d >> 2] | 0) == 2 : 0) return;g[e >> 2] = b;e = Ec(b) | 0;c[d >> 2] = e ? 3 : 2;pc(a);return;
    }function Kd(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0;e = b + 388 | 0;d = c[e + 4 >> 2] | 0;b = a;c[b >> 2] = c[e >> 2];c[b + 4 >> 2] = d;return;
    }function Ld(a, b) {
      a = a | 0;b = X(b);var c = 0;c = a + 396 | 0;if (!(X(g[c >> 2]) != b)) return;g[c >> 2] = b;pc(a);return;
    }function Md(a) {
      a = a | 0;return X(g[a + 396 >> 2]);
    }function Nd(a) {
      a = a | 0;return X(g[a + 400 >> 2]);
    }function Od(a) {
      a = a | 0;return X(g[a + 404 >> 2]);
    }function Pd(a) {
      a = a | 0;return X(g[a + 408 >> 2]);
    }function Qd(a) {
      a = a | 0;return X(g[a + 412 >> 2]);
    }function Rd(a) {
      a = a | 0;return X(g[a + 416 >> 2]);
    }function Sd(a) {
      a = a | 0;return X(g[a + 420 >> 2]);
    }function Td(a, b) {
      a = a | 0;b = b | 0;rc(a, b >>> 0 < 5, 3207);switch (b | 0) {case 0:
          {
            b = (c[a + 496 >> 2] | 0) == 2 ? 5 : 4;break;
          }case 2:
          {
            b = (c[a + 496 >> 2] | 0) == 2 ? 4 : 5;break;
          }default:
          {}}return X(g[a + 424 + (b << 2) >> 2]);
    }function Ud(a, b) {
      a = a | 0;b = b | 0;rc(a, b >>> 0 < 5, 3207);switch (b | 0) {case 0:
          {
            b = (c[a + 496 >> 2] | 0) == 2 ? 5 : 4;break;
          }case 2:
          {
            b = (c[a + 496 >> 2] | 0) == 2 ? 4 : 5;break;
          }default:
          {}}return X(g[a + 448 + (b << 2) >> 2]);
    }function Vd(a, b) {
      a = a | 0;b = b | 0;rc(a, b >>> 0 < 5, 3207);switch (b | 0) {case 0:
          {
            b = (c[a + 496 >> 2] | 0) == 2 ? 5 : 4;break;
          }case 2:
          {
            b = (c[a + 496 >> 2] | 0) == 2 ? 4 : 5;break;
          }default:
          {}}return X(g[a + 472 + (b << 2) >> 2]);
    }function Wd(a, b) {
      a = a | 0;b = b | 0;Xd(a, b, 0);return;
    }function Xd(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0,
          n = 0,
          o = 0,
          p = 0,
          q = 0,
          r = 0,
          s = 0,
          t = 0,
          u = 0,
          v = 0,
          w = 0,
          x = 0,
          y = 0,
          z = 0,
          A = 0,
          B = 0;B = l;l = l + 192 | 0;A = B + 176 | 0;z = B + 168 | 0;y = B + 160 | 0;x = B + 152 | 0;w = B + 144 | 0;v = B + 136 | 0;u = B + 128 | 0;t = B + 120 | 0;s = B + 112 | 0;r = B + 104 | 0;q = B + 96 | 0;p = B + 88 | 0;o = B + 80 | 0;n = B + 72 | 0;m = B + 64 | 0;f = B + 40 | 0;k = B + 32 | 0;j = B + 24 | 0;i = B + 16 | 0;Yd(a, d);sc(a, 3, 3261, B);e = c[a + 964 >> 2] | 0;if (e | 0) xb[e & 127](a);if (b & 1 | 0) {
        sc(a, 3, 3267, B + 8 | 0);h[i >> 3] = +X(g[a + 416 >> 2]);sc(a, 3, 3276, i);h[j >> 3] = +X(g[a + 420 >> 2]);sc(a, 3, 3288, j);h[k >> 3] = +X(g[a + 404 >> 2]);sc(a, 3, 3301, k);h[f >> 3] = +X(g[a + 400 >> 2]);sc(a, 3, 3311, f);sc(a, 3, 3321, B + 48 | 0);
      }if (b & 2 | 0) {
        sc(a, 3, 3324, B + 56 | 0);e = c[a + 4 >> 2] | 0;if (e | 0) {
          c[m >> 2] = rb(e | 0) | 0;sc(a, 3, 3332, m);
        }e = c[a + 8 >> 2] | 0;if (e | 0) {
          c[n >> 2] = Xa(e | 0) | 0;sc(a, 3, 3353, n);
        }e = c[a + 16 >> 2] | 0;if ((e | 0) != 4) {
          c[o >> 2] = Oa(e | 0) | 0;sc(a, 3, 3375, o);
        }e = c[a + 12 >> 2] | 0;if ((e | 0) != 1) {
          c[p >> 2] = Oa(e | 0) | 0;sc(a, 3, 3393, p);
        }e = c[a + 20 >> 2] | 0;if (e | 0) {
          c[q >> 2] = Oa(e | 0) | 0;sc(a, 3, 3413, q);
        }Zd(a, 3430, X(g[a + 44 >> 2]));Zd(a, 3440, X(g[a + 48 >> 2]));_d(a, 3452, a + 52 | 0);Zd(a, 3463, X(g[a + 40 >> 2]));e = c[a + 28 >> 2] | 0;if (e | 0) {
          c[r >> 2] = Va(e | 0) | 0;sc(a, 3, 3468, r);
        }e = c[a + 32 >> 2] | 0;if (e | 0) {
          c[s >> 2] = Qa(e | 0) | 0;sc(a, 3, 3483, s);
        }e = c[a + 36 >> 2] | 0;if (e | 0) {
          c[t >> 2] = Ca(e | 0) | 0;sc(a, 3, 3498, t);
        }$d(a, 3512, a + 60 | 0);$d(a, 3519, a + 204 | 0);$d(a, 3527, a + 276 | 0);_d(a, 3534, a + 348 | 0);_d(a, 3540, a + 356 | 0);_d(a, 3547, a + 380 | 0);_d(a, 3557, a + 388 | 0);_d(a, 3568, a + 364 | 0);_d(a, 3578, a + 372 | 0);e = c[a + 24 >> 2] | 0;if (e | 0) {
          c[u >> 2] = bb(e | 0) | 0;sc(a, 3, 3589, u);
        }u = a + 132 | 0;ae(a, 3604, u, 0);ae(a, 3609, u, 2);ae(a, 3615, u, 1);ae(a, 3619, u, 3);sc(a, 3, 3321, v);if (c[a + 956 >> 2] | 0) sc(a, 3, 3626, w);
      }sc(a, 3, 3652, x);f = ac(c[a + 948 >> 2] | 0) | 0;if (!((b & 4 | 0) != 0 & (f | 0) != 0)) {
        sc(a, 3, 3656, A);l = B;return;
      }i = d + 1 | 0;e = 0;do {
        sc(a, 3, 3654, z);Xd(nc(a, e) | 0, b, i);e = e + 1 | 0;
      } while ((e | 0) != (f | 0));Yd(a, d);sc(a, 3, 3654, y);sc(a, 3, 3656, A);l = B;return;
    }function Yd(a, b) {
      a = a | 0;b = b | 0;var c = 0,
          d = 0,
          e = 0;e = l;l = l + 16 | 0;d = e;if (!b) {
        l = e;return;
      } else c = 0;do {
        sc(a, 3, 3705, d);c = c + 1 | 0;
      } while ((c | 0) != (b | 0));l = e;return;
    }function Zd(a, b, d) {
      a = a | 0;b = b | 0;d = X(d);var e = 0,
          f = 0;f = l;l = l + 16 | 0;e = f;if (Ec(d) | 0) {
        l = f;return;
      }c[e >> 2] = b;h[e + 8 >> 3] = +d;sc(a, 3, 3696, e);l = f;return;
    }function _d(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;if ((c[d + 4 >> 2] | 0) == 3) return;ce(a, b, d);return;
    }function $d(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0,
          n = 0,
          o = 0,
          p = 0,
          q = 0;p = l;l = l + 112 | 0;n = p + 64 | 0;m = p + 56 | 0;k = p + 48 | 0;i = p + 40 | 0;h = p + 32 | 0;g = p + 24 | 0;o = p + 16 | 0;j = p + 8 | 0;f = p;e = p + 72 | 0;if (de(d) | 0) {
        ee(a, b, d);l = p;return;
      } else {
        q = mb(0) | 0;c[f >> 2] = b;c[f + 4 >> 2] = q;TE(e, 30, 3690, f) | 0;ee(a, e, d);f = mb(1) | 0;c[j >> 2] = b;c[j + 4 >> 2] = f;TE(e, 30, 3690, j) | 0;ee(a, e, d + 8 | 0);j = mb(2) | 0;c[o >> 2] = b;c[o + 4 >> 2] = j;TE(e, 30, 3690, o) | 0;ee(a, e, d + 16 | 0);o = mb(3) | 0;c[g >> 2] = b;c[g + 4 >> 2] = o;TE(e, 30, 3690, g) | 0;ee(a, e, d + 24 | 0);o = mb(4) | 0;c[h >> 2] = b;c[h + 4 >> 2] = o;TE(e, 30, 3690, h) | 0;ee(a, e, d + 32 | 0);o = mb(5) | 0;c[i >> 2] = b;c[i + 4 >> 2] = o;TE(e, 30, 3690, i) | 0;ee(a, e, d + 40 | 0);o = mb(6) | 0;c[k >> 2] = b;c[k + 4 >> 2] = o;TE(e, 30, 3690, k) | 0;ee(a, e, d + 48 | 0);o = mb(7) | 0;c[m >> 2] = b;c[m + 4 >> 2] = o;TE(e, 30, 3690, m) | 0;ee(a, e, d + 56 | 0);o = mb(8) | 0;c[n >> 2] = b;c[n + 4 >> 2] = o;TE(e, 30, 3690, n) | 0;ee(a, e, d + 64 | 0);l = p;return;
      }
    }function ae(a, b, c, d) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;ce(a, b, be(c, d, 1012) | 0);return;
    }function be(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;if (c[a + (b << 3) + 4 >> 2] | 0) {
        d = a + (b << 3) | 0;return d | 0;
      }if ((b | 2 | 0) == 3 ? c[a + 60 >> 2] | 0 : 0) {
        d = a + 56 | 0;return d | 0;
      }switch (b | 0) {case 0:case 2:case 4:case 5:
          {
            if (c[a + 52 >> 2] | 0) {
              d = a + 48 | 0;return d | 0;
            }break;
          }default:
          {}}if (!(c[a + 68 >> 2] | 0)) {
        d = (b | 1 | 0) == 5 ? 1012 : d;return d | 0;
      } else {
        d = a + 64 | 0;return d | 0;
      }return 0;
    }function ce(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          i = 0,
          j = 0,
          k = 0.0;j = l;l = l + 32 | 0;i = j + 8 | 0;f = j;e = c[d + 4 >> 2] | 0;switch (e | 0) {case 3:
          {
            c[f >> 2] = b;sc(a, 3, 3663, f);l = j;return;
          }case 0:
          {
            l = j;return;
          }default:
          {
            k = +X(g[d >> 2]);c[i >> 2] = b;h[i + 8 >> 3] = k;c[i + 16 >> 2] = (e | 0) == 1 ? 3674 : 3677;sc(a, 3, 3679, i);l = j;return;
          }}
    }function de(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0,
          f = 0;e = l;l = l + 16 | 0;d = e + 8 | 0;b = e;f = a + 8 | 0;c[b >> 2] = c[a >> 2];c[b + 4 >> 2] = c[a + 4 >> 2];c[d >> 2] = c[f >> 2];c[d + 4 >> 2] = c[f + 4 >> 2];if (!(ge(b, d) | 0)) {
        f = 0;l = e;return f | 0;
      }f = a + 16 | 0;c[b >> 2] = c[a >> 2];c[b + 4 >> 2] = c[a + 4 >> 2];c[d >> 2] = c[f >> 2];c[d + 4 >> 2] = c[f + 4 >> 2];if (!(ge(b, d) | 0)) {
        f = 0;l = e;return f | 0;
      }f = a + 24 | 0;c[b >> 2] = c[a >> 2];c[b + 4 >> 2] = c[a + 4 >> 2];c[d >> 2] = c[f >> 2];c[d + 4 >> 2] = c[f + 4 >> 2];f = ge(b, d) | 0;l = e;return f | 0;
    }function ee(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;if (fe(X(g[c >> 2]), X(0.0)) | 0) return;ce(a, b, c);return;
    }function fe(a, b) {
      a = X(a);b = X(b);var c = 0;if (Ec(a) | 0) {
        c = Ec(b) | 0;return c | 0;
      } else {
        c = X(G(X(a - b))) < X(.0000999999974);return c | 0;
      }return 0;
    }function ge(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = tb;d = c[a + 4 >> 2] | 0;if ((d | 0) != (c[b + 4 >> 2] | 0)) {
        d = 0;return d | 0;
      }if (!d) {
        d = 1;return d | 0;
      }e = X(g[a >> 2]);d = X(G(X(e - X(g[b >> 2])))) < X(.0000999999974);return d | 0;
    }function he(a, b, c, d) {
      a = X(a);b = X(b);c = c | 0;d = d | 0;var e = tb;a = X(a * b);e = X(YE(a, X(1.0)));do if (!(fe(e, X(0.0)) | 0)) {
        a = X(a - e);if (fe(e, X(1.0)) | 0) {
          a = X(a + X(1.0));break;
        }if (c) {
          a = X(a + X(1.0));break;
        } else {
          c = e >= X(.5);e = X(+a + (c ? 1.0 : 0.0));a = d ? a : e;break;
        }
      } else a = X(a - e); while (0);return X(a / b);
    }function ie(a, b, c, d, e, f, h, i, j, k, l, m, n) {
      a = a | 0;b = X(b);c = c | 0;d = X(d);e = e | 0;f = X(f);h = h | 0;i = X(i);j = X(j);k = X(k);l = X(l);m = X(m);n = n | 0;var o = 0,
          p = tb,
          q = tb,
          r = tb,
          s = tb,
          t = tb,
          u = tb;if (j < X(0.0) | k < X(0.0)) {
        h = 0;return h | 0;
      }if ((n | 0) != 0 ? (p = X(g[n + 4 >> 2]), p != X(0.0)) : 0) {
        r = X(he(b, p, 0, 0));s = X(he(d, p, 0, 0));q = X(he(f, p, 0, 0));p = X(he(i, p, 0, 0));
      } else {
        q = f;r = b;p = i;s = d;
      }if ((e | 0) == (a | 0)) o = fe(q, r) | 0;else o = 0;if ((h | 0) == (c | 0)) n = fe(p, s) | 0;else n = 0;if ((!o ? (t = X(b - l), !(je(a, t, j) | 0)) : 0) ? !(ke(a, t, e, j) | 0) : 0) o = le(a, t, e, f, j) | 0;else o = 1;if ((!n ? (u = X(d - m), !(je(c, u, k) | 0)) : 0) ? !(ke(c, u, h, k) | 0) : 0) n = le(c, u, h, i, k) | 0;else n = 1;h = o & n;return h | 0;
    }function je(a, b, c) {
      a = a | 0;b = X(b);c = X(c);if ((a | 0) == 1) a = fe(b, c) | 0;else a = 0;return a | 0;
    }function ke(a, b, c, d) {
      a = a | 0;b = X(b);c = c | 0;d = X(d);if ((a | 0) == 2 & (c | 0) == 0) {
        if (!(b >= d)) a = fe(b, d) | 0;else a = 1;
      } else a = 0;return a | 0;
    }function le(a, b, c, d, e) {
      a = a | 0;b = X(b);c = c | 0;d = X(d);e = X(e);if (!((a | 0) == 2 & (c | 0) == 2 & d > b)) {
        c = 0;return c | 0;
      }if (e <= b) {
        c = 1;return c | 0;
      }c = fe(b, e) | 0;return c | 0;
    }function me(b, d, e, f, i, j, k, m, n, o, p) {
      b = b | 0;d = X(d);e = X(e);f = f | 0;i = i | 0;j = j | 0;k = X(k);m = X(m);n = n | 0;o = o | 0;p = p | 0;var q = 0,
          r = 0,
          s = 0,
          t = 0,
          u = tb,
          v = tb,
          w = 0,
          x = 0,
          y = 0,
          z = 0,
          A = 0,
          B = 0,
          C = 0,
          D = 0,
          E = 0,
          F = 0,
          G = tb,
          H = tb,
          I = tb,
          J = 0.0,
          K = 0.0;F = l;l = l + 160 | 0;C = F + 120 | 0;B = F + 104 | 0;y = F + 72 | 0;t = F + 56 | 0;A = F + 8 | 0;x = F;z = (c[2251] | 0) + 1 | 0;c[2251] = z;D = b + 976 | 0;if ((a[D >> 0] | 0) != 0 ? (c[b + 512 >> 2] | 0) != (c[2250] | 0) : 0) w = 4;else if ((c[b + 516 >> 2] | 0) == (f | 0)) E = 0;else w = 4;if ((w | 0) == 4) {
        c[b + 520 >> 2] = 0;c[b + 924 >> 2] = -1;c[b + 928 >> 2] = -1;g[b + 932 >> 2] = X(-1.0);g[b + 936 >> 2] = X(-1.0);E = 1;
      }a: do if (!(c[b + 956 >> 2] | 0)) {
        if (n) {
          q = b + 916 | 0;if (!(fe(X(g[q >> 2]), d) | 0)) {
            w = 21;break;
          }if (!(fe(X(g[b + 920 >> 2]), e) | 0)) {
            w = 21;break;
          }if ((c[b + 924 >> 2] | 0) != (i | 0)) {
            w = 21;break;
          }q = (c[b + 928 >> 2] | 0) == (j | 0) ? q : 0;w = 22;break;
        }s = c[b + 520 >> 2] | 0;if (!s) w = 21;else {
          r = 0;while (1) {
            q = b + 524 + (r * 24 | 0) | 0;if (((fe(X(g[q >> 2]), d) | 0 ? fe(X(g[b + 524 + (r * 24 | 0) + 4 >> 2]), e) | 0 : 0) ? (c[b + 524 + (r * 24 | 0) + 8 >> 2] | 0) == (i | 0) : 0) ? (c[b + 524 + (r * 24 | 0) + 12 >> 2] | 0) == (j | 0) : 0) {
              w = 22;break a;
            }r = r + 1 | 0;if (r >>> 0 >= s >>> 0) {
              w = 21;break;
            }
          }
        }
      } else {
        u = X(ne(b, 2, k));v = X(ne(b, 0, k));q = b + 916 | 0;I = X(g[q >> 2]);H = X(g[b + 920 >> 2]);G = X(g[b + 932 >> 2]);if (!(ie(i, d, j, e, c[b + 924 >> 2] | 0, I, c[b + 928 >> 2] | 0, H, G, X(g[b + 936 >> 2]), u, v, p) | 0)) {
          s = c[b + 520 >> 2] | 0;if (!s) w = 21;else {
            r = 0;while (1) {
              q = b + 524 + (r * 24 | 0) | 0;G = X(g[q >> 2]);H = X(g[b + 524 + (r * 24 | 0) + 4 >> 2]);I = X(g[b + 524 + (r * 24 | 0) + 16 >> 2]);if (ie(i, d, j, e, c[b + 524 + (r * 24 | 0) + 8 >> 2] | 0, G, c[b + 524 + (r * 24 | 0) + 12 >> 2] | 0, H, I, X(g[b + 524 + (r * 24 | 0) + 20 >> 2]), u, v, p) | 0) {
                w = 22;break a;
              }r = r + 1 | 0;if (r >>> 0 >= s >>> 0) {
                w = 21;break;
              }
            }
          }
        } else w = 22;
      } while (0);do if ((w | 0) == 21) {
        if (!(a[11549] | 0)) {
          q = 0;w = 31;
        } else {
          q = 0;w = 28;
        }
      } else if ((w | 0) == 22) {
        r = (a[11549] | 0) != 0;if (!((q | 0) != 0 & (E ^ 1))) if (r) {
          w = 28;break;
        } else {
          w = 31;break;
        }t = q + 16 | 0;c[b + 908 >> 2] = c[t >> 2];s = q + 20 | 0;c[b + 912 >> 2] = c[s >> 2];if (!((a[11550] | 0) == 0 | r ^ 1)) {
          c[x >> 2] = oe(z) | 0;c[x + 4 >> 2] = z;bF(3708, x) | 0;r = c[b + 964 >> 2] | 0;if (r | 0) xb[r & 127](b);i = pe(i, n) | 0;j = pe(j, n) | 0;K = +X(g[t >> 2]);J = +X(g[s >> 2]);c[A >> 2] = i;c[A + 4 >> 2] = j;h[A + 8 >> 3] = +d;h[A + 16 >> 3] = +e;h[A + 24 >> 3] = K;h[A + 32 >> 3] = J;c[A + 40 >> 2] = o;bF(3725, A) | 0;
        }
      } while (0);if ((w | 0) == 28) {
        r = oe(z) | 0;c[t >> 2] = r;c[t + 4 >> 2] = z;c[t + 8 >> 2] = E ? 3774 : 11551;bF(3776, t) | 0;r = c[b + 964 >> 2] | 0;if (r | 0) xb[r & 127](b);A = pe(i, n) | 0;w = pe(j, n) | 0;c[y >> 2] = A;c[y + 4 >> 2] = w;h[y + 8 >> 3] = +d;h[y + 16 >> 3] = +e;c[y + 24 >> 2] = o;bF(3785, y) | 0;w = 31;
      }if ((w | 0) == 31) {
        qe(b, d, e, f, i, j, k, m, n, p);if (a[11549] | 0) {
          r = c[2251] | 0;A = oe(r) | 0;c[B >> 2] = A;c[B + 4 >> 2] = r;c[B + 8 >> 2] = E ? 3774 : 11551;bF(3819, B) | 0;r = c[b + 964 >> 2] | 0;if (r | 0) xb[r & 127](b);A = pe(i, n) | 0;B = pe(j, n) | 0;J = +X(g[b + 908 >> 2]);K = +X(g[b + 912 >> 2]);c[C >> 2] = A;c[C + 4 >> 2] = B;h[C + 8 >> 3] = J;h[C + 16 >> 3] = K;c[C + 24 >> 2] = o;bF(3828, C) | 0;
        }c[b + 516 >> 2] = f;if (!q) {
          r = b + 520 | 0;q = c[r >> 2] | 0;if ((q | 0) == 16) {
            if (a[11549] | 0) cF(3860) | 0;c[r >> 2] = 0;q = 0;
          }if (n) q = b + 916 | 0;else {
            c[r >> 2] = q + 1;q = b + 524 + (q * 24 | 0) | 0;
          }g[q >> 2] = d;g[q + 4 >> 2] = e;c[q + 8 >> 2] = i;c[q + 12 >> 2] = j;c[q + 16 >> 2] = c[b + 908 >> 2];c[q + 20 >> 2] = c[b + 912 >> 2];q = 0;
        }
      }if (!n) {
        D = c[2251] | 0;D = D + -1 | 0;c[2251] = D;D = c[2250] | 0;n = b + 512 | 0;c[n >> 2] = D;n = (q | 0) == 0;E = E | n;l = F;return E | 0;
      }c[b + 416 >> 2] = c[b + 908 >> 2];c[b + 420 >> 2] = c[b + 912 >> 2];a[b + 977 >> 0] = 1;a[D >> 0] = 0;D = c[2251] | 0;D = D + -1 | 0;c[2251] = D;D = c[2250] | 0;n = b + 512 | 0;c[n >> 2] = D;n = (q | 0) == 0;E = E | n;l = F;return E | 0;
    }function ne(a, b, c) {
      a = a | 0;b = b | 0;c = X(c);var d = tb;d = X(te(a, b, c));return X(d + X(ue(a, b, c)));
    }function oe(a) {
      a = a | 0;return (a >>> 0 > 60 ? 4261 : 4261 + (60 - a) | 0) | 0;
    }function pe(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0,
          f = 0;f = l;l = l + 32 | 0;d = f + 12 | 0;e = f;c[d >> 2] = c[275];c[d + 4 >> 2] = c[276];c[d + 8 >> 2] = c[277];c[e >> 2] = c[278];c[e + 4 >> 2] = c[279];c[e + 8 >> 2] = c[280];if (a >>> 0 > 2) {
        e = 11551;l = f;return e | 0;
      }e = c[(b ? e : d) + (a << 2) >> 2] | 0;l = f;return e | 0;
    }function qe(b, e, f, h, i, k, m, n, o, p) {
      b = b | 0;e = X(e);f = X(f);h = h | 0;i = i | 0;k = k | 0;m = X(m);n = X(n);o = o | 0;p = p | 0;var q = 0,
          r = 0,
          s = 0,
          t = 0,
          u = tb,
          v = tb,
          w = tb,
          x = tb,
          y = tb,
          z = tb,
          A = tb,
          B = 0,
          C = 0,
          D = 0,
          E = tb,
          F = tb,
          G = tb,
          H = 0,
          I = 0,
          J = 0,
          K = 0,
          L = 0,
          M = 0,
          N = 0,
          O = 0,
          P = 0,
          Q = 0,
          R = 0,
          S = 0,
          T = 0,
          U = 0,
          V = 0,
          W = 0,
          Y = 0,
          Z = 0,
          _ = tb,
          $ = tb,
          aa = tb,
          ba = tb,
          ca = tb,
          da = 0,
          ea = 0,
          fa = 0,
          ga = 0,
          ha = 0,
          ia = tb,
          ja = tb,
          ka = tb,
          la = tb,
          ma = tb,
          na = tb,
          oa = 0,
          pa = tb,
          qa = tb,
          ra = tb,
          sa = tb,
          ta = tb,
          ua = tb,
          va = 0,
          wa = tb,
          xa = 0,
          ya = tb,
          za = 0,
          Aa = 0,
          Ba = 0,
          Ca = 0,
          Da = 0,
          Ea = tb,
          Fa = 0,
          Ga = 0,
          Ha = 0,
          Ia = 0,
          Ja = 0,
          Ka = 0,
          La = 0,
          Ma = tb,
          Na = 0,
          Oa = 0;La = l;l = l + 16 | 0;da = La + 12 | 0;ea = La + 8 | 0;fa = La + 4 | 0;ga = La;rc(b, (i | 0) == 0 | (Ec(e) | 0) ^ 1, 3882);rc(b, (k | 0) == 0 | (Ec(f) | 0) ^ 1, 3962);Ga = re(b, h) | 0;c[b + 496 >> 2] = Ga;Ja = se(2, Ga) | 0;Ka = se(0, Ga) | 0;g[b + 440 >> 2] = X(te(b, Ja, m));g[b + 444 >> 2] = X(ue(b, Ja, m));g[b + 428 >> 2] = X(te(b, Ka, m));g[b + 436 >> 2] = X(ue(b, Ka, m));g[b + 464 >> 2] = X(ve(b, Ja));g[b + 468 >> 2] = X(we(b, Ja));g[b + 452 >> 2] = X(ve(b, Ka));g[b + 460 >> 2] = X(we(b, Ka));g[b + 488 >> 2] = X(xe(b, Ja, m));g[b + 492 >> 2] = X(ye(b, Ja, m));g[b + 476 >> 2] = X(xe(b, Ka, m));g[b + 484 >> 2] = X(ye(b, Ka, m));if (c[b + 956 >> 2] | 0) {
        ze(b, e, f, i, k, m, n);l = La;return;
      }Ha = b + 948 | 0;Ia = ac(c[Ha >> 2] | 0) | 0;if (!Ia) {
        Ae(b, e, f, i, k, m, n);l = La;return;
      }if (!o ? Be(b, e, f, i, k, m, n) | 0 : 0) {
        l = La;return;
      }W = b + 508 | 0;a[W >> 0] = 0;Ja = se(c[b + 4 >> 2] | 0, Ga) | 0;Ka = Ce(Ja, Ga) | 0;Fa = De(Ja) | 0;Y = c[b + 8 >> 2] | 0;Aa = b + 28 | 0;Z = (c[Aa >> 2] | 0) != 0;ta = Fa ? m : n;wa = Fa ? n : m;_ = X(Ee(b, Ja, m));$ = X(Fe(b, Ja, m));u = X(Ee(b, Ka, m));ua = X(Ge(b, Ja, m));ya = X(Ge(b, Ka, m));D = Fa ? i : k;za = Fa ? k : i;Ea = Fa ? ua : ya;y = Fa ? ya : ua;sa = X(ne(b, 2, m));x = X(ne(b, 0, m));v = X(X(X(He(b + 364 | 0, m)) - sa) - Ea);w = X(X(X(He(b + 380 | 0, m)) - sa) - Ea);z = X(X(X(He(b + 372 | 0, n)) - x) - y);A = X(X(X(He(b + 388 | 0, n)) - x) - y);aa = Fa ? v : z;ba = Fa ? w : A;sa = X(e - sa);e = X(sa - Ea);if (Ec(e) | 0) Ea = e;else Ea = X(UE(X(WE(e, w)), v));qa = X(f - x);e = X(qa - y);if (Ec(e) | 0) ra = e;else ra = X(UE(X(WE(e, A)), z));v = Fa ? Ea : ra;pa = Fa ? ra : Ea;a: do if ((D | 0) == 1) {
        h = 0;r = 0;while (1) {
          q = nc(b, r) | 0;if (!h) {
            if (X(Je(q)) > X(0.0) ? X(Ke(q)) > X(0.0) : 0) h = q;else h = 0;
          } else if (Ie(q) | 0) {
            t = 0;break a;
          }r = r + 1 | 0;if (r >>> 0 >= Ia >>> 0) {
            t = h;break;
          }
        }
      } else t = 0; while (0);B = t + 500 | 0;C = t + 504 | 0;h = 0;q = 0;e = X(0.0);s = 0;do {
        r = ec(c[Ha >> 2] | 0, s) | 0;if ((c[r + 36 >> 2] | 0) == 1) {
          Le(r);a[r + 977 >> 0] = 1;a[r + 976 >> 0] = 0;
        } else {
          Me(r);if (o) Ne(r, re(r, Ga) | 0, v, pa, Ea);do if ((c[r + 24 >> 2] | 0) != 1) {
            if ((r | 0) == (t | 0)) {
              c[B >> 2] = c[2250];g[C >> 2] = X(0.0);break;
            } else {
              Oe(b, r, Ea, i, ra, Ea, ra, k, Ga, p);break;
            }
          } else {
            if (q | 0) c[q + 952 >> 2] = r;c[r + 952 >> 2] = 0;q = r;h = (h | 0) == 0 ? r : h;
          } while (0);na = X(g[r + 504 >> 2]);e = X(e + X(na + X(ne(r, Ja, Ea))));
        }s = s + 1 | 0;
      } while ((s | 0) != (Ia | 0));K = e > v;oa = Z & ((D | 0) == 2 & K) ? 1 : D;I = (za | 0) == 1;M = I & (o ^ 1);N = (oa | 0) == 1;O = (oa | 0) == 2;P = 1036 + (Ja << 2) | 0;Q = (za | 2 | 0) == 2;V = I & (Z ^ 1);R = 1052 + (Ka << 2) | 0;S = 1052 + (Ja << 2) | 0;T = 1036 + (Ka << 2) | 0;U = (za | 0) != 1;K = Z & ((D | 0) != 0 & K);J = b + 968 | 0;I = I ^ 1;F = v;H = 0;L = 0;na = X(0.0);ca = X(0.0);while (1) {
        b: do if (H >>> 0 < Ia >>> 0) {
          s = 0;z = X(0.0);y = X(0.0);v = X(0.0);e = X(0.0);r = 0;q = 0;t = H;while (1) {
            B = ec(c[Ha >> 2] | 0, t) | 0;if ((c[B + 36 >> 2] | 0) != 1 ? (c[B + 940 >> 2] = L, (c[B + 24 >> 2] | 0) != 1) : 0) {
              w = X(ne(B, Ja, Ea));D = c[P >> 2] | 0;x = X(He(B + 380 + (D << 3) | 0, ta));f = X(g[B + 504 >> 2]);x = X(WE(x, f));x = X(UE(X(He(B + 364 + (D << 3) | 0, ta)), x));if (Z & (s | 0) != 0 & X(w + X(y + x)) > F) {
                D = s;w = z;break b;
              }w = X(w + x);x = X(y + w);w = X(z + w);if (Ie(B) | 0) {
                v = X(v + X(Je(B)));e = X(e - X(f * X(Ke(B))));
              }if (q | 0) c[q + 952 >> 2] = B;c[B + 952 >> 2] = 0;s = s + 1 | 0;q = B;r = (r | 0) == 0 ? B : r;
            } else {
              w = z;x = y;
            }t = t + 1 | 0;if (t >>> 0 < Ia >>> 0) {
              z = w;y = x;
            } else {
              D = s;break;
            }
          }
        } else {
          D = 0;w = X(0.0);v = X(0.0);e = X(0.0);r = 0;t = H;
        } while (0);k = v > X(0.0) & v < X(1.0);E = k ? X(1.0) : v;k = e > X(0.0) & e < X(1.0);A = k ? X(1.0) : e;do if (!N) if (!(w < aa & ((Ec(aa) | 0) ^ 1))) {
          if (!(w > ba & ((Ec(ba) | 0) ^ 1))) {
            if (!(a[(c[J >> 2] | 0) + 3 >> 0] | 0)) {
              if (!(E == X(0.0)) ? !(X(Je(b)) == X(0.0)) : 0) break;F = w;
            }
          } else F = ba;
        } else F = aa; while (0);if (Ec(F) | 0) {
          if (w < X(0.0)) G = X(-w);else G = X(0.0);
        } else G = X(F - w);if (!M ? (ha = (r | 0) == 0, !ha) : 0) {
          s = c[P >> 2] | 0;B = G < X(0.0);y = X(G / A);C = G > X(0.0);z = X(G / E);w = X(0.0);x = X(0.0);e = X(0.0);q = r;do {
            f = X(He(q + 380 + (s << 3) | 0, ta));v = X(He(q + 364 + (s << 3) | 0, ta));v = X(WE(f, X(UE(v, X(g[q + 504 >> 2])))));if (B) {
              f = X(v * X(Ke(q)));if (f != X(-0.0) ? (Ma = X(v - X(y * f)), ia = X(Pe(q, Ja, Ma, F, Ea)), Ma != ia) : 0) {
                w = X(w - X(ia - v));e = X(e + f);
              }
            } else if ((C ? (ja = X(Je(q)), ja != X(0.0)) : 0) ? (Ma = X(v + X(z * ja)), ka = X(Pe(q, Ja, Ma, F, Ea)), Ma != ka) : 0) {
              w = X(w - X(ka - v));x = X(x - ja);
            }q = c[q + 952 >> 2] | 0;
          } while ((q | 0) != 0);e = X(A + e);v = X(G + w);if (!ha) {
            y = X(E + x);B = c[P >> 2] | 0;C = v < X(0.0);k = e == X(0.0);z = X(v / e);s = v > X(0.0);y = X(v / y);e = X(0.0);do {
              Ma = X(He(r + 380 + (B << 3) | 0, ta));w = X(He(r + 364 + (B << 3) | 0, ta));w = X(WE(Ma, X(UE(w, X(g[r + 504 >> 2])))));if (C) {
                Ma = X(w * X(Ke(r)));v = X(-Ma);if (Ma != X(-0.0)) {
                  Ma = X(z * v);v = X(Pe(r, Ja, X(w + (k ? v : Ma)), F, Ea));
                } else v = w;
              } else if (s ? (la = X(Je(r)), la != X(0.0)) : 0) v = X(Pe(r, Ja, X(w + X(y * la)), F, Ea));else v = w;e = X(e - X(v - w));x = X(ne(r, Ja, Ea));f = X(ne(r, Ka, Ea));v = X(v + x);g[ea >> 2] = v;c[ga >> 2] = 1;q = Ec(pa) | 0;if ((!q ? !(K | (Qe(r, Ka, pa) | 0 | I)) : 0) ? (Re(b, r) | 0) == 4 : 0) {
                g[da >> 2] = pa;c[fa >> 2] = 1;
              } else Da = 78;do if ((Da | 0) == 78) {
                Da = 0;if (Qe(r, Ka, pa) | 0) {
                  q = c[r + 984 + (c[T >> 2] << 2) >> 2] | 0;Ma = X(f + X(He(q, pa)));g[da >> 2] = Ma;q = U & (c[q + 4 >> 2] | 0) == 2;c[fa >> 2] = ((Ec(Ma) | 0 | q) ^ 1) & 1;break;
                } else {
                  g[da >> 2] = pa;c[fa >> 2] = q ? 0 : 2;break;
                }
              } while (0);w = X(g[r + 396 >> 2]);if (!(Ec(w) | 0)) {
                v = X(v - x);Ma = X(v / w);v = X(w * v);v = X(UE(Fa ? Ma : v, X(Ge(r, Ka, Ea))));g[da >> 2] = v;c[fa >> 2] = 1;if (Ie(r) | 0) {
                  v = X(WE(X(v - f), pa));g[da >> 2] = v;if (Fa) w = X(v * w);else w = X(v / w);g[ea >> 2] = X(x + w);
                }g[da >> 2] = X(f + v);
              }Se(r, Ja, F, Ea, ga, ea);Se(r, Ka, pa, Ea, fa, da);if (Qe(r, Ka, pa) | 0) q = 0;else q = (Re(b, r) | 0) == 4;Ma = X(g[ea >> 2]);E = X(g[da >> 2]);Na = c[ga >> 2] | 0;Oa = c[fa >> 2] | 0;me(r, Fa ? Ma : E, Fa ? E : Ma, Ga, Fa ? Na : Oa, Fa ? Oa : Na, Ea, ra, o & (q ^ 1), 3463, p) | 0;a[W >> 0] = a[W >> 0] | a[r + 508 >> 0];r = c[r + 952 >> 2] | 0;
            } while ((r | 0) != 0);
          } else e = X(0.0);
        } else e = X(0.0);e = X(G + e);Oa = e < X(0.0) & 1;a[W >> 0] = Oa | d[W >> 0];if (O & e > X(0.0)) {
          q = c[P >> 2] | 0;if ((c[b + 364 + (q << 3) + 4 >> 2] | 0) != 0 ? (ma = X(He(b + 364 + (q << 3) | 0, ta)), ma >= X(0.0)) : 0) v = X(UE(X(0.0), X(ma - X(F - e))));else v = X(0.0);
        } else v = e;B = H >>> 0 < t >>> 0;if (B) {
          s = H;q = 0;do {
            r = ec(c[Ha >> 2] | 0, s) | 0;if (!(c[r + 24 >> 2] | 0)) {
              q = ((c[(Te(r, Ja) | 0) + 4 >> 2] | 0) == 3 & 1) + q | 0;q = q + ((c[(Ue(r, Ja) | 0) + 4 >> 2] | 0) == 3 & 1) | 0;
            }s = s + 1 | 0;
          } while ((s | 0) != (t | 0));if (q) {
            x = X(0.0);f = X(0.0);
          } else Da = 100;
        } else Da = 100;c: do if ((Da | 0) == 100) {
          Da = 0;switch (Y | 0) {case 1:
              {
                q = 0;x = X(v * X(.5));f = X(0.0);break c;
              }case 2:
              {
                q = 0;x = v;f = X(0.0);break c;
              }case 3:
              {
                if (D >>> 0 <= 1) {
                  q = 0;x = X(0.0);f = X(0.0);break c;
                }f = X((D + -1 | 0) >>> 0);q = 0;x = X(0.0);f = X(X(UE(v, X(0.0))) / f);break c;
              }case 4:
              {
                f = X(v / X(D >>> 0));q = 0;x = X(f * X(.5));break c;
              }default:
              {
                q = 0;x = X(0.0);f = X(0.0);break c;
              }}
        } while (0);e = X(_ + x);if (B) {
          w = X(v / X(q | 0));r = H;v = X(0.0);do {
            q = ec(c[Ha >> 2] | 0, r) | 0;d: do if ((c[q + 36 >> 2] | 0) != 1) {
              switch (c[q + 24 >> 2] | 0) {case 1:
                  {
                    if (Ve(q, Ja) | 0) {
                      if (!o) break d;Ma = X(We(q, Ja, F));Ma = X(Ma + X(ve(b, Ja)));Ma = X(Ma + X(te(q, Ja, Ea)));g[q + 400 + (c[S >> 2] << 2) >> 2] = Ma;break d;
                    }break;
                  }case 0:
                  {
                    Oa = (c[(Te(q, Ja) | 0) + 4 >> 2] | 0) == 3;Ma = X(w + e);e = Oa ? Ma : e;if (o) {
                      Oa = q + 400 + (c[S >> 2] << 2) | 0;g[Oa >> 2] = X(e + X(g[Oa >> 2]));
                    }Oa = (c[(Ue(q, Ja) | 0) + 4 >> 2] | 0) == 3;Ma = X(w + e);e = Oa ? Ma : e;if (M) {
                      Ma = X(f + X(ne(q, Ja, Ea)));v = pa;e = X(e + X(Ma + X(g[q + 504 >> 2])));break d;
                    } else {
                      e = X(e + X(f + X(Xe(q, Ja, Ea))));v = X(UE(v, X(Xe(q, Ka, Ea))));break d;
                    }
                  }default:
                  {}}if (o) {
                Ma = X(x + X(ve(b, Ja)));Oa = q + 400 + (c[S >> 2] << 2) | 0;g[Oa >> 2] = X(Ma + X(g[Oa >> 2]));
              }
            } while (0);r = r + 1 | 0;
          } while ((r | 0) != (t | 0));
        } else v = X(0.0);f = X($ + e);if (Q) x = X(X(Pe(b, Ka, X(ya + v), wa, m)) - ya);else x = pa;w = X(X(Pe(b, Ka, X(ya + (V ? pa : v)), wa, m)) - ya);if (B & o) {
          r = H;do {
            s = ec(c[Ha >> 2] | 0, r) | 0;do if ((c[s + 36 >> 2] | 0) != 1) {
              if ((c[s + 24 >> 2] | 0) == 1) {
                if (Ve(s, Ka) | 0) {
                  e = X(We(s, Ka, pa));e = X(e + X(ve(b, Ka)));
                } else e = X(ve(b, Ka));Ma = X(e + X(te(s, Ka, Ea)));g[s + 400 + (c[R >> 2] << 2) >> 2] = Ma;break;
              }q = Re(b, s) | 0;do if ((q | 0) == 4) {
                if ((c[(Te(s, Ka) | 0) + 4 >> 2] | 0) == 3) {
                  Da = 137;break;
                }if ((c[(Ue(s, Ka) | 0) + 4 >> 2] | 0) == 3) {
                  Da = 137;break;
                }if (Qe(s, Ka, pa) | 0) {
                  e = u;break;
                }Na = c[s + 908 + (c[P >> 2] << 2) >> 2] | 0;c[da >> 2] = Na;e = X(g[s + 396 >> 2]);Oa = Ec(e) | 0;v = (c[j >> 2] = Na, X(g[j >> 2]));if (Oa) e = w;else {
                  G = X(ne(s, Ka, Ea));Ma = X(v / e);e = X(e * v);e = X(G + (Fa ? Ma : e));
                }g[ea >> 2] = e;g[da >> 2] = X(X(ne(s, Ja, Ea)) + v);c[fa >> 2] = 1;c[ga >> 2] = 1;Se(s, Ja, F, Ea, fa, da);Se(s, Ka, pa, Ea, ga, ea);e = X(g[da >> 2]);G = X(g[ea >> 2]);Ma = Fa ? e : G;e = Fa ? G : e;Oa = ((Ec(Ma) | 0) ^ 1) & 1;me(s, Ma, e, Ga, Oa, ((Ec(e) | 0) ^ 1) & 1, Ea, ra, 1, 4044, p) | 0;e = u;
              } else Da = 137; while (0);e: do if ((Da | 0) == 137) {
                Da = 0;e = X(x - X(Xe(s, Ka, Ea)));do if ((c[(Te(s, Ka) | 0) + 4 >> 2] | 0) == 3) {
                  if ((c[(Ue(s, Ka) | 0) + 4 >> 2] | 0) != 3) break;e = X(u + X(UE(X(0.0), X(e * X(.5)))));break e;
                } while (0);if ((c[(Ue(s, Ka) | 0) + 4 >> 2] | 0) == 3) {
                  e = u;break;
                }if ((c[(Te(s, Ka) | 0) + 4 >> 2] | 0) == 3) {
                  e = X(u + X(UE(X(0.0), e)));break;
                }switch (q | 0) {case 1:
                    {
                      e = u;break e;
                    }case 2:
                    {
                      e = X(u + X(e * X(.5)));break e;
                    }default:
                    {
                      e = X(u + e);break e;
                    }}
              } while (0);Ma = X(na + e);Oa = s + 400 + (c[R >> 2] << 2) | 0;g[Oa >> 2] = X(Ma + X(g[Oa >> 2]));
            } while (0);r = r + 1 | 0;
          } while ((r | 0) != (t | 0));
        }na = X(na + w);ca = X(UE(ca, f));k = L + 1 | 0;if (t >>> 0 >= Ia >>> 0) break;else {
          H = t;L = k;
        }
      }do if (o) {
        q = k >>> 0 > 1;if (!q ? !(Ye(b) | 0) : 0) break;if (!(Ec(pa) | 0)) {
          e = X(pa - na);f: do switch (c[b + 12 >> 2] | 0) {case 3:
              {
                u = X(u + e);z = X(0.0);break;
              }case 2:
              {
                u = X(u + X(e * X(.5)));z = X(0.0);break;
              }case 4:
              {
                if (pa > na) z = X(e / X(k >>> 0));else z = X(0.0);break;
              }case 7:
              if (pa > na) {
                u = X(u + X(e / X(k << 1 >>> 0)));z = X(e / X(k >>> 0));z = q ? z : X(0.0);break f;
              } else {
                u = X(u + X(e * X(.5)));z = X(0.0);break f;
              }case 6:
              {
                z = X(e / X(L >>> 0));z = pa > na & q ? z : X(0.0);break;
              }default:
              z = X(0.0);} while (0);if (k | 0) {
            B = 1052 + (Ka << 2) | 0;C = 1036 + (Ka << 2) | 0;t = 0;r = 0;while (1) {
              g: do if (r >>> 0 < Ia >>> 0) {
                v = X(0.0);w = X(0.0);e = X(0.0);s = r;while (1) {
                  q = ec(c[Ha >> 2] | 0, s) | 0;do if ((c[q + 36 >> 2] | 0) != 1 ? (c[q + 24 >> 2] | 0) == 0 : 0) {
                    if ((c[q + 940 >> 2] | 0) != (t | 0)) break g;if (Ze(q, Ka) | 0) {
                      Ma = X(g[q + 908 + (c[C >> 2] << 2) >> 2]);e = X(UE(e, X(Ma + X(ne(q, Ka, Ea)))));
                    }if ((Re(b, q) | 0) != 5) break;ma = X(_e(q));ma = X(ma + X(te(q, 0, Ea)));Ma = X(g[q + 912 >> 2]);Ma = X(X(Ma + X(ne(q, 0, Ea))) - ma);ma = X(UE(w, ma));Ma = X(UE(v, Ma));v = Ma;w = ma;e = X(UE(e, X(ma + Ma)));
                  } while (0);q = s + 1 | 0;if (q >>> 0 < Ia >>> 0) s = q;else {
                    s = q;break;
                  }
                }
              } else {
                w = X(0.0);e = X(0.0);s = r;
              } while (0);y = X(z + e);f = u;u = X(u + y);if (r >>> 0 < s >>> 0) {
                x = X(f + w);q = r;do {
                  r = ec(c[Ha >> 2] | 0, q) | 0;h: do if ((c[r + 36 >> 2] | 0) != 1 ? (c[r + 24 >> 2] | 0) == 0 : 0) switch (Re(b, r) | 0) {case 1:
                      {
                        Ma = X(f + X(te(r, Ka, Ea)));g[r + 400 + (c[B >> 2] << 2) >> 2] = Ma;break h;
                      }case 3:
                      {
                        Ma = X(X(u - X(ue(r, Ka, Ea))) - X(g[r + 908 + (c[C >> 2] << 2) >> 2]));g[r + 400 + (c[B >> 2] << 2) >> 2] = Ma;break h;
                      }case 2:
                      {
                        Ma = X(f + X(X(y - X(g[r + 908 + (c[C >> 2] << 2) >> 2])) * X(.5)));g[r + 400 + (c[B >> 2] << 2) >> 2] = Ma;break h;
                      }case 4:
                      {
                        Ma = X(f + X(te(r, Ka, Ea)));g[r + 400 + (c[B >> 2] << 2) >> 2] = Ma;if (Qe(r, Ka, pa) | 0) break h;if (Fa) {
                          v = X(g[r + 908 >> 2]);e = X(v + X(ne(r, Ja, Ea)));w = y;
                        } else {
                          w = X(g[r + 912 >> 2]);w = X(w + X(ne(r, Ka, Ea)));e = y;v = X(g[r + 908 >> 2]);
                        }if (fe(e, v) | 0 ? fe(w, X(g[r + 912 >> 2])) | 0 : 0) break h;me(r, e, w, Ga, 1, 1, Ea, ra, 1, 4052, p) | 0;break h;
                      }case 5:
                      {
                        g[r + 404 >> 2] = X(X(x - X(_e(r))) + X(We(r, 0, pa)));break h;
                      }default:
                      break h;} while (0);q = q + 1 | 0;
                } while ((q | 0) != (s | 0));
              }t = t + 1 | 0;if ((t | 0) == (k | 0)) break;else r = s;
            }
          }
        }
      } while (0);g[b + 908 >> 2] = X(Pe(b, 2, sa, m, m));g[b + 912 >> 2] = X(Pe(b, 0, qa, n, m));if ((oa | 0) != 0 ? (va = c[b + 32 >> 2] | 0, xa = (oa | 0) == 2, !(xa & (va | 0) != 2)) : 0) {
        if (xa & (va | 0) == 2) {
          e = X(ua + F);e = X(UE(X(WE(e, X($e(b, Ja, ca, ta)))), ua));Da = 196;
        }
      } else {
        e = X(Pe(b, Ja, ca, ta, m));Da = 196;
      }if ((Da | 0) == 196) g[b + 908 + (c[1036 + (Ja << 2) >> 2] << 2) >> 2] = e;if ((za | 0) != 0 ? (Ba = c[b + 32 >> 2] | 0, Ca = (za | 0) == 2, !(Ca & (Ba | 0) != 2)) : 0) {
        if (Ca & (Ba | 0) == 2) {
          e = X(ya + pa);e = X(UE(X(WE(e, X($e(b, Ka, X(ya + na), wa)))), ya));Da = 202;
        }
      } else {
        e = X(Pe(b, Ka, X(ya + na), wa, m));Da = 202;
      }if ((Da | 0) == 202) g[b + 908 + (c[1036 + (Ka << 2) >> 2] << 2) >> 2] = e;if (!o) {
        l = La;return;
      }if ((c[Aa >> 2] | 0) == 2) {
        r = 1036 + (Ka << 2) | 0;s = 1052 + (Ka << 2) | 0;q = 0;do {
          t = nc(b, q) | 0;if (!(c[t + 24 >> 2] | 0)) {
            Na = c[r >> 2] | 0;Ma = X(g[b + 908 + (Na << 2) >> 2]);Oa = t + 400 + (c[s >> 2] << 2) | 0;Ma = X(Ma - X(g[Oa >> 2]));g[Oa >> 2] = X(Ma - X(g[t + 908 + (Na << 2) >> 2]));
          }q = q + 1 | 0;
        } while ((q | 0) != (Ia | 0));
      }if (h | 0) {
        q = Fa ? oa : i;do {
          af(b, h, Ea, q, ra, Ga, p);h = c[h + 952 >> 2] | 0;
        } while ((h | 0) != 0);
      }q = (Ja | 2 | 0) == 3;r = (Ka | 2 | 0) == 3;if (q | r) h = 0;else {
        l = La;return;
      }do {
        s = ec(c[Ha >> 2] | 0, h) | 0;if ((c[s + 36 >> 2] | 0) != 1) {
          if (q) bf(b, s, Ja);if (r) bf(b, s, Ka);
        }h = h + 1 | 0;
      } while ((h | 0) != (Ia | 0));l = La;return;
    }function re(a, b) {
      a = a | 0;b = b | 0;a = c[a >> 2] | 0;return ((a | 0) == 0 ? b | 0 ? b : 1 : a) | 0;
    }function se(a, b) {
      a = a | 0;b = b | 0;var c = 0;a: do if ((b | 0) == 2) {
        switch (a | 0) {case 2:
            {
              a = 3;break a;
            }case 3:
            break;default:
            {
              c = 4;break a;
            }}a = 2;
      } else c = 4; while (0);return a | 0;
    }function te(a, b, d) {
      a = a | 0;b = b | 0;d = X(d);if (De(b) | 0 ? (c[a + 96 >> 2] | 0) != 0 : 0) a = a + 92 | 0;else a = be(a + 60 | 0, c[1052 + (b << 2) >> 2] | 0, 1092) | 0;return X(jf(a, d));
    }function ue(a, b, d) {
      a = a | 0;b = b | 0;d = X(d);if (De(b) | 0 ? (c[a + 104 >> 2] | 0) != 0 : 0) a = a + 100 | 0;else a = be(a + 60 | 0, c[1068 + (b << 2) >> 2] | 0, 1092) | 0;return X(jf(a, d));
    }function ve(a, b) {
      a = a | 0;b = b | 0;var d = tb;if ((De(b) | 0 ? c[a + 312 >> 2] | 0 : 0) ? (d = X(g[a + 308 >> 2]), d >= X(0.0)) : 0) return X(d);d = X(UE(X(g[(be(a + 276 | 0, c[1052 + (b << 2) >> 2] | 0, 1092) | 0) >> 2]), X(0.0)));return X(d);
    }function we(a, b) {
      a = a | 0;b = b | 0;var d = tb;if ((De(b) | 0 ? c[a + 320 >> 2] | 0 : 0) ? (d = X(g[a + 316 >> 2]), d >= X(0.0)) : 0) return X(d);d = X(UE(X(g[(be(a + 276 | 0, c[1068 + (b << 2) >> 2] | 0, 1092) | 0) >> 2]), X(0.0)));return X(d);
    }function xe(a, b, d) {
      a = a | 0;b = b | 0;d = X(d);var e = tb;if ((De(b) | 0 ? c[a + 240 >> 2] | 0 : 0) ? (e = X(He(a + 236 | 0, d)), e >= X(0.0)) : 0) return X(e);e = X(UE(X(He(be(a + 204 | 0, c[1052 + (b << 2) >> 2] | 0, 1092) | 0, d)), X(0.0)));return X(e);
    }function ye(a, b, d) {
      a = a | 0;b = b | 0;d = X(d);var e = tb;if ((De(b) | 0 ? c[a + 248 >> 2] | 0 : 0) ? (e = X(He(a + 244 | 0, d)), e >= X(0.0)) : 0) return X(e);e = X(UE(X(He(be(a + 204 | 0, c[1068 + (b << 2) >> 2] | 0, 1092) | 0, d)), X(0.0)));return X(e);
    }function ze(a, b, d, e, f, h, i) {
      a = a | 0;b = X(b);d = X(d);e = e | 0;f = f | 0;h = X(h);i = X(i);var j = tb,
          k = tb,
          m = tb,
          n = tb,
          o = tb,
          p = tb,
          q = 0,
          r = 0,
          s = 0;s = l;l = l + 16 | 0;q = s;r = a + 956 | 0;rc(a, (c[r >> 2] | 0) != 0, 4151);j = X(Ge(a, 2, b));k = X(Ge(a, 0, b));m = X(ne(a, 2, b));n = X(ne(a, 0, b));if (Ec(b) | 0) o = b;else o = X(UE(X(0.0), X(X(b - m) - j)));if (Ec(d) | 0) p = d;else p = X(UE(X(0.0), X(X(d - n) - k)));if ((e | 0) == 1 & (f | 0) == 1) {
        g[a + 908 >> 2] = X(Pe(a, 2, X(b - m), h, h));i = X(Pe(a, 0, X(d - n), i, h));r = a + 912 | 0;g[r >> 2] = i;l = s;return;
      } else {
        Nb[c[r >> 2] & 1](q, a, o, e, p, f);i = X(j + X(g[q >> 2]));h = X(b - m);g[a + 908 >> 2] = X(Pe(a, 2, (e | 2 | 0) == 2 ? i : h, b, b));h = X(k + X(g[q + 4 >> 2]));i = X(d - n);i = X(Pe(a, 0, (f | 2 | 0) == 2 ? h : i, d, b));r = a + 912 | 0;g[r >> 2] = i;l = s;return;
      }
    }function Ae(a, b, c, d, e, f, h) {
      a = a | 0;b = X(b);c = X(c);d = d | 0;e = e | 0;f = X(f);h = X(h);var i = tb,
          j = tb,
          k = tb,
          l = tb;k = X(Ge(a, 2, f));i = X(Ge(a, 0, f));l = X(ne(a, 2, f));j = X(ne(a, 0, f));b = X(b - l);g[a + 908 >> 2] = X(Pe(a, 2, (d | 2 | 0) == 2 ? k : b, f, f));c = X(c - j);g[a + 912 >> 2] = X(Pe(a, 0, (e | 2 | 0) == 2 ? i : c, h, f));return;
    }function Be(a, b, c, d, e, f, h) {
      a = a | 0;b = X(b);c = X(c);d = d | 0;e = e | 0;f = X(f);h = X(h);var i = 0,
          j = tb,
          k = tb;i = (d | 0) == 2;if ((!(b <= X(0.0) & i) ? !(c <= X(0.0) & (e | 0) == 2) : 0) ? !((d | 0) == 1 & (e | 0) == 1) : 0) {
        i = 0;return i | 0;
      }j = X(ne(a, 0, f));k = X(ne(a, 2, f));i = b < X(0.0) & i | (Ec(b) | 0);b = X(b - k);g[a + 908 >> 2] = X(Pe(a, 2, i ? X(0.0) : b, f, f));b = X(c - j);i = c < X(0.0) & (e | 0) == 2 | (Ec(c) | 0);g[a + 912 >> 2] = X(Pe(a, 0, i ? X(0.0) : b, h, f));i = 1;return i | 0;
    }function Ce(a, b) {
      a = a | 0;b = b | 0;if (!(ef(a) | 0)) {
        b = 0;return b | 0;
      }b = se(2, b) | 0;return b | 0;
    }function De(a) {
      a = a | 0;return (a | 1 | 0) == 3 | 0;
    }function Ee(a, b, c) {
      a = a | 0;b = b | 0;c = X(c);c = X(xe(a, b, c));return X(c + X(ve(a, b)));
    }function Fe(a, b, c) {
      a = a | 0;b = b | 0;c = X(c);c = X(ye(a, b, c));return X(c + X(we(a, b)));
    }function Ge(a, b, c) {
      a = a | 0;b = b | 0;c = X(c);var d = tb;d = X(Ee(a, b, c));return X(d + X(Fe(a, b, c)));
    }function He(a, b) {
      a = a | 0;b = X(b);switch (c[a + 4 >> 2] | 0) {case 2:
          {
            b = X(X(X(g[a >> 2]) * b) / X(100.0));break;
          }case 1:
          {
            b = X(g[a >> 2]);break;
          }default:
          b = X(t);}return X(b);
    }function Ie(a) {
      a = a | 0;if (c[a + 24 >> 2] | 0) {
        a = 0;return a | 0;
      }if (X(Je(a)) != X(0.0)) {
        a = 1;return a | 0;
      }a = X(Ke(a)) != X(0.0);return a | 0;
    }function Je(a) {
      a = a | 0;var b = tb;if (!(c[a + 944 >> 2] | 0)) {
        b = X(0.0);return X(b);
      }b = X(g[a + 44 >> 2]);if (Ec(b) | 0) {
        b = X(g[a + 40 >> 2]);a = b > X(0.0) & ((Ec(b) | 0) ^ 1);return X(a ? b : X(0.0));
      } else return X(b);return tb;
    }function Ke(b) {
      b = b | 0;var d = 0,
          e = tb,
          f = tb;if (!(c[b + 944 >> 2] | 0)) {
        f = X(0.0);return X(f);
      }e = X(g[b + 48 >> 2]);if (!(Ec(e) | 0)) {
        f = e;return X(f);
      }d = a[(c[b + 968 >> 2] | 0) + 2 >> 0] | 0;if (d << 24 >> 24 == 0 ? (f = X(g[b + 40 >> 2]), f < X(0.0) & ((Ec(f) | 0) ^ 1)) : 0) {
        f = X(-f);return X(f);
      }f = d << 24 >> 24 ? X(1.0) : X(0.0);return X(f);
    }function Le(b) {
      b = b | 0;var d = 0,
          e = 0;e = b + 400 | 0;g[b + 920 >> 2] = X(0.0);g[b + 916 >> 2] = X(0.0);c[e >> 2] = 0;c[e + 4 >> 2] = 0;c[e + 8 >> 2] = 0;c[e + 12 >> 2] = 0;c[e + 16 >> 2] = 0;c[e + 20 >> 2] = 0;c[b + 928 >> 2] = 1;c[b + 924 >> 2] = 1;g[b + 932 >> 2] = X(0.0);g[b + 936 >> 2] = X(0.0);a[b + 977 >> 0] = 1;e = mc(b) | 0;if (!e) return;d = b + 948 | 0;b = 0;do {
        Le(ec(c[d >> 2] | 0, b) | 0);b = b + 1 | 0;
      } while ((b | 0) != (e | 0));return;
    }function Me(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0,
          f = 0,
          g = 0;f = l;l = l + 16 | 0;e = f + 8 | 0;d = f;b = a + 380 | 0;if (!((c[a + 384 >> 2] | 0) != 0 ? (g = a + 364 | 0, c[d >> 2] = c[b >> 2], c[d + 4 >> 2] = c[b + 4 >> 2], c[e >> 2] = c[g >> 2], c[e + 4 >> 2] = c[g + 4 >> 2], ge(d, e) | 0) : 0)) b = a + 348 | 0;c[a + 984 >> 2] = b;b = a + 388 | 0;if (c[a + 392 >> 2] | 0 ? (g = a + 372 | 0, c[d >> 2] = c[b >> 2], c[d + 4 >> 2] = c[b + 4 >> 2], c[e >> 2] = c[g >> 2], c[e + 4 >> 2] = c[g + 4 >> 2], ge(d, e) | 0) : 0) {
        e = b;g = a + 988 | 0;c[g >> 2] = e;l = f;return;
      }e = a + 356 | 0;g = a + 988 | 0;c[g >> 2] = e;l = f;return;
    }function Ne(a, b, d, e, f) {
      a = a | 0;b = b | 0;d = X(d);e = X(e);f = X(f);var h = 0,
          i = tb;b = c[a + 944 >> 2] | 0 ? b : 1;h = se(c[a + 4 >> 2] | 0, b) | 0;b = Ce(h, b) | 0;d = X(hf(a, h, d));e = X(hf(a, b, e));i = X(d + X(te(a, h, f)));g[a + 400 + (c[1052 + (h << 2) >> 2] << 2) >> 2] = i;d = X(d + X(ue(a, h, f)));g[a + 400 + (c[1068 + (h << 2) >> 2] << 2) >> 2] = d;d = X(e + X(te(a, b, f)));g[a + 400 + (c[1052 + (b << 2) >> 2] << 2) >> 2] = d;f = X(e + X(ue(a, b, f)));g[a + 400 + (c[1068 + (b << 2) >> 2] << 2) >> 2] = f;return;
    }function Oe(a, b, d, e, f, h, i, j, k, m) {
      a = a | 0;b = b | 0;d = X(d);e = e | 0;f = X(f);h = X(h);i = X(i);j = j | 0;k = k | 0;m = m | 0;var n = tb,
          o = 0,
          p = tb,
          q = 0,
          r = tb,
          s = 0,
          u = 0,
          v = 0,
          w = 0,
          x = tb,
          y = tb,
          z = 0,
          A = 0,
          B = 0,
          C = 0,
          D = 0,
          E = 0,
          F = 0;F = l;l = l + 16 | 0;z = F + 12 | 0;A = F + 8 | 0;B = F + 4 | 0;C = F;E = se(c[a + 4 >> 2] | 0, k) | 0;D = De(E) | 0;n = X(He(ff(b) | 0, D ? h : i));o = Qe(b, 2, h) | 0;s = Qe(b, 0, i) | 0;do if (!(Ec(n) | 0) ? !(Ec(D ? d : f) | 0) : 0) {
        o = b + 504 | 0;if (!(Ec(X(g[o >> 2])) | 0)) {
          if (!(gf(c[b + 968 >> 2] | 0, 0) | 0)) break;if ((c[b + 500 >> 2] | 0) == (c[2250] | 0)) break;
        }g[o >> 2] = X(UE(n, X(Ge(b, E, h))));
      } else q = 7; while (0);do if ((q | 0) == 7) {
        w = D ^ 1;u = o ^ 1;if (!(w | u)) {
          i = X(He(c[b + 984 >> 2] | 0, h));g[b + 504 >> 2] = X(UE(i, X(Ge(b, 2, h))));break;
        }v = s ^ 1;if (!(D | v)) {
          i = X(He(c[b + 988 >> 2] | 0, i));g[b + 504 >> 2] = X(UE(i, X(Ge(b, 0, h))));break;
        }g[z >> 2] = X(t);g[A >> 2] = X(t);c[B >> 2] = 0;c[C >> 2] = 0;x = X(ne(b, 2, h));y = X(ne(b, 0, h));if (o) {
          r = X(x + X(He(c[b + 984 >> 2] | 0, h)));g[z >> 2] = r;c[B >> 2] = 1;q = 1;
        } else {
          q = 0;r = X(t);
        }if (s) {
          p = X(y + X(He(c[b + 988 >> 2] | 0, i)));g[A >> 2] = p;c[C >> 2] = 1;o = 1;
        } else {
          o = 0;p = X(t);
        }s = c[a + 32 >> 2] | 0;if (!(D & (s | 0) == 2)) {
          if (Ec(r) | 0 ? !(Ec(d) | 0) : 0) {
            g[z >> 2] = d;c[B >> 2] = 2;r = d;q = 2;
          }
        } else s = 2;if ((!((s | 0) == 2 & w) ? Ec(p) | 0 : 0) ? !(Ec(f) | 0) : 0) {
          g[A >> 2] = f;c[C >> 2] = 2;p = f;o = 2;
        }if (D) {
          if ((j | 0) == 1 & v & ((Ec(f) | 0) ^ 1) ? (Re(a, b) | 0) == 4 : 0) {
            g[A >> 2] = f;c[C >> 2] = 1;o = 1;p = f;
          }
        } else if ((e | 0) == 1 & u & ((Ec(d) | 0) ^ 1) ? (Re(a, b) | 0) == 4 : 0) {
          g[z >> 2] = d;c[B >> 2] = 1;q = 1;r = d;
        }n = X(g[b + 396 >> 2]);do if (!(Ec(n) | 0)) {
          if ((q | 0) == 1 & w) {
            o = 0;n = X(X(r - x) / n);
          } else {
            if (!(D & (o | 0) == 1)) break;o = 2;n = X(n * X(p - y));
          }g[b + 504 >> 2] = X(UE(n, X(Ge(b, o, h))));l = F;return;
        } while (0);Se(b, 2, h, h, B, z);Se(b, 0, i, h, C, A);x = X(g[z >> 2]);y = X(g[A >> 2]);me(b, x, y, k, c[B >> 2] | 0, c[C >> 2] | 0, h, i, 0, 4143, m) | 0;i = X(g[b + 908 + (c[1036 + (E << 2) >> 2] << 2) >> 2]);g[b + 504 >> 2] = X(UE(i, X(Ge(b, E, h))));
      } while (0);c[b + 500 >> 2] = c[2250];l = F;return;
    }function Pe(a, b, c, d, e) {
      a = a | 0;b = b | 0;c = X(c);d = X(d);e = X(e);d = X($e(a, b, c, d));return X(UE(d, X(Ge(a, b, e))));
    }function Qe(a, b, d) {
      a = a | 0;b = b | 0;d = X(d);a = c[a + 984 + (c[1036 + (b << 2) >> 2] << 2) >> 2] | 0;switch (c[a + 4 >> 2] | 0) {case 1:
          {
            if (X(g[a >> 2]) < X(0.0)) {
              b = 0;return b | 0;
            }break;
          }case 2:
          {
            if (X(g[a >> 2]) < X(0.0)) {
              b = 0;return b | 0;
            }b = (Ec(d) | 0) ^ 1;return b | 0;
          }case 0:case 3:
          {
            b = 0;return b | 0;
          }default:
          {}}b = 1;return b | 0;
    }function Re(a, b) {
      a = a | 0;b = b | 0;b = b + 20 | 0;b = c[((c[b >> 2] | 0) == 0 ? a + 16 | 0 : b) >> 2] | 0;if ((b | 0) == 5 ? ef(c[a + 4 >> 2] | 0) | 0 : 0) {
        a = 1;return a | 0;
      }a = b;return a | 0;
    }function Se(a, b, d, e, f, h) {
      a = a | 0;b = b | 0;d = X(d);e = X(e);f = f | 0;h = h | 0;d = X(He(a + 380 + (c[1036 + (b << 2) >> 2] << 3) | 0, d));d = X(d + X(ne(a, b, e)));switch (c[f >> 2] | 0) {case 2:case 1:
          {
            f = Ec(d) | 0;e = X(g[h >> 2]);g[h >> 2] = f | e < d ? e : d;return;
          }case 0:
          {
            if (Ec(d) | 0) return;c[f >> 2] = 2;g[h >> 2] = d;return;
          }default:
          return;}
    }function Te(a, b) {
      a = a | 0;b = b | 0;if (De(b) | 0 ? (c[a + 96 >> 2] | 0) != 0 : 0) b = 4;else b = c[1052 + (b << 2) >> 2] | 0;return a + 60 + (b << 3) | 0;
    }function Ue(a, b) {
      a = a | 0;b = b | 0;if (De(b) | 0 ? (c[a + 104 >> 2] | 0) != 0 : 0) b = 5;else b = c[1068 + (b << 2) >> 2] | 0;return a + 60 + (b << 3) | 0;
    }function Ve(a, b) {
      a = a | 0;b = b | 0;a = a + 132 | 0;if (De(b) | 0 ? c[(be(a, 4, 1012) | 0) + 4 >> 2] | 0 : 0) {
        b = 1;return b | 0;
      }b = (c[(be(a, c[1052 + (b << 2) >> 2] | 0, 1012) | 0) + 4 >> 2] | 0) != 0;return b | 0;
    }function We(a, b, d) {
      a = a | 0;b = b | 0;d = X(d);var e = 0;a = a + 132 | 0;if (!(De(b) | 0 ? (e = be(a, 4, 1012) | 0, (c[e + 4 >> 2] | 0) != 0) : 0)) {
        e = be(a, c[1052 + (b << 2) >> 2] | 0, 1012) | 0;if (!(c[e + 4 >> 2] | 0)) {
          d = X(0.0);return X(d);
        }
      }d = X(He(e, d));return X(d);
    }function Xe(a, b, d) {
      a = a | 0;b = b | 0;d = X(d);var e = tb;e = X(g[a + 908 + (c[1036 + (b << 2) >> 2] << 2) >> 2]);e = X(e + X(te(a, b, d)));return X(e + X(ue(a, b, d)));
    }function Ye(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;if (ef(c[a + 4 >> 2] | 0) | 0) {
        d = 0;return d | 0;
      }if ((c[a + 16 >> 2] | 0) == 5) {
        d = 1;return d | 0;
      }d = mc(a) | 0;if (!d) {
        d = 0;return d | 0;
      } else b = 0;while (1) {
        e = nc(a, b) | 0;if ((c[e + 24 >> 2] | 0) == 0 ? (c[e + 20 >> 2] | 0) == 5 : 0) {
          b = 1;a = 7;break;
        }b = b + 1 | 0;if (b >>> 0 >= d >>> 0) {
          b = 0;a = 7;break;
        }
      }if ((a | 0) == 7) return b | 0;return 0;
    }function Ze(a, b) {
      a = a | 0;b = b | 0;var d = tb;d = X(g[a + 908 + (c[1036 + (b << 2) >> 2] << 2) >> 2]);return d >= X(0.0) & ((Ec(d) | 0) ^ 1) | 0;
    }function _e(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0,
          f = 0,
          h = 0,
          i = tb,
          j = tb,
          k = 0;b = c[a + 960 >> 2] | 0;if (b | 0) {
        j = X(g[a + 908 >> 2]);i = X(g[a + 912 >> 2]);i = X(wb[b & 0](a, j, i));rc(a, (Ec(i) | 0) ^ 1, 4093);return X(i);
      }f = mc(a) | 0;if (f | 0) {
        d = 0;e = 0;while (1) {
          b = nc(a, e) | 0;if (c[b + 940 >> 2] | 0) {
            b = d;break;
          }if ((c[b + 24 >> 2] | 0) != 1) {
            k = (Re(a, b) | 0) == 5;if (k) {
              h = 10;break;
            } else b = (d | 0) == 0 ? b : d;
          } else b = d;e = e + 1 | 0;if (e >>> 0 >= f >>> 0) break;else d = b;
        }if ((h | 0) == 10) {
          i = X(_e(b));k = b + 404 | 0;j = X(g[k >> 2]);j = X(i + j);return X(j);
        }if (b | 0) {
          k = b;i = X(_e(k));k = k + 404 | 0;j = X(g[k >> 2]);j = X(i + j);return X(j);
        }
      }j = X(g[a + 912 >> 2]);return X(j);
    }function $e(a, b, c, d) {
      a = a | 0;b = b | 0;c = X(c);d = X(d);var e = tb,
          f = 0;if (!(ef(b) | 0)) {
        if (De(b) | 0) {
          b = 0;f = 3;
        } else {
          d = X(t);e = X(t);
        }
      } else {
        b = 1;f = 3;
      }if ((f | 0) == 3) {
        e = X(He(a + 364 + (b << 3) | 0, d));d = X(He(a + 380 + (b << 3) | 0, d));
      }f = d < c & (d >= X(0.0) & ((Ec(d) | 0) ^ 1));c = f ? d : c;f = e >= X(0.0) & ((Ec(e) | 0) ^ 1) & c < e;return X(f ? e : c);
    }function af(a, b, d, e, f, h, i) {
      a = a | 0;b = b | 0;d = X(d);e = e | 0;f = X(f);h = h | 0;i = i | 0;var j = tb,
          k = tb,
          l = 0,
          m = 0,
          n = tb,
          o = tb,
          p = tb,
          q = 0,
          r = 0,
          s = 0,
          u = 0,
          v = tb,
          w = 0;s = se(c[a + 4 >> 2] | 0, h) | 0;q = Ce(s, h) | 0;r = De(s) | 0;n = X(ne(b, 2, d));p = X(ne(b, 0, d));if (!(Qe(b, 2, d) | 0)) {
        if (Ve(b, 2) | 0 ? cf(b, 2) | 0 : 0) {
          j = X(g[a + 908 >> 2]);k = X(ve(a, 2));k = X(j - X(k + X(we(a, 2))));j = X(We(b, 2, d));j = X(Pe(b, 2, X(k - X(j + X(df(b, 2, d)))), d, d));
        } else j = X(t);
      } else j = X(n + X(He(c[b + 984 >> 2] | 0, d)));if (!(Qe(b, 0, f) | 0)) {
        if (Ve(b, 0) | 0 ? cf(b, 0) | 0 : 0) {
          k = X(g[a + 912 >> 2]);v = X(ve(a, 0));v = X(k - X(v + X(we(a, 0))));k = X(We(b, 0, f));k = X(Pe(b, 0, X(v - X(k + X(df(b, 0, f)))), f, d));
        } else k = X(t);
      } else k = X(p + X(He(c[b + 988 >> 2] | 0, f)));l = Ec(j) | 0;m = Ec(k) | 0;do if (l ^ m ? (o = X(g[b + 396 >> 2]), !(Ec(o) | 0)) : 0) {
        if (l) {
          j = X(X(k - p) * o);j = X(n + X(UE(j, X(Ge(b, 0, d)))));break;
        }if (m) {
          k = X(X(j - n) / o);k = X(p + X(UE(k, X(Ge(b, 2, d)))));
        }
      } while (0);m = Ec(j) | 0;l = Ec(k) | 0;if (m | l) {
        w = (m ^ 1) & 1;e = d > X(0.0) & ((e | 0) != 0 & m);j = r ? j : e ? d : j;me(b, j, k, h, r ? w : e ? 2 : w, m & (l ^ 1) & 1, j, k, 0, 4070, i) | 0;j = X(g[b + 908 >> 2]);j = X(j + X(ne(b, 2, d)));k = X(g[b + 912 >> 2]);k = X(k + X(ne(b, 0, d)));
      }me(b, j, k, h, 1, 1, j, k, 1, 4082, i) | 0;if (cf(b, s) | 0 ? !(Ve(b, s) | 0) : 0) {
        w = c[1036 + (s << 2) >> 2] | 0;v = X(g[a + 908 + (w << 2) >> 2]);v = X(v - X(g[b + 908 + (w << 2) >> 2]));v = X(v - X(we(a, s)));v = X(v - X(ue(b, s, d)));v = X(v - X(df(b, s, r ? d : f)));g[b + 400 + (c[1052 + (s << 2) >> 2] << 2) >> 2] = v;
      } else u = 22;do if ((u | 0) == 22) {
        if (!(Ve(b, s) | 0) ? (c[a + 8 >> 2] | 0) == 1 : 0) {
          w = c[1036 + (s << 2) >> 2] | 0;v = X(g[a + 908 + (w << 2) >> 2]);v = X(X(v - X(g[b + 908 + (w << 2) >> 2])) * X(.5));g[b + 400 + (c[1052 + (s << 2) >> 2] << 2) >> 2] = v;break;
        }if (!(Ve(b, s) | 0) ? (c[a + 8 >> 2] | 0) == 2 : 0) {
          w = c[1036 + (s << 2) >> 2] | 0;v = X(g[a + 908 + (w << 2) >> 2]);v = X(v - X(g[b + 908 + (w << 2) >> 2]));g[b + 400 + (c[1052 + (s << 2) >> 2] << 2) >> 2] = v;
        }
      } while (0);if (cf(b, q) | 0 ? !(Ve(b, q) | 0) : 0) {
        w = c[1036 + (q << 2) >> 2] | 0;v = X(g[a + 908 + (w << 2) >> 2]);v = X(v - X(g[b + 908 + (w << 2) >> 2]));v = X(v - X(we(a, q)));v = X(v - X(ue(b, q, d)));v = X(v - X(df(b, q, r ? f : d)));g[b + 400 + (c[1052 + (q << 2) >> 2] << 2) >> 2] = v;return;
      }if (Ve(b, q) | 0) return;if ((Re(a, b) | 0) == 2) {
        w = c[1036 + (q << 2) >> 2] | 0;v = X(g[a + 908 + (w << 2) >> 2]);v = X(X(v - X(g[b + 908 + (w << 2) >> 2])) * X(.5));g[b + 400 + (c[1052 + (q << 2) >> 2] << 2) >> 2] = v;return;
      }w = (Re(a, b) | 0) == 3;if (!(w ^ (c[a + 28 >> 2] | 0) == 2)) return;w = c[1036 + (q << 2) >> 2] | 0;v = X(g[a + 908 + (w << 2) >> 2]);v = X(v - X(g[b + 908 + (w << 2) >> 2]));g[b + 400 + (c[1052 + (q << 2) >> 2] << 2) >> 2] = v;return;
    }function bf(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = tb,
          f = 0;f = c[1036 + (d << 2) >> 2] | 0;e = X(g[b + 908 + (f << 2) >> 2]);e = X(X(g[a + 908 + (f << 2) >> 2]) - e);e = X(e - X(g[b + 400 + (c[1052 + (d << 2) >> 2] << 2) >> 2]));g[b + 400 + (c[1068 + (d << 2) >> 2] << 2) >> 2] = e;return;
    }function cf(a, b) {
      a = a | 0;b = b | 0;a = a + 132 | 0;if (De(b) | 0 ? c[(be(a, 5, 1012) | 0) + 4 >> 2] | 0 : 0) {
        b = 1;return b | 0;
      }b = (c[(be(a, c[1068 + (b << 2) >> 2] | 0, 1012) | 0) + 4 >> 2] | 0) != 0;return b | 0;
    }function df(a, b, d) {
      a = a | 0;b = b | 0;d = X(d);var e = 0;a = a + 132 | 0;if (!(De(b) | 0 ? (e = be(a, 5, 1012) | 0, (c[e + 4 >> 2] | 0) != 0) : 0)) {
        e = be(a, c[1068 + (b << 2) >> 2] | 0, 1012) | 0;if (!(c[e + 4 >> 2] | 0)) {
          d = X(0.0);return X(d);
        }
      }d = X(He(e, d));return X(d);
    }function ef(a) {
      a = a | 0;return (a | 1 | 0) == 1 | 0;
    }function ff(b) {
      b = b | 0;var d = tb;switch (c[b + 56 >> 2] | 0) {case 0:case 3:
          break;default:
          {
            b = b + 52 | 0;return b | 0;
          }}d = X(g[b + 40 >> 2]);if (!(d > X(0.0) & ((Ec(d) | 0) ^ 1))) {
        b = 1084;return b | 0;
      }b = a[(c[b + 968 >> 2] | 0) + 2 >> 0] | 0 ? 1084 : 1092;return b | 0;
    }function gf(b, c) {
      b = b | 0;c = c | 0;return (a[b + c >> 0] | 0) != 0 | 0;
    }function hf(a, b, c) {
      a = a | 0;b = b | 0;c = X(c);if (Ve(a, b) | 0) {
        c = X(We(a, b, c));return X(c);
      } else {
        c = X(-X(df(a, b, c)));return X(c);
      }return tb;
    }function jf(a, b) {
      a = a | 0;b = X(b);if ((c[a + 4 >> 2] | 0) == 3) {
        b = X(0.0);return X(b);
      }b = X(He(a, b));return X(b);
    }function kf(b, d, e, f) {
      b = b | 0;d = X(d);e = X(e);f = f | 0;var h = tb,
          i = tb,
          j = 0,
          k = 0,
          l = 0;c[2250] = (c[2250] | 0) + 1;Me(b);if (!(Qe(b, 2, d) | 0)) {
        h = X(He(b + 380 | 0, d));if (!(h >= X(0.0))) {
          l = ((Ec(d) | 0) ^ 1) & 1;h = d;
        } else l = 2;
      } else {
        h = X(He(c[b + 984 >> 2] | 0, d));l = 1;h = X(h + X(ne(b, 2, d)));
      }if (!(Qe(b, 0, e) | 0)) {
        i = X(He(b + 388 | 0, e));if (!(i >= X(0.0))) {
          k = ((Ec(e) | 0) ^ 1) & 1;i = e;
        } else k = 2;
      } else {
        i = X(He(c[b + 988 >> 2] | 0, e));k = 1;i = X(i + X(ne(b, 0, d)));
      }j = b + 968 | 0;if (!(me(b, h, i, f, l, k, d, e, 1, 4322, c[j >> 2] | 0) | 0)) return;Ne(b, c[b + 496 >> 2] | 0, d, e, d);lf(b, X(g[(c[j >> 2] | 0) + 4 >> 2]), X(0.0), X(0.0));if (!(a[11548] | 0)) return;Wd(b, 7);return;
    }function lf(a, b, d, e) {
      a = a | 0;b = X(b);d = X(d);e = X(e);var f = 0,
          h = 0,
          i = tb,
          j = tb,
          k = 0,
          l = 0,
          m = tb,
          n = 0,
          o = tb,
          p = tb,
          q = tb,
          r = tb;if (b == X(0.0)) return;f = a + 400 | 0;r = X(g[f >> 2]);h = a + 404 | 0;q = X(g[h >> 2]);n = a + 416 | 0;p = X(g[n >> 2]);l = a + 420 | 0;i = X(g[l >> 2]);o = X(r + d);m = X(q + e);e = X(o + p);j = X(m + i);k = (c[a + 980 >> 2] | 0) == 1;g[f >> 2] = X(he(r, b, 0, k));g[h >> 2] = X(he(q, b, 0, k));d = X(YE(X(p * b), X(1.0)));if (fe(d, X(0.0)) | 0) h = 0;else h = (fe(d, X(1.0)) | 0) ^ 1;d = X(YE(X(i * b), X(1.0)));if (fe(d, X(0.0)) | 0) f = 0;else f = (fe(d, X(1.0)) | 0) ^ 1;r = X(he(e, b, k & h, k & (h ^ 1)));g[n >> 2] = X(r - X(he(o, b, 0, k)));r = X(he(j, b, k & f, k & (f ^ 1)));g[l >> 2] = X(r - X(he(m, b, 0, k)));h = ac(c[a + 948 >> 2] | 0) | 0;if (!h) return;else f = 0;do {
        lf(nc(a, f) | 0, b, o, m);f = f + 1 | 0;
      } while ((f | 0) != (h | 0));return;
    }function mf(b, c, d) {
      b = b | 0;c = c | 0;d = d | 0;a[b + c >> 0] = d & 1;return;
    }function nf() {
      var a = 0;a = qF(4) | 0;of(a);return a | 0;
    }function of(a) {
      a = a | 0;c[a >> 2] = uc() | 0;return;
    }function pf(a) {
      a = a | 0;if (a | 0) {
        qf(a);sF(a);
      }return;
    }function qf(a) {
      a = a | 0;wc(c[a >> 2] | 0);return;
    }function rf(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;mf(c[a >> 2] | 0, b, d);return;
    }function sf(a, b) {
      a = a | 0;b = b | 0;return gf(c[a >> 2] | 0, b) | 0;
    }function tf() {
      var a = 0;a = qF(8) | 0;uf(a, 0);return a | 0;
    }function uf(a, b) {
      a = a | 0;b = b | 0;if (!b) b = kc() | 0;else b = fc(c[b >> 2] | 0) | 0;c[a >> 2] = b;c[a + 4 >> 2] = 0;Hc(b, a);return;
    }function vf(a) {
      a = a | 0;var b = 0;b = qF(8) | 0;uf(b, a);return b | 0;
    }function wf(a) {
      a = a | 0;if (a | 0) {
        xf(a);sF(a);
      }return;
    }function xf(a) {
      a = a | 0;var b = 0;lc(c[a >> 2] | 0);b = a + 4 | 0;a = c[b >> 2] | 0;c[b >> 2] = 0;if (a | 0) {
        yf(a);sF(a);
      }return;
    }function yf(a) {
      a = a | 0;zf(a);return;
    }function zf(a) {
      a = a | 0;a = c[a >> 2] | 0;if (a | 0) jb(a | 0);return;
    }function Af(a) {
      a = a | 0;return Ic(a) | 0;
    }function Bf(a) {
      a = a | 0;var b = 0,
          d = 0;d = a + 4 | 0;b = c[d >> 2] | 0;c[d >> 2] = 0;if (b | 0) {
        yf(b);sF(b);
      }qc(c[a >> 2] | 0);return;
    }function Cf(a, b) {
      a = a | 0;b = b | 0;Cc(c[a >> 2] | 0, c[b >> 2] | 0);return;
    }function Df(a, b) {
      a = a | 0;b = b | 0;Tc(c[a >> 2] | 0, b);return;
    }function Ef(a, b, d) {
      a = a | 0;b = b | 0;d = +d;fd(c[a >> 2] | 0, b, X(d));return;
    }function Ff(a, b, d) {
      a = a | 0;b = b | 0;d = +d;gd(c[a >> 2] | 0, b, X(d));return;
    }function Gf(a, b) {
      a = a | 0;b = b | 0;Nc(c[a >> 2] | 0, b);return;
    }function Hf(a, b) {
      a = a | 0;b = b | 0;Pc(c[a >> 2] | 0, b);return;
    }function If(a, b) {
      a = a | 0;b = b | 0;Rc(c[a >> 2] | 0, b);return;
    }function Jf(a, b) {
      a = a | 0;b = b | 0;Jc(c[a >> 2] | 0, b);return;
    }function Kf(a, b) {
      a = a | 0;b = b | 0;Vc(c[a >> 2] | 0, b);return;
    }function Lf(a, b) {
      a = a | 0;b = b | 0;Lc(c[a >> 2] | 0, b);return;
    }function Mf(a, b, d) {
      a = a | 0;b = b | 0;d = +d;id(c[a >> 2] | 0, b, X(d));return;
    }function Nf(a, b, d) {
      a = a | 0;b = b | 0;d = +d;jd(c[a >> 2] | 0, b, X(d));return;
    }function Of(a, b) {
      a = a | 0;b = b | 0;ld(c[a >> 2] | 0, b);return;
    }function Pf(a, b) {
      a = a | 0;b = b | 0;Xc(c[a >> 2] | 0, b);return;
    }function Qf(a, b) {
      a = a | 0;b = b | 0;Zc(c[a >> 2] | 0, b);return;
    }function Rf(a, b) {
      a = a | 0;b = +b;$c(c[a >> 2] | 0, X(b));return;
    }function Sf(a, b) {
      a = a | 0;b = +b;cd(c[a >> 2] | 0, X(b));return;
    }function Tf(a, b) {
      a = a | 0;b = +b;dd(c[a >> 2] | 0, X(b));return;
    }function Uf(a, b) {
      a = a | 0;b = +b;ad(c[a >> 2] | 0, X(b));return;
    }function Vf(a, b) {
      a = a | 0;b = +b;bd(c[a >> 2] | 0, X(b));return;
    }function Wf(a, b) {
      a = a | 0;b = +b;rd(c[a >> 2] | 0, X(b));return;
    }function Xf(a, b) {
      a = a | 0;b = +b;sd(c[a >> 2] | 0, X(b));return;
    }function Yf(a) {
      a = a | 0;td(c[a >> 2] | 0);return;
    }function Zf(a, b) {
      a = a | 0;b = +b;vd(c[a >> 2] | 0, X(b));return;
    }function _f(a, b) {
      a = a | 0;b = +b;wd(c[a >> 2] | 0, X(b));return;
    }function $f(a) {
      a = a | 0;xd(c[a >> 2] | 0);return;
    }function ag(a, b) {
      a = a | 0;b = +b;zd(c[a >> 2] | 0, X(b));return;
    }function bg(a, b) {
      a = a | 0;b = +b;Ad(c[a >> 2] | 0, X(b));return;
    }function cg(a, b) {
      a = a | 0;b = +b;Cd(c[a >> 2] | 0, X(b));return;
    }function dg(a, b) {
      a = a | 0;b = +b;Dd(c[a >> 2] | 0, X(b));return;
    }function eg(a, b) {
      a = a | 0;b = +b;Fd(c[a >> 2] | 0, X(b));return;
    }function fg(a, b) {
      a = a | 0;b = +b;Gd(c[a >> 2] | 0, X(b));return;
    }function gg(a, b) {
      a = a | 0;b = +b;Id(c[a >> 2] | 0, X(b));return;
    }function hg(a, b) {
      a = a | 0;b = +b;Jd(c[a >> 2] | 0, X(b));return;
    }function ig(a, b) {
      a = a | 0;b = +b;Ld(c[a >> 2] | 0, X(b));return;
    }function jg(a, b, d) {
      a = a | 0;b = b | 0;d = +d;pd(c[a >> 2] | 0, b, X(d));return;
    }function kg(a, b, d) {
      a = a | 0;b = b | 0;d = +d;md(c[a >> 2] | 0, b, X(d));return;
    }function lg(a, b, d) {
      a = a | 0;b = b | 0;d = +d;nd(c[a >> 2] | 0, b, X(d));return;
    }function mg(a) {
      a = a | 0;return Uc(c[a >> 2] | 0) | 0;
    }function ng(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0;e = l;l = l + 16 | 0;f = e;hd(f, c[b >> 2] | 0, d);og(a, f);l = e;return;
    }function og(a, b) {
      a = a | 0;b = b | 0;pg(a, c[b + 4 >> 2] | 0, +X(g[b >> 2]));return;
    }function pg(a, b, d) {
      a = a | 0;b = b | 0;d = +d;c[a >> 2] = b;h[a + 8 >> 3] = d;return;
    }function qg(a) {
      a = a | 0;return Oc(c[a >> 2] | 0) | 0;
    }function rg(a) {
      a = a | 0;return Qc(c[a >> 2] | 0) | 0;
    }function sg(a) {
      a = a | 0;return Sc(c[a >> 2] | 0) | 0;
    }function tg(a) {
      a = a | 0;return Kc(c[a >> 2] | 0) | 0;
    }function ug(a) {
      a = a | 0;return Wc(c[a >> 2] | 0) | 0;
    }function vg(a) {
      a = a | 0;return Mc(c[a >> 2] | 0) | 0;
    }function wg(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0;e = l;l = l + 16 | 0;f = e;kd(f, c[b >> 2] | 0, d);og(a, f);l = e;return;
    }function xg(a) {
      a = a | 0;return Yc(c[a >> 2] | 0) | 0;
    }function yg(a) {
      a = a | 0;return _c(c[a >> 2] | 0) | 0;
    }function zg(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0;d = l;l = l + 16 | 0;e = d;ed(e, c[b >> 2] | 0);og(a, e);l = d;return;
    }function Ag(a) {
      a = a | 0;return + +X(Dc(c[a >> 2] | 0));
    }function Bg(a) {
      a = a | 0;return + +X(Gc(c[a >> 2] | 0));
    }function Cg(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0;d = l;l = l + 16 | 0;e = d;ud(e, c[b >> 2] | 0);og(a, e);l = d;return;
    }function Dg(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0;d = l;l = l + 16 | 0;e = d;yd(e, c[b >> 2] | 0);og(a, e);l = d;return;
    }function Eg(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0;d = l;l = l + 16 | 0;e = d;Bd(e, c[b >> 2] | 0);og(a, e);l = d;return;
    }function Fg(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0;d = l;l = l + 16 | 0;e = d;Ed(e, c[b >> 2] | 0);og(a, e);l = d;return;
    }function Gg(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0;d = l;l = l + 16 | 0;e = d;Hd(e, c[b >> 2] | 0);og(a, e);l = d;return;
    }function Hg(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0;d = l;l = l + 16 | 0;e = d;Kd(e, c[b >> 2] | 0);og(a, e);l = d;return;
    }function Ig(a) {
      a = a | 0;return + +X(Md(c[a >> 2] | 0));
    }function Jg(a, b) {
      a = a | 0;b = b | 0;return + +X(qd(c[a >> 2] | 0, b));
    }function Kg(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0;e = l;l = l + 16 | 0;f = e;od(f, c[b >> 2] | 0, d);og(a, f);l = e;return;
    }function Lg(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;yc(c[a >> 2] | 0, c[b >> 2] | 0, d);return;
    }function Mg(a, b) {
      a = a | 0;b = b | 0;oc(c[a >> 2] | 0, c[b >> 2] | 0);return;
    }function Ng(a) {
      a = a | 0;return mc(c[a >> 2] | 0) | 0;
    }function Og(a) {
      a = a | 0;a = zc(c[a >> 2] | 0) | 0;if (!a) a = 0;else a = Af(a) | 0;return a | 0;
    }function Pg(a, b) {
      a = a | 0;b = b | 0;a = nc(c[a >> 2] | 0, b) | 0;if (!a) a = 0;else a = Af(a) | 0;return a | 0;
    }function Qg(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0;e = qF(4) | 0;Rg(e, b);d = a + 4 | 0;b = c[d >> 2] | 0;c[d >> 2] = e;if (b | 0) {
        yf(b);sF(b);
      }xc(c[a >> 2] | 0, 1);return;
    }function Rg(a, b) {
      a = a | 0;b = b | 0;jh(a, b);return;
    }function Sg(a, b, c, d, e, f) {
      a = a | 0;b = b | 0;c = X(c);d = d | 0;e = X(e);f = f | 0;var i = 0,
          j = 0;i = l;l = l + 16 | 0;j = i;Tg(j, Ic(b) | 0, +c, d, +e, f);g[a >> 2] = X(+h[j >> 3]);g[a + 4 >> 2] = X(+h[j + 8 >> 3]);l = i;return;
    }function Tg(a, b, d, e, f, g) {
      a = a | 0;b = b | 0;d = +d;e = e | 0;f = +f;g = g | 0;var i = 0,
          j = 0,
          k = 0,
          m = 0,
          n = 0;i = l;l = l + 32 | 0;n = i + 8 | 0;m = i + 20 | 0;k = i;j = i + 16 | 0;h[n >> 3] = d;c[m >> 2] = e;h[k >> 3] = f;c[j >> 2] = g;Ug(a, c[b + 4 >> 2] | 0, n, m, k, j);l = i;return;
    }function Ug(a, b, d, e, f, g) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;f = f | 0;g = g | 0;var i = 0,
          j = 0;i = l;l = l + 16 | 0;j = i;ID(j);b = Vg(b) | 0;Wg(a, b, +h[d >> 3], c[e >> 2] | 0, +h[f >> 3], c[g >> 2] | 0);KD(j);l = i;return;
    }function Vg(a) {
      a = a | 0;return c[a >> 2] | 0;
    }function Wg(a, b, c, d, e, f) {
      a = a | 0;b = b | 0;c = +c;d = d | 0;e = +e;f = f | 0;var g = 0;g = Yg(Xg() | 0) | 0;c = +Zg(c);d = _g(d) | 0;e = +Zg(e);$g(a, lb(0, g | 0, b | 0, +c, d | 0, +e, _g(f) | 0) | 0);return;
    }function Xg() {
      var b = 0;if (!(a[8504] | 0)) {
        gh(9008);b = 8504;c[b >> 2] = 1;c[b + 4 >> 2] = 0;
      }return 9008;
    }function Yg(a) {
      a = a | 0;return c[a + 8 >> 2] | 0;
    }function Zg(a) {
      a = +a;return + +fh(a);
    }function _g(a) {
      a = a | 0;return eh(a) | 0;
    }function $g(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0,
          f = 0;f = l;l = l + 32 | 0;d = f;e = b;if (!(e & 1)) {
        c[a >> 2] = c[b >> 2];c[a + 4 >> 2] = c[b + 4 >> 2];c[a + 8 >> 2] = c[b + 8 >> 2];c[a + 12 >> 2] = c[b + 12 >> 2];
      } else {
        ah(d, 0);Ra(e | 0, d | 0) | 0;bh(a, d);ch(d);
      }l = f;return;
    }function ah(b, d) {
      b = b | 0;d = d | 0;dh(b, d);c[b + 8 >> 2] = 0;a[b + 24 >> 0] = 0;return;
    }function bh(a, b) {
      a = a | 0;b = b | 0;b = b + 8 | 0;c[a >> 2] = c[b >> 2];c[a + 4 >> 2] = c[b + 4 >> 2];c[a + 8 >> 2] = c[b + 8 >> 2];c[a + 12 >> 2] = c[b + 12 >> 2];return;
    }function ch(b) {
      b = b | 0;a[b + 24 >> 0] = 0;return;
    }function dh(a, b) {
      a = a | 0;b = b | 0;c[a >> 2] = b;return;
    }function eh(a) {
      a = a | 0;return a | 0;
    }function fh(a) {
      a = +a;return +a;
    }function gh(a) {
      a = a | 0;ih(a, hh() | 0, 4);return;
    }function hh() {
      return 1124;
    }function ih(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;c[a >> 2] = b;c[a + 4 >> 2] = d;c[a + 8 >> 2] = gb(b | 0, d + 1 | 0) | 0;return;
    }function jh(a, b) {
      a = a | 0;b = b | 0;b = c[b >> 2] | 0;c[a >> 2] = b;Ea(b | 0);return;
    }function kh(a) {
      a = a | 0;var b = 0,
          d = 0;d = a + 4 | 0;b = c[d >> 2] | 0;c[d >> 2] = 0;if (b | 0) {
        yf(b);sF(b);
      }xc(c[a >> 2] | 0, 0);return;
    }function lh(a) {
      a = a | 0;Ac(c[a >> 2] | 0);return;
    }function mh(a) {
      a = a | 0;return Bc(c[a >> 2] | 0) | 0;
    }function nh(a, b, d, e) {
      a = a | 0;b = +b;d = +d;e = e | 0;kf(c[a >> 2] | 0, X(b), X(d), e);return;
    }function oh(a) {
      a = a | 0;return + +X(Nd(c[a >> 2] | 0));
    }function ph(a) {
      a = a | 0;return + +X(Pd(c[a >> 2] | 0));
    }function qh(a) {
      a = a | 0;return + +X(Od(c[a >> 2] | 0));
    }function rh(a) {
      a = a | 0;return + +X(Qd(c[a >> 2] | 0));
    }function sh(a) {
      a = a | 0;return + +X(Rd(c[a >> 2] | 0));
    }function th(a) {
      a = a | 0;return + +X(Sd(c[a >> 2] | 0));
    }function uh(a, b) {
      a = a | 0;b = b | 0;h[a >> 3] = +X(Nd(c[b >> 2] | 0));h[a + 8 >> 3] = +X(Pd(c[b >> 2] | 0));h[a + 16 >> 3] = +X(Od(c[b >> 2] | 0));h[a + 24 >> 3] = +X(Qd(c[b >> 2] | 0));h[a + 32 >> 3] = +X(Rd(c[b >> 2] | 0));h[a + 40 >> 3] = +X(Sd(c[b >> 2] | 0));return;
    }function vh(a, b) {
      a = a | 0;b = b | 0;return + +X(Td(c[a >> 2] | 0, b));
    }function wh(a, b) {
      a = a | 0;b = b | 0;return + +X(Ud(c[a >> 2] | 0, b));
    }function xh(a, b) {
      a = a | 0;b = b | 0;return + +X(Vd(c[a >> 2] | 0, b));
    }function yh() {
      return tc() | 0;
    }function zh() {
      Ah();Bh();Ch();Dh();Eh();Fh();return;
    }function Ah() {
      mx(11564, 5602, 1);return;
    }function Bh() {
      Aw(10300);return;
    }function Ch() {
      gw(10260);return;
    }function Dh() {
      xv(10176);return;
    }function Eh() {
      tt(9984);return;
    }function Fh() {
      Gh(9020);return;
    }function Gh(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0,
          n = 0,
          o = 0,
          p = 0,
          q = 0,
          r = 0,
          s = 0,
          t = 0,
          u = 0,
          v = 0,
          w = 0,
          x = 0,
          y = 0,
          z = 0,
          A = 0,
          B = 0,
          C = 0,
          D = 0,
          E = 0,
          F = 0,
          G = 0,
          H = 0,
          I = 0,
          J = 0,
          K = 0,
          L = 0,
          M = 0,
          N = 0,
          O = 0,
          P = 0,
          Q = 0,
          R = 0,
          S = 0,
          T = 0,
          U = 0,
          V = 0,
          W = 0,
          X = 0,
          Y = 0,
          Z = 0,
          _ = 0,
          $ = 0,
          aa = 0,
          ba = 0,
          ca = 0,
          da = 0,
          ea = 0,
          fa = 0,
          ga = 0,
          ha = 0,
          ia = 0,
          ja = 0,
          ka = 0,
          la = 0,
          ma = 0,
          na = 0,
          oa = 0,
          pa = 0,
          qa = 0,
          ra = 0,
          sa = 0,
          ta = 0,
          ua = 0,
          va = 0,
          wa = 0,
          xa = 0,
          ya = 0,
          za = 0,
          Aa = 0,
          Ba = 0,
          Ca = 0,
          Da = 0,
          Ea = 0,
          Fa = 0,
          Ga = 0;b = l;l = l + 672 | 0;d = b + 656 | 0;Ga = b + 648 | 0;Fa = b + 640 | 0;Ea = b + 632 | 0;Da = b + 624 | 0;Ca = b + 616 | 0;Ba = b + 608 | 0;Aa = b + 600 | 0;za = b + 592 | 0;ya = b + 584 | 0;xa = b + 576 | 0;wa = b + 568 | 0;va = b + 560 | 0;ua = b + 552 | 0;ta = b + 544 | 0;sa = b + 536 | 0;ra = b + 528 | 0;qa = b + 520 | 0;pa = b + 512 | 0;oa = b + 504 | 0;na = b + 496 | 0;ma = b + 488 | 0;la = b + 480 | 0;ka = b + 472 | 0;ja = b + 464 | 0;ia = b + 456 | 0;ha = b + 448 | 0;ga = b + 440 | 0;fa = b + 432 | 0;ea = b + 424 | 0;da = b + 416 | 0;ca = b + 408 | 0;ba = b + 400 | 0;aa = b + 392 | 0;$ = b + 384 | 0;_ = b + 376 | 0;Z = b + 368 | 0;Y = b + 360 | 0;X = b + 352 | 0;W = b + 344 | 0;V = b + 336 | 0;U = b + 328 | 0;T = b + 320 | 0;S = b + 312 | 0;R = b + 304 | 0;Q = b + 296 | 0;P = b + 288 | 0;O = b + 280 | 0;N = b + 272 | 0;M = b + 264 | 0;L = b + 256 | 0;K = b + 248 | 0;J = b + 240 | 0;I = b + 232 | 0;H = b + 224 | 0;G = b + 216 | 0;F = b + 208 | 0;E = b + 200 | 0;D = b + 192 | 0;C = b + 184 | 0;B = b + 176 | 0;A = b + 168 | 0;z = b + 160 | 0;y = b + 152 | 0;x = b + 144 | 0;w = b + 136 | 0;v = b + 128 | 0;u = b + 120 | 0;t = b + 112 | 0;s = b + 104 | 0;r = b + 96 | 0;q = b + 88 | 0;p = b + 80 | 0;o = b + 72 | 0;n = b + 64 | 0;m = b + 56 | 0;k = b + 48 | 0;j = b + 40 | 0;i = b + 32 | 0;h = b + 24 | 0;g = b + 16 | 0;f = b + 8 | 0;e = b;Hh(a, 4330);Ih(a, 4335, 2) | 0;Jh(a, 4349, 3) | 0;Kh(a, 4366, 18) | 0;c[Ga >> 2] = 19;c[Ga + 4 >> 2] = 0;c[d >> 2] = c[Ga >> 2];c[d + 4 >> 2] = c[Ga + 4 >> 2];Lh(a, 4374, d) | 0;c[Fa >> 2] = 1;c[Fa + 4 >> 2] = 0;c[d >> 2] = c[Fa >> 2];c[d + 4 >> 2] = c[Fa + 4 >> 2];Mh(a, 4380, d) | 0;c[Ea >> 2] = 2;c[Ea + 4 >> 2] = 0;c[d >> 2] = c[Ea >> 2];c[d + 4 >> 2] = c[Ea + 4 >> 2];Nh(a, 4390, d) | 0;c[Da >> 2] = 1;c[Da + 4 >> 2] = 0;c[d >> 2] = c[Da >> 2];c[d + 4 >> 2] = c[Da + 4 >> 2];Oh(a, 4406, d) | 0;c[Ca >> 2] = 2;c[Ca + 4 >> 2] = 0;c[d >> 2] = c[Ca >> 2];c[d + 4 >> 2] = c[Ca + 4 >> 2];Oh(a, 4418, d) | 0;c[Ba >> 2] = 3;c[Ba + 4 >> 2] = 0;c[d >> 2] = c[Ba >> 2];c[d + 4 >> 2] = c[Ba + 4 >> 2];Nh(a, 4437, d) | 0;c[Aa >> 2] = 4;c[Aa + 4 >> 2] = 0;c[d >> 2] = c[Aa >> 2];c[d + 4 >> 2] = c[Aa + 4 >> 2];Nh(a, 4453, d) | 0;c[za >> 2] = 5;c[za + 4 >> 2] = 0;c[d >> 2] = c[za >> 2];c[d + 4 >> 2] = c[za + 4 >> 2];Nh(a, 4467, d) | 0;c[ya >> 2] = 6;c[ya + 4 >> 2] = 0;c[d >> 2] = c[ya >> 2];c[d + 4 >> 2] = c[ya + 4 >> 2];Nh(a, 4480, d) | 0;c[xa >> 2] = 7;c[xa + 4 >> 2] = 0;c[d >> 2] = c[xa >> 2];c[d + 4 >> 2] = c[xa + 4 >> 2];Nh(a, 4497, d) | 0;c[wa >> 2] = 8;c[wa + 4 >> 2] = 0;c[d >> 2] = c[wa >> 2];c[d + 4 >> 2] = c[wa + 4 >> 2];Nh(a, 4509, d) | 0;c[va >> 2] = 3;c[va + 4 >> 2] = 0;c[d >> 2] = c[va >> 2];c[d + 4 >> 2] = c[va + 4 >> 2];Oh(a, 4527, d) | 0;c[ua >> 2] = 4;c[ua + 4 >> 2] = 0;c[d >> 2] = c[ua >> 2];c[d + 4 >> 2] = c[ua + 4 >> 2];Oh(a, 4537, d) | 0;c[ta >> 2] = 9;c[ta + 4 >> 2] = 0;c[d >> 2] = c[ta >> 2];c[d + 4 >> 2] = c[ta + 4 >> 2];Nh(a, 4554, d) | 0;c[sa >> 2] = 10;c[sa + 4 >> 2] = 0;c[d >> 2] = c[sa >> 2];c[d + 4 >> 2] = c[sa + 4 >> 2];Nh(a, 4568, d) | 0;c[ra >> 2] = 11;c[ra + 4 >> 2] = 0;c[d >> 2] = c[ra >> 2];c[d + 4 >> 2] = c[ra + 4 >> 2];Nh(a, 4580, d) | 0;c[qa >> 2] = 1;c[qa + 4 >> 2] = 0;c[d >> 2] = c[qa >> 2];c[d + 4 >> 2] = c[qa + 4 >> 2];Ph(a, 4591, d) | 0;c[pa >> 2] = 2;c[pa + 4 >> 2] = 0;c[d >> 2] = c[pa >> 2];c[d + 4 >> 2] = c[pa + 4 >> 2];Ph(a, 4599, d) | 0;c[oa >> 2] = 3;c[oa + 4 >> 2] = 0;c[d >> 2] = c[oa >> 2];c[d + 4 >> 2] = c[oa + 4 >> 2];Ph(a, 4612, d) | 0;c[na >> 2] = 4;c[na + 4 >> 2] = 0;c[d >> 2] = c[na >> 2];c[d + 4 >> 2] = c[na + 4 >> 2];Ph(a, 4632, d) | 0;c[ma >> 2] = 5;c[ma + 4 >> 2] = 0;c[d >> 2] = c[ma >> 2];c[d + 4 >> 2] = c[ma + 4 >> 2];Ph(a, 4644, d) | 0;c[la >> 2] = 6;c[la + 4 >> 2] = 0;c[d >> 2] = c[la >> 2];c[d + 4 >> 2] = c[la + 4 >> 2];Ph(a, 4658, d) | 0;c[ka >> 2] = 7;c[ka + 4 >> 2] = 0;c[d >> 2] = c[ka >> 2];c[d + 4 >> 2] = c[ka + 4 >> 2];Ph(a, 4667, d) | 0;c[ja >> 2] = 20;c[ja + 4 >> 2] = 0;c[d >> 2] = c[ja >> 2];c[d + 4 >> 2] = c[ja + 4 >> 2];Lh(a, 4683, d) | 0;c[ia >> 2] = 8;c[ia + 4 >> 2] = 0;c[d >> 2] = c[ia >> 2];c[d + 4 >> 2] = c[ia + 4 >> 2];Ph(a, 4696, d) | 0;c[ha >> 2] = 9;c[ha + 4 >> 2] = 0;c[d >> 2] = c[ha >> 2];c[d + 4 >> 2] = c[ha + 4 >> 2];Ph(a, 4706, d) | 0;c[ga >> 2] = 21;c[ga + 4 >> 2] = 0;c[d >> 2] = c[ga >> 2];c[d + 4 >> 2] = c[ga + 4 >> 2];Lh(a, 4723, d) | 0;c[fa >> 2] = 10;c[fa + 4 >> 2] = 0;c[d >> 2] = c[fa >> 2];c[d + 4 >> 2] = c[fa + 4 >> 2];Ph(a, 4737, d) | 0;c[ea >> 2] = 11;c[ea + 4 >> 2] = 0;c[d >> 2] = c[ea >> 2];c[d + 4 >> 2] = c[ea + 4 >> 2];Ph(a, 4749, d) | 0;c[da >> 2] = 12;c[da + 4 >> 2] = 0;c[d >> 2] = c[da >> 2];c[d + 4 >> 2] = c[da + 4 >> 2];Ph(a, 4768, d) | 0;c[ca >> 2] = 13;c[ca + 4 >> 2] = 0;c[d >> 2] = c[ca >> 2];c[d + 4 >> 2] = c[ca + 4 >> 2];Ph(a, 4781, d) | 0;c[ba >> 2] = 14;c[ba + 4 >> 2] = 0;c[d >> 2] = c[ba >> 2];c[d + 4 >> 2] = c[ba + 4 >> 2];Ph(a, 4801, d) | 0;c[aa >> 2] = 15;c[aa + 4 >> 2] = 0;c[d >> 2] = c[aa >> 2];c[d + 4 >> 2] = c[aa + 4 >> 2];Ph(a, 4813, d) | 0;c[$ >> 2] = 16;c[$ + 4 >> 2] = 0;c[d >> 2] = c[$ >> 2];c[d + 4 >> 2] = c[$ + 4 >> 2];Ph(a, 4832, d) | 0;c[_ >> 2] = 17;c[_ + 4 >> 2] = 0;c[d >> 2] = c[_ >> 2];c[d + 4 >> 2] = c[_ + 4 >> 2];Ph(a, 4845, d) | 0;c[Z >> 2] = 18;c[Z + 4 >> 2] = 0;c[d >> 2] = c[Z >> 2];c[d + 4 >> 2] = c[Z + 4 >> 2];Ph(a, 4865, d) | 0;c[Y >> 2] = 5;c[Y + 4 >> 2] = 0;c[d >> 2] = c[Y >> 2];c[d + 4 >> 2] = c[Y + 4 >> 2];Oh(a, 4880, d) | 0;c[X >> 2] = 6;c[X + 4 >> 2] = 0;c[d >> 2] = c[X >> 2];c[d + 4 >> 2] = c[X + 4 >> 2];Oh(a, 4890, d) | 0;c[W >> 2] = 7;c[W + 4 >> 2] = 0;c[d >> 2] = c[W >> 2];c[d + 4 >> 2] = c[W + 4 >> 2];Oh(a, 4901, d) | 0;c[V >> 2] = 4;c[V + 4 >> 2] = 0;c[d >> 2] = c[V >> 2];c[d + 4 >> 2] = c[V + 4 >> 2];Qh(a, 4919, d) | 0;c[U >> 2] = 1;c[U + 4 >> 2] = 0;c[d >> 2] = c[U >> 2];c[d + 4 >> 2] = c[U + 4 >> 2];Rh(a, 4935, d) | 0;c[T >> 2] = 5;c[T + 4 >> 2] = 0;c[d >> 2] = c[T >> 2];c[d + 4 >> 2] = c[T + 4 >> 2];Qh(a, 4947, d) | 0;c[S >> 2] = 6;c[S + 4 >> 2] = 0;c[d >> 2] = c[S >> 2];c[d + 4 >> 2] = c[S + 4 >> 2];Qh(a, 4963, d) | 0;c[R >> 2] = 7;c[R + 4 >> 2] = 0;c[d >> 2] = c[R >> 2];c[d + 4 >> 2] = c[R + 4 >> 2];Qh(a, 4977, d) | 0;c[Q >> 2] = 8;c[Q + 4 >> 2] = 0;c[d >> 2] = c[Q >> 2];c[d + 4 >> 2] = c[Q + 4 >> 2];Qh(a, 4990, d) | 0;c[P >> 2] = 9;c[P + 4 >> 2] = 0;c[d >> 2] = c[P >> 2];c[d + 4 >> 2] = c[P + 4 >> 2];Qh(a, 5007, d) | 0;c[O >> 2] = 10;c[O + 4 >> 2] = 0;c[d >> 2] = c[O >> 2];c[d + 4 >> 2] = c[O + 4 >> 2];Qh(a, 5019, d) | 0;c[N >> 2] = 2;c[N + 4 >> 2] = 0;c[d >> 2] = c[N >> 2];c[d + 4 >> 2] = c[N + 4 >> 2];Rh(a, 5037, d) | 0;c[M >> 2] = 12;c[M + 4 >> 2] = 0;c[d >> 2] = c[M >> 2];c[d + 4 >> 2] = c[M + 4 >> 2];Sh(a, 5047, d) | 0;c[L >> 2] = 1;c[L + 4 >> 2] = 0;c[d >> 2] = c[L >> 2];c[d + 4 >> 2] = c[L + 4 >> 2];Th(a, 5060, d) | 0;c[K >> 2] = 2;c[K + 4 >> 2] = 0;c[d >> 2] = c[K >> 2];c[d + 4 >> 2] = c[K + 4 >> 2];Th(a, 5072, d) | 0;c[J >> 2] = 13;c[J + 4 >> 2] = 0;c[d >> 2] = c[J >> 2];c[d + 4 >> 2] = c[J + 4 >> 2];Sh(a, 5086, d) | 0;c[I >> 2] = 14;c[I + 4 >> 2] = 0;c[d >> 2] = c[I >> 2];c[d + 4 >> 2] = c[I + 4 >> 2];Sh(a, 5095, d) | 0;c[H >> 2] = 15;c[H + 4 >> 2] = 0;c[d >> 2] = c[H >> 2];c[d + 4 >> 2] = c[H + 4 >> 2];Sh(a, 5105, d) | 0;c[G >> 2] = 16;c[G + 4 >> 2] = 0;c[d >> 2] = c[G >> 2];c[d + 4 >> 2] = c[G + 4 >> 2];Sh(a, 5117, d) | 0;c[F >> 2] = 17;c[F + 4 >> 2] = 0;c[d >> 2] = c[F >> 2];c[d + 4 >> 2] = c[F + 4 >> 2];Sh(a, 5130, d) | 0;c[E >> 2] = 18;c[E + 4 >> 2] = 0;c[d >> 2] = c[E >> 2];c[d + 4 >> 2] = c[E + 4 >> 2];Sh(a, 5142, d) | 0;c[D >> 2] = 3;c[D + 4 >> 2] = 0;c[d >> 2] = c[D >> 2];c[d + 4 >> 2] = c[D + 4 >> 2];Th(a, 5155, d) | 0;c[C >> 2] = 1;c[C + 4 >> 2] = 0;c[d >> 2] = c[C >> 2];c[d + 4 >> 2] = c[C + 4 >> 2];Uh(a, 5170, d) | 0;c[B >> 2] = 11;c[B + 4 >> 2] = 0;c[d >> 2] = c[B >> 2];c[d + 4 >> 2] = c[B + 4 >> 2];Qh(a, 5180, d) | 0;c[A >> 2] = 12;c[A + 4 >> 2] = 0;c[d >> 2] = c[A >> 2];c[d + 4 >> 2] = c[A + 4 >> 2];Qh(a, 5192, d) | 0;c[z >> 2] = 3;c[z + 4 >> 2] = 0;c[d >> 2] = c[z >> 2];c[d + 4 >> 2] = c[z + 4 >> 2];Rh(a, 5203, d) | 0;c[y >> 2] = 4;c[y + 4 >> 2] = 0;c[d >> 2] = c[y >> 2];c[d + 4 >> 2] = c[y + 4 >> 2];Vh(a, 5214, d) | 0;c[x >> 2] = 19;c[x + 4 >> 2] = 0;c[d >> 2] = c[x >> 2];c[d + 4 >> 2] = c[x + 4 >> 2];Wh(a, 5226, d) | 0;c[w >> 2] = 13;c[w + 4 >> 2] = 0;c[d >> 2] = c[w >> 2];c[d + 4 >> 2] = c[w + 4 >> 2];Xh(a, 5238, d) | 0;c[v >> 2] = 14;c[v + 4 >> 2] = 0;c[d >> 2] = c[v >> 2];c[d + 4 >> 2] = c[v + 4 >> 2];Yh(a, 5252, d) | 0;c[u >> 2] = 3;c[u + 4 >> 2] = 0;c[d >> 2] = c[u >> 2];c[d + 4 >> 2] = c[u + 4 >> 2];Zh(a, 5262, d) | 0;c[t >> 2] = 20;c[t + 4 >> 2] = 0;c[d >> 2] = c[t >> 2];c[d + 4 >> 2] = c[t + 4 >> 2];_h(a, 5271, d) | 0;c[s >> 2] = 22;c[s + 4 >> 2] = 0;c[d >> 2] = c[s >> 2];c[d + 4 >> 2] = c[s + 4 >> 2];Lh(a, 5286, d) | 0;c[r >> 2] = 23;c[r + 4 >> 2] = 0;c[d >> 2] = c[r >> 2];c[d + 4 >> 2] = c[r + 4 >> 2];Lh(a, 5303, d) | 0;c[q >> 2] = 15;c[q + 4 >> 2] = 0;c[d >> 2] = c[q >> 2];c[d + 4 >> 2] = c[q + 4 >> 2];$h(a, 5313, d) | 0;c[p >> 2] = 1;c[p + 4 >> 2] = 0;c[d >> 2] = c[p >> 2];c[d + 4 >> 2] = c[p + 4 >> 2];ai(a, 5321, d) | 0;c[o >> 2] = 4;c[o + 4 >> 2] = 0;c[d >> 2] = c[o >> 2];c[d + 4 >> 2] = c[o + 4 >> 2];Th(a, 5337, d) | 0;c[n >> 2] = 5;c[n + 4 >> 2] = 0;c[d >> 2] = c[n >> 2];c[d + 4 >> 2] = c[n + 4 >> 2];Th(a, 5353, d) | 0;c[m >> 2] = 6;c[m + 4 >> 2] = 0;c[d >> 2] = c[m >> 2];c[d + 4 >> 2] = c[m + 4 >> 2];Th(a, 5370, d) | 0;c[k >> 2] = 7;c[k + 4 >> 2] = 0;c[d >> 2] = c[k >> 2];c[d + 4 >> 2] = c[k + 4 >> 2];Th(a, 5385, d) | 0;c[j >> 2] = 8;c[j + 4 >> 2] = 0;c[d >> 2] = c[j >> 2];c[d + 4 >> 2] = c[j + 4 >> 2];Th(a, 5403, d) | 0;c[i >> 2] = 9;c[i + 4 >> 2] = 0;c[d >> 2] = c[i >> 2];c[d + 4 >> 2] = c[i + 4 >> 2];Th(a, 5420, d) | 0;c[h >> 2] = 21;c[h + 4 >> 2] = 0;c[d >> 2] = c[h >> 2];c[d + 4 >> 2] = c[h + 4 >> 2];bi(a, 5438, d) | 0;c[g >> 2] = 2;c[g + 4 >> 2] = 0;c[d >> 2] = c[g >> 2];c[d + 4 >> 2] = c[g + 4 >> 2];Uh(a, 5456, d) | 0;c[f >> 2] = 3;c[f + 4 >> 2] = 0;c[d >> 2] = c[f >> 2];c[d + 4 >> 2] = c[f + 4 >> 2];Uh(a, 5474, d) | 0;c[e >> 2] = 4;c[e + 4 >> 2] = 0;c[d >> 2] = c[e >> 2];c[d + 4 >> 2] = c[e + 4 >> 2];Uh(a, 5492, d) | 0;l = b;return;
    }function Hh(a, b) {
      a = a | 0;b = b | 0;var d = 0;d = it() | 0;c[a >> 2] = d;jt(d, b);Ox(c[a >> 2] | 0);return;
    }function Ih(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;Os(a, di(b) | 0, c, 0);return a | 0;
    }function Jh(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;os(a, di(b) | 0, c, 0);return a | 0;
    }function Kh(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;Ur(a, di(b) | 0, c, 0);return a | 0;
    }function Lh(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0;e = l;l = l + 16 | 0;f = e + 8 | 0;g = e;h = c[d + 4 >> 2] | 0;c[g >> 2] = c[d >> 2];c[g + 4 >> 2] = h;c[f >> 2] = c[g >> 2];c[f + 4 >> 2] = c[g + 4 >> 2];wr(a, b, f);l = e;return a | 0;
    }function Mh(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0;e = l;l = l + 16 | 0;f = e + 8 | 0;g = e;h = c[d + 4 >> 2] | 0;c[g >> 2] = c[d >> 2];c[g + 4 >> 2] = h;c[f >> 2] = c[g >> 2];c[f + 4 >> 2] = c[g + 4 >> 2];Xq(a, b, f);l = e;return a | 0;
    }function Nh(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0;e = l;l = l + 16 | 0;f = e + 8 | 0;g = e;h = c[d + 4 >> 2] | 0;c[g >> 2] = c[d >> 2];c[g + 4 >> 2] = h;c[f >> 2] = c[g >> 2];c[f + 4 >> 2] = c[g + 4 >> 2];zq(a, b, f);l = e;return a | 0;
    }function Oh(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0;e = l;l = l + 16 | 0;f = e + 8 | 0;g = e;h = c[d + 4 >> 2] | 0;c[g >> 2] = c[d >> 2];c[g + 4 >> 2] = h;c[f >> 2] = c[g >> 2];c[f + 4 >> 2] = c[g + 4 >> 2];bq(a, b, f);l = e;return a | 0;
    }function Ph(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0;e = l;l = l + 16 | 0;f = e + 8 | 0;g = e;h = c[d + 4 >> 2] | 0;c[g >> 2] = c[d >> 2];c[g + 4 >> 2] = h;c[f >> 2] = c[g >> 2];c[f + 4 >> 2] = c[g + 4 >> 2];Fp(a, b, f);l = e;return a | 0;
    }function Qh(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0;e = l;l = l + 16 | 0;f = e + 8 | 0;g = e;h = c[d + 4 >> 2] | 0;c[g >> 2] = c[d >> 2];c[g + 4 >> 2] = h;c[f >> 2] = c[g >> 2];c[f + 4 >> 2] = c[g + 4 >> 2];hp(a, b, f);l = e;return a | 0;
    }function Rh(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0;e = l;l = l + 16 | 0;f = e + 8 | 0;g = e;h = c[d + 4 >> 2] | 0;c[g >> 2] = c[d >> 2];c[g + 4 >> 2] = h;c[f >> 2] = c[g >> 2];c[f + 4 >> 2] = c[g + 4 >> 2];Lo(a, b, f);l = e;return a | 0;
    }function Sh(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0;e = l;l = l + 16 | 0;f = e + 8 | 0;g = e;h = c[d + 4 >> 2] | 0;c[g >> 2] = c[d >> 2];c[g + 4 >> 2] = h;c[f >> 2] = c[g >> 2];c[f + 4 >> 2] = c[g + 4 >> 2];Zn(a, b, f);l = e;return a | 0;
    }function Th(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0;e = l;l = l + 16 | 0;f = e + 8 | 0;g = e;h = c[d + 4 >> 2] | 0;c[g >> 2] = c[d >> 2];c[g + 4 >> 2] = h;c[f >> 2] = c[g >> 2];c[f + 4 >> 2] = c[g + 4 >> 2];Bn(a, b, f);l = e;return a | 0;
    }function Uh(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0;e = l;l = l + 16 | 0;f = e + 8 | 0;g = e;h = c[d + 4 >> 2] | 0;c[g >> 2] = c[d >> 2];c[g + 4 >> 2] = h;c[f >> 2] = c[g >> 2];c[f + 4 >> 2] = c[g + 4 >> 2];cn(a, b, f);l = e;return a | 0;
    }function Vh(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0;e = l;l = l + 16 | 0;f = e + 8 | 0;g = e;h = c[d + 4 >> 2] | 0;c[g >> 2] = c[d >> 2];c[g + 4 >> 2] = h;c[f >> 2] = c[g >> 2];c[f + 4 >> 2] = c[g + 4 >> 2];Gm(a, b, f);l = e;return a | 0;
    }function Wh(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0;e = l;l = l + 16 | 0;f = e + 8 | 0;g = e;h = c[d + 4 >> 2] | 0;c[g >> 2] = c[d >> 2];c[g + 4 >> 2] = h;c[f >> 2] = c[g >> 2];c[f + 4 >> 2] = c[g + 4 >> 2];fm(a, b, f);l = e;return a | 0;
    }function Xh(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0;e = l;l = l + 16 | 0;f = e + 8 | 0;g = e;h = c[d + 4 >> 2] | 0;c[g >> 2] = c[d >> 2];c[g + 4 >> 2] = h;c[f >> 2] = c[g >> 2];c[f + 4 >> 2] = c[g + 4 >> 2];Il(a, b, f);l = e;return a | 0;
    }function Yh(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0;e = l;l = l + 16 | 0;f = e + 8 | 0;g = e;h = c[d + 4 >> 2] | 0;c[g >> 2] = c[d >> 2];c[g + 4 >> 2] = h;c[f >> 2] = c[g >> 2];c[f + 4 >> 2] = c[g + 4 >> 2];kl(a, b, f);l = e;return a | 0;
    }function Zh(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0;e = l;l = l + 16 | 0;f = e + 8 | 0;g = e;h = c[d + 4 >> 2] | 0;c[g >> 2] = c[d >> 2];c[g + 4 >> 2] = h;c[f >> 2] = c[g >> 2];c[f + 4 >> 2] = c[g + 4 >> 2];Kk(a, b, f);l = e;return a | 0;
    }function _h(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0;e = l;l = l + 16 | 0;f = e + 8 | 0;g = e;h = c[d + 4 >> 2] | 0;c[g >> 2] = c[d >> 2];c[g + 4 >> 2] = h;c[f >> 2] = c[g >> 2];c[f + 4 >> 2] = c[g + 4 >> 2];hk(a, b, f);l = e;return a | 0;
    }function $h(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0;e = l;l = l + 16 | 0;f = e + 8 | 0;g = e;h = c[d + 4 >> 2] | 0;c[g >> 2] = c[d >> 2];c[g + 4 >> 2] = h;c[f >> 2] = c[g >> 2];c[f + 4 >> 2] = c[g + 4 >> 2];Kj(a, b, f);l = e;return a | 0;
    }function ai(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0;e = l;l = l + 16 | 0;f = e + 8 | 0;g = e;h = c[d + 4 >> 2] | 0;c[g >> 2] = c[d >> 2];c[g + 4 >> 2] = h;c[f >> 2] = c[g >> 2];c[f + 4 >> 2] = c[g + 4 >> 2];gj(a, b, f);l = e;return a | 0;
    }function bi(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0;e = l;l = l + 16 | 0;f = e + 8 | 0;g = e;h = c[d + 4 >> 2] | 0;c[g >> 2] = c[d >> 2];c[g + 4 >> 2] = h;c[f >> 2] = c[g >> 2];c[f + 4 >> 2] = c[g + 4 >> 2];ci(a, b, f);l = e;return a | 0;
    }function ci(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0;e = l;l = l + 16 | 0;f = e + 8 | 0;g = e;i = c[d >> 2] | 0;h = c[d + 4 >> 2] | 0;d = di(b) | 0;c[g >> 2] = i;c[g + 4 >> 2] = h;c[f >> 2] = c[g >> 2];c[f + 4 >> 2] = c[g + 4 >> 2];ei(a, d, f, 1);l = e;return;
    }function di(a) {
      a = a | 0;return a | 0;
    }function ei(a, b, d, e) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0;f = l;l = l + 32 | 0;g = f + 16 | 0;m = f + 8 | 0;i = f;k = c[d >> 2] | 0;j = c[d + 4 >> 2] | 0;h = c[a >> 2] | 0;a = fi() | 0;c[m >> 2] = k;c[m + 4 >> 2] = j;c[g >> 2] = c[m >> 2];c[g + 4 >> 2] = c[m + 4 >> 2];d = gi(g) | 0;c[i >> 2] = k;c[i + 4 >> 2] = j;c[g >> 2] = c[i >> 2];c[g + 4 >> 2] = c[i + 4 >> 2];ii(h, b, a, d, hi(g, e) | 0, e);l = f;return;
    }function fi() {
      var b = 0,
          d = 0;if (!(a[8512] | 0)) {
        yi(9024);Na(24, 9024, o | 0) | 0;d = 8512;c[d >> 2] = 1;c[d + 4 >> 2] = 0;
      }if (!(Ai(9024) | 0)) {
        b = 9024;d = b + 36 | 0;do {
          c[b >> 2] = 0;b = b + 4 | 0;
        } while ((b | 0) < (d | 0));yi(9024);
      }return 9024;
    }function gi(a) {
      a = a | 0;return 0;
    }function hi(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0;k = l;l = l + 48 | 0;e = k + 24 | 0;f = k + 16 | 0;g = k + 32 | 0;h = k;i = k + 8 | 0;m = c[a + 4 >> 2] | 0;c[h >> 2] = c[a >> 2];d = h + 4 | 0;c[d >> 2] = m;m = fi() | 0;j = m + 24 | 0;c[i >> 2] = mi(b, 4) | 0;a = m + 28 | 0;if ((c[a >> 2] | 0) >>> 0 < (c[m + 32 >> 2] | 0) >>> 0) {
        ni(g, j, 1);b = c[a >> 2] | 0;d = c[d >> 2] | 0;m = c[i >> 2] | 0;c[f >> 2] = c[h >> 2];c[f + 4 >> 2] = d;c[e >> 2] = c[f >> 2];c[e + 4 >> 2] = c[f + 4 >> 2];oi(b, e, m);pi(g);m = (c[a >> 2] | 0) + 12 | 0;c[a >> 2] = m;a = m;
      } else {
        qi(j, h, i);a = c[a >> 2] | 0;
      }l = k;return ((a - (c[j >> 2] | 0) | 0) / 12 | 0) + -1 | 0;
    }function ii(a, b, d, e, f, g) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;f = f | 0;g = g | 0;var h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0,
          n = 0,
          o = 0,
          p = 0;h = l;l = l + 32 | 0;o = h + 24 | 0;n = h + 20 | 0;j = h + 16 | 0;m = h + 12 | 0;k = h + 8 | 0;i = h + 4 | 0;p = h;c[n >> 2] = b;c[j >> 2] = d;c[m >> 2] = e;c[k >> 2] = f;c[i >> 2] = g;g = a + 28 | 0;c[p >> 2] = c[g >> 2];c[o >> 2] = c[p >> 2];ji(a + 24 | 0, o, n, m, k, j, i) | 0;c[g >> 2] = c[c[g >> 2] >> 2];l = h;return;
    }function ji(a, b, d, e, f, g, h) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;f = f | 0;g = g | 0;h = h | 0;a = ki(b) | 0;b = qF(24) | 0;li(b + 4 | 0, c[d >> 2] | 0, c[e >> 2] | 0, c[f >> 2] | 0, c[g >> 2] | 0, c[h >> 2] | 0);c[b >> 2] = c[a >> 2];c[a >> 2] = b;return b | 0;
    }function ki(a) {
      a = a | 0;return c[a >> 2] | 0;
    }function li(a, b, d, e, f, g) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;f = f | 0;g = g | 0;c[a >> 2] = b;c[a + 4 >> 2] = d;c[a + 8 >> 2] = e;c[a + 12 >> 2] = f;c[a + 16 >> 2] = g;return;
    }function mi(a, b) {
      a = a | 0;b = b | 0;return b | a | 0;
    }function ni(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;return;
    }function oi(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0;e = c[b + 4 >> 2] | 0;c[a >> 2] = c[b >> 2];c[a + 4 >> 2] = e;c[a + 8 >> 2] = d;return;
    }function pi(a) {
      a = a | 0;return;
    }function qi(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0,
          n = 0,
          o = 0;k = l;l = l + 48 | 0;e = k + 32 | 0;h = k + 24 | 0;i = k;j = a + 4 | 0;f = (((c[j >> 2] | 0) - (c[a >> 2] | 0) | 0) / 12 | 0) + 1 | 0;g = ri(a) | 0;if (g >>> 0 < f >>> 0) jF(a);m = c[a >> 2] | 0;o = ((c[a + 8 >> 2] | 0) - m | 0) / 12 | 0;n = o << 1;si(i, o >>> 0 < g >>> 1 >>> 0 ? n >>> 0 < f >>> 0 ? f : n : g, ((c[j >> 2] | 0) - m | 0) / 12 | 0, a + 8 | 0);j = i + 8 | 0;g = c[j >> 2] | 0;f = c[b + 4 >> 2] | 0;d = c[d >> 2] | 0;c[h >> 2] = c[b >> 2];c[h + 4 >> 2] = f;c[e >> 2] = c[h >> 2];c[e + 4 >> 2] = c[h + 4 >> 2];oi(g, e, d);c[j >> 2] = (c[j >> 2] | 0) + 12;ti(a, i);ui(i);l = k;return;
    }function ri(a) {
      a = a | 0;return 357913941;
    }function si(a, b, d, e) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;var f = 0;c[a + 12 >> 2] = 0;c[a + 16 >> 2] = e;do if (b) {
        if (b >>> 0 > 357913941) Ma(5765, 5802, 1734, 5872);else {
          f = qF(b * 12 | 0) | 0;break;
        }
      } else f = 0; while (0);c[a >> 2] = f;e = f + (d * 12 | 0) | 0;c[a + 8 >> 2] = e;c[a + 4 >> 2] = e;c[a + 12 >> 2] = f + (b * 12 | 0);return;
    }function ti(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0;vi(a);e = c[a >> 2] | 0;h = a + 4 | 0;g = b + 4 | 0;f = (c[h >> 2] | 0) - e | 0;d = (c[g >> 2] | 0) + (((f | 0) / -12 | 0) * 12 | 0) | 0;c[g >> 2] = d;if ((f | 0) > 0) {
        AF(d | 0, e | 0, f | 0) | 0;e = g;d = c[g >> 2] | 0;
      } else e = g;g = c[a >> 2] | 0;c[a >> 2] = d;c[e >> 2] = g;d = b + 8 | 0;g = c[h >> 2] | 0;c[h >> 2] = c[d >> 2];c[d >> 2] = g;d = a + 8 | 0;g = b + 12 | 0;f = c[d >> 2] | 0;c[d >> 2] = c[g >> 2];c[g >> 2] = f;c[b >> 2] = c[e >> 2];wi(a, ((c[h >> 2] | 0) - (c[a >> 2] | 0) | 0) / 12 | 0);return;
    }function ui(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;b = c[a + 4 >> 2] | 0;d = a + 8 | 0;e = c[d >> 2] | 0;if ((e | 0) != (b | 0)) c[d >> 2] = e + (~(((e + -12 - b | 0) >>> 0) / 12 | 0) * 12 | 0);a = c[a >> 2] | 0;if (a | 0) sF(a);return;
    }function vi(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;e = c[a >> 2] | 0;d = e;b = e + ((((c[a + 8 >> 2] | 0) - d | 0) / 12 | 0) * 12 | 0) | 0;xi(a, e, b, e + ((((c[a + 4 >> 2] | 0) - d | 0) / 12 | 0) * 12 | 0) | 0, b);return;
    }function wi(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0;d = c[a >> 2] | 0;e = d + ((((c[a + 8 >> 2] | 0) - d | 0) / 12 | 0) * 12 | 0) | 0;xi(a, d, e, e, d + (b * 12 | 0) | 0);return;
    }function xi(a, b, c, d, e) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;e = e | 0;return;
    }function yi(a) {
      a = a | 0;Ci(a);return;
    }function zi(a) {
      a = a | 0;Bi(a + 24 | 0);return;
    }function Ai(a) {
      a = a | 0;return c[a >> 2] | 0;
    }function Bi(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;d = c[a >> 2] | 0;e = d;if (d | 0) {
        a = a + 4 | 0;b = c[a >> 2] | 0;if ((b | 0) != (d | 0)) c[a >> 2] = b + (~(((b + -12 - e | 0) >>> 0) / 12 | 0) * 12 | 0);sF(d);
      }return;
    }function Ci(a) {
      a = a | 0;var b = 0;b = Di() | 0;Gi(a, 2, 4, b, Ei() | 0, 0);c[a + 24 >> 2] = 0;c[a + 28 >> 2] = 0;c[a + 32 >> 2] = 0;return;
    }function Di() {
      return 9116;
    }function Ei() {
      return 1200;
    }function Fi(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0;d = l;l = l + 16 | 0;e = d + 8 | 0;f = d;g = Hi(a) | 0;a = c[g + 4 >> 2] | 0;c[f >> 2] = c[g >> 2];c[f + 4 >> 2] = a;c[e >> 2] = c[f >> 2];c[e + 4 >> 2] = c[f + 4 >> 2];b = Ii(b, e) | 0;l = d;return b | 0;
    }function Gi(a, b, d, e, f, g) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;f = f | 0;g = g | 0;c[a >> 2] = b;c[a + 4 >> 2] = d;c[a + 8 >> 2] = e;c[a + 12 >> 2] = f;c[a + 16 >> 2] = g;return;
    }function Hi(a) {
      a = a | 0;return (c[(fi() | 0) + 24 >> 2] | 0) + (a * 12 | 0) | 0;
    }function Ii(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0,
          f = 0;f = l;l = l + 48 | 0;e = f;d = c[b >> 2] | 0;b = c[b + 4 >> 2] | 0;a = a + (b >> 1) | 0;if (b & 1) d = c[(c[a >> 2] | 0) + d >> 2] | 0;yb[d & 31](e, a);e = Ji(e) | 0;l = f;return e | 0;
    }function Ji(a) {
      a = a | 0;var b = 0,
          c = 0,
          d = 0,
          e = 0;e = l;l = l + 32 | 0;b = e + 12 | 0;c = e;d = Li(Ki() | 0) | 0;if (!d) a = Qi(a) | 0;else {
        Mi(b, d);Ni(c, b);Oi(a, c);a = Pi(b) | 0;
      }l = e;return a | 0;
    }function Ki() {
      var b = 0;if (!(a[8528] | 0)) {
        $i(9072);Na(25, 9072, o | 0) | 0;b = 8528;c[b >> 2] = 1;c[b + 4 >> 2] = 0;
      }return 9072;
    }function Li(a) {
      a = a | 0;return c[a + 36 >> 2] | 0;
    }function Mi(a, b) {
      a = a | 0;b = b | 0;c[a >> 2] = b;c[a + 4 >> 2] = a;c[a + 8 >> 2] = 0;return;
    }function Ni(a, b) {
      a = a | 0;b = b | 0;c[a >> 2] = c[b >> 2];c[a + 4 >> 2] = c[b + 4 >> 2];c[a + 8 >> 2] = 0;return;
    }function Oi(a, b) {
      a = a | 0;b = b | 0;Vi(b, a, a + 8 | 0, a + 16 | 0, a + 24 | 0, a + 32 | 0, a + 40 | 0) | 0;return;
    }function Pi(a) {
      a = a | 0;return c[(c[a + 4 >> 2] | 0) + 8 >> 2] | 0;
    }function Qi(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0;j = l;l = l + 16 | 0;d = j + 4 | 0;e = j;f = AA(8) | 0;g = f;h = qF(48) | 0;i = h;b = i + 48 | 0;do {
        c[i >> 2] = c[a >> 2];i = i + 4 | 0;a = a + 4 | 0;
      } while ((i | 0) < (b | 0));b = g + 4 | 0;c[b >> 2] = h;i = qF(8) | 0;h = c[b >> 2] | 0;c[e >> 2] = 0;c[d >> 2] = c[e >> 2];Ri(i, h, d);c[f >> 2] = i;l = j;return g | 0;
    }function Ri(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;c[a >> 2] = b;d = qF(16) | 0;c[d + 4 >> 2] = 0;c[d + 8 >> 2] = 0;c[d >> 2] = 1152;c[d + 12 >> 2] = b;c[a + 4 >> 2] = d;return;
    }function Si(a) {
      a = a | 0;kF(a);sF(a);return;
    }function Ti(a) {
      a = a | 0;a = c[a + 12 >> 2] | 0;if (a | 0) sF(a);return;
    }function Ui(a) {
      a = a | 0;sF(a);return;
    }function Vi(a, b, d, e, f, g, h) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;f = f | 0;g = g | 0;h = h | 0;g = Wi(c[a >> 2] | 0, b, d, e, f, g, h) | 0;h = a + 4 | 0;c[(c[h >> 2] | 0) + 8 >> 2] = g;return c[(c[h >> 2] | 0) + 8 >> 2] | 0;
    }function Wi(a, b, c, d, e, f, g) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;e = e | 0;f = f | 0;g = g | 0;var i = 0,
          j = 0;i = l;l = l + 16 | 0;j = i;ID(j);a = Vg(a) | 0;g = Xi(a, +h[b >> 3], +h[c >> 3], +h[d >> 3], +h[e >> 3], +h[f >> 3], +h[g >> 3]) | 0;KD(j);l = i;return g | 0;
    }function Xi(a, b, c, d, e, f, g) {
      a = a | 0;b = +b;c = +c;d = +d;e = +e;f = +f;g = +g;var h = 0;h = Yg(Yi() | 0) | 0;b = +Zg(b);c = +Zg(c);d = +Zg(d);e = +Zg(e);f = +Zg(f);return Ba(0, h | 0, a | 0, +b, +c, +d, +e, +f, + +Zg(g)) | 0;
    }function Yi() {
      var b = 0;if (!(a[8520] | 0)) {
        Zi(9060);b = 8520;c[b >> 2] = 1;c[b + 4 >> 2] = 0;
      }return 9060;
    }function Zi(a) {
      a = a | 0;ih(a, _i() | 0, 6);return;
    }function _i() {
      return 1172;
    }function $i(a) {
      a = a | 0;fj(a);return;
    }function aj(a) {
      a = a | 0;bj(a + 24 | 0);cj(a + 16 | 0);return;
    }function bj(a) {
      a = a | 0;ej(a);return;
    }function cj(a) {
      a = a | 0;dj(a);return;
    }function dj(a) {
      a = a | 0;var b = 0,
          d = 0;b = c[a >> 2] | 0;if (b | 0) do {
        d = b;b = c[b >> 2] | 0;sF(d);
      } while ((b | 0) != 0);c[a >> 2] = 0;return;
    }function ej(a) {
      a = a | 0;var b = 0,
          d = 0;b = c[a >> 2] | 0;if (b | 0) do {
        d = b;b = c[b >> 2] | 0;sF(d);
      } while ((b | 0) != 0);c[a >> 2] = 0;return;
    }function fj(b) {
      b = b | 0;var d = 0;c[b + 16 >> 2] = 0;c[b + 20 >> 2] = 0;d = b + 24 | 0;c[d >> 2] = 0;c[b + 28 >> 2] = d;c[b + 36 >> 2] = 0;a[b + 40 >> 0] = 0;a[b + 41 >> 0] = 0;return;
    }function gj(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0;e = l;l = l + 16 | 0;f = e + 8 | 0;g = e;i = c[d >> 2] | 0;h = c[d + 4 >> 2] | 0;d = di(b) | 0;c[g >> 2] = i;c[g + 4 >> 2] = h;c[f >> 2] = c[g >> 2];c[f + 4 >> 2] = c[g + 4 >> 2];hj(a, d, f, 0);l = e;return;
    }function hj(a, b, d, e) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0;f = l;l = l + 32 | 0;g = f + 16 | 0;m = f + 8 | 0;i = f;k = c[d >> 2] | 0;j = c[d + 4 >> 2] | 0;h = c[a >> 2] | 0;a = ij() | 0;c[m >> 2] = k;c[m + 4 >> 2] = j;c[g >> 2] = c[m >> 2];c[g + 4 >> 2] = c[m + 4 >> 2];d = jj(g) | 0;c[i >> 2] = k;c[i + 4 >> 2] = j;c[g >> 2] = c[i >> 2];c[g + 4 >> 2] = c[i + 4 >> 2];ii(h, b, a, d, kj(g, e) | 0, e);l = f;return;
    }function ij() {
      var b = 0,
          d = 0;if (!(a[8536] | 0)) {
        wj(9120);Na(26, 9120, o | 0) | 0;d = 8536;c[d >> 2] = 1;c[d + 4 >> 2] = 0;
      }if (!(Ai(9120) | 0)) {
        b = 9120;d = b + 36 | 0;do {
          c[b >> 2] = 0;b = b + 4 | 0;
        } while ((b | 0) < (d | 0));wj(9120);
      }return 9120;
    }function jj(a) {
      a = a | 0;return 0;
    }function kj(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0;k = l;l = l + 48 | 0;e = k + 24 | 0;f = k + 16 | 0;g = k + 32 | 0;h = k;i = k + 8 | 0;m = c[a + 4 >> 2] | 0;c[h >> 2] = c[a >> 2];d = h + 4 | 0;c[d >> 2] = m;m = ij() | 0;j = m + 24 | 0;c[i >> 2] = mi(b, 4) | 0;a = m + 28 | 0;if ((c[a >> 2] | 0) >>> 0 < (c[m + 32 >> 2] | 0) >>> 0) {
        lj(g, j, 1);b = c[a >> 2] | 0;d = c[d >> 2] | 0;m = c[i >> 2] | 0;c[f >> 2] = c[h >> 2];c[f + 4 >> 2] = d;c[e >> 2] = c[f >> 2];c[e + 4 >> 2] = c[f + 4 >> 2];mj(b, e, m);nj(g);m = (c[a >> 2] | 0) + 12 | 0;c[a >> 2] = m;a = m;
      } else {
        oj(j, h, i);a = c[a >> 2] | 0;
      }l = k;return ((a - (c[j >> 2] | 0) | 0) / 12 | 0) + -1 | 0;
    }function lj(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;return;
    }function mj(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0;e = c[b + 4 >> 2] | 0;c[a >> 2] = c[b >> 2];c[a + 4 >> 2] = e;c[a + 8 >> 2] = d;return;
    }function nj(a) {
      a = a | 0;return;
    }function oj(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0,
          n = 0,
          o = 0;k = l;l = l + 48 | 0;e = k + 32 | 0;h = k + 24 | 0;i = k;j = a + 4 | 0;f = (((c[j >> 2] | 0) - (c[a >> 2] | 0) | 0) / 12 | 0) + 1 | 0;g = pj(a) | 0;if (g >>> 0 < f >>> 0) jF(a);m = c[a >> 2] | 0;o = ((c[a + 8 >> 2] | 0) - m | 0) / 12 | 0;n = o << 1;qj(i, o >>> 0 < g >>> 1 >>> 0 ? n >>> 0 < f >>> 0 ? f : n : g, ((c[j >> 2] | 0) - m | 0) / 12 | 0, a + 8 | 0);j = i + 8 | 0;g = c[j >> 2] | 0;f = c[b + 4 >> 2] | 0;d = c[d >> 2] | 0;c[h >> 2] = c[b >> 2];c[h + 4 >> 2] = f;c[e >> 2] = c[h >> 2];c[e + 4 >> 2] = c[h + 4 >> 2];mj(g, e, d);c[j >> 2] = (c[j >> 2] | 0) + 12;rj(a, i);sj(i);l = k;return;
    }function pj(a) {
      a = a | 0;return 357913941;
    }function qj(a, b, d, e) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;var f = 0;c[a + 12 >> 2] = 0;c[a + 16 >> 2] = e;do if (b) {
        if (b >>> 0 > 357913941) Ma(5765, 5802, 1734, 5872);else {
          f = qF(b * 12 | 0) | 0;break;
        }
      } else f = 0; while (0);c[a >> 2] = f;e = f + (d * 12 | 0) | 0;c[a + 8 >> 2] = e;c[a + 4 >> 2] = e;c[a + 12 >> 2] = f + (b * 12 | 0);return;
    }function rj(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0;tj(a);e = c[a >> 2] | 0;h = a + 4 | 0;g = b + 4 | 0;f = (c[h >> 2] | 0) - e | 0;d = (c[g >> 2] | 0) + (((f | 0) / -12 | 0) * 12 | 0) | 0;c[g >> 2] = d;if ((f | 0) > 0) {
        AF(d | 0, e | 0, f | 0) | 0;e = g;d = c[g >> 2] | 0;
      } else e = g;g = c[a >> 2] | 0;c[a >> 2] = d;c[e >> 2] = g;d = b + 8 | 0;g = c[h >> 2] | 0;c[h >> 2] = c[d >> 2];c[d >> 2] = g;d = a + 8 | 0;g = b + 12 | 0;f = c[d >> 2] | 0;c[d >> 2] = c[g >> 2];c[g >> 2] = f;c[b >> 2] = c[e >> 2];uj(a, ((c[h >> 2] | 0) - (c[a >> 2] | 0) | 0) / 12 | 0);return;
    }function sj(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;b = c[a + 4 >> 2] | 0;d = a + 8 | 0;e = c[d >> 2] | 0;if ((e | 0) != (b | 0)) c[d >> 2] = e + (~(((e + -12 - b | 0) >>> 0) / 12 | 0) * 12 | 0);a = c[a >> 2] | 0;if (a | 0) sF(a);return;
    }function tj(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;e = c[a >> 2] | 0;d = e;b = e + ((((c[a + 8 >> 2] | 0) - d | 0) / 12 | 0) * 12 | 0) | 0;vj(a, e, b, e + ((((c[a + 4 >> 2] | 0) - d | 0) / 12 | 0) * 12 | 0) | 0, b);return;
    }function uj(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0;d = c[a >> 2] | 0;e = d + ((((c[a + 8 >> 2] | 0) - d | 0) / 12 | 0) * 12 | 0) | 0;vj(a, d, e, e, d + (b * 12 | 0) | 0);return;
    }function vj(a, b, c, d, e) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;e = e | 0;return;
    }function wj(a) {
      a = a | 0;zj(a);return;
    }function xj(a) {
      a = a | 0;yj(a + 24 | 0);return;
    }function yj(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;d = c[a >> 2] | 0;e = d;if (d | 0) {
        a = a + 4 | 0;b = c[a >> 2] | 0;if ((b | 0) != (d | 0)) c[a >> 2] = b + (~(((b + -12 - e | 0) >>> 0) / 12 | 0) * 12 | 0);sF(d);
      }return;
    }function zj(a) {
      a = a | 0;var b = 0;b = Di() | 0;Gi(a, 2, 1, b, Aj() | 0, 3);c[a + 24 >> 2] = 0;c[a + 28 >> 2] = 0;c[a + 32 >> 2] = 0;return;
    }function Aj() {
      return 1204;
    }function Bj(a, b, d, e, f) {
      a = a | 0;b = b | 0;d = +d;e = +e;f = f | 0;var g = 0,
          h = 0,
          i = 0,
          j = 0;g = l;l = l + 16 | 0;h = g + 8 | 0;i = g;j = Cj(a) | 0;a = c[j + 4 >> 2] | 0;c[i >> 2] = c[j >> 2];c[i + 4 >> 2] = a;c[h >> 2] = c[i >> 2];c[h + 4 >> 2] = c[i + 4 >> 2];Dj(b, h, d, e, f);l = g;return;
    }function Cj(a) {
      a = a | 0;return (c[(ij() | 0) + 24 >> 2] | 0) + (a * 12 | 0) | 0;
    }function Dj(a, b, d, e, f) {
      a = a | 0;b = b | 0;d = +d;e = +e;f = f | 0;var g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0;k = l;l = l + 16 | 0;h = k + 2 | 0;i = k + 1 | 0;j = k;g = c[b >> 2] | 0;b = c[b + 4 >> 2] | 0;a = a + (b >> 1) | 0;if (b & 1) g = c[(c[a >> 2] | 0) + g >> 2] | 0;Ej(h, d);d = +Fj(h, d);Ej(i, e);e = +Fj(i, e);Gj(j, f);j = Hj(j, f) | 0;Ab[g & 1](a, d, e, j);l = k;return;
    }function Ej(a, b) {
      a = a | 0;b = +b;return;
    }function Fj(a, b) {
      a = a | 0;b = +b;return + +Jj(b);
    }function Gj(a, b) {
      a = a | 0;b = b | 0;return;
    }function Hj(a, b) {
      a = a | 0;b = b | 0;return Ij(b) | 0;
    }function Ij(a) {
      a = a | 0;return a | 0;
    }function Jj(a) {
      a = +a;return +a;
    }function Kj(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0;e = l;l = l + 16 | 0;f = e + 8 | 0;g = e;i = c[d >> 2] | 0;h = c[d + 4 >> 2] | 0;d = di(b) | 0;c[g >> 2] = i;c[g + 4 >> 2] = h;c[f >> 2] = c[g >> 2];c[f + 4 >> 2] = c[g + 4 >> 2];Lj(a, d, f, 1);l = e;return;
    }function Lj(a, b, d, e) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0;f = l;l = l + 32 | 0;g = f + 16 | 0;m = f + 8 | 0;i = f;k = c[d >> 2] | 0;j = c[d + 4 >> 2] | 0;h = c[a >> 2] | 0;a = Mj() | 0;c[m >> 2] = k;c[m + 4 >> 2] = j;c[g >> 2] = c[m >> 2];c[g + 4 >> 2] = c[m + 4 >> 2];d = Nj(g) | 0;c[i >> 2] = k;c[i + 4 >> 2] = j;c[g >> 2] = c[i >> 2];c[g + 4 >> 2] = c[i + 4 >> 2];ii(h, b, a, d, Oj(g, e) | 0, e);l = f;return;
    }function Mj() {
      var b = 0,
          d = 0;if (!(a[8544] | 0)) {
        _j(9156);Na(27, 9156, o | 0) | 0;d = 8544;c[d >> 2] = 1;c[d + 4 >> 2] = 0;
      }if (!(Ai(9156) | 0)) {
        b = 9156;d = b + 36 | 0;do {
          c[b >> 2] = 0;b = b + 4 | 0;
        } while ((b | 0) < (d | 0));_j(9156);
      }return 9156;
    }function Nj(a) {
      a = a | 0;return 0;
    }function Oj(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0;k = l;l = l + 48 | 0;e = k + 24 | 0;f = k + 16 | 0;g = k + 32 | 0;h = k;i = k + 8 | 0;m = c[a + 4 >> 2] | 0;c[h >> 2] = c[a >> 2];d = h + 4 | 0;c[d >> 2] = m;m = Mj() | 0;j = m + 24 | 0;c[i >> 2] = mi(b, 4) | 0;a = m + 28 | 0;if ((c[a >> 2] | 0) >>> 0 < (c[m + 32 >> 2] | 0) >>> 0) {
        Pj(g, j, 1);b = c[a >> 2] | 0;d = c[d >> 2] | 0;m = c[i >> 2] | 0;c[f >> 2] = c[h >> 2];c[f + 4 >> 2] = d;c[e >> 2] = c[f >> 2];c[e + 4 >> 2] = c[f + 4 >> 2];Qj(b, e, m);Rj(g);m = (c[a >> 2] | 0) + 12 | 0;c[a >> 2] = m;a = m;
      } else {
        Sj(j, h, i);a = c[a >> 2] | 0;
      }l = k;return ((a - (c[j >> 2] | 0) | 0) / 12 | 0) + -1 | 0;
    }function Pj(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;return;
    }function Qj(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0;e = c[b + 4 >> 2] | 0;c[a >> 2] = c[b >> 2];c[a + 4 >> 2] = e;c[a + 8 >> 2] = d;return;
    }function Rj(a) {
      a = a | 0;return;
    }function Sj(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0,
          n = 0,
          o = 0;k = l;l = l + 48 | 0;e = k + 32 | 0;h = k + 24 | 0;i = k;j = a + 4 | 0;f = (((c[j >> 2] | 0) - (c[a >> 2] | 0) | 0) / 12 | 0) + 1 | 0;g = Tj(a) | 0;if (g >>> 0 < f >>> 0) jF(a);m = c[a >> 2] | 0;o = ((c[a + 8 >> 2] | 0) - m | 0) / 12 | 0;n = o << 1;Uj(i, o >>> 0 < g >>> 1 >>> 0 ? n >>> 0 < f >>> 0 ? f : n : g, ((c[j >> 2] | 0) - m | 0) / 12 | 0, a + 8 | 0);j = i + 8 | 0;g = c[j >> 2] | 0;f = c[b + 4 >> 2] | 0;d = c[d >> 2] | 0;c[h >> 2] = c[b >> 2];c[h + 4 >> 2] = f;c[e >> 2] = c[h >> 2];c[e + 4 >> 2] = c[h + 4 >> 2];Qj(g, e, d);c[j >> 2] = (c[j >> 2] | 0) + 12;Vj(a, i);Wj(i);l = k;return;
    }function Tj(a) {
      a = a | 0;return 357913941;
    }function Uj(a, b, d, e) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;var f = 0;c[a + 12 >> 2] = 0;c[a + 16 >> 2] = e;do if (b) {
        if (b >>> 0 > 357913941) Ma(5765, 5802, 1734, 5872);else {
          f = qF(b * 12 | 0) | 0;break;
        }
      } else f = 0; while (0);c[a >> 2] = f;e = f + (d * 12 | 0) | 0;c[a + 8 >> 2] = e;c[a + 4 >> 2] = e;c[a + 12 >> 2] = f + (b * 12 | 0);return;
    }function Vj(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0;Xj(a);e = c[a >> 2] | 0;h = a + 4 | 0;g = b + 4 | 0;f = (c[h >> 2] | 0) - e | 0;d = (c[g >> 2] | 0) + (((f | 0) / -12 | 0) * 12 | 0) | 0;c[g >> 2] = d;if ((f | 0) > 0) {
        AF(d | 0, e | 0, f | 0) | 0;e = g;d = c[g >> 2] | 0;
      } else e = g;g = c[a >> 2] | 0;c[a >> 2] = d;c[e >> 2] = g;d = b + 8 | 0;g = c[h >> 2] | 0;c[h >> 2] = c[d >> 2];c[d >> 2] = g;d = a + 8 | 0;g = b + 12 | 0;f = c[d >> 2] | 0;c[d >> 2] = c[g >> 2];c[g >> 2] = f;c[b >> 2] = c[e >> 2];Yj(a, ((c[h >> 2] | 0) - (c[a >> 2] | 0) | 0) / 12 | 0);return;
    }function Wj(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;b = c[a + 4 >> 2] | 0;d = a + 8 | 0;e = c[d >> 2] | 0;if ((e | 0) != (b | 0)) c[d >> 2] = e + (~(((e + -12 - b | 0) >>> 0) / 12 | 0) * 12 | 0);a = c[a >> 2] | 0;if (a | 0) sF(a);return;
    }function Xj(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;e = c[a >> 2] | 0;d = e;b = e + ((((c[a + 8 >> 2] | 0) - d | 0) / 12 | 0) * 12 | 0) | 0;Zj(a, e, b, e + ((((c[a + 4 >> 2] | 0) - d | 0) / 12 | 0) * 12 | 0) | 0, b);return;
    }function Yj(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0;d = c[a >> 2] | 0;e = d + ((((c[a + 8 >> 2] | 0) - d | 0) / 12 | 0) * 12 | 0) | 0;Zj(a, d, e, e, d + (b * 12 | 0) | 0);return;
    }function Zj(a, b, c, d, e) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;e = e | 0;return;
    }function _j(a) {
      a = a | 0;bk(a);return;
    }function $j(a) {
      a = a | 0;ak(a + 24 | 0);return;
    }function ak(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;d = c[a >> 2] | 0;e = d;if (d | 0) {
        a = a + 4 | 0;b = c[a >> 2] | 0;if ((b | 0) != (d | 0)) c[a >> 2] = b + (~(((b + -12 - e | 0) >>> 0) / 12 | 0) * 12 | 0);sF(d);
      }return;
    }function bk(a) {
      a = a | 0;var b = 0;b = Di() | 0;Gi(a, 2, 5, b, ck() | 0, 0);c[a + 24 >> 2] = 0;c[a + 28 >> 2] = 0;c[a + 32 >> 2] = 0;return;
    }function ck() {
      return 1220;
    }function dk(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0;d = l;l = l + 16 | 0;e = d + 8 | 0;f = d;g = ek(a) | 0;a = c[g + 4 >> 2] | 0;c[f >> 2] = c[g >> 2];c[f + 4 >> 2] = a;c[e >> 2] = c[f >> 2];c[e + 4 >> 2] = c[f + 4 >> 2];b = fk(b, e) | 0;l = d;return b | 0;
    }function ek(a) {
      a = a | 0;return (c[(Mj() | 0) + 24 >> 2] | 0) + (a * 12 | 0) | 0;
    }function fk(a, b) {
      a = a | 0;b = b | 0;var d = 0;d = c[b >> 2] | 0;b = c[b + 4 >> 2] | 0;a = a + (b >> 1) | 0;if (b & 1) d = c[(c[a >> 2] | 0) + d >> 2] | 0;return gk(zb[d & 31](a) | 0) | 0;
    }function gk(a) {
      a = a | 0;return a & 1 | 0;
    }function hk(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0;e = l;l = l + 16 | 0;f = e + 8 | 0;g = e;i = c[d >> 2] | 0;h = c[d + 4 >> 2] | 0;d = di(b) | 0;c[g >> 2] = i;c[g + 4 >> 2] = h;c[f >> 2] = c[g >> 2];c[f + 4 >> 2] = c[g + 4 >> 2];ik(a, d, f, 0);l = e;return;
    }function ik(a, b, d, e) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0;f = l;l = l + 32 | 0;g = f + 16 | 0;m = f + 8 | 0;i = f;k = c[d >> 2] | 0;j = c[d + 4 >> 2] | 0;h = c[a >> 2] | 0;a = jk() | 0;c[m >> 2] = k;c[m + 4 >> 2] = j;c[g >> 2] = c[m >> 2];c[g + 4 >> 2] = c[m + 4 >> 2];d = kk(g) | 0;c[i >> 2] = k;c[i + 4 >> 2] = j;c[g >> 2] = c[i >> 2];c[g + 4 >> 2] = c[i + 4 >> 2];ii(h, b, a, d, lk(g, e) | 0, e);l = f;return;
    }function jk() {
      var b = 0,
          d = 0;if (!(a[8552] | 0)) {
        xk(9192);Na(28, 9192, o | 0) | 0;d = 8552;c[d >> 2] = 1;c[d + 4 >> 2] = 0;
      }if (!(Ai(9192) | 0)) {
        b = 9192;d = b + 36 | 0;do {
          c[b >> 2] = 0;b = b + 4 | 0;
        } while ((b | 0) < (d | 0));xk(9192);
      }return 9192;
    }function kk(a) {
      a = a | 0;return 0;
    }function lk(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0;k = l;l = l + 48 | 0;e = k + 24 | 0;f = k + 16 | 0;g = k + 32 | 0;h = k;i = k + 8 | 0;m = c[a + 4 >> 2] | 0;c[h >> 2] = c[a >> 2];d = h + 4 | 0;c[d >> 2] = m;m = jk() | 0;j = m + 24 | 0;c[i >> 2] = mi(b, 4) | 0;a = m + 28 | 0;if ((c[a >> 2] | 0) >>> 0 < (c[m + 32 >> 2] | 0) >>> 0) {
        mk(g, j, 1);b = c[a >> 2] | 0;d = c[d >> 2] | 0;m = c[i >> 2] | 0;c[f >> 2] = c[h >> 2];c[f + 4 >> 2] = d;c[e >> 2] = c[f >> 2];c[e + 4 >> 2] = c[f + 4 >> 2];nk(b, e, m);ok(g);m = (c[a >> 2] | 0) + 12 | 0;c[a >> 2] = m;a = m;
      } else {
        pk(j, h, i);a = c[a >> 2] | 0;
      }l = k;return ((a - (c[j >> 2] | 0) | 0) / 12 | 0) + -1 | 0;
    }function mk(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;return;
    }function nk(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0;e = c[b + 4 >> 2] | 0;c[a >> 2] = c[b >> 2];c[a + 4 >> 2] = e;c[a + 8 >> 2] = d;return;
    }function ok(a) {
      a = a | 0;return;
    }function pk(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0,
          n = 0,
          o = 0;k = l;l = l + 48 | 0;e = k + 32 | 0;h = k + 24 | 0;i = k;j = a + 4 | 0;f = (((c[j >> 2] | 0) - (c[a >> 2] | 0) | 0) / 12 | 0) + 1 | 0;g = qk(a) | 0;if (g >>> 0 < f >>> 0) jF(a);m = c[a >> 2] | 0;o = ((c[a + 8 >> 2] | 0) - m | 0) / 12 | 0;n = o << 1;rk(i, o >>> 0 < g >>> 1 >>> 0 ? n >>> 0 < f >>> 0 ? f : n : g, ((c[j >> 2] | 0) - m | 0) / 12 | 0, a + 8 | 0);j = i + 8 | 0;g = c[j >> 2] | 0;f = c[b + 4 >> 2] | 0;d = c[d >> 2] | 0;c[h >> 2] = c[b >> 2];c[h + 4 >> 2] = f;c[e >> 2] = c[h >> 2];c[e + 4 >> 2] = c[h + 4 >> 2];nk(g, e, d);c[j >> 2] = (c[j >> 2] | 0) + 12;sk(a, i);tk(i);l = k;return;
    }function qk(a) {
      a = a | 0;return 357913941;
    }function rk(a, b, d, e) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;var f = 0;c[a + 12 >> 2] = 0;c[a + 16 >> 2] = e;do if (b) {
        if (b >>> 0 > 357913941) Ma(5765, 5802, 1734, 5872);else {
          f = qF(b * 12 | 0) | 0;break;
        }
      } else f = 0; while (0);c[a >> 2] = f;e = f + (d * 12 | 0) | 0;c[a + 8 >> 2] = e;c[a + 4 >> 2] = e;c[a + 12 >> 2] = f + (b * 12 | 0);return;
    }function sk(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0;uk(a);e = c[a >> 2] | 0;h = a + 4 | 0;g = b + 4 | 0;f = (c[h >> 2] | 0) - e | 0;d = (c[g >> 2] | 0) + (((f | 0) / -12 | 0) * 12 | 0) | 0;c[g >> 2] = d;if ((f | 0) > 0) {
        AF(d | 0, e | 0, f | 0) | 0;e = g;d = c[g >> 2] | 0;
      } else e = g;g = c[a >> 2] | 0;c[a >> 2] = d;c[e >> 2] = g;d = b + 8 | 0;g = c[h >> 2] | 0;c[h >> 2] = c[d >> 2];c[d >> 2] = g;d = a + 8 | 0;g = b + 12 | 0;f = c[d >> 2] | 0;c[d >> 2] = c[g >> 2];c[g >> 2] = f;c[b >> 2] = c[e >> 2];vk(a, ((c[h >> 2] | 0) - (c[a >> 2] | 0) | 0) / 12 | 0);return;
    }function tk(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;b = c[a + 4 >> 2] | 0;d = a + 8 | 0;e = c[d >> 2] | 0;if ((e | 0) != (b | 0)) c[d >> 2] = e + (~(((e + -12 - b | 0) >>> 0) / 12 | 0) * 12 | 0);a = c[a >> 2] | 0;if (a | 0) sF(a);return;
    }function uk(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;e = c[a >> 2] | 0;d = e;b = e + ((((c[a + 8 >> 2] | 0) - d | 0) / 12 | 0) * 12 | 0) | 0;wk(a, e, b, e + ((((c[a + 4 >> 2] | 0) - d | 0) / 12 | 0) * 12 | 0) | 0, b);return;
    }function vk(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0;d = c[a >> 2] | 0;e = d + ((((c[a + 8 >> 2] | 0) - d | 0) / 12 | 0) * 12 | 0) | 0;wk(a, d, e, e, d + (b * 12 | 0) | 0);return;
    }function wk(a, b, c, d, e) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;e = e | 0;return;
    }function xk(a) {
      a = a | 0;Ak(a);return;
    }function yk(a) {
      a = a | 0;zk(a + 24 | 0);return;
    }function zk(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;d = c[a >> 2] | 0;e = d;if (d | 0) {
        a = a + 4 | 0;b = c[a >> 2] | 0;if ((b | 0) != (d | 0)) c[a >> 2] = b + (~(((b + -12 - e | 0) >>> 0) / 12 | 0) * 12 | 0);sF(d);
      }return;
    }function Ak(a) {
      a = a | 0;var b = 0;b = Di() | 0;Gi(a, 2, 5, b, Bk() | 0, 1);c[a + 24 >> 2] = 0;c[a + 28 >> 2] = 0;c[a + 32 >> 2] = 0;return;
    }function Bk() {
      return 1224;
    }function Ck(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0;e = l;l = l + 16 | 0;f = e + 8 | 0;g = e;h = Dk(a) | 0;a = c[h + 4 >> 2] | 0;c[g >> 2] = c[h >> 2];c[g + 4 >> 2] = a;c[f >> 2] = c[g >> 2];c[f + 4 >> 2] = c[g + 4 >> 2];Ek(b, f, d);l = e;return;
    }function Dk(a) {
      a = a | 0;return (c[(jk() | 0) + 24 >> 2] | 0) + (a * 12 | 0) | 0;
    }function Ek(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0;g = l;l = l + 16 | 0;f = g;e = c[b >> 2] | 0;b = c[b + 4 >> 2] | 0;a = a + (b >> 1) | 0;if (b & 1) e = c[(c[a >> 2] | 0) + e >> 2] | 0;Fk(f, d);d = Gk(f, d) | 0;yb[e & 31](a, d);Hk(f);l = g;return;
    }function Fk(a, b) {
      a = a | 0;b = b | 0;Ik(a, b);return;
    }function Gk(a, b) {
      a = a | 0;b = b | 0;return a | 0;
    }function Hk(a) {
      a = a | 0;yf(a);return;
    }function Ik(a, b) {
      a = a | 0;b = b | 0;Jk(a, b);return;
    }function Jk(a, b) {
      a = a | 0;b = b | 0;c[a >> 2] = b;return;
    }function Kk(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0;e = l;l = l + 16 | 0;f = e + 8 | 0;g = e;i = c[d >> 2] | 0;h = c[d + 4 >> 2] | 0;d = di(b) | 0;c[g >> 2] = i;c[g + 4 >> 2] = h;c[f >> 2] = c[g >> 2];c[f + 4 >> 2] = c[g + 4 >> 2];Lk(a, d, f, 0);l = e;return;
    }function Lk(a, b, d, e) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0;f = l;l = l + 32 | 0;g = f + 16 | 0;m = f + 8 | 0;i = f;k = c[d >> 2] | 0;j = c[d + 4 >> 2] | 0;h = c[a >> 2] | 0;a = Mk() | 0;c[m >> 2] = k;c[m + 4 >> 2] = j;c[g >> 2] = c[m >> 2];c[g + 4 >> 2] = c[m + 4 >> 2];d = Nk(g) | 0;c[i >> 2] = k;c[i + 4 >> 2] = j;c[g >> 2] = c[i >> 2];c[g + 4 >> 2] = c[i + 4 >> 2];ii(h, b, a, d, Ok(g, e) | 0, e);l = f;return;
    }function Mk() {
      var b = 0,
          d = 0;if (!(a[8560] | 0)) {
        _k(9228);Na(29, 9228, o | 0) | 0;d = 8560;c[d >> 2] = 1;c[d + 4 >> 2] = 0;
      }if (!(Ai(9228) | 0)) {
        b = 9228;d = b + 36 | 0;do {
          c[b >> 2] = 0;b = b + 4 | 0;
        } while ((b | 0) < (d | 0));_k(9228);
      }return 9228;
    }function Nk(a) {
      a = a | 0;return 0;
    }function Ok(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0;k = l;l = l + 48 | 0;e = k + 24 | 0;f = k + 16 | 0;g = k + 32 | 0;h = k;i = k + 8 | 0;m = c[a + 4 >> 2] | 0;c[h >> 2] = c[a >> 2];d = h + 4 | 0;c[d >> 2] = m;m = Mk() | 0;j = m + 24 | 0;c[i >> 2] = mi(b, 4) | 0;a = m + 28 | 0;if ((c[a >> 2] | 0) >>> 0 < (c[m + 32 >> 2] | 0) >>> 0) {
        Pk(g, j, 1);b = c[a >> 2] | 0;d = c[d >> 2] | 0;m = c[i >> 2] | 0;c[f >> 2] = c[h >> 2];c[f + 4 >> 2] = d;c[e >> 2] = c[f >> 2];c[e + 4 >> 2] = c[f + 4 >> 2];Qk(b, e, m);Rk(g);m = (c[a >> 2] | 0) + 12 | 0;c[a >> 2] = m;a = m;
      } else {
        Sk(j, h, i);a = c[a >> 2] | 0;
      }l = k;return ((a - (c[j >> 2] | 0) | 0) / 12 | 0) + -1 | 0;
    }function Pk(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;return;
    }function Qk(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0;e = c[b + 4 >> 2] | 0;c[a >> 2] = c[b >> 2];c[a + 4 >> 2] = e;c[a + 8 >> 2] = d;return;
    }function Rk(a) {
      a = a | 0;return;
    }function Sk(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0,
          n = 0,
          o = 0;k = l;l = l + 48 | 0;e = k + 32 | 0;h = k + 24 | 0;i = k;j = a + 4 | 0;f = (((c[j >> 2] | 0) - (c[a >> 2] | 0) | 0) / 12 | 0) + 1 | 0;g = Tk(a) | 0;if (g >>> 0 < f >>> 0) jF(a);m = c[a >> 2] | 0;o = ((c[a + 8 >> 2] | 0) - m | 0) / 12 | 0;n = o << 1;Uk(i, o >>> 0 < g >>> 1 >>> 0 ? n >>> 0 < f >>> 0 ? f : n : g, ((c[j >> 2] | 0) - m | 0) / 12 | 0, a + 8 | 0);j = i + 8 | 0;g = c[j >> 2] | 0;f = c[b + 4 >> 2] | 0;d = c[d >> 2] | 0;c[h >> 2] = c[b >> 2];c[h + 4 >> 2] = f;c[e >> 2] = c[h >> 2];c[e + 4 >> 2] = c[h + 4 >> 2];Qk(g, e, d);c[j >> 2] = (c[j >> 2] | 0) + 12;Vk(a, i);Wk(i);l = k;return;
    }function Tk(a) {
      a = a | 0;return 357913941;
    }function Uk(a, b, d, e) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;var f = 0;c[a + 12 >> 2] = 0;c[a + 16 >> 2] = e;do if (b) {
        if (b >>> 0 > 357913941) Ma(5765, 5802, 1734, 5872);else {
          f = qF(b * 12 | 0) | 0;break;
        }
      } else f = 0; while (0);c[a >> 2] = f;e = f + (d * 12 | 0) | 0;c[a + 8 >> 2] = e;c[a + 4 >> 2] = e;c[a + 12 >> 2] = f + (b * 12 | 0);return;
    }function Vk(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0;Xk(a);e = c[a >> 2] | 0;h = a + 4 | 0;g = b + 4 | 0;f = (c[h >> 2] | 0) - e | 0;d = (c[g >> 2] | 0) + (((f | 0) / -12 | 0) * 12 | 0) | 0;c[g >> 2] = d;if ((f | 0) > 0) {
        AF(d | 0, e | 0, f | 0) | 0;e = g;d = c[g >> 2] | 0;
      } else e = g;g = c[a >> 2] | 0;c[a >> 2] = d;c[e >> 2] = g;d = b + 8 | 0;g = c[h >> 2] | 0;c[h >> 2] = c[d >> 2];c[d >> 2] = g;d = a + 8 | 0;g = b + 12 | 0;f = c[d >> 2] | 0;c[d >> 2] = c[g >> 2];c[g >> 2] = f;c[b >> 2] = c[e >> 2];Yk(a, ((c[h >> 2] | 0) - (c[a >> 2] | 0) | 0) / 12 | 0);return;
    }function Wk(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;b = c[a + 4 >> 2] | 0;d = a + 8 | 0;e = c[d >> 2] | 0;if ((e | 0) != (b | 0)) c[d >> 2] = e + (~(((e + -12 - b | 0) >>> 0) / 12 | 0) * 12 | 0);a = c[a >> 2] | 0;if (a | 0) sF(a);return;
    }function Xk(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;e = c[a >> 2] | 0;d = e;b = e + ((((c[a + 8 >> 2] | 0) - d | 0) / 12 | 0) * 12 | 0) | 0;Zk(a, e, b, e + ((((c[a + 4 >> 2] | 0) - d | 0) / 12 | 0) * 12 | 0) | 0, b);return;
    }function Yk(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0;d = c[a >> 2] | 0;e = d + ((((c[a + 8 >> 2] | 0) - d | 0) / 12 | 0) * 12 | 0) | 0;Zk(a, d, e, e, d + (b * 12 | 0) | 0);return;
    }function Zk(a, b, c, d, e) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;e = e | 0;return;
    }function _k(a) {
      a = a | 0;bl(a);return;
    }function $k(a) {
      a = a | 0;al(a + 24 | 0);return;
    }function al(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;d = c[a >> 2] | 0;e = d;if (d | 0) {
        a = a + 4 | 0;b = c[a >> 2] | 0;if ((b | 0) != (d | 0)) c[a >> 2] = b + (~(((b + -12 - e | 0) >>> 0) / 12 | 0) * 12 | 0);sF(d);
      }return;
    }function bl(a) {
      a = a | 0;var b = 0;b = Di() | 0;Gi(a, 2, 5, b, cl() | 0, 1);c[a + 24 >> 2] = 0;c[a + 28 >> 2] = 0;c[a + 32 >> 2] = 0;return;
    }function cl() {
      return 1240;
    }function dl(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0;e = l;l = l + 16 | 0;f = e + 8 | 0;g = e;h = el(a) | 0;a = c[h + 4 >> 2] | 0;c[g >> 2] = c[h >> 2];c[g + 4 >> 2] = a;c[f >> 2] = c[g >> 2];c[f + 4 >> 2] = c[g + 4 >> 2];d = fl(b, f, d) | 0;l = e;return d | 0;
    }function el(a) {
      a = a | 0;return (c[(Mk() | 0) + 24 >> 2] | 0) + (a * 12 | 0) | 0;
    }function fl(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0;g = l;l = l + 16 | 0;f = g;e = c[b >> 2] | 0;b = c[b + 4 >> 2] | 0;a = a + (b >> 1) | 0;if (b & 1) e = c[(c[a >> 2] | 0) + e >> 2] | 0;gl(f, d);f = hl(f, d) | 0;f = il(Gb[e & 15](a, f) | 0) | 0;l = g;return f | 0;
    }function gl(a, b) {
      a = a | 0;b = b | 0;return;
    }function hl(a, b) {
      a = a | 0;b = b | 0;return jl(b) | 0;
    }function il(a) {
      a = a | 0;return a | 0;
    }function jl(a) {
      a = a | 0;return a | 0;
    }function kl(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0;e = l;l = l + 16 | 0;f = e + 8 | 0;g = e;i = c[d >> 2] | 0;h = c[d + 4 >> 2] | 0;d = di(b) | 0;c[g >> 2] = i;c[g + 4 >> 2] = h;c[f >> 2] = c[g >> 2];c[f + 4 >> 2] = c[g + 4 >> 2];ll(a, d, f, 0);l = e;return;
    }function ll(a, b, d, e) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0;f = l;l = l + 32 | 0;g = f + 16 | 0;m = f + 8 | 0;i = f;k = c[d >> 2] | 0;j = c[d + 4 >> 2] | 0;h = c[a >> 2] | 0;a = ml() | 0;c[m >> 2] = k;c[m + 4 >> 2] = j;c[g >> 2] = c[m >> 2];c[g + 4 >> 2] = c[m + 4 >> 2];d = nl(g) | 0;c[i >> 2] = k;c[i + 4 >> 2] = j;c[g >> 2] = c[i >> 2];c[g + 4 >> 2] = c[i + 4 >> 2];ii(h, b, a, d, ol(g, e) | 0, e);l = f;return;
    }function ml() {
      var b = 0,
          d = 0;if (!(a[8568] | 0)) {
        Al(9264);Na(30, 9264, o | 0) | 0;d = 8568;c[d >> 2] = 1;c[d + 4 >> 2] = 0;
      }if (!(Ai(9264) | 0)) {
        b = 9264;d = b + 36 | 0;do {
          c[b >> 2] = 0;b = b + 4 | 0;
        } while ((b | 0) < (d | 0));Al(9264);
      }return 9264;
    }function nl(a) {
      a = a | 0;return 0;
    }function ol(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0;k = l;l = l + 48 | 0;e = k + 24 | 0;f = k + 16 | 0;g = k + 32 | 0;h = k;i = k + 8 | 0;m = c[a + 4 >> 2] | 0;c[h >> 2] = c[a >> 2];d = h + 4 | 0;c[d >> 2] = m;m = ml() | 0;j = m + 24 | 0;c[i >> 2] = mi(b, 4) | 0;a = m + 28 | 0;if ((c[a >> 2] | 0) >>> 0 < (c[m + 32 >> 2] | 0) >>> 0) {
        pl(g, j, 1);b = c[a >> 2] | 0;d = c[d >> 2] | 0;m = c[i >> 2] | 0;c[f >> 2] = c[h >> 2];c[f + 4 >> 2] = d;c[e >> 2] = c[f >> 2];c[e + 4 >> 2] = c[f + 4 >> 2];ql(b, e, m);rl(g);m = (c[a >> 2] | 0) + 12 | 0;c[a >> 2] = m;a = m;
      } else {
        sl(j, h, i);a = c[a >> 2] | 0;
      }l = k;return ((a - (c[j >> 2] | 0) | 0) / 12 | 0) + -1 | 0;
    }function pl(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;return;
    }function ql(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0;e = c[b + 4 >> 2] | 0;c[a >> 2] = c[b >> 2];c[a + 4 >> 2] = e;c[a + 8 >> 2] = d;return;
    }function rl(a) {
      a = a | 0;return;
    }function sl(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0,
          n = 0,
          o = 0;k = l;l = l + 48 | 0;e = k + 32 | 0;h = k + 24 | 0;i = k;j = a + 4 | 0;f = (((c[j >> 2] | 0) - (c[a >> 2] | 0) | 0) / 12 | 0) + 1 | 0;g = tl(a) | 0;if (g >>> 0 < f >>> 0) jF(a);m = c[a >> 2] | 0;o = ((c[a + 8 >> 2] | 0) - m | 0) / 12 | 0;n = o << 1;ul(i, o >>> 0 < g >>> 1 >>> 0 ? n >>> 0 < f >>> 0 ? f : n : g, ((c[j >> 2] | 0) - m | 0) / 12 | 0, a + 8 | 0);j = i + 8 | 0;g = c[j >> 2] | 0;f = c[b + 4 >> 2] | 0;d = c[d >> 2] | 0;c[h >> 2] = c[b >> 2];c[h + 4 >> 2] = f;c[e >> 2] = c[h >> 2];c[e + 4 >> 2] = c[h + 4 >> 2];ql(g, e, d);c[j >> 2] = (c[j >> 2] | 0) + 12;vl(a, i);wl(i);l = k;return;
    }function tl(a) {
      a = a | 0;return 357913941;
    }function ul(a, b, d, e) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;var f = 0;c[a + 12 >> 2] = 0;c[a + 16 >> 2] = e;do if (b) {
        if (b >>> 0 > 357913941) Ma(5765, 5802, 1734, 5872);else {
          f = qF(b * 12 | 0) | 0;break;
        }
      } else f = 0; while (0);c[a >> 2] = f;e = f + (d * 12 | 0) | 0;c[a + 8 >> 2] = e;c[a + 4 >> 2] = e;c[a + 12 >> 2] = f + (b * 12 | 0);return;
    }function vl(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0;xl(a);e = c[a >> 2] | 0;h = a + 4 | 0;g = b + 4 | 0;f = (c[h >> 2] | 0) - e | 0;d = (c[g >> 2] | 0) + (((f | 0) / -12 | 0) * 12 | 0) | 0;c[g >> 2] = d;if ((f | 0) > 0) {
        AF(d | 0, e | 0, f | 0) | 0;e = g;d = c[g >> 2] | 0;
      } else e = g;g = c[a >> 2] | 0;c[a >> 2] = d;c[e >> 2] = g;d = b + 8 | 0;g = c[h >> 2] | 0;c[h >> 2] = c[d >> 2];c[d >> 2] = g;d = a + 8 | 0;g = b + 12 | 0;f = c[d >> 2] | 0;c[d >> 2] = c[g >> 2];c[g >> 2] = f;c[b >> 2] = c[e >> 2];yl(a, ((c[h >> 2] | 0) - (c[a >> 2] | 0) | 0) / 12 | 0);return;
    }function wl(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;b = c[a + 4 >> 2] | 0;d = a + 8 | 0;e = c[d >> 2] | 0;if ((e | 0) != (b | 0)) c[d >> 2] = e + (~(((e + -12 - b | 0) >>> 0) / 12 | 0) * 12 | 0);a = c[a >> 2] | 0;if (a | 0) sF(a);return;
    }function xl(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;e = c[a >> 2] | 0;d = e;b = e + ((((c[a + 8 >> 2] | 0) - d | 0) / 12 | 0) * 12 | 0) | 0;zl(a, e, b, e + ((((c[a + 4 >> 2] | 0) - d | 0) / 12 | 0) * 12 | 0) | 0, b);return;
    }function yl(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0;d = c[a >> 2] | 0;e = d + ((((c[a + 8 >> 2] | 0) - d | 0) / 12 | 0) * 12 | 0) | 0;zl(a, d, e, e, d + (b * 12 | 0) | 0);return;
    }function zl(a, b, c, d, e) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;e = e | 0;return;
    }function Al(a) {
      a = a | 0;Dl(a);return;
    }function Bl(a) {
      a = a | 0;Cl(a + 24 | 0);return;
    }function Cl(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;d = c[a >> 2] | 0;e = d;if (d | 0) {
        a = a + 4 | 0;b = c[a >> 2] | 0;if ((b | 0) != (d | 0)) c[a >> 2] = b + (~(((b + -12 - e | 0) >>> 0) / 12 | 0) * 12 | 0);sF(d);
      }return;
    }function Dl(a) {
      a = a | 0;var b = 0;b = Di() | 0;Gi(a, 2, 6, b, El() | 0, 0);c[a + 24 >> 2] = 0;c[a + 28 >> 2] = 0;c[a + 32 >> 2] = 0;return;
    }function El() {
      return 1256;
    }function Fl(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0;d = l;l = l + 16 | 0;e = d + 8 | 0;f = d;g = Gl(a) | 0;a = c[g + 4 >> 2] | 0;c[f >> 2] = c[g >> 2];c[f + 4 >> 2] = a;c[e >> 2] = c[f >> 2];c[e + 4 >> 2] = c[f + 4 >> 2];b = Hl(b, e) | 0;l = d;return b | 0;
    }function Gl(a) {
      a = a | 0;return (c[(ml() | 0) + 24 >> 2] | 0) + (a * 12 | 0) | 0;
    }function Hl(a, b) {
      a = a | 0;b = b | 0;var d = 0;d = c[b >> 2] | 0;b = c[b + 4 >> 2] | 0;a = a + (b >> 1) | 0;if (b & 1) d = c[(c[a >> 2] | 0) + d >> 2] | 0;return il(zb[d & 31](a) | 0) | 0;
    }function Il(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0;e = l;l = l + 16 | 0;f = e + 8 | 0;g = e;i = c[d >> 2] | 0;h = c[d + 4 >> 2] | 0;d = di(b) | 0;c[g >> 2] = i;c[g + 4 >> 2] = h;c[f >> 2] = c[g >> 2];c[f + 4 >> 2] = c[g + 4 >> 2];Jl(a, d, f, 1);l = e;return;
    }function Jl(a, b, d, e) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0;f = l;l = l + 32 | 0;g = f + 16 | 0;m = f + 8 | 0;i = f;k = c[d >> 2] | 0;j = c[d + 4 >> 2] | 0;h = c[a >> 2] | 0;a = Kl() | 0;c[m >> 2] = k;c[m + 4 >> 2] = j;c[g >> 2] = c[m >> 2];c[g + 4 >> 2] = c[m + 4 >> 2];d = Ll(g) | 0;c[i >> 2] = k;c[i + 4 >> 2] = j;c[g >> 2] = c[i >> 2];c[g + 4 >> 2] = c[i + 4 >> 2];ii(h, b, a, d, Ml(g, e) | 0, e);l = f;return;
    }function Kl() {
      var b = 0,
          d = 0;if (!(a[8576] | 0)) {
        Yl(9300);Na(31, 9300, o | 0) | 0;d = 8576;c[d >> 2] = 1;c[d + 4 >> 2] = 0;
      }if (!(Ai(9300) | 0)) {
        b = 9300;d = b + 36 | 0;do {
          c[b >> 2] = 0;b = b + 4 | 0;
        } while ((b | 0) < (d | 0));Yl(9300);
      }return 9300;
    }function Ll(a) {
      a = a | 0;return 0;
    }function Ml(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0;k = l;l = l + 48 | 0;e = k + 24 | 0;f = k + 16 | 0;g = k + 32 | 0;h = k;i = k + 8 | 0;m = c[a + 4 >> 2] | 0;c[h >> 2] = c[a >> 2];d = h + 4 | 0;c[d >> 2] = m;m = Kl() | 0;j = m + 24 | 0;c[i >> 2] = mi(b, 4) | 0;a = m + 28 | 0;if ((c[a >> 2] | 0) >>> 0 < (c[m + 32 >> 2] | 0) >>> 0) {
        Nl(g, j, 1);b = c[a >> 2] | 0;d = c[d >> 2] | 0;m = c[i >> 2] | 0;c[f >> 2] = c[h >> 2];c[f + 4 >> 2] = d;c[e >> 2] = c[f >> 2];c[e + 4 >> 2] = c[f + 4 >> 2];Ol(b, e, m);Pl(g);m = (c[a >> 2] | 0) + 12 | 0;c[a >> 2] = m;a = m;
      } else {
        Ql(j, h, i);a = c[a >> 2] | 0;
      }l = k;return ((a - (c[j >> 2] | 0) | 0) / 12 | 0) + -1 | 0;
    }function Nl(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;return;
    }function Ol(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0;e = c[b + 4 >> 2] | 0;c[a >> 2] = c[b >> 2];c[a + 4 >> 2] = e;c[a + 8 >> 2] = d;return;
    }function Pl(a) {
      a = a | 0;return;
    }function Ql(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0,
          n = 0,
          o = 0;k = l;l = l + 48 | 0;e = k + 32 | 0;h = k + 24 | 0;i = k;j = a + 4 | 0;f = (((c[j >> 2] | 0) - (c[a >> 2] | 0) | 0) / 12 | 0) + 1 | 0;g = Rl(a) | 0;if (g >>> 0 < f >>> 0) jF(a);m = c[a >> 2] | 0;o = ((c[a + 8 >> 2] | 0) - m | 0) / 12 | 0;n = o << 1;Sl(i, o >>> 0 < g >>> 1 >>> 0 ? n >>> 0 < f >>> 0 ? f : n : g, ((c[j >> 2] | 0) - m | 0) / 12 | 0, a + 8 | 0);j = i + 8 | 0;g = c[j >> 2] | 0;f = c[b + 4 >> 2] | 0;d = c[d >> 2] | 0;c[h >> 2] = c[b >> 2];c[h + 4 >> 2] = f;c[e >> 2] = c[h >> 2];c[e + 4 >> 2] = c[h + 4 >> 2];Ol(g, e, d);c[j >> 2] = (c[j >> 2] | 0) + 12;Tl(a, i);Ul(i);l = k;return;
    }function Rl(a) {
      a = a | 0;return 357913941;
    }function Sl(a, b, d, e) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;var f = 0;c[a + 12 >> 2] = 0;c[a + 16 >> 2] = e;do if (b) {
        if (b >>> 0 > 357913941) Ma(5765, 5802, 1734, 5872);else {
          f = qF(b * 12 | 0) | 0;break;
        }
      } else f = 0; while (0);c[a >> 2] = f;e = f + (d * 12 | 0) | 0;c[a + 8 >> 2] = e;c[a + 4 >> 2] = e;c[a + 12 >> 2] = f + (b * 12 | 0);return;
    }function Tl(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0;Vl(a);e = c[a >> 2] | 0;h = a + 4 | 0;g = b + 4 | 0;f = (c[h >> 2] | 0) - e | 0;d = (c[g >> 2] | 0) + (((f | 0) / -12 | 0) * 12 | 0) | 0;c[g >> 2] = d;if ((f | 0) > 0) {
        AF(d | 0, e | 0, f | 0) | 0;e = g;d = c[g >> 2] | 0;
      } else e = g;g = c[a >> 2] | 0;c[a >> 2] = d;c[e >> 2] = g;d = b + 8 | 0;g = c[h >> 2] | 0;c[h >> 2] = c[d >> 2];c[d >> 2] = g;d = a + 8 | 0;g = b + 12 | 0;f = c[d >> 2] | 0;c[d >> 2] = c[g >> 2];c[g >> 2] = f;c[b >> 2] = c[e >> 2];Wl(a, ((c[h >> 2] | 0) - (c[a >> 2] | 0) | 0) / 12 | 0);return;
    }function Ul(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;b = c[a + 4 >> 2] | 0;d = a + 8 | 0;e = c[d >> 2] | 0;if ((e | 0) != (b | 0)) c[d >> 2] = e + (~(((e + -12 - b | 0) >>> 0) / 12 | 0) * 12 | 0);a = c[a >> 2] | 0;if (a | 0) sF(a);return;
    }function Vl(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;e = c[a >> 2] | 0;d = e;b = e + ((((c[a + 8 >> 2] | 0) - d | 0) / 12 | 0) * 12 | 0) | 0;Xl(a, e, b, e + ((((c[a + 4 >> 2] | 0) - d | 0) / 12 | 0) * 12 | 0) | 0, b);return;
    }function Wl(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0;d = c[a >> 2] | 0;e = d + ((((c[a + 8 >> 2] | 0) - d | 0) / 12 | 0) * 12 | 0) | 0;Xl(a, d, e, e, d + (b * 12 | 0) | 0);return;
    }function Xl(a, b, c, d, e) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;e = e | 0;return;
    }function Yl(a) {
      a = a | 0;$l(a);return;
    }function Zl(a) {
      a = a | 0;_l(a + 24 | 0);return;
    }function _l(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;d = c[a >> 2] | 0;e = d;if (d | 0) {
        a = a + 4 | 0;b = c[a >> 2] | 0;if ((b | 0) != (d | 0)) c[a >> 2] = b + (~(((b + -12 - e | 0) >>> 0) / 12 | 0) * 12 | 0);sF(d);
      }return;
    }function $l(a) {
      a = a | 0;var b = 0;b = Di() | 0;Gi(a, 2, 7, b, am() | 0, 0);c[a + 24 >> 2] = 0;c[a + 28 >> 2] = 0;c[a + 32 >> 2] = 0;return;
    }function am() {
      return 1260;
    }function bm(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0;d = l;l = l + 16 | 0;e = d + 8 | 0;f = d;g = cm(a) | 0;a = c[g + 4 >> 2] | 0;c[f >> 2] = c[g >> 2];c[f + 4 >> 2] = a;c[e >> 2] = c[f >> 2];c[e + 4 >> 2] = c[f + 4 >> 2];b = dm(b, e) | 0;l = d;return b | 0;
    }function cm(a) {
      a = a | 0;return (c[(Kl() | 0) + 24 >> 2] | 0) + (a * 12 | 0) | 0;
    }function dm(a, b) {
      a = a | 0;b = b | 0;var d = 0;d = c[b >> 2] | 0;b = c[b + 4 >> 2] | 0;a = a + (b >> 1) | 0;if (b & 1) d = c[(c[a >> 2] | 0) + d >> 2] | 0;return em(zb[d & 31](a) | 0) | 0;
    }function em(a) {
      a = a | 0;return a | 0;
    }function fm(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0;e = l;l = l + 16 | 0;f = e + 8 | 0;g = e;i = c[d >> 2] | 0;h = c[d + 4 >> 2] | 0;d = di(b) | 0;c[g >> 2] = i;c[g + 4 >> 2] = h;c[f >> 2] = c[g >> 2];c[f + 4 >> 2] = c[g + 4 >> 2];gm(a, d, f, 0);l = e;return;
    }function gm(a, b, d, e) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0;f = l;l = l + 32 | 0;g = f + 16 | 0;m = f + 8 | 0;i = f;k = c[d >> 2] | 0;j = c[d + 4 >> 2] | 0;h = c[a >> 2] | 0;a = hm() | 0;c[m >> 2] = k;c[m + 4 >> 2] = j;c[g >> 2] = c[m >> 2];c[g + 4 >> 2] = c[m + 4 >> 2];d = im(g) | 0;c[i >> 2] = k;c[i + 4 >> 2] = j;c[g >> 2] = c[i >> 2];c[g + 4 >> 2] = c[i + 4 >> 2];ii(h, b, a, d, jm(g, e) | 0, e);l = f;return;
    }function hm() {
      var b = 0,
          d = 0;if (!(a[8584] | 0)) {
        vm(9336);Na(32, 9336, o | 0) | 0;d = 8584;c[d >> 2] = 1;c[d + 4 >> 2] = 0;
      }if (!(Ai(9336) | 0)) {
        b = 9336;d = b + 36 | 0;do {
          c[b >> 2] = 0;b = b + 4 | 0;
        } while ((b | 0) < (d | 0));vm(9336);
      }return 9336;
    }function im(a) {
      a = a | 0;return 0;
    }function jm(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0;k = l;l = l + 48 | 0;e = k + 24 | 0;f = k + 16 | 0;g = k + 32 | 0;h = k;i = k + 8 | 0;m = c[a + 4 >> 2] | 0;c[h >> 2] = c[a >> 2];d = h + 4 | 0;c[d >> 2] = m;m = hm() | 0;j = m + 24 | 0;c[i >> 2] = mi(b, 4) | 0;a = m + 28 | 0;if ((c[a >> 2] | 0) >>> 0 < (c[m + 32 >> 2] | 0) >>> 0) {
        km(g, j, 1);b = c[a >> 2] | 0;d = c[d >> 2] | 0;m = c[i >> 2] | 0;c[f >> 2] = c[h >> 2];c[f + 4 >> 2] = d;c[e >> 2] = c[f >> 2];c[e + 4 >> 2] = c[f + 4 >> 2];lm(b, e, m);mm(g);m = (c[a >> 2] | 0) + 12 | 0;c[a >> 2] = m;a = m;
      } else {
        nm(j, h, i);a = c[a >> 2] | 0;
      }l = k;return ((a - (c[j >> 2] | 0) | 0) / 12 | 0) + -1 | 0;
    }function km(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;return;
    }function lm(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0;e = c[b + 4 >> 2] | 0;c[a >> 2] = c[b >> 2];c[a + 4 >> 2] = e;c[a + 8 >> 2] = d;return;
    }function mm(a) {
      a = a | 0;return;
    }function nm(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0,
          n = 0,
          o = 0;k = l;l = l + 48 | 0;e = k + 32 | 0;h = k + 24 | 0;i = k;j = a + 4 | 0;f = (((c[j >> 2] | 0) - (c[a >> 2] | 0) | 0) / 12 | 0) + 1 | 0;g = om(a) | 0;if (g >>> 0 < f >>> 0) jF(a);m = c[a >> 2] | 0;o = ((c[a + 8 >> 2] | 0) - m | 0) / 12 | 0;n = o << 1;pm(i, o >>> 0 < g >>> 1 >>> 0 ? n >>> 0 < f >>> 0 ? f : n : g, ((c[j >> 2] | 0) - m | 0) / 12 | 0, a + 8 | 0);j = i + 8 | 0;g = c[j >> 2] | 0;f = c[b + 4 >> 2] | 0;d = c[d >> 2] | 0;c[h >> 2] = c[b >> 2];c[h + 4 >> 2] = f;c[e >> 2] = c[h >> 2];c[e + 4 >> 2] = c[h + 4 >> 2];lm(g, e, d);c[j >> 2] = (c[j >> 2] | 0) + 12;qm(a, i);rm(i);l = k;return;
    }function om(a) {
      a = a | 0;return 357913941;
    }function pm(a, b, d, e) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;var f = 0;c[a + 12 >> 2] = 0;c[a + 16 >> 2] = e;do if (b) {
        if (b >>> 0 > 357913941) Ma(5765, 5802, 1734, 5872);else {
          f = qF(b * 12 | 0) | 0;break;
        }
      } else f = 0; while (0);c[a >> 2] = f;e = f + (d * 12 | 0) | 0;c[a + 8 >> 2] = e;c[a + 4 >> 2] = e;c[a + 12 >> 2] = f + (b * 12 | 0);return;
    }function qm(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0;sm(a);e = c[a >> 2] | 0;h = a + 4 | 0;g = b + 4 | 0;f = (c[h >> 2] | 0) - e | 0;d = (c[g >> 2] | 0) + (((f | 0) / -12 | 0) * 12 | 0) | 0;c[g >> 2] = d;if ((f | 0) > 0) {
        AF(d | 0, e | 0, f | 0) | 0;e = g;d = c[g >> 2] | 0;
      } else e = g;g = c[a >> 2] | 0;c[a >> 2] = d;c[e >> 2] = g;d = b + 8 | 0;g = c[h >> 2] | 0;c[h >> 2] = c[d >> 2];c[d >> 2] = g;d = a + 8 | 0;g = b + 12 | 0;f = c[d >> 2] | 0;c[d >> 2] = c[g >> 2];c[g >> 2] = f;c[b >> 2] = c[e >> 2];tm(a, ((c[h >> 2] | 0) - (c[a >> 2] | 0) | 0) / 12 | 0);return;
    }function rm(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;b = c[a + 4 >> 2] | 0;d = a + 8 | 0;e = c[d >> 2] | 0;if ((e | 0) != (b | 0)) c[d >> 2] = e + (~(((e + -12 - b | 0) >>> 0) / 12 | 0) * 12 | 0);a = c[a >> 2] | 0;if (a | 0) sF(a);return;
    }function sm(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;e = c[a >> 2] | 0;d = e;b = e + ((((c[a + 8 >> 2] | 0) - d | 0) / 12 | 0) * 12 | 0) | 0;um(a, e, b, e + ((((c[a + 4 >> 2] | 0) - d | 0) / 12 | 0) * 12 | 0) | 0, b);return;
    }function tm(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0;d = c[a >> 2] | 0;e = d + ((((c[a + 8 >> 2] | 0) - d | 0) / 12 | 0) * 12 | 0) | 0;um(a, d, e, e, d + (b * 12 | 0) | 0);return;
    }function um(a, b, c, d, e) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;e = e | 0;return;
    }function vm(a) {
      a = a | 0;ym(a);return;
    }function wm(a) {
      a = a | 0;xm(a + 24 | 0);return;
    }function xm(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;d = c[a >> 2] | 0;e = d;if (d | 0) {
        a = a + 4 | 0;b = c[a >> 2] | 0;if ((b | 0) != (d | 0)) c[a >> 2] = b + (~(((b + -12 - e | 0) >>> 0) / 12 | 0) * 12 | 0);sF(d);
      }return;
    }function ym(a) {
      a = a | 0;var b = 0;b = Di() | 0;Gi(a, 2, 6, b, zm() | 0, 1);c[a + 24 >> 2] = 0;c[a + 28 >> 2] = 0;c[a + 32 >> 2] = 0;return;
    }function zm() {
      return 1264;
    }function Am(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0;e = l;l = l + 16 | 0;f = e + 8 | 0;g = e;h = Bm(a) | 0;a = c[h + 4 >> 2] | 0;c[g >> 2] = c[h >> 2];c[g + 4 >> 2] = a;c[f >> 2] = c[g >> 2];c[f + 4 >> 2] = c[g + 4 >> 2];Cm(b, f, d);l = e;return;
    }function Bm(a) {
      a = a | 0;return (c[(hm() | 0) + 24 >> 2] | 0) + (a * 12 | 0) | 0;
    }function Cm(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0;g = l;l = l + 16 | 0;f = g;e = c[b >> 2] | 0;b = c[b + 4 >> 2] | 0;a = a + (b >> 1) | 0;if (b & 1) e = c[(c[a >> 2] | 0) + e >> 2] | 0;Dm(f, d);f = Em(f, d) | 0;yb[e & 31](a, f);l = g;return;
    }function Dm(a, b) {
      a = a | 0;b = b | 0;return;
    }function Em(a, b) {
      a = a | 0;b = b | 0;return Fm(b) | 0;
    }function Fm(a) {
      a = a | 0;return a | 0;
    }function Gm(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0;e = l;l = l + 16 | 0;f = e + 8 | 0;g = e;i = c[d >> 2] | 0;h = c[d + 4 >> 2] | 0;d = di(b) | 0;c[g >> 2] = i;c[g + 4 >> 2] = h;c[f >> 2] = c[g >> 2];c[f + 4 >> 2] = c[g + 4 >> 2];Hm(a, d, f, 0);l = e;return;
    }function Hm(a, b, d, e) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0;f = l;l = l + 32 | 0;g = f + 16 | 0;m = f + 8 | 0;i = f;k = c[d >> 2] | 0;j = c[d + 4 >> 2] | 0;h = c[a >> 2] | 0;a = Im() | 0;c[m >> 2] = k;c[m + 4 >> 2] = j;c[g >> 2] = c[m >> 2];c[g + 4 >> 2] = c[m + 4 >> 2];d = Jm(g) | 0;c[i >> 2] = k;c[i + 4 >> 2] = j;c[g >> 2] = c[i >> 2];c[g + 4 >> 2] = c[i + 4 >> 2];ii(h, b, a, d, Km(g, e) | 0, e);l = f;return;
    }function Im() {
      var b = 0,
          d = 0;if (!(a[8592] | 0)) {
        Wm(9372);Na(33, 9372, o | 0) | 0;d = 8592;c[d >> 2] = 1;c[d + 4 >> 2] = 0;
      }if (!(Ai(9372) | 0)) {
        b = 9372;d = b + 36 | 0;do {
          c[b >> 2] = 0;b = b + 4 | 0;
        } while ((b | 0) < (d | 0));Wm(9372);
      }return 9372;
    }function Jm(a) {
      a = a | 0;return 0;
    }function Km(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0;k = l;l = l + 48 | 0;e = k + 24 | 0;f = k + 16 | 0;g = k + 32 | 0;h = k;i = k + 8 | 0;m = c[a + 4 >> 2] | 0;c[h >> 2] = c[a >> 2];d = h + 4 | 0;c[d >> 2] = m;m = Im() | 0;j = m + 24 | 0;c[i >> 2] = mi(b, 4) | 0;a = m + 28 | 0;if ((c[a >> 2] | 0) >>> 0 < (c[m + 32 >> 2] | 0) >>> 0) {
        Lm(g, j, 1);b = c[a >> 2] | 0;d = c[d >> 2] | 0;m = c[i >> 2] | 0;c[f >> 2] = c[h >> 2];c[f + 4 >> 2] = d;c[e >> 2] = c[f >> 2];c[e + 4 >> 2] = c[f + 4 >> 2];Mm(b, e, m);Nm(g);m = (c[a >> 2] | 0) + 12 | 0;c[a >> 2] = m;a = m;
      } else {
        Om(j, h, i);a = c[a >> 2] | 0;
      }l = k;return ((a - (c[j >> 2] | 0) | 0) / 12 | 0) + -1 | 0;
    }function Lm(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;return;
    }function Mm(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0;e = c[b + 4 >> 2] | 0;c[a >> 2] = c[b >> 2];c[a + 4 >> 2] = e;c[a + 8 >> 2] = d;return;
    }function Nm(a) {
      a = a | 0;return;
    }function Om(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0,
          n = 0,
          o = 0;k = l;l = l + 48 | 0;e = k + 32 | 0;h = k + 24 | 0;i = k;j = a + 4 | 0;f = (((c[j >> 2] | 0) - (c[a >> 2] | 0) | 0) / 12 | 0) + 1 | 0;g = Pm(a) | 0;if (g >>> 0 < f >>> 0) jF(a);m = c[a >> 2] | 0;o = ((c[a + 8 >> 2] | 0) - m | 0) / 12 | 0;n = o << 1;Qm(i, o >>> 0 < g >>> 1 >>> 0 ? n >>> 0 < f >>> 0 ? f : n : g, ((c[j >> 2] | 0) - m | 0) / 12 | 0, a + 8 | 0);j = i + 8 | 0;g = c[j >> 2] | 0;f = c[b + 4 >> 2] | 0;d = c[d >> 2] | 0;c[h >> 2] = c[b >> 2];c[h + 4 >> 2] = f;c[e >> 2] = c[h >> 2];c[e + 4 >> 2] = c[h + 4 >> 2];Mm(g, e, d);c[j >> 2] = (c[j >> 2] | 0) + 12;Rm(a, i);Sm(i);l = k;return;
    }function Pm(a) {
      a = a | 0;return 357913941;
    }function Qm(a, b, d, e) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;var f = 0;c[a + 12 >> 2] = 0;c[a + 16 >> 2] = e;do if (b) {
        if (b >>> 0 > 357913941) Ma(5765, 5802, 1734, 5872);else {
          f = qF(b * 12 | 0) | 0;break;
        }
      } else f = 0; while (0);c[a >> 2] = f;e = f + (d * 12 | 0) | 0;c[a + 8 >> 2] = e;c[a + 4 >> 2] = e;c[a + 12 >> 2] = f + (b * 12 | 0);return;
    }function Rm(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0;Tm(a);e = c[a >> 2] | 0;h = a + 4 | 0;g = b + 4 | 0;f = (c[h >> 2] | 0) - e | 0;d = (c[g >> 2] | 0) + (((f | 0) / -12 | 0) * 12 | 0) | 0;c[g >> 2] = d;if ((f | 0) > 0) {
        AF(d | 0, e | 0, f | 0) | 0;e = g;d = c[g >> 2] | 0;
      } else e = g;g = c[a >> 2] | 0;c[a >> 2] = d;c[e >> 2] = g;d = b + 8 | 0;g = c[h >> 2] | 0;c[h >> 2] = c[d >> 2];c[d >> 2] = g;d = a + 8 | 0;g = b + 12 | 0;f = c[d >> 2] | 0;c[d >> 2] = c[g >> 2];c[g >> 2] = f;c[b >> 2] = c[e >> 2];Um(a, ((c[h >> 2] | 0) - (c[a >> 2] | 0) | 0) / 12 | 0);return;
    }function Sm(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;b = c[a + 4 >> 2] | 0;d = a + 8 | 0;e = c[d >> 2] | 0;if ((e | 0) != (b | 0)) c[d >> 2] = e + (~(((e + -12 - b | 0) >>> 0) / 12 | 0) * 12 | 0);a = c[a >> 2] | 0;if (a | 0) sF(a);return;
    }function Tm(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;e = c[a >> 2] | 0;d = e;b = e + ((((c[a + 8 >> 2] | 0) - d | 0) / 12 | 0) * 12 | 0) | 0;Vm(a, e, b, e + ((((c[a + 4 >> 2] | 0) - d | 0) / 12 | 0) * 12 | 0) | 0, b);return;
    }function Um(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0;d = c[a >> 2] | 0;e = d + ((((c[a + 8 >> 2] | 0) - d | 0) / 12 | 0) * 12 | 0) | 0;Vm(a, d, e, e, d + (b * 12 | 0) | 0);return;
    }function Vm(a, b, c, d, e) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;e = e | 0;return;
    }function Wm(a) {
      a = a | 0;Zm(a);return;
    }function Xm(a) {
      a = a | 0;Ym(a + 24 | 0);return;
    }function Ym(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;d = c[a >> 2] | 0;e = d;if (d | 0) {
        a = a + 4 | 0;b = c[a >> 2] | 0;if ((b | 0) != (d | 0)) c[a >> 2] = b + (~(((b + -12 - e | 0) >>> 0) / 12 | 0) * 12 | 0);sF(d);
      }return;
    }function Zm(a) {
      a = a | 0;var b = 0;b = Di() | 0;Gi(a, 2, 1, b, _m() | 0, 2);c[a + 24 >> 2] = 0;c[a + 28 >> 2] = 0;c[a + 32 >> 2] = 0;return;
    }function _m() {
      return 1272;
    }function $m(a, b, d, e) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0,
          h = 0,
          i = 0;f = l;l = l + 16 | 0;g = f + 8 | 0;h = f;i = an(a) | 0;a = c[i + 4 >> 2] | 0;c[h >> 2] = c[i >> 2];c[h + 4 >> 2] = a;c[g >> 2] = c[h >> 2];c[g + 4 >> 2] = c[h + 4 >> 2];bn(b, g, d, e);l = f;return;
    }function an(a) {
      a = a | 0;return (c[(Im() | 0) + 24 >> 2] | 0) + (a * 12 | 0) | 0;
    }function bn(a, b, d, e) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0,
          h = 0,
          i = 0;i = l;l = l + 16 | 0;g = i + 1 | 0;h = i;f = c[b >> 2] | 0;b = c[b + 4 >> 2] | 0;a = a + (b >> 1) | 0;if (b & 1) f = c[(c[a >> 2] | 0) + f >> 2] | 0;Dm(g, d);g = Em(g, d) | 0;gl(h, e);h = hl(h, e) | 0;Ob[f & 15](a, g, h);l = i;return;
    }function cn(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0;e = l;l = l + 16 | 0;f = e + 8 | 0;g = e;i = c[d >> 2] | 0;h = c[d + 4 >> 2] | 0;d = di(b) | 0;c[g >> 2] = i;c[g + 4 >> 2] = h;c[f >> 2] = c[g >> 2];c[f + 4 >> 2] = c[g + 4 >> 2];dn(a, d, f, 1);l = e;return;
    }function dn(a, b, d, e) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0;f = l;l = l + 32 | 0;g = f + 16 | 0;m = f + 8 | 0;i = f;k = c[d >> 2] | 0;j = c[d + 4 >> 2] | 0;h = c[a >> 2] | 0;a = en() | 0;c[m >> 2] = k;c[m + 4 >> 2] = j;c[g >> 2] = c[m >> 2];c[g + 4 >> 2] = c[m + 4 >> 2];d = fn(g) | 0;c[i >> 2] = k;c[i + 4 >> 2] = j;c[g >> 2] = c[i >> 2];c[g + 4 >> 2] = c[i + 4 >> 2];ii(h, b, a, d, gn(g, e) | 0, e);l = f;return;
    }function en() {
      var b = 0,
          d = 0;if (!(a[8600] | 0)) {
        tn(9408);Na(34, 9408, o | 0) | 0;d = 8600;c[d >> 2] = 1;c[d + 4 >> 2] = 0;
      }if (!(Ai(9408) | 0)) {
        b = 9408;d = b + 36 | 0;do {
          c[b >> 2] = 0;b = b + 4 | 0;
        } while ((b | 0) < (d | 0));tn(9408);
      }return 9408;
    }function fn(a) {
      a = a | 0;return 0;
    }function gn(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0;k = l;l = l + 48 | 0;e = k + 24 | 0;f = k + 16 | 0;g = k + 32 | 0;h = k;i = k + 8 | 0;m = c[a + 4 >> 2] | 0;c[h >> 2] = c[a >> 2];d = h + 4 | 0;c[d >> 2] = m;m = en() | 0;j = m + 24 | 0;c[i >> 2] = mi(b, 4) | 0;a = m + 28 | 0;if ((c[a >> 2] | 0) >>> 0 < (c[m + 32 >> 2] | 0) >>> 0) {
        hn(g, j, 1);b = c[a >> 2] | 0;d = c[d >> 2] | 0;m = c[i >> 2] | 0;c[f >> 2] = c[h >> 2];c[f + 4 >> 2] = d;c[e >> 2] = c[f >> 2];c[e + 4 >> 2] = c[f + 4 >> 2];jn(b, e, m);kn(g);m = (c[a >> 2] | 0) + 12 | 0;c[a >> 2] = m;a = m;
      } else {
        ln(j, h, i);a = c[a >> 2] | 0;
      }l = k;return ((a - (c[j >> 2] | 0) | 0) / 12 | 0) + -1 | 0;
    }function hn(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;return;
    }function jn(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0;e = c[b + 4 >> 2] | 0;c[a >> 2] = c[b >> 2];c[a + 4 >> 2] = e;c[a + 8 >> 2] = d;return;
    }function kn(a) {
      a = a | 0;return;
    }function ln(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0,
          n = 0,
          o = 0;k = l;l = l + 48 | 0;e = k + 32 | 0;h = k + 24 | 0;i = k;j = a + 4 | 0;f = (((c[j >> 2] | 0) - (c[a >> 2] | 0) | 0) / 12 | 0) + 1 | 0;g = mn(a) | 0;if (g >>> 0 < f >>> 0) jF(a);m = c[a >> 2] | 0;o = ((c[a + 8 >> 2] | 0) - m | 0) / 12 | 0;n = o << 1;nn(i, o >>> 0 < g >>> 1 >>> 0 ? n >>> 0 < f >>> 0 ? f : n : g, ((c[j >> 2] | 0) - m | 0) / 12 | 0, a + 8 | 0);j = i + 8 | 0;g = c[j >> 2] | 0;f = c[b + 4 >> 2] | 0;d = c[d >> 2] | 0;c[h >> 2] = c[b >> 2];c[h + 4 >> 2] = f;c[e >> 2] = c[h >> 2];c[e + 4 >> 2] = c[h + 4 >> 2];jn(g, e, d);c[j >> 2] = (c[j >> 2] | 0) + 12;on(a, i);pn(i);l = k;return;
    }function mn(a) {
      a = a | 0;return 357913941;
    }function nn(a, b, d, e) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;var f = 0;c[a + 12 >> 2] = 0;c[a + 16 >> 2] = e;do if (b) {
        if (b >>> 0 > 357913941) Ma(5765, 5802, 1734, 5872);else {
          f = qF(b * 12 | 0) | 0;break;
        }
      } else f = 0; while (0);c[a >> 2] = f;e = f + (d * 12 | 0) | 0;c[a + 8 >> 2] = e;c[a + 4 >> 2] = e;c[a + 12 >> 2] = f + (b * 12 | 0);return;
    }function on(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0;qn(a);e = c[a >> 2] | 0;h = a + 4 | 0;g = b + 4 | 0;f = (c[h >> 2] | 0) - e | 0;d = (c[g >> 2] | 0) + (((f | 0) / -12 | 0) * 12 | 0) | 0;c[g >> 2] = d;if ((f | 0) > 0) {
        AF(d | 0, e | 0, f | 0) | 0;e = g;d = c[g >> 2] | 0;
      } else e = g;g = c[a >> 2] | 0;c[a >> 2] = d;c[e >> 2] = g;d = b + 8 | 0;g = c[h >> 2] | 0;c[h >> 2] = c[d >> 2];c[d >> 2] = g;d = a + 8 | 0;g = b + 12 | 0;f = c[d >> 2] | 0;c[d >> 2] = c[g >> 2];c[g >> 2] = f;c[b >> 2] = c[e >> 2];rn(a, ((c[h >> 2] | 0) - (c[a >> 2] | 0) | 0) / 12 | 0);return;
    }function pn(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;b = c[a + 4 >> 2] | 0;d = a + 8 | 0;e = c[d >> 2] | 0;if ((e | 0) != (b | 0)) c[d >> 2] = e + (~(((e + -12 - b | 0) >>> 0) / 12 | 0) * 12 | 0);a = c[a >> 2] | 0;if (a | 0) sF(a);return;
    }function qn(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;e = c[a >> 2] | 0;d = e;b = e + ((((c[a + 8 >> 2] | 0) - d | 0) / 12 | 0) * 12 | 0) | 0;sn(a, e, b, e + ((((c[a + 4 >> 2] | 0) - d | 0) / 12 | 0) * 12 | 0) | 0, b);return;
    }function rn(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0;d = c[a >> 2] | 0;e = d + ((((c[a + 8 >> 2] | 0) - d | 0) / 12 | 0) * 12 | 0) | 0;sn(a, d, e, e, d + (b * 12 | 0) | 0);return;
    }function sn(a, b, c, d, e) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;e = e | 0;return;
    }function tn(a) {
      a = a | 0;wn(a);return;
    }function un(a) {
      a = a | 0;vn(a + 24 | 0);return;
    }function vn(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;d = c[a >> 2] | 0;e = d;if (d | 0) {
        a = a + 4 | 0;b = c[a >> 2] | 0;if ((b | 0) != (d | 0)) c[a >> 2] = b + (~(((b + -12 - e | 0) >>> 0) / 12 | 0) * 12 | 0);sF(d);
      }return;
    }function wn(a) {
      a = a | 0;var b = 0;b = Di() | 0;Gi(a, 2, 1, b, xn() | 0, 1);c[a + 24 >> 2] = 0;c[a + 28 >> 2] = 0;c[a + 32 >> 2] = 0;return;
    }function xn() {
      return 1284;
    }function yn(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0.0,
          f = 0,
          g = 0,
          h = 0,
          i = 0;f = l;l = l + 16 | 0;g = f + 8 | 0;h = f;i = zn(a) | 0;a = c[i + 4 >> 2] | 0;c[h >> 2] = c[i >> 2];c[h + 4 >> 2] = a;c[g >> 2] = c[h >> 2];c[g + 4 >> 2] = c[h + 4 >> 2];e = +An(b, g, d);l = f;return +e;
    }function zn(a) {
      a = a | 0;return (c[(en() | 0) + 24 >> 2] | 0) + (a * 12 | 0) | 0;
    }function An(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0.0;g = l;l = l + 16 | 0;f = g;e = c[b >> 2] | 0;b = c[b + 4 >> 2] | 0;a = a + (b >> 1) | 0;if (b & 1) e = c[(c[a >> 2] | 0) + e >> 2] | 0;Gj(f, d);f = Hj(f, d) | 0;h = +fh(+Jb[e & 7](a, f));l = g;return +h;
    }function Bn(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0;e = l;l = l + 16 | 0;f = e + 8 | 0;g = e;i = c[d >> 2] | 0;h = c[d + 4 >> 2] | 0;d = di(b) | 0;c[g >> 2] = i;c[g + 4 >> 2] = h;c[f >> 2] = c[g >> 2];c[f + 4 >> 2] = c[g + 4 >> 2];Cn(a, d, f, 1);l = e;return;
    }function Cn(a, b, d, e) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0;f = l;l = l + 32 | 0;g = f + 16 | 0;m = f + 8 | 0;i = f;k = c[d >> 2] | 0;j = c[d + 4 >> 2] | 0;h = c[a >> 2] | 0;a = Dn() | 0;c[m >> 2] = k;c[m + 4 >> 2] = j;c[g >> 2] = c[m >> 2];c[g + 4 >> 2] = c[m + 4 >> 2];d = En(g) | 0;c[i >> 2] = k;c[i + 4 >> 2] = j;c[g >> 2] = c[i >> 2];c[g + 4 >> 2] = c[i + 4 >> 2];ii(h, b, a, d, Fn(g, e) | 0, e);l = f;return;
    }function Dn() {
      var b = 0,
          d = 0;if (!(a[8608] | 0)) {
        Rn(9444);Na(35, 9444, o | 0) | 0;d = 8608;c[d >> 2] = 1;c[d + 4 >> 2] = 0;
      }if (!(Ai(9444) | 0)) {
        b = 9444;d = b + 36 | 0;do {
          c[b >> 2] = 0;b = b + 4 | 0;
        } while ((b | 0) < (d | 0));Rn(9444);
      }return 9444;
    }function En(a) {
      a = a | 0;return 0;
    }function Fn(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0;k = l;l = l + 48 | 0;e = k + 24 | 0;f = k + 16 | 0;g = k + 32 | 0;h = k;i = k + 8 | 0;m = c[a + 4 >> 2] | 0;c[h >> 2] = c[a >> 2];d = h + 4 | 0;c[d >> 2] = m;m = Dn() | 0;j = m + 24 | 0;c[i >> 2] = mi(b, 4) | 0;a = m + 28 | 0;if ((c[a >> 2] | 0) >>> 0 < (c[m + 32 >> 2] | 0) >>> 0) {
        Gn(g, j, 1);b = c[a >> 2] | 0;d = c[d >> 2] | 0;m = c[i >> 2] | 0;c[f >> 2] = c[h >> 2];c[f + 4 >> 2] = d;c[e >> 2] = c[f >> 2];c[e + 4 >> 2] = c[f + 4 >> 2];Hn(b, e, m);In(g);m = (c[a >> 2] | 0) + 12 | 0;c[a >> 2] = m;a = m;
      } else {
        Jn(j, h, i);a = c[a >> 2] | 0;
      }l = k;return ((a - (c[j >> 2] | 0) | 0) / 12 | 0) + -1 | 0;
    }function Gn(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;return;
    }function Hn(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0;e = c[b + 4 >> 2] | 0;c[a >> 2] = c[b >> 2];c[a + 4 >> 2] = e;c[a + 8 >> 2] = d;return;
    }function In(a) {
      a = a | 0;return;
    }function Jn(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0,
          n = 0,
          o = 0;k = l;l = l + 48 | 0;e = k + 32 | 0;h = k + 24 | 0;i = k;j = a + 4 | 0;f = (((c[j >> 2] | 0) - (c[a >> 2] | 0) | 0) / 12 | 0) + 1 | 0;g = Kn(a) | 0;if (g >>> 0 < f >>> 0) jF(a);m = c[a >> 2] | 0;o = ((c[a + 8 >> 2] | 0) - m | 0) / 12 | 0;n = o << 1;Ln(i, o >>> 0 < g >>> 1 >>> 0 ? n >>> 0 < f >>> 0 ? f : n : g, ((c[j >> 2] | 0) - m | 0) / 12 | 0, a + 8 | 0);j = i + 8 | 0;g = c[j >> 2] | 0;f = c[b + 4 >> 2] | 0;d = c[d >> 2] | 0;c[h >> 2] = c[b >> 2];c[h + 4 >> 2] = f;c[e >> 2] = c[h >> 2];c[e + 4 >> 2] = c[h + 4 >> 2];Hn(g, e, d);c[j >> 2] = (c[j >> 2] | 0) + 12;Mn(a, i);Nn(i);l = k;return;
    }function Kn(a) {
      a = a | 0;return 357913941;
    }function Ln(a, b, d, e) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;var f = 0;c[a + 12 >> 2] = 0;c[a + 16 >> 2] = e;do if (b) {
        if (b >>> 0 > 357913941) Ma(5765, 5802, 1734, 5872);else {
          f = qF(b * 12 | 0) | 0;break;
        }
      } else f = 0; while (0);c[a >> 2] = f;e = f + (d * 12 | 0) | 0;c[a + 8 >> 2] = e;c[a + 4 >> 2] = e;c[a + 12 >> 2] = f + (b * 12 | 0);return;
    }function Mn(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0;On(a);e = c[a >> 2] | 0;h = a + 4 | 0;g = b + 4 | 0;f = (c[h >> 2] | 0) - e | 0;d = (c[g >> 2] | 0) + (((f | 0) / -12 | 0) * 12 | 0) | 0;c[g >> 2] = d;if ((f | 0) > 0) {
        AF(d | 0, e | 0, f | 0) | 0;e = g;d = c[g >> 2] | 0;
      } else e = g;g = c[a >> 2] | 0;c[a >> 2] = d;c[e >> 2] = g;d = b + 8 | 0;g = c[h >> 2] | 0;c[h >> 2] = c[d >> 2];c[d >> 2] = g;d = a + 8 | 0;g = b + 12 | 0;f = c[d >> 2] | 0;c[d >> 2] = c[g >> 2];c[g >> 2] = f;c[b >> 2] = c[e >> 2];Pn(a, ((c[h >> 2] | 0) - (c[a >> 2] | 0) | 0) / 12 | 0);return;
    }function Nn(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;b = c[a + 4 >> 2] | 0;d = a + 8 | 0;e = c[d >> 2] | 0;if ((e | 0) != (b | 0)) c[d >> 2] = e + (~(((e + -12 - b | 0) >>> 0) / 12 | 0) * 12 | 0);a = c[a >> 2] | 0;if (a | 0) sF(a);return;
    }function On(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;e = c[a >> 2] | 0;d = e;b = e + ((((c[a + 8 >> 2] | 0) - d | 0) / 12 | 0) * 12 | 0) | 0;Qn(a, e, b, e + ((((c[a + 4 >> 2] | 0) - d | 0) / 12 | 0) * 12 | 0) | 0, b);return;
    }function Pn(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0;d = c[a >> 2] | 0;e = d + ((((c[a + 8 >> 2] | 0) - d | 0) / 12 | 0) * 12 | 0) | 0;Qn(a, d, e, e, d + (b * 12 | 0) | 0);return;
    }function Qn(a, b, c, d, e) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;e = e | 0;return;
    }function Rn(a) {
      a = a | 0;Un(a);return;
    }function Sn(a) {
      a = a | 0;Tn(a + 24 | 0);return;
    }function Tn(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;d = c[a >> 2] | 0;e = d;if (d | 0) {
        a = a + 4 | 0;b = c[a >> 2] | 0;if ((b | 0) != (d | 0)) c[a >> 2] = b + (~(((b + -12 - e | 0) >>> 0) / 12 | 0) * 12 | 0);sF(d);
      }return;
    }function Un(a) {
      a = a | 0;var b = 0;b = Di() | 0;Gi(a, 2, 5, b, Vn() | 0, 0);c[a + 24 >> 2] = 0;c[a + 28 >> 2] = 0;c[a + 32 >> 2] = 0;return;
    }function Vn() {
      return 1292;
    }function Wn(a, b) {
      a = a | 0;b = b | 0;var d = 0.0,
          e = 0,
          f = 0,
          g = 0,
          h = 0;e = l;l = l + 16 | 0;f = e + 8 | 0;g = e;h = Xn(a) | 0;a = c[h + 4 >> 2] | 0;c[g >> 2] = c[h >> 2];c[g + 4 >> 2] = a;c[f >> 2] = c[g >> 2];c[f + 4 >> 2] = c[g + 4 >> 2];d = +Yn(b, f);l = e;return +d;
    }function Xn(a) {
      a = a | 0;return (c[(Dn() | 0) + 24 >> 2] | 0) + (a * 12 | 0) | 0;
    }function Yn(a, b) {
      a = a | 0;b = b | 0;var d = 0;d = c[b >> 2] | 0;b = c[b + 4 >> 2] | 0;a = a + (b >> 1) | 0;if (b & 1) d = c[(c[a >> 2] | 0) + d >> 2] | 0;return + +fh(+Eb[d & 15](a));
    }function Zn(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0;e = l;l = l + 16 | 0;f = e + 8 | 0;g = e;i = c[d >> 2] | 0;h = c[d + 4 >> 2] | 0;d = di(b) | 0;c[g >> 2] = i;c[g + 4 >> 2] = h;c[f >> 2] = c[g >> 2];c[f + 4 >> 2] = c[g + 4 >> 2];_n(a, d, f, 1);l = e;return;
    }
    function _n(a, b, d, e) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0;f = l;l = l + 32 | 0;g = f + 16 | 0;m = f + 8 | 0;i = f;k = c[d >> 2] | 0;j = c[d + 4 >> 2] | 0;h = c[a >> 2] | 0;a = $n() | 0;c[m >> 2] = k;c[m + 4 >> 2] = j;c[g >> 2] = c[m >> 2];c[g + 4 >> 2] = c[m + 4 >> 2];d = ao(g) | 0;c[i >> 2] = k;c[i + 4 >> 2] = j;c[g >> 2] = c[i >> 2];c[g + 4 >> 2] = c[i + 4 >> 2];ii(h, b, a, d, bo(g, e) | 0, e);l = f;return;
    }function $n() {
      var b = 0,
          d = 0;if (!(a[8616] | 0)) {
        oo(9480);Na(36, 9480, o | 0) | 0;d = 8616;c[d >> 2] = 1;c[d + 4 >> 2] = 0;
      }if (!(Ai(9480) | 0)) {
        b = 9480;d = b + 36 | 0;do {
          c[b >> 2] = 0;b = b + 4 | 0;
        } while ((b | 0) < (d | 0));oo(9480);
      }return 9480;
    }function ao(a) {
      a = a | 0;return 0;
    }function bo(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0;k = l;l = l + 48 | 0;e = k + 24 | 0;f = k + 16 | 0;g = k + 32 | 0;h = k;i = k + 8 | 0;m = c[a + 4 >> 2] | 0;c[h >> 2] = c[a >> 2];d = h + 4 | 0;c[d >> 2] = m;m = $n() | 0;j = m + 24 | 0;c[i >> 2] = mi(b, 4) | 0;a = m + 28 | 0;if ((c[a >> 2] | 0) >>> 0 < (c[m + 32 >> 2] | 0) >>> 0) {
        co(g, j, 1);b = c[a >> 2] | 0;d = c[d >> 2] | 0;m = c[i >> 2] | 0;c[f >> 2] = c[h >> 2];c[f + 4 >> 2] = d;c[e >> 2] = c[f >> 2];c[e + 4 >> 2] = c[f + 4 >> 2];eo(b, e, m);fo(g);m = (c[a >> 2] | 0) + 12 | 0;c[a >> 2] = m;a = m;
      } else {
        go(j, h, i);a = c[a >> 2] | 0;
      }l = k;return ((a - (c[j >> 2] | 0) | 0) / 12 | 0) + -1 | 0;
    }function co(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;return;
    }function eo(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0;e = c[b + 4 >> 2] | 0;c[a >> 2] = c[b >> 2];c[a + 4 >> 2] = e;c[a + 8 >> 2] = d;return;
    }function fo(a) {
      a = a | 0;return;
    }function go(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0,
          n = 0,
          o = 0;k = l;l = l + 48 | 0;e = k + 32 | 0;h = k + 24 | 0;i = k;j = a + 4 | 0;f = (((c[j >> 2] | 0) - (c[a >> 2] | 0) | 0) / 12 | 0) + 1 | 0;g = ho(a) | 0;if (g >>> 0 < f >>> 0) jF(a);m = c[a >> 2] | 0;o = ((c[a + 8 >> 2] | 0) - m | 0) / 12 | 0;n = o << 1;io(i, o >>> 0 < g >>> 1 >>> 0 ? n >>> 0 < f >>> 0 ? f : n : g, ((c[j >> 2] | 0) - m | 0) / 12 | 0, a + 8 | 0);j = i + 8 | 0;g = c[j >> 2] | 0;f = c[b + 4 >> 2] | 0;d = c[d >> 2] | 0;c[h >> 2] = c[b >> 2];c[h + 4 >> 2] = f;c[e >> 2] = c[h >> 2];c[e + 4 >> 2] = c[h + 4 >> 2];eo(g, e, d);c[j >> 2] = (c[j >> 2] | 0) + 12;jo(a, i);ko(i);l = k;return;
    }function ho(a) {
      a = a | 0;return 357913941;
    }function io(a, b, d, e) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;var f = 0;c[a + 12 >> 2] = 0;c[a + 16 >> 2] = e;do if (b) {
        if (b >>> 0 > 357913941) Ma(5765, 5802, 1734, 5872);else {
          f = qF(b * 12 | 0) | 0;break;
        }
      } else f = 0; while (0);c[a >> 2] = f;e = f + (d * 12 | 0) | 0;c[a + 8 >> 2] = e;c[a + 4 >> 2] = e;c[a + 12 >> 2] = f + (b * 12 | 0);return;
    }function jo(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0;lo(a);e = c[a >> 2] | 0;h = a + 4 | 0;g = b + 4 | 0;f = (c[h >> 2] | 0) - e | 0;d = (c[g >> 2] | 0) + (((f | 0) / -12 | 0) * 12 | 0) | 0;c[g >> 2] = d;if ((f | 0) > 0) {
        AF(d | 0, e | 0, f | 0) | 0;e = g;d = c[g >> 2] | 0;
      } else e = g;g = c[a >> 2] | 0;c[a >> 2] = d;c[e >> 2] = g;d = b + 8 | 0;g = c[h >> 2] | 0;c[h >> 2] = c[d >> 2];c[d >> 2] = g;d = a + 8 | 0;g = b + 12 | 0;f = c[d >> 2] | 0;c[d >> 2] = c[g >> 2];c[g >> 2] = f;c[b >> 2] = c[e >> 2];mo(a, ((c[h >> 2] | 0) - (c[a >> 2] | 0) | 0) / 12 | 0);return;
    }function ko(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;b = c[a + 4 >> 2] | 0;d = a + 8 | 0;e = c[d >> 2] | 0;if ((e | 0) != (b | 0)) c[d >> 2] = e + (~(((e + -12 - b | 0) >>> 0) / 12 | 0) * 12 | 0);a = c[a >> 2] | 0;if (a | 0) sF(a);return;
    }function lo(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;e = c[a >> 2] | 0;d = e;b = e + ((((c[a + 8 >> 2] | 0) - d | 0) / 12 | 0) * 12 | 0) | 0;no(a, e, b, e + ((((c[a + 4 >> 2] | 0) - d | 0) / 12 | 0) * 12 | 0) | 0, b);return;
    }function mo(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0;d = c[a >> 2] | 0;e = d + ((((c[a + 8 >> 2] | 0) - d | 0) / 12 | 0) * 12 | 0) | 0;no(a, d, e, e, d + (b * 12 | 0) | 0);return;
    }function no(a, b, c, d, e) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;e = e | 0;return;
    }function oo(a) {
      a = a | 0;ro(a);return;
    }function po(a) {
      a = a | 0;qo(a + 24 | 0);return;
    }function qo(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;d = c[a >> 2] | 0;e = d;if (d | 0) {
        a = a + 4 | 0;b = c[a >> 2] | 0;if ((b | 0) != (d | 0)) c[a >> 2] = b + (~(((b + -12 - e | 0) >>> 0) / 12 | 0) * 12 | 0);sF(d);
      }return;
    }function ro(a) {
      a = a | 0;var b = 0;b = Di() | 0;Gi(a, 2, 8, b, so() | 0, 0);c[a + 24 >> 2] = 0;c[a + 28 >> 2] = 0;c[a + 32 >> 2] = 0;return;
    }function so() {
      return 1336;
    }function to(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0;d = l;l = l + 16 | 0;e = d + 8 | 0;f = d;g = uo(a) | 0;a = c[g + 4 >> 2] | 0;c[f >> 2] = c[g >> 2];c[f + 4 >> 2] = a;c[e >> 2] = c[f >> 2];c[e + 4 >> 2] = c[f + 4 >> 2];b = vo(b, e) | 0;l = d;return b | 0;
    }function uo(a) {
      a = a | 0;return (c[($n() | 0) + 24 >> 2] | 0) + (a * 12 | 0) | 0;
    }function vo(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0,
          f = 0;f = l;l = l + 16 | 0;e = f;d = c[b >> 2] | 0;b = c[b + 4 >> 2] | 0;a = a + (b >> 1) | 0;if (b & 1) d = c[(c[a >> 2] | 0) + d >> 2] | 0;yb[d & 31](e, a);e = wo(e) | 0;l = f;return e | 0;
    }function wo(a) {
      a = a | 0;var b = 0,
          c = 0,
          d = 0,
          e = 0;e = l;l = l + 32 | 0;b = e + 12 | 0;c = e;d = Li(xo() | 0) | 0;if (!d) a = zo(a) | 0;else {
        Mi(b, d);Ni(c, b);yo(a, c);a = Pi(b) | 0;
      }l = e;return a | 0;
    }function xo() {
      var b = 0;if (!(a[8632] | 0)) {
        Ko(9528);Na(25, 9528, o | 0) | 0;b = 8632;c[b >> 2] = 1;c[b + 4 >> 2] = 0;
      }return 9528;
    }function yo(a, b) {
      a = a | 0;b = b | 0;Eo(b, a, a + 8 | 0) | 0;return;
    }function zo(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0;d = l;l = l + 16 | 0;f = d + 4 | 0;h = d;e = AA(8) | 0;b = e;i = qF(16) | 0;c[i >> 2] = c[a >> 2];c[i + 4 >> 2] = c[a + 4 >> 2];c[i + 8 >> 2] = c[a + 8 >> 2];c[i + 12 >> 2] = c[a + 12 >> 2];g = b + 4 | 0;c[g >> 2] = i;a = qF(8) | 0;g = c[g >> 2] | 0;c[h >> 2] = 0;c[f >> 2] = c[h >> 2];Ao(a, g, f);c[e >> 2] = a;l = d;return b | 0;
    }function Ao(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;c[a >> 2] = b;d = qF(16) | 0;c[d + 4 >> 2] = 0;c[d + 8 >> 2] = 0;c[d >> 2] = 1304;c[d + 12 >> 2] = b;c[a + 4 >> 2] = d;return;
    }function Bo(a) {
      a = a | 0;kF(a);sF(a);return;
    }function Co(a) {
      a = a | 0;a = c[a + 12 >> 2] | 0;if (a | 0) sF(a);return;
    }function Do(a) {
      a = a | 0;sF(a);return;
    }function Eo(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;b = Fo(c[a >> 2] | 0, b, d) | 0;d = a + 4 | 0;c[(c[d >> 2] | 0) + 8 >> 2] = b;return c[(c[d >> 2] | 0) + 8 >> 2] | 0;
    }function Fo(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0;e = l;l = l + 16 | 0;f = e;ID(f);a = Vg(a) | 0;d = Go(a, c[b >> 2] | 0, +h[d >> 3]) | 0;KD(f);l = e;return d | 0;
    }function Go(a, b, c) {
      a = a | 0;b = b | 0;c = +c;var d = 0;d = Yg(Ho() | 0) | 0;b = _g(b) | 0;return _a(0, d | 0, a | 0, b | 0, + +Zg(c)) | 0;
    }function Ho() {
      var b = 0;if (!(a[8624] | 0)) {
        Io(9516);b = 8624;c[b >> 2] = 1;c[b + 4 >> 2] = 0;
      }return 9516;
    }function Io(a) {
      a = a | 0;ih(a, Jo() | 0, 2);return;
    }function Jo() {
      return 1324;
    }function Ko(a) {
      a = a | 0;fj(a);return;
    }function Lo(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0;e = l;l = l + 16 | 0;f = e + 8 | 0;g = e;i = c[d >> 2] | 0;h = c[d + 4 >> 2] | 0;d = di(b) | 0;c[g >> 2] = i;c[g + 4 >> 2] = h;c[f >> 2] = c[g >> 2];c[f + 4 >> 2] = c[g + 4 >> 2];Mo(a, d, f, 1);l = e;return;
    }function Mo(a, b, d, e) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0;f = l;l = l + 32 | 0;g = f + 16 | 0;m = f + 8 | 0;i = f;k = c[d >> 2] | 0;j = c[d + 4 >> 2] | 0;h = c[a >> 2] | 0;a = No() | 0;c[m >> 2] = k;c[m + 4 >> 2] = j;c[g >> 2] = c[m >> 2];c[g + 4 >> 2] = c[m + 4 >> 2];d = Oo(g) | 0;c[i >> 2] = k;c[i + 4 >> 2] = j;c[g >> 2] = c[i >> 2];c[g + 4 >> 2] = c[i + 4 >> 2];ii(h, b, a, d, Po(g, e) | 0, e);l = f;return;
    }function No() {
      var b = 0,
          d = 0;if (!(a[8640] | 0)) {
        $o(9572);Na(37, 9572, o | 0) | 0;d = 8640;c[d >> 2] = 1;c[d + 4 >> 2] = 0;
      }if (!(Ai(9572) | 0)) {
        b = 9572;d = b + 36 | 0;do {
          c[b >> 2] = 0;b = b + 4 | 0;
        } while ((b | 0) < (d | 0));$o(9572);
      }return 9572;
    }function Oo(a) {
      a = a | 0;return 0;
    }function Po(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0;k = l;l = l + 48 | 0;e = k + 24 | 0;f = k + 16 | 0;g = k + 32 | 0;h = k;i = k + 8 | 0;m = c[a + 4 >> 2] | 0;c[h >> 2] = c[a >> 2];d = h + 4 | 0;c[d >> 2] = m;m = No() | 0;j = m + 24 | 0;c[i >> 2] = mi(b, 4) | 0;a = m + 28 | 0;if ((c[a >> 2] | 0) >>> 0 < (c[m + 32 >> 2] | 0) >>> 0) {
        Qo(g, j, 1);b = c[a >> 2] | 0;d = c[d >> 2] | 0;m = c[i >> 2] | 0;c[f >> 2] = c[h >> 2];c[f + 4 >> 2] = d;c[e >> 2] = c[f >> 2];c[e + 4 >> 2] = c[f + 4 >> 2];Ro(b, e, m);So(g);m = (c[a >> 2] | 0) + 12 | 0;c[a >> 2] = m;a = m;
      } else {
        To(j, h, i);a = c[a >> 2] | 0;
      }l = k;return ((a - (c[j >> 2] | 0) | 0) / 12 | 0) + -1 | 0;
    }function Qo(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;return;
    }function Ro(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0;e = c[b + 4 >> 2] | 0;c[a >> 2] = c[b >> 2];c[a + 4 >> 2] = e;c[a + 8 >> 2] = d;return;
    }function So(a) {
      a = a | 0;return;
    }function To(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0,
          n = 0,
          o = 0;k = l;l = l + 48 | 0;e = k + 32 | 0;h = k + 24 | 0;i = k;j = a + 4 | 0;f = (((c[j >> 2] | 0) - (c[a >> 2] | 0) | 0) / 12 | 0) + 1 | 0;g = Uo(a) | 0;if (g >>> 0 < f >>> 0) jF(a);m = c[a >> 2] | 0;o = ((c[a + 8 >> 2] | 0) - m | 0) / 12 | 0;n = o << 1;Vo(i, o >>> 0 < g >>> 1 >>> 0 ? n >>> 0 < f >>> 0 ? f : n : g, ((c[j >> 2] | 0) - m | 0) / 12 | 0, a + 8 | 0);j = i + 8 | 0;g = c[j >> 2] | 0;f = c[b + 4 >> 2] | 0;d = c[d >> 2] | 0;c[h >> 2] = c[b >> 2];c[h + 4 >> 2] = f;c[e >> 2] = c[h >> 2];c[e + 4 >> 2] = c[h + 4 >> 2];Ro(g, e, d);c[j >> 2] = (c[j >> 2] | 0) + 12;Wo(a, i);Xo(i);l = k;return;
    }function Uo(a) {
      a = a | 0;return 357913941;
    }function Vo(a, b, d, e) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;var f = 0;c[a + 12 >> 2] = 0;c[a + 16 >> 2] = e;do if (b) {
        if (b >>> 0 > 357913941) Ma(5765, 5802, 1734, 5872);else {
          f = qF(b * 12 | 0) | 0;break;
        }
      } else f = 0; while (0);c[a >> 2] = f;e = f + (d * 12 | 0) | 0;c[a + 8 >> 2] = e;c[a + 4 >> 2] = e;c[a + 12 >> 2] = f + (b * 12 | 0);return;
    }function Wo(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0;Yo(a);e = c[a >> 2] | 0;h = a + 4 | 0;g = b + 4 | 0;f = (c[h >> 2] | 0) - e | 0;d = (c[g >> 2] | 0) + (((f | 0) / -12 | 0) * 12 | 0) | 0;c[g >> 2] = d;if ((f | 0) > 0) {
        AF(d | 0, e | 0, f | 0) | 0;e = g;d = c[g >> 2] | 0;
      } else e = g;g = c[a >> 2] | 0;c[a >> 2] = d;c[e >> 2] = g;d = b + 8 | 0;g = c[h >> 2] | 0;c[h >> 2] = c[d >> 2];c[d >> 2] = g;d = a + 8 | 0;g = b + 12 | 0;f = c[d >> 2] | 0;c[d >> 2] = c[g >> 2];c[g >> 2] = f;c[b >> 2] = c[e >> 2];Zo(a, ((c[h >> 2] | 0) - (c[a >> 2] | 0) | 0) / 12 | 0);return;
    }function Xo(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;b = c[a + 4 >> 2] | 0;d = a + 8 | 0;e = c[d >> 2] | 0;if ((e | 0) != (b | 0)) c[d >> 2] = e + (~(((e + -12 - b | 0) >>> 0) / 12 | 0) * 12 | 0);a = c[a >> 2] | 0;if (a | 0) sF(a);return;
    }function Yo(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;e = c[a >> 2] | 0;d = e;b = e + ((((c[a + 8 >> 2] | 0) - d | 0) / 12 | 0) * 12 | 0) | 0;_o(a, e, b, e + ((((c[a + 4 >> 2] | 0) - d | 0) / 12 | 0) * 12 | 0) | 0, b);return;
    }function Zo(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0;d = c[a >> 2] | 0;e = d + ((((c[a + 8 >> 2] | 0) - d | 0) / 12 | 0) * 12 | 0) | 0;_o(a, d, e, e, d + (b * 12 | 0) | 0);return;
    }function _o(a, b, c, d, e) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;e = e | 0;return;
    }function $o(a) {
      a = a | 0;cp(a);return;
    }function ap(a) {
      a = a | 0;bp(a + 24 | 0);return;
    }function bp(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;d = c[a >> 2] | 0;e = d;if (d | 0) {
        a = a + 4 | 0;b = c[a >> 2] | 0;if ((b | 0) != (d | 0)) c[a >> 2] = b + (~(((b + -12 - e | 0) >>> 0) / 12 | 0) * 12 | 0);sF(d);
      }return;
    }function cp(a) {
      a = a | 0;var b = 0;b = Di() | 0;Gi(a, 2, 6, b, dp() | 0, 1);c[a + 24 >> 2] = 0;c[a + 28 >> 2] = 0;c[a + 32 >> 2] = 0;return;
    }function dp() {
      return 1340;
    }function ep(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0;e = l;l = l + 16 | 0;f = e + 8 | 0;g = e;h = fp(a) | 0;a = c[h + 4 >> 2] | 0;c[g >> 2] = c[h >> 2];c[g + 4 >> 2] = a;c[f >> 2] = c[g >> 2];c[f + 4 >> 2] = c[g + 4 >> 2];d = gp(b, f, d) | 0;l = e;return d | 0;
    }function fp(a) {
      a = a | 0;return (c[(No() | 0) + 24 >> 2] | 0) + (a * 12 | 0) | 0;
    }function gp(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0;h = l;l = l + 32 | 0;f = h;g = h + 16 | 0;e = c[b >> 2] | 0;b = c[b + 4 >> 2] | 0;a = a + (b >> 1) | 0;if (b & 1) e = c[(c[a >> 2] | 0) + e >> 2] | 0;Gj(g, d);g = Hj(g, d) | 0;Ob[e & 15](f, a, g);g = wo(f) | 0;l = h;return g | 0;
    }function hp(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0;e = l;l = l + 16 | 0;f = e + 8 | 0;g = e;i = c[d >> 2] | 0;h = c[d + 4 >> 2] | 0;d = di(b) | 0;c[g >> 2] = i;c[g + 4 >> 2] = h;c[f >> 2] = c[g >> 2];c[f + 4 >> 2] = c[g + 4 >> 2];ip(a, d, f, 1);l = e;return;
    }function ip(a, b, d, e) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0;f = l;l = l + 32 | 0;g = f + 16 | 0;m = f + 8 | 0;i = f;k = c[d >> 2] | 0;j = c[d + 4 >> 2] | 0;h = c[a >> 2] | 0;a = jp() | 0;c[m >> 2] = k;c[m + 4 >> 2] = j;c[g >> 2] = c[m >> 2];c[g + 4 >> 2] = c[m + 4 >> 2];d = kp(g) | 0;c[i >> 2] = k;c[i + 4 >> 2] = j;c[g >> 2] = c[i >> 2];c[g + 4 >> 2] = c[i + 4 >> 2];ii(h, b, a, d, lp(g, e) | 0, e);l = f;return;
    }function jp() {
      var b = 0,
          d = 0;if (!(a[8648] | 0)) {
        xp(9608);Na(38, 9608, o | 0) | 0;d = 8648;c[d >> 2] = 1;c[d + 4 >> 2] = 0;
      }if (!(Ai(9608) | 0)) {
        b = 9608;d = b + 36 | 0;do {
          c[b >> 2] = 0;b = b + 4 | 0;
        } while ((b | 0) < (d | 0));xp(9608);
      }return 9608;
    }function kp(a) {
      a = a | 0;return 0;
    }function lp(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0;k = l;l = l + 48 | 0;e = k + 24 | 0;f = k + 16 | 0;g = k + 32 | 0;h = k;i = k + 8 | 0;m = c[a + 4 >> 2] | 0;c[h >> 2] = c[a >> 2];d = h + 4 | 0;c[d >> 2] = m;m = jp() | 0;j = m + 24 | 0;c[i >> 2] = mi(b, 4) | 0;a = m + 28 | 0;if ((c[a >> 2] | 0) >>> 0 < (c[m + 32 >> 2] | 0) >>> 0) {
        mp(g, j, 1);b = c[a >> 2] | 0;d = c[d >> 2] | 0;m = c[i >> 2] | 0;c[f >> 2] = c[h >> 2];c[f + 4 >> 2] = d;c[e >> 2] = c[f >> 2];c[e + 4 >> 2] = c[f + 4 >> 2];np(b, e, m);op(g);m = (c[a >> 2] | 0) + 12 | 0;c[a >> 2] = m;a = m;
      } else {
        pp(j, h, i);a = c[a >> 2] | 0;
      }l = k;return ((a - (c[j >> 2] | 0) | 0) / 12 | 0) + -1 | 0;
    }function mp(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;return;
    }function np(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0;e = c[b + 4 >> 2] | 0;c[a >> 2] = c[b >> 2];c[a + 4 >> 2] = e;c[a + 8 >> 2] = d;return;
    }function op(a) {
      a = a | 0;return;
    }function pp(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0,
          n = 0,
          o = 0;k = l;l = l + 48 | 0;e = k + 32 | 0;h = k + 24 | 0;i = k;j = a + 4 | 0;f = (((c[j >> 2] | 0) - (c[a >> 2] | 0) | 0) / 12 | 0) + 1 | 0;g = qp(a) | 0;if (g >>> 0 < f >>> 0) jF(a);m = c[a >> 2] | 0;o = ((c[a + 8 >> 2] | 0) - m | 0) / 12 | 0;n = o << 1;rp(i, o >>> 0 < g >>> 1 >>> 0 ? n >>> 0 < f >>> 0 ? f : n : g, ((c[j >> 2] | 0) - m | 0) / 12 | 0, a + 8 | 0);j = i + 8 | 0;g = c[j >> 2] | 0;f = c[b + 4 >> 2] | 0;d = c[d >> 2] | 0;c[h >> 2] = c[b >> 2];c[h + 4 >> 2] = f;c[e >> 2] = c[h >> 2];c[e + 4 >> 2] = c[h + 4 >> 2];np(g, e, d);c[j >> 2] = (c[j >> 2] | 0) + 12;sp(a, i);tp(i);l = k;return;
    }function qp(a) {
      a = a | 0;return 357913941;
    }function rp(a, b, d, e) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;var f = 0;c[a + 12 >> 2] = 0;c[a + 16 >> 2] = e;do if (b) {
        if (b >>> 0 > 357913941) Ma(5765, 5802, 1734, 5872);else {
          f = qF(b * 12 | 0) | 0;break;
        }
      } else f = 0; while (0);c[a >> 2] = f;e = f + (d * 12 | 0) | 0;c[a + 8 >> 2] = e;c[a + 4 >> 2] = e;c[a + 12 >> 2] = f + (b * 12 | 0);return;
    }function sp(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0;up(a);e = c[a >> 2] | 0;h = a + 4 | 0;g = b + 4 | 0;f = (c[h >> 2] | 0) - e | 0;d = (c[g >> 2] | 0) + (((f | 0) / -12 | 0) * 12 | 0) | 0;c[g >> 2] = d;if ((f | 0) > 0) {
        AF(d | 0, e | 0, f | 0) | 0;e = g;d = c[g >> 2] | 0;
      } else e = g;g = c[a >> 2] | 0;c[a >> 2] = d;c[e >> 2] = g;d = b + 8 | 0;g = c[h >> 2] | 0;c[h >> 2] = c[d >> 2];c[d >> 2] = g;d = a + 8 | 0;g = b + 12 | 0;f = c[d >> 2] | 0;c[d >> 2] = c[g >> 2];c[g >> 2] = f;c[b >> 2] = c[e >> 2];vp(a, ((c[h >> 2] | 0) - (c[a >> 2] | 0) | 0) / 12 | 0);return;
    }function tp(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;b = c[a + 4 >> 2] | 0;d = a + 8 | 0;e = c[d >> 2] | 0;if ((e | 0) != (b | 0)) c[d >> 2] = e + (~(((e + -12 - b | 0) >>> 0) / 12 | 0) * 12 | 0);a = c[a >> 2] | 0;if (a | 0) sF(a);return;
    }function up(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;e = c[a >> 2] | 0;d = e;b = e + ((((c[a + 8 >> 2] | 0) - d | 0) / 12 | 0) * 12 | 0) | 0;wp(a, e, b, e + ((((c[a + 4 >> 2] | 0) - d | 0) / 12 | 0) * 12 | 0) | 0, b);return;
    }function vp(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0;d = c[a >> 2] | 0;e = d + ((((c[a + 8 >> 2] | 0) - d | 0) / 12 | 0) * 12 | 0) | 0;wp(a, d, e, e, d + (b * 12 | 0) | 0);return;
    }function wp(a, b, c, d, e) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;e = e | 0;return;
    }function xp(a) {
      a = a | 0;Ap(a);return;
    }function yp(a) {
      a = a | 0;zp(a + 24 | 0);return;
    }function zp(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;d = c[a >> 2] | 0;e = d;if (d | 0) {
        a = a + 4 | 0;b = c[a >> 2] | 0;if ((b | 0) != (d | 0)) c[a >> 2] = b + (~(((b + -12 - e | 0) >>> 0) / 12 | 0) * 12 | 0);sF(d);
      }return;
    }function Ap(a) {
      a = a | 0;var b = 0;b = Di() | 0;Gi(a, 2, 9, b, Bp() | 0, 0);c[a + 24 >> 2] = 0;c[a + 28 >> 2] = 0;c[a + 32 >> 2] = 0;return;
    }function Bp() {
      return 1348;
    }function Cp(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0;d = l;l = l + 16 | 0;e = d + 8 | 0;f = d;g = Dp(a) | 0;a = c[g + 4 >> 2] | 0;c[f >> 2] = c[g >> 2];c[f + 4 >> 2] = a;c[e >> 2] = c[f >> 2];c[e + 4 >> 2] = c[f + 4 >> 2];b = Ep(b, e) | 0;l = d;return b | 0;
    }function Dp(a) {
      a = a | 0;return (c[(jp() | 0) + 24 >> 2] | 0) + (a * 12 | 0) | 0;
    }function Ep(a, b) {
      a = a | 0;b = b | 0;var d = 0;d = c[b >> 2] | 0;b = c[b + 4 >> 2] | 0;a = a + (b >> 1) | 0;if (b & 1) d = c[(c[a >> 2] | 0) + d >> 2] | 0;return eh(zb[d & 31](a) | 0) | 0;
    }function Fp(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0;e = l;l = l + 16 | 0;f = e + 8 | 0;g = e;i = c[d >> 2] | 0;h = c[d + 4 >> 2] | 0;d = di(b) | 0;c[g >> 2] = i;c[g + 4 >> 2] = h;c[f >> 2] = c[g >> 2];c[f + 4 >> 2] = c[g + 4 >> 2];Gp(a, d, f, 0);l = e;return;
    }function Gp(a, b, d, e) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0;f = l;l = l + 32 | 0;g = f + 16 | 0;m = f + 8 | 0;i = f;k = c[d >> 2] | 0;j = c[d + 4 >> 2] | 0;h = c[a >> 2] | 0;a = Hp() | 0;c[m >> 2] = k;c[m + 4 >> 2] = j;c[g >> 2] = c[m >> 2];c[g + 4 >> 2] = c[m + 4 >> 2];d = Ip(g) | 0;c[i >> 2] = k;c[i + 4 >> 2] = j;c[g >> 2] = c[i >> 2];c[g + 4 >> 2] = c[i + 4 >> 2];ii(h, b, a, d, Jp(g, e) | 0, e);l = f;return;
    }function Hp() {
      var b = 0,
          d = 0;if (!(a[8656] | 0)) {
        Vp(9644);Na(39, 9644, o | 0) | 0;d = 8656;c[d >> 2] = 1;c[d + 4 >> 2] = 0;
      }if (!(Ai(9644) | 0)) {
        b = 9644;d = b + 36 | 0;do {
          c[b >> 2] = 0;b = b + 4 | 0;
        } while ((b | 0) < (d | 0));Vp(9644);
      }return 9644;
    }function Ip(a) {
      a = a | 0;return 0;
    }function Jp(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0;k = l;l = l + 48 | 0;e = k + 24 | 0;f = k + 16 | 0;g = k + 32 | 0;h = k;i = k + 8 | 0;m = c[a + 4 >> 2] | 0;c[h >> 2] = c[a >> 2];d = h + 4 | 0;c[d >> 2] = m;m = Hp() | 0;j = m + 24 | 0;c[i >> 2] = mi(b, 4) | 0;a = m + 28 | 0;if ((c[a >> 2] | 0) >>> 0 < (c[m + 32 >> 2] | 0) >>> 0) {
        Kp(g, j, 1);b = c[a >> 2] | 0;d = c[d >> 2] | 0;m = c[i >> 2] | 0;c[f >> 2] = c[h >> 2];c[f + 4 >> 2] = d;c[e >> 2] = c[f >> 2];c[e + 4 >> 2] = c[f + 4 >> 2];Lp(b, e, m);Mp(g);m = (c[a >> 2] | 0) + 12 | 0;c[a >> 2] = m;a = m;
      } else {
        Np(j, h, i);a = c[a >> 2] | 0;
      }l = k;return ((a - (c[j >> 2] | 0) | 0) / 12 | 0) + -1 | 0;
    }function Kp(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;return;
    }function Lp(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0;e = c[b + 4 >> 2] | 0;c[a >> 2] = c[b >> 2];c[a + 4 >> 2] = e;c[a + 8 >> 2] = d;return;
    }function Mp(a) {
      a = a | 0;return;
    }function Np(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0,
          n = 0,
          o = 0;k = l;l = l + 48 | 0;e = k + 32 | 0;h = k + 24 | 0;i = k;j = a + 4 | 0;f = (((c[j >> 2] | 0) - (c[a >> 2] | 0) | 0) / 12 | 0) + 1 | 0;g = Op(a) | 0;if (g >>> 0 < f >>> 0) jF(a);m = c[a >> 2] | 0;o = ((c[a + 8 >> 2] | 0) - m | 0) / 12 | 0;n = o << 1;Pp(i, o >>> 0 < g >>> 1 >>> 0 ? n >>> 0 < f >>> 0 ? f : n : g, ((c[j >> 2] | 0) - m | 0) / 12 | 0, a + 8 | 0);j = i + 8 | 0;g = c[j >> 2] | 0;f = c[b + 4 >> 2] | 0;d = c[d >> 2] | 0;c[h >> 2] = c[b >> 2];c[h + 4 >> 2] = f;c[e >> 2] = c[h >> 2];c[e + 4 >> 2] = c[h + 4 >> 2];Lp(g, e, d);c[j >> 2] = (c[j >> 2] | 0) + 12;Qp(a, i);Rp(i);l = k;return;
    }function Op(a) {
      a = a | 0;return 357913941;
    }function Pp(a, b, d, e) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;var f = 0;c[a + 12 >> 2] = 0;c[a + 16 >> 2] = e;do if (b) {
        if (b >>> 0 > 357913941) Ma(5765, 5802, 1734, 5872);else {
          f = qF(b * 12 | 0) | 0;break;
        }
      } else f = 0; while (0);c[a >> 2] = f;e = f + (d * 12 | 0) | 0;c[a + 8 >> 2] = e;c[a + 4 >> 2] = e;c[a + 12 >> 2] = f + (b * 12 | 0);return;
    }function Qp(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0;Sp(a);e = c[a >> 2] | 0;h = a + 4 | 0;g = b + 4 | 0;f = (c[h >> 2] | 0) - e | 0;d = (c[g >> 2] | 0) + (((f | 0) / -12 | 0) * 12 | 0) | 0;c[g >> 2] = d;if ((f | 0) > 0) {
        AF(d | 0, e | 0, f | 0) | 0;e = g;d = c[g >> 2] | 0;
      } else e = g;g = c[a >> 2] | 0;c[a >> 2] = d;c[e >> 2] = g;d = b + 8 | 0;g = c[h >> 2] | 0;c[h >> 2] = c[d >> 2];c[d >> 2] = g;d = a + 8 | 0;g = b + 12 | 0;f = c[d >> 2] | 0;c[d >> 2] = c[g >> 2];c[g >> 2] = f;c[b >> 2] = c[e >> 2];Tp(a, ((c[h >> 2] | 0) - (c[a >> 2] | 0) | 0) / 12 | 0);return;
    }function Rp(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;b = c[a + 4 >> 2] | 0;d = a + 8 | 0;e = c[d >> 2] | 0;if ((e | 0) != (b | 0)) c[d >> 2] = e + (~(((e + -12 - b | 0) >>> 0) / 12 | 0) * 12 | 0);a = c[a >> 2] | 0;if (a | 0) sF(a);return;
    }function Sp(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;e = c[a >> 2] | 0;d = e;b = e + ((((c[a + 8 >> 2] | 0) - d | 0) / 12 | 0) * 12 | 0) | 0;Up(a, e, b, e + ((((c[a + 4 >> 2] | 0) - d | 0) / 12 | 0) * 12 | 0) | 0, b);return;
    }function Tp(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0;d = c[a >> 2] | 0;e = d + ((((c[a + 8 >> 2] | 0) - d | 0) / 12 | 0) * 12 | 0) | 0;Up(a, d, e, e, d + (b * 12 | 0) | 0);return;
    }function Up(a, b, c, d, e) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;e = e | 0;return;
    }function Vp(a) {
      a = a | 0;Yp(a);return;
    }function Wp(a) {
      a = a | 0;Xp(a + 24 | 0);return;
    }function Xp(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;d = c[a >> 2] | 0;e = d;if (d | 0) {
        a = a + 4 | 0;b = c[a >> 2] | 0;if ((b | 0) != (d | 0)) c[a >> 2] = b + (~(((b + -12 - e | 0) >>> 0) / 12 | 0) * 12 | 0);sF(d);
      }return;
    }function Yp(a) {
      a = a | 0;var b = 0;b = Di() | 0;Gi(a, 2, 8, b, Zp() | 0, 1);c[a + 24 >> 2] = 0;c[a + 28 >> 2] = 0;c[a + 32 >> 2] = 0;return;
    }function Zp() {
      return 1352;
    }function _p(a, b, d) {
      a = a | 0;b = b | 0;d = +d;var e = 0,
          f = 0,
          g = 0,
          h = 0;e = l;l = l + 16 | 0;f = e + 8 | 0;g = e;h = $p(a) | 0;a = c[h + 4 >> 2] | 0;c[g >> 2] = c[h >> 2];c[g + 4 >> 2] = a;c[f >> 2] = c[g >> 2];c[f + 4 >> 2] = c[g + 4 >> 2];aq(b, f, d);l = e;return;
    }function $p(a) {
      a = a | 0;return (c[(Hp() | 0) + 24 >> 2] | 0) + (a * 12 | 0) | 0;
    }function aq(a, b, d) {
      a = a | 0;b = b | 0;d = +d;var e = 0,
          f = 0,
          g = 0;g = l;l = l + 16 | 0;f = g;e = c[b >> 2] | 0;b = c[b + 4 >> 2] | 0;a = a + (b >> 1) | 0;if (b & 1) e = c[(c[a >> 2] | 0) + e >> 2] | 0;Ej(f, d);d = +Fj(f, d);vb[e & 31](a, d);l = g;return;
    }function bq(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0;e = l;l = l + 16 | 0;f = e + 8 | 0;g = e;i = c[d >> 2] | 0;h = c[d + 4 >> 2] | 0;d = di(b) | 0;c[g >> 2] = i;c[g + 4 >> 2] = h;c[f >> 2] = c[g >> 2];c[f + 4 >> 2] = c[g + 4 >> 2];cq(a, d, f, 0);l = e;return;
    }function cq(a, b, d, e) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0;f = l;l = l + 32 | 0;g = f + 16 | 0;m = f + 8 | 0;i = f;k = c[d >> 2] | 0;j = c[d + 4 >> 2] | 0;h = c[a >> 2] | 0;a = dq() | 0;c[m >> 2] = k;c[m + 4 >> 2] = j;c[g >> 2] = c[m >> 2];c[g + 4 >> 2] = c[m + 4 >> 2];d = eq(g) | 0;c[i >> 2] = k;c[i + 4 >> 2] = j;c[g >> 2] = c[i >> 2];c[g + 4 >> 2] = c[i + 4 >> 2];ii(h, b, a, d, fq(g, e) | 0, e);l = f;return;
    }function dq() {
      var b = 0,
          d = 0;if (!(a[8664] | 0)) {
        rq(9680);Na(40, 9680, o | 0) | 0;d = 8664;c[d >> 2] = 1;c[d + 4 >> 2] = 0;
      }if (!(Ai(9680) | 0)) {
        b = 9680;d = b + 36 | 0;do {
          c[b >> 2] = 0;b = b + 4 | 0;
        } while ((b | 0) < (d | 0));rq(9680);
      }return 9680;
    }function eq(a) {
      a = a | 0;return 0;
    }function fq(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0;k = l;l = l + 48 | 0;e = k + 24 | 0;f = k + 16 | 0;g = k + 32 | 0;h = k;i = k + 8 | 0;m = c[a + 4 >> 2] | 0;c[h >> 2] = c[a >> 2];d = h + 4 | 0;c[d >> 2] = m;m = dq() | 0;j = m + 24 | 0;c[i >> 2] = mi(b, 4) | 0;a = m + 28 | 0;if ((c[a >> 2] | 0) >>> 0 < (c[m + 32 >> 2] | 0) >>> 0) {
        gq(g, j, 1);b = c[a >> 2] | 0;d = c[d >> 2] | 0;m = c[i >> 2] | 0;c[f >> 2] = c[h >> 2];c[f + 4 >> 2] = d;c[e >> 2] = c[f >> 2];c[e + 4 >> 2] = c[f + 4 >> 2];hq(b, e, m);iq(g);m = (c[a >> 2] | 0) + 12 | 0;c[a >> 2] = m;a = m;
      } else {
        jq(j, h, i);a = c[a >> 2] | 0;
      }l = k;return ((a - (c[j >> 2] | 0) | 0) / 12 | 0) + -1 | 0;
    }function gq(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;return;
    }function hq(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0;e = c[b + 4 >> 2] | 0;c[a >> 2] = c[b >> 2];c[a + 4 >> 2] = e;c[a + 8 >> 2] = d;return;
    }function iq(a) {
      a = a | 0;return;
    }function jq(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0,
          n = 0,
          o = 0;k = l;l = l + 48 | 0;e = k + 32 | 0;h = k + 24 | 0;i = k;j = a + 4 | 0;f = (((c[j >> 2] | 0) - (c[a >> 2] | 0) | 0) / 12 | 0) + 1 | 0;g = kq(a) | 0;if (g >>> 0 < f >>> 0) jF(a);m = c[a >> 2] | 0;o = ((c[a + 8 >> 2] | 0) - m | 0) / 12 | 0;n = o << 1;lq(i, o >>> 0 < g >>> 1 >>> 0 ? n >>> 0 < f >>> 0 ? f : n : g, ((c[j >> 2] | 0) - m | 0) / 12 | 0, a + 8 | 0);j = i + 8 | 0;g = c[j >> 2] | 0;f = c[b + 4 >> 2] | 0;d = c[d >> 2] | 0;c[h >> 2] = c[b >> 2];c[h + 4 >> 2] = f;c[e >> 2] = c[h >> 2];c[e + 4 >> 2] = c[h + 4 >> 2];hq(g, e, d);c[j >> 2] = (c[j >> 2] | 0) + 12;mq(a, i);nq(i);l = k;return;
    }function kq(a) {
      a = a | 0;return 357913941;
    }function lq(a, b, d, e) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;var f = 0;c[a + 12 >> 2] = 0;c[a + 16 >> 2] = e;do if (b) {
        if (b >>> 0 > 357913941) Ma(5765, 5802, 1734, 5872);else {
          f = qF(b * 12 | 0) | 0;break;
        }
      } else f = 0; while (0);c[a >> 2] = f;e = f + (d * 12 | 0) | 0;c[a + 8 >> 2] = e;c[a + 4 >> 2] = e;c[a + 12 >> 2] = f + (b * 12 | 0);return;
    }function mq(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0;oq(a);e = c[a >> 2] | 0;h = a + 4 | 0;g = b + 4 | 0;f = (c[h >> 2] | 0) - e | 0;d = (c[g >> 2] | 0) + (((f | 0) / -12 | 0) * 12 | 0) | 0;c[g >> 2] = d;if ((f | 0) > 0) {
        AF(d | 0, e | 0, f | 0) | 0;e = g;d = c[g >> 2] | 0;
      } else e = g;g = c[a >> 2] | 0;c[a >> 2] = d;c[e >> 2] = g;d = b + 8 | 0;g = c[h >> 2] | 0;c[h >> 2] = c[d >> 2];c[d >> 2] = g;d = a + 8 | 0;g = b + 12 | 0;f = c[d >> 2] | 0;c[d >> 2] = c[g >> 2];c[g >> 2] = f;c[b >> 2] = c[e >> 2];pq(a, ((c[h >> 2] | 0) - (c[a >> 2] | 0) | 0) / 12 | 0);return;
    }function nq(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;b = c[a + 4 >> 2] | 0;d = a + 8 | 0;e = c[d >> 2] | 0;if ((e | 0) != (b | 0)) c[d >> 2] = e + (~(((e + -12 - b | 0) >>> 0) / 12 | 0) * 12 | 0);a = c[a >> 2] | 0;if (a | 0) sF(a);return;
    }function oq(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;e = c[a >> 2] | 0;d = e;b = e + ((((c[a + 8 >> 2] | 0) - d | 0) / 12 | 0) * 12 | 0) | 0;qq(a, e, b, e + ((((c[a + 4 >> 2] | 0) - d | 0) / 12 | 0) * 12 | 0) | 0, b);return;
    }function pq(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0;d = c[a >> 2] | 0;e = d + ((((c[a + 8 >> 2] | 0) - d | 0) / 12 | 0) * 12 | 0) | 0;qq(a, d, e, e, d + (b * 12 | 0) | 0);return;
    }function qq(a, b, c, d, e) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;e = e | 0;return;
    }function rq(a) {
      a = a | 0;uq(a);return;
    }function sq(a) {
      a = a | 0;tq(a + 24 | 0);return;
    }function tq(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;d = c[a >> 2] | 0;e = d;if (d | 0) {
        a = a + 4 | 0;b = c[a >> 2] | 0;if ((b | 0) != (d | 0)) c[a >> 2] = b + (~(((b + -12 - e | 0) >>> 0) / 12 | 0) * 12 | 0);sF(d);
      }return;
    }function uq(a) {
      a = a | 0;var b = 0;b = Di() | 0;Gi(a, 2, 1, b, vq() | 0, 2);c[a + 24 >> 2] = 0;c[a + 28 >> 2] = 0;c[a + 32 >> 2] = 0;return;
    }function vq() {
      return 1360;
    }function wq(a, b, d, e) {
      a = a | 0;b = b | 0;d = d | 0;e = +e;var f = 0,
          g = 0,
          h = 0,
          i = 0;f = l;l = l + 16 | 0;g = f + 8 | 0;h = f;i = xq(a) | 0;a = c[i + 4 >> 2] | 0;c[h >> 2] = c[i >> 2];c[h + 4 >> 2] = a;c[g >> 2] = c[h >> 2];c[g + 4 >> 2] = c[h + 4 >> 2];yq(b, g, d, e);l = f;return;
    }function xq(a) {
      a = a | 0;return (c[(dq() | 0) + 24 >> 2] | 0) + (a * 12 | 0) | 0;
    }function yq(a, b, d, e) {
      a = a | 0;b = b | 0;d = d | 0;e = +e;var f = 0,
          g = 0,
          h = 0,
          i = 0;i = l;l = l + 16 | 0;g = i + 1 | 0;h = i;f = c[b >> 2] | 0;b = c[b + 4 >> 2] | 0;a = a + (b >> 1) | 0;if (b & 1) f = c[(c[a >> 2] | 0) + f >> 2] | 0;Gj(g, d);g = Hj(g, d) | 0;Ej(h, e);e = +Fj(h, e);Qb[f & 15](a, g, e);l = i;return;
    }function zq(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0;e = l;l = l + 16 | 0;f = e + 8 | 0;g = e;i = c[d >> 2] | 0;h = c[d + 4 >> 2] | 0;d = di(b) | 0;c[g >> 2] = i;c[g + 4 >> 2] = h;c[f >> 2] = c[g >> 2];c[f + 4 >> 2] = c[g + 4 >> 2];Aq(a, d, f, 0);l = e;return;
    }function Aq(a, b, d, e) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0;f = l;l = l + 32 | 0;g = f + 16 | 0;m = f + 8 | 0;i = f;k = c[d >> 2] | 0;j = c[d + 4 >> 2] | 0;h = c[a >> 2] | 0;a = Bq() | 0;c[m >> 2] = k;c[m + 4 >> 2] = j;c[g >> 2] = c[m >> 2];c[g + 4 >> 2] = c[m + 4 >> 2];d = Cq(g) | 0;c[i >> 2] = k;c[i + 4 >> 2] = j;c[g >> 2] = c[i >> 2];c[g + 4 >> 2] = c[i + 4 >> 2];ii(h, b, a, d, Dq(g, e) | 0, e);l = f;return;
    }function Bq() {
      var b = 0,
          d = 0;if (!(a[8672] | 0)) {
        Pq(9716);Na(41, 9716, o | 0) | 0;d = 8672;c[d >> 2] = 1;c[d + 4 >> 2] = 0;
      }if (!(Ai(9716) | 0)) {
        b = 9716;d = b + 36 | 0;do {
          c[b >> 2] = 0;b = b + 4 | 0;
        } while ((b | 0) < (d | 0));Pq(9716);
      }return 9716;
    }function Cq(a) {
      a = a | 0;return 0;
    }function Dq(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0;k = l;l = l + 48 | 0;e = k + 24 | 0;f = k + 16 | 0;g = k + 32 | 0;h = k;i = k + 8 | 0;m = c[a + 4 >> 2] | 0;c[h >> 2] = c[a >> 2];d = h + 4 | 0;c[d >> 2] = m;m = Bq() | 0;j = m + 24 | 0;c[i >> 2] = mi(b, 4) | 0;a = m + 28 | 0;if ((c[a >> 2] | 0) >>> 0 < (c[m + 32 >> 2] | 0) >>> 0) {
        Eq(g, j, 1);b = c[a >> 2] | 0;d = c[d >> 2] | 0;m = c[i >> 2] | 0;c[f >> 2] = c[h >> 2];c[f + 4 >> 2] = d;c[e >> 2] = c[f >> 2];c[e + 4 >> 2] = c[f + 4 >> 2];Fq(b, e, m);Gq(g);m = (c[a >> 2] | 0) + 12 | 0;c[a >> 2] = m;a = m;
      } else {
        Hq(j, h, i);a = c[a >> 2] | 0;
      }l = k;return ((a - (c[j >> 2] | 0) | 0) / 12 | 0) + -1 | 0;
    }function Eq(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;return;
    }function Fq(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0;e = c[b + 4 >> 2] | 0;c[a >> 2] = c[b >> 2];c[a + 4 >> 2] = e;c[a + 8 >> 2] = d;return;
    }function Gq(a) {
      a = a | 0;return;
    }function Hq(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0,
          n = 0,
          o = 0;k = l;l = l + 48 | 0;e = k + 32 | 0;h = k + 24 | 0;i = k;j = a + 4 | 0;f = (((c[j >> 2] | 0) - (c[a >> 2] | 0) | 0) / 12 | 0) + 1 | 0;g = Iq(a) | 0;if (g >>> 0 < f >>> 0) jF(a);m = c[a >> 2] | 0;o = ((c[a + 8 >> 2] | 0) - m | 0) / 12 | 0;n = o << 1;Jq(i, o >>> 0 < g >>> 1 >>> 0 ? n >>> 0 < f >>> 0 ? f : n : g, ((c[j >> 2] | 0) - m | 0) / 12 | 0, a + 8 | 0);j = i + 8 | 0;g = c[j >> 2] | 0;f = c[b + 4 >> 2] | 0;d = c[d >> 2] | 0;c[h >> 2] = c[b >> 2];c[h + 4 >> 2] = f;c[e >> 2] = c[h >> 2];c[e + 4 >> 2] = c[h + 4 >> 2];Fq(g, e, d);c[j >> 2] = (c[j >> 2] | 0) + 12;Kq(a, i);Lq(i);l = k;return;
    }function Iq(a) {
      a = a | 0;return 357913941;
    }function Jq(a, b, d, e) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;var f = 0;c[a + 12 >> 2] = 0;c[a + 16 >> 2] = e;do if (b) {
        if (b >>> 0 > 357913941) Ma(5765, 5802, 1734, 5872);else {
          f = qF(b * 12 | 0) | 0;break;
        }
      } else f = 0; while (0);c[a >> 2] = f;e = f + (d * 12 | 0) | 0;c[a + 8 >> 2] = e;c[a + 4 >> 2] = e;c[a + 12 >> 2] = f + (b * 12 | 0);return;
    }function Kq(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0;Mq(a);e = c[a >> 2] | 0;h = a + 4 | 0;g = b + 4 | 0;f = (c[h >> 2] | 0) - e | 0;d = (c[g >> 2] | 0) + (((f | 0) / -12 | 0) * 12 | 0) | 0;c[g >> 2] = d;if ((f | 0) > 0) {
        AF(d | 0, e | 0, f | 0) | 0;e = g;d = c[g >> 2] | 0;
      } else e = g;g = c[a >> 2] | 0;c[a >> 2] = d;c[e >> 2] = g;d = b + 8 | 0;g = c[h >> 2] | 0;c[h >> 2] = c[d >> 2];c[d >> 2] = g;d = a + 8 | 0;g = b + 12 | 0;f = c[d >> 2] | 0;c[d >> 2] = c[g >> 2];c[g >> 2] = f;c[b >> 2] = c[e >> 2];Nq(a, ((c[h >> 2] | 0) - (c[a >> 2] | 0) | 0) / 12 | 0);return;
    }function Lq(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;b = c[a + 4 >> 2] | 0;d = a + 8 | 0;e = c[d >> 2] | 0;if ((e | 0) != (b | 0)) c[d >> 2] = e + (~(((e + -12 - b | 0) >>> 0) / 12 | 0) * 12 | 0);a = c[a >> 2] | 0;if (a | 0) sF(a);return;
    }function Mq(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;e = c[a >> 2] | 0;d = e;b = e + ((((c[a + 8 >> 2] | 0) - d | 0) / 12 | 0) * 12 | 0) | 0;Oq(a, e, b, e + ((((c[a + 4 >> 2] | 0) - d | 0) / 12 | 0) * 12 | 0) | 0, b);return;
    }function Nq(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0;d = c[a >> 2] | 0;e = d + ((((c[a + 8 >> 2] | 0) - d | 0) / 12 | 0) * 12 | 0) | 0;Oq(a, d, e, e, d + (b * 12 | 0) | 0);return;
    }function Oq(a, b, c, d, e) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;e = e | 0;return;
    }function Pq(a) {
      a = a | 0;Sq(a);return;
    }function Qq(a) {
      a = a | 0;Rq(a + 24 | 0);return;
    }function Rq(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;d = c[a >> 2] | 0;e = d;if (d | 0) {
        a = a + 4 | 0;b = c[a >> 2] | 0;if ((b | 0) != (d | 0)) c[a >> 2] = b + (~(((b + -12 - e | 0) >>> 0) / 12 | 0) * 12 | 0);sF(d);
      }return;
    }function Sq(a) {
      a = a | 0;var b = 0;b = Di() | 0;Gi(a, 2, 7, b, Tq() | 0, 1);c[a + 24 >> 2] = 0;c[a + 28 >> 2] = 0;c[a + 32 >> 2] = 0;return;
    }function Tq() {
      return 1372;
    }function Uq(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0;e = l;l = l + 16 | 0;f = e + 8 | 0;g = e;h = Vq(a) | 0;a = c[h + 4 >> 2] | 0;c[g >> 2] = c[h >> 2];c[g + 4 >> 2] = a;c[f >> 2] = c[g >> 2];c[f + 4 >> 2] = c[g + 4 >> 2];Wq(b, f, d);l = e;return;
    }function Vq(a) {
      a = a | 0;return (c[(Bq() | 0) + 24 >> 2] | 0) + (a * 12 | 0) | 0;
    }function Wq(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0;g = l;l = l + 16 | 0;f = g;e = c[b >> 2] | 0;b = c[b + 4 >> 2] | 0;a = a + (b >> 1) | 0;if (b & 1) e = c[(c[a >> 2] | 0) + e >> 2] | 0;Gj(f, d);f = Hj(f, d) | 0;yb[e & 31](a, f);l = g;return;
    }function Xq(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0;e = l;l = l + 16 | 0;f = e + 8 | 0;g = e;i = c[d >> 2] | 0;h = c[d + 4 >> 2] | 0;d = di(b) | 0;c[g >> 2] = i;c[g + 4 >> 2] = h;c[f >> 2] = c[g >> 2];c[f + 4 >> 2] = c[g + 4 >> 2];Yq(a, d, f, 0);l = e;return;
    }function Yq(a, b, d, e) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0;f = l;l = l + 32 | 0;g = f + 16 | 0;m = f + 8 | 0;i = f;k = c[d >> 2] | 0;j = c[d + 4 >> 2] | 0;h = c[a >> 2] | 0;a = Zq() | 0;c[m >> 2] = k;c[m + 4 >> 2] = j;c[g >> 2] = c[m >> 2];c[g + 4 >> 2] = c[m + 4 >> 2];d = _q(g) | 0;c[i >> 2] = k;c[i + 4 >> 2] = j;c[g >> 2] = c[i >> 2];c[g + 4 >> 2] = c[i + 4 >> 2];ii(h, b, a, d, $q(g, e) | 0, e);l = f;return;
    }function Zq() {
      var b = 0,
          d = 0;if (!(a[8680] | 0)) {
        lr(9752);Na(42, 9752, o | 0) | 0;d = 8680;c[d >> 2] = 1;c[d + 4 >> 2] = 0;
      }if (!(Ai(9752) | 0)) {
        b = 9752;d = b + 36 | 0;do {
          c[b >> 2] = 0;b = b + 4 | 0;
        } while ((b | 0) < (d | 0));lr(9752);
      }return 9752;
    }function _q(a) {
      a = a | 0;return 0;
    }function $q(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0;k = l;l = l + 48 | 0;e = k + 24 | 0;f = k + 16 | 0;g = k + 32 | 0;h = k;i = k + 8 | 0;m = c[a + 4 >> 2] | 0;c[h >> 2] = c[a >> 2];d = h + 4 | 0;c[d >> 2] = m;m = Zq() | 0;j = m + 24 | 0;c[i >> 2] = mi(b, 4) | 0;a = m + 28 | 0;if ((c[a >> 2] | 0) >>> 0 < (c[m + 32 >> 2] | 0) >>> 0) {
        ar(g, j, 1);b = c[a >> 2] | 0;d = c[d >> 2] | 0;m = c[i >> 2] | 0;c[f >> 2] = c[h >> 2];c[f + 4 >> 2] = d;c[e >> 2] = c[f >> 2];c[e + 4 >> 2] = c[f + 4 >> 2];br(b, e, m);cr(g);m = (c[a >> 2] | 0) + 12 | 0;c[a >> 2] = m;a = m;
      } else {
        dr(j, h, i);a = c[a >> 2] | 0;
      }l = k;return ((a - (c[j >> 2] | 0) | 0) / 12 | 0) + -1 | 0;
    }function ar(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;return;
    }function br(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0;e = c[b + 4 >> 2] | 0;c[a >> 2] = c[b >> 2];c[a + 4 >> 2] = e;c[a + 8 >> 2] = d;return;
    }function cr(a) {
      a = a | 0;return;
    }function dr(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0,
          n = 0,
          o = 0;k = l;l = l + 48 | 0;e = k + 32 | 0;h = k + 24 | 0;i = k;j = a + 4 | 0;f = (((c[j >> 2] | 0) - (c[a >> 2] | 0) | 0) / 12 | 0) + 1 | 0;g = er(a) | 0;if (g >>> 0 < f >>> 0) jF(a);m = c[a >> 2] | 0;o = ((c[a + 8 >> 2] | 0) - m | 0) / 12 | 0;n = o << 1;fr(i, o >>> 0 < g >>> 1 >>> 0 ? n >>> 0 < f >>> 0 ? f : n : g, ((c[j >> 2] | 0) - m | 0) / 12 | 0, a + 8 | 0);j = i + 8 | 0;g = c[j >> 2] | 0;f = c[b + 4 >> 2] | 0;d = c[d >> 2] | 0;c[h >> 2] = c[b >> 2];c[h + 4 >> 2] = f;c[e >> 2] = c[h >> 2];c[e + 4 >> 2] = c[h + 4 >> 2];br(g, e, d);c[j >> 2] = (c[j >> 2] | 0) + 12;gr(a, i);hr(i);l = k;return;
    }function er(a) {
      a = a | 0;return 357913941;
    }function fr(a, b, d, e) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;var f = 0;c[a + 12 >> 2] = 0;c[a + 16 >> 2] = e;do if (b) {
        if (b >>> 0 > 357913941) Ma(5765, 5802, 1734, 5872);else {
          f = qF(b * 12 | 0) | 0;break;
        }
      } else f = 0; while (0);c[a >> 2] = f;e = f + (d * 12 | 0) | 0;c[a + 8 >> 2] = e;c[a + 4 >> 2] = e;c[a + 12 >> 2] = f + (b * 12 | 0);return;
    }function gr(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0;ir(a);e = c[a >> 2] | 0;h = a + 4 | 0;g = b + 4 | 0;f = (c[h >> 2] | 0) - e | 0;d = (c[g >> 2] | 0) + (((f | 0) / -12 | 0) * 12 | 0) | 0;c[g >> 2] = d;if ((f | 0) > 0) {
        AF(d | 0, e | 0, f | 0) | 0;e = g;d = c[g >> 2] | 0;
      } else e = g;g = c[a >> 2] | 0;c[a >> 2] = d;c[e >> 2] = g;d = b + 8 | 0;g = c[h >> 2] | 0;c[h >> 2] = c[d >> 2];c[d >> 2] = g;d = a + 8 | 0;g = b + 12 | 0;f = c[d >> 2] | 0;c[d >> 2] = c[g >> 2];c[g >> 2] = f;c[b >> 2] = c[e >> 2];jr(a, ((c[h >> 2] | 0) - (c[a >> 2] | 0) | 0) / 12 | 0);return;
    }function hr(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;b = c[a + 4 >> 2] | 0;d = a + 8 | 0;e = c[d >> 2] | 0;if ((e | 0) != (b | 0)) c[d >> 2] = e + (~(((e + -12 - b | 0) >>> 0) / 12 | 0) * 12 | 0);a = c[a >> 2] | 0;if (a | 0) sF(a);return;
    }function ir(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;e = c[a >> 2] | 0;d = e;b = e + ((((c[a + 8 >> 2] | 0) - d | 0) / 12 | 0) * 12 | 0) | 0;kr(a, e, b, e + ((((c[a + 4 >> 2] | 0) - d | 0) / 12 | 0) * 12 | 0) | 0, b);return;
    }function jr(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0;d = c[a >> 2] | 0;e = d + ((((c[a + 8 >> 2] | 0) - d | 0) / 12 | 0) * 12 | 0) | 0;kr(a, d, e, e, d + (b * 12 | 0) | 0);return;
    }function kr(a, b, c, d, e) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;e = e | 0;return;
    }function lr(a) {
      a = a | 0;or(a);return;
    }function mr(a) {
      a = a | 0;nr(a + 24 | 0);return;
    }function nr(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;d = c[a >> 2] | 0;e = d;if (d | 0) {
        a = a + 4 | 0;b = c[a >> 2] | 0;if ((b | 0) != (d | 0)) c[a >> 2] = b + (~(((b + -12 - e | 0) >>> 0) / 12 | 0) * 12 | 0);sF(d);
      }return;
    }function or(a) {
      a = a | 0;var b = 0;b = Di() | 0;Gi(a, 2, 8, b, pr() | 0, 1);c[a + 24 >> 2] = 0;c[a + 28 >> 2] = 0;c[a + 32 >> 2] = 0;return;
    }function pr() {
      return 1380;
    }function qr(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0;e = l;l = l + 16 | 0;f = e + 8 | 0;g = e;h = rr(a) | 0;a = c[h + 4 >> 2] | 0;c[g >> 2] = c[h >> 2];c[g + 4 >> 2] = a;c[f >> 2] = c[g >> 2];c[f + 4 >> 2] = c[g + 4 >> 2];sr(b, f, d);l = e;return;
    }function rr(a) {
      a = a | 0;return (c[(Zq() | 0) + 24 >> 2] | 0) + (a * 12 | 0) | 0;
    }function sr(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0;g = l;l = l + 16 | 0;f = g;e = c[b >> 2] | 0;b = c[b + 4 >> 2] | 0;a = a + (b >> 1) | 0;if (b & 1) e = c[(c[a >> 2] | 0) + e >> 2] | 0;tr(f, d);f = ur(f, d) | 0;yb[e & 31](a, f);l = g;return;
    }function tr(a, b) {
      a = a | 0;b = b | 0;return;
    }function ur(a, b) {
      a = a | 0;b = b | 0;return vr(b) | 0;
    }function vr(a) {
      a = a | 0;return a | 0;
    }function wr(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0;e = l;l = l + 16 | 0;f = e + 8 | 0;g = e;i = c[d >> 2] | 0;h = c[d + 4 >> 2] | 0;d = di(b) | 0;c[g >> 2] = i;c[g + 4 >> 2] = h;c[f >> 2] = c[g >> 2];c[f + 4 >> 2] = c[g + 4 >> 2];xr(a, d, f, 0);l = e;return;
    }function xr(a, b, d, e) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0;f = l;l = l + 32 | 0;g = f + 16 | 0;m = f + 8 | 0;i = f;k = c[d >> 2] | 0;j = c[d + 4 >> 2] | 0;h = c[a >> 2] | 0;a = yr() | 0;c[m >> 2] = k;c[m + 4 >> 2] = j;c[g >> 2] = c[m >> 2];c[g + 4 >> 2] = c[m + 4 >> 2];d = zr(g) | 0;c[i >> 2] = k;c[i + 4 >> 2] = j;c[g >> 2] = c[i >> 2];c[g + 4 >> 2] = c[i + 4 >> 2];ii(h, b, a, d, Ar(g, e) | 0, e);l = f;return;
    }function yr() {
      var b = 0,
          d = 0;if (!(a[8688] | 0)) {
        Mr(9788);Na(43, 9788, o | 0) | 0;d = 8688;c[d >> 2] = 1;c[d + 4 >> 2] = 0;
      }if (!(Ai(9788) | 0)) {
        b = 9788;d = b + 36 | 0;do {
          c[b >> 2] = 0;b = b + 4 | 0;
        } while ((b | 0) < (d | 0));Mr(9788);
      }return 9788;
    }function zr(a) {
      a = a | 0;return 0;
    }function Ar(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0;k = l;l = l + 48 | 0;e = k + 24 | 0;f = k + 16 | 0;g = k + 32 | 0;h = k;i = k + 8 | 0;m = c[a + 4 >> 2] | 0;c[h >> 2] = c[a >> 2];d = h + 4 | 0;c[d >> 2] = m;m = yr() | 0;j = m + 24 | 0;c[i >> 2] = mi(b, 4) | 0;a = m + 28 | 0;if ((c[a >> 2] | 0) >>> 0 < (c[m + 32 >> 2] | 0) >>> 0) {
        Br(g, j, 1);b = c[a >> 2] | 0;d = c[d >> 2] | 0;m = c[i >> 2] | 0;c[f >> 2] = c[h >> 2];c[f + 4 >> 2] = d;c[e >> 2] = c[f >> 2];c[e + 4 >> 2] = c[f + 4 >> 2];Cr(b, e, m);Dr(g);m = (c[a >> 2] | 0) + 12 | 0;c[a >> 2] = m;a = m;
      } else {
        Er(j, h, i);a = c[a >> 2] | 0;
      }l = k;return ((a - (c[j >> 2] | 0) | 0) / 12 | 0) + -1 | 0;
    }function Br(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;return;
    }function Cr(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0;e = c[b + 4 >> 2] | 0;c[a >> 2] = c[b >> 2];c[a + 4 >> 2] = e;c[a + 8 >> 2] = d;return;
    }function Dr(a) {
      a = a | 0;return;
    }function Er(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0,
          n = 0,
          o = 0;k = l;l = l + 48 | 0;e = k + 32 | 0;h = k + 24 | 0;i = k;j = a + 4 | 0;f = (((c[j >> 2] | 0) - (c[a >> 2] | 0) | 0) / 12 | 0) + 1 | 0;g = Fr(a) | 0;if (g >>> 0 < f >>> 0) jF(a);m = c[a >> 2] | 0;o = ((c[a + 8 >> 2] | 0) - m | 0) / 12 | 0;n = o << 1;Gr(i, o >>> 0 < g >>> 1 >>> 0 ? n >>> 0 < f >>> 0 ? f : n : g, ((c[j >> 2] | 0) - m | 0) / 12 | 0, a + 8 | 0);j = i + 8 | 0;g = c[j >> 2] | 0;f = c[b + 4 >> 2] | 0;d = c[d >> 2] | 0;c[h >> 2] = c[b >> 2];c[h + 4 >> 2] = f;c[e >> 2] = c[h >> 2];c[e + 4 >> 2] = c[h + 4 >> 2];Cr(g, e, d);c[j >> 2] = (c[j >> 2] | 0) + 12;Hr(a, i);Ir(i);l = k;return;
    }function Fr(a) {
      a = a | 0;return 357913941;
    }function Gr(a, b, d, e) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;var f = 0;c[a + 12 >> 2] = 0;c[a + 16 >> 2] = e;do if (b) {
        if (b >>> 0 > 357913941) Ma(5765, 5802, 1734, 5872);else {
          f = qF(b * 12 | 0) | 0;break;
        }
      } else f = 0; while (0);c[a >> 2] = f;e = f + (d * 12 | 0) | 0;c[a + 8 >> 2] = e;c[a + 4 >> 2] = e;c[a + 12 >> 2] = f + (b * 12 | 0);return;
    }function Hr(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0;Jr(a);e = c[a >> 2] | 0;h = a + 4 | 0;g = b + 4 | 0;f = (c[h >> 2] | 0) - e | 0;d = (c[g >> 2] | 0) + (((f | 0) / -12 | 0) * 12 | 0) | 0;c[g >> 2] = d;if ((f | 0) > 0) {
        AF(d | 0, e | 0, f | 0) | 0;e = g;d = c[g >> 2] | 0;
      } else e = g;g = c[a >> 2] | 0;c[a >> 2] = d;c[e >> 2] = g;d = b + 8 | 0;g = c[h >> 2] | 0;c[h >> 2] = c[d >> 2];c[d >> 2] = g;d = a + 8 | 0;g = b + 12 | 0;f = c[d >> 2] | 0;c[d >> 2] = c[g >> 2];c[g >> 2] = f;c[b >> 2] = c[e >> 2];Kr(a, ((c[h >> 2] | 0) - (c[a >> 2] | 0) | 0) / 12 | 0);return;
    }function Ir(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;b = c[a + 4 >> 2] | 0;d = a + 8 | 0;e = c[d >> 2] | 0;if ((e | 0) != (b | 0)) c[d >> 2] = e + (~(((e + -12 - b | 0) >>> 0) / 12 | 0) * 12 | 0);a = c[a >> 2] | 0;if (a | 0) sF(a);return;
    }function Jr(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;e = c[a >> 2] | 0;d = e;b = e + ((((c[a + 8 >> 2] | 0) - d | 0) / 12 | 0) * 12 | 0) | 0;Lr(a, e, b, e + ((((c[a + 4 >> 2] | 0) - d | 0) / 12 | 0) * 12 | 0) | 0, b);return;
    }function Kr(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0;d = c[a >> 2] | 0;e = d + ((((c[a + 8 >> 2] | 0) - d | 0) / 12 | 0) * 12 | 0) | 0;Lr(a, d, e, e, d + (b * 12 | 0) | 0);return;
    }function Lr(a, b, c, d, e) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;e = e | 0;return;
    }function Mr(a) {
      a = a | 0;Pr(a);return;
    }function Nr(a) {
      a = a | 0;Or(a + 24 | 0);return;
    }function Or(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;d = c[a >> 2] | 0;e = d;if (d | 0) {
        a = a + 4 | 0;b = c[a >> 2] | 0;if ((b | 0) != (d | 0)) c[a >> 2] = b + (~(((b + -12 - e | 0) >>> 0) / 12 | 0) * 12 | 0);sF(d);
      }return;
    }function Pr(a) {
      a = a | 0;var b = 0;b = Di() | 0;Gi(a, 2, 22, b, Qr() | 0, 0);c[a + 24 >> 2] = 0;c[a + 28 >> 2] = 0;c[a + 32 >> 2] = 0;return;
    }function Qr() {
      return 1404;
    }function Rr(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0;d = l;l = l + 16 | 0;e = d + 8 | 0;f = d;g = Sr(a) | 0;a = c[g + 4 >> 2] | 0;c[f >> 2] = c[g >> 2];c[f + 4 >> 2] = a;c[e >> 2] = c[f >> 2];c[e + 4 >> 2] = c[f + 4 >> 2];Tr(b, e);l = d;return;
    }function Sr(a) {
      a = a | 0;return (c[(yr() | 0) + 24 >> 2] | 0) + (a * 12 | 0) | 0;
    }function Tr(a, b) {
      a = a | 0;b = b | 0;var d = 0;d = c[b >> 2] | 0;b = c[b + 4 >> 2] | 0;a = a + (b >> 1) | 0;if (b & 1) d = c[(c[a >> 2] | 0) + d >> 2] | 0;xb[d & 127](a);return;
    }function Ur(a, b, d, e) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0;g = c[a >> 2] | 0;f = Vr() | 0;a = Wr(d) | 0;ii(g, b, f, a, Xr(d, e) | 0, e);return;
    }function Vr() {
      var b = 0,
          d = 0;if (!(a[8696] | 0)) {
        hs(9824);Na(44, 9824, o | 0) | 0;d = 8696;c[d >> 2] = 1;c[d + 4 >> 2] = 0;
      }if (!(Ai(9824) | 0)) {
        b = 9824;d = b + 36 | 0;do {
          c[b >> 2] = 0;b = b + 4 | 0;
        } while ((b | 0) < (d | 0));hs(9824);
      }return 9824;
    }function Wr(a) {
      a = a | 0;return a | 0;
    }function Xr(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0;h = l;l = l + 16 | 0;d = h + 8 | 0;e = h;f = h + 4 | 0;c[e >> 2] = a;i = Vr() | 0;g = i + 24 | 0;c[f >> 2] = mi(b, 4) | 0;a = i + 28 | 0;if ((c[a >> 2] | 0) >>> 0 < (c[i + 32 >> 2] | 0) >>> 0) {
        Yr(d, g, 1);Zr(c[a >> 2] | 0, c[e >> 2] | 0, c[f >> 2] | 0);_r(d);i = (c[a >> 2] | 0) + 8 | 0;c[a >> 2] = i;a = i;
      } else {
        $r(g, e, f);a = c[a >> 2] | 0;
      }l = h;return (a - (c[g >> 2] | 0) >> 3) + -1 | 0;
    }function Yr(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;return;
    }function Zr(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;c[a >> 2] = b;c[a + 4 >> 2] = d;return;
    }function _r(a) {
      a = a | 0;return;
    }function $r(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0;i = l;l = l + 32 | 0;g = i;h = a + 4 | 0;e = ((c[h >> 2] | 0) - (c[a >> 2] | 0) >> 3) + 1 | 0;f = as(a) | 0;if (f >>> 0 < e >>> 0) jF(a);j = c[a >> 2] | 0;m = (c[a + 8 >> 2] | 0) - j | 0;k = m >> 2;bs(g, m >> 3 >>> 0 < f >>> 1 >>> 0 ? k >>> 0 < e >>> 0 ? e : k : f, (c[h >> 2] | 0) - j >> 3, a + 8 | 0);h = g + 8 | 0;Zr(c[h >> 2] | 0, c[b >> 2] | 0, c[d >> 2] | 0);c[h >> 2] = (c[h >> 2] | 0) + 8;cs(a, g);ds(g);l = i;return;
    }function as(a) {
      a = a | 0;return 536870911;
    }function bs(a, b, d, e) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;var f = 0;c[a + 12 >> 2] = 0;c[a + 16 >> 2] = e;do if (b) {
        if (b >>> 0 > 536870911) Ma(5765, 5802, 1734, 5872);else {
          f = qF(b << 3) | 0;break;
        }
      } else f = 0; while (0);c[a >> 2] = f;e = f + (d << 3) | 0;c[a + 8 >> 2] = e;c[a + 4 >> 2] = e;c[a + 12 >> 2] = f + (b << 3);return;
    }function cs(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0;es(a);e = c[a >> 2] | 0;h = a + 4 | 0;g = b + 4 | 0;f = (c[h >> 2] | 0) - e | 0;d = (c[g >> 2] | 0) + (0 - (f >> 3) << 3) | 0;c[g >> 2] = d;if ((f | 0) > 0) {
        AF(d | 0, e | 0, f | 0) | 0;e = g;d = c[g >> 2] | 0;
      } else e = g;g = c[a >> 2] | 0;c[a >> 2] = d;c[e >> 2] = g;d = b + 8 | 0;g = c[h >> 2] | 0;c[h >> 2] = c[d >> 2];c[d >> 2] = g;d = a + 8 | 0;g = b + 12 | 0;f = c[d >> 2] | 0;c[d >> 2] = c[g >> 2];c[g >> 2] = f;c[b >> 2] = c[e >> 2];fs(a, (c[h >> 2] | 0) - (c[a >> 2] | 0) >> 3);return;
    }function ds(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;b = c[a + 4 >> 2] | 0;d = a + 8 | 0;e = c[d >> 2] | 0;if ((e | 0) != (b | 0)) c[d >> 2] = e + (~((e + -8 - b | 0) >>> 3) << 3);a = c[a >> 2] | 0;if (a | 0) sF(a);return;
    }function es(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;e = c[a >> 2] | 0;d = e;b = e + ((c[a + 8 >> 2] | 0) - d >> 3 << 3) | 0;gs(a, e, b, e + ((c[a + 4 >> 2] | 0) - d >> 3 << 3) | 0, b);return;
    }function fs(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0;d = c[a >> 2] | 0;e = d + ((c[a + 8 >> 2] | 0) - d >> 3 << 3) | 0;gs(a, d, e, e, d + (b << 3) | 0);return;
    }function gs(a, b, c, d, e) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;e = e | 0;return;
    }function hs(a) {
      a = a | 0;ks(a);return;
    }function is(a) {
      a = a | 0;js(a + 24 | 0);return;
    }function js(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;d = c[a >> 2] | 0;e = d;if (d | 0) {
        a = a + 4 | 0;b = c[a >> 2] | 0;if ((b | 0) != (d | 0)) c[a >> 2] = b + (~((b + -8 - e | 0) >>> 3) << 3);sF(d);
      }return;
    }function ks(a) {
      a = a | 0;var b = 0;b = Di() | 0;Gi(a, 1, 23, b, zm() | 0, 1);c[a + 24 >> 2] = 0;c[a + 28 >> 2] = 0;c[a + 32 >> 2] = 0;return;
    }function ls(a, b) {
      a = a | 0;b = b | 0;ns(c[(ms(a) | 0) >> 2] | 0, b);return;
    }function ms(a) {
      a = a | 0;return (c[(Vr() | 0) + 24 >> 2] | 0) + (a << 3) | 0;
    }function ns(a, b) {
      a = a | 0;b = b | 0;var c = 0,
          d = 0;c = l;l = l + 16 | 0;d = c;Dm(d, b);b = Em(d, b) | 0;xb[a & 127](b);l = c;return;
    }function os(a, b, d, e) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0;g = c[a >> 2] | 0;f = ps() | 0;a = qs(d) | 0;ii(g, b, f, a, rs(d, e) | 0, e);return;
    }function ps() {
      var b = 0,
          d = 0;if (!(a[8704] | 0)) {
        Ds(9860);Na(45, 9860, o | 0) | 0;d = 8704;c[d >> 2] = 1;c[d + 4 >> 2] = 0;
      }if (!(Ai(9860) | 0)) {
        b = 9860;d = b + 36 | 0;do {
          c[b >> 2] = 0;b = b + 4 | 0;
        } while ((b | 0) < (d | 0));Ds(9860);
      }return 9860;
    }function qs(a) {
      a = a | 0;return a | 0;
    }function rs(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0;h = l;l = l + 16 | 0;d = h + 8 | 0;e = h;f = h + 4 | 0;c[e >> 2] = a;i = ps() | 0;g = i + 24 | 0;c[f >> 2] = mi(b, 4) | 0;a = i + 28 | 0;if ((c[a >> 2] | 0) >>> 0 < (c[i + 32 >> 2] | 0) >>> 0) {
        ss(d, g, 1);ts(c[a >> 2] | 0, c[e >> 2] | 0, c[f >> 2] | 0);us(d);i = (c[a >> 2] | 0) + 8 | 0;c[a >> 2] = i;a = i;
      } else {
        vs(g, e, f);a = c[a >> 2] | 0;
      }l = h;return (a - (c[g >> 2] | 0) >> 3) + -1 | 0;
    }function ss(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;return;
    }function ts(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;c[a >> 2] = b;c[a + 4 >> 2] = d;return;
    }function us(a) {
      a = a | 0;return;
    }function vs(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0;i = l;l = l + 32 | 0;g = i;h = a + 4 | 0;e = ((c[h >> 2] | 0) - (c[a >> 2] | 0) >> 3) + 1 | 0;f = ws(a) | 0;if (f >>> 0 < e >>> 0) jF(a);j = c[a >> 2] | 0;m = (c[a + 8 >> 2] | 0) - j | 0;k = m >> 2;xs(g, m >> 3 >>> 0 < f >>> 1 >>> 0 ? k >>> 0 < e >>> 0 ? e : k : f, (c[h >> 2] | 0) - j >> 3, a + 8 | 0);h = g + 8 | 0;ts(c[h >> 2] | 0, c[b >> 2] | 0, c[d >> 2] | 0);c[h >> 2] = (c[h >> 2] | 0) + 8;ys(a, g);zs(g);l = i;return;
    }function ws(a) {
      a = a | 0;return 536870911;
    }function xs(a, b, d, e) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;var f = 0;c[a + 12 >> 2] = 0;c[a + 16 >> 2] = e;do if (b) {
        if (b >>> 0 > 536870911) Ma(5765, 5802, 1734, 5872);else {
          f = qF(b << 3) | 0;break;
        }
      } else f = 0; while (0);c[a >> 2] = f;e = f + (d << 3) | 0;c[a + 8 >> 2] = e;c[a + 4 >> 2] = e;c[a + 12 >> 2] = f + (b << 3);return;
    }function ys(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0;As(a);e = c[a >> 2] | 0;h = a + 4 | 0;g = b + 4 | 0;f = (c[h >> 2] | 0) - e | 0;d = (c[g >> 2] | 0) + (0 - (f >> 3) << 3) | 0;c[g >> 2] = d;if ((f | 0) > 0) {
        AF(d | 0, e | 0, f | 0) | 0;e = g;d = c[g >> 2] | 0;
      } else e = g;g = c[a >> 2] | 0;c[a >> 2] = d;c[e >> 2] = g;d = b + 8 | 0;g = c[h >> 2] | 0;c[h >> 2] = c[d >> 2];c[d >> 2] = g;d = a + 8 | 0;g = b + 12 | 0;f = c[d >> 2] | 0;c[d >> 2] = c[g >> 2];c[g >> 2] = f;c[b >> 2] = c[e >> 2];Bs(a, (c[h >> 2] | 0) - (c[a >> 2] | 0) >> 3);return;
    }function zs(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;b = c[a + 4 >> 2] | 0;d = a + 8 | 0;e = c[d >> 2] | 0;if ((e | 0) != (b | 0)) c[d >> 2] = e + (~((e + -8 - b | 0) >>> 3) << 3);a = c[a >> 2] | 0;if (a | 0) sF(a);return;
    }function As(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;e = c[a >> 2] | 0;d = e;b = e + ((c[a + 8 >> 2] | 0) - d >> 3 << 3) | 0;Cs(a, e, b, e + ((c[a + 4 >> 2] | 0) - d >> 3 << 3) | 0, b);return;
    }function Bs(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0;d = c[a >> 2] | 0;e = d + ((c[a + 8 >> 2] | 0) - d >> 3 << 3) | 0;Cs(a, d, e, e, d + (b << 3) | 0);return;
    }function Cs(a, b, c, d, e) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;e = e | 0;return;
    }function Ds(a) {
      a = a | 0;Gs(a);return;
    }function Es(a) {
      a = a | 0;Fs(a + 24 | 0);return;
    }function Fs(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;d = c[a >> 2] | 0;e = d;if (d | 0) {
        a = a + 4 | 0;b = c[a >> 2] | 0;if ((b | 0) != (d | 0)) c[a >> 2] = b + (~((b + -8 - e | 0) >>> 3) << 3);sF(d);
      }return;
    }function Gs(a) {
      a = a | 0;var b = 0;b = Di() | 0;Gi(a, 1, 10, b, Hs() | 0, 1);c[a + 24 >> 2] = 0;c[a + 28 >> 2] = 0;c[a + 32 >> 2] = 0;return;
    }function Hs() {
      return 1408;
    }function Is(a, b) {
      a = a | 0;b = b | 0;return Ks(c[(Js(a) | 0) >> 2] | 0, b) | 0;
    }function Js(a) {
      a = a | 0;return (c[(ps() | 0) + 24 >> 2] | 0) + (a << 3) | 0;
    }function Ks(a, b) {
      a = a | 0;b = b | 0;var c = 0,
          d = 0;c = l;l = l + 16 | 0;d = c;Ls(d, b);b = Ms(d, b) | 0;b = il(zb[a & 31](b) | 0) | 0;l = c;return b | 0;
    }function Ls(a, b) {
      a = a | 0;b = b | 0;return;
    }function Ms(a, b) {
      a = a | 0;b = b | 0;return Ns(b) | 0;
    }function Ns(a) {
      a = a | 0;return a | 0;
    }function Os(a, b, d, e) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0;g = c[a >> 2] | 0;f = Ps() | 0;a = Qs(d) | 0;ii(g, b, f, a, Rs(d, e) | 0, e);return;
    }function Ps() {
      var b = 0,
          d = 0;if (!(a[8712] | 0)) {
        bt(9896);Na(46, 9896, o | 0) | 0;d = 8712;c[d >> 2] = 1;c[d + 4 >> 2] = 0;
      }if (!(Ai(9896) | 0)) {
        b = 9896;d = b + 36 | 0;do {
          c[b >> 2] = 0;b = b + 4 | 0;
        } while ((b | 0) < (d | 0));bt(9896);
      }return 9896;
    }function Qs(a) {
      a = a | 0;return a | 0;
    }function Rs(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0;h = l;l = l + 16 | 0;d = h + 8 | 0;e = h;f = h + 4 | 0;c[e >> 2] = a;i = Ps() | 0;g = i + 24 | 0;c[f >> 2] = mi(b, 4) | 0;a = i + 28 | 0;if ((c[a >> 2] | 0) >>> 0 < (c[i + 32 >> 2] | 0) >>> 0) {
        Ss(d, g, 1);Ts(c[a >> 2] | 0, c[e >> 2] | 0, c[f >> 2] | 0);Us(d);i = (c[a >> 2] | 0) + 8 | 0;c[a >> 2] = i;a = i;
      } else {
        Vs(g, e, f);a = c[a >> 2] | 0;
      }l = h;return (a - (c[g >> 2] | 0) >> 3) + -1 | 0;
    }function Ss(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;return;
    }function Ts(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;c[a >> 2] = b;c[a + 4 >> 2] = d;return;
    }function Us(a) {
      a = a | 0;return;
    }function Vs(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0;i = l;l = l + 32 | 0;g = i;h = a + 4 | 0;e = ((c[h >> 2] | 0) - (c[a >> 2] | 0) >> 3) + 1 | 0;f = Ws(a) | 0;if (f >>> 0 < e >>> 0) jF(a);j = c[a >> 2] | 0;m = (c[a + 8 >> 2] | 0) - j | 0;k = m >> 2;Xs(g, m >> 3 >>> 0 < f >>> 1 >>> 0 ? k >>> 0 < e >>> 0 ? e : k : f, (c[h >> 2] | 0) - j >> 3, a + 8 | 0);h = g + 8 | 0;Ts(c[h >> 2] | 0, c[b >> 2] | 0, c[d >> 2] | 0);c[h >> 2] = (c[h >> 2] | 0) + 8;Ys(a, g);Zs(g);l = i;return;
    }function Ws(a) {
      a = a | 0;return 536870911;
    }function Xs(a, b, d, e) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;var f = 0;c[a + 12 >> 2] = 0;c[a + 16 >> 2] = e;do if (b) {
        if (b >>> 0 > 536870911) Ma(5765, 5802, 1734, 5872);else {
          f = qF(b << 3) | 0;break;
        }
      } else f = 0; while (0);c[a >> 2] = f;e = f + (d << 3) | 0;c[a + 8 >> 2] = e;c[a + 4 >> 2] = e;c[a + 12 >> 2] = f + (b << 3);return;
    }function Ys(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0;_s(a);e = c[a >> 2] | 0;h = a + 4 | 0;g = b + 4 | 0;f = (c[h >> 2] | 0) - e | 0;d = (c[g >> 2] | 0) + (0 - (f >> 3) << 3) | 0;c[g >> 2] = d;if ((f | 0) > 0) {
        AF(d | 0, e | 0, f | 0) | 0;e = g;d = c[g >> 2] | 0;
      } else e = g;g = c[a >> 2] | 0;c[a >> 2] = d;c[e >> 2] = g;d = b + 8 | 0;g = c[h >> 2] | 0;c[h >> 2] = c[d >> 2];c[d >> 2] = g;d = a + 8 | 0;g = b + 12 | 0;f = c[d >> 2] | 0;c[d >> 2] = c[g >> 2];c[g >> 2] = f;c[b >> 2] = c[e >> 2];$s(a, (c[h >> 2] | 0) - (c[a >> 2] | 0) >> 3);return;
    }function Zs(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;b = c[a + 4 >> 2] | 0;d = a + 8 | 0;e = c[d >> 2] | 0;if ((e | 0) != (b | 0)) c[d >> 2] = e + (~((e + -8 - b | 0) >>> 3) << 3);a = c[a >> 2] | 0;if (a | 0) sF(a);return;
    }function _s(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;e = c[a >> 2] | 0;d = e;b = e + ((c[a + 8 >> 2] | 0) - d >> 3 << 3) | 0;at(a, e, b, e + ((c[a + 4 >> 2] | 0) - d >> 3 << 3) | 0, b);return;
    }function $s(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0;d = c[a >> 2] | 0;e = d + ((c[a + 8 >> 2] | 0) - d >> 3 << 3) | 0;at(a, d, e, e, d + (b << 3) | 0);return;
    }function at(a, b, c, d, e) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;e = e | 0;return;
    }function bt(a) {
      a = a | 0;et(a);return;
    }function ct(a) {
      a = a | 0;dt(a + 24 | 0);return;
    }function dt(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;d = c[a >> 2] | 0;e = d;if (d | 0) {
        a = a + 4 | 0;b = c[a >> 2] | 0;if ((b | 0) != (d | 0)) c[a >> 2] = b + (~((b + -8 - e | 0) >>> 3) << 3);sF(d);
      }return;
    }function et(a) {
      a = a | 0;var b = 0;b = Di() | 0;Gi(a, 1, 16, b, El() | 0, 0);c[a + 24 >> 2] = 0;c[a + 28 >> 2] = 0;c[a + 32 >> 2] = 0;return;
    }function ft(a) {
      a = a | 0;return ht(c[(gt(a) | 0) >> 2] | 0) | 0;
    }function gt(a) {
      a = a | 0;return (c[(Ps() | 0) + 24 >> 2] | 0) + (a << 3) | 0;
    }function ht(a) {
      a = a | 0;return il(Kb[a & 7]() | 0) | 0;
    }function it() {
      var b = 0;if (!(a[8728] | 0)) {
        st(9940);Na(25, 9940, o | 0) | 0;b = 8728;c[b >> 2] = 1;c[b + 4 >> 2] = 0;
      }return 9940;
    }function jt(a, b) {
      a = a | 0;b = b | 0;c[a >> 2] = kt() | 0;c[a + 4 >> 2] = lt() | 0;c[a + 12 >> 2] = b;c[a + 8 >> 2] = mt() | 0;c[a + 32 >> 2] = 2;return;
    }function kt() {
      return 11561;
    }function lt() {
      return 1248;
    }function mt() {
      return qt() | 0;
    }function nt(a, b, c, d) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;if ((ot(d, 896) | 0) == 512) {
        if (c | 0) {
          pt(c);sF(c);
        }
      } else if (b | 0) {
        xf(b);sF(b);
      }return;
    }function ot(a, b) {
      a = a | 0;b = b | 0;return b & a | 0;
    }function pt(a) {
      a = a | 0;a = c[a + 4 >> 2] | 0;if (a | 0) oF(a);return;
    }function qt() {
      var b = 0;if (!(a[8720] | 0)) {
        c[2483] = rt() | 0;c[2484] = 0;b = 8720;c[b >> 2] = 1;c[b + 4 >> 2] = 0;
      }return 9932;
    }function rt() {
      return 0;
    }function st(a) {
      a = a | 0;fj(a);return;
    }function tt(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0,
          f = 0;b = l;l = l + 32 | 0;d = b + 16 | 0;f = b + 8 | 0;e = b;ut(a, 5511);vt(a, 5518, 3) | 0;wt(a, 4366, 47) | 0;c[f >> 2] = 9;c[f + 4 >> 2] = 0;c[d >> 2] = c[f >> 2];c[d + 4 >> 2] = c[f + 4 >> 2];xt(a, 5525, d) | 0;c[e >> 2] = 11;c[e + 4 >> 2] = 0;c[d >> 2] = c[e >> 2];c[d + 4 >> 2] = c[e + 4 >> 2];yt(a, 5555, d) | 0;l = b;return;
    }function ut(a, b) {
      a = a | 0;b = b | 0;var d = 0;d = pv() | 0;c[a >> 2] = d;qv(d, b);Ox(c[a >> 2] | 0);return;
    }function vt(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;Tu(a, di(b) | 0, c, 0);return a | 0;
    }function wt(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;wu(a, di(b) | 0, c, 0);return a | 0;
    }function xt(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0;e = l;l = l + 16 | 0;f = e + 8 | 0;g = e;h = c[d + 4 >> 2] | 0;c[g >> 2] = c[d >> 2];c[g + 4 >> 2] = h;c[f >> 2] = c[g >> 2];c[f + 4 >> 2] = c[g + 4 >> 2];Xt(a, b, f);l = e;return a | 0;
    }function yt(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0;e = l;l = l + 16 | 0;f = e + 8 | 0;g = e;h = c[d + 4 >> 2] | 0;c[g >> 2] = c[d >> 2];c[g + 4 >> 2] = h;c[f >> 2] = c[g >> 2];c[f + 4 >> 2] = c[g + 4 >> 2];zt(a, b, f);l = e;return a | 0;
    }function zt(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0;e = l;l = l + 16 | 0;f = e + 8 | 0;g = e;i = c[d >> 2] | 0;h = c[d + 4 >> 2] | 0;d = di(b) | 0;c[g >> 2] = i;c[g + 4 >> 2] = h;c[f >> 2] = c[g >> 2];c[f + 4 >> 2] = c[g + 4 >> 2];At(a, d, f, 1);l = e;return;
    }function At(a, b, d, e) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0;f = l;l = l + 32 | 0;g = f + 16 | 0;m = f + 8 | 0;i = f;k = c[d >> 2] | 0;j = c[d + 4 >> 2] | 0;h = c[a >> 2] | 0;a = Bt() | 0;c[m >> 2] = k;c[m + 4 >> 2] = j;c[g >> 2] = c[m >> 2];c[g + 4 >> 2] = c[m + 4 >> 2];d = Ct(g) | 0;c[i >> 2] = k;c[i + 4 >> 2] = j;c[g >> 2] = c[i >> 2];c[g + 4 >> 2] = c[i + 4 >> 2];ii(h, b, a, d, Dt(g, e) | 0, e);l = f;return;
    }function Bt() {
      var b = 0,
          d = 0;if (!(a[8736] | 0)) {
        Pt(9988);Na(48, 9988, o | 0) | 0;d = 8736;c[d >> 2] = 1;c[d + 4 >> 2] = 0;
      }if (!(Ai(9988) | 0)) {
        b = 9988;d = b + 36 | 0;do {
          c[b >> 2] = 0;b = b + 4 | 0;
        } while ((b | 0) < (d | 0));Pt(9988);
      }return 9988;
    }function Ct(a) {
      a = a | 0;return 0;
    }function Dt(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0;k = l;l = l + 48 | 0;e = k + 24 | 0;f = k + 16 | 0;g = k + 32 | 0;h = k;i = k + 8 | 0;m = c[a + 4 >> 2] | 0;c[h >> 2] = c[a >> 2];d = h + 4 | 0;c[d >> 2] = m;m = Bt() | 0;j = m + 24 | 0;c[i >> 2] = mi(b, 4) | 0;a = m + 28 | 0;if ((c[a >> 2] | 0) >>> 0 < (c[m + 32 >> 2] | 0) >>> 0) {
        Et(g, j, 1);b = c[a >> 2] | 0;d = c[d >> 2] | 0;m = c[i >> 2] | 0;c[f >> 2] = c[h >> 2];c[f + 4 >> 2] = d;c[e >> 2] = c[f >> 2];c[e + 4 >> 2] = c[f + 4 >> 2];Ft(b, e, m);Gt(g);m = (c[a >> 2] | 0) + 12 | 0;c[a >> 2] = m;a = m;
      } else {
        Ht(j, h, i);a = c[a >> 2] | 0;
      }l = k;return ((a - (c[j >> 2] | 0) | 0) / 12 | 0) + -1 | 0;
    }function Et(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;return;
    }function Ft(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0;e = c[b + 4 >> 2] | 0;c[a >> 2] = c[b >> 2];c[a + 4 >> 2] = e;c[a + 8 >> 2] = d;return;
    }function Gt(a) {
      a = a | 0;return;
    }function Ht(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0,
          n = 0,
          o = 0;k = l;l = l + 48 | 0;e = k + 32 | 0;h = k + 24 | 0;i = k;j = a + 4 | 0;f = (((c[j >> 2] | 0) - (c[a >> 2] | 0) | 0) / 12 | 0) + 1 | 0;g = It(a) | 0;if (g >>> 0 < f >>> 0) jF(a);m = c[a >> 2] | 0;o = ((c[a + 8 >> 2] | 0) - m | 0) / 12 | 0;n = o << 1;Jt(i, o >>> 0 < g >>> 1 >>> 0 ? n >>> 0 < f >>> 0 ? f : n : g, ((c[j >> 2] | 0) - m | 0) / 12 | 0, a + 8 | 0);j = i + 8 | 0;g = c[j >> 2] | 0;f = c[b + 4 >> 2] | 0;d = c[d >> 2] | 0;c[h >> 2] = c[b >> 2];c[h + 4 >> 2] = f;c[e >> 2] = c[h >> 2];c[e + 4 >> 2] = c[h + 4 >> 2];Ft(g, e, d);c[j >> 2] = (c[j >> 2] | 0) + 12;Kt(a, i);Lt(i);l = k;return;
    }function It(a) {
      a = a | 0;return 357913941;
    }function Jt(a, b, d, e) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;var f = 0;c[a + 12 >> 2] = 0;c[a + 16 >> 2] = e;do if (b) {
        if (b >>> 0 > 357913941) Ma(5765, 5802, 1734, 5872);else {
          f = qF(b * 12 | 0) | 0;break;
        }
      } else f = 0; while (0);c[a >> 2] = f;e = f + (d * 12 | 0) | 0;c[a + 8 >> 2] = e;c[a + 4 >> 2] = e;c[a + 12 >> 2] = f + (b * 12 | 0);return;
    }function Kt(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0;Mt(a);e = c[a >> 2] | 0;h = a + 4 | 0;g = b + 4 | 0;f = (c[h >> 2] | 0) - e | 0;d = (c[g >> 2] | 0) + (((f | 0) / -12 | 0) * 12 | 0) | 0;c[g >> 2] = d;if ((f | 0) > 0) {
        AF(d | 0, e | 0, f | 0) | 0;e = g;d = c[g >> 2] | 0;
      } else e = g;g = c[a >> 2] | 0;c[a >> 2] = d;c[e >> 2] = g;d = b + 8 | 0;g = c[h >> 2] | 0;c[h >> 2] = c[d >> 2];c[d >> 2] = g;d = a + 8 | 0;g = b + 12 | 0;f = c[d >> 2] | 0;c[d >> 2] = c[g >> 2];c[g >> 2] = f;c[b >> 2] = c[e >> 2];Nt(a, ((c[h >> 2] | 0) - (c[a >> 2] | 0) | 0) / 12 | 0);return;
    }function Lt(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;b = c[a + 4 >> 2] | 0;d = a + 8 | 0;e = c[d >> 2] | 0;if ((e | 0) != (b | 0)) c[d >> 2] = e + (~(((e + -12 - b | 0) >>> 0) / 12 | 0) * 12 | 0);a = c[a >> 2] | 0;if (a | 0) sF(a);return;
    }function Mt(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;e = c[a >> 2] | 0;d = e;b = e + ((((c[a + 8 >> 2] | 0) - d | 0) / 12 | 0) * 12 | 0) | 0;Ot(a, e, b, e + ((((c[a + 4 >> 2] | 0) - d | 0) / 12 | 0) * 12 | 0) | 0, b);return;
    }function Nt(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0;d = c[a >> 2] | 0;e = d + ((((c[a + 8 >> 2] | 0) - d | 0) / 12 | 0) * 12 | 0) | 0;Ot(a, d, e, e, d + (b * 12 | 0) | 0);return;
    }function Ot(a, b, c, d, e) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;e = e | 0;return;
    }function Pt(a) {
      a = a | 0;St(a);return;
    }function Qt(a) {
      a = a | 0;Rt(a + 24 | 0);return;
    }function Rt(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;d = c[a >> 2] | 0;e = d;if (d | 0) {
        a = a + 4 | 0;b = c[a >> 2] | 0;if ((b | 0) != (d | 0)) c[a >> 2] = b + (~(((b + -12 - e | 0) >>> 0) / 12 | 0) * 12 | 0);sF(d);
      }return;
    }function St(a) {
      a = a | 0;var b = 0;b = Di() | 0;Gi(a, 2, 7, b, Tt() | 0, 1);c[a + 24 >> 2] = 0;c[a + 28 >> 2] = 0;c[a + 32 >> 2] = 0;return;
    }function Tt() {
      return 1424;
    }function Ut(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0;e = l;l = l + 16 | 0;f = e + 8 | 0;g = e;h = Vt(a) | 0;a = c[h + 4 >> 2] | 0;c[g >> 2] = c[h >> 2];c[g + 4 >> 2] = a;c[f >> 2] = c[g >> 2];c[f + 4 >> 2] = c[g + 4 >> 2];d = Wt(b, f, d) | 0;l = e;return d | 0;
    }function Vt(a) {
      a = a | 0;return (c[(Bt() | 0) + 24 >> 2] | 0) + (a * 12 | 0) | 0;
    }function Wt(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0;g = l;l = l + 16 | 0;f = g;e = c[b >> 2] | 0;b = c[b + 4 >> 2] | 0;a = a + (b >> 1) | 0;if (b & 1) e = c[(c[a >> 2] | 0) + e >> 2] | 0;Gj(f, d);f = Hj(f, d) | 0;f = gk(Gb[e & 15](a, f) | 0) | 0;l = g;return f | 0;
    }function Xt(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0;e = l;l = l + 16 | 0;f = e + 8 | 0;g = e;i = c[d >> 2] | 0;h = c[d + 4 >> 2] | 0;d = di(b) | 0;c[g >> 2] = i;c[g + 4 >> 2] = h;c[f >> 2] = c[g >> 2];c[f + 4 >> 2] = c[g + 4 >> 2];Yt(a, d, f, 0);l = e;return;
    }function Yt(a, b, d, e) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0;f = l;l = l + 32 | 0;g = f + 16 | 0;m = f + 8 | 0;i = f;k = c[d >> 2] | 0;j = c[d + 4 >> 2] | 0;h = c[a >> 2] | 0;a = Zt() | 0;c[m >> 2] = k;c[m + 4 >> 2] = j;c[g >> 2] = c[m >> 2];c[g + 4 >> 2] = c[m + 4 >> 2];d = _t(g) | 0;c[i >> 2] = k;c[i + 4 >> 2] = j;c[g >> 2] = c[i >> 2];c[g + 4 >> 2] = c[i + 4 >> 2];ii(h, b, a, d, $t(g, e) | 0, e);l = f;return;
    }function Zt() {
      var b = 0,
          d = 0;if (!(a[8744] | 0)) {
        lu(10024);Na(49, 10024, o | 0) | 0;d = 8744;c[d >> 2] = 1;c[d + 4 >> 2] = 0;
      }if (!(Ai(10024) | 0)) {
        b = 10024;d = b + 36 | 0;do {
          c[b >> 2] = 0;b = b + 4 | 0;
        } while ((b | 0) < (d | 0));lu(10024);
      }return 10024;
    }function _t(a) {
      a = a | 0;return 0;
    }function $t(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0;k = l;l = l + 48 | 0;e = k + 24 | 0;f = k + 16 | 0;g = k + 32 | 0;h = k;i = k + 8 | 0;m = c[a + 4 >> 2] | 0;c[h >> 2] = c[a >> 2];d = h + 4 | 0;c[d >> 2] = m;m = Zt() | 0;j = m + 24 | 0;c[i >> 2] = mi(b, 4) | 0;a = m + 28 | 0;if ((c[a >> 2] | 0) >>> 0 < (c[m + 32 >> 2] | 0) >>> 0) {
        au(g, j, 1);b = c[a >> 2] | 0;d = c[d >> 2] | 0;m = c[i >> 2] | 0;c[f >> 2] = c[h >> 2];c[f + 4 >> 2] = d;c[e >> 2] = c[f >> 2];c[e + 4 >> 2] = c[f + 4 >> 2];bu(b, e, m);cu(g);m = (c[a >> 2] | 0) + 12 | 0;c[a >> 2] = m;a = m;
      } else {
        du(j, h, i);a = c[a >> 2] | 0;
      }l = k;return ((a - (c[j >> 2] | 0) | 0) / 12 | 0) + -1 | 0;
    }function au(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;return;
    }function bu(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0;e = c[b + 4 >> 2] | 0;c[a >> 2] = c[b >> 2];c[a + 4 >> 2] = e;c[a + 8 >> 2] = d;return;
    }function cu(a) {
      a = a | 0;return;
    }function du(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0,
          n = 0,
          o = 0;k = l;l = l + 48 | 0;e = k + 32 | 0;h = k + 24 | 0;i = k;j = a + 4 | 0;f = (((c[j >> 2] | 0) - (c[a >> 2] | 0) | 0) / 12 | 0) + 1 | 0;g = eu(a) | 0;if (g >>> 0 < f >>> 0) jF(a);m = c[a >> 2] | 0;o = ((c[a + 8 >> 2] | 0) - m | 0) / 12 | 0;n = o << 1;fu(i, o >>> 0 < g >>> 1 >>> 0 ? n >>> 0 < f >>> 0 ? f : n : g, ((c[j >> 2] | 0) - m | 0) / 12 | 0, a + 8 | 0);j = i + 8 | 0;g = c[j >> 2] | 0;f = c[b + 4 >> 2] | 0;d = c[d >> 2] | 0;c[h >> 2] = c[b >> 2];c[h + 4 >> 2] = f;c[e >> 2] = c[h >> 2];c[e + 4 >> 2] = c[h + 4 >> 2];bu(g, e, d);c[j >> 2] = (c[j >> 2] | 0) + 12;gu(a, i);hu(i);l = k;return;
    }function eu(a) {
      a = a | 0;return 357913941;
    }function fu(a, b, d, e) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;var f = 0;c[a + 12 >> 2] = 0;c[a + 16 >> 2] = e;do if (b) {
        if (b >>> 0 > 357913941) Ma(5765, 5802, 1734, 5872);else {
          f = qF(b * 12 | 0) | 0;break;
        }
      } else f = 0; while (0);c[a >> 2] = f;e = f + (d * 12 | 0) | 0;c[a + 8 >> 2] = e;c[a + 4 >> 2] = e;c[a + 12 >> 2] = f + (b * 12 | 0);return;
    }function gu(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0;iu(a);e = c[a >> 2] | 0;h = a + 4 | 0;g = b + 4 | 0;f = (c[h >> 2] | 0) - e | 0;d = (c[g >> 2] | 0) + (((f | 0) / -12 | 0) * 12 | 0) | 0;c[g >> 2] = d;if ((f | 0) > 0) {
        AF(d | 0, e | 0, f | 0) | 0;e = g;d = c[g >> 2] | 0;
      } else e = g;g = c[a >> 2] | 0;c[a >> 2] = d;c[e >> 2] = g;d = b + 8 | 0;g = c[h >> 2] | 0;c[h >> 2] = c[d >> 2];c[d >> 2] = g;d = a + 8 | 0;g = b + 12 | 0;f = c[d >> 2] | 0;c[d >> 2] = c[g >> 2];c[g >> 2] = f;c[b >> 2] = c[e >> 2];ju(a, ((c[h >> 2] | 0) - (c[a >> 2] | 0) | 0) / 12 | 0);return;
    }function hu(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;b = c[a + 4 >> 2] | 0;d = a + 8 | 0;e = c[d >> 2] | 0;if ((e | 0) != (b | 0)) c[d >> 2] = e + (~(((e + -12 - b | 0) >>> 0) / 12 | 0) * 12 | 0);a = c[a >> 2] | 0;if (a | 0) sF(a);return;
    }function iu(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;e = c[a >> 2] | 0;d = e;b = e + ((((c[a + 8 >> 2] | 0) - d | 0) / 12 | 0) * 12 | 0) | 0;ku(a, e, b, e + ((((c[a + 4 >> 2] | 0) - d | 0) / 12 | 0) * 12 | 0) | 0, b);return;
    }function ju(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0;d = c[a >> 2] | 0;e = d + ((((c[a + 8 >> 2] | 0) - d | 0) / 12 | 0) * 12 | 0) | 0;ku(a, d, e, e, d + (b * 12 | 0) | 0);return;
    }function ku(a, b, c, d, e) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;e = e | 0;return;
    }function lu(a) {
      a = a | 0;ou(a);return;
    }function mu(a) {
      a = a | 0;nu(a + 24 | 0);return;
    }function nu(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;d = c[a >> 2] | 0;e = d;if (d | 0) {
        a = a + 4 | 0;b = c[a >> 2] | 0;if ((b | 0) != (d | 0)) c[a >> 2] = b + (~(((b + -12 - e | 0) >>> 0) / 12 | 0) * 12 | 0);sF(d);
      }return;
    }function ou(a) {
      a = a | 0;var b = 0;b = Di() | 0;Gi(a, 2, 3, b, pu() | 0, 2);c[a + 24 >> 2] = 0;c[a + 28 >> 2] = 0;c[a + 32 >> 2] = 0;return;
    }function pu() {
      return 1432;
    }function qu(a, b, d, e) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0,
          h = 0,
          i = 0;f = l;l = l + 16 | 0;g = f + 8 | 0;h = f;i = ru(a) | 0;a = c[i + 4 >> 2] | 0;c[h >> 2] = c[i >> 2];c[h + 4 >> 2] = a;c[g >> 2] = c[h >> 2];c[g + 4 >> 2] = c[h + 4 >> 2];su(b, g, d, e);l = f;return;
    }function ru(a) {
      a = a | 0;return (c[(Zt() | 0) + 24 >> 2] | 0) + (a * 12 | 0) | 0;
    }function su(a, b, d, e) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0,
          h = 0,
          i = 0;i = l;l = l + 16 | 0;g = i + 1 | 0;h = i;f = c[b >> 2] | 0;b = c[b + 4 >> 2] | 0;a = a + (b >> 1) | 0;if (b & 1) f = c[(c[a >> 2] | 0) + f >> 2] | 0;Gj(g, d);g = Hj(g, d) | 0;tu(h, e);h = uu(h, e) | 0;Ob[f & 15](a, g, h);l = i;return;
    }function tu(a, b) {
      a = a | 0;b = b | 0;return;
    }function uu(a, b) {
      a = a | 0;b = b | 0;return vu(b) | 0;
    }function vu(a) {
      a = a | 0;return (a | 0) != 0 | 0;
    }function wu(a, b, d, e) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0;g = c[a >> 2] | 0;f = xu() | 0;a = yu(d) | 0;ii(g, b, f, a, zu(d, e) | 0, e);return;
    }function xu() {
      var b = 0,
          d = 0;if (!(a[8752] | 0)) {
        Lu(10060);Na(50, 10060, o | 0) | 0;d = 8752;c[d >> 2] = 1;c[d + 4 >> 2] = 0;
      }if (!(Ai(10060) | 0)) {
        b = 10060;d = b + 36 | 0;do {
          c[b >> 2] = 0;b = b + 4 | 0;
        } while ((b | 0) < (d | 0));Lu(10060);
      }return 10060;
    }function yu(a) {
      a = a | 0;return a | 0;
    }function zu(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0;h = l;l = l + 16 | 0;d = h + 8 | 0;e = h;f = h + 4 | 0;c[e >> 2] = a;i = xu() | 0;g = i + 24 | 0;c[f >> 2] = mi(b, 4) | 0;a = i + 28 | 0;if ((c[a >> 2] | 0) >>> 0 < (c[i + 32 >> 2] | 0) >>> 0) {
        Au(d, g, 1);Bu(c[a >> 2] | 0, c[e >> 2] | 0, c[f >> 2] | 0);Cu(d);i = (c[a >> 2] | 0) + 8 | 0;c[a >> 2] = i;a = i;
      } else {
        Du(g, e, f);a = c[a >> 2] | 0;
      }l = h;return (a - (c[g >> 2] | 0) >> 3) + -1 | 0;
    }function Au(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;return;
    }function Bu(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;c[a >> 2] = b;c[a + 4 >> 2] = d;return;
    }function Cu(a) {
      a = a | 0;return;
    }function Du(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0;i = l;l = l + 32 | 0;g = i;h = a + 4 | 0;e = ((c[h >> 2] | 0) - (c[a >> 2] | 0) >> 3) + 1 | 0;f = Eu(a) | 0;if (f >>> 0 < e >>> 0) jF(a);j = c[a >> 2] | 0;m = (c[a + 8 >> 2] | 0) - j | 0;k = m >> 2;Fu(g, m >> 3 >>> 0 < f >>> 1 >>> 0 ? k >>> 0 < e >>> 0 ? e : k : f, (c[h >> 2] | 0) - j >> 3, a + 8 | 0);h = g + 8 | 0;Bu(c[h >> 2] | 0, c[b >> 2] | 0, c[d >> 2] | 0);c[h >> 2] = (c[h >> 2] | 0) + 8;Gu(a, g);Hu(g);l = i;return;
    }function Eu(a) {
      a = a | 0;return 536870911;
    }function Fu(a, b, d, e) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;var f = 0;c[a + 12 >> 2] = 0;c[a + 16 >> 2] = e;do if (b) {
        if (b >>> 0 > 536870911) Ma(5765, 5802, 1734, 5872);else {
          f = qF(b << 3) | 0;break;
        }
      } else f = 0; while (0);c[a >> 2] = f;e = f + (d << 3) | 0;c[a + 8 >> 2] = e;c[a + 4 >> 2] = e;c[a + 12 >> 2] = f + (b << 3);return;
    }function Gu(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0;Iu(a);e = c[a >> 2] | 0;h = a + 4 | 0;g = b + 4 | 0;f = (c[h >> 2] | 0) - e | 0;d = (c[g >> 2] | 0) + (0 - (f >> 3) << 3) | 0;c[g >> 2] = d;if ((f | 0) > 0) {
        AF(d | 0, e | 0, f | 0) | 0;e = g;d = c[g >> 2] | 0;
      } else e = g;g = c[a >> 2] | 0;c[a >> 2] = d;c[e >> 2] = g;d = b + 8 | 0;g = c[h >> 2] | 0;c[h >> 2] = c[d >> 2];c[d >> 2] = g;d = a + 8 | 0;g = b + 12 | 0;f = c[d >> 2] | 0;c[d >> 2] = c[g >> 2];c[g >> 2] = f;c[b >> 2] = c[e >> 2];Ju(a, (c[h >> 2] | 0) - (c[a >> 2] | 0) >> 3);return;
    }function Hu(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;b = c[a + 4 >> 2] | 0;d = a + 8 | 0;e = c[d >> 2] | 0;if ((e | 0) != (b | 0)) c[d >> 2] = e + (~((e + -8 - b | 0) >>> 3) << 3);a = c[a >> 2] | 0;if (a | 0) sF(a);return;
    }function Iu(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;e = c[a >> 2] | 0;d = e;b = e + ((c[a + 8 >> 2] | 0) - d >> 3 << 3) | 0;Ku(a, e, b, e + ((c[a + 4 >> 2] | 0) - d >> 3 << 3) | 0, b);return;
    }function Ju(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0;d = c[a >> 2] | 0;e = d + ((c[a + 8 >> 2] | 0) - d >> 3 << 3) | 0;Ku(a, d, e, e, d + (b << 3) | 0);return;
    }function Ku(a, b, c, d, e) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;e = e | 0;return;
    }function Lu(a) {
      a = a | 0;Ou(a);return;
    }function Mu(a) {
      a = a | 0;Nu(a + 24 | 0);return;
    }function Nu(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;d = c[a >> 2] | 0;e = d;if (d | 0) {
        a = a + 4 | 0;b = c[a >> 2] | 0;if ((b | 0) != (d | 0)) c[a >> 2] = b + (~((b + -8 - e | 0) >>> 3) << 3);sF(d);
      }return;
    }function Ou(a) {
      a = a | 0;var b = 0;b = Di() | 0;Gi(a, 1, 24, b, Pu() | 0, 1);c[a + 24 >> 2] = 0;c[a + 28 >> 2] = 0;c[a + 32 >> 2] = 0;return;
    }function Pu() {
      return 1444;
    }function Qu(a, b) {
      a = a | 0;b = b | 0;Su(c[(Ru(a) | 0) >> 2] | 0, b);return;
    }function Ru(a) {
      a = a | 0;return (c[(xu() | 0) + 24 >> 2] | 0) + (a << 3) | 0;
    }function Su(a, b) {
      a = a | 0;b = b | 0;var c = 0,
          d = 0;c = l;l = l + 16 | 0;d = c;Ls(d, b);b = Ms(d, b) | 0;xb[a & 127](b);l = c;return;
    }function Tu(a, b, d, e) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0;g = c[a >> 2] | 0;f = Uu() | 0;a = Vu(d) | 0;ii(g, b, f, a, Wu(d, e) | 0, e);return;
    }function Uu() {
      var b = 0,
          d = 0;if (!(a[8760] | 0)) {
        gv(10096);Na(51, 10096, o | 0) | 0;d = 8760;c[d >> 2] = 1;c[d + 4 >> 2] = 0;
      }if (!(Ai(10096) | 0)) {
        b = 10096;d = b + 36 | 0;do {
          c[b >> 2] = 0;b = b + 4 | 0;
        } while ((b | 0) < (d | 0));gv(10096);
      }return 10096;
    }function Vu(a) {
      a = a | 0;return a | 0;
    }function Wu(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0;h = l;l = l + 16 | 0;d = h + 8 | 0;e = h;f = h + 4 | 0;c[e >> 2] = a;i = Uu() | 0;g = i + 24 | 0;c[f >> 2] = mi(b, 4) | 0;a = i + 28 | 0;if ((c[a >> 2] | 0) >>> 0 < (c[i + 32 >> 2] | 0) >>> 0) {
        Xu(d, g, 1);Yu(c[a >> 2] | 0, c[e >> 2] | 0, c[f >> 2] | 0);Zu(d);i = (c[a >> 2] | 0) + 8 | 0;c[a >> 2] = i;a = i;
      } else {
        _u(g, e, f);a = c[a >> 2] | 0;
      }l = h;return (a - (c[g >> 2] | 0) >> 3) + -1 | 0;
    }function Xu(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;return;
    }function Yu(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;c[a >> 2] = b;c[a + 4 >> 2] = d;return;
    }function Zu(a) {
      a = a | 0;return;
    }function _u(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0;i = l;l = l + 32 | 0;g = i;h = a + 4 | 0;e = ((c[h >> 2] | 0) - (c[a >> 2] | 0) >> 3) + 1 | 0;f = $u(a) | 0;if (f >>> 0 < e >>> 0) jF(a);j = c[a >> 2] | 0;m = (c[a + 8 >> 2] | 0) - j | 0;k = m >> 2;av(g, m >> 3 >>> 0 < f >>> 1 >>> 0 ? k >>> 0 < e >>> 0 ? e : k : f, (c[h >> 2] | 0) - j >> 3, a + 8 | 0);h = g + 8 | 0;Yu(c[h >> 2] | 0, c[b >> 2] | 0, c[d >> 2] | 0);c[h >> 2] = (c[h >> 2] | 0) + 8;bv(a, g);cv(g);l = i;return;
    }function $u(a) {
      a = a | 0;return 536870911;
    }function av(a, b, d, e) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;var f = 0;c[a + 12 >> 2] = 0;c[a + 16 >> 2] = e;do if (b) {
        if (b >>> 0 > 536870911) Ma(5765, 5802, 1734, 5872);else {
          f = qF(b << 3) | 0;break;
        }
      } else f = 0; while (0);c[a >> 2] = f;e = f + (d << 3) | 0;c[a + 8 >> 2] = e;c[a + 4 >> 2] = e;c[a + 12 >> 2] = f + (b << 3);return;
    }function bv(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0;dv(a);e = c[a >> 2] | 0;h = a + 4 | 0;g = b + 4 | 0;f = (c[h >> 2] | 0) - e | 0;d = (c[g >> 2] | 0) + (0 - (f >> 3) << 3) | 0;c[g >> 2] = d;if ((f | 0) > 0) {
        AF(d | 0, e | 0, f | 0) | 0;e = g;d = c[g >> 2] | 0;
      } else e = g;g = c[a >> 2] | 0;c[a >> 2] = d;c[e >> 2] = g;d = b + 8 | 0;g = c[h >> 2] | 0;c[h >> 2] = c[d >> 2];c[d >> 2] = g;d = a + 8 | 0;g = b + 12 | 0;f = c[d >> 2] | 0;c[d >> 2] = c[g >> 2];c[g >> 2] = f;c[b >> 2] = c[e >> 2];ev(a, (c[h >> 2] | 0) - (c[a >> 2] | 0) >> 3);return;
    }function cv(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;b = c[a + 4 >> 2] | 0;d = a + 8 | 0;e = c[d >> 2] | 0;if ((e | 0) != (b | 0)) c[d >> 2] = e + (~((e + -8 - b | 0) >>> 3) << 3);a = c[a >> 2] | 0;if (a | 0) sF(a);return;
    }function dv(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;e = c[a >> 2] | 0;d = e;b = e + ((c[a + 8 >> 2] | 0) - d >> 3 << 3) | 0;fv(a, e, b, e + ((c[a + 4 >> 2] | 0) - d >> 3 << 3) | 0, b);return;
    }function ev(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0;d = c[a >> 2] | 0;e = d + ((c[a + 8 >> 2] | 0) - d >> 3 << 3) | 0;fv(a, d, e, e, d + (b << 3) | 0);return;
    }function fv(a, b, c, d, e) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;e = e | 0;return;
    }function gv(a) {
      a = a | 0;jv(a);return;
    }function hv(a) {
      a = a | 0;iv(a + 24 | 0);return;
    }function iv(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;d = c[a >> 2] | 0;e = d;if (d | 0) {
        a = a + 4 | 0;b = c[a >> 2] | 0;if ((b | 0) != (d | 0)) c[a >> 2] = b + (~((b + -8 - e | 0) >>> 3) << 3);sF(d);
      }return;
    }function jv(a) {
      a = a | 0;var b = 0;b = Di() | 0;Gi(a, 1, 17, b, kv() | 0, 0);c[a + 24 >> 2] = 0;c[a + 28 >> 2] = 0;c[a + 32 >> 2] = 0;return;
    }function kv() {
      return 1452;
    }function lv(a) {
      a = a | 0;return nv(c[(mv(a) | 0) >> 2] | 0) | 0;
    }function mv(a) {
      a = a | 0;return (c[(Uu() | 0) + 24 >> 2] | 0) + (a << 3) | 0;
    }function nv(a) {
      a = a | 0;return ov(Kb[a & 7]() | 0) | 0;
    }function ov(a) {
      a = a | 0;return a | 0;
    }function pv() {
      var b = 0;if (!(a[8768] | 0)) {
        wv(10132);Na(25, 10132, o | 0) | 0;b = 8768;c[b >> 2] = 1;c[b + 4 >> 2] = 0;
      }return 10132;
    }function qv(a, b) {
      a = a | 0;b = b | 0;c[a >> 2] = rv() | 0;c[a + 4 >> 2] = sv() | 0;c[a + 12 >> 2] = b;c[a + 8 >> 2] = tv() | 0;c[a + 32 >> 2] = 4;return;
    }function rv() {
      return 11563;
    }function sv() {
      return 1416;
    }function tv() {
      return qt() | 0;
    }function uv(a, b, c, d) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;if ((ot(d, 896) | 0) == 512) {
        if (c | 0) {
          vv(c);sF(c);
        }
      } else if (b | 0) {
        qf(b);sF(b);
      }return;
    }function vv(a) {
      a = a | 0;a = c[a + 4 >> 2] | 0;if (a | 0) oF(a);return;
    }function wv(a) {
      a = a | 0;fj(a);return;
    }function xv(a) {
      a = a | 0;yv(a, 5584);zv(a) | 0;Av(a) | 0;return;
    }function yv(a, b) {
      a = a | 0;b = b | 0;var d = 0;d = xo() | 0;c[a >> 2] = d;_v(d, b);Ox(c[a >> 2] | 0);return;
    }function zv(a) {
      a = a | 0;var b = 0;b = c[a >> 2] | 0;Cv(b, Ov() | 0);return a | 0;
    }function Av(a) {
      a = a | 0;var b = 0;b = c[a >> 2] | 0;Cv(b, Bv() | 0);return a | 0;
    }function Bv() {
      var b = 0;if (!(a[8776] | 0)) {
        Dv(10180);Na(52, 10180, o | 0) | 0;b = 8776;c[b >> 2] = 1;c[b + 4 >> 2] = 0;
      }if (!(Ai(10180) | 0)) Dv(10180);return 10180;
    }function Cv(a, b) {
      a = a | 0;b = b | 0;ii(a, 0, b, 0, 0, 0);return;
    }function Dv(a) {
      a = a | 0;Gv(a);Iv(a, 9);return;
    }function Ev(a) {
      a = a | 0;Fv(a + 24 | 0);return;
    }function Fv(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;d = c[a >> 2] | 0;e = d;if (d | 0) {
        a = a + 4 | 0;b = c[a >> 2] | 0;if ((b | 0) != (d | 0)) c[a >> 2] = b + (~((b + -8 - e | 0) >>> 3) << 3);sF(d);
      }return;
    }function Gv(a) {
      a = a | 0;var b = 0;b = Di() | 0;Gi(a, 5, 1, b, Lv() | 0, 2);c[a + 24 >> 2] = 0;c[a + 28 >> 2] = 0;c[a + 32 >> 2] = 0;return;
    }function Hv(a, b, c) {
      a = a | 0;b = b | 0;c = +c;Jv(a, b, c);return;
    }function Iv(a, b) {
      a = a | 0;b = b | 0;c[a + 20 >> 2] = b;return;
    }function Jv(a, b, d) {
      a = a | 0;b = b | 0;d = +d;var e = 0,
          f = 0,
          g = 0,
          i = 0,
          j = 0;e = l;l = l + 16 | 0;g = e + 8 | 0;j = e + 13 | 0;f = e;i = e + 12 | 0;Gj(j, b);c[g >> 2] = Hj(j, b) | 0;Ej(i, d);h[f >> 3] = +Fj(i, d);Kv(a, g, f);l = e;return;
    }function Kv(b, d, e) {
      b = b | 0;d = d | 0;e = e | 0;pg(b + 8 | 0, c[d >> 2] | 0, +h[e >> 3]);a[b + 24 >> 0] = 1;return;
    }function Lv() {
      return 1456;
    }function Mv(a, b) {
      a = a | 0;b = +b;return Nv(a, b) | 0;
    }function Nv(a, b) {
      a = a | 0;b = +b;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0;e = l;l = l + 16 | 0;g = e + 4 | 0;h = e + 8 | 0;i = e;f = AA(8) | 0;d = f;j = qF(16) | 0;Gj(g, a);a = Hj(g, a) | 0;Ej(h, b);pg(j, a, +Fj(h, b));h = d + 4 | 0;c[h >> 2] = j;a = qF(8) | 0;h = c[h >> 2] | 0;c[i >> 2] = 0;c[g >> 2] = c[i >> 2];Ao(a, h, g);c[f >> 2] = a;l = e;return d | 0;
    }function Ov() {
      var b = 0;if (!(a[8784] | 0)) {
        Pv(10216);Na(53, 10216, o | 0) | 0;b = 8784;c[b >> 2] = 1;c[b + 4 >> 2] = 0;
      }if (!(Ai(10216) | 0)) Pv(10216);return 10216;
    }function Pv(a) {
      a = a | 0;Sv(a);Iv(a, 54);return;
    }function Qv(a) {
      a = a | 0;Rv(a + 24 | 0);return;
    }function Rv(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;d = c[a >> 2] | 0;e = d;if (d | 0) {
        a = a + 4 | 0;b = c[a >> 2] | 0;if ((b | 0) != (d | 0)) c[a >> 2] = b + (~((b + -8 - e | 0) >>> 3) << 3);sF(d);
      }return;
    }function Sv(a) {
      a = a | 0;var b = 0;b = Di() | 0;Gi(a, 5, 4, b, Xv() | 0, 0);c[a + 24 >> 2] = 0;c[a + 28 >> 2] = 0;c[a + 32 >> 2] = 0;return;
    }function Tv(a) {
      a = a | 0;Uv(a);return;
    }function Uv(a) {
      a = a | 0;Vv(a);return;
    }function Vv(b) {
      b = b | 0;Wv(b + 8 | 0);a[b + 24 >> 0] = 1;return;
    }function Wv(a) {
      a = a | 0;c[a >> 2] = 0;h[a + 8 >> 3] = 0.0;return;
    }function Xv() {
      return 1476;
    }function Yv() {
      return Zv() | 0;
    }function Zv() {
      var a = 0,
          b = 0,
          d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0;b = l;l = l + 16 | 0;f = b + 4 | 0;h = b;d = AA(8) | 0;a = d;e = qF(16) | 0;Wv(e);g = a + 4 | 0;c[g >> 2] = e;e = qF(8) | 0;g = c[g >> 2] | 0;c[h >> 2] = 0;c[f >> 2] = c[h >> 2];Ao(e, g, f);c[d >> 2] = e;l = b;return a | 0;
    }function _v(a, b) {
      a = a | 0;b = b | 0;c[a >> 2] = $v() | 0;c[a + 4 >> 2] = aw() | 0;c[a + 12 >> 2] = b;c[a + 8 >> 2] = bw() | 0;c[a + 32 >> 2] = 5;return;
    }function $v() {
      return 11562;
    }function aw() {
      return 1468;
    }function bw() {
      return ew() | 0;
    }function cw(a, b, c, d) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;if ((ot(d, 896) | 0) == 512) {
        if (c | 0) {
          dw(c);sF(c);
        }
      } else if (b | 0) sF(b);return;
    }function dw(a) {
      a = a | 0;a = c[a + 4 >> 2] | 0;if (a | 0) oF(a);return;
    }function ew() {
      var b = 0;if (!(a[8792] | 0)) {
        c[2563] = fw() | 0;c[2564] = 0;b = 8792;c[b >> 2] = 1;c[b + 4 >> 2] = 0;
      }return 10252;
    }function fw() {
      return c[370] | 0;
    }function gw(a) {
      a = a | 0;hw(a, 5590);iw(a) | 0;return;
    }function hw(a, b) {
      a = a | 0;b = b | 0;var d = 0;d = Ki() | 0;c[a >> 2] = d;uw(d, b);Ox(c[a >> 2] | 0);return;
    }function iw(a) {
      a = a | 0;var b = 0;b = c[a >> 2] | 0;Cv(b, jw() | 0);return a | 0;
    }function jw() {
      var b = 0;if (!(a[8800] | 0)) {
        kw(10264);Na(55, 10264, o | 0) | 0;b = 8800;c[b >> 2] = 1;c[b + 4 >> 2] = 0;
      }if (!(Ai(10264) | 0)) kw(10264);return 10264;
    }function kw(a) {
      a = a | 0;nw(a);Iv(a, 56);return;
    }function lw(a) {
      a = a | 0;mw(a + 24 | 0);return;
    }function mw(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;d = c[a >> 2] | 0;e = d;if (d | 0) {
        a = a + 4 | 0;b = c[a >> 2] | 0;if ((b | 0) != (d | 0)) c[a >> 2] = b + (~((b + -8 - e | 0) >>> 3) << 3);sF(d);
      }return;
    }function nw(a) {
      a = a | 0;var b = 0;b = Di() | 0;Gi(a, 5, 5, b, rw() | 0, 0);c[a + 24 >> 2] = 0;c[a + 28 >> 2] = 0;c[a + 32 >> 2] = 0;return;
    }function ow(a) {
      a = a | 0;pw(a);return;
    }function pw(a) {
      a = a | 0;qw(a);return;
    }function qw(b) {
      b = b | 0;var d = 0,
          e = 0;d = b + 8 | 0;e = d + 48 | 0;do {
        c[d >> 2] = 0;d = d + 4 | 0;
      } while ((d | 0) < (e | 0));a[b + 56 >> 0] = 1;return;
    }function rw() {
      return 1484;
    }function sw() {
      return tw() | 0;
    }function tw() {
      var a = 0,
          b = 0,
          d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0;h = l;l = l + 16 | 0;a = h + 4 | 0;b = h;d = AA(8) | 0;e = d;f = qF(48) | 0;g = f;i = g + 48 | 0;do {
        c[g >> 2] = 0;g = g + 4 | 0;
      } while ((g | 0) < (i | 0));g = e + 4 | 0;c[g >> 2] = f;i = qF(8) | 0;g = c[g >> 2] | 0;c[b >> 2] = 0;c[a >> 2] = c[b >> 2];Ri(i, g, a);c[d >> 2] = i;l = h;return e | 0;
    }function uw(a, b) {
      a = a | 0;b = b | 0;c[a >> 2] = vw() | 0;c[a + 4 >> 2] = ww() | 0;c[a + 12 >> 2] = b;c[a + 8 >> 2] = xw() | 0;c[a + 32 >> 2] = 6;return;
    }function vw() {
      return 11556;
    }function ww() {
      return 1488;
    }function xw() {
      return ew() | 0;
    }function yw(a, b, c, d) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;if ((ot(d, 896) | 0) == 512) {
        if (c | 0) {
          zw(c);sF(c);
        }
      } else if (b | 0) sF(b);return;
    }function zw(a) {
      a = a | 0;a = c[a + 4 >> 2] | 0;if (a | 0) oF(a);return;
    }function Aw(a) {
      a = a | 0;Bw(a, 5597);Cw(a) | 0;Dw(a) | 0;return;
    }function Bw(a, b) {
      a = a | 0;b = b | 0;var d = 0;d = ex() | 0;c[a >> 2] = d;fx(d, b);Ox(c[a >> 2] | 0);return;
    }function Cw(a) {
      a = a | 0;var b = 0;b = c[a >> 2] | 0;Cv(b, Uw() | 0);return a | 0;
    }function Dw(a) {
      a = a | 0;var b = 0;b = c[a >> 2] | 0;Cv(b, Ew() | 0);return a | 0;
    }function Ew() {
      var b = 0;if (!(a[8808] | 0)) {
        Fw(10304);Na(57, 10304, o | 0) | 0;b = 8808;c[b >> 2] = 1;c[b + 4 >> 2] = 0;
      }if (!(Ai(10304) | 0)) Fw(10304);return 10304;
    }function Fw(a) {
      a = a | 0;Iw(a);Iv(a, 1);return;
    }function Gw(a) {
      a = a | 0;Hw(a + 24 | 0);return;
    }function Hw(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;d = c[a >> 2] | 0;e = d;if (d | 0) {
        a = a + 4 | 0;b = c[a >> 2] | 0;if ((b | 0) != (d | 0)) c[a >> 2] = b + (~((b + -8 - e | 0) >>> 3) << 3);sF(d);
      }return;
    }function Iw(a) {
      a = a | 0;var b = 0;b = Di() | 0;Gi(a, 5, 1, b, Nw() | 0, 2);c[a + 24 >> 2] = 0;c[a + 28 >> 2] = 0;c[a + 32 >> 2] = 0;return;
    }function Jw(a, b, c) {
      a = a | 0;b = +b;c = +c;Kw(a, b, c);return;
    }function Kw(a, b, c) {
      a = a | 0;b = +b;c = +c;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          i = 0;d = l;l = l + 32 | 0;f = d + 8 | 0;i = d + 17 | 0;e = d;g = d + 16 | 0;Ej(i, b);h[f >> 3] = +Fj(i, b);Ej(g, c);h[e >> 3] = +Fj(g, c);Lw(a, f, e);l = d;return;
    }function Lw(b, c, d) {
      b = b | 0;c = c | 0;d = d | 0;Mw(b + 8 | 0, +h[c >> 3], +h[d >> 3]);a[b + 24 >> 0] = 1;return;
    }function Mw(a, b, c) {
      a = a | 0;b = +b;c = +c;h[a >> 3] = b;h[a + 8 >> 3] = c;return;
    }function Nw() {
      return 1524;
    }function Ow(a, b) {
      a = +a;b = +b;return Pw(a, b) | 0;
    }function Pw(a, b) {
      a = +a;b = +b;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0;e = l;l = l + 16 | 0;h = e + 4 | 0;i = e + 8 | 0;j = e;f = AA(8) | 0;d = f;g = qF(16) | 0;Ej(h, a);a = +Fj(h, a);Ej(i, b);Mw(g, a, +Fj(i, b));i = d + 4 | 0;c[i >> 2] = g;g = qF(8) | 0;i = c[i >> 2] | 0;c[j >> 2] = 0;c[h >> 2] = c[j >> 2];Qw(g, i, h);c[f >> 2] = g;l = e;return d | 0;
    }function Qw(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;c[a >> 2] = b;d = qF(16) | 0;c[d + 4 >> 2] = 0;c[d + 8 >> 2] = 0;c[d >> 2] = 1504;c[d + 12 >> 2] = b;c[a + 4 >> 2] = d;return;
    }function Rw(a) {
      a = a | 0;kF(a);sF(a);return;
    }function Sw(a) {
      a = a | 0;a = c[a + 12 >> 2] | 0;if (a | 0) sF(a);return;
    }function Tw(a) {
      a = a | 0;sF(a);return;
    }function Uw() {
      var b = 0;if (!(a[8816] | 0)) {
        Vw(10340);Na(58, 10340, o | 0) | 0;b = 8816;c[b >> 2] = 1;c[b + 4 >> 2] = 0;
      }if (!(Ai(10340) | 0)) Vw(10340);return 10340;
    }function Vw(a) {
      a = a | 0;Yw(a);Iv(a, 59);return;
    }function Ww(a) {
      a = a | 0;Xw(a + 24 | 0);return;
    }function Xw(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;d = c[a >> 2] | 0;e = d;if (d | 0) {
        a = a + 4 | 0;b = c[a >> 2] | 0;if ((b | 0) != (d | 0)) c[a >> 2] = b + (~((b + -8 - e | 0) >>> 3) << 3);sF(d);
      }return;
    }function Yw(a) {
      a = a | 0;var b = 0;b = Di() | 0;Gi(a, 5, 6, b, bx() | 0, 0);c[a + 24 >> 2] = 0;c[a + 28 >> 2] = 0;c[a + 32 >> 2] = 0;return;
    }function Zw(a) {
      a = a | 0;_w(a);return;
    }function _w(a) {
      a = a | 0;$w(a);return;
    }function $w(b) {
      b = b | 0;ax(b + 8 | 0);a[b + 24 >> 0] = 1;return;
    }function ax(a) {
      a = a | 0;c[a >> 2] = 0;c[a + 4 >> 2] = 0;c[a + 8 >> 2] = 0;c[a + 12 >> 2] = 0;return;
    }function bx() {
      return 1544;
    }function cx() {
      return dx() | 0;
    }function dx() {
      var a = 0,
          b = 0,
          d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0;b = l;l = l + 16 | 0;f = b + 4 | 0;h = b;d = AA(8) | 0;a = d;e = qF(16) | 0;ax(e);g = a + 4 | 0;c[g >> 2] = e;e = qF(8) | 0;g = c[g >> 2] | 0;c[h >> 2] = 0;c[f >> 2] = c[h >> 2];Qw(e, g, f);c[d >> 2] = e;l = b;return a | 0;
    }function ex() {
      var b = 0;if (!(a[8824] | 0)) {
        lx(10376);Na(25, 10376, o | 0) | 0;b = 8824;c[b >> 2] = 1;c[b + 4 >> 2] = 0;
      }return 10376;
    }function fx(a, b) {
      a = a | 0;b = b | 0;c[a >> 2] = gx() | 0;c[a + 4 >> 2] = hx() | 0;c[a + 12 >> 2] = b;c[a + 8 >> 2] = ix() | 0;c[a + 32 >> 2] = 7;return;
    }function gx() {
      return 11552;
    }function hx() {
      return 1536;
    }function ix() {
      return ew() | 0;
    }function jx(a, b, c, d) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;if ((ot(d, 896) | 0) == 512) {
        if (c | 0) {
          kx(c);sF(c);
        }
      } else if (b | 0) sF(b);return;
    }function kx(a) {
      a = a | 0;a = c[a + 4 >> 2] | 0;if (a | 0) oF(a);return;
    }function lx(a) {
      a = a | 0;fj(a);return;
    }function mx(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;a = di(b) | 0;b = nx(c) | 0;c = ox(c, 0) | 0;ey(a, b, c, px() | 0, 0);return;
    }function nx(a) {
      a = a | 0;return a | 0;
    }function ox(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0;h = l;l = l + 16 | 0;d = h + 8 | 0;e = h;f = h + 4 | 0;c[e >> 2] = a;i = px() | 0;g = i + 24 | 0;c[f >> 2] = mi(b, 4) | 0;a = i + 28 | 0;if ((c[a >> 2] | 0) >>> 0 < (c[i + 32 >> 2] | 0) >>> 0) {
        xx(d, g, 1);yx(c[a >> 2] | 0, c[e >> 2] | 0, c[f >> 2] | 0);zx(d);i = (c[a >> 2] | 0) + 8 | 0;c[a >> 2] = i;a = i;
      } else {
        Ax(g, e, f);a = c[a >> 2] | 0;
      }l = h;return (a - (c[g >> 2] | 0) >> 3) + -1 | 0;
    }function px() {
      var b = 0,
          d = 0;if (!(a[8832] | 0)) {
        qx(10420);Na(60, 10420, o | 0) | 0;d = 8832;c[d >> 2] = 1;c[d + 4 >> 2] = 0;
      }if (!(Ai(10420) | 0)) {
        b = 10420;d = b + 36 | 0;do {
          c[b >> 2] = 0;b = b + 4 | 0;
        } while ((b | 0) < (d | 0));qx(10420);
      }return 10420;
    }function qx(a) {
      a = a | 0;tx(a);return;
    }function rx(a) {
      a = a | 0;sx(a + 24 | 0);return;
    }function sx(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;d = c[a >> 2] | 0;e = d;if (d | 0) {
        a = a + 4 | 0;b = c[a >> 2] | 0;if ((b | 0) != (d | 0)) c[a >> 2] = b + (~((b + -8 - e | 0) >>> 3) << 3);sF(d);
      }return;
    }function tx(a) {
      a = a | 0;var b = 0;b = Di() | 0;Gi(a, 1, 18, b, am() | 0, 0);c[a + 24 >> 2] = 0;c[a + 28 >> 2] = 0;c[a + 32 >> 2] = 0;return;
    }function ux(a) {
      a = a | 0;return wx(c[(vx(a) | 0) >> 2] | 0) | 0;
    }function vx(a) {
      a = a | 0;return (c[(px() | 0) + 24 >> 2] | 0) + (a << 3) | 0;
    }function wx(a) {
      a = a | 0;return em(Kb[a & 7]() | 0) | 0;
    }function xx(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;return;
    }function yx(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;c[a >> 2] = b;c[a + 4 >> 2] = d;return;
    }function zx(a) {
      a = a | 0;return;
    }function Ax(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0;i = l;l = l + 32 | 0;g = i;h = a + 4 | 0;e = ((c[h >> 2] | 0) - (c[a >> 2] | 0) >> 3) + 1 | 0;f = Bx(a) | 0;if (f >>> 0 < e >>> 0) jF(a);j = c[a >> 2] | 0;m = (c[a + 8 >> 2] | 0) - j | 0;k = m >> 2;Cx(g, m >> 3 >>> 0 < f >>> 1 >>> 0 ? k >>> 0 < e >>> 0 ? e : k : f, (c[h >> 2] | 0) - j >> 3, a + 8 | 0);h = g + 8 | 0;yx(c[h >> 2] | 0, c[b >> 2] | 0, c[d >> 2] | 0);c[h >> 2] = (c[h >> 2] | 0) + 8;Dx(a, g);Ex(g);l = i;return;
    }function Bx(a) {
      a = a | 0;return 536870911;
    }function Cx(a, b, d, e) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;var f = 0;c[a + 12 >> 2] = 0;c[a + 16 >> 2] = e;do if (b) {
        if (b >>> 0 > 536870911) Ma(5765, 5802, 1734, 5872);else {
          f = qF(b << 3) | 0;break;
        }
      } else f = 0; while (0);c[a >> 2] = f;e = f + (d << 3) | 0;c[a + 8 >> 2] = e;c[a + 4 >> 2] = e;c[a + 12 >> 2] = f + (b << 3);return;
    }function Dx(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0;Fx(a);e = c[a >> 2] | 0;h = a + 4 | 0;g = b + 4 | 0;f = (c[h >> 2] | 0) - e | 0;d = (c[g >> 2] | 0) + (0 - (f >> 3) << 3) | 0;c[g >> 2] = d;if ((f | 0) > 0) {
        AF(d | 0, e | 0, f | 0) | 0;e = g;d = c[g >> 2] | 0;
      } else e = g;g = c[a >> 2] | 0;c[a >> 2] = d;c[e >> 2] = g;d = b + 8 | 0;g = c[h >> 2] | 0;c[h >> 2] = c[d >> 2];c[d >> 2] = g;d = a + 8 | 0;g = b + 12 | 0;f = c[d >> 2] | 0;c[d >> 2] = c[g >> 2];c[g >> 2] = f;c[b >> 2] = c[e >> 2];Gx(a, (c[h >> 2] | 0) - (c[a >> 2] | 0) >> 3);return;
    }function Ex(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;b = c[a + 4 >> 2] | 0;d = a + 8 | 0;e = c[d >> 2] | 0;if ((e | 0) != (b | 0)) c[d >> 2] = e + (~((e + -8 - b | 0) >>> 3) << 3);a = c[a >> 2] | 0;if (a | 0) sF(a);return;
    }function Fx(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;e = c[a >> 2] | 0;d = e;b = e + ((c[a + 8 >> 2] | 0) - d >> 3 << 3) | 0;Hx(a, e, b, e + ((c[a + 4 >> 2] | 0) - d >> 3 << 3) | 0, b);return;
    }function Gx(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0;d = c[a >> 2] | 0;e = d + ((c[a + 8 >> 2] | 0) - d >> 3 << 3) | 0;Hx(a, d, e, e, d + (b << 3) | 0);return;
    }function Hx(a, b, c, d, e) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;e = e | 0;return;
    }function Ix() {
      Jx();return;
    }function Jx() {
      Kx(10456);return;
    }function Kx(a) {
      a = a | 0;Lx(a, 5619);return;
    }function Lx(a, b) {
      a = a | 0;b = b | 0;var d = 0;d = Mx() | 0;c[a >> 2] = d;Nx(d, b);Ox(c[a >> 2] | 0);return;
    }function Mx() {
      var b = 0;if (!(a[8840] | 0)) {
        Yx(10464);Na(25, 10464, o | 0) | 0;b = 8840;c[b >> 2] = 1;c[b + 4 >> 2] = 0;
      }return 10464;
    }function Nx(a, b) {
      a = a | 0;b = b | 0;c[a >> 2] = Tx() | 0;c[a + 4 >> 2] = Ux() | 0;c[a + 12 >> 2] = b;c[a + 8 >> 2] = Vx() | 0;c[a + 32 >> 2] = 8;return;
    }function Ox(a) {
      a = a | 0;var b = 0,
          d = 0;b = l;l = l + 16 | 0;d = b;Px() | 0;c[d >> 2] = a;Qx(10460, d);l = b;return;
    }function Px() {
      if (!(a[11565] | 0)) {
        c[2615] = 0;Na(61, 10460, o | 0) | 0;a[11565] = 1;
      }return 10460;
    }function Qx(a, b) {
      a = a | 0;b = b | 0;var d = 0;d = qF(8) | 0;c[d + 4 >> 2] = c[b >> 2];c[d >> 2] = c[a >> 2];c[a >> 2] = d;return;
    }function Rx(a) {
      a = a | 0;Sx(a);return;
    }function Sx(a) {
      a = a | 0;var b = 0,
          d = 0;b = c[a >> 2] | 0;if (b | 0) do {
        d = b;b = c[b >> 2] | 0;sF(d);
      } while ((b | 0) != 0);c[a >> 2] = 0;return;
    }function Tx() {
      return 11566;
    }function Ux() {
      return 1548;
    }function Vx() {
      return qt() | 0;
    }function Wx(a, b, c, d) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;if ((ot(d, 896) | 0) == 512) {
        if (c | 0) {
          Xx(c);sF(c);
        }
      } else if (b | 0) sF(b);return;
    }function Xx(a) {
      a = a | 0;a = c[a + 4 >> 2] | 0;if (a | 0) oF(a);return;
    }function Yx(a) {
      a = a | 0;fj(a);return;
    }function Zx(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0;Px() | 0;d = c[2615] | 0;a: do if (d | 0) {
        while (1) {
          e = c[d + 4 >> 2] | 0;if (e | 0 ? (mE(_x(e) | 0, a) | 0) == 0 : 0) break;d = c[d >> 2] | 0;if (!d) break a;
        }$x(e, b);
      } while (0);return;
    }function _x(a) {
      a = a | 0;return c[a + 12 >> 2] | 0;
    }function $x(a, b) {
      a = a | 0;b = b | 0;var d = 0;a = a + 36 | 0;d = c[a >> 2] | 0;if (d | 0) {
        yf(d);sF(d);
      }d = qF(4) | 0;Rg(d, b);c[a >> 2] = d;return;
    }function ay() {
      if (!(a[11567] | 0)) {
        c[2627] = 0;Na(62, 10508, o | 0) | 0;a[11567] = 1;
      }return 10508;
    }function by() {
      var b = 0;if (!(a[11568] | 0)) {
        cy();c[2628] = 1556;a[11568] = 1;b = 1556;
      } else b = c[2628] | 0;return b | 0;
    }function cy() {
      if (!(a[11592] | 0)) {
        a[11569] = mi(mi(8, 0) | 0, 0) | 0;a[11570] = mi(mi(0, 0) | 0, 0) | 0;a[11571] = mi(mi(0, 16) | 0, 0) | 0;a[11572] = mi(mi(8, 0) | 0, 0) | 0;a[11573] = mi(mi(0, 0) | 0, 0) | 0;a[11574] = mi(mi(8, 0) | 0, 0) | 0;a[11575] = mi(mi(0, 0) | 0, 0) | 0;a[11576] = mi(mi(8, 0) | 0, 0) | 0;a[11577] = mi(mi(0, 0) | 0, 0) | 0;a[11578] = mi(mi(8, 0) | 0, 0) | 0;a[11579] = mi(mi(0, 0) | 0, 0) | 0;a[11580] = mi(mi(0, 0) | 0, 32) | 0;a[11581] = mi(mi(0, 0) | 0, 32) | 0;a[11592] = 1;
      }return;
    }function dy() {
      return 1624;
    }function ey(a, b, d, e, f) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;f = f | 0;var g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0;g = l;l = l + 32 | 0;m = g + 16 | 0;k = g + 12 | 0;j = g + 8 | 0;i = g + 4 | 0;h = g;c[m >> 2] = a;c[k >> 2] = b;c[j >> 2] = d;c[i >> 2] = e;c[h >> 2] = f;ay() | 0;fy(10508, m, k, j, i, h);l = g;return;
    }function fy(a, b, d, e, f, g) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;f = f | 0;g = g | 0;var h = 0;h = qF(24) | 0;li(h + 4 | 0, c[b >> 2] | 0, c[d >> 2] | 0, c[e >> 2] | 0, c[f >> 2] | 0, c[g >> 2] | 0);c[h >> 2] = c[a >> 2];c[a >> 2] = h;return;
    }function gy(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0,
          n = 0,
          o = 0,
          p = 0,
          q = 0,
          r = 0,
          s = 0,
          t = 0,
          u = 0;u = l;l = l + 32 | 0;q = u + 28 | 0;r = u + 16 | 0;s = u + 4 | 0;t = u;b = c[b >> 2] | 0;if (b | 0) {
        p = r + 4 | 0;j = r + 8 | 0;k = s + 4 | 0;m = s + 8 | 0;n = s + 8 | 0;o = r + 8 | 0;do {
          h = b + 4 | 0;i = hy(h) | 0;if (i | 0) {
            e = iy(i) | 0;c[r >> 2] = 0;c[p >> 2] = 0;c[j >> 2] = 0;f = (jy(i) | 0) + 1 | 0;ky(r, f);if (f | 0) while (1) {
              f = f + -1 | 0;CD(s, c[e >> 2] | 0);if ((c[p >> 2] | 0) >>> 0 < (c[o >> 2] | 0) >>> 0) {
                ly(q, r, 1);c[c[p >> 2] >> 2] = c[s >> 2];my(q);c[p >> 2] = (c[p >> 2] | 0) + 4;
              } else ny(r, s);if (!f) break;else e = e + 4 | 0;
            }e = oy(i) | 0;c[s >> 2] = 0;c[k >> 2] = 0;c[m >> 2] = 0;a: do if (c[e >> 2] | 0) {
              f = 0;g = 0;while (1) {
                if ((f | 0) == (g | 0)) ry(s, e);else {
                  py(q, s, 1);c[c[k >> 2] >> 2] = c[e >> 2];qy(q);c[k >> 2] = (c[k >> 2] | 0) + 4;
                }e = e + 4 | 0;if (!(c[e >> 2] | 0)) break a;f = c[k >> 2] | 0;g = c[n >> 2] | 0;
              }
            } while (0);c[q >> 2] = sy(h) | 0;c[t >> 2] = Ai(i) | 0;ty(d, a, q, t, r, s);uy(s);vy(r);
          }b = c[b >> 2] | 0;
        } while ((b | 0) != 0);
      }l = u;return;
    }function hy(a) {
      a = a | 0;return c[a + 12 >> 2] | 0;
    }function iy(a) {
      a = a | 0;return c[a + 12 >> 2] | 0;
    }function jy(a) {
      a = a | 0;return c[a + 16 >> 2] | 0;
    }function ky(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0,
          f = 0;f = l;l = l + 32 | 0;d = f;e = c[a >> 2] | 0;if ((c[a + 8 >> 2] | 0) - e >> 2 >>> 0 < b >>> 0) {
        fz(d, b, (c[a + 4 >> 2] | 0) - e >> 2, a + 8 | 0);gz(a, d);hz(d);
      }l = f;return;
    }function ly(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;return;
    }function my(a) {
      a = a | 0;return;
    }function ny(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0;h = l;l = l + 32 | 0;e = h;f = a + 4 | 0;g = ((c[f >> 2] | 0) - (c[a >> 2] | 0) >> 2) + 1 | 0;d = _y(a) | 0;if (d >>> 0 < g >>> 0) jF(a);i = c[a >> 2] | 0;k = (c[a + 8 >> 2] | 0) - i | 0;j = k >> 1;fz(e, k >> 2 >>> 0 < d >>> 1 >>> 0 ? j >>> 0 < g >>> 0 ? g : j : d, (c[f >> 2] | 0) - i >> 2, a + 8 | 0);g = e + 8 | 0;c[c[g >> 2] >> 2] = c[b >> 2];c[g >> 2] = (c[g >> 2] | 0) + 4;gz(a, e);hz(e);l = h;return;
    }function oy(a) {
      a = a | 0;return c[a + 8 >> 2] | 0;
    }function py(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;return;
    }function qy(a) {
      a = a | 0;return;
    }function ry(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0;h = l;l = l + 32 | 0;e = h;f = a + 4 | 0;g = ((c[f >> 2] | 0) - (c[a >> 2] | 0) >> 2) + 1 | 0;d = Vy(a) | 0;if (d >>> 0 < g >>> 0) jF(a);i = c[a >> 2] | 0;k = (c[a + 8 >> 2] | 0) - i | 0;j = k >> 1;bz(e, k >> 2 >>> 0 < d >>> 1 >>> 0 ? j >>> 0 < g >>> 0 ? g : j : d, (c[f >> 2] | 0) - i >> 2, a + 8 | 0);g = e + 8 | 0;c[c[g >> 2] >> 2] = c[b >> 2];c[g >> 2] = (c[g >> 2] | 0) + 4;cz(a, e);dz(e);l = h;return;
    }function sy(a) {
      a = a | 0;return c[a >> 2] | 0;
    }function ty(a, b, c, d, e, f) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;e = e | 0;f = f | 0;wy(a, b, c, d, e, f);return;
    }function uy(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;d = c[a >> 2] | 0;e = d;if (d | 0) {
        a = a + 4 | 0;b = c[a >> 2] | 0;if ((b | 0) != (d | 0)) c[a >> 2] = b + (~((b + -4 - e | 0) >>> 2) << 2);sF(d);
      }return;
    }function vy(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;d = c[a >> 2] | 0;e = d;if (d | 0) {
        a = a + 4 | 0;b = c[a >> 2] | 0;if ((b | 0) != (d | 0)) c[a >> 2] = b + (~((b + -4 - e | 0) >>> 2) << 2);sF(d);
      }return;
    }function wy(a, b, d, e, f, g) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;f = f | 0;g = g | 0;var h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0,
          n = 0;h = l;l = l + 48 | 0;m = h + 40 | 0;i = h + 32 | 0;n = h + 24 | 0;j = h + 12 | 0;k = h;ID(i);a = Vg(a) | 0;c[n >> 2] = c[b >> 2];d = c[d >> 2] | 0;e = c[e >> 2] | 0;xy(j, f);yy(k, g);c[m >> 2] = c[n >> 2];zy(a, m, d, e, j, k);uy(k);vy(j);KD(i);l = h;return;
    }function xy(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0;c[a >> 2] = 0;c[a + 4 >> 2] = 0;c[a + 8 >> 2] = 0;d = b + 4 | 0;e = (c[d >> 2] | 0) - (c[b >> 2] | 0) >> 2;if (e | 0) {
        Yy(a, e);Zy(a, c[b >> 2] | 0, c[d >> 2] | 0, e);
      }return;
    }function yy(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0;c[a >> 2] = 0;c[a + 4 >> 2] = 0;c[a + 8 >> 2] = 0;d = b + 4 | 0;e = (c[d >> 2] | 0) - (c[b >> 2] | 0) >> 2;if (e | 0) {
        Ty(a, e);Uy(a, c[b >> 2] | 0, c[d >> 2] | 0, e);
      }return;
    }function zy(a, b, d, e, f, g) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;f = f | 0;g = g | 0;var h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0,
          n = 0;h = l;l = l + 32 | 0;m = h + 28 | 0;n = h + 24 | 0;i = h + 12 | 0;j = h;k = Yg(Ay() | 0) | 0;c[n >> 2] = c[b >> 2];c[m >> 2] = c[n >> 2];b = By(m) | 0;d = Cy(d) | 0;e = Dy(e) | 0;c[i >> 2] = c[f >> 2];m = f + 4 | 0;c[i + 4 >> 2] = c[m >> 2];n = f + 8 | 0;c[i + 8 >> 2] = c[n >> 2];c[n >> 2] = 0;c[m >> 2] = 0;c[f >> 2] = 0;f = Ey(i) | 0;c[j >> 2] = c[g >> 2];m = g + 4 | 0;c[j + 4 >> 2] = c[m >> 2];n = g + 8 | 0;c[j + 8 >> 2] = c[n >> 2];c[n >> 2] = 0;c[m >> 2] = 0;c[g >> 2] = 0;Fa(0, k | 0, a | 0, b | 0, d | 0, e | 0, f | 0, Fy(j) | 0) | 0;uy(j);vy(i);l = h;return;
    }function Ay() {
      var b = 0;if (!(a[8856] | 0)) {
        Ry(10560);b = 8856;c[b >> 2] = 1;c[b + 4 >> 2] = 0;
      }return 10560;
    }function By(a) {
      a = a | 0;return Jy(a) | 0;
    }function Cy(a) {
      a = a | 0;return Hy(a) | 0;
    }function Dy(a) {
      a = a | 0;return em(a) | 0;
    }function Ey(a) {
      a = a | 0;return Iy(a) | 0;
    }function Fy(a) {
      a = a | 0;return Gy(a) | 0;
    }function Gy(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;e = (c[a + 4 >> 2] | 0) - (c[a >> 2] | 0) | 0;d = e >> 2;e = AA(e + 4 | 0) | 0;c[e >> 2] = d;if (d | 0) {
        b = 0;do {
          c[e + 4 + (b << 2) >> 2] = Hy(c[(c[a >> 2] | 0) + (b << 2) >> 2] | 0) | 0;b = b + 1 | 0;
        } while ((b | 0) != (d | 0));
      }return e | 0;
    }function Hy(a) {
      a = a | 0;return a | 0;
    }function Iy(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;e = (c[a + 4 >> 2] | 0) - (c[a >> 2] | 0) | 0;d = e >> 2;e = AA(e + 4 | 0) | 0;c[e >> 2] = d;if (d | 0) {
        b = 0;do {
          c[e + 4 + (b << 2) >> 2] = Jy((c[a >> 2] | 0) + (b << 2) | 0) | 0;b = b + 1 | 0;
        } while ((b | 0) != (d | 0));
      }return e | 0;
    }function Jy(a) {
      a = a | 0;var b = 0,
          c = 0,
          d = 0,
          e = 0;e = l;l = l + 32 | 0;b = e + 12 | 0;c = e;d = Li(Ky() | 0) | 0;if (!d) a = Ly(a) | 0;else {
        Mi(b, d);Ni(c, b);FD(a, c);a = Pi(b) | 0;
      }l = e;return a | 0;
    }function Ky() {
      var b = 0;if (!(a[8848] | 0)) {
        Qy(10516);Na(25, 10516, o | 0) | 0;b = 8848;c[b >> 2] = 1;c[b + 4 >> 2] = 0;
      }return 10516;
    }function Ly(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0;d = l;l = l + 16 | 0;f = d + 4 | 0;h = d;e = AA(8) | 0;b = e;i = qF(4) | 0;c[i >> 2] = c[a >> 2];g = b + 4 | 0;c[g >> 2] = i;a = qF(8) | 0;g = c[g >> 2] | 0;c[h >> 2] = 0;c[f >> 2] = c[h >> 2];My(a, g, f);c[e >> 2] = a;l = d;return b | 0;
    }function My(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;c[a >> 2] = b;d = qF(16) | 0;c[d + 4 >> 2] = 0;c[d + 8 >> 2] = 0;c[d >> 2] = 1708;c[d + 12 >> 2] = b;c[a + 4 >> 2] = d;return;
    }function Ny(a) {
      a = a | 0;kF(a);sF(a);return;
    }function Oy(a) {
      a = a | 0;a = c[a + 12 >> 2] | 0;if (a | 0) sF(a);return;
    }function Py(a) {
      a = a | 0;sF(a);return;
    }function Qy(a) {
      a = a | 0;fj(a);return;
    }function Ry(a) {
      a = a | 0;ih(a, Sy() | 0, 5);return;
    }function Sy() {
      return 1728;
    }function Ty(a, b) {
      a = a | 0;b = b | 0;var d = 0;if ((Vy(a) | 0) >>> 0 < b >>> 0) jF(a);if (b >>> 0 > 1073741823) Ma(5765, 5802, 1734, 5872);else {
        d = qF(b << 2) | 0;c[a + 4 >> 2] = d;c[a >> 2] = d;c[a + 8 >> 2] = d + (b << 2);Wy(a, 0);return;
      }
    }function Uy(a, b, d, e) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0;g = l;l = l + 16 | 0;f = g;py(f, a, e);e = a + 4 | 0;a = d - b | 0;if ((a | 0) > 0) {
        AF(c[e >> 2] | 0, b | 0, a | 0) | 0;c[e >> 2] = (c[e >> 2] | 0) + (a >>> 2 << 2);
      }qy(f);l = g;return;
    }function Vy(a) {
      a = a | 0;return 1073741823;
    }function Wy(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0;d = c[a >> 2] | 0;e = d + ((c[a + 8 >> 2] | 0) - d >> 2 << 2) | 0;Xy(a, d, e, e, d + (b << 2) | 0);return;
    }function Xy(a, b, c, d, e) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;e = e | 0;return;
    }function Yy(a, b) {
      a = a | 0;b = b | 0;var d = 0;if ((_y(a) | 0) >>> 0 < b >>> 0) jF(a);if (b >>> 0 > 1073741823) Ma(5765, 5802, 1734, 5872);else {
        d = qF(b << 2) | 0;c[a + 4 >> 2] = d;c[a >> 2] = d;c[a + 8 >> 2] = d + (b << 2);$y(a, 0);return;
      }
    }function Zy(a, b, d, e) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0;g = l;l = l + 16 | 0;f = g;ly(f, a, e);e = a + 4 | 0;a = d - b | 0;if ((a | 0) > 0) {
        AF(c[e >> 2] | 0, b | 0, a | 0) | 0;c[e >> 2] = (c[e >> 2] | 0) + (a >>> 2 << 2);
      }my(f);l = g;return;
    }function _y(a) {
      a = a | 0;return 1073741823;
    }function $y(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0;d = c[a >> 2] | 0;e = d + ((c[a + 8 >> 2] | 0) - d >> 2 << 2) | 0;az(a, d, e, e, d + (b << 2) | 0);return;
    }function az(a, b, c, d, e) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;e = e | 0;return;
    }function bz(a, b, d, e) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;var f = 0;c[a + 12 >> 2] = 0;c[a + 16 >> 2] = e;do if (b) {
        if (b >>> 0 > 1073741823) Ma(5765, 5802, 1734, 5872);else {
          f = qF(b << 2) | 0;break;
        }
      } else f = 0; while (0);c[a >> 2] = f;e = f + (d << 2) | 0;c[a + 8 >> 2] = e;c[a + 4 >> 2] = e;c[a + 12 >> 2] = f + (b << 2);return;
    }function cz(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0;ez(a);e = c[a >> 2] | 0;h = a + 4 | 0;g = b + 4 | 0;f = (c[h >> 2] | 0) - e | 0;d = (c[g >> 2] | 0) + (0 - (f >> 2) << 2) | 0;c[g >> 2] = d;if ((f | 0) > 0) {
        AF(d | 0, e | 0, f | 0) | 0;e = g;d = c[g >> 2] | 0;
      } else e = g;g = c[a >> 2] | 0;c[a >> 2] = d;c[e >> 2] = g;d = b + 8 | 0;g = c[h >> 2] | 0;c[h >> 2] = c[d >> 2];c[d >> 2] = g;d = a + 8 | 0;g = b + 12 | 0;f = c[d >> 2] | 0;c[d >> 2] = c[g >> 2];c[g >> 2] = f;c[b >> 2] = c[e >> 2];Wy(a, (c[h >> 2] | 0) - (c[a >> 2] | 0) >> 2);return;
    }function dz(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;b = c[a + 4 >> 2] | 0;d = a + 8 | 0;e = c[d >> 2] | 0;if ((e | 0) != (b | 0)) c[d >> 2] = e + (~((e + -4 - b | 0) >>> 2) << 2);a = c[a >> 2] | 0;if (a | 0) sF(a);return;
    }function ez(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;e = c[a >> 2] | 0;d = e;b = e + ((c[a + 8 >> 2] | 0) - d >> 2 << 2) | 0;Xy(a, e, b, e + ((c[a + 4 >> 2] | 0) - d >> 2 << 2) | 0, b);return;
    }function fz(a, b, d, e) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;var f = 0;c[a + 12 >> 2] = 0;c[a + 16 >> 2] = e;do if (b) {
        if (b >>> 0 > 1073741823) Ma(5765, 5802, 1734, 5872);else {
          f = qF(b << 2) | 0;break;
        }
      } else f = 0; while (0);c[a >> 2] = f;e = f + (d << 2) | 0;c[a + 8 >> 2] = e;c[a + 4 >> 2] = e;c[a + 12 >> 2] = f + (b << 2);return;
    }function gz(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0;iz(a);e = c[a >> 2] | 0;h = a + 4 | 0;g = b + 4 | 0;f = (c[h >> 2] | 0) - e | 0;d = (c[g >> 2] | 0) + (0 - (f >> 2) << 2) | 0;c[g >> 2] = d;if ((f | 0) > 0) {
        AF(d | 0, e | 0, f | 0) | 0;e = g;d = c[g >> 2] | 0;
      } else e = g;g = c[a >> 2] | 0;c[a >> 2] = d;c[e >> 2] = g;d = b + 8 | 0;g = c[h >> 2] | 0;c[h >> 2] = c[d >> 2];c[d >> 2] = g;d = a + 8 | 0;g = b + 12 | 0;f = c[d >> 2] | 0;c[d >> 2] = c[g >> 2];c[g >> 2] = f;c[b >> 2] = c[e >> 2];$y(a, (c[h >> 2] | 0) - (c[a >> 2] | 0) >> 2);return;
    }function hz(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;b = c[a + 4 >> 2] | 0;d = a + 8 | 0;e = c[d >> 2] | 0;if ((e | 0) != (b | 0)) c[d >> 2] = e + (~((e + -4 - b | 0) >>> 2) << 2);a = c[a >> 2] | 0;if (a | 0) sF(a);return;
    }function iz(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;e = c[a >> 2] | 0;d = e;b = e + ((c[a + 8 >> 2] | 0) - d >> 2 << 2) | 0;az(a, e, b, e + ((c[a + 4 >> 2] | 0) - d >> 2 << 2) | 0, b);return;
    }function jz(a, b, d, e, f) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;f = f | 0;var g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0,
          n = 0,
          o = 0,
          p = 0,
          q = 0,
          r = 0,
          s = 0;s = l;l = l + 48 | 0;m = s + 32 | 0;o = s + 24 | 0;k = s + 28 | 0;p = s + 16 | 0;q = s + 4 | 0;r = s;n = s + 20 | 0;i = by() | 0;g = c[i >> 2] | 0;h = c[g >> 2] | 0;if (h | 0) {
        j = c[i + 8 >> 2] | 0;i = c[i + 4 >> 2] | 0;while (1) {
          CD(m, h);kz(a, m, i, j);g = g + 4 | 0;h = c[g >> 2] | 0;if (!h) break;else {
            j = j + 1 | 0;i = i + 1 | 0;
          }
        }
      }g = dy() | 0;h = c[g >> 2] | 0;if (h | 0) do {
        CD(m, h);c[o >> 2] = c[g + 4 >> 2];lz(b, m, o);g = g + 8 | 0;h = c[g >> 2] | 0;
      } while ((h | 0) != 0);g = c[(Px() | 0) >> 2] | 0;if (g | 0) do {
        b = c[g + 4 >> 2] | 0;CD(m, c[(mz(b) | 0) >> 2] | 0);c[o >> 2] = _x(b) | 0;nz(d, m, o);g = c[g >> 2] | 0;
      } while ((g | 0) != 0);CD(k, 0);g = ay() | 0;c[m >> 2] = c[k >> 2];gy(m, g, f);g = c[(Px() | 0) >> 2] | 0;if (g | 0) {
        j = q + 4 | 0;a = q + 8 | 0;b = q + 8 | 0;do {
          i = c[g + 4 >> 2] | 0;CD(o, c[(mz(i) | 0) >> 2] | 0);pz(p, oz(i) | 0);h = c[p >> 2] | 0;if (h | 0) {
            c[q >> 2] = 0;c[j >> 2] = 0;c[a >> 2] = 0;do {
              CD(r, c[(mz(c[h + 4 >> 2] | 0) | 0) >> 2] | 0);if ((c[j >> 2] | 0) >>> 0 < (c[b >> 2] | 0) >>> 0) {
                ly(m, q, 1);c[c[j >> 2] >> 2] = c[r >> 2];my(m);c[j >> 2] = (c[j >> 2] | 0) + 4;
              } else ny(q, r);h = c[h >> 2] | 0;
            } while ((h | 0) != 0);qz(e, o, q);vy(q);
          }c[n >> 2] = c[o >> 2];k = rz(i) | 0;c[m >> 2] = c[n >> 2];gy(m, k, f);cj(p);g = c[g >> 2] | 0;
        } while ((g | 0) != 0);
      }l = s;return;
    }function kz(a, b, c, d) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;Fz(a, b, c, d);return;
    }function lz(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;Ez(a, b, c);return;
    }function mz(a) {
      a = a | 0;return a | 0;
    }function nz(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;zz(a, b, c);return;
    }function oz(a) {
      a = a | 0;return a + 16 | 0;
    }function pz(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0;g = l;l = l + 16 | 0;f = g + 8 | 0;d = g;c[a >> 2] = 0;e = c[b >> 2] | 0;c[f >> 2] = e;c[d >> 2] = a;d = xz(d) | 0;if (e | 0) {
        e = qF(12) | 0;h = (yz(f) | 0) + 4 | 0;a = c[h + 4 >> 2] | 0;b = e + 4 | 0;c[b >> 2] = c[h >> 2];c[b + 4 >> 2] = a;b = c[c[f >> 2] >> 2] | 0;c[f >> 2] = b;if (!b) a = e;else {
          b = e;while (1) {
            a = qF(12) | 0;j = (yz(f) | 0) + 4 | 0;i = c[j + 4 >> 2] | 0;h = a + 4 | 0;c[h >> 2] = c[j >> 2];c[h + 4 >> 2] = i;c[b >> 2] = a;h = c[c[f >> 2] >> 2] | 0;c[f >> 2] = h;if (!h) break;else b = a;
          }
        }c[a >> 2] = c[d >> 2];c[d >> 2] = e;
      }l = g;return;
    }function qz(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;sz(a, b, c);return;
    }function rz(a) {
      a = a | 0;return a + 24 | 0;
    }function sz(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0;e = l;l = l + 32 | 0;h = e + 24 | 0;f = e + 16 | 0;i = e + 12 | 0;g = e;ID(f);a = Vg(a) | 0;c[i >> 2] = c[b >> 2];xy(g, d);c[h >> 2] = c[i >> 2];tz(a, h, g);vy(g);KD(f);l = e;return;
    }function tz(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0;e = l;l = l + 32 | 0;h = e + 16 | 0;i = e + 12 | 0;f = e;g = Yg(uz() | 0) | 0;c[i >> 2] = c[b >> 2];c[h >> 2] = c[i >> 2];b = By(h) | 0;c[f >> 2] = c[d >> 2];h = d + 4 | 0;c[f + 4 >> 2] = c[h >> 2];i = d + 8 | 0;c[f + 8 >> 2] = c[i >> 2];c[i >> 2] = 0;c[h >> 2] = 0;c[d >> 2] = 0;Aa(0, g | 0, a | 0, b | 0, Ey(f) | 0) | 0;vy(f);l = e;return;
    }function uz() {
      var b = 0;if (!(a[8864] | 0)) {
        vz(10572);b = 8864;c[b >> 2] = 1;c[b + 4 >> 2] = 0;
      }return 10572;
    }function vz(a) {
      a = a | 0;ih(a, wz() | 0, 2);return;
    }function wz() {
      return 1784;
    }function xz(a) {
      a = a | 0;return c[a >> 2] | 0;
    }function yz(a) {
      a = a | 0;return c[a >> 2] | 0;
    }function zz(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0;e = l;l = l + 32 | 0;g = e + 16 | 0;f = e + 8 | 0;h = e;ID(f);a = Vg(a) | 0;c[h >> 2] = c[b >> 2];d = c[d >> 2] | 0;c[g >> 2] = c[h >> 2];Az(a, g, d);KD(f);l = e;return;
    }function Az(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0;e = l;l = l + 16 | 0;g = e + 4 | 0;h = e;f = Yg(Bz() | 0) | 0;c[h >> 2] = c[b >> 2];c[g >> 2] = c[h >> 2];b = By(g) | 0;Aa(0, f | 0, a | 0, b | 0, Cy(d) | 0) | 0;l = e;return;
    }function Bz() {
      var b = 0;if (!(a[8872] | 0)) {
        Cz(10584);b = 8872;c[b >> 2] = 1;c[b + 4 >> 2] = 0;
      }return 10584;
    }function Cz(a) {
      a = a | 0;ih(a, Dz() | 0, 2);return;
    }function Dz() {
      return 1796;
    }function Ez(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0;e = l;l = l + 32 | 0;g = e + 16 | 0;f = e + 8 | 0;h = e;ID(f);a = Vg(a) | 0;c[h >> 2] = c[b >> 2];d = c[d >> 2] | 0;c[g >> 2] = c[h >> 2];Az(a, g, d);KD(f);l = e;return;
    }function Fz(b, d, e, f) {
      b = b | 0;d = d | 0;e = e | 0;f = f | 0;var g = 0,
          h = 0,
          i = 0,
          j = 0;g = l;l = l + 32 | 0;i = g + 16 | 0;h = g + 8 | 0;j = g;ID(h);b = Vg(b) | 0;c[j >> 2] = c[d >> 2];e = a[e >> 0] | 0;f = a[f >> 0] | 0;c[i >> 2] = c[j >> 2];Gz(b, i, e, f);KD(h);l = g;return;
    }function Gz(a, b, d, e) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0,
          h = 0,
          i = 0;f = l;l = l + 16 | 0;h = f + 4 | 0;i = f;g = Yg(Hz() | 0) | 0;c[i >> 2] = c[b >> 2];c[h >> 2] = c[i >> 2];b = By(h) | 0;d = Iz(d) | 0;hb(0, g | 0, a | 0, b | 0, d | 0, Iz(e) | 0) | 0;l = f;return;
    }function Hz() {
      var b = 0;if (!(a[8880] | 0)) {
        Kz(10596);b = 8880;c[b >> 2] = 1;c[b + 4 >> 2] = 0;
      }return 10596;
    }function Iz(a) {
      a = a | 0;return Jz(a) | 0;
    }function Jz(a) {
      a = a | 0;return a & 255 | 0;
    }function Kz(a) {
      a = a | 0;ih(a, Lz() | 0, 3);return;
    }function Lz() {
      return 1808;
    }function Mz(b, d) {
      b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0,
          n = 0,
          o = 0;o = l;l = l + 32 | 0;h = o + 24 | 0;i = o + 8 | 0;j = o + 12 | 0;k = o + 4 | 0;m = o;Jk(i, 0);e = ED(b) | 0;c[j >> 2] = 0;n = j + 4 | 0;c[n >> 2] = 0;c[j + 8 >> 2] = 0;switch (e << 24 >> 24) {case 0:
          {
            a[k >> 0] = 0;c[h >> 2] = Nz(d, k) | 0;Oz(i, h) | 0;zf(h);break;
          }case 8:
          {
            n = DD(b) | 0;a[k >> 0] = 8;CD(m, c[n + 4 >> 2] | 0);c[h >> 2] = Pz(d, k, m, n + 8 | 0) | 0;Oz(i, h) | 0;zf(h);break;
          }case 9:
          {
            f = DD(b) | 0;b = c[f + 4 >> 2] | 0;if (b | 0) {
              g = j + 8 | 0;e = f + 12 | 0;while (1) {
                b = b + -1 | 0;CD(k, c[e >> 2] | 0);if ((c[n >> 2] | 0) >>> 0 < (c[g >> 2] | 0) >>> 0) {
                  ly(h, j, 1);c[c[n >> 2] >> 2] = c[k >> 2];my(h);c[n >> 2] = (c[n >> 2] | 0) + 4;
                } else ny(j, k);if (!b) break;else e = e + 4 | 0;
              }
            }a[k >> 0] = 9;CD(m, c[f + 8 >> 2] | 0);c[h >> 2] = Qz(d, k, m, j) | 0;Oz(i, h) | 0;zf(h);break;
          }default:
          {
            n = DD(b) | 0;a[k >> 0] = e;CD(m, c[n + 4 >> 2] | 0);c[h >> 2] = Rz(d, k, m) | 0;Oz(i, h) | 0;zf(h);
          }}vy(j);l = o;return c[i >> 2] | 0;
    }function Nz(b, c) {
      b = b | 0;c = c | 0;var d = 0,
          e = 0;d = l;l = l + 16 | 0;e = d;ID(e);b = Vg(b) | 0;c = dA(b, a[c >> 0] | 0) | 0;KD(e);l = d;return c | 0;
    }function Oz(a, b) {
      a = a | 0;b = b | 0;var d = 0;d = c[a >> 2] | 0;if (d | 0) jb(d | 0);c[a >> 2] = c[b >> 2];c[b >> 2] = 0;return a | 0;
    }function Pz(b, d, e, f) {
      b = b | 0;d = d | 0;e = e | 0;f = f | 0;var g = 0,
          h = 0,
          i = 0,
          j = 0;g = l;l = l + 32 | 0;i = g + 16 | 0;h = g + 8 | 0;j = g;ID(h);b = Vg(b) | 0;d = a[d >> 0] | 0;c[j >> 2] = c[e >> 2];f = c[f >> 2] | 0;c[i >> 2] = c[j >> 2];f = $z(b, d, i, f) | 0;KD(h);l = g;return f | 0;
    }function Qz(b, d, e, f) {
      b = b | 0;d = d | 0;e = e | 0;f = f | 0;var g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0;g = l;l = l + 32 | 0;j = g + 24 | 0;h = g + 16 | 0;k = g + 12 | 0;i = g;ID(h);b = Vg(b) | 0;d = a[d >> 0] | 0;c[k >> 2] = c[e >> 2];xy(i, f);c[j >> 2] = c[k >> 2];f = Xz(b, d, j, i) | 0;vy(i);KD(h);l = g;return f | 0;
    }function Rz(b, d, e) {
      b = b | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0,
          h = 0,
          i = 0;f = l;l = l + 32 | 0;h = f + 16 | 0;g = f + 8 | 0;i = f;ID(g);b = Vg(b) | 0;d = a[d >> 0] | 0;c[i >> 2] = c[e >> 2];c[h >> 2] = c[i >> 2];e = Sz(b, d, h) | 0;KD(g);l = f;return e | 0;
    }function Sz(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0;e = l;l = l + 16 | 0;f = e + 4 | 0;h = e;g = Yg(Tz() | 0) | 0;b = Iz(b) | 0;c[h >> 2] = c[d >> 2];c[f >> 2] = c[h >> 2];d = Uz(Aa(0, g | 0, a | 0, b | 0, By(f) | 0) | 0) | 0;l = e;return d | 0;
    }function Tz() {
      var b = 0;if (!(a[8888] | 0)) {
        Vz(10608);b = 8888;c[b >> 2] = 1;c[b + 4 >> 2] = 0;
      }return 10608;
    }function Uz(a) {
      a = a | 0;var b = 0,
          d = 0;d = l;l = l + 16 | 0;b = d;Jk(b, a);l = d;return c[b >> 2] | 0;
    }function Vz(a) {
      a = a | 0;ih(a, Wz() | 0, 2);return;
    }function Wz() {
      return 1824;
    }function Xz(a, b, d, e) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0;f = l;l = l + 32 | 0;i = f + 16 | 0;j = f + 12 | 0;g = f;h = Yg(Yz() | 0) | 0;b = Iz(b) | 0;c[j >> 2] = c[d >> 2];c[i >> 2] = c[j >> 2];d = By(i) | 0;c[g >> 2] = c[e >> 2];i = e + 4 | 0;c[g + 4 >> 2] = c[i >> 2];j = e + 8 | 0;c[g + 8 >> 2] = c[j >> 2];c[j >> 2] = 0;c[i >> 2] = 0;c[e >> 2] = 0;e = Uz(hb(0, h | 0, a | 0, b | 0, d | 0, Ey(g) | 0) | 0) | 0;vy(g);l = f;return e | 0;
    }function Yz() {
      var b = 0;if (!(a[8896] | 0)) {
        Zz(10620);b = 8896;c[b >> 2] = 1;c[b + 4 >> 2] = 0;
      }return 10620;
    }function Zz(a) {
      a = a | 0;ih(a, _z() | 0, 3);return;
    }function _z() {
      return 1836;
    }function $z(a, b, d, e) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0,
          h = 0,
          i = 0;f = l;l = l + 16 | 0;h = f + 4 | 0;i = f;g = Yg(aA() | 0) | 0;b = Iz(b) | 0;c[i >> 2] = c[d >> 2];c[h >> 2] = c[i >> 2];d = By(h) | 0;e = Uz(hb(0, g | 0, a | 0, b | 0, d | 0, Dy(e) | 0) | 0) | 0;l = f;return e | 0;
    }function aA() {
      var b = 0;if (!(a[8904] | 0)) {
        bA(10632);b = 8904;c[b >> 2] = 1;c[b + 4 >> 2] = 0;
      }return 10632;
    }function bA(a) {
      a = a | 0;ih(a, cA() | 0, 3);return;
    }function cA() {
      return 1852;
    }function dA(a, b) {
      a = a | 0;b = b | 0;var c = 0;c = Yg(eA() | 0) | 0;return Uz(kb(0, c | 0, a | 0, Iz(b) | 0) | 0) | 0;
    }function eA() {
      var b = 0;if (!(a[8912] | 0)) {
        fA(10644);b = 8912;c[b >> 2] = 1;c[b + 4 >> 2] = 0;
      }return 10644;
    }function fA(a) {
      a = a | 0;ih(a, gA() | 0, 1);return;
    }function gA() {
      return 1868;
    }function hA() {
      iA();jA();kA();return;
    }function iA() {
      c[2665] = rF(65536) | 0;return;
    }function jA() {
      HA(10708);return;
    }function kA() {
      lA(10668);return;
    }function lA(a) {
      a = a | 0;mA(a, 5708);nA(a) | 0;return;
    }function mA(a, b) {
      a = a | 0;b = b | 0;var d = 0;d = Ky() | 0;c[a >> 2] = d;BA(d, b);Ox(c[a >> 2] | 0);return;
    }function nA(a) {
      a = a | 0;var b = 0;b = c[a >> 2] | 0;Cv(b, oA() | 0);return a | 0;
    }function oA() {
      var b = 0;if (!(a[8920] | 0)) {
        pA(10672);Na(63, 10672, o | 0) | 0;b = 8920;c[b >> 2] = 1;c[b + 4 >> 2] = 0;
      }if (!(Ai(10672) | 0)) pA(10672);return 10672;
    }function pA(a) {
      a = a | 0;sA(a);Iv(a, 25);return;
    }function qA(a) {
      a = a | 0;rA(a + 24 | 0);return;
    }function rA(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;d = c[a >> 2] | 0;e = d;if (d | 0) {
        a = a + 4 | 0;b = c[a >> 2] | 0;if ((b | 0) != (d | 0)) c[a >> 2] = b + (~((b + -8 - e | 0) >>> 3) << 3);sF(d);
      }return;
    }function sA(a) {
      a = a | 0;var b = 0;b = Di() | 0;Gi(a, 5, 19, b, xA() | 0, 1);c[a + 24 >> 2] = 0;c[a + 28 >> 2] = 0;c[a + 32 >> 2] = 0;return;
    }function tA(a, b) {
      a = a | 0;b = b | 0;uA(a, b);return;
    }function uA(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0,
          f = 0;d = l;l = l + 16 | 0;e = d;f = d + 4 | 0;gl(f, b);c[e >> 2] = hl(f, b) | 0;vA(a, e);l = d;return;
    }function vA(b, d) {
      b = b | 0;d = d | 0;wA(b + 4 | 0, c[d >> 2] | 0);a[b + 8 >> 0] = 1;return;
    }function wA(a, b) {
      a = a | 0;b = b | 0;c[a >> 2] = b;return;
    }function xA() {
      return 1876;
    }function yA(a) {
      a = a | 0;return zA(a) | 0;
    }function zA(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0;d = l;l = l + 16 | 0;f = d + 4 | 0;h = d;e = AA(8) | 0;b = e;i = qF(4) | 0;gl(f, a);wA(i, hl(f, a) | 0);g = b + 4 | 0;c[g >> 2] = i;a = qF(8) | 0;g = c[g >> 2] | 0;c[h >> 2] = 0;c[f >> 2] = c[h >> 2];My(a, g, f);c[e >> 2] = a;l = d;return b | 0;
    }function AA(a) {
      a = a | 0;var b = 0,
          d = 0;a = a + 7 & -8;if (a >>> 0 <= 32768 ? (b = c[2664] | 0, a >>> 0 <= (65536 - b | 0) >>> 0) : 0) {
        d = (c[2665] | 0) + b | 0;c[2664] = b + a;a = d;
      } else {
        a = rF(a + 8 | 0) | 0;c[a >> 2] = c[2666];c[2666] = a;a = a + 8 | 0;
      }return a | 0;
    }function BA(a, b) {
      a = a | 0;b = b | 0;c[a >> 2] = CA() | 0;c[a + 4 >> 2] = DA() | 0;c[a + 12 >> 2] = b;c[a + 8 >> 2] = EA() | 0;c[a + 32 >> 2] = 9;return;
    }function CA() {
      return 11596;
    }function DA() {
      return 1884;
    }function EA() {
      return ew() | 0;
    }function FA(a, b, c, d) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;if ((ot(d, 896) | 0) == 512) {
        if (c | 0) {
          GA(c);sF(c);
        }
      } else if (b | 0) sF(b);return;
    }function GA(a) {
      a = a | 0;a = c[a + 4 >> 2] | 0;if (a | 0) oF(a);return;
    }function HA(a) {
      a = a | 0;IA(a, 5716);JA(a) | 0;KA(a, 5722, 26) | 0;LA(a, 5733, 1) | 0;MA(a, 5741, 12) | 0;NA(a, 5751, 20) | 0;PA(a, 5758, 27) | 0;return;
    }function IA(a, b) {
      a = a | 0;b = b | 0;var d = 0;d = uD() | 0;c[a >> 2] = d;vD(d, b);Ox(c[a >> 2] | 0);return;
    }function JA(a) {
      a = a | 0;var b = 0;b = c[a >> 2] | 0;Cv(b, fD() | 0);return a | 0;
    }function KA(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;HC(a, di(b) | 0, c, 0);return a | 0;
    }function LA(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;kC(a, di(b) | 0, c, 0);return a | 0;
    }function MA(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;IB(a, di(b) | 0, c, 0);return a | 0;
    }function NA(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;lB(a, di(b) | 0, c, 0);return a | 0;
    }function OA(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0;a: while (1) {
        d = c[2666] | 0;while (1) {
          if ((d | 0) == (b | 0)) break a;e = c[d >> 2] | 0;c[2666] = e;if (!d) d = e;else break;
        }sF(d);
      }c[2664] = a;return;
    }function PA(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;QA(a, di(b) | 0, c, 0);return a | 0;
    }function QA(a, b, d, e) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0;g = c[a >> 2] | 0;f = RA() | 0;a = SA(d) | 0;ii(g, b, f, a, TA(d, e) | 0, e);return;
    }function RA() {
      var b = 0,
          d = 0;if (!(a[8928] | 0)) {
        dB(10712);Na(64, 10712, o | 0) | 0;d = 8928;c[d >> 2] = 1;c[d + 4 >> 2] = 0;
      }if (!(Ai(10712) | 0)) {
        b = 10712;d = b + 36 | 0;do {
          c[b >> 2] = 0;b = b + 4 | 0;
        } while ((b | 0) < (d | 0));dB(10712);
      }return 10712;
    }function SA(a) {
      a = a | 0;return a | 0;
    }function TA(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0;h = l;l = l + 16 | 0;d = h + 8 | 0;e = h;f = h + 4 | 0;c[e >> 2] = a;i = RA() | 0;g = i + 24 | 0;c[f >> 2] = mi(b, 4) | 0;a = i + 28 | 0;if ((c[a >> 2] | 0) >>> 0 < (c[i + 32 >> 2] | 0) >>> 0) {
        UA(d, g, 1);VA(c[a >> 2] | 0, c[e >> 2] | 0, c[f >> 2] | 0);WA(d);i = (c[a >> 2] | 0) + 8 | 0;c[a >> 2] = i;a = i;
      } else {
        XA(g, e, f);a = c[a >> 2] | 0;
      }l = h;return (a - (c[g >> 2] | 0) >> 3) + -1 | 0;
    }function UA(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;return;
    }function VA(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;c[a >> 2] = b;c[a + 4 >> 2] = d;return;
    }function WA(a) {
      a = a | 0;return;
    }function XA(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0;i = l;l = l + 32 | 0;g = i;h = a + 4 | 0;e = ((c[h >> 2] | 0) - (c[a >> 2] | 0) >> 3) + 1 | 0;f = YA(a) | 0;if (f >>> 0 < e >>> 0) jF(a);j = c[a >> 2] | 0;m = (c[a + 8 >> 2] | 0) - j | 0;k = m >> 2;ZA(g, m >> 3 >>> 0 < f >>> 1 >>> 0 ? k >>> 0 < e >>> 0 ? e : k : f, (c[h >> 2] | 0) - j >> 3, a + 8 | 0);h = g + 8 | 0;VA(c[h >> 2] | 0, c[b >> 2] | 0, c[d >> 2] | 0);c[h >> 2] = (c[h >> 2] | 0) + 8;_A(a, g);$A(g);l = i;return;
    }function YA(a) {
      a = a | 0;return 536870911;
    }function ZA(a, b, d, e) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;var f = 0;c[a + 12 >> 2] = 0;c[a + 16 >> 2] = e;do if (b) {
        if (b >>> 0 > 536870911) Ma(5765, 5802, 1734, 5872);else {
          f = qF(b << 3) | 0;break;
        }
      } else f = 0; while (0);c[a >> 2] = f;e = f + (d << 3) | 0;c[a + 8 >> 2] = e;c[a + 4 >> 2] = e;c[a + 12 >> 2] = f + (b << 3);return;
    }function _A(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0;aB(a);e = c[a >> 2] | 0;h = a + 4 | 0;g = b + 4 | 0;f = (c[h >> 2] | 0) - e | 0;d = (c[g >> 2] | 0) + (0 - (f >> 3) << 3) | 0;c[g >> 2] = d;if ((f | 0) > 0) {
        AF(d | 0, e | 0, f | 0) | 0;e = g;d = c[g >> 2] | 0;
      } else e = g;g = c[a >> 2] | 0;c[a >> 2] = d;c[e >> 2] = g;d = b + 8 | 0;g = c[h >> 2] | 0;c[h >> 2] = c[d >> 2];c[d >> 2] = g;d = a + 8 | 0;g = b + 12 | 0;f = c[d >> 2] | 0;c[d >> 2] = c[g >> 2];c[g >> 2] = f;c[b >> 2] = c[e >> 2];bB(a, (c[h >> 2] | 0) - (c[a >> 2] | 0) >> 3);return;
    }function $A(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;b = c[a + 4 >> 2] | 0;d = a + 8 | 0;e = c[d >> 2] | 0;if ((e | 0) != (b | 0)) c[d >> 2] = e + (~((e + -8 - b | 0) >>> 3) << 3);a = c[a >> 2] | 0;if (a | 0) sF(a);return;
    }function aB(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;e = c[a >> 2] | 0;d = e;b = e + ((c[a + 8 >> 2] | 0) - d >> 3 << 3) | 0;cB(a, e, b, e + ((c[a + 4 >> 2] | 0) - d >> 3 << 3) | 0, b);return;
    }function bB(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0;d = c[a >> 2] | 0;e = d + ((c[a + 8 >> 2] | 0) - d >> 3 << 3) | 0;cB(a, d, e, e, d + (b << 3) | 0);return;
    }function cB(a, b, c, d, e) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;e = e | 0;return;
    }function dB(a) {
      a = a | 0;gB(a);return;
    }function eB(a) {
      a = a | 0;fB(a + 24 | 0);return;
    }function fB(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;d = c[a >> 2] | 0;e = d;if (d | 0) {
        a = a + 4 | 0;b = c[a >> 2] | 0;if ((b | 0) != (d | 0)) c[a >> 2] = b + (~((b + -8 - e | 0) >>> 3) << 3);sF(d);
      }return;
    }function gB(a) {
      a = a | 0;var b = 0;b = Di() | 0;Gi(a, 1, 10, b, hB() | 0, 2);c[a + 24 >> 2] = 0;c[a + 28 >> 2] = 0;c[a + 32 >> 2] = 0;return;
    }function hB() {
      return 1892;
    }function iB(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;kB(c[(jB(a) | 0) >> 2] | 0, b, d);return;
    }function jB(a) {
      a = a | 0;return (c[(RA() | 0) + 24 >> 2] | 0) + (a << 3) | 0;
    }function kB(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;var d = 0,
          e = 0,
          f = 0;d = l;l = l + 16 | 0;f = d + 1 | 0;e = d;gl(f, b);b = hl(f, b) | 0;gl(e, c);c = hl(e, c) | 0;yb[a & 31](b, c);l = d;return;
    }function lB(a, b, d, e) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0;g = c[a >> 2] | 0;f = mB() | 0;a = nB(d) | 0;ii(g, b, f, a, oB(d, e) | 0, e);return;
    }function mB() {
      var b = 0,
          d = 0;if (!(a[8936] | 0)) {
        AB(10748);Na(65, 10748, o | 0) | 0;d = 8936;c[d >> 2] = 1;c[d + 4 >> 2] = 0;
      }if (!(Ai(10748) | 0)) {
        b = 10748;d = b + 36 | 0;do {
          c[b >> 2] = 0;b = b + 4 | 0;
        } while ((b | 0) < (d | 0));AB(10748);
      }return 10748;
    }function nB(a) {
      a = a | 0;return a | 0;
    }function oB(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0;h = l;l = l + 16 | 0;d = h + 8 | 0;e = h;f = h + 4 | 0;c[e >> 2] = a;i = mB() | 0;g = i + 24 | 0;c[f >> 2] = mi(b, 4) | 0;a = i + 28 | 0;if ((c[a >> 2] | 0) >>> 0 < (c[i + 32 >> 2] | 0) >>> 0) {
        pB(d, g, 1);qB(c[a >> 2] | 0, c[e >> 2] | 0, c[f >> 2] | 0);rB(d);i = (c[a >> 2] | 0) + 8 | 0;c[a >> 2] = i;a = i;
      } else {
        sB(g, e, f);a = c[a >> 2] | 0;
      }l = h;return (a - (c[g >> 2] | 0) >> 3) + -1 | 0;
    }function pB(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;return;
    }function qB(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;c[a >> 2] = b;c[a + 4 >> 2] = d;return;
    }function rB(a) {
      a = a | 0;return;
    }function sB(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0;i = l;l = l + 32 | 0;g = i;h = a + 4 | 0;e = ((c[h >> 2] | 0) - (c[a >> 2] | 0) >> 3) + 1 | 0;f = tB(a) | 0;if (f >>> 0 < e >>> 0) jF(a);j = c[a >> 2] | 0;m = (c[a + 8 >> 2] | 0) - j | 0;k = m >> 2;uB(g, m >> 3 >>> 0 < f >>> 1 >>> 0 ? k >>> 0 < e >>> 0 ? e : k : f, (c[h >> 2] | 0) - j >> 3, a + 8 | 0);h = g + 8 | 0;qB(c[h >> 2] | 0, c[b >> 2] | 0, c[d >> 2] | 0);c[h >> 2] = (c[h >> 2] | 0) + 8;vB(a, g);wB(g);l = i;return;
    }function tB(a) {
      a = a | 0;return 536870911;
    }function uB(a, b, d, e) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;var f = 0;c[a + 12 >> 2] = 0;c[a + 16 >> 2] = e;do if (b) {
        if (b >>> 0 > 536870911) Ma(5765, 5802, 1734, 5872);else {
          f = qF(b << 3) | 0;break;
        }
      } else f = 0; while (0);c[a >> 2] = f;e = f + (d << 3) | 0;c[a + 8 >> 2] = e;c[a + 4 >> 2] = e;c[a + 12 >> 2] = f + (b << 3);return;
    }function vB(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0;xB(a);e = c[a >> 2] | 0;h = a + 4 | 0;g = b + 4 | 0;f = (c[h >> 2] | 0) - e | 0;d = (c[g >> 2] | 0) + (0 - (f >> 3) << 3) | 0;c[g >> 2] = d;if ((f | 0) > 0) {
        AF(d | 0, e | 0, f | 0) | 0;e = g;d = c[g >> 2] | 0;
      } else e = g;g = c[a >> 2] | 0;c[a >> 2] = d;c[e >> 2] = g;d = b + 8 | 0;g = c[h >> 2] | 0;c[h >> 2] = c[d >> 2];c[d >> 2] = g;d = a + 8 | 0;g = b + 12 | 0;f = c[d >> 2] | 0;c[d >> 2] = c[g >> 2];c[g >> 2] = f;c[b >> 2] = c[e >> 2];yB(a, (c[h >> 2] | 0) - (c[a >> 2] | 0) >> 3);return;
    }function wB(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;b = c[a + 4 >> 2] | 0;d = a + 8 | 0;e = c[d >> 2] | 0;if ((e | 0) != (b | 0)) c[d >> 2] = e + (~((e + -8 - b | 0) >>> 3) << 3);a = c[a >> 2] | 0;if (a | 0) sF(a);return;
    }function xB(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;e = c[a >> 2] | 0;d = e;b = e + ((c[a + 8 >> 2] | 0) - d >> 3 << 3) | 0;zB(a, e, b, e + ((c[a + 4 >> 2] | 0) - d >> 3 << 3) | 0, b);return;
    }function yB(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0;d = c[a >> 2] | 0;e = d + ((c[a + 8 >> 2] | 0) - d >> 3 << 3) | 0;zB(a, d, e, e, d + (b << 3) | 0);return;
    }function zB(a, b, c, d, e) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;e = e | 0;return;
    }function AB(a) {
      a = a | 0;DB(a);return;
    }function BB(a) {
      a = a | 0;CB(a + 24 | 0);return;
    }function CB(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;d = c[a >> 2] | 0;e = d;if (d | 0) {
        a = a + 4 | 0;b = c[a >> 2] | 0;if ((b | 0) != (d | 0)) c[a >> 2] = b + (~((b + -8 - e | 0) >>> 3) << 3);sF(d);
      }return;
    }function DB(a) {
      a = a | 0;var b = 0;b = Di() | 0;Gi(a, 1, 13, b, EB() | 0, 1);c[a + 24 >> 2] = 0;c[a + 28 >> 2] = 0;c[a + 32 >> 2] = 0;return;
    }function EB() {
      return 1904;
    }function FB(a, b) {
      a = a | 0;b = b | 0;return HB(c[(GB(a) | 0) >> 2] | 0, b) | 0;
    }function GB(a) {
      a = a | 0;return (c[(mB() | 0) + 24 >> 2] | 0) + (a << 3) | 0;
    }function HB(a, b) {
      a = a | 0;b = b | 0;var c = 0,
          d = 0;c = l;l = l + 16 | 0;d = c;gl(d, b);b = hl(d, b) | 0;b = em(zb[a & 31](b) | 0) | 0;l = c;return b | 0;
    }function IB(a, b, d, e) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0;g = c[a >> 2] | 0;f = JB() | 0;a = KB(d) | 0;ii(g, b, f, a, LB(d, e) | 0, e);return;
    }function JB() {
      var b = 0,
          d = 0;if (!(a[8944] | 0)) {
        XB(10784);Na(66, 10784, o | 0) | 0;d = 8944;c[d >> 2] = 1;c[d + 4 >> 2] = 0;
      }if (!(Ai(10784) | 0)) {
        b = 10784;d = b + 36 | 0;do {
          c[b >> 2] = 0;b = b + 4 | 0;
        } while ((b | 0) < (d | 0));XB(10784);
      }return 10784;
    }function KB(a) {
      a = a | 0;return a | 0;
    }function LB(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0;h = l;l = l + 16 | 0;d = h + 8 | 0;e = h;f = h + 4 | 0;c[e >> 2] = a;i = JB() | 0;g = i + 24 | 0;c[f >> 2] = mi(b, 4) | 0;a = i + 28 | 0;if ((c[a >> 2] | 0) >>> 0 < (c[i + 32 >> 2] | 0) >>> 0) {
        MB(d, g, 1);NB(c[a >> 2] | 0, c[e >> 2] | 0, c[f >> 2] | 0);OB(d);i = (c[a >> 2] | 0) + 8 | 0;c[a >> 2] = i;a = i;
      } else {
        PB(g, e, f);a = c[a >> 2] | 0;
      }l = h;return (a - (c[g >> 2] | 0) >> 3) + -1 | 0;
    }function MB(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;return;
    }function NB(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;c[a >> 2] = b;c[a + 4 >> 2] = d;return;
    }function OB(a) {
      a = a | 0;return;
    }function PB(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0;i = l;l = l + 32 | 0;g = i;h = a + 4 | 0;e = ((c[h >> 2] | 0) - (c[a >> 2] | 0) >> 3) + 1 | 0;f = QB(a) | 0;if (f >>> 0 < e >>> 0) jF(a);j = c[a >> 2] | 0;m = (c[a + 8 >> 2] | 0) - j | 0;k = m >> 2;RB(g, m >> 3 >>> 0 < f >>> 1 >>> 0 ? k >>> 0 < e >>> 0 ? e : k : f, (c[h >> 2] | 0) - j >> 3, a + 8 | 0);h = g + 8 | 0;NB(c[h >> 2] | 0, c[b >> 2] | 0, c[d >> 2] | 0);c[h >> 2] = (c[h >> 2] | 0) + 8;SB(a, g);TB(g);l = i;return;
    }function QB(a) {
      a = a | 0;return 536870911;
    }function RB(a, b, d, e) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;var f = 0;c[a + 12 >> 2] = 0;c[a + 16 >> 2] = e;do if (b) {
        if (b >>> 0 > 536870911) Ma(5765, 5802, 1734, 5872);else {
          f = qF(b << 3) | 0;break;
        }
      } else f = 0; while (0);c[a >> 2] = f;e = f + (d << 3) | 0;c[a + 8 >> 2] = e;c[a + 4 >> 2] = e;c[a + 12 >> 2] = f + (b << 3);return;
    }function SB(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0;UB(a);e = c[a >> 2] | 0;h = a + 4 | 0;g = b + 4 | 0;f = (c[h >> 2] | 0) - e | 0;d = (c[g >> 2] | 0) + (0 - (f >> 3) << 3) | 0;c[g >> 2] = d;if ((f | 0) > 0) {
        AF(d | 0, e | 0, f | 0) | 0;e = g;d = c[g >> 2] | 0;
      } else e = g;g = c[a >> 2] | 0;c[a >> 2] = d;c[e >> 2] = g;d = b + 8 | 0;g = c[h >> 2] | 0;c[h >> 2] = c[d >> 2];c[d >> 2] = g;d = a + 8 | 0;g = b + 12 | 0;f = c[d >> 2] | 0;c[d >> 2] = c[g >> 2];c[g >> 2] = f;c[b >> 2] = c[e >> 2];VB(a, (c[h >> 2] | 0) - (c[a >> 2] | 0) >> 3);return;
    }function TB(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;b = c[a + 4 >> 2] | 0;d = a + 8 | 0;e = c[d >> 2] | 0;if ((e | 0) != (b | 0)) c[d >> 2] = e + (~((e + -8 - b | 0) >>> 3) << 3);a = c[a >> 2] | 0;if (a | 0) sF(a);return;
    }function UB(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;e = c[a >> 2] | 0;d = e;b = e + ((c[a + 8 >> 2] | 0) - d >> 3 << 3) | 0;WB(a, e, b, e + ((c[a + 4 >> 2] | 0) - d >> 3 << 3) | 0, b);return;
    }function VB(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0;d = c[a >> 2] | 0;e = d + ((c[a + 8 >> 2] | 0) - d >> 3 << 3) | 0;WB(a, d, e, e, d + (b << 3) | 0);return;
    }function WB(a, b, c, d, e) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;e = e | 0;return;
    }function XB(a) {
      a = a | 0;_B(a);return;
    }function YB(a) {
      a = a | 0;ZB(a + 24 | 0);return;
    }function ZB(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;d = c[a >> 2] | 0;e = d;if (d | 0) {
        a = a + 4 | 0;b = c[a >> 2] | 0;if ((b | 0) != (d | 0)) c[a >> 2] = b + (~((b + -8 - e | 0) >>> 3) << 3);sF(d);
      }return;
    }function _B(a) {
      a = a | 0;var b = 0;b = Di() | 0;Gi(a, 1, 8, b, $B() | 0, 2);c[a + 24 >> 2] = 0;c[a + 28 >> 2] = 0;c[a + 32 >> 2] = 0;return;
    }function $B() {
      return 1912;
    }function aC(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;return cC(c[(bC(a) | 0) >> 2] | 0, b, d) | 0;
    }function bC(a) {
      a = a | 0;return (c[(JB() | 0) + 24 >> 2] | 0) + (a << 3) | 0;
    }function cC(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0;e = l;l = l + 32 | 0;h = e + 12 | 0;g = e + 8 | 0;i = e;j = e + 16 | 0;f = e + 4 | 0;dC(j, b);eC(i, j, b);Fk(f, d);d = Gk(f, d) | 0;c[h >> 2] = c[i >> 2];c[g >> 2] = Gb[a & 15](h, d) | 0;d = fC(g) | 0;zf(g);Hk(f);l = e;return d | 0;
    }function dC(a, b) {
      a = a | 0;b = b | 0;return;
    }function eC(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;gC(a, c);return;
    }function fC(a) {
      a = a | 0;return Vg(a) | 0;
    }function gC(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0,
          f = 0;f = l;l = l + 16 | 0;d = f;e = b;if (!(e & 1)) c[a >> 2] = c[b >> 2];else {
        hC(d, 0);Ra(e | 0, d | 0) | 0;iC(a, d);jC(d);
      }l = f;return;
    }function hC(b, d) {
      b = b | 0;d = d | 0;dh(b, d);c[b + 4 >> 2] = 0;a[b + 8 >> 0] = 0;return;
    }function iC(a, b) {
      a = a | 0;b = b | 0;c[a >> 2] = c[b + 4 >> 2];return;
    }function jC(b) {
      b = b | 0;a[b + 8 >> 0] = 0;return;
    }function kC(a, b, d, e) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0;g = c[a >> 2] | 0;f = lC() | 0;a = mC(d) | 0;ii(g, b, f, a, nC(d, e) | 0, e);return;
    }function lC() {
      var b = 0,
          d = 0;if (!(a[8952] | 0)) {
        zC(10820);Na(67, 10820, o | 0) | 0;d = 8952;c[d >> 2] = 1;c[d + 4 >> 2] = 0;
      }if (!(Ai(10820) | 0)) {
        b = 10820;d = b + 36 | 0;do {
          c[b >> 2] = 0;b = b + 4 | 0;
        } while ((b | 0) < (d | 0));zC(10820);
      }return 10820;
    }function mC(a) {
      a = a | 0;return a | 0;
    }function nC(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0;h = l;l = l + 16 | 0;d = h + 8 | 0;e = h;f = h + 4 | 0;c[e >> 2] = a;i = lC() | 0;g = i + 24 | 0;c[f >> 2] = mi(b, 4) | 0;a = i + 28 | 0;if ((c[a >> 2] | 0) >>> 0 < (c[i + 32 >> 2] | 0) >>> 0) {
        oC(d, g, 1);pC(c[a >> 2] | 0, c[e >> 2] | 0, c[f >> 2] | 0);qC(d);i = (c[a >> 2] | 0) + 8 | 0;c[a >> 2] = i;a = i;
      } else {
        rC(g, e, f);a = c[a >> 2] | 0;
      }l = h;return (a - (c[g >> 2] | 0) >> 3) + -1 | 0;
    }function oC(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;return;
    }function pC(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;c[a >> 2] = b;c[a + 4 >> 2] = d;return;
    }function qC(a) {
      a = a | 0;return;
    }function rC(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0;i = l;l = l + 32 | 0;g = i;h = a + 4 | 0;e = ((c[h >> 2] | 0) - (c[a >> 2] | 0) >> 3) + 1 | 0;f = sC(a) | 0;if (f >>> 0 < e >>> 0) jF(a);j = c[a >> 2] | 0;m = (c[a + 8 >> 2] | 0) - j | 0;k = m >> 2;tC(g, m >> 3 >>> 0 < f >>> 1 >>> 0 ? k >>> 0 < e >>> 0 ? e : k : f, (c[h >> 2] | 0) - j >> 3, a + 8 | 0);h = g + 8 | 0;pC(c[h >> 2] | 0, c[b >> 2] | 0, c[d >> 2] | 0);c[h >> 2] = (c[h >> 2] | 0) + 8;uC(a, g);vC(g);l = i;return;
    }function sC(a) {
      a = a | 0;return 536870911;
    }function tC(a, b, d, e) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;var f = 0;c[a + 12 >> 2] = 0;c[a + 16 >> 2] = e;do if (b) {
        if (b >>> 0 > 536870911) Ma(5765, 5802, 1734, 5872);else {
          f = qF(b << 3) | 0;break;
        }
      } else f = 0; while (0);c[a >> 2] = f;e = f + (d << 3) | 0;c[a + 8 >> 2] = e;c[a + 4 >> 2] = e;c[a + 12 >> 2] = f + (b << 3);return;
    }function uC(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0;wC(a);e = c[a >> 2] | 0;h = a + 4 | 0;g = b + 4 | 0;f = (c[h >> 2] | 0) - e | 0;d = (c[g >> 2] | 0) + (0 - (f >> 3) << 3) | 0;c[g >> 2] = d;if ((f | 0) > 0) {
        AF(d | 0, e | 0, f | 0) | 0;e = g;d = c[g >> 2] | 0;
      } else e = g;g = c[a >> 2] | 0;c[a >> 2] = d;c[e >> 2] = g;d = b + 8 | 0;g = c[h >> 2] | 0;c[h >> 2] = c[d >> 2];c[d >> 2] = g;d = a + 8 | 0;g = b + 12 | 0;f = c[d >> 2] | 0;c[d >> 2] = c[g >> 2];c[g >> 2] = f;c[b >> 2] = c[e >> 2];xC(a, (c[h >> 2] | 0) - (c[a >> 2] | 0) >> 3);return;
    }function vC(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;b = c[a + 4 >> 2] | 0;d = a + 8 | 0;e = c[d >> 2] | 0;if ((e | 0) != (b | 0)) c[d >> 2] = e + (~((e + -8 - b | 0) >>> 3) << 3);a = c[a >> 2] | 0;if (a | 0) sF(a);return;
    }function wC(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;e = c[a >> 2] | 0;d = e;b = e + ((c[a + 8 >> 2] | 0) - d >> 3 << 3) | 0;yC(a, e, b, e + ((c[a + 4 >> 2] | 0) - d >> 3 << 3) | 0, b);return;
    }function xC(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0;d = c[a >> 2] | 0;e = d + ((c[a + 8 >> 2] | 0) - d >> 3 << 3) | 0;yC(a, d, e, e, d + (b << 3) | 0);return;
    }function yC(a, b, c, d, e) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;e = e | 0;return;
    }function zC(a) {
      a = a | 0;CC(a);return;
    }function AC(a) {
      a = a | 0;BC(a + 24 | 0);return;
    }function BC(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;d = c[a >> 2] | 0;e = d;if (d | 0) {
        a = a + 4 | 0;b = c[a >> 2] | 0;if ((b | 0) != (d | 0)) c[a >> 2] = b + (~((b + -8 - e | 0) >>> 3) << 3);sF(d);
      }return;
    }function CC(a) {
      a = a | 0;var b = 0;b = Di() | 0;Gi(a, 1, 1, b, DC() | 0, 5);c[a + 24 >> 2] = 0;c[a + 28 >> 2] = 0;c[a + 32 >> 2] = 0;return;
    }function DC() {
      return 1924;
    }function EC(a, b, d, e, f, g) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;f = f | 0;g = g | 0;GC(c[(FC(a) | 0) >> 2] | 0, b, d, e, f, g);return;
    }
    function FC(a) {
      a = a | 0;return (c[(lC() | 0) + 24 >> 2] | 0) + (a << 3) | 0;
    }function GC(a, b, c, d, e, f) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;e = e | 0;f = f | 0;var g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0;g = l;l = l + 32 | 0;h = g + 16 | 0;i = g + 12 | 0;j = g + 8 | 0;k = g + 4 | 0;m = g;Fk(h, b);b = Gk(h, b) | 0;Fk(i, c);c = Gk(i, c) | 0;Fk(j, d);d = Gk(j, d) | 0;Fk(k, e);e = Gk(k, e) | 0;Fk(m, f);f = Gk(m, f) | 0;ub[a & 1](b, c, d, e, f);Hk(m);Hk(k);Hk(j);Hk(i);Hk(h);l = g;return;
    }function HC(a, b, d, e) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0;g = c[a >> 2] | 0;f = IC() | 0;a = JC(d) | 0;ii(g, b, f, a, KC(d, e) | 0, e);return;
    }function IC() {
      var b = 0,
          d = 0;if (!(a[8960] | 0)) {
        WC(10856);Na(68, 10856, o | 0) | 0;d = 8960;c[d >> 2] = 1;c[d + 4 >> 2] = 0;
      }if (!(Ai(10856) | 0)) {
        b = 10856;d = b + 36 | 0;do {
          c[b >> 2] = 0;b = b + 4 | 0;
        } while ((b | 0) < (d | 0));WC(10856);
      }return 10856;
    }function JC(a) {
      a = a | 0;return a | 0;
    }function KC(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0;h = l;l = l + 16 | 0;d = h + 8 | 0;e = h;f = h + 4 | 0;c[e >> 2] = a;i = IC() | 0;g = i + 24 | 0;c[f >> 2] = mi(b, 4) | 0;a = i + 28 | 0;if ((c[a >> 2] | 0) >>> 0 < (c[i + 32 >> 2] | 0) >>> 0) {
        LC(d, g, 1);MC(c[a >> 2] | 0, c[e >> 2] | 0, c[f >> 2] | 0);NC(d);i = (c[a >> 2] | 0) + 8 | 0;c[a >> 2] = i;a = i;
      } else {
        OC(g, e, f);a = c[a >> 2] | 0;
      }l = h;return (a - (c[g >> 2] | 0) >> 3) + -1 | 0;
    }function LC(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;return;
    }function MC(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;c[a >> 2] = b;c[a + 4 >> 2] = d;return;
    }function NC(a) {
      a = a | 0;return;
    }function OC(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0;i = l;l = l + 32 | 0;g = i;h = a + 4 | 0;e = ((c[h >> 2] | 0) - (c[a >> 2] | 0) >> 3) + 1 | 0;f = PC(a) | 0;if (f >>> 0 < e >>> 0) jF(a);j = c[a >> 2] | 0;m = (c[a + 8 >> 2] | 0) - j | 0;k = m >> 2;QC(g, m >> 3 >>> 0 < f >>> 1 >>> 0 ? k >>> 0 < e >>> 0 ? e : k : f, (c[h >> 2] | 0) - j >> 3, a + 8 | 0);h = g + 8 | 0;MC(c[h >> 2] | 0, c[b >> 2] | 0, c[d >> 2] | 0);c[h >> 2] = (c[h >> 2] | 0) + 8;RC(a, g);SC(g);l = i;return;
    }function PC(a) {
      a = a | 0;return 536870911;
    }function QC(a, b, d, e) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;var f = 0;c[a + 12 >> 2] = 0;c[a + 16 >> 2] = e;do if (b) {
        if (b >>> 0 > 536870911) Ma(5765, 5802, 1734, 5872);else {
          f = qF(b << 3) | 0;break;
        }
      } else f = 0; while (0);c[a >> 2] = f;e = f + (d << 3) | 0;c[a + 8 >> 2] = e;c[a + 4 >> 2] = e;c[a + 12 >> 2] = f + (b << 3);return;
    }function RC(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0;TC(a);e = c[a >> 2] | 0;h = a + 4 | 0;g = b + 4 | 0;f = (c[h >> 2] | 0) - e | 0;d = (c[g >> 2] | 0) + (0 - (f >> 3) << 3) | 0;c[g >> 2] = d;if ((f | 0) > 0) {
        AF(d | 0, e | 0, f | 0) | 0;e = g;d = c[g >> 2] | 0;
      } else e = g;g = c[a >> 2] | 0;c[a >> 2] = d;c[e >> 2] = g;d = b + 8 | 0;g = c[h >> 2] | 0;c[h >> 2] = c[d >> 2];c[d >> 2] = g;d = a + 8 | 0;g = b + 12 | 0;f = c[d >> 2] | 0;c[d >> 2] = c[g >> 2];c[g >> 2] = f;c[b >> 2] = c[e >> 2];UC(a, (c[h >> 2] | 0) - (c[a >> 2] | 0) >> 3);return;
    }function SC(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;b = c[a + 4 >> 2] | 0;d = a + 8 | 0;e = c[d >> 2] | 0;if ((e | 0) != (b | 0)) c[d >> 2] = e + (~((e + -8 - b | 0) >>> 3) << 3);a = c[a >> 2] | 0;if (a | 0) sF(a);return;
    }function TC(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;e = c[a >> 2] | 0;d = e;b = e + ((c[a + 8 >> 2] | 0) - d >> 3 << 3) | 0;VC(a, e, b, e + ((c[a + 4 >> 2] | 0) - d >> 3 << 3) | 0, b);return;
    }function UC(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0;d = c[a >> 2] | 0;e = d + ((c[a + 8 >> 2] | 0) - d >> 3 << 3) | 0;VC(a, d, e, e, d + (b << 3) | 0);return;
    }function VC(a, b, c, d, e) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;e = e | 0;return;
    }function WC(a) {
      a = a | 0;ZC(a);return;
    }function XC(a) {
      a = a | 0;YC(a + 24 | 0);return;
    }function YC(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;d = c[a >> 2] | 0;e = d;if (d | 0) {
        a = a + 4 | 0;b = c[a >> 2] | 0;if ((b | 0) != (d | 0)) c[a >> 2] = b + (~((b + -8 - e | 0) >>> 3) << 3);sF(d);
      }return;
    }function ZC(a) {
      a = a | 0;var b = 0;b = Di() | 0;Gi(a, 1, 11, b, _C() | 0, 2);c[a + 24 >> 2] = 0;c[a + 28 >> 2] = 0;c[a + 32 >> 2] = 0;return;
    }function _C() {
      return 1948;
    }function $C(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;bD(c[(aD(a) | 0) >> 2] | 0, b, d);return;
    }function aD(a) {
      a = a | 0;return (c[(IC() | 0) + 24 >> 2] | 0) + (a << 3) | 0;
    }function bD(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;var d = 0,
          e = 0,
          f = 0;d = l;l = l + 16 | 0;f = d + 4 | 0;e = d;cD(f, b);b = dD(f, b) | 0;Fk(e, c);c = Gk(e, c) | 0;yb[a & 31](b, c);Hk(e);l = d;return;
    }function cD(a, b) {
      a = a | 0;b = b | 0;return;
    }function dD(a, b) {
      a = a | 0;b = b | 0;return eD(b) | 0;
    }function eD(a) {
      a = a | 0;return a | 0;
    }function fD() {
      var b = 0;if (!(a[8968] | 0)) {
        gD(10892);Na(69, 10892, o | 0) | 0;b = 8968;c[b >> 2] = 1;c[b + 4 >> 2] = 0;
      }if (!(Ai(10892) | 0)) gD(10892);return 10892;
    }function gD(a) {
      a = a | 0;jD(a);Iv(a, 70);return;
    }function hD(a) {
      a = a | 0;iD(a + 24 | 0);return;
    }function iD(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0;d = c[a >> 2] | 0;e = d;if (d | 0) {
        a = a + 4 | 0;b = c[a >> 2] | 0;if ((b | 0) != (d | 0)) c[a >> 2] = b + (~((b + -8 - e | 0) >>> 3) << 3);sF(d);
      }return;
    }function jD(a) {
      a = a | 0;var b = 0;b = Di() | 0;Gi(a, 5, 7, b, nD() | 0, 0);c[a + 24 >> 2] = 0;c[a + 28 >> 2] = 0;c[a + 32 >> 2] = 0;return;
    }function kD(a) {
      a = a | 0;lD(a);return;
    }function lD(a) {
      a = a | 0;mD(a);return;
    }function mD(b) {
      b = b | 0;a[b + 8 >> 0] = 1;return;
    }function nD() {
      return 1988;
    }function oD() {
      return pD() | 0;
    }function pD() {
      var a = 0,
          b = 0,
          d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0;b = l;l = l + 16 | 0;f = b + 4 | 0;h = b;d = AA(8) | 0;a = d;g = a + 4 | 0;c[g >> 2] = qF(1) | 0;e = qF(8) | 0;g = c[g >> 2] | 0;c[h >> 2] = 0;c[f >> 2] = c[h >> 2];qD(e, g, f);c[d >> 2] = e;l = b;return a | 0;
    }function qD(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;c[a >> 2] = b;d = qF(16) | 0;c[d + 4 >> 2] = 0;c[d + 8 >> 2] = 0;c[d >> 2] = 1968;c[d + 12 >> 2] = b;c[a + 4 >> 2] = d;return;
    }function rD(a) {
      a = a | 0;kF(a);sF(a);return;
    }function sD(a) {
      a = a | 0;a = c[a + 12 >> 2] | 0;if (a | 0) sF(a);return;
    }function tD(a) {
      a = a | 0;sF(a);return;
    }function uD() {
      var b = 0;if (!(a[8976] | 0)) {
        BD(10928);Na(25, 10928, o | 0) | 0;b = 8976;c[b >> 2] = 1;c[b + 4 >> 2] = 0;
      }return 10928;
    }function vD(a, b) {
      a = a | 0;b = b | 0;c[a >> 2] = wD() | 0;c[a + 4 >> 2] = xD() | 0;c[a + 12 >> 2] = b;c[a + 8 >> 2] = yD() | 0;c[a + 32 >> 2] = 10;return;
    }function wD() {
      return 11597;
    }function xD() {
      return 1992;
    }function yD() {
      return qt() | 0;
    }function zD(a, b, c, d) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;if ((ot(d, 896) | 0) == 512) {
        if (c | 0) {
          AD(c);sF(c);
        }
      } else if (b | 0) sF(b);return;
    }function AD(a) {
      a = a | 0;a = c[a + 4 >> 2] | 0;if (a | 0) oF(a);return;
    }function BD(a) {
      a = a | 0;fj(a);return;
    }function CD(a, b) {
      a = a | 0;b = b | 0;c[a >> 2] = b;return;
    }function DD(a) {
      a = a | 0;return c[a >> 2] | 0;
    }function ED(b) {
      b = b | 0;return a[c[b >> 2] >> 0] | 0;
    }function FD(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0;d = l;l = l + 16 | 0;e = d;c[e >> 2] = c[a >> 2];GD(b, e) | 0;l = d;return;
    }function GD(a, b) {
      a = a | 0;b = b | 0;var d = 0;d = HD(c[a >> 2] | 0, b) | 0;b = a + 4 | 0;c[(c[b >> 2] | 0) + 8 >> 2] = d;return c[(c[b >> 2] | 0) + 8 >> 2] | 0;
    }function HD(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0;d = l;l = l + 16 | 0;e = d;ID(e);a = Vg(a) | 0;b = JD(a, c[b >> 2] | 0) | 0;KD(e);l = d;return b | 0;
    }function ID(a) {
      a = a | 0;c[a >> 2] = c[2664];c[a + 4 >> 2] = c[2666];return;
    }function JD(a, b) {
      a = a | 0;b = b | 0;var c = 0;c = Yg(LD() | 0) | 0;return kb(0, c | 0, a | 0, Dy(b) | 0) | 0;
    }function KD(a) {
      a = a | 0;OA(c[a >> 2] | 0, c[a + 4 >> 2] | 0);return;
    }function LD() {
      var b = 0;if (!(a[8984] | 0)) {
        MD(10972);b = 8984;c[b >> 2] = 1;c[b + 4 >> 2] = 0;
      }return 10972;
    }function MD(a) {
      a = a | 0;ih(a, ND() | 0, 1);return;
    }function ND() {
      return 2e3;
    }function OD() {
      PD();return;
    }function PD() {
      var b = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0,
          n = 0,
          o = 0,
          p = 0,
          q = 0,
          r = 0,
          s = 0,
          t = 0;s = l;l = l + 16 | 0;o = s + 4 | 0;p = s;Ia(65536, 10656, c[2665] | 0, 10664);f = by() | 0;e = c[f >> 2] | 0;b = c[e >> 2] | 0;if (b | 0) {
        g = c[f + 8 >> 2] | 0;f = c[f + 4 >> 2] | 0;while (1) {
          Ta(b | 0, d[f >> 0] | 0 | 0, a[g >> 0] | 0);e = e + 4 | 0;b = c[e >> 2] | 0;if (!b) break;else {
            g = g + 1 | 0;f = f + 1 | 0;
          }
        }
      }b = dy() | 0;e = c[b >> 2] | 0;if (e | 0) do {
        Ua(e | 0, c[b + 4 >> 2] | 0);b = b + 8 | 0;e = c[b >> 2] | 0;
      } while ((e | 0) != 0);Ua(QD() | 0, 5947);n = Px() | 0;b = c[n >> 2] | 0;a: do if (b | 0) {
        do {
          RD(c[b + 4 >> 2] | 0);b = c[b >> 2] | 0;
        } while ((b | 0) != 0);b = c[n >> 2] | 0;if (b | 0) {
          m = n;do {
            while (1) {
              h = b;b = c[b >> 2] | 0;h = c[h + 4 >> 2] | 0;if (!(SD(h) | 0)) break;c[p >> 2] = m;c[o >> 2] = c[p >> 2];TD(n, o) | 0;if (!b) break a;
            }UD(h);m = c[m >> 2] | 0;e = VD(h) | 0;i = ab() | 0;j = l;l = l + ((1 * (e << 2) | 0) + 15 & -16) | 0;k = l;l = l + ((1 * (e << 2) | 0) + 15 & -16) | 0;e = c[(oz(h) | 0) >> 2] | 0;if (e | 0) {
              f = j;g = k;while (1) {
                c[f >> 2] = c[(mz(c[e + 4 >> 2] | 0) | 0) >> 2];c[g >> 2] = c[e + 8 >> 2];e = c[e >> 2] | 0;if (!e) break;else {
                  f = f + 4 | 0;g = g + 4 | 0;
                }
              }
            }t = mz(h) | 0;e = WD(h) | 0;f = VD(h) | 0;g = XD(h) | 0;Za(t | 0, e | 0, j | 0, k | 0, f | 0, g | 0, _x(h) | 0);La(i | 0);
          } while ((b | 0) != 0);
        }
      } while (0);b = c[(ay() | 0) >> 2] | 0;if (b | 0) do {
        t = b + 4 | 0;n = hy(t) | 0;h = oy(n) | 0;i = iy(n) | 0;j = (jy(n) | 0) + 1 | 0;k = YD(n) | 0;m = ZD(t) | 0;n = Ai(n) | 0;o = sy(t) | 0;p = _D(t) | 0;ib(0, h | 0, i | 0, j | 0, k | 0, m | 0, n | 0, o | 0, p | 0, $D(t) | 0);b = c[b >> 2] | 0;
      } while ((b | 0) != 0);b = c[(Px() | 0) >> 2] | 0;b: do if (b | 0) {
        c: while (1) {
          e = c[b + 4 >> 2] | 0;if (e | 0 ? (q = c[(mz(e) | 0) >> 2] | 0, r = c[(rz(e) | 0) >> 2] | 0, r | 0) : 0) {
            f = r;do {
              e = f + 4 | 0;g = hy(e) | 0;d: do if (g | 0) switch (Ai(g) | 0) {case 0:
                  break c;case 4:case 3:case 2:
                  {
                    k = oy(g) | 0;m = iy(g) | 0;n = (jy(g) | 0) + 1 | 0;o = YD(g) | 0;p = Ai(g) | 0;t = sy(e) | 0;ib(q | 0, k | 0, m | 0, n | 0, o | 0, 0, p | 0, t | 0, _D(e) | 0, $D(e) | 0);break d;
                  }case 1:
                  {
                    j = oy(g) | 0;k = iy(g) | 0;m = (jy(g) | 0) + 1 | 0;n = YD(g) | 0;o = ZD(e) | 0;p = Ai(g) | 0;t = sy(e) | 0;ib(q | 0, j | 0, k | 0, m | 0, n | 0, o | 0, p | 0, t | 0, _D(e) | 0, $D(e) | 0);break d;
                  }case 5:
                  {
                    n = oy(g) | 0;o = iy(g) | 0;p = (jy(g) | 0) + 1 | 0;t = YD(g) | 0;ib(q | 0, n | 0, o | 0, p | 0, t | 0, aE(g) | 0, Ai(g) | 0, 0, 0, 0);break d;
                  }default:
                  break d;} while (0);f = c[f >> 2] | 0;
            } while ((f | 0) != 0);
          }b = c[b >> 2] | 0;if (!b) break b;
        }nb();
      } while (0);Da();l = s;return;
    }function QD() {
      return 11555;
    }function RD(b) {
      b = b | 0;a[b + 40 >> 0] = 0;return;
    }function SD(b) {
      b = b | 0;return (a[b + 40 >> 0] | 0) != 0 | 0;
    }function TD(a, b) {
      a = a | 0;b = b | 0;b = bE(b) | 0;a = c[b >> 2] | 0;c[b >> 2] = c[a >> 2];sF(a);return c[b >> 2] | 0;
    }function UD(b) {
      b = b | 0;a[b + 40 >> 0] = 1;return;
    }function VD(a) {
      a = a | 0;return c[a + 20 >> 2] | 0;
    }function WD(a) {
      a = a | 0;return c[a + 8 >> 2] | 0;
    }function XD(a) {
      a = a | 0;return c[a + 32 >> 2] | 0;
    }function YD(a) {
      a = a | 0;return c[a + 4 >> 2] | 0;
    }function ZD(a) {
      a = a | 0;return c[a + 4 >> 2] | 0;
    }function _D(a) {
      a = a | 0;return c[a + 8 >> 2] | 0;
    }function $D(a) {
      a = a | 0;return c[a + 16 >> 2] | 0;
    }function aE(a) {
      a = a | 0;return c[a + 20 >> 2] | 0;
    }function bE(a) {
      a = a | 0;return c[a >> 2] | 0;
    }function cE() {
      return 10984;
    }function dE(a) {
      a = a | 0;var b = 0,
          d = 0;b = l;l = l + 16 | 0;d = b;c[d >> 2] = kE(c[a + 60 >> 2] | 0) | 0;a = gE(Ja(6, d | 0) | 0) | 0;l = b;return a | 0;
    }function eE(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0,
          n = 0,
          o = 0,
          p = 0;n = l;l = l + 48 | 0;k = n + 16 | 0;g = n;f = n + 32 | 0;i = a + 28 | 0;e = c[i >> 2] | 0;c[f >> 2] = e;j = a + 20 | 0;e = (c[j >> 2] | 0) - e | 0;c[f + 4 >> 2] = e;c[f + 8 >> 2] = b;c[f + 12 >> 2] = d;e = e + d | 0;h = a + 60 | 0;c[g >> 2] = c[h >> 2];c[g + 4 >> 2] = f;c[g + 8 >> 2] = 2;g = gE(qb(146, g | 0) | 0) | 0;a: do if ((e | 0) != (g | 0)) {
        b = 2;while (1) {
          if ((g | 0) < 0) break;e = e - g | 0;p = c[f + 4 >> 2] | 0;o = g >>> 0 > p >>> 0;f = o ? f + 8 | 0 : f;b = (o << 31 >> 31) + b | 0;p = g - (o ? p : 0) | 0;c[f >> 2] = (c[f >> 2] | 0) + p;o = f + 4 | 0;c[o >> 2] = (c[o >> 2] | 0) - p;c[k >> 2] = c[h >> 2];c[k + 4 >> 2] = f;c[k + 8 >> 2] = b;g = gE(qb(146, k | 0) | 0) | 0;if ((e | 0) == (g | 0)) {
            m = 3;break a;
          }
        }c[a + 16 >> 2] = 0;c[i >> 2] = 0;c[j >> 2] = 0;c[a >> 2] = c[a >> 2] | 32;if ((b | 0) == 2) d = 0;else d = d - (c[f + 4 >> 2] | 0) | 0;
      } else m = 3; while (0);if ((m | 0) == 3) {
        p = c[a + 44 >> 2] | 0;c[a + 16 >> 2] = p + (c[a + 48 >> 2] | 0);c[i >> 2] = p;c[j >> 2] = p;
      }l = n;return d | 0;
    }function fE(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0;f = l;l = l + 32 | 0;g = f;e = f + 20 | 0;c[g >> 2] = c[a + 60 >> 2];c[g + 4 >> 2] = 0;c[g + 8 >> 2] = b;c[g + 12 >> 2] = e;c[g + 16 >> 2] = d;if ((gE(pb(140, g | 0) | 0) | 0) < 0) {
        c[e >> 2] = -1;a = -1;
      } else a = c[e >> 2] | 0;l = f;return a | 0;
    }function gE(a) {
      a = a | 0;if (a >>> 0 > 4294963200) {
        c[(hE() | 0) >> 2] = 0 - a;a = -1;
      }return a | 0;
    }function hE() {
      return (iE() | 0) + 64 | 0;
    }function iE() {
      return jE() | 0;
    }function jE() {
      return 2136;
    }function kE(a) {
      a = a | 0;return a | 0;
    }function lE(b, d, e) {
      b = b | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0;g = l;l = l + 32 | 0;f = g;c[b + 36 >> 2] = 1;if ((c[b >> 2] & 64 | 0) == 0 ? (c[f >> 2] = c[b + 60 >> 2], c[f + 4 >> 2] = 21523, c[f + 8 >> 2] = g + 16, cb(54, f | 0) | 0) : 0) a[b + 75 >> 0] = -1;f = eE(b, d, e) | 0;l = g;return f | 0;
    }function mE(b, c) {
      b = b | 0;c = c | 0;var d = 0,
          e = 0;d = a[b >> 0] | 0;e = a[c >> 0] | 0;if (d << 24 >> 24 == 0 ? 1 : d << 24 >> 24 != e << 24 >> 24) b = e;else {
        do {
          b = b + 1 | 0;c = c + 1 | 0;d = a[b >> 0] | 0;e = a[c >> 0] | 0;
        } while (!(d << 24 >> 24 == 0 ? 1 : d << 24 >> 24 != e << 24 >> 24));b = e;
      }return (d & 255) - (b & 255) | 0;
    }function nE(b, c, d) {
      b = b | 0;c = c | 0;d = d | 0;var e = 0,
          f = 0;a: do if (!d) b = 0;else {
        while (1) {
          e = a[b >> 0] | 0;f = a[c >> 0] | 0;if (e << 24 >> 24 != f << 24 >> 24) break;d = d + -1 | 0;if (!d) {
            b = 0;break a;
          } else {
            b = b + 1 | 0;c = c + 1 | 0;
          }
        }b = (e & 255) - (f & 255) | 0;
      } while (0);return b | 0;
    }function oE(b, d, e, f) {
      b = b | 0;d = d | 0;e = e | 0;f = f | 0;var g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0,
          n = 0;n = l;l = l + 128 | 0;g = n + 124 | 0;m = n;h = m;i = 2508;j = h + 124 | 0;do {
        c[h >> 2] = c[i >> 2];h = h + 4 | 0;i = i + 4 | 0;
      } while ((h | 0) < (j | 0));if ((d + -1 | 0) >>> 0 > 2147483646) {
        if (!d) {
          b = g;d = 1;k = 4;
        } else {
          c[(hE() | 0) >> 2] = 75;d = -1;
        }
      } else k = 4;if ((k | 0) == 4) {
        k = -2 - b | 0;k = d >>> 0 > k >>> 0 ? k : d;c[m + 48 >> 2] = k;g = m + 20 | 0;c[g >> 2] = b;c[m + 44 >> 2] = b;d = b + k | 0;b = m + 16 | 0;c[b >> 2] = d;c[m + 28 >> 2] = d;d = pE(m, e, f) | 0;if (k) {
          m = c[g >> 2] | 0;a[m + (((m | 0) == (c[b >> 2] | 0)) << 31 >> 31) >> 0] = 0;
        }
      }l = n;return d | 0;
    }function pE(b, d, e) {
      b = b | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0,
          n = 0,
          o = 0,
          p = 0,
          q = 0,
          r = 0,
          s = 0;s = l;l = l + 224 | 0;n = s + 120 | 0;o = s + 80 | 0;q = s;r = s + 136 | 0;f = o;g = f + 40 | 0;do {
        c[f >> 2] = 0;f = f + 4 | 0;
      } while ((f | 0) < (g | 0));c[n >> 2] = c[e >> 2];if ((qE(0, d, n, q, o) | 0) < 0) e = -1;else {
        if ((c[b + 76 >> 2] | 0) > -1) p = rE(b) | 0;else p = 0;e = c[b >> 2] | 0;m = e & 32;if ((a[b + 74 >> 0] | 0) < 1) c[b >> 2] = e & -33;f = b + 48 | 0;if (!(c[f >> 2] | 0)) {
          g = b + 44 | 0;h = c[g >> 2] | 0;c[g >> 2] = r;i = b + 28 | 0;c[i >> 2] = r;j = b + 20 | 0;c[j >> 2] = r;c[f >> 2] = 80;k = b + 16 | 0;c[k >> 2] = r + 80;e = qE(b, d, n, q, o) | 0;if (h) {
            Cb[c[b + 36 >> 2] & 15](b, 0, 0) | 0;e = (c[j >> 2] | 0) == 0 ? -1 : e;c[g >> 2] = h;c[f >> 2] = 0;c[k >> 2] = 0;c[i >> 2] = 0;c[j >> 2] = 0;
          }
        } else e = qE(b, d, n, q, o) | 0;f = c[b >> 2] | 0;c[b >> 2] = f | m;if (p | 0) sE(b);e = (f & 32 | 0) == 0 ? e : -1;
      }l = s;return e | 0;
    }function qE(d, e, f, g, i) {
      d = d | 0;e = e | 0;f = f | 0;g = g | 0;i = i | 0;var j = 0,
          k = 0,
          m = 0,
          n = 0,
          o = 0,
          p = 0,
          q = 0,
          r = 0,
          s = 0,
          t = 0,
          u = 0,
          v = 0,
          w = 0,
          x = 0,
          y = 0,
          z = 0,
          A = 0,
          B = 0,
          C = 0,
          D = 0,
          F = 0,
          G = 0,
          H = 0;H = l;l = l + 64 | 0;C = H + 16 | 0;D = H;A = H + 24 | 0;F = H + 8 | 0;G = H + 20 | 0;c[C >> 2] = e;x = (d | 0) != 0;y = A + 40 | 0;z = y;A = A + 39 | 0;B = F + 4 | 0;k = 0;j = 0;p = 0;a: while (1) {
        do if ((j | 0) > -1) if ((k | 0) > (2147483647 - j | 0)) {
          c[(hE() | 0) >> 2] = 75;j = -1;break;
        } else {
          j = k + j | 0;break;
        } while (0);k = a[e >> 0] | 0;if (!(k << 24 >> 24)) {
          w = 87;break;
        } else m = e;b: while (1) {
          switch (k << 24 >> 24) {case 37:
              {
                k = m;w = 9;break b;
              }case 0:
              {
                k = m;break b;
              }default:
              {}}v = m + 1 | 0;c[C >> 2] = v;k = a[v >> 0] | 0;m = v;
        }c: do if ((w | 0) == 9) while (1) {
          w = 0;if ((a[m + 1 >> 0] | 0) != 37) break c;k = k + 1 | 0;m = m + 2 | 0;c[C >> 2] = m;if ((a[m >> 0] | 0) == 37) w = 9;else break;
        } while (0);k = k - e | 0;if (x) tE(d, e, k);if (k | 0) {
          e = m;continue;
        }n = m + 1 | 0;k = (a[n >> 0] | 0) + -48 | 0;if (k >>> 0 < 10) {
          v = (a[m + 2 >> 0] | 0) == 36;u = v ? k : -1;p = v ? 1 : p;n = v ? m + 3 | 0 : n;
        } else u = -1;c[C >> 2] = n;k = a[n >> 0] | 0;m = (k << 24 >> 24) + -32 | 0;d: do if (m >>> 0 < 32) {
          o = 0;q = k;while (1) {
            k = 1 << m;if (!(k & 75913)) {
              k = q;break d;
            }o = k | o;n = n + 1 | 0;c[C >> 2] = n;k = a[n >> 0] | 0;m = (k << 24 >> 24) + -32 | 0;if (m >>> 0 >= 32) break;else q = k;
          }
        } else o = 0; while (0);if (k << 24 >> 24 == 42) {
          m = n + 1 | 0;k = (a[m >> 0] | 0) + -48 | 0;if (k >>> 0 < 10 ? (a[n + 2 >> 0] | 0) == 36 : 0) {
            c[i + (k << 2) >> 2] = 10;k = c[g + ((a[m >> 0] | 0) + -48 << 3) >> 2] | 0;p = 1;n = n + 3 | 0;
          } else {
            if (p | 0) {
              j = -1;break;
            }if (x) {
              p = (c[f >> 2] | 0) + (4 - 1) & ~(4 - 1);k = c[p >> 2] | 0;c[f >> 2] = p + 4;p = 0;n = m;
            } else {
              k = 0;p = 0;n = m;
            }
          }c[C >> 2] = n;v = (k | 0) < 0;k = v ? 0 - k | 0 : k;o = v ? o | 8192 : o;
        } else {
          k = uE(C) | 0;if ((k | 0) < 0) {
            j = -1;break;
          }n = c[C >> 2] | 0;
        }do if ((a[n >> 0] | 0) == 46) {
          if ((a[n + 1 >> 0] | 0) != 42) {
            c[C >> 2] = n + 1;m = uE(C) | 0;n = c[C >> 2] | 0;break;
          }q = n + 2 | 0;m = (a[q >> 0] | 0) + -48 | 0;if (m >>> 0 < 10 ? (a[n + 3 >> 0] | 0) == 36 : 0) {
            c[i + (m << 2) >> 2] = 10;m = c[g + ((a[q >> 0] | 0) + -48 << 3) >> 2] | 0;n = n + 4 | 0;c[C >> 2] = n;break;
          }if (p | 0) {
            j = -1;break a;
          }if (x) {
            v = (c[f >> 2] | 0) + (4 - 1) & ~(4 - 1);m = c[v >> 2] | 0;c[f >> 2] = v + 4;
          } else m = 0;c[C >> 2] = q;n = q;
        } else m = -1; while (0);t = 0;while (1) {
          if (((a[n >> 0] | 0) + -65 | 0) >>> 0 > 57) {
            j = -1;break a;
          }v = n + 1 | 0;c[C >> 2] = v;q = a[(a[n >> 0] | 0) + -65 + (5958 + (t * 58 | 0)) >> 0] | 0;r = q & 255;if ((r + -1 | 0) >>> 0 < 8) {
            t = r;n = v;
          } else break;
        }if (!(q << 24 >> 24)) {
          j = -1;break;
        }s = (u | 0) > -1;do if (q << 24 >> 24 == 19) {
          if (s) {
            j = -1;break a;
          } else w = 49;
        } else {
          if (s) {
            c[i + (u << 2) >> 2] = r;s = g + (u << 3) | 0;u = c[s + 4 >> 2] | 0;w = D;c[w >> 2] = c[s >> 2];c[w + 4 >> 2] = u;w = 49;break;
          }if (!x) {
            j = 0;break a;
          }vE(D, r, f);
        } while (0);if ((w | 0) == 49 ? (w = 0, !x) : 0) {
          k = 0;e = v;continue;
        }n = a[n >> 0] | 0;n = (t | 0) != 0 & (n & 15 | 0) == 3 ? n & -33 : n;s = o & -65537;u = (o & 8192 | 0) == 0 ? o : s;e: do switch (n | 0) {case 110:
            switch ((t & 255) << 24 >> 24) {case 0:
                {
                  c[c[D >> 2] >> 2] = j;k = 0;e = v;continue a;
                }case 1:
                {
                  c[c[D >> 2] >> 2] = j;k = 0;e = v;continue a;
                }case 2:
                {
                  k = c[D >> 2] | 0;c[k >> 2] = j;c[k + 4 >> 2] = ((j | 0) < 0) << 31 >> 31;k = 0;e = v;continue a;
                }case 3:
                {
                  b[c[D >> 2] >> 1] = j;k = 0;e = v;continue a;
                }case 4:
                {
                  a[c[D >> 2] >> 0] = j;k = 0;e = v;continue a;
                }case 6:
                {
                  c[c[D >> 2] >> 2] = j;k = 0;e = v;continue a;
                }case 7:
                {
                  k = c[D >> 2] | 0;c[k >> 2] = j;c[k + 4 >> 2] = ((j | 0) < 0) << 31 >> 31;k = 0;e = v;continue a;
                }default:
                {
                  k = 0;e = v;continue a;
                }}case 112:
            {
              n = 120;m = m >>> 0 > 8 ? m : 8;e = u | 8;w = 61;break;
            }case 88:case 120:
            {
              e = u;w = 61;break;
            }case 111:
            {
              n = D;e = c[n >> 2] | 0;n = c[n + 4 >> 2] | 0;r = xE(e, n, y) | 0;s = z - r | 0;o = 0;q = 6422;m = (u & 8 | 0) == 0 | (m | 0) > (s | 0) ? m : s + 1 | 0;s = u;w = 67;break;
            }case 105:case 100:
            {
              n = D;e = c[n >> 2] | 0;n = c[n + 4 >> 2] | 0;if ((n | 0) < 0) {
                e = vF(0, 0, e | 0, n | 0) | 0;n = E;o = D;c[o >> 2] = e;c[o + 4 >> 2] = n;o = 1;q = 6422;w = 66;break e;
              } else {
                o = (u & 2049 | 0) != 0 & 1;q = (u & 2048 | 0) == 0 ? (u & 1 | 0) == 0 ? 6422 : 6424 : 6423;w = 66;break e;
              }
            }case 117:
            {
              n = D;o = 0;q = 6422;e = c[n >> 2] | 0;n = c[n + 4 >> 2] | 0;w = 66;break;
            }case 99:
            {
              a[A >> 0] = c[D >> 2];e = A;o = 0;q = 6422;r = y;n = 1;m = s;break;
            }case 109:
            {
              n = zE(c[(hE() | 0) >> 2] | 0) | 0;w = 71;break;
            }case 115:
            {
              n = c[D >> 2] | 0;n = n | 0 ? n : 6432;w = 71;break;
            }case 67:
            {
              c[F >> 2] = c[D >> 2];c[B >> 2] = 0;c[D >> 2] = F;r = -1;n = F;w = 75;break;
            }case 83:
            {
              e = c[D >> 2] | 0;if (!m) {
                BE(d, 32, k, 0, u);e = 0;w = 84;
              } else {
                r = m;n = e;w = 75;
              }break;
            }case 65:case 71:case 70:case 69:case 97:case 103:case 102:case 101:
            {
              k = DE(d, +h[D >> 3], k, m, u, n) | 0;e = v;continue a;
            }default:
            {
              o = 0;q = 6422;r = y;n = m;m = u;
            }} while (0);f: do if ((w | 0) == 61) {
          u = D;t = c[u >> 2] | 0;u = c[u + 4 >> 2] | 0;r = wE(t, u, y, n & 32) | 0;q = (e & 8 | 0) == 0 | (t | 0) == 0 & (u | 0) == 0;o = q ? 0 : 2;q = q ? 6422 : 6422 + (n >> 4) | 0;s = e;e = t;n = u;w = 67;
        } else if ((w | 0) == 66) {
          r = yE(e, n, y) | 0;s = u;w = 67;
        } else if ((w | 0) == 71) {
          w = 0;u = AE(n, 0, m) | 0;t = (u | 0) == 0;e = n;o = 0;q = 6422;r = t ? n + m | 0 : u;n = t ? m : u - n | 0;m = s;
        } else if ((w | 0) == 75) {
          w = 0;q = n;e = 0;m = 0;while (1) {
            o = c[q >> 2] | 0;if (!o) break;m = CE(G, o) | 0;if ((m | 0) < 0 | m >>> 0 > (r - e | 0) >>> 0) break;e = m + e | 0;if (r >>> 0 > e >>> 0) q = q + 4 | 0;else break;
          }if ((m | 0) < 0) {
            j = -1;break a;
          }BE(d, 32, k, e, u);if (!e) {
            e = 0;w = 84;
          } else {
            o = 0;while (1) {
              m = c[n >> 2] | 0;if (!m) {
                w = 84;break f;
              }m = CE(G, m) | 0;o = m + o | 0;if ((o | 0) > (e | 0)) {
                w = 84;break f;
              }tE(d, G, m);if (o >>> 0 >= e >>> 0) {
                w = 84;break;
              } else n = n + 4 | 0;
            }
          }
        } while (0);if ((w | 0) == 67) {
          w = 0;n = (e | 0) != 0 | (n | 0) != 0;u = (m | 0) != 0 | n;n = ((n ^ 1) & 1) + (z - r) | 0;e = u ? r : y;r = y;n = u ? (m | 0) > (n | 0) ? m : n : m;m = (m | 0) > -1 ? s & -65537 : s;
        } else if ((w | 0) == 84) {
          w = 0;BE(d, 32, k, e, u ^ 8192);k = (k | 0) > (e | 0) ? k : e;e = v;continue;
        }t = r - e | 0;s = (n | 0) < (t | 0) ? t : n;u = s + o | 0;k = (k | 0) < (u | 0) ? u : k;BE(d, 32, k, u, m);tE(d, q, o);BE(d, 48, k, u, m ^ 65536);BE(d, 48, s, t, 0);tE(d, e, t);BE(d, 32, k, u, m ^ 8192);e = v;
      }g: do if ((w | 0) == 87) if (!d) if (!p) j = 0;else {
        j = 1;while (1) {
          e = c[i + (j << 2) >> 2] | 0;if (!e) break;vE(g + (j << 3) | 0, e, f);j = j + 1 | 0;if ((j | 0) >= 10) {
            j = 1;break g;
          }
        }while (1) {
          if (c[i + (j << 2) >> 2] | 0) {
            j = -1;break g;
          }j = j + 1 | 0;if ((j | 0) >= 10) {
            j = 1;break;
          }
        }
      } while (0);l = H;return j | 0;
    }function rE(a) {
      a = a | 0;return 0;
    }function sE(a) {
      a = a | 0;return;
    }function tE(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;if (!(c[a >> 2] & 32)) PE(b, d, a) | 0;return;
    }function uE(b) {
      b = b | 0;var d = 0,
          e = 0,
          f = 0;e = c[b >> 2] | 0;f = (a[e >> 0] | 0) + -48 | 0;if (f >>> 0 < 10) {
        d = 0;do {
          d = f + (d * 10 | 0) | 0;e = e + 1 | 0;c[b >> 2] = e;f = (a[e >> 0] | 0) + -48 | 0;
        } while (f >>> 0 < 10);
      } else d = 0;return d | 0;
    }function vE(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0,
          g = 0.0;a: do if (b >>> 0 <= 20) do switch (b | 0) {case 9:
          {
            e = (c[d >> 2] | 0) + (4 - 1) & ~(4 - 1);b = c[e >> 2] | 0;c[d >> 2] = e + 4;c[a >> 2] = b;break a;
          }case 10:
          {
            e = (c[d >> 2] | 0) + (4 - 1) & ~(4 - 1);b = c[e >> 2] | 0;c[d >> 2] = e + 4;e = a;c[e >> 2] = b;c[e + 4 >> 2] = ((b | 0) < 0) << 31 >> 31;break a;
          }case 11:
          {
            e = (c[d >> 2] | 0) + (4 - 1) & ~(4 - 1);b = c[e >> 2] | 0;c[d >> 2] = e + 4;e = a;c[e >> 2] = b;c[e + 4 >> 2] = 0;break a;
          }case 12:
          {
            e = (c[d >> 2] | 0) + (8 - 1) & ~(8 - 1);b = e;f = c[b >> 2] | 0;b = c[b + 4 >> 2] | 0;c[d >> 2] = e + 8;e = a;c[e >> 2] = f;c[e + 4 >> 2] = b;break a;
          }case 13:
          {
            f = (c[d >> 2] | 0) + (4 - 1) & ~(4 - 1);e = c[f >> 2] | 0;c[d >> 2] = f + 4;e = (e & 65535) << 16 >> 16;f = a;c[f >> 2] = e;c[f + 4 >> 2] = ((e | 0) < 0) << 31 >> 31;break a;
          }case 14:
          {
            f = (c[d >> 2] | 0) + (4 - 1) & ~(4 - 1);e = c[f >> 2] | 0;c[d >> 2] = f + 4;f = a;c[f >> 2] = e & 65535;c[f + 4 >> 2] = 0;break a;
          }case 15:
          {
            f = (c[d >> 2] | 0) + (4 - 1) & ~(4 - 1);e = c[f >> 2] | 0;c[d >> 2] = f + 4;e = (e & 255) << 24 >> 24;f = a;c[f >> 2] = e;c[f + 4 >> 2] = ((e | 0) < 0) << 31 >> 31;break a;
          }case 16:
          {
            f = (c[d >> 2] | 0) + (4 - 1) & ~(4 - 1);e = c[f >> 2] | 0;c[d >> 2] = f + 4;f = a;c[f >> 2] = e & 255;c[f + 4 >> 2] = 0;break a;
          }case 17:
          {
            f = (c[d >> 2] | 0) + (8 - 1) & ~(8 - 1);g = +h[f >> 3];c[d >> 2] = f + 8;h[a >> 3] = g;break a;
          }case 18:
          {
            f = (c[d >> 2] | 0) + (8 - 1) & ~(8 - 1);g = +h[f >> 3];c[d >> 2] = f + 8;h[a >> 3] = g;break a;
          }default:
          break a;} while (0); while (0);return;
    }function wE(b, c, e, f) {
      b = b | 0;c = c | 0;e = e | 0;f = f | 0;if (!((b | 0) == 0 & (c | 0) == 0)) do {
        e = e + -1 | 0;a[e >> 0] = d[6474 + (b & 15) >> 0] | 0 | f;b = zF(b | 0, c | 0, 4) | 0;c = E;
      } while (!((b | 0) == 0 & (c | 0) == 0));return e | 0;
    }function xE(b, c, d) {
      b = b | 0;c = c | 0;d = d | 0;if (!((b | 0) == 0 & (c | 0) == 0)) do {
        d = d + -1 | 0;a[d >> 0] = b & 7 | 48;b = zF(b | 0, c | 0, 3) | 0;c = E;
      } while (!((b | 0) == 0 & (c | 0) == 0));return d | 0;
    }function yE(b, c, d) {
      b = b | 0;c = c | 0;d = d | 0;var e = 0;if (c >>> 0 > 0 | (c | 0) == 0 & b >>> 0 > 4294967295) {
        while (1) {
          e = FF(b | 0, c | 0, 10, 0) | 0;d = d + -1 | 0;a[d >> 0] = e & 255 | 48;e = b;b = DF(b | 0, c | 0, 10, 0) | 0;if (!(c >>> 0 > 9 | (c | 0) == 9 & e >>> 0 > 4294967295)) break;else c = E;
        }c = b;
      } else c = b;if (c) while (1) {
        d = d + -1 | 0;a[d >> 0] = (c >>> 0) % 10 | 0 | 48;if (c >>> 0 < 10) break;else c = (c >>> 0) / 10 | 0;
      }return d | 0;
    }function zE(a) {
      a = a | 0;return KE(a, c[(JE() | 0) + 188 >> 2] | 0) | 0;
    }function AE(b, d, e) {
      b = b | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0,
          h = 0,
          i = 0;h = d & 255;f = (e | 0) != 0;a: do if (f & (b & 3 | 0) != 0) {
        g = d & 255;while (1) {
          if ((a[b >> 0] | 0) == g << 24 >> 24) {
            i = 6;break a;
          }b = b + 1 | 0;e = e + -1 | 0;f = (e | 0) != 0;if (!(f & (b & 3 | 0) != 0)) {
            i = 5;break;
          }
        }
      } else i = 5; while (0);if ((i | 0) == 5) if (f) i = 6;else e = 0;b: do if ((i | 0) == 6) {
        g = d & 255;if ((a[b >> 0] | 0) != g << 24 >> 24) {
          f = T(h, 16843009) | 0;c: do if (e >>> 0 > 3) while (1) {
            h = c[b >> 2] ^ f;if ((h & -2139062144 ^ -2139062144) & h + -16843009 | 0) break;b = b + 4 | 0;e = e + -4 | 0;if (e >>> 0 <= 3) {
              i = 11;break c;
            }
          } else i = 11; while (0);if ((i | 0) == 11) if (!e) {
            e = 0;break;
          }while (1) {
            if ((a[b >> 0] | 0) == g << 24 >> 24) break b;b = b + 1 | 0;e = e + -1 | 0;if (!e) {
              e = 0;break;
            }
          }
        }
      } while (0);return (e | 0 ? b : 0) | 0;
    }function BE(a, b, c, d, e) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0;g = l;l = l + 256 | 0;f = g;if ((c | 0) > (d | 0) & (e & 73728 | 0) == 0) {
        e = c - d | 0;xF(f | 0, b | 0, (e >>> 0 < 256 ? e : 256) | 0) | 0;if (e >>> 0 > 255) {
          b = c - d | 0;do {
            tE(a, f, 256);e = e + -256 | 0;
          } while (e >>> 0 > 255);e = b & 255;
        }tE(a, f, e);
      }l = g;return;
    }function CE(a, b) {
      a = a | 0;b = b | 0;if (!a) a = 0;else a = HE(a, b, 0) | 0;return a | 0;
    }function DE(b, e, f, g, h, i) {
      b = b | 0;e = +e;f = f | 0;g = g | 0;h = h | 0;i = i | 0;var j = 0,
          k = 0,
          m = 0,
          n = 0,
          o = 0,
          p = 0,
          q = 0,
          r = 0.0,
          s = 0,
          t = 0,
          u = 0,
          v = 0,
          w = 0,
          x = 0,
          y = 0,
          z = 0,
          A = 0,
          B = 0,
          C = 0,
          D = 0,
          F = 0,
          G = 0,
          H = 0;H = l;l = l + 560 | 0;m = H + 8 | 0;u = H;G = H + 524 | 0;F = G;n = H + 512 | 0;c[u >> 2] = 0;D = n + 12 | 0;EE(e) | 0;if ((E | 0) < 0) {
        e = -e;B = 1;A = 6439;
      } else {
        B = (h & 2049 | 0) != 0 & 1;A = (h & 2048 | 0) == 0 ? (h & 1 | 0) == 0 ? 6440 : 6445 : 6442;
      }EE(e) | 0;C = E & 2146435072;do if (C >>> 0 < 2146435072 | (C | 0) == 2146435072 & 0 < 0) {
        r = +FE(e, u) * 2.0;j = r != 0.0;if (j) c[u >> 2] = (c[u >> 2] | 0) + -1;w = i | 32;if ((w | 0) == 97) {
          s = i & 32;q = (s | 0) == 0 ? A : A + 9 | 0;p = B | 2;j = 12 - g | 0;do if (!(g >>> 0 > 11 | (j | 0) == 0)) {
            e = 8.0;do {
              j = j + -1 | 0;e = e * 16.0;
            } while ((j | 0) != 0);if ((a[q >> 0] | 0) == 45) {
              e = -(e + (-r - e));break;
            } else {
              e = r + e - e;break;
            }
          } else e = r; while (0);k = c[u >> 2] | 0;j = (k | 0) < 0 ? 0 - k | 0 : k;j = yE(j, ((j | 0) < 0) << 31 >> 31, D) | 0;if ((j | 0) == (D | 0)) {
            j = n + 11 | 0;a[j >> 0] = 48;
          }a[j + -1 >> 0] = (k >> 31 & 2) + 43;o = j + -2 | 0;a[o >> 0] = i + 15;n = (g | 0) < 1;m = (h & 8 | 0) == 0;j = G;do {
            C = ~~e;k = j + 1 | 0;a[j >> 0] = d[6474 + C >> 0] | s;e = (e - +(C | 0)) * 16.0;if ((k - F | 0) == 1 ? !(m & (n & e == 0.0)) : 0) {
              a[k >> 0] = 46;j = j + 2 | 0;
            } else j = k;
          } while (e != 0.0);C = j - F | 0;F = D - o | 0;D = (g | 0) != 0 & (C + -2 | 0) < (g | 0) ? g + 2 | 0 : C;j = F + p + D | 0;BE(b, 32, f, j, h);tE(b, q, p);BE(b, 48, f, j, h ^ 65536);tE(b, G, C);BE(b, 48, D - C | 0, 0, 0);tE(b, o, F);BE(b, 32, f, j, h ^ 8192);break;
        }k = (g | 0) < 0 ? 6 : g;if (j) {
          j = (c[u >> 2] | 0) + -28 | 0;c[u >> 2] = j;e = r * 268435456.0;
        } else {
          e = r;j = c[u >> 2] | 0;
        }C = (j | 0) < 0 ? m : m + 288 | 0;m = C;do {
          y = ~~e >>> 0;c[m >> 2] = y;m = m + 4 | 0;e = (e - +(y >>> 0)) * 1.0e9;
        } while (e != 0.0);if ((j | 0) > 0) {
          n = C;p = m;while (1) {
            o = (j | 0) < 29 ? j : 29;j = p + -4 | 0;if (j >>> 0 >= n >>> 0) {
              m = 0;do {
                x = yF(c[j >> 2] | 0, 0, o | 0) | 0;x = wF(x | 0, E | 0, m | 0, 0) | 0;y = E;v = FF(x | 0, y | 0, 1e9, 0) | 0;c[j >> 2] = v;m = DF(x | 0, y | 0, 1e9, 0) | 0;j = j + -4 | 0;
              } while (j >>> 0 >= n >>> 0);if (m) {
                n = n + -4 | 0;c[n >> 2] = m;
              }
            }m = p;while (1) {
              if (m >>> 0 <= n >>> 0) break;j = m + -4 | 0;if (!(c[j >> 2] | 0)) m = j;else break;
            }j = (c[u >> 2] | 0) - o | 0;c[u >> 2] = j;if ((j | 0) > 0) p = m;else break;
          }
        } else n = C;if ((j | 0) < 0) {
          g = ((k + 25 | 0) / 9 | 0) + 1 | 0;t = (w | 0) == 102;do {
            s = 0 - j | 0;s = (s | 0) < 9 ? s : 9;if (n >>> 0 < m >>> 0) {
              o = (1 << s) + -1 | 0;p = 1e9 >>> s;q = 0;j = n;do {
                y = c[j >> 2] | 0;c[j >> 2] = (y >>> s) + q;q = T(y & o, p) | 0;j = j + 4 | 0;
              } while (j >>> 0 < m >>> 0);j = (c[n >> 2] | 0) == 0 ? n + 4 | 0 : n;if (!q) {
                n = j;j = m;
              } else {
                c[m >> 2] = q;n = j;j = m + 4 | 0;
              }
            } else {
              n = (c[n >> 2] | 0) == 0 ? n + 4 | 0 : n;j = m;
            }m = t ? C : n;m = (j - m >> 2 | 0) > (g | 0) ? m + (g << 2) | 0 : j;j = (c[u >> 2] | 0) + s | 0;c[u >> 2] = j;
          } while ((j | 0) < 0);j = n;g = m;
        } else {
          j = n;g = m;
        }y = C;if (j >>> 0 < g >>> 0) {
          m = (y - j >> 2) * 9 | 0;o = c[j >> 2] | 0;if (o >>> 0 >= 10) {
            n = 10;do {
              n = n * 10 | 0;m = m + 1 | 0;
            } while (o >>> 0 >= n >>> 0);
          }
        } else m = 0;t = (w | 0) == 103;v = (k | 0) != 0;n = k - ((w | 0) != 102 ? m : 0) + ((v & t) << 31 >> 31) | 0;if ((n | 0) < (((g - y >> 2) * 9 | 0) + -9 | 0)) {
          n = n + 9216 | 0;s = C + 4 + (((n | 0) / 9 | 0) + -1024 << 2) | 0;n = ((n | 0) % 9 | 0) + 1 | 0;if ((n | 0) < 9) {
            o = 10;do {
              o = o * 10 | 0;n = n + 1 | 0;
            } while ((n | 0) != 9);
          } else o = 10;p = c[s >> 2] | 0;q = (p >>> 0) % (o >>> 0) | 0;n = (s + 4 | 0) == (g | 0);if (!(n & (q | 0) == 0)) {
            r = (((p >>> 0) / (o >>> 0) | 0) & 1 | 0) == 0 ? 9007199254740992.0 : 9007199254740994.0;x = (o | 0) / 2 | 0;e = q >>> 0 < x >>> 0 ? .5 : n & (q | 0) == (x | 0) ? 1.0 : 1.5;if (B) {
              x = (a[A >> 0] | 0) == 45;e = x ? -e : e;r = x ? -r : r;
            }n = p - q | 0;c[s >> 2] = n;if (r + e != r) {
              x = n + o | 0;c[s >> 2] = x;if (x >>> 0 > 999999999) {
                m = s;while (1) {
                  n = m + -4 | 0;c[m >> 2] = 0;if (n >>> 0 < j >>> 0) {
                    j = j + -4 | 0;c[j >> 2] = 0;
                  }x = (c[n >> 2] | 0) + 1 | 0;c[n >> 2] = x;if (x >>> 0 > 999999999) m = n;else break;
                }
              } else n = s;m = (y - j >> 2) * 9 | 0;p = c[j >> 2] | 0;if (p >>> 0 >= 10) {
                o = 10;do {
                  o = o * 10 | 0;m = m + 1 | 0;
                } while (p >>> 0 >= o >>> 0);
              }
            } else n = s;
          } else n = s;n = n + 4 | 0;n = g >>> 0 > n >>> 0 ? n : g;x = j;
        } else {
          n = g;x = j;
        }w = n;while (1) {
          if (w >>> 0 <= x >>> 0) {
            u = 0;break;
          }j = w + -4 | 0;if (!(c[j >> 2] | 0)) w = j;else {
            u = 1;break;
          }
        }g = 0 - m | 0;do if (t) {
          j = ((v ^ 1) & 1) + k | 0;if ((j | 0) > (m | 0) & (m | 0) > -5) {
            o = i + -1 | 0;k = j + -1 - m | 0;
          } else {
            o = i + -2 | 0;k = j + -1 | 0;
          }j = h & 8;if (!j) {
            if (u ? (z = c[w + -4 >> 2] | 0, (z | 0) != 0) : 0) {
              if (!((z >>> 0) % 10 | 0)) {
                n = 0;j = 10;do {
                  j = j * 10 | 0;n = n + 1 | 0;
                } while (!((z >>> 0) % (j >>> 0) | 0 | 0));
              } else n = 0;
            } else n = 9;j = ((w - y >> 2) * 9 | 0) + -9 | 0;if ((o | 32 | 0) == 102) {
              s = j - n | 0;s = (s | 0) > 0 ? s : 0;k = (k | 0) < (s | 0) ? k : s;s = 0;break;
            } else {
              s = j + m - n | 0;s = (s | 0) > 0 ? s : 0;k = (k | 0) < (s | 0) ? k : s;s = 0;break;
            }
          } else s = j;
        } else {
          o = i;s = h & 8;
        } while (0);t = k | s;p = (t | 0) != 0 & 1;q = (o | 32 | 0) == 102;if (q) {
          v = 0;j = (m | 0) > 0 ? m : 0;
        } else {
          j = (m | 0) < 0 ? g : m;j = yE(j, ((j | 0) < 0) << 31 >> 31, D) | 0;n = D;if ((n - j | 0) < 2) do {
            j = j + -1 | 0;a[j >> 0] = 48;
          } while ((n - j | 0) < 2);a[j + -1 >> 0] = (m >> 31 & 2) + 43;j = j + -2 | 0;a[j >> 0] = o;v = j;j = n - j | 0;
        }j = B + 1 + k + p + j | 0;BE(b, 32, f, j, h);tE(b, A, B);BE(b, 48, f, j, h ^ 65536);if (q) {
          o = x >>> 0 > C >>> 0 ? C : x;s = G + 9 | 0;p = s;q = G + 8 | 0;n = o;do {
            m = yE(c[n >> 2] | 0, 0, s) | 0;if ((n | 0) == (o | 0)) {
              if ((m | 0) == (s | 0)) {
                a[q >> 0] = 48;m = q;
              }
            } else if (m >>> 0 > G >>> 0) {
              xF(G | 0, 48, m - F | 0) | 0;do m = m + -1 | 0; while (m >>> 0 > G >>> 0);
            }tE(b, m, p - m | 0);n = n + 4 | 0;
          } while (n >>> 0 <= C >>> 0);if (t | 0) tE(b, 6490, 1);if (n >>> 0 < w >>> 0 & (k | 0) > 0) while (1) {
            m = yE(c[n >> 2] | 0, 0, s) | 0;if (m >>> 0 > G >>> 0) {
              xF(G | 0, 48, m - F | 0) | 0;do m = m + -1 | 0; while (m >>> 0 > G >>> 0);
            }tE(b, m, (k | 0) < 9 ? k : 9);n = n + 4 | 0;m = k + -9 | 0;if (!(n >>> 0 < w >>> 0 & (k | 0) > 9)) {
              k = m;break;
            } else k = m;
          }BE(b, 48, k + 9 | 0, 9, 0);
        } else {
          t = u ? w : x + 4 | 0;if ((k | 0) > -1) {
            u = G + 9 | 0;s = (s | 0) == 0;g = u;p = 0 - F | 0;q = G + 8 | 0;o = x;do {
              m = yE(c[o >> 2] | 0, 0, u) | 0;if ((m | 0) == (u | 0)) {
                a[q >> 0] = 48;m = q;
              }do if ((o | 0) == (x | 0)) {
                n = m + 1 | 0;tE(b, m, 1);if (s & (k | 0) < 1) {
                  m = n;break;
                }tE(b, 6490, 1);m = n;
              } else {
                if (m >>> 0 <= G >>> 0) break;xF(G | 0, 48, m + p | 0) | 0;do m = m + -1 | 0; while (m >>> 0 > G >>> 0);
              } while (0);F = g - m | 0;tE(b, m, (k | 0) > (F | 0) ? F : k);k = k - F | 0;o = o + 4 | 0;
            } while (o >>> 0 < t >>> 0 & (k | 0) > -1);
          }BE(b, 48, k + 18 | 0, 18, 0);tE(b, v, D - v | 0);
        }BE(b, 32, f, j, h ^ 8192);
      } else {
        G = (i & 32 | 0) != 0;j = B + 3 | 0;BE(b, 32, f, j, h & -65537);tE(b, A, B);tE(b, e != e | 0.0 != 0.0 ? G ? 6466 : 6470 : G ? 6458 : 6462, 3);BE(b, 32, f, j, h ^ 8192);
      } while (0);l = H;return ((j | 0) < (f | 0) ? f : j) | 0;
    }function EE(a) {
      a = +a;var b = 0;h[j >> 3] = a;b = c[j >> 2] | 0;E = c[j + 4 >> 2] | 0;return b | 0;
    }function FE(a, b) {
      a = +a;b = b | 0;return + +GE(a, b);
    }function GE(a, b) {
      a = +a;b = b | 0;var d = 0,
          e = 0,
          f = 0;h[j >> 3] = a;d = c[j >> 2] | 0;e = c[j + 4 >> 2] | 0;f = zF(d | 0, e | 0, 52) | 0;switch (f & 2047) {case 0:
          {
            if (a != 0.0) {
              a = +GE(a * 18446744073709551616.0, b);d = (c[b >> 2] | 0) + -64 | 0;
            } else d = 0;c[b >> 2] = d;break;
          }case 2047:
          break;default:
          {
            c[b >> 2] = (f & 2047) + -1022;c[j >> 2] = d;c[j + 4 >> 2] = e & -2146435073 | 1071644672;a = +h[j >> 3];
          }}return +a;
    }function HE(b, d, e) {
      b = b | 0;d = d | 0;e = e | 0;do if (b) {
        if (d >>> 0 < 128) {
          a[b >> 0] = d;b = 1;break;
        }if (!(c[c[(IE() | 0) + 188 >> 2] >> 2] | 0)) if ((d & -128 | 0) == 57216) {
          a[b >> 0] = d;b = 1;break;
        } else {
          c[(hE() | 0) >> 2] = 84;b = -1;break;
        }if (d >>> 0 < 2048) {
          a[b >> 0] = d >>> 6 | 192;a[b + 1 >> 0] = d & 63 | 128;b = 2;break;
        }if (d >>> 0 < 55296 | (d & -8192 | 0) == 57344) {
          a[b >> 0] = d >>> 12 | 224;a[b + 1 >> 0] = d >>> 6 & 63 | 128;a[b + 2 >> 0] = d & 63 | 128;b = 3;break;
        }if ((d + -65536 | 0) >>> 0 < 1048576) {
          a[b >> 0] = d >>> 18 | 240;a[b + 1 >> 0] = d >>> 12 & 63 | 128;a[b + 2 >> 0] = d >>> 6 & 63 | 128;a[b + 3 >> 0] = d & 63 | 128;b = 4;break;
        } else {
          c[(hE() | 0) >> 2] = 84;b = -1;break;
        }
      } else b = 1; while (0);return b | 0;
    }function IE() {
      return jE() | 0;
    }function JE() {
      return jE() | 0;
    }function KE(b, e) {
      b = b | 0;e = e | 0;var f = 0,
          g = 0;g = 0;while (1) {
        if ((d[6492 + g >> 0] | 0) == (b | 0)) {
          b = 2;break;
        }f = g + 1 | 0;if ((f | 0) == 87) {
          f = 6580;g = 87;b = 5;break;
        } else g = f;
      }if ((b | 0) == 2) if (!g) f = 6580;else {
        f = 6580;b = 5;
      }if ((b | 0) == 5) while (1) {
        do {
          b = f;f = f + 1 | 0;
        } while ((a[b >> 0] | 0) != 0);g = g + -1 | 0;if (!g) break;else b = 5;
      }return LE(f, c[e + 20 >> 2] | 0) | 0;
    }function LE(a, b) {
      a = a | 0;b = b | 0;return ME(a, b) | 0;
    }function ME(a, b) {
      a = a | 0;b = b | 0;if (!b) b = 0;else b = NE(c[b >> 2] | 0, c[b + 4 >> 2] | 0, a) | 0;return (b | 0 ? b : a) | 0;
    }function NE(b, d, e) {
      b = b | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          l = 0,
          m = 0,
          n = 0,
          o = 0;o = (c[b >> 2] | 0) + 1794895138 | 0;h = OE(c[b + 8 >> 2] | 0, o) | 0;f = OE(c[b + 12 >> 2] | 0, o) | 0;g = OE(c[b + 16 >> 2] | 0, o) | 0;a: do if ((h >>> 0 < d >>> 2 >>> 0 ? (n = d - (h << 2) | 0, f >>> 0 < n >>> 0 & g >>> 0 < n >>> 0) : 0) ? ((g | f) & 3 | 0) == 0 : 0) {
        n = f >>> 2;m = g >>> 2;l = 0;while (1) {
          j = h >>> 1;k = l + j | 0;i = k << 1;g = i + n | 0;f = OE(c[b + (g << 2) >> 2] | 0, o) | 0;g = OE(c[b + (g + 1 << 2) >> 2] | 0, o) | 0;if (!(g >>> 0 < d >>> 0 & f >>> 0 < (d - g | 0) >>> 0)) {
            f = 0;break a;
          }if (a[b + (g + f) >> 0] | 0) {
            f = 0;break a;
          }f = mE(e, b + g | 0) | 0;if (!f) break;f = (f | 0) < 0;if ((h | 0) == 1) {
            f = 0;break a;
          } else {
            l = f ? l : k;h = f ? j : h - j | 0;
          }
        }f = i + m | 0;g = OE(c[b + (f << 2) >> 2] | 0, o) | 0;f = OE(c[b + (f + 1 << 2) >> 2] | 0, o) | 0;if (f >>> 0 < d >>> 0 & g >>> 0 < (d - f | 0) >>> 0) f = (a[b + (f + g) >> 0] | 0) == 0 ? b + f | 0 : 0;else f = 0;
      } else f = 0; while (0);return f | 0;
    }function OE(a, b) {
      a = a | 0;b = b | 0;var c = 0;c = GF(a | 0) | 0;return ((b | 0) == 0 ? a : c) | 0;
    }function PE(b, d, e) {
      b = b | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0;f = e + 16 | 0;g = c[f >> 2] | 0;if (!g) {
        if (!(QE(e) | 0)) {
          g = c[f >> 2] | 0;h = 5;
        } else f = 0;
      } else h = 5;a: do if ((h | 0) == 5) {
        j = e + 20 | 0;i = c[j >> 2] | 0;f = i;if ((g - i | 0) >>> 0 < d >>> 0) {
          f = Cb[c[e + 36 >> 2] & 15](e, b, d) | 0;break;
        }b: do if ((a[e + 75 >> 0] | 0) > -1) {
          i = d;while (1) {
            if (!i) {
              h = 0;g = b;break b;
            }g = i + -1 | 0;if ((a[b + g >> 0] | 0) == 10) break;else i = g;
          }f = Cb[c[e + 36 >> 2] & 15](e, b, i) | 0;if (f >>> 0 < i >>> 0) break a;h = i;g = b + i | 0;d = d - i | 0;f = c[j >> 2] | 0;
        } else {
          h = 0;g = b;
        } while (0);AF(f | 0, g | 0, d | 0) | 0;c[j >> 2] = (c[j >> 2] | 0) + d;f = h + d | 0;
      } while (0);return f | 0;
    }function QE(b) {
      b = b | 0;var d = 0,
          e = 0;d = b + 74 | 0;e = a[d >> 0] | 0;a[d >> 0] = e + 255 | e;d = c[b >> 2] | 0;if (!(d & 8)) {
        c[b + 8 >> 2] = 0;c[b + 4 >> 2] = 0;e = c[b + 44 >> 2] | 0;c[b + 28 >> 2] = e;c[b + 20 >> 2] = e;c[b + 16 >> 2] = e + (c[b + 48 >> 2] | 0);b = 0;
      } else {
        c[b >> 2] = d | 32;b = -1;
      }return b | 0;
    }function RE(a, b, d) {
      a = a | 0;b = b | 0;d = d | 0;var e = 0,
          f = 0;e = a + 20 | 0;f = c[e >> 2] | 0;a = (c[a + 16 >> 2] | 0) - f | 0;a = a >>> 0 > d >>> 0 ? d : a;AF(f | 0, b | 0, a | 0) | 0;c[e >> 2] = (c[e >> 2] | 0) + a;return d | 0;
    }function SE(b) {
      b = b | 0;var d = 0,
          e = 0,
          f = 0;f = b;a: do if (!(f & 3)) e = 4;else {
        d = f;while (1) {
          if (!(a[b >> 0] | 0)) {
            b = d;break a;
          }b = b + 1 | 0;d = b;if (!(d & 3)) {
            e = 4;break;
          }
        }
      } while (0);if ((e | 0) == 4) {
        while (1) {
          d = c[b >> 2] | 0;if (!((d & -2139062144 ^ -2139062144) & d + -16843009)) b = b + 4 | 0;else break;
        }if ((d & 255) << 24 >> 24) do b = b + 1 | 0; while ((a[b >> 0] | 0) != 0);
      }return b - f | 0;
    }function TE(a, b, d, e) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0;f = l;l = l + 16 | 0;g = f;c[g >> 2] = e;e = oE(a, b, d, g) | 0;l = f;return e | 0;
    }function UE(a, b) {
      a = X(a);b = X(b);var c = 0,
          d = 0;c = VE(a) | 0;do if ((c & 2147483647) >>> 0 <= 2139095040) {
        d = VE(b) | 0;if ((d & 2147483647) >>> 0 <= 2139095040) if ((d ^ c | 0) < 0) {
          a = (c | 0) < 0 ? b : a;break;
        } else {
          a = a < b ? b : a;break;
        }
      } else a = b; while (0);return X(a);
    }function VE(a) {
      a = X(a);return (g[j >> 2] = a, c[j >> 2] | 0) | 0;
    }function WE(a, b) {
      a = X(a);b = X(b);var c = 0,
          d = 0;c = XE(a) | 0;do if ((c & 2147483647) >>> 0 <= 2139095040) {
        d = XE(b) | 0;if ((d & 2147483647) >>> 0 <= 2139095040) if ((d ^ c | 0) < 0) {
          a = (c | 0) < 0 ? a : b;break;
        } else {
          a = a < b ? a : b;break;
        }
      } else a = b; while (0);return X(a);
    }function XE(a) {
      a = X(a);return (g[j >> 2] = a, c[j >> 2] | 0) | 0;
    }function YE(a, b) {
      a = X(a);b = X(b);var d = 0,
          e = 0,
          f = 0,
          h = 0,
          i = 0,
          k = 0,
          l = 0,
          m = 0;h = (g[j >> 2] = a, c[j >> 2] | 0);k = (g[j >> 2] = b, c[j >> 2] | 0);d = h >>> 23 & 255;i = k >>> 23 & 255;l = h & -2147483648;f = k << 1;a: do if ((f | 0) != 0 ? !((d | 0) == 255 | ((ZE(b) | 0) & 2147483647) >>> 0 > 2139095040) : 0) {
        e = h << 1;if (e >>> 0 <= f >>> 0) {
          b = X(a * X(0.0));return X((e | 0) == (f | 0) ? b : a);
        }if (!d) {
          d = h << 9;if ((d | 0) > -1) {
            e = d;d = 0;do {
              d = d + -1 | 0;e = e << 1;
            } while ((e | 0) > -1);
          } else d = 0;e = h << 1 - d;
        } else e = h & 8388607 | 8388608;if (!i) {
          h = k << 9;if ((h | 0) > -1) {
            f = 0;do {
              f = f + -1 | 0;h = h << 1;
            } while ((h | 0) > -1);
          } else f = 0;i = f;k = k << 1 - f;
        } else k = k & 8388607 | 8388608;f = e - k | 0;h = (f | 0) > -1;b: do if ((d | 0) > (i | 0)) {
          while (1) {
            if (h) if (!f) break;else e = f;e = e << 1;d = d + -1 | 0;f = e - k | 0;h = (f | 0) > -1;if ((d | 0) <= (i | 0)) break b;
          }b = X(a * X(0.0));break a;
        } while (0);if (h) if (!f) {
          b = X(a * X(0.0));break;
        } else e = f;if (e >>> 0 < 8388608) do {
          e = e << 1;d = d + -1 | 0;
        } while (e >>> 0 < 8388608);if ((d | 0) > 0) d = e + -8388608 | d << 23;else d = e >>> (1 - d | 0);b = (c[j >> 2] = d | l, X(g[j >> 2]));
      } else m = 3; while (0);if ((m | 0) == 3) {
        b = X(a * b);b = X(b / b);
      }return X(b);
    }function ZE(a) {
      a = X(a);return (g[j >> 2] = a, c[j >> 2] | 0) | 0;
    }function _E(a, b) {
      a = a | 0;b = b | 0;var c = 0;c = SE(a) | 0;return (($E(a, 1, c, b) | 0) != (c | 0)) << 31 >> 31 | 0;
    }function $E(a, b, d, e) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0;f = T(d, b) | 0;d = (b | 0) == 0 ? 0 : d;if ((c[e + 76 >> 2] | 0) > -1) {
        g = (rE(e) | 0) == 0;a = PE(a, f, e) | 0;if (!g) sE(e);
      } else a = PE(a, f, e) | 0;if ((a | 0) != (f | 0)) d = (a >>> 0) / (b >>> 0) | 0;return d | 0;
    }function aF(b, e) {
      b = b | 0;e = e | 0;var f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0;m = l;l = l + 16 | 0;j = m;k = e & 255;a[j >> 0] = k;g = b + 16 | 0;h = c[g >> 2] | 0;if (!h) {
        if (!(QE(b) | 0)) {
          h = c[g >> 2] | 0;i = 4;
        } else f = -1;
      } else i = 4;do if ((i | 0) == 4) {
        i = b + 20 | 0;g = c[i >> 2] | 0;if (g >>> 0 < h >>> 0 ? (f = e & 255, (f | 0) != (a[b + 75 >> 0] | 0)) : 0) {
          c[i >> 2] = g + 1;a[g >> 0] = k;break;
        }if ((Cb[c[b + 36 >> 2] & 15](b, j, 1) | 0) == 1) f = d[j >> 0] | 0;else f = -1;
      } while (0);l = m;return f | 0;
    }function bF(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0;d = l;l = l + 16 | 0;e = d;c[e >> 2] = b;b = pE(c[595] | 0, a, e) | 0;l = d;return b | 0;
    }function cF(b) {
      b = b | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0;f = c[595] | 0;if ((c[f + 76 >> 2] | 0) > -1) g = rE(f) | 0;else g = 0;do if ((_E(b, f) | 0) < 0) b = 1;else {
        if ((a[f + 75 >> 0] | 0) != 10 ? (d = f + 20 | 0, e = c[d >> 2] | 0, e >>> 0 < (c[f + 16 >> 2] | 0) >>> 0) : 0) {
          c[d >> 2] = e + 1;a[e >> 0] = 10;b = 0;break;
        }b = (aF(f, 10) | 0) < 0;
      } while (0);if (g | 0) sE(f);return b << 31 >> 31 | 0;
    }function dF(a, b) {
      a = a | 0;b = b | 0;return pE(c[595] | 0, a, b) | 0;
    }function eF(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          m = 0,
          n = 0,
          o = 0,
          p = 0,
          q = 0,
          r = 0,
          s = 0,
          t = 0,
          u = 0,
          v = 0,
          w = 0,
          x = 0,
          y = 0,
          z = 0,
          A = 0,
          B = 0,
          C = 0,
          D = 0,
          E = 0,
          F = 0,
          G = 0,
          H = 0,
          I = 0,
          J = 0,
          K = 0;K = l;l = l + 16 | 0;o = K;do if (a >>> 0 < 245) {
        p = a >>> 0 < 11 ? 16 : a + 11 & -8;a = p >>> 3;t = c[2762] | 0;d = t >>> a;if (d & 3 | 0) {
          a = (d & 1 ^ 1) + a | 0;d = 11088 + (a << 1 << 2) | 0;e = d + 8 | 0;f = c[e >> 2] | 0;g = f + 8 | 0;h = c[g >> 2] | 0;do if ((d | 0) != (h | 0)) {
            if (h >>> 0 < (c[2766] | 0) >>> 0) nb();b = h + 12 | 0;if ((c[b >> 2] | 0) == (f | 0)) {
              c[b >> 2] = d;c[e >> 2] = h;break;
            } else nb();
          } else c[2762] = t & ~(1 << a); while (0);J = a << 3;c[f + 4 >> 2] = J | 3;J = f + J + 4 | 0;c[J >> 2] = c[J >> 2] | 1;J = g;l = K;return J | 0;
        }s = c[2764] | 0;if (p >>> 0 > s >>> 0) {
          if (d | 0) {
            i = 2 << a;a = d << a & (i | 0 - i);a = (a & 0 - a) + -1 | 0;i = a >>> 12 & 16;a = a >>> i;e = a >>> 5 & 8;a = a >>> e;g = a >>> 2 & 4;a = a >>> g;d = a >>> 1 & 2;a = a >>> d;b = a >>> 1 & 1;b = (e | i | g | d | b) + (a >>> b) | 0;a = 11088 + (b << 1 << 2) | 0;d = a + 8 | 0;g = c[d >> 2] | 0;i = g + 8 | 0;e = c[i >> 2] | 0;do if ((a | 0) != (e | 0)) {
              if (e >>> 0 < (c[2766] | 0) >>> 0) nb();f = e + 12 | 0;if ((c[f >> 2] | 0) == (g | 0)) {
                c[f >> 2] = a;c[d >> 2] = e;j = t;break;
              } else nb();
            } else {
              j = t & ~(1 << b);c[2762] = j;
            } while (0);h = (b << 3) - p | 0;c[g + 4 >> 2] = p | 3;e = g + p | 0;c[e + 4 >> 2] = h | 1;c[e + h >> 2] = h;if (s | 0) {
              f = c[2767] | 0;b = s >>> 3;d = 11088 + (b << 1 << 2) | 0;b = 1 << b;if (j & b) {
                b = d + 8 | 0;a = c[b >> 2] | 0;if (a >>> 0 < (c[2766] | 0) >>> 0) nb();else {
                  k = a;m = b;
                }
              } else {
                c[2762] = j | b;k = d;m = d + 8 | 0;
              }c[m >> 2] = f;c[k + 12 >> 2] = f;c[f + 8 >> 2] = k;c[f + 12 >> 2] = d;
            }c[2764] = h;c[2767] = e;J = i;l = K;return J | 0;
          }k = c[2763] | 0;if (k) {
            a = (k & 0 - k) + -1 | 0;I = a >>> 12 & 16;a = a >>> I;H = a >>> 5 & 8;a = a >>> H;J = a >>> 2 & 4;a = a >>> J;d = a >>> 1 & 2;a = a >>> d;b = a >>> 1 & 1;b = c[11352 + ((H | I | J | d | b) + (a >>> b) << 2) >> 2] | 0;a = (c[b + 4 >> 2] & -8) - p | 0;d = c[b + 16 + (((c[b + 16 >> 2] | 0) == 0 & 1) << 2) >> 2] | 0;if (!d) {
              j = b;h = a;
            } else {
              do {
                I = (c[d + 4 >> 2] & -8) - p | 0;J = I >>> 0 < a >>> 0;a = J ? I : a;b = J ? d : b;d = c[d + 16 + (((c[d + 16 >> 2] | 0) == 0 & 1) << 2) >> 2] | 0;
              } while ((d | 0) != 0);j = b;h = a;
            }f = c[2766] | 0;if (j >>> 0 < f >>> 0) nb();i = j + p | 0;if (j >>> 0 >= i >>> 0) nb();g = c[j + 24 >> 2] | 0;d = c[j + 12 >> 2] | 0;do if ((d | 0) == (j | 0)) {
              a = j + 20 | 0;b = c[a >> 2] | 0;if (!b) {
                a = j + 16 | 0;b = c[a >> 2] | 0;if (!b) {
                  n = 0;break;
                }
              }while (1) {
                d = b + 20 | 0;e = c[d >> 2] | 0;if (e | 0) {
                  b = e;a = d;continue;
                }d = b + 16 | 0;e = c[d >> 2] | 0;if (!e) break;else {
                  b = e;a = d;
                }
              }if (a >>> 0 < f >>> 0) nb();else {
                c[a >> 2] = 0;n = b;break;
              }
            } else {
              e = c[j + 8 >> 2] | 0;if (e >>> 0 < f >>> 0) nb();b = e + 12 | 0;if ((c[b >> 2] | 0) != (j | 0)) nb();a = d + 8 | 0;if ((c[a >> 2] | 0) == (j | 0)) {
                c[b >> 2] = d;c[a >> 2] = e;n = d;break;
              } else nb();
            } while (0);a: do if (g | 0) {
              b = c[j + 28 >> 2] | 0;a = 11352 + (b << 2) | 0;do if ((j | 0) == (c[a >> 2] | 0)) {
                c[a >> 2] = n;if (!n) {
                  c[2763] = k & ~(1 << b);break a;
                }
              } else if (g >>> 0 >= (c[2766] | 0) >>> 0) {
                c[g + 16 + (((c[g + 16 >> 2] | 0) != (j | 0) & 1) << 2) >> 2] = n;if (!n) break a;else break;
              } else nb(); while (0);a = c[2766] | 0;if (n >>> 0 < a >>> 0) nb();c[n + 24 >> 2] = g;b = c[j + 16 >> 2] | 0;do if (b | 0) if (b >>> 0 < a >>> 0) nb();else {
                c[n + 16 >> 2] = b;c[b + 24 >> 2] = n;break;
              } while (0);b = c[j + 20 >> 2] | 0;if (b | 0) if (b >>> 0 < (c[2766] | 0) >>> 0) nb();else {
                c[n + 20 >> 2] = b;c[b + 24 >> 2] = n;break;
              }
            } while (0);if (h >>> 0 < 16) {
              J = h + p | 0;c[j + 4 >> 2] = J | 3;J = j + J + 4 | 0;c[J >> 2] = c[J >> 2] | 1;
            } else {
              c[j + 4 >> 2] = p | 3;c[i + 4 >> 2] = h | 1;c[i + h >> 2] = h;if (s | 0) {
                e = c[2767] | 0;b = s >>> 3;d = 11088 + (b << 1 << 2) | 0;b = 1 << b;if (t & b) {
                  b = d + 8 | 0;a = c[b >> 2] | 0;if (a >>> 0 < (c[2766] | 0) >>> 0) nb();else {
                    q = a;r = b;
                  }
                } else {
                  c[2762] = t | b;q = d;r = d + 8 | 0;
                }c[r >> 2] = e;c[q + 12 >> 2] = e;c[e + 8 >> 2] = q;c[e + 12 >> 2] = d;
              }c[2764] = h;c[2767] = i;
            }J = j + 8 | 0;l = K;return J | 0;
          }
        }
      } else if (a >>> 0 <= 4294967231) {
        a = a + 11 | 0;p = a & -8;k = c[2763] | 0;if (k) {
          e = 0 - p | 0;a = a >>> 8;if (a) {
            if (p >>> 0 > 16777215) i = 31;else {
              r = (a + 1048320 | 0) >>> 16 & 8;C = a << r;q = (C + 520192 | 0) >>> 16 & 4;C = C << q;i = (C + 245760 | 0) >>> 16 & 2;i = 14 - (q | r | i) + (C << i >>> 15) | 0;i = p >>> (i + 7 | 0) & 1 | i << 1;
            }
          } else i = 0;d = c[11352 + (i << 2) >> 2] | 0;b: do if (!d) {
            d = 0;a = 0;C = 81;
          } else {
            a = 0;h = p << ((i | 0) == 31 ? 0 : 25 - (i >>> 1) | 0);g = 0;while (1) {
              f = (c[d + 4 >> 2] & -8) - p | 0;if (f >>> 0 < e >>> 0) if (!f) {
                a = d;e = 0;f = d;C = 85;break b;
              } else {
                a = d;e = f;
              }f = c[d + 20 >> 2] | 0;d = c[d + 16 + (h >>> 31 << 2) >> 2] | 0;g = (f | 0) == 0 | (f | 0) == (d | 0) ? g : f;f = (d | 0) == 0;if (f) {
                d = g;C = 81;break;
              } else h = h << ((f ^ 1) & 1);
            }
          } while (0);if ((C | 0) == 81) {
            if ((d | 0) == 0 & (a | 0) == 0) {
              a = 2 << i;a = k & (a | 0 - a);if (!a) break;r = (a & 0 - a) + -1 | 0;m = r >>> 12 & 16;r = r >>> m;j = r >>> 5 & 8;r = r >>> j;n = r >>> 2 & 4;r = r >>> n;q = r >>> 1 & 2;r = r >>> q;d = r >>> 1 & 1;a = 0;d = c[11352 + ((j | m | n | q | d) + (r >>> d) << 2) >> 2] | 0;
            }if (!d) {
              j = a;i = e;
            } else {
              f = d;C = 85;
            }
          }if ((C | 0) == 85) while (1) {
            C = 0;d = (c[f + 4 >> 2] & -8) - p | 0;r = d >>> 0 < e >>> 0;d = r ? d : e;a = r ? f : a;f = c[f + 16 + (((c[f + 16 >> 2] | 0) == 0 & 1) << 2) >> 2] | 0;if (!f) {
              j = a;i = d;break;
            } else {
              e = d;C = 85;
            }
          }if ((j | 0) != 0 ? i >>> 0 < ((c[2764] | 0) - p | 0) >>> 0 : 0) {
            f = c[2766] | 0;if (j >>> 0 < f >>> 0) nb();h = j + p | 0;if (j >>> 0 >= h >>> 0) nb();g = c[j + 24 >> 2] | 0;d = c[j + 12 >> 2] | 0;do if ((d | 0) == (j | 0)) {
              a = j + 20 | 0;b = c[a >> 2] | 0;if (!b) {
                a = j + 16 | 0;b = c[a >> 2] | 0;if (!b) {
                  s = 0;break;
                }
              }while (1) {
                d = b + 20 | 0;e = c[d >> 2] | 0;if (e | 0) {
                  b = e;a = d;continue;
                }d = b + 16 | 0;e = c[d >> 2] | 0;if (!e) break;else {
                  b = e;a = d;
                }
              }if (a >>> 0 < f >>> 0) nb();else {
                c[a >> 2] = 0;s = b;break;
              }
            } else {
              e = c[j + 8 >> 2] | 0;if (e >>> 0 < f >>> 0) nb();b = e + 12 | 0;if ((c[b >> 2] | 0) != (j | 0)) nb();a = d + 8 | 0;if ((c[a >> 2] | 0) == (j | 0)) {
                c[b >> 2] = d;c[a >> 2] = e;s = d;break;
              } else nb();
            } while (0);c: do if (g) {
              b = c[j + 28 >> 2] | 0;a = 11352 + (b << 2) | 0;do if ((j | 0) == (c[a >> 2] | 0)) {
                c[a >> 2] = s;if (!s) {
                  t = k & ~(1 << b);c[2763] = t;break c;
                }
              } else if (g >>> 0 >= (c[2766] | 0) >>> 0) {
                c[g + 16 + (((c[g + 16 >> 2] | 0) != (j | 0) & 1) << 2) >> 2] = s;if (!s) {
                  t = k;break c;
                } else break;
              } else nb(); while (0);a = c[2766] | 0;if (s >>> 0 < a >>> 0) nb();c[s + 24 >> 2] = g;b = c[j + 16 >> 2] | 0;do if (b | 0) if (b >>> 0 < a >>> 0) nb();else {
                c[s + 16 >> 2] = b;c[b + 24 >> 2] = s;break;
              } while (0);b = c[j + 20 >> 2] | 0;if (b) {
                if (b >>> 0 < (c[2766] | 0) >>> 0) nb();else {
                  c[s + 20 >> 2] = b;c[b + 24 >> 2] = s;t = k;break;
                }
              } else t = k;
            } else t = k; while (0);do if (i >>> 0 >= 16) {
              c[j + 4 >> 2] = p | 3;c[h + 4 >> 2] = i | 1;c[h + i >> 2] = i;b = i >>> 3;if (i >>> 0 < 256) {
                d = 11088 + (b << 1 << 2) | 0;a = c[2762] | 0;b = 1 << b;if (a & b) {
                  b = d + 8 | 0;a = c[b >> 2] | 0;if (a >>> 0 < (c[2766] | 0) >>> 0) nb();else {
                    x = a;y = b;
                  }
                } else {
                  c[2762] = a | b;x = d;y = d + 8 | 0;
                }c[y >> 2] = h;c[x + 12 >> 2] = h;c[h + 8 >> 2] = x;c[h + 12 >> 2] = d;break;
              }b = i >>> 8;if (b) {
                if (i >>> 0 > 16777215) b = 31;else {
                  I = (b + 1048320 | 0) >>> 16 & 8;J = b << I;H = (J + 520192 | 0) >>> 16 & 4;J = J << H;b = (J + 245760 | 0) >>> 16 & 2;b = 14 - (H | I | b) + (J << b >>> 15) | 0;b = i >>> (b + 7 | 0) & 1 | b << 1;
                }
              } else b = 0;d = 11352 + (b << 2) | 0;c[h + 28 >> 2] = b;a = h + 16 | 0;c[a + 4 >> 2] = 0;c[a >> 2] = 0;a = 1 << b;if (!(t & a)) {
                c[2763] = t | a;c[d >> 2] = h;c[h + 24 >> 2] = d;c[h + 12 >> 2] = h;c[h + 8 >> 2] = h;break;
              }a = i << ((b | 0) == 31 ? 0 : 25 - (b >>> 1) | 0);e = c[d >> 2] | 0;while (1) {
                if ((c[e + 4 >> 2] & -8 | 0) == (i | 0)) {
                  C = 139;break;
                }d = e + 16 + (a >>> 31 << 2) | 0;b = c[d >> 2] | 0;if (!b) {
                  C = 136;break;
                } else {
                  a = a << 1;e = b;
                }
              }if ((C | 0) == 136) {
                if (d >>> 0 < (c[2766] | 0) >>> 0) nb();else {
                  c[d >> 2] = h;c[h + 24 >> 2] = e;c[h + 12 >> 2] = h;c[h + 8 >> 2] = h;break;
                }
              } else if ((C | 0) == 139) {
                b = e + 8 | 0;a = c[b >> 2] | 0;J = c[2766] | 0;if (a >>> 0 >= J >>> 0 & e >>> 0 >= J >>> 0) {
                  c[a + 12 >> 2] = h;c[b >> 2] = h;c[h + 8 >> 2] = a;c[h + 12 >> 2] = e;c[h + 24 >> 2] = 0;break;
                } else nb();
              }
            } else {
              J = i + p | 0;c[j + 4 >> 2] = J | 3;J = j + J + 4 | 0;c[J >> 2] = c[J >> 2] | 1;
            } while (0);J = j + 8 | 0;l = K;return J | 0;
          }
        }
      } else p = -1; while (0);d = c[2764] | 0;if (d >>> 0 >= p >>> 0) {
        b = d - p | 0;a = c[2767] | 0;if (b >>> 0 > 15) {
          J = a + p | 0;c[2767] = J;c[2764] = b;c[J + 4 >> 2] = b | 1;c[J + b >> 2] = b;c[a + 4 >> 2] = p | 3;
        } else {
          c[2764] = 0;c[2767] = 0;c[a + 4 >> 2] = d | 3;J = a + d + 4 | 0;c[J >> 2] = c[J >> 2] | 1;
        }J = a + 8 | 0;l = K;return J | 0;
      }h = c[2765] | 0;if (h >>> 0 > p >>> 0) {
        H = h - p | 0;c[2765] = H;J = c[2768] | 0;I = J + p | 0;c[2768] = I;c[I + 4 >> 2] = H | 1;c[J + 4 >> 2] = p | 3;J = J + 8 | 0;l = K;return J | 0;
      }if (!(c[2880] | 0)) {
        c[2882] = 4096;c[2881] = 4096;c[2883] = -1;c[2884] = -1;c[2885] = 0;c[2873] = 0;a = o & -16 ^ 1431655768;c[o >> 2] = a;c[2880] = a;a = 4096;
      } else a = c[2882] | 0;i = p + 48 | 0;j = p + 47 | 0;g = a + j | 0;f = 0 - a | 0;k = g & f;if (k >>> 0 <= p >>> 0) {
        J = 0;l = K;return J | 0;
      }a = c[2872] | 0;if (a | 0 ? (x = c[2870] | 0, y = x + k | 0, y >>> 0 <= x >>> 0 | y >>> 0 > a >>> 0) : 0) {
        J = 0;l = K;return J | 0;
      }d: do if (!(c[2873] & 4)) {
        d = c[2768] | 0;e: do if (d) {
          e = 11496;while (1) {
            a = c[e >> 2] | 0;if (a >>> 0 <= d >>> 0 ? (w = e + 4 | 0, (a + (c[w >> 2] | 0) | 0) >>> 0 > d >>> 0) : 0) break;a = c[e + 8 >> 2] | 0;if (!a) {
              C = 163;break e;
            } else e = a;
          }b = g - h & f;if (b >>> 0 < 2147483647) {
            a = EF(b | 0) | 0;if ((a | 0) == ((c[e >> 2] | 0) + (c[w >> 2] | 0) | 0)) {
              if ((a | 0) != (-1 | 0)) {
                h = b;g = a;C = 180;break d;
              }
            } else {
              e = a;C = 171;
            }
          } else b = 0;
        } else C = 163; while (0);do if ((C | 0) == 163) {
          d = EF(0) | 0;if ((d | 0) != (-1 | 0) ? (b = d, u = c[2881] | 0, v = u + -1 | 0, b = ((v & b | 0) == 0 ? 0 : (v + b & 0 - u) - b | 0) + k | 0, u = c[2870] | 0, v = b + u | 0, b >>> 0 > p >>> 0 & b >>> 0 < 2147483647) : 0) {
            y = c[2872] | 0;if (y | 0 ? v >>> 0 <= u >>> 0 | v >>> 0 > y >>> 0 : 0) {
              b = 0;break;
            }a = EF(b | 0) | 0;if ((a | 0) == (d | 0)) {
              h = b;g = d;C = 180;break d;
            } else {
              e = a;C = 171;
            }
          } else b = 0;
        } while (0);do if ((C | 0) == 171) {
          d = 0 - b | 0;if (!(i >>> 0 > b >>> 0 & (b >>> 0 < 2147483647 & (e | 0) != (-1 | 0)))) if ((e | 0) == (-1 | 0)) {
            b = 0;break;
          } else {
            h = b;g = e;C = 180;break d;
          }a = c[2882] | 0;a = j - b + a & 0 - a;if (a >>> 0 >= 2147483647) {
            h = b;g = e;C = 180;break d;
          }if ((EF(a | 0) | 0) == (-1 | 0)) {
            EF(d | 0) | 0;b = 0;break;
          } else {
            h = a + b | 0;g = e;C = 180;break d;
          }
        } while (0);c[2873] = c[2873] | 4;C = 178;
      } else {
        b = 0;C = 178;
      } while (0);if (((C | 0) == 178 ? k >>> 0 < 2147483647 : 0) ? (B = EF(k | 0) | 0, y = EF(0) | 0, z = y - B | 0, A = z >>> 0 > (p + 40 | 0) >>> 0, !((B | 0) == (-1 | 0) | A ^ 1 | B >>> 0 < y >>> 0 & ((B | 0) != (-1 | 0) & (y | 0) != (-1 | 0)) ^ 1)) : 0) {
        h = A ? z : b;g = B;C = 180;
      }if ((C | 0) == 180) {
        b = (c[2870] | 0) + h | 0;c[2870] = b;if (b >>> 0 > (c[2871] | 0) >>> 0) c[2871] = b;k = c[2768] | 0;do if (k) {
          b = 11496;while (1) {
            a = c[b >> 2] | 0;d = b + 4 | 0;e = c[d >> 2] | 0;if ((g | 0) == (a + e | 0)) {
              C = 190;break;
            }f = c[b + 8 >> 2] | 0;if (!f) break;else b = f;
          }if (((C | 0) == 190 ? (c[b + 12 >> 2] & 8 | 0) == 0 : 0) ? k >>> 0 < g >>> 0 & k >>> 0 >= a >>> 0 : 0) {
            c[d >> 2] = e + h;J = k + 8 | 0;J = (J & 7 | 0) == 0 ? 0 : 0 - J & 7;I = k + J | 0;J = (c[2765] | 0) + (h - J) | 0;c[2768] = I;c[2765] = J;c[I + 4 >> 2] = J | 1;c[I + J + 4 >> 2] = 40;c[2769] = c[2884];break;
          }b = c[2766] | 0;if (g >>> 0 < b >>> 0) {
            c[2766] = g;i = g;
          } else i = b;d = g + h | 0;b = 11496;while (1) {
            if ((c[b >> 2] | 0) == (d | 0)) {
              C = 198;break;
            }a = c[b + 8 >> 2] | 0;if (!a) break;else b = a;
          }if ((C | 0) == 198 ? (c[b + 12 >> 2] & 8 | 0) == 0 : 0) {
            c[b >> 2] = g;n = b + 4 | 0;c[n >> 2] = (c[n >> 2] | 0) + h;n = g + 8 | 0;n = g + ((n & 7 | 0) == 0 ? 0 : 0 - n & 7) | 0;b = d + 8 | 0;b = d + ((b & 7 | 0) == 0 ? 0 : 0 - b & 7) | 0;m = n + p | 0;j = b - n - p | 0;c[n + 4 >> 2] = p | 3;do if ((b | 0) != (k | 0)) {
              if ((b | 0) == (c[2767] | 0)) {
                J = (c[2764] | 0) + j | 0;c[2764] = J;c[2767] = m;c[m + 4 >> 2] = J | 1;c[m + J >> 2] = J;break;
              }a = c[b + 4 >> 2] | 0;if ((a & 3 | 0) == 1) {
                h = a & -8;f = a >>> 3;f: do if (a >>> 0 >= 256) {
                  g = c[b + 24 >> 2] | 0;e = c[b + 12 >> 2] | 0;do if ((e | 0) == (b | 0)) {
                    e = b + 16 | 0;d = e + 4 | 0;a = c[d >> 2] | 0;if (!a) {
                      a = c[e >> 2] | 0;if (!a) {
                        H = 0;break;
                      } else d = e;
                    }while (1) {
                      e = a + 20 | 0;f = c[e >> 2] | 0;if (f | 0) {
                        a = f;d = e;continue;
                      }e = a + 16 | 0;f = c[e >> 2] | 0;if (!f) break;else {
                        a = f;d = e;
                      }
                    }if (d >>> 0 < i >>> 0) nb();else {
                      c[d >> 2] = 0;H = a;break;
                    }
                  } else {
                    f = c[b + 8 >> 2] | 0;if (f >>> 0 < i >>> 0) nb();a = f + 12 | 0;if ((c[a >> 2] | 0) != (b | 0)) nb();d = e + 8 | 0;if ((c[d >> 2] | 0) == (b | 0)) {
                      c[a >> 2] = e;c[d >> 2] = f;H = e;break;
                    } else nb();
                  } while (0);if (!g) break;a = c[b + 28 >> 2] | 0;d = 11352 + (a << 2) | 0;do if ((b | 0) != (c[d >> 2] | 0)) {
                    if (g >>> 0 >= (c[2766] | 0) >>> 0) {
                      c[g + 16 + (((c[g + 16 >> 2] | 0) != (b | 0) & 1) << 2) >> 2] = H;if (!H) break f;else break;
                    } else nb();
                  } else {
                    c[d >> 2] = H;if (H | 0) break;c[2763] = c[2763] & ~(1 << a);break f;
                  } while (0);e = c[2766] | 0;if (H >>> 0 < e >>> 0) nb();c[H + 24 >> 2] = g;a = b + 16 | 0;d = c[a >> 2] | 0;do if (d | 0) if (d >>> 0 < e >>> 0) nb();else {
                    c[H + 16 >> 2] = d;c[d + 24 >> 2] = H;break;
                  } while (0);a = c[a + 4 >> 2] | 0;if (!a) break;if (a >>> 0 < (c[2766] | 0) >>> 0) nb();else {
                    c[H + 20 >> 2] = a;c[a + 24 >> 2] = H;break;
                  }
                } else {
                  d = c[b + 8 >> 2] | 0;e = c[b + 12 >> 2] | 0;a = 11088 + (f << 1 << 2) | 0;do if ((d | 0) != (a | 0)) {
                    if (d >>> 0 < i >>> 0) nb();if ((c[d + 12 >> 2] | 0) == (b | 0)) break;nb();
                  } while (0);if ((e | 0) == (d | 0)) {
                    c[2762] = c[2762] & ~(1 << f);break;
                  }do if ((e | 0) == (a | 0)) E = e + 8 | 0;else {
                    if (e >>> 0 < i >>> 0) nb();a = e + 8 | 0;if ((c[a >> 2] | 0) == (b | 0)) {
                      E = a;break;
                    }nb();
                  } while (0);c[d + 12 >> 2] = e;c[E >> 2] = d;
                } while (0);b = b + h | 0;f = h + j | 0;
              } else f = j;b = b + 4 | 0;c[b >> 2] = c[b >> 2] & -2;c[m + 4 >> 2] = f | 1;c[m + f >> 2] = f;b = f >>> 3;if (f >>> 0 < 256) {
                d = 11088 + (b << 1 << 2) | 0;a = c[2762] | 0;b = 1 << b;do if (!(a & b)) {
                  c[2762] = a | b;I = d;J = d + 8 | 0;
                } else {
                  b = d + 8 | 0;a = c[b >> 2] | 0;if (a >>> 0 >= (c[2766] | 0) >>> 0) {
                    I = a;J = b;break;
                  }nb();
                } while (0);c[J >> 2] = m;c[I + 12 >> 2] = m;c[m + 8 >> 2] = I;c[m + 12 >> 2] = d;break;
              }b = f >>> 8;do if (!b) b = 0;else {
                if (f >>> 0 > 16777215) {
                  b = 31;break;
                }I = (b + 1048320 | 0) >>> 16 & 8;J = b << I;H = (J + 520192 | 0) >>> 16 & 4;J = J << H;b = (J + 245760 | 0) >>> 16 & 2;b = 14 - (H | I | b) + (J << b >>> 15) | 0;b = f >>> (b + 7 | 0) & 1 | b << 1;
              } while (0);e = 11352 + (b << 2) | 0;c[m + 28 >> 2] = b;a = m + 16 | 0;c[a + 4 >> 2] = 0;c[a >> 2] = 0;a = c[2763] | 0;d = 1 << b;if (!(a & d)) {
                c[2763] = a | d;c[e >> 2] = m;c[m + 24 >> 2] = e;c[m + 12 >> 2] = m;c[m + 8 >> 2] = m;break;
              }a = f << ((b | 0) == 31 ? 0 : 25 - (b >>> 1) | 0);e = c[e >> 2] | 0;while (1) {
                if ((c[e + 4 >> 2] & -8 | 0) == (f | 0)) {
                  C = 265;break;
                }d = e + 16 + (a >>> 31 << 2) | 0;b = c[d >> 2] | 0;if (!b) {
                  C = 262;break;
                } else {
                  a = a << 1;e = b;
                }
              }if ((C | 0) == 262) {
                if (d >>> 0 < (c[2766] | 0) >>> 0) nb();else {
                  c[d >> 2] = m;c[m + 24 >> 2] = e;c[m + 12 >> 2] = m;c[m + 8 >> 2] = m;break;
                }
              } else if ((C | 0) == 265) {
                b = e + 8 | 0;a = c[b >> 2] | 0;J = c[2766] | 0;if (a >>> 0 >= J >>> 0 & e >>> 0 >= J >>> 0) {
                  c[a + 12 >> 2] = m;c[b >> 2] = m;c[m + 8 >> 2] = a;c[m + 12 >> 2] = e;c[m + 24 >> 2] = 0;break;
                } else nb();
              }
            } else {
              J = (c[2765] | 0) + j | 0;c[2765] = J;c[2768] = m;c[m + 4 >> 2] = J | 1;
            } while (0);J = n + 8 | 0;l = K;return J | 0;
          }b = 11496;while (1) {
            a = c[b >> 2] | 0;if (a >>> 0 <= k >>> 0 ? (D = a + (c[b + 4 >> 2] | 0) | 0, D >>> 0 > k >>> 0) : 0) break;b = c[b + 8 >> 2] | 0;
          }f = D + -47 | 0;a = f + 8 | 0;a = f + ((a & 7 | 0) == 0 ? 0 : 0 - a & 7) | 0;f = k + 16 | 0;a = a >>> 0 < f >>> 0 ? k : a;b = a + 8 | 0;d = g + 8 | 0;d = (d & 7 | 0) == 0 ? 0 : 0 - d & 7;J = g + d | 0;d = h + -40 - d | 0;c[2768] = J;c[2765] = d;c[J + 4 >> 2] = d | 1;c[J + d + 4 >> 2] = 40;c[2769] = c[2884];d = a + 4 | 0;c[d >> 2] = 27;c[b >> 2] = c[2874];c[b + 4 >> 2] = c[2875];c[b + 8 >> 2] = c[2876];c[b + 12 >> 2] = c[2877];c[2874] = g;c[2875] = h;c[2877] = 0;c[2876] = b;b = a + 24 | 0;do {
            J = b;b = b + 4 | 0;c[b >> 2] = 7;
          } while ((J + 8 | 0) >>> 0 < D >>> 0);if ((a | 0) != (k | 0)) {
            g = a - k | 0;c[d >> 2] = c[d >> 2] & -2;c[k + 4 >> 2] = g | 1;c[a >> 2] = g;b = g >>> 3;if (g >>> 0 < 256) {
              d = 11088 + (b << 1 << 2) | 0;a = c[2762] | 0;b = 1 << b;if (a & b) {
                b = d + 8 | 0;a = c[b >> 2] | 0;if (a >>> 0 < (c[2766] | 0) >>> 0) nb();else {
                  F = a;G = b;
                }
              } else {
                c[2762] = a | b;F = d;G = d + 8 | 0;
              }c[G >> 2] = k;c[F + 12 >> 2] = k;c[k + 8 >> 2] = F;c[k + 12 >> 2] = d;break;
            }b = g >>> 8;if (b) {
              if (g >>> 0 > 16777215) d = 31;else {
                I = (b + 1048320 | 0) >>> 16 & 8;J = b << I;H = (J + 520192 | 0) >>> 16 & 4;J = J << H;d = (J + 245760 | 0) >>> 16 & 2;d = 14 - (H | I | d) + (J << d >>> 15) | 0;d = g >>> (d + 7 | 0) & 1 | d << 1;
              }
            } else d = 0;e = 11352 + (d << 2) | 0;c[k + 28 >> 2] = d;c[k + 20 >> 2] = 0;c[f >> 2] = 0;b = c[2763] | 0;a = 1 << d;if (!(b & a)) {
              c[2763] = b | a;c[e >> 2] = k;c[k + 24 >> 2] = e;c[k + 12 >> 2] = k;c[k + 8 >> 2] = k;break;
            }a = g << ((d | 0) == 31 ? 0 : 25 - (d >>> 1) | 0);e = c[e >> 2] | 0;while (1) {
              if ((c[e + 4 >> 2] & -8 | 0) == (g | 0)) {
                C = 292;break;
              }d = e + 16 + (a >>> 31 << 2) | 0;b = c[d >> 2] | 0;if (!b) {
                C = 289;break;
              } else {
                a = a << 1;e = b;
              }
            }if ((C | 0) == 289) {
              if (d >>> 0 < (c[2766] | 0) >>> 0) nb();else {
                c[d >> 2] = k;c[k + 24 >> 2] = e;c[k + 12 >> 2] = k;c[k + 8 >> 2] = k;break;
              }
            } else if ((C | 0) == 292) {
              b = e + 8 | 0;a = c[b >> 2] | 0;J = c[2766] | 0;if (a >>> 0 >= J >>> 0 & e >>> 0 >= J >>> 0) {
                c[a + 12 >> 2] = k;c[b >> 2] = k;c[k + 8 >> 2] = a;c[k + 12 >> 2] = e;c[k + 24 >> 2] = 0;break;
              } else nb();
            }
          }
        } else {
          J = c[2766] | 0;if ((J | 0) == 0 | g >>> 0 < J >>> 0) c[2766] = g;c[2874] = g;c[2875] = h;c[2877] = 0;c[2771] = c[2880];c[2770] = -1;b = 0;do {
            J = 11088 + (b << 1 << 2) | 0;c[J + 12 >> 2] = J;c[J + 8 >> 2] = J;b = b + 1 | 0;
          } while ((b | 0) != 32);J = g + 8 | 0;J = (J & 7 | 0) == 0 ? 0 : 0 - J & 7;I = g + J | 0;J = h + -40 - J | 0;c[2768] = I;c[2765] = J;c[I + 4 >> 2] = J | 1;c[I + J + 4 >> 2] = 40;c[2769] = c[2884];
        } while (0);b = c[2765] | 0;if (b >>> 0 > p >>> 0) {
          H = b - p | 0;c[2765] = H;J = c[2768] | 0;I = J + p | 0;c[2768] = I;c[I + 4 >> 2] = H | 1;c[J + 4 >> 2] = p | 3;J = J + 8 | 0;l = K;return J | 0;
        }
      }c[(hE() | 0) >> 2] = 12;J = 0;l = K;return J | 0;
    }function fF(a) {
      a = a | 0;var b = 0,
          d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          l = 0,
          m = 0,
          n = 0,
          o = 0,
          p = 0,
          q = 0,
          r = 0;if (!a) return;d = a + -8 | 0;h = c[2766] | 0;if (d >>> 0 < h >>> 0) nb();a = c[a + -4 >> 2] | 0;b = a & 3;if ((b | 0) == 1) nb();e = a & -8;o = d + e | 0;a: do if (!(a & 1)) {
        a = c[d >> 2] | 0;if (!b) return;k = d + (0 - a) | 0;j = a + e | 0;if (k >>> 0 < h >>> 0) nb();if ((k | 0) == (c[2767] | 0)) {
          a = o + 4 | 0;b = c[a >> 2] | 0;if ((b & 3 | 0) != 3) {
            r = k;f = j;m = k;break;
          }c[2764] = j;c[a >> 2] = b & -2;c[k + 4 >> 2] = j | 1;c[k + j >> 2] = j;return;
        }e = a >>> 3;if (a >>> 0 < 256) {
          b = c[k + 8 >> 2] | 0;d = c[k + 12 >> 2] | 0;a = 11088 + (e << 1 << 2) | 0;if ((b | 0) != (a | 0)) {
            if (b >>> 0 < h >>> 0) nb();if ((c[b + 12 >> 2] | 0) != (k | 0)) nb();
          }if ((d | 0) == (b | 0)) {
            c[2762] = c[2762] & ~(1 << e);r = k;f = j;m = k;break;
          }if ((d | 0) != (a | 0)) {
            if (d >>> 0 < h >>> 0) nb();a = d + 8 | 0;if ((c[a >> 2] | 0) == (k | 0)) g = a;else nb();
          } else g = d + 8 | 0;c[b + 12 >> 2] = d;c[g >> 2] = b;r = k;f = j;m = k;break;
        }g = c[k + 24 >> 2] | 0;d = c[k + 12 >> 2] | 0;do if ((d | 0) == (k | 0)) {
          d = k + 16 | 0;b = d + 4 | 0;a = c[b >> 2] | 0;if (!a) {
            a = c[d >> 2] | 0;if (!a) {
              i = 0;break;
            } else b = d;
          }while (1) {
            d = a + 20 | 0;e = c[d >> 2] | 0;if (e | 0) {
              a = e;b = d;continue;
            }d = a + 16 | 0;e = c[d >> 2] | 0;if (!e) break;else {
              a = e;b = d;
            }
          }if (b >>> 0 < h >>> 0) nb();else {
            c[b >> 2] = 0;i = a;break;
          }
        } else {
          e = c[k + 8 >> 2] | 0;if (e >>> 0 < h >>> 0) nb();a = e + 12 | 0;if ((c[a >> 2] | 0) != (k | 0)) nb();b = d + 8 | 0;if ((c[b >> 2] | 0) == (k | 0)) {
            c[a >> 2] = d;c[b >> 2] = e;i = d;break;
          } else nb();
        } while (0);if (g) {
          a = c[k + 28 >> 2] | 0;b = 11352 + (a << 2) | 0;do if ((k | 0) == (c[b >> 2] | 0)) {
            c[b >> 2] = i;if (!i) {
              c[2763] = c[2763] & ~(1 << a);r = k;f = j;m = k;break a;
            }
          } else if (g >>> 0 >= (c[2766] | 0) >>> 0) {
            c[g + 16 + (((c[g + 16 >> 2] | 0) != (k | 0) & 1) << 2) >> 2] = i;if (!i) {
              r = k;f = j;m = k;break a;
            } else break;
          } else nb(); while (0);d = c[2766] | 0;if (i >>> 0 < d >>> 0) nb();c[i + 24 >> 2] = g;a = k + 16 | 0;b = c[a >> 2] | 0;do if (b | 0) if (b >>> 0 < d >>> 0) nb();else {
            c[i + 16 >> 2] = b;c[b + 24 >> 2] = i;break;
          } while (0);a = c[a + 4 >> 2] | 0;if (a) {
            if (a >>> 0 < (c[2766] | 0) >>> 0) nb();else {
              c[i + 20 >> 2] = a;c[a + 24 >> 2] = i;r = k;f = j;m = k;break;
            }
          } else {
            r = k;f = j;m = k;
          }
        } else {
          r = k;f = j;m = k;
        }
      } else {
        r = d;f = e;m = d;
      } while (0);if (m >>> 0 >= o >>> 0) nb();a = o + 4 | 0;b = c[a >> 2] | 0;if (!(b & 1)) nb();if (!(b & 2)) {
        a = c[2767] | 0;if ((o | 0) == (c[2768] | 0)) {
          q = (c[2765] | 0) + f | 0;c[2765] = q;c[2768] = r;c[r + 4 >> 2] = q | 1;if ((r | 0) != (a | 0)) return;c[2767] = 0;c[2764] = 0;return;
        }if ((o | 0) == (a | 0)) {
          q = (c[2764] | 0) + f | 0;c[2764] = q;c[2767] = m;c[r + 4 >> 2] = q | 1;c[m + q >> 2] = q;return;
        }f = (b & -8) + f | 0;e = b >>> 3;b: do if (b >>> 0 >= 256) {
          g = c[o + 24 >> 2] | 0;a = c[o + 12 >> 2] | 0;do if ((a | 0) == (o | 0)) {
            d = o + 16 | 0;b = d + 4 | 0;a = c[b >> 2] | 0;if (!a) {
              a = c[d >> 2] | 0;if (!a) {
                n = 0;break;
              } else b = d;
            }while (1) {
              d = a + 20 | 0;e = c[d >> 2] | 0;if (e | 0) {
                a = e;b = d;continue;
              }d = a + 16 | 0;e = c[d >> 2] | 0;if (!e) break;else {
                a = e;b = d;
              }
            }if (b >>> 0 < (c[2766] | 0) >>> 0) nb();else {
              c[b >> 2] = 0;n = a;break;
            }
          } else {
            b = c[o + 8 >> 2] | 0;if (b >>> 0 < (c[2766] | 0) >>> 0) nb();d = b + 12 | 0;if ((c[d >> 2] | 0) != (o | 0)) nb();e = a + 8 | 0;if ((c[e >> 2] | 0) == (o | 0)) {
              c[d >> 2] = a;c[e >> 2] = b;n = a;break;
            } else nb();
          } while (0);if (g | 0) {
            a = c[o + 28 >> 2] | 0;b = 11352 + (a << 2) | 0;do if ((o | 0) == (c[b >> 2] | 0)) {
              c[b >> 2] = n;if (!n) {
                c[2763] = c[2763] & ~(1 << a);break b;
              }
            } else if (g >>> 0 >= (c[2766] | 0) >>> 0) {
              c[g + 16 + (((c[g + 16 >> 2] | 0) != (o | 0) & 1) << 2) >> 2] = n;if (!n) break b;else break;
            } else nb(); while (0);d = c[2766] | 0;if (n >>> 0 < d >>> 0) nb();c[n + 24 >> 2] = g;a = o + 16 | 0;b = c[a >> 2] | 0;do if (b | 0) if (b >>> 0 < d >>> 0) nb();else {
              c[n + 16 >> 2] = b;c[b + 24 >> 2] = n;break;
            } while (0);a = c[a + 4 >> 2] | 0;if (a | 0) if (a >>> 0 < (c[2766] | 0) >>> 0) nb();else {
              c[n + 20 >> 2] = a;c[a + 24 >> 2] = n;break;
            }
          }
        } else {
          b = c[o + 8 >> 2] | 0;d = c[o + 12 >> 2] | 0;a = 11088 + (e << 1 << 2) | 0;if ((b | 0) != (a | 0)) {
            if (b >>> 0 < (c[2766] | 0) >>> 0) nb();if ((c[b + 12 >> 2] | 0) != (o | 0)) nb();
          }if ((d | 0) == (b | 0)) {
            c[2762] = c[2762] & ~(1 << e);break;
          }if ((d | 0) != (a | 0)) {
            if (d >>> 0 < (c[2766] | 0) >>> 0) nb();a = d + 8 | 0;if ((c[a >> 2] | 0) == (o | 0)) l = a;else nb();
          } else l = d + 8 | 0;c[b + 12 >> 2] = d;c[l >> 2] = b;
        } while (0);c[r + 4 >> 2] = f | 1;c[m + f >> 2] = f;if ((r | 0) == (c[2767] | 0)) {
          c[2764] = f;return;
        }
      } else {
        c[a >> 2] = b & -2;c[r + 4 >> 2] = f | 1;c[m + f >> 2] = f;
      }a = f >>> 3;if (f >>> 0 < 256) {
        d = 11088 + (a << 1 << 2) | 0;b = c[2762] | 0;a = 1 << a;if (b & a) {
          a = d + 8 | 0;b = c[a >> 2] | 0;if (b >>> 0 < (c[2766] | 0) >>> 0) nb();else {
            p = b;q = a;
          }
        } else {
          c[2762] = b | a;p = d;q = d + 8 | 0;
        }c[q >> 2] = r;c[p + 12 >> 2] = r;c[r + 8 >> 2] = p;c[r + 12 >> 2] = d;return;
      }a = f >>> 8;if (a) {
        if (f >>> 0 > 16777215) a = 31;else {
          p = (a + 1048320 | 0) >>> 16 & 8;q = a << p;o = (q + 520192 | 0) >>> 16 & 4;q = q << o;a = (q + 245760 | 0) >>> 16 & 2;a = 14 - (o | p | a) + (q << a >>> 15) | 0;a = f >>> (a + 7 | 0) & 1 | a << 1;
        }
      } else a = 0;e = 11352 + (a << 2) | 0;c[r + 28 >> 2] = a;c[r + 20 >> 2] = 0;c[r + 16 >> 2] = 0;b = c[2763] | 0;d = 1 << a;do if (b & d) {
        b = f << ((a | 0) == 31 ? 0 : 25 - (a >>> 1) | 0);e = c[e >> 2] | 0;while (1) {
          if ((c[e + 4 >> 2] & -8 | 0) == (f | 0)) {
            a = 124;break;
          }d = e + 16 + (b >>> 31 << 2) | 0;a = c[d >> 2] | 0;if (!a) {
            a = 121;break;
          } else {
            b = b << 1;e = a;
          }
        }if ((a | 0) == 121) {
          if (d >>> 0 < (c[2766] | 0) >>> 0) nb();else {
            c[d >> 2] = r;c[r + 24 >> 2] = e;c[r + 12 >> 2] = r;c[r + 8 >> 2] = r;break;
          }
        } else if ((a | 0) == 124) {
          a = e + 8 | 0;b = c[a >> 2] | 0;q = c[2766] | 0;if (b >>> 0 >= q >>> 0 & e >>> 0 >= q >>> 0) {
            c[b + 12 >> 2] = r;c[a >> 2] = r;c[r + 8 >> 2] = b;c[r + 12 >> 2] = e;c[r + 24 >> 2] = 0;break;
          } else nb();
        }
      } else {
        c[2763] = b | d;c[e >> 2] = r;c[r + 24 >> 2] = e;c[r + 12 >> 2] = r;c[r + 8 >> 2] = r;
      } while (0);r = (c[2770] | 0) + -1 | 0;c[2770] = r;if (!r) a = 11504;else return;while (1) {
        a = c[a >> 2] | 0;if (!a) break;else a = a + 8 | 0;
      }c[2770] = -1;return;
    }function gF(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0;if (!a) {
        b = eF(b) | 0;return b | 0;
      }if (b >>> 0 > 4294967231) {
        c[(hE() | 0) >> 2] = 12;b = 0;return b | 0;
      }d = hF(a + -8 | 0, b >>> 0 < 11 ? 16 : b + 11 & -8) | 0;if (d | 0) {
        b = d + 8 | 0;return b | 0;
      }d = eF(b) | 0;if (!d) {
        b = 0;return b | 0;
      }e = c[a + -4 >> 2] | 0;e = (e & -8) - ((e & 3 | 0) == 0 ? 8 : 4) | 0;AF(d | 0, a | 0, (e >>> 0 < b >>> 0 ? e : b) | 0) | 0;fF(a);b = d;return b | 0;
    }function hF(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          l = 0,
          m = 0,
          n = 0,
          o = 0;o = a + 4 | 0;n = c[o >> 2] | 0;d = n & -8;k = a + d | 0;i = c[2766] | 0;e = n & 3;if (!((e | 0) != 1 & a >>> 0 >= i >>> 0 & a >>> 0 < k >>> 0)) nb();f = c[k + 4 >> 2] | 0;if (!(f & 1)) nb();if (!e) {
        if (b >>> 0 < 256) {
          a = 0;return a | 0;
        }if (d >>> 0 >= (b + 4 | 0) >>> 0 ? (d - b | 0) >>> 0 <= c[2882] << 1 >>> 0 : 0) return a | 0;a = 0;return a | 0;
      }if (d >>> 0 >= b >>> 0) {
        d = d - b | 0;if (d >>> 0 <= 15) return a | 0;m = a + b | 0;c[o >> 2] = n & 1 | b | 2;c[m + 4 >> 2] = d | 3;o = m + d + 4 | 0;c[o >> 2] = c[o >> 2] | 1;iF(m, d);return a | 0;
      }if ((k | 0) == (c[2768] | 0)) {
        m = (c[2765] | 0) + d | 0;d = m - b | 0;e = a + b | 0;if (m >>> 0 <= b >>> 0) {
          a = 0;return a | 0;
        }c[o >> 2] = n & 1 | b | 2;c[e + 4 >> 2] = d | 1;c[2768] = e;c[2765] = d;return a | 0;
      }if ((k | 0) == (c[2767] | 0)) {
        f = (c[2764] | 0) + d | 0;if (f >>> 0 < b >>> 0) {
          a = 0;return a | 0;
        }d = f - b | 0;e = n & 1;if (d >>> 0 > 15) {
          n = a + b | 0;m = n + d | 0;c[o >> 2] = e | b | 2;c[n + 4 >> 2] = d | 1;c[m >> 2] = d;e = m + 4 | 0;c[e >> 2] = c[e >> 2] & -2;e = n;
        } else {
          c[o >> 2] = e | f | 2;e = a + f + 4 | 0;c[e >> 2] = c[e >> 2] | 1;e = 0;d = 0;
        }c[2764] = d;c[2767] = e;return a | 0;
      }if (f & 2 | 0) {
        a = 0;return a | 0;
      }l = (f & -8) + d | 0;if (l >>> 0 < b >>> 0) {
        a = 0;return a | 0;
      }m = l - b | 0;g = f >>> 3;a: do if (f >>> 0 >= 256) {
        h = c[k + 24 >> 2] | 0;f = c[k + 12 >> 2] | 0;do if ((f | 0) == (k | 0)) {
          f = k + 16 | 0;e = f + 4 | 0;d = c[e >> 2] | 0;if (!d) {
            d = c[f >> 2] | 0;if (!d) {
              j = 0;break;
            } else e = f;
          }while (1) {
            f = d + 20 | 0;g = c[f >> 2] | 0;if (g | 0) {
              d = g;e = f;continue;
            }f = d + 16 | 0;g = c[f >> 2] | 0;if (!g) break;else {
              d = g;e = f;
            }
          }if (e >>> 0 < i >>> 0) nb();else {
            c[e >> 2] = 0;j = d;break;
          }
        } else {
          g = c[k + 8 >> 2] | 0;if (g >>> 0 < i >>> 0) nb();d = g + 12 | 0;if ((c[d >> 2] | 0) != (k | 0)) nb();e = f + 8 | 0;if ((c[e >> 2] | 0) == (k | 0)) {
            c[d >> 2] = f;c[e >> 2] = g;j = f;break;
          } else nb();
        } while (0);if (h | 0) {
          d = c[k + 28 >> 2] | 0;e = 11352 + (d << 2) | 0;do if ((k | 0) == (c[e >> 2] | 0)) {
            c[e >> 2] = j;if (!j) {
              c[2763] = c[2763] & ~(1 << d);break a;
            }
          } else if (h >>> 0 >= (c[2766] | 0) >>> 0) {
            c[h + 16 + (((c[h + 16 >> 2] | 0) != (k | 0) & 1) << 2) >> 2] = j;if (!j) break a;else break;
          } else nb(); while (0);f = c[2766] | 0;if (j >>> 0 < f >>> 0) nb();c[j + 24 >> 2] = h;d = k + 16 | 0;e = c[d >> 2] | 0;do if (e | 0) if (e >>> 0 < f >>> 0) nb();else {
            c[j + 16 >> 2] = e;c[e + 24 >> 2] = j;break;
          } while (0);d = c[d + 4 >> 2] | 0;if (d | 0) if (d >>> 0 < (c[2766] | 0) >>> 0) nb();else {
            c[j + 20 >> 2] = d;c[d + 24 >> 2] = j;break;
          }
        }
      } else {
        e = c[k + 8 >> 2] | 0;f = c[k + 12 >> 2] | 0;d = 11088 + (g << 1 << 2) | 0;if ((e | 0) != (d | 0)) {
          if (e >>> 0 < i >>> 0) nb();if ((c[e + 12 >> 2] | 0) != (k | 0)) nb();
        }if ((f | 0) == (e | 0)) {
          c[2762] = c[2762] & ~(1 << g);break;
        }if ((f | 0) != (d | 0)) {
          if (f >>> 0 < i >>> 0) nb();d = f + 8 | 0;if ((c[d >> 2] | 0) == (k | 0)) h = d;else nb();
        } else h = f + 8 | 0;c[e + 12 >> 2] = f;c[h >> 2] = e;
      } while (0);d = n & 1;if (m >>> 0 < 16) {
        c[o >> 2] = l | d | 2;o = a + l + 4 | 0;c[o >> 2] = c[o >> 2] | 1;return a | 0;
      } else {
        n = a + b | 0;c[o >> 2] = d | b | 2;c[n + 4 >> 2] = m | 3;o = n + m + 4 | 0;c[o >> 2] = c[o >> 2] | 1;iF(n, m);return a | 0;
      }return 0;
    }function iF(a, b) {
      a = a | 0;b = b | 0;var d = 0,
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          l = 0,
          m = 0,
          n = 0,
          o = 0,
          p = 0,
          q = 0,
          r = 0;o = a + b | 0;d = c[a + 4 >> 2] | 0;a: do if (!(d & 1)) {
        g = c[a >> 2] | 0;if (!(d & 3)) return;l = a + (0 - g) | 0;k = g + b | 0;i = c[2766] | 0;if (l >>> 0 < i >>> 0) nb();if ((l | 0) == (c[2767] | 0)) {
          a = o + 4 | 0;d = c[a >> 2] | 0;if ((d & 3 | 0) != 3) {
            r = l;f = k;break;
          }c[2764] = k;c[a >> 2] = d & -2;c[l + 4 >> 2] = k | 1;c[l + k >> 2] = k;return;
        }e = g >>> 3;if (g >>> 0 < 256) {
          d = c[l + 8 >> 2] | 0;b = c[l + 12 >> 2] | 0;a = 11088 + (e << 1 << 2) | 0;if ((d | 0) != (a | 0)) {
            if (d >>> 0 < i >>> 0) nb();if ((c[d + 12 >> 2] | 0) != (l | 0)) nb();
          }if ((b | 0) == (d | 0)) {
            c[2762] = c[2762] & ~(1 << e);r = l;f = k;break;
          }if ((b | 0) != (a | 0)) {
            if (b >>> 0 < i >>> 0) nb();a = b + 8 | 0;if ((c[a >> 2] | 0) == (l | 0)) h = a;else nb();
          } else h = b + 8 | 0;c[d + 12 >> 2] = b;c[h >> 2] = d;r = l;f = k;break;
        }g = c[l + 24 >> 2] | 0;b = c[l + 12 >> 2] | 0;do if ((b | 0) == (l | 0)) {
          b = l + 16 | 0;d = b + 4 | 0;a = c[d >> 2] | 0;if (!a) {
            a = c[b >> 2] | 0;if (!a) {
              j = 0;break;
            } else d = b;
          }while (1) {
            b = a + 20 | 0;e = c[b >> 2] | 0;if (e | 0) {
              a = e;d = b;continue;
            }b = a + 16 | 0;e = c[b >> 2] | 0;if (!e) break;else {
              a = e;d = b;
            }
          }if (d >>> 0 < i >>> 0) nb();else {
            c[d >> 2] = 0;j = a;break;
          }
        } else {
          e = c[l + 8 >> 2] | 0;if (e >>> 0 < i >>> 0) nb();a = e + 12 | 0;if ((c[a >> 2] | 0) != (l | 0)) nb();d = b + 8 | 0;if ((c[d >> 2] | 0) == (l | 0)) {
            c[a >> 2] = b;c[d >> 2] = e;j = b;break;
          } else nb();
        } while (0);if (g) {
          a = c[l + 28 >> 2] | 0;d = 11352 + (a << 2) | 0;do if ((l | 0) == (c[d >> 2] | 0)) {
            c[d >> 2] = j;if (!j) {
              c[2763] = c[2763] & ~(1 << a);r = l;f = k;break a;
            }
          } else if (g >>> 0 >= (c[2766] | 0) >>> 0) {
            c[g + 16 + (((c[g + 16 >> 2] | 0) != (l | 0) & 1) << 2) >> 2] = j;if (!j) {
              r = l;f = k;break a;
            } else break;
          } else nb(); while (0);b = c[2766] | 0;if (j >>> 0 < b >>> 0) nb();c[j + 24 >> 2] = g;a = l + 16 | 0;d = c[a >> 2] | 0;do if (d | 0) if (d >>> 0 < b >>> 0) nb();else {
            c[j + 16 >> 2] = d;c[d + 24 >> 2] = j;break;
          } while (0);a = c[a + 4 >> 2] | 0;if (a) {
            if (a >>> 0 < (c[2766] | 0) >>> 0) nb();else {
              c[j + 20 >> 2] = a;c[a + 24 >> 2] = j;r = l;f = k;break;
            }
          } else {
            r = l;f = k;
          }
        } else {
          r = l;f = k;
        }
      } else {
        r = a;f = b;
      } while (0);h = c[2766] | 0;if (o >>> 0 < h >>> 0) nb();a = o + 4 | 0;d = c[a >> 2] | 0;if (!(d & 2)) {
        a = c[2767] | 0;if ((o | 0) == (c[2768] | 0)) {
          q = (c[2765] | 0) + f | 0;c[2765] = q;c[2768] = r;c[r + 4 >> 2] = q | 1;if ((r | 0) != (a | 0)) return;c[2767] = 0;c[2764] = 0;return;
        }if ((o | 0) == (a | 0)) {
          q = (c[2764] | 0) + f | 0;c[2764] = q;c[2767] = r;c[r + 4 >> 2] = q | 1;c[r + q >> 2] = q;return;
        }f = (d & -8) + f | 0;e = d >>> 3;b: do if (d >>> 0 >= 256) {
          g = c[o + 24 >> 2] | 0;b = c[o + 12 >> 2] | 0;do if ((b | 0) == (o | 0)) {
            b = o + 16 | 0;d = b + 4 | 0;a = c[d >> 2] | 0;if (!a) {
              a = c[b >> 2] | 0;if (!a) {
                n = 0;break;
              } else d = b;
            }while (1) {
              b = a + 20 | 0;e = c[b >> 2] | 0;if (e | 0) {
                a = e;d = b;continue;
              }b = a + 16 | 0;e = c[b >> 2] | 0;if (!e) break;else {
                a = e;d = b;
              }
            }if (d >>> 0 < h >>> 0) nb();else {
              c[d >> 2] = 0;n = a;break;
            }
          } else {
            e = c[o + 8 >> 2] | 0;if (e >>> 0 < h >>> 0) nb();a = e + 12 | 0;if ((c[a >> 2] | 0) != (o | 0)) nb();d = b + 8 | 0;if ((c[d >> 2] | 0) == (o | 0)) {
              c[a >> 2] = b;c[d >> 2] = e;n = b;break;
            } else nb();
          } while (0);if (g | 0) {
            a = c[o + 28 >> 2] | 0;d = 11352 + (a << 2) | 0;do if ((o | 0) == (c[d >> 2] | 0)) {
              c[d >> 2] = n;if (!n) {
                c[2763] = c[2763] & ~(1 << a);break b;
              }
            } else if (g >>> 0 >= (c[2766] | 0) >>> 0) {
              c[g + 16 + (((c[g + 16 >> 2] | 0) != (o | 0) & 1) << 2) >> 2] = n;if (!n) break b;else break;
            } else nb(); while (0);b = c[2766] | 0;if (n >>> 0 < b >>> 0) nb();c[n + 24 >> 2] = g;a = o + 16 | 0;d = c[a >> 2] | 0;do if (d | 0) if (d >>> 0 < b >>> 0) nb();else {
              c[n + 16 >> 2] = d;c[d + 24 >> 2] = n;break;
            } while (0);a = c[a + 4 >> 2] | 0;if (a | 0) if (a >>> 0 < (c[2766] | 0) >>> 0) nb();else {
              c[n + 20 >> 2] = a;c[a + 24 >> 2] = n;break;
            }
          }
        } else {
          d = c[o + 8 >> 2] | 0;b = c[o + 12 >> 2] | 0;a = 11088 + (e << 1 << 2) | 0;if ((d | 0) != (a | 0)) {
            if (d >>> 0 < h >>> 0) nb();if ((c[d + 12 >> 2] | 0) != (o | 0)) nb();
          }if ((b | 0) == (d | 0)) {
            c[2762] = c[2762] & ~(1 << e);break;
          }if ((b | 0) != (a | 0)) {
            if (b >>> 0 < h >>> 0) nb();a = b + 8 | 0;if ((c[a >> 2] | 0) == (o | 0)) m = a;else nb();
          } else m = b + 8 | 0;c[d + 12 >> 2] = b;c[m >> 2] = d;
        } while (0);c[r + 4 >> 2] = f | 1;c[r + f >> 2] = f;if ((r | 0) == (c[2767] | 0)) {
          c[2764] = f;return;
        }
      } else {
        c[a >> 2] = d & -2;c[r + 4 >> 2] = f | 1;c[r + f >> 2] = f;
      }a = f >>> 3;if (f >>> 0 < 256) {
        b = 11088 + (a << 1 << 2) | 0;d = c[2762] | 0;a = 1 << a;if (d & a) {
          a = b + 8 | 0;d = c[a >> 2] | 0;if (d >>> 0 < (c[2766] | 0) >>> 0) nb();else {
            p = d;q = a;
          }
        } else {
          c[2762] = d | a;p = b;q = b + 8 | 0;
        }c[q >> 2] = r;c[p + 12 >> 2] = r;c[r + 8 >> 2] = p;c[r + 12 >> 2] = b;return;
      }a = f >>> 8;if (a) {
        if (f >>> 0 > 16777215) a = 31;else {
          p = (a + 1048320 | 0) >>> 16 & 8;q = a << p;o = (q + 520192 | 0) >>> 16 & 4;q = q << o;a = (q + 245760 | 0) >>> 16 & 2;a = 14 - (o | p | a) + (q << a >>> 15) | 0;a = f >>> (a + 7 | 0) & 1 | a << 1;
        }
      } else a = 0;e = 11352 + (a << 2) | 0;c[r + 28 >> 2] = a;c[r + 20 >> 2] = 0;c[r + 16 >> 2] = 0;d = c[2763] | 0;b = 1 << a;if (!(d & b)) {
        c[2763] = d | b;c[e >> 2] = r;c[r + 24 >> 2] = e;c[r + 12 >> 2] = r;c[r + 8 >> 2] = r;return;
      }d = f << ((a | 0) == 31 ? 0 : 25 - (a >>> 1) | 0);e = c[e >> 2] | 0;while (1) {
        if ((c[e + 4 >> 2] & -8 | 0) == (f | 0)) {
          a = 121;break;
        }b = e + 16 + (d >>> 31 << 2) | 0;a = c[b >> 2] | 0;if (!a) {
          a = 118;break;
        } else {
          d = d << 1;e = a;
        }
      }if ((a | 0) == 118) {
        if (b >>> 0 < (c[2766] | 0) >>> 0) nb();c[b >> 2] = r;c[r + 24 >> 2] = e;c[r + 12 >> 2] = r;c[r + 8 >> 2] = r;return;
      } else if ((a | 0) == 121) {
        a = e + 8 | 0;d = c[a >> 2] | 0;q = c[2766] | 0;if (!(d >>> 0 >= q >>> 0 & e >>> 0 >= q >>> 0)) nb();c[d + 12 >> 2] = r;c[a >> 2] = r;c[r + 8 >> 2] = d;c[r + 12 >> 2] = e;c[r + 24 >> 2] = 0;return;
      }
    }function jF(a) {
      a = a | 0;Ma(8384, 8407, 304, 8477);
    }function kF(a) {
      a = a | 0;return;
    }function lF(a, b) {
      a = a | 0;b = b | 0;return 0;
    }function mF(a) {
      a = a | 0;if ((nF(a + 4 | 0) | 0) == -1) {
        xb[c[(c[a >> 2] | 0) + 8 >> 2] & 127](a);a = 1;
      } else a = 0;return a | 0;
    }function nF(a) {
      a = a | 0;var b = 0;b = c[a >> 2] | 0;c[a >> 2] = b + -1;return b + -1 | 0;
    }function oF(a) {
      a = a | 0;if (mF(a) | 0) pF(a);return;
    }function pF(a) {
      a = a | 0;if ((nF(a + 8 | 0) | 0) == -1) xb[c[(c[a >> 2] | 0) + 16 >> 2] & 127](a);return;
    }function qF(a) {
      a = a | 0;var b = 0;b = (a | 0) == 0 ? 1 : a;while (1) {
        a = eF(b) | 0;if (a | 0) break;a = tF() | 0;if (!a) {
          a = 0;break;
        }Pb[a & 0]();
      }return a | 0;
    }function rF(a) {
      a = a | 0;return qF(a) | 0;
    }function sF(a) {
      a = a | 0;fF(a);return;
    }function tF() {
      var a = 0;a = c[2886] | 0;c[2886] = a + 0;return a | 0;
    }function uF() {}function vF(a, b, c, d) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;d = b - d - (c >>> 0 > a >>> 0 | 0) >>> 0;return (E = d, a - c >>> 0 | 0) | 0;
    }function wF(a, b, c, d) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;c = a + c >>> 0;return (E = b + d + (c >>> 0 < a >>> 0 | 0) >>> 0, c | 0) | 0;
    }function xF(b, d, e) {
      b = b | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0,
          h = 0,
          i = 0;h = b + e | 0;d = d & 255;if ((e | 0) >= 67) {
        while (b & 3) {
          a[b >> 0] = d;b = b + 1 | 0;
        }f = h & -4 | 0;g = f - 64 | 0;i = d | d << 8 | d << 16 | d << 24;while ((b | 0) <= (g | 0)) {
          c[b >> 2] = i;c[b + 4 >> 2] = i;c[b + 8 >> 2] = i;c[b + 12 >> 2] = i;c[b + 16 >> 2] = i;c[b + 20 >> 2] = i;c[b + 24 >> 2] = i;c[b + 28 >> 2] = i;c[b + 32 >> 2] = i;c[b + 36 >> 2] = i;c[b + 40 >> 2] = i;c[b + 44 >> 2] = i;c[b + 48 >> 2] = i;c[b + 52 >> 2] = i;c[b + 56 >> 2] = i;c[b + 60 >> 2] = i;b = b + 64 | 0;
        }while ((b | 0) < (f | 0)) {
          c[b >> 2] = i;b = b + 4 | 0;
        }
      }while ((b | 0) < (h | 0)) {
        a[b >> 0] = d;b = b + 1 | 0;
      }return h - e | 0;
    }function yF(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;if ((c | 0) < 32) {
        E = b << c | (a & (1 << c) - 1 << 32 - c) >>> 32 - c;return a << c;
      }E = a << c - 32;return 0;
    }function zF(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;if ((c | 0) < 32) {
        E = b >>> c;return a >>> c | (b & (1 << c) - 1) << 32 - c;
      }E = 0;return b >>> c - 32 | 0;
    }function AF(b, d, e) {
      b = b | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0,
          h = 0;if ((e | 0) >= 8192) return Wa(b | 0, d | 0, e | 0) | 0;h = b | 0;g = b + e | 0;if ((b & 3) == (d & 3)) {
        while (b & 3) {
          if (!e) return h | 0;a[b >> 0] = a[d >> 0] | 0;b = b + 1 | 0;d = d + 1 | 0;e = e - 1 | 0;
        }e = g & -4 | 0;f = e - 64 | 0;while ((b | 0) <= (f | 0)) {
          c[b >> 2] = c[d >> 2];c[b + 4 >> 2] = c[d + 4 >> 2];c[b + 8 >> 2] = c[d + 8 >> 2];c[b + 12 >> 2] = c[d + 12 >> 2];c[b + 16 >> 2] = c[d + 16 >> 2];c[b + 20 >> 2] = c[d + 20 >> 2];c[b + 24 >> 2] = c[d + 24 >> 2];c[b + 28 >> 2] = c[d + 28 >> 2];c[b + 32 >> 2] = c[d + 32 >> 2];c[b + 36 >> 2] = c[d + 36 >> 2];c[b + 40 >> 2] = c[d + 40 >> 2];c[b + 44 >> 2] = c[d + 44 >> 2];c[b + 48 >> 2] = c[d + 48 >> 2];c[b + 52 >> 2] = c[d + 52 >> 2];c[b + 56 >> 2] = c[d + 56 >> 2];c[b + 60 >> 2] = c[d + 60 >> 2];b = b + 64 | 0;d = d + 64 | 0;
        }while ((b | 0) < (e | 0)) {
          c[b >> 2] = c[d >> 2];b = b + 4 | 0;d = d + 4 | 0;
        }
      } else {
        e = g - 4 | 0;while ((b | 0) < (e | 0)) {
          a[b >> 0] = a[d >> 0] | 0;a[b + 1 >> 0] = a[d + 1 >> 0] | 0;a[b + 2 >> 0] = a[d + 2 >> 0] | 0;a[b + 3 >> 0] = a[d + 3 >> 0] | 0;b = b + 4 | 0;d = d + 4 | 0;
        }
      }while ((b | 0) < (g | 0)) {
        a[b >> 0] = a[d >> 0] | 0;b = b + 1 | 0;d = d + 1 | 0;
      }return h | 0;
    }function BF(b) {
      b = b | 0;var c = 0;c = a[n + (b & 255) >> 0] | 0;if ((c | 0) < 8) return c | 0;c = a[n + (b >> 8 & 255) >> 0] | 0;if ((c | 0) < 8) return c + 8 | 0;c = a[n + (b >> 16 & 255) >> 0] | 0;if ((c | 0) < 8) return c + 16 | 0;return (a[n + (b >>> 24) >> 0] | 0) + 24 | 0;
    }function CF(a, b, d, e, f) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;f = f | 0;var g = 0,
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          l = 0,
          m = 0,
          n = 0,
          o = 0,
          p = 0;l = a;j = b;k = j;h = d;n = e;i = n;if (!k) {
        g = (f | 0) != 0;if (!i) {
          if (g) {
            c[f >> 2] = (l >>> 0) % (h >>> 0);c[f + 4 >> 2] = 0;
          }n = 0;f = (l >>> 0) / (h >>> 0) >>> 0;return (E = n, f) | 0;
        } else {
          if (!g) {
            n = 0;f = 0;return (E = n, f) | 0;
          }c[f >> 2] = a | 0;c[f + 4 >> 2] = b & 0;n = 0;f = 0;return (E = n, f) | 0;
        }
      }g = (i | 0) == 0;do if (h) {
        if (!g) {
          g = (W(i | 0) | 0) - (W(k | 0) | 0) | 0;if (g >>> 0 <= 31) {
            m = g + 1 | 0;i = 31 - g | 0;b = g - 31 >> 31;h = m;a = l >>> (m >>> 0) & b | k << i;b = k >>> (m >>> 0) & b;g = 0;i = l << i;break;
          }if (!f) {
            n = 0;f = 0;return (E = n, f) | 0;
          }c[f >> 2] = a | 0;c[f + 4 >> 2] = j | b & 0;n = 0;f = 0;return (E = n, f) | 0;
        }g = h - 1 | 0;if (g & h | 0) {
          i = (W(h | 0) | 0) + 33 - (W(k | 0) | 0) | 0;p = 64 - i | 0;m = 32 - i | 0;j = m >> 31;o = i - 32 | 0;b = o >> 31;h = i;a = m - 1 >> 31 & k >>> (o >>> 0) | (k << m | l >>> (i >>> 0)) & b;b = b & k >>> (i >>> 0);g = l << p & j;i = (k << p | l >>> (o >>> 0)) & j | l << m & i - 33 >> 31;break;
        }if (f | 0) {
          c[f >> 2] = g & l;c[f + 4 >> 2] = 0;
        }if ((h | 0) == 1) {
          o = j | b & 0;p = a | 0 | 0;return (E = o, p) | 0;
        } else {
          p = BF(h | 0) | 0;o = k >>> (p >>> 0) | 0;p = k << 32 - p | l >>> (p >>> 0) | 0;return (E = o, p) | 0;
        }
      } else {
        if (g) {
          if (f | 0) {
            c[f >> 2] = (k >>> 0) % (h >>> 0);c[f + 4 >> 2] = 0;
          }o = 0;p = (k >>> 0) / (h >>> 0) >>> 0;return (E = o, p) | 0;
        }if (!l) {
          if (f | 0) {
            c[f >> 2] = 0;c[f + 4 >> 2] = (k >>> 0) % (i >>> 0);
          }o = 0;p = (k >>> 0) / (i >>> 0) >>> 0;return (E = o, p) | 0;
        }g = i - 1 | 0;if (!(g & i)) {
          if (f | 0) {
            c[f >> 2] = a | 0;c[f + 4 >> 2] = g & k | b & 0;
          }o = 0;p = k >>> ((BF(i | 0) | 0) >>> 0);return (E = o, p) | 0;
        }g = (W(i | 0) | 0) - (W(k | 0) | 0) | 0;if (g >>> 0 <= 30) {
          b = g + 1 | 0;i = 31 - g | 0;h = b;a = k << i | l >>> (b >>> 0);b = k >>> (b >>> 0);g = 0;i = l << i;break;
        }if (!f) {
          o = 0;p = 0;return (E = o, p) | 0;
        }c[f >> 2] = a | 0;c[f + 4 >> 2] = j | b & 0;o = 0;p = 0;return (E = o, p) | 0;
      } while (0);if (!h) {
        k = i;j = 0;i = 0;
      } else {
        m = d | 0 | 0;l = n | e & 0;k = wF(m | 0, l | 0, -1, -1) | 0;d = E;j = i;i = 0;do {
          e = j;j = g >>> 31 | j << 1;g = i | g << 1;e = a << 1 | e >>> 31 | 0;n = a >>> 31 | b << 1 | 0;vF(k | 0, d | 0, e | 0, n | 0) | 0;p = E;o = p >> 31 | ((p | 0) < 0 ? -1 : 0) << 1;i = o & 1;a = vF(e | 0, n | 0, o & m | 0, (((p | 0) < 0 ? -1 : 0) >> 31 | ((p | 0) < 0 ? -1 : 0) << 1) & l | 0) | 0;b = E;h = h - 1 | 0;
        } while ((h | 0) != 0);k = j;j = 0;
      }h = 0;if (f | 0) {
        c[f >> 2] = a;c[f + 4 >> 2] = b;
      }o = (g | 0) >>> 31 | (k | h) << 1 | (h << 1 | g >>> 31) & 0 | j;p = (g << 1 | 0 >>> 31) & -2 | i;return (E = o, p) | 0;
    }function DF(a, b, c, d) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;return CF(a, b, c, d, 0) | 0;
    }function EF(a) {
      a = a | 0;var b = 0,
          d = 0;d = a + 15 & -16 | 0;b = c[i >> 2] | 0;a = b + d | 0;if ((d | 0) > 0 & (a | 0) < (b | 0) | (a | 0) < 0) {
        aa() | 0;Ya(12);return -1;
      }c[i >> 2] = a;if ((a | 0) > ($() | 0) ? (_() | 0) == 0 : 0) {
        Ya(12);c[i >> 2] = b;return -1;
      }return b | 0;
    }function FF(a, b, d, e) {
      a = a | 0;b = b | 0;d = d | 0;e = e | 0;var f = 0,
          g = 0;g = l;l = l + 16 | 0;f = g | 0;CF(a, b, d, e, f) | 0;l = g;return (E = c[f + 4 >> 2] | 0, c[f >> 2] | 0) | 0;
    }function GF(a) {
      a = a | 0;return (a & 255) << 24 | (a >> 8 & 255) << 16 | (a >> 16 & 255) << 8 | a >>> 24 | 0;
    }function HF(a, b, c, d, e, f) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;e = e | 0;f = f | 0;ub[a & 1](b | 0, c | 0, d | 0, e | 0, f | 0);
    }function IF(a, b, c) {
      a = a | 0;b = b | 0;c = +c;vb[a & 31](b | 0, +c);
    }function JF(a, b, c, d) {
      a = a | 0;b = b | 0;c = X(c);d = X(d);return X(wb[a & 0](b | 0, X(c), X(d)));
    }function KF(a, b) {
      a = a | 0;b = b | 0;xb[a & 127](b | 0);
    }function LF(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;yb[a & 31](b | 0, c | 0);
    }function MF(a, b) {
      a = a | 0;b = b | 0;return zb[a & 31](b | 0) | 0;
    }function NF(a, b, c, d, e) {
      a = a | 0;b = b | 0;c = +c;d = +d;e = e | 0;Ab[a & 1](b | 0, +c, +d, e | 0);
    }function OF(a, b, c, d) {
      a = a | 0;b = b | 0;c = +c;d = +d;Bb[a & 1](b | 0, +c, +d);
    }function PF(a, b, c, d) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;return Cb[a & 15](b | 0, c | 0, d | 0) | 0;
    }function QF(a, b, c, d) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;return +Db[a & 1](b | 0, c | 0, d | 0);
    }function RF(a, b) {
      a = a | 0;b = b | 0;return +Eb[a & 15](b | 0);
    }function SF(a, b, c) {
      a = a | 0;b = b | 0;c = +c;return Fb[a & 1](b | 0, +c) | 0;
    }function TF(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;return Gb[a & 15](b | 0, c | 0) | 0;
    }function UF(a, b, c, d, e, f) {
      a = a | 0;b = b | 0;c = c | 0;d = +d;e = +e;f = f | 0;Hb[a & 1](b | 0, c | 0, +d, +e, f | 0);
    }function VF(a, b, c, d, e, f, g) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;e = e | 0;f = f | 0;g = g | 0;Ib[a & 1](b | 0, c | 0, d | 0, e | 0, f | 0, g | 0);
    }function WF(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;return +Jb[a & 7](b | 0, c | 0);
    }function XF(a) {
      a = a | 0;return Kb[a & 7]() | 0;
    }function YF(a, b, c, d, e, f) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;e = e | 0;f = f | 0;return Lb[a & 1](b | 0, c | 0, d | 0, e | 0, f | 0) | 0;
    }function ZF(a, b, c, d, e) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;e = +e;Mb[a & 1](b | 0, c | 0, d | 0, +e);
    }function _F(a, b, c, d, e, f, g) {
      a = a | 0;b = b | 0;c = c | 0;d = X(d);e = e | 0;f = X(f);g = g | 0;Nb[a & 1](b | 0, c | 0, X(d), e | 0, X(f), g | 0);
    }function $F(a, b, c, d) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;Ob[a & 15](b | 0, c | 0, d | 0);
    }function aG(a) {
      a = a | 0;Pb[a & 0]();
    }function bG(a, b, c, d) {
      a = a | 0;b = b | 0;c = c | 0;d = +d;Qb[a & 15](b | 0, c | 0, +d);
    }function cG(a, b, c) {
      a = a | 0;b = +b;c = +c;return Rb[a & 1](+b, +c) | 0;
    }function dG(a, b, c, d, e) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;e = e | 0;Sb[a & 15](b | 0, c | 0, d | 0, e | 0);
    }function eG(a, b, c, d, e) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;e = e | 0;Y(0);
    }function fG(a, b) {
      a = a | 0;b = +b;Y(1);
    }function gG(a, b, c) {
      a = a | 0;b = X(b);c = X(c);Y(2);return tb;
    }function hG(a) {
      a = a | 0;Y(3);
    }function iG(a, b) {
      a = a | 0;b = b | 0;Y(4);
    }function jG(a) {
      a = a | 0;Y(5);return 0;
    }function kG(a, b, c, d) {
      a = a | 0;b = +b;c = +c;d = d | 0;Y(6);
    }function lG(a, b, c) {
      a = a | 0;b = +b;c = +c;Y(7);
    }function mG(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;Y(8);return 0;
    }function nG(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;Y(9);return 0.0;
    }function oG(a) {
      a = a | 0;Y(10);return 0.0;
    }function pG(a, b) {
      a = a | 0;b = +b;Y(11);return 0;
    }function qG(a, b) {
      a = a | 0;b = b | 0;Y(12);return 0;
    }function rG(a, b, c, d, e) {
      a = a | 0;b = b | 0;c = +c;d = +d;e = e | 0;Y(13);
    }function sG(a, b, c, d, e, f) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;e = e | 0;f = f | 0;Y(14);
    }function tG(a, b) {
      a = a | 0;b = b | 0;Y(15);return 0.0;
    }function uG() {
      Y(16);return 0;
    }function vG(a, b, c, d, e) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;e = e | 0;Y(17);return 0;
    }function wG(a, b, c, d) {
      a = a | 0;b = b | 0;c = c | 0;d = +d;Y(18);
    }function xG(a, b, c, d, e, f) {
      a = a | 0;b = b | 0;c = X(c);d = d | 0;e = X(e);f = f | 0;Y(19);
    }function yG(a, b, c) {
      a = a | 0;b = b | 0;c = c | 0;Y(20);
    }function zG() {
      Y(21);
    }function AG(a, b, c) {
      a = a | 0;b = b | 0;c = +c;Y(22);
    }function BG(a, b) {
      a = +a;b = +b;Y(23);return 0;
    }function CG(a, b, c, d) {
      a = a | 0;b = b | 0;c = c | 0;d = d | 0;Y(24);
    }

    // EMSCRIPTEN_END_FUNCS
    var ub = [eG, jz];var vb = [fG, Rf, Sf, Tf, Uf, Vf, Wf, Xf, Zf, _f, ag, bg, cg, dg, eg, fg, gg, hg, ig, fG, fG, fG, fG, fG, fG, fG, fG, fG, fG, fG, fG, fG];var wb = [gG];var xb = [hG, fF, kF, Si, Ti, Ui, Bo, Co, Do, Rw, Sw, Tw, Ny, Oy, Py, rD, sD, tD, wf, Bf, Yf, $f, kh, lh, zi, aj, xj, $j, yk, $k, Bl, Zl, wm, Xm, un, Sn, po, ap, yp, Wp, sq, Qq, mr, Nr, is, Es, ct, pf, Qt, mu, Mu, hv, Ev, Qv, Tv, lw, ow, Gw, Ww, Zw, rx, Rx, bj, qA, eB, BB, YB, AC, XC, hD, kD, hG, hG, hG, hG, hG, hG, hG, hG, hG, hG, hG, hG, hG, hG, hG, hG, hG, hG, hG, hG, hG, hG, hG, hG, hG, hG, hG, hG, hG, hG, hG, hG, hG, hG, hG, hG, hG, hG, hG, hG, hG, hG, hG, hG, hG, hG, hG, hG, hG, hG, hG, hG, hG, hG, hG, hG, hG];var yb = [iG, Cf, Df, Gf, Hf, If, Jf, Kf, Lf, Of, Pf, Qf, zg, Cg, Dg, Eg, Fg, Gg, Hg, Mg, Qg, uh, Rr, ls, Qu, tA, Zx, OA, iG, iG, iG, iG];var zb = [jG, eF, dE, vf, mg, qg, rg, sg, tg, ug, vg, xg, yg, Ng, Og, mh, ft, lv, ux, yA, AA, jG, jG, jG, jG, jG, jG, jG, jG, jG, jG, jG];var Ab = [kG, nh];var Bb = [lG, Jw];var Cb = [mG, eE, fE, lE, RE, dl, ep, Ut, aC, mG, mG, mG, mG, mG, mG, mG];var Db = [nG, yn];var Eb = [oG, Ag, Bg, Ig, oh, ph, qh, rh, sh, th, oG, oG, oG, oG, oG, oG];var Fb = [pG, Mv];var Gb = [qG, gF, lF, Pg, Fi, dk, Fl, bm, to, Cp, Is, sf, Mz, FB, qG, qG];var Hb = [rG, Bj];var Ib = [sG, EC];var Jb = [tG, Jg, vh, wh, xh, Wn, tG, tG];var Kb = [uG, yh, tf, nf, Yv, sw, cx, oD];var Lb = [vG, jc];var Mb = [wG, wq];var Nb = [xG, Sg];var Ob = [yG, ng, wg, Kg, Lg, Ck, Am, Uq, qr, rf, iB, $C, yG, yG, yG, yG];var Pb = [zG];var Qb = [AG, Ef, Ff, Mf, Nf, jg, kg, lg, _p, Hv, AG, AG, AG, AG, AG, AG];var Rb = [BG, Ow];var Sb = [CG, $m, nt, qu, uv, cw, yw, jx, Wx, FA, zD, CG, CG, CG, CG, CG];return { _nbind_init: OD, _sbrk: EF, _i64Subtract: vF, _free: fF, ___udivmoddi4: CF, _i64Add: wF, _memset: xF, _llvm_cttz_i32: BF, _malloc: eF, _emscripten_get_global_libc: cE, _memcpy: AF, _bitshift64Lshr: zF, ___udivdi3: DF, ___uremdi3: FF, _llvm_bswap_i32: GF, _bitshift64Shl: yF, __GLOBAL__sub_I_nbind_cc: zh, __GLOBAL__sub_I_common_cc: Ix, __GLOBAL__sub_I_Binding_cc: hA, runPostSets: uF, stackAlloc: Tb, stackSave: Ub, stackRestore: Vb, establishStackSpace: Wb, setTempRet0: Yb, getTempRet0: Zb, setThrew: Xb, stackAlloc: Tb, stackSave: Ub, stackRestore: Vb, establishStackSpace: Wb, setThrew: Xb, setTempRet0: Yb, getTempRet0: Zb, dynCall_viiiii: HF, dynCall_vid: IF, dynCall_fiff: JF, dynCall_vi: KF, dynCall_vii: LF, dynCall_ii: MF, dynCall_viddi: NF, dynCall_vidd: OF, dynCall_iiii: PF, dynCall_diii: QF, dynCall_di: RF, dynCall_iid: SF, dynCall_iii: TF, dynCall_viiddi: UF, dynCall_viiiiii: VF, dynCall_dii: WF, dynCall_i: XF, dynCall_iiiiii: YF, dynCall_viiid: ZF, dynCall_viififi: _F, dynCall_viii: $F, dynCall_v: aG, dynCall_viid: bG, dynCall_idd: cG, dynCall_viiii: dG };
  }(

  // EMSCRIPTEN_END_ASM
  Module.asmGlobalArg, Module.asmLibraryArg, buffer);var _llvm_bswap_i32 = Module["_llvm_bswap_i32"] = asm["_llvm_bswap_i32"];var getTempRet0 = Module["getTempRet0"] = asm["getTempRet0"];var _llvm_cttz_i32 = Module["_llvm_cttz_i32"] = asm["_llvm_cttz_i32"];var setThrew = Module["setThrew"] = asm["setThrew"];var _bitshift64Lshr = Module["_bitshift64Lshr"] = asm["_bitshift64Lshr"];var _bitshift64Shl = Module["_bitshift64Shl"] = asm["_bitshift64Shl"];var _memset = Module["_memset"] = asm["_memset"];var _sbrk = Module["_sbrk"] = asm["_sbrk"];var _memcpy = Module["_memcpy"] = asm["_memcpy"];var stackAlloc = Module["stackAlloc"] = asm["stackAlloc"];var ___uremdi3 = Module["___uremdi3"] = asm["___uremdi3"];var _nbind_init = Module["_nbind_init"] = asm["_nbind_init"];var _i64Subtract = Module["_i64Subtract"] = asm["_i64Subtract"];var ___udivmoddi4 = Module["___udivmoddi4"] = asm["___udivmoddi4"];var setTempRet0 = Module["setTempRet0"] = asm["setTempRet0"];var _i64Add = Module["_i64Add"] = asm["_i64Add"];var _emscripten_get_global_libc = Module["_emscripten_get_global_libc"] = asm["_emscripten_get_global_libc"];var __GLOBAL__sub_I_Binding_cc = Module["__GLOBAL__sub_I_Binding_cc"] = asm["__GLOBAL__sub_I_Binding_cc"];var ___udivdi3 = Module["___udivdi3"] = asm["___udivdi3"];var stackSave = Module["stackSave"] = asm["stackSave"];var __GLOBAL__sub_I_nbind_cc = Module["__GLOBAL__sub_I_nbind_cc"] = asm["__GLOBAL__sub_I_nbind_cc"];var _free = Module["_free"] = asm["_free"];var runPostSets = Module["runPostSets"] = asm["runPostSets"];var establishStackSpace = Module["establishStackSpace"] = asm["establishStackSpace"];var stackRestore = Module["stackRestore"] = asm["stackRestore"];var _malloc = Module["_malloc"] = asm["_malloc"];var __GLOBAL__sub_I_common_cc = Module["__GLOBAL__sub_I_common_cc"] = asm["__GLOBAL__sub_I_common_cc"];var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];var dynCall_vid = Module["dynCall_vid"] = asm["dynCall_vid"];var dynCall_fiff = Module["dynCall_fiff"] = asm["dynCall_fiff"];var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];var dynCall_viddi = Module["dynCall_viddi"] = asm["dynCall_viddi"];var dynCall_vidd = Module["dynCall_vidd"] = asm["dynCall_vidd"];var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];var dynCall_diii = Module["dynCall_diii"] = asm["dynCall_diii"];var dynCall_di = Module["dynCall_di"] = asm["dynCall_di"];var dynCall_iid = Module["dynCall_iid"] = asm["dynCall_iid"];var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];var dynCall_viiddi = Module["dynCall_viiddi"] = asm["dynCall_viiddi"];var dynCall_viiiiii = Module["dynCall_viiiiii"] = asm["dynCall_viiiiii"];var dynCall_dii = Module["dynCall_dii"] = asm["dynCall_dii"];var dynCall_i = Module["dynCall_i"] = asm["dynCall_i"];var dynCall_iiiiii = Module["dynCall_iiiiii"] = asm["dynCall_iiiiii"];var dynCall_viiid = Module["dynCall_viiid"] = asm["dynCall_viiid"];var dynCall_viififi = Module["dynCall_viififi"] = asm["dynCall_viififi"];var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];var dynCall_viid = Module["dynCall_viid"] = asm["dynCall_viid"];var dynCall_idd = Module["dynCall_idd"] = asm["dynCall_idd"];var dynCall_viiii = Module["dynCall_viiii"] = asm["dynCall_viiii"];Runtime.stackAlloc = Module["stackAlloc"];Runtime.stackSave = Module["stackSave"];Runtime.stackRestore = Module["stackRestore"];Runtime.establishStackSpace = Module["establishStackSpace"];Runtime.setTempRet0 = Module["setTempRet0"];Runtime.getTempRet0 = Module["getTempRet0"];Module["asm"] = asm;function ExitStatus(status) {
    this.name = "ExitStatus";this.message = "Program terminated with exit(" + status + ")";this.status = status;
  }ExitStatus.prototype = new Error();ExitStatus.prototype.constructor = ExitStatus;var initialStackTop;var preloadStartTime = null;var calledMain = false;dependenciesFulfilled = function runCaller() {
    if (!Module["calledRun"]) run();if (!Module["calledRun"]) dependenciesFulfilled = runCaller;
  };Module["callMain"] = Module.callMain = function callMain(args) {
    args = args || [];ensureInitRuntime();var argc = args.length + 1;function pad() {
      for (var i = 0; i < 4 - 1; i++) {
        argv.push(0);
      }
    }var argv = [allocate(intArrayFromString(Module["thisProgram"]), "i8", ALLOC_NORMAL)];pad();for (var i = 0; i < argc - 1; i = i + 1) {
      argv.push(allocate(intArrayFromString(args[i]), "i8", ALLOC_NORMAL));pad();
    }argv.push(0);argv = allocate(argv, "i32", ALLOC_NORMAL);try {
      var ret = Module["_main"](argc, argv, 0);exit(ret, true);
    } catch (e) {
      if (e instanceof ExitStatus) {
        return;
      } else if (e == "SimulateInfiniteLoop") {
        Module["noExitRuntime"] = true;return;
      } else {
        var toLog = e;if (e && typeof e === "object" && e.stack) {
          toLog = [e, e.stack];
        }Module.printErr("exception thrown: " + toLog);Module["quit"](1, e);
      }
    } finally {
      calledMain = true;
    }
  };function run(args) {
    args = args || Module["arguments"];if (preloadStartTime === null) preloadStartTime = Date.now();if (runDependencies > 0) {
      return;
    }preRun();if (runDependencies > 0) return;if (Module["calledRun"]) return;function doRun() {
      if (Module["calledRun"]) return;Module["calledRun"] = true;if (ABORT) return;ensureInitRuntime();preMain();if (Module["onRuntimeInitialized"]) Module["onRuntimeInitialized"]();if (Module["_main"] && shouldRunNow) Module["callMain"](args);postRun();
    }if (Module["setStatus"]) {
      Module["setStatus"]("Running...");setTimeout(function () {
        setTimeout(function () {
          Module["setStatus"]("");
        }, 1);doRun();
      }, 1);
    } else {
      doRun();
    }
  }Module["run"] = Module.run = run;function exit(status, implicit) {
    if (implicit && Module["noExitRuntime"]) {
      return;
    }if (Module["noExitRuntime"]) {} else {
      ABORT = true;EXITSTATUS = status;STACKTOP = initialStackTop;exitRuntime();if (Module["onExit"]) Module["onExit"](status);
    }if (ENVIRONMENT_IS_NODE) {
      process["exit"](status);
    }Module["quit"](status, new ExitStatus(status));
  }Module["exit"] = Module.exit = exit;var abortDecorators = [];function abort(what) {
    if (what !== undefined) {
      Module.print(what);Module.printErr(what);what = JSON.stringify(what);
    } else {
      what = "";
    }ABORT = true;EXITSTATUS = 1;var extra = "\nIf this abort() is unexpected, build with -s ASSERTIONS=1 which can give more information.";var output = "abort(" + what + ") at " + stackTrace() + extra;if (abortDecorators) {
      abortDecorators.forEach(function (decorator) {
        output = decorator(output, what);
      });
    }throw output;
  }Module["abort"] = Module.abort = abort;if (Module["preInit"]) {
    if (typeof Module["preInit"] == "function") Module["preInit"] = [Module["preInit"]];while (Module["preInit"].length > 0) {
      Module["preInit"].pop()();
    }
  }var shouldRunNow = true;if (Module["noInitialRun"]) {
    shouldRunNow = false;
  }run();
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6), __webpack_require__(3).Buffer))

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

function patch(prototype, name, fn) {

    let original = prototype[name];

    prototype[name] = function (... args) {
        return fn.call(this, original, ... args);
    };

}

module.exports = function (bind, lib) {

    let constants = Object.assign({

        UNDEFINED: NaN

    }, __webpack_require__(8));

    class Layout {

        constructor(left, right, top, bottom, width, height) {

            this.left = left;
            this.right = right;

            this.top = top;
            this.bottom = bottom;

            this.width = width;
            this.height = height;

        }

        fromJS(expose) {

            expose(this.left, this.right, this.top, this.bottom, this.width, this.height);

        }

        toString() {

            return `<Layout#${this.left}:${this.right};${this.top}:${this.bottom};${this.width}:${this.height}>`;

        }

    }

    class Size {

        static fromJS({ width, height }) {

            return new Size(width, height);

        }

        constructor(width, height) {

            this.width = width;
            this.height = height;

        }

        fromJS(expose) {

            expose(this.width, this.height);

        }

        toString() {

            return `<Size#${this.width}x${this.height}>`;

        }

    }

    class Value {

        constructor(unit, value) {

            this.unit = unit;
            this.value = value;

        }

        fromJS(expose) {

            expose(this.unit, this.value);

        }

        toString() {

            switch (this.unit) {

                case constants.UNIT_POINT:
                    return `${this.value}`;

                case constants.UNIT_PERCENT:
                    return `${this.value}%`;

                case constants.UNIT_AUTO:
                    return `auto`;

                default: {
                    return `${this.value}?`;
                }

            }

        }

        valueOf() {

            return this.value;

        }

    }

    for (let fnName of [ `setPosition`, `setMargin`, `setFlexBasis`, `setWidth`, `setHeight`, `setMinWidth`, `setMinHeight`, `setMaxWidth`, `setMaxHeight`, `setPadding` ]) {

        let methods = { [constants.UNIT_POINT]: lib.Node.prototype[fnName], [constants.UNIT_PERCENT]: lib.Node.prototype[`${fnName}Percent`], [constants.UNIT_AUTO]: lib.Node.prototype[`${fnName}Auto`] };

        patch(lib.Node.prototype, fnName, function (original, ... args) {

            // We patch all these functions to add support for the following calls:
            // .setWidth(100) / .setWidth("100%") / .setWidth(.getWidth()) / .setWidth("auto")

            let value = args.pop();
            let unit, asNumber;

            if (value === `auto`) {

                unit = constants.UNIT_AUTO;
                asNumber = undefined;

            } else if (value instanceof Value) {

                unit = value.unit;
                asNumber = value.valueOf();

            } else {

                unit = typeof value === `string` && value.endsWith(`%`) ? constants.UNIT_PERCENT : constants.UNIT_POINT;
                asNumber = parseFloat(value);

            }

            if (!Object.prototype.hasOwnProperty.call(methods, unit))
                throw new Error(`Failed to execute "${fnName}": Unsupported unit.`);

            if (asNumber !== undefined) {
                return methods[unit].call(this, ... args, asNumber);
            } else {
                return methods[unit].call(this, ... args);
            }

        });

    }

    patch(lib.Config.prototype, `free`, function () {

        // Since we handle the memory allocation ourselves (via lib.Config.create), we also need to handle the deallocation

	lib.Config.destroy(this);

    });

    patch(lib.Node, `create`, function (_, config) {

        // We decide the constructor we want to call depending on the parameters

        return config ? lib.Node.createWithConfig(config) : lib.Node.createDefault();

    });

    patch(lib.Node.prototype, `free`, function () {

        // Since we handle the memory allocation ourselves (via lib.Node.create), we also need to handle the deallocation

        lib.Node.destroy(this);

    });

    patch(lib.Node.prototype, `freeRecursive`, function () {

        for (let t = 0, T = this.getChildCount(); t < T; ++t)
            this.getChild(0).freeRecursive();

        this.free();

    });

    patch(lib.Node.prototype, `setMeasureFunc`, function (original, measureFunc) {

        // This patch is just a convenience patch, since it helps write more idiomatic source code (such as .setMeasureFunc(null))
        // We also automatically convert the return value of the measureFunc to a Size object, so that we can return anything that has .width and .height properties

        if (measureFunc) {
            return original.call(this, (... args) => Size.fromJS(measureFunc(... args)));
        } else {
            return this.unsetMeasureFunc();
        }

    });

    patch(lib.Node.prototype, `calculateLayout`, function (original, width = constants.UNDEFINED, height = constants.UNDEFINED, direction = constants.DIRECTION_LTR) {

        // Just a small patch to add support for the function default parameters

        return original.call(this, width, height, direction);

    });

    function getInstanceCount(... args) {

        return lib.getInstanceCount(... args);

    }

    bind(`Layout`, Layout);
    bind(`Size`, Size);
    bind(`Value`, Value);

    return Object.assign({

	Config: lib.Config,
        Node: lib.Node,

        Layout,
        Size,
        Value,

        getInstanceCount

    }, constants);

};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function placeHoldersCount (b64) {
  var len = b64.length
  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice
  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
}

function byteLength (b64) {
  // base64 is 4/3 + up to two characters of the original data
  return (b64.length * 3 / 4) - placeHoldersCount(b64)
}

function toByteArray (b64) {
  var i, l, tmp, placeHolders, arr
  var len = b64.length
  placeHolders = placeHoldersCount(b64)

  arr = new Arr((len * 3 / 4) - placeHolders)

  // if there are placeholders, only get up to the last complete 4 chars
  l = placeHolders > 0 ? len - 4 : len

  var L = 0

  for (i = 0; i < l; i += 4) {
    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
    arr[L++] = (tmp >> 16) & 0xFF
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  if (placeHolders === 2) {
    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[L++] = tmp & 0xFF
  } else if (placeHolders === 1) {
    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var output = ''
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    output += lookup[tmp >> 2]
    output += lookup[(tmp << 4) & 0x3F]
    output += '=='
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
    output += lookup[tmp >> 10]
    output += lookup[(tmp >> 4) & 0x3F]
    output += lookup[(tmp << 2) & 0x3F]
    output += '='
  }

  parts.push(output)

  return parts.join('')
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(2)
var ieee754 = __webpack_require__(4)
var isArray = __webpack_require__(5)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),
/* 4 */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 6 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 7 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 8 */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

module.exports = {

  ALIGN_COUNT: 8,
  ALIGN_AUTO: 0,
  ALIGN_FLEX_START: 1,
  ALIGN_CENTER: 2,
  ALIGN_FLEX_END: 3,
  ALIGN_STRETCH: 4,
  ALIGN_BASELINE: 5,
  ALIGN_SPACE_BETWEEN: 6,
  ALIGN_SPACE_AROUND: 7,

  DIMENSION_COUNT: 2,
  DIMENSION_WIDTH: 0,
  DIMENSION_HEIGHT: 1,

  DIRECTION_COUNT: 3,
  DIRECTION_INHERIT: 0,
  DIRECTION_LTR: 1,
  DIRECTION_RTL: 2,

  DISPLAY_COUNT: 2,
  DISPLAY_FLEX: 0,
  DISPLAY_NONE: 1,

  EDGE_COUNT: 9,
  EDGE_LEFT: 0,
  EDGE_TOP: 1,
  EDGE_RIGHT: 2,
  EDGE_BOTTOM: 3,
  EDGE_START: 4,
  EDGE_END: 5,
  EDGE_HORIZONTAL: 6,
  EDGE_VERTICAL: 7,
  EDGE_ALL: 8,

  EXPERIMENTAL_FEATURE_COUNT: 1,
  EXPERIMENTAL_FEATURE_WEB_FLEX_BASIS: 0,

  FLEX_DIRECTION_COUNT: 4,
  FLEX_DIRECTION_COLUMN: 0,
  FLEX_DIRECTION_COLUMN_REVERSE: 1,
  FLEX_DIRECTION_ROW: 2,
  FLEX_DIRECTION_ROW_REVERSE: 3,

  JUSTIFY_COUNT: 5,
  JUSTIFY_FLEX_START: 0,
  JUSTIFY_CENTER: 1,
  JUSTIFY_FLEX_END: 2,
  JUSTIFY_SPACE_BETWEEN: 3,
  JUSTIFY_SPACE_AROUND: 4,

  LOG_LEVEL_COUNT: 6,
  LOG_LEVEL_ERROR: 0,
  LOG_LEVEL_WARN: 1,
  LOG_LEVEL_INFO: 2,
  LOG_LEVEL_DEBUG: 3,
  LOG_LEVEL_VERBOSE: 4,
  LOG_LEVEL_FATAL: 5,

  MEASURE_MODE_COUNT: 3,
  MEASURE_MODE_UNDEFINED: 0,
  MEASURE_MODE_EXACTLY: 1,
  MEASURE_MODE_AT_MOST: 2,

  NODE_TYPE_COUNT: 2,
  NODE_TYPE_DEFAULT: 0,
  NODE_TYPE_TEXT: 1,

  OVERFLOW_COUNT: 3,
  OVERFLOW_VISIBLE: 0,
  OVERFLOW_HIDDEN: 1,
  OVERFLOW_SCROLL: 2,

  POSITION_TYPE_COUNT: 2,
  POSITION_TYPE_RELATIVE: 0,
  POSITION_TYPE_ABSOLUTE: 1,

  PRINT_OPTIONS_COUNT: 3,
  PRINT_OPTIONS_LAYOUT: 1,
  PRINT_OPTIONS_STYLE: 2,
  PRINT_OPTIONS_CHILDREN: 4,

  UNIT_COUNT: 4,
  UNIT_UNDEFINED: 0,
  UNIT_POINT: 1,
  UNIT_PERCENT: 2,
  UNIT_AUTO: 3,

  WRAP_COUNT: 3,
  WRAP_NO_WRAP: 0,
  WRAP_WRAP: 1,
  WRAP_WRAP_REVERSE: 2,

};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

var nbind = __webpack_require__(0);

var ran = false;
var ret = null;

nbind({}, function (err, result) {

    if (ran)
        return;

    ran = true;

    if (err)
        throw err;

    ret = result;

});

if (!ran)
    throw new Error('Failed to load the yoga module - it needed to be loaded synchronously, but didn\'t');

module.exports = __webpack_require__(1)(ret.bind, ret.lib);


/***/ })
/******/ ]);
});
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return initGallery; });
/* harmony import */ var _src_lib_store_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/lib/store.js */ "./src/lib/store.js");
/* harmony import */ var _src_lib_router_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/lib/router.js */ "./src/lib/router.js");
/* harmony import */ var _src_lib_logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/lib/logger.js */ "./src/lib/logger.js");
/* harmony import */ var _src_initialState_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/initialState.js */ "./src/initialState.js");
/* harmony import */ var _src_components_Gallery_Gallery_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/components/Gallery/Gallery.js */ "./src/components/Gallery/Gallery.js");
/* harmony import */ var _src_components_Gallery_actions_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/components/Gallery/actions.js */ "./src/components/Gallery/actions.js");






var routes = [{
  url: "/"
}, {
  url: "/Image/:imageId"
}, {
  url: "404",
  redirect: "/"
}];
function initGallery() {
  Object(_src_lib_store_js__WEBPACK_IMPORTED_MODULE_0__["initStore"])([_src_components_Gallery_actions_js__WEBPACK_IMPORTED_MODULE_5__["reducers"]], _src_initialState_js__WEBPACK_IMPORTED_MODULE_3__["initialState"]);
  Object(_src_lib_router_js__WEBPACK_IMPORTED_MODULE_1__["initRouter"])(routes, BASE_URL || '');
  var gallery = new _src_components_Gallery_Gallery_js__WEBPACK_IMPORTED_MODULE_4__["default"]('Gallery');
}
document.addEventListener('DOMContentLoaded', initGallery);

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
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
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
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

  while (len) {
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
}; // v8 likes predictible objects


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

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};

/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
  "use strict";

  if (global.setImmediate) {
    return;
  }

  var nextHandle = 1; // Spec says greater than zero

  var tasksByHandle = {};
  var currentlyRunningATask = false;
  var doc = global.document;
  var registerImmediate;

  function setImmediate(callback) {
    // Callback can either be a function or a string
    if (typeof callback !== "function") {
      callback = new Function("" + callback);
    } // Copy function arguments


    var args = new Array(arguments.length - 1);

    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i + 1];
    } // Store and register the task


    var task = {
      callback: callback,
      args: args
    };
    tasksByHandle[nextHandle] = task;
    registerImmediate(nextHandle);
    return nextHandle++;
  }

  function clearImmediate(handle) {
    delete tasksByHandle[handle];
  }

  function run(task) {
    var callback = task.callback;
    var args = task.args;

    switch (args.length) {
      case 0:
        callback();
        break;

      case 1:
        callback(args[0]);
        break;

      case 2:
        callback(args[0], args[1]);
        break;

      case 3:
        callback(args[0], args[1], args[2]);
        break;

      default:
        callback.apply(undefined, args);
        break;
    }
  }

  function runIfPresent(handle) {
    // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
    // So if we're currently running a task, we'll need to delay this invocation.
    if (currentlyRunningATask) {
      // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
      // "too much recursion" error.
      setTimeout(runIfPresent, 0, handle);
    } else {
      var task = tasksByHandle[handle];

      if (task) {
        currentlyRunningATask = true;

        try {
          run(task);
        } finally {
          clearImmediate(handle);
          currentlyRunningATask = false;
        }
      }
    }
  }

  function installNextTickImplementation() {
    registerImmediate = function (handle) {
      process.nextTick(function () {
        runIfPresent(handle);
      });
    };
  }

  function canUsePostMessage() {
    // The test against `importScripts` prevents this implementation from being installed inside a web worker,
    // where `global.postMessage` means something completely different and can't be used for this purpose.
    if (global.postMessage && !global.importScripts) {
      var postMessageIsAsynchronous = true;
      var oldOnMessage = global.onmessage;

      global.onmessage = function () {
        postMessageIsAsynchronous = false;
      };

      global.postMessage("", "*");
      global.onmessage = oldOnMessage;
      return postMessageIsAsynchronous;
    }
  }

  function installPostMessageImplementation() {
    // Installs an event handler on `global` for the `message` event: see
    // * https://developer.mozilla.org/en/DOM/window.postMessage
    // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages
    var messagePrefix = "setImmediate$" + Math.random() + "$";

    var onGlobalMessage = function (event) {
      if (event.source === global && typeof event.data === "string" && event.data.indexOf(messagePrefix) === 0) {
        runIfPresent(+event.data.slice(messagePrefix.length));
      }
    };

    if (global.addEventListener) {
      global.addEventListener("message", onGlobalMessage, false);
    } else {
      global.attachEvent("onmessage", onGlobalMessage);
    }

    registerImmediate = function (handle) {
      global.postMessage(messagePrefix + handle, "*");
    };
  }

  function installMessageChannelImplementation() {
    var channel = new MessageChannel();

    channel.port1.onmessage = function (event) {
      var handle = event.data;
      runIfPresent(handle);
    };

    registerImmediate = function (handle) {
      channel.port2.postMessage(handle);
    };
  }

  function installReadyStateChangeImplementation() {
    var html = doc.documentElement;

    registerImmediate = function (handle) {
      // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
      // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
      var script = doc.createElement("script");

      script.onreadystatechange = function () {
        runIfPresent(handle);
        script.onreadystatechange = null;
        html.removeChild(script);
        script = null;
      };

      html.appendChild(script);
    };
  }

  function installSetTimeoutImplementation() {
    registerImmediate = function (handle) {
      setTimeout(runIfPresent, 0, handle);
    };
  } // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.


  var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
  attachTo = attachTo && attachTo.setTimeout ? attachTo : global; // Don't get fooled by e.g. browserify environments.

  if ({}.toString.call(global.process) === "[object process]") {
    // For Node.js before 0.9
    installNextTickImplementation();
  } else if (canUsePostMessage()) {
    // For non-IE10 modern browsers
    installPostMessageImplementation();
  } else if (global.MessageChannel) {
    // For web workers, where supported
    installMessageChannelImplementation();
  } else if (doc && "onreadystatechange" in doc.createElement("script")) {
    // For IE 6–8
    installReadyStateChangeImplementation();
  } else {
    // For older browsers
    installSetTimeoutImplementation();
  }

  attachTo.setImmediate = setImmediate;
  attachTo.clearImmediate = clearImmediate;
})(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = typeof global !== "undefined" && global || typeof self !== "undefined" && self || window;
var apply = Function.prototype.apply; // DOM APIs, for completeness

exports.setTimeout = function () {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};

exports.setInterval = function () {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};

exports.clearTimeout = exports.clearInterval = function (timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}

Timeout.prototype.unref = Timeout.prototype.ref = function () {};

Timeout.prototype.close = function () {
  this._clearFn.call(scope, this._id);
}; // Does not start the time, just sets up the members needed.


exports.enroll = function (item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function (item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function (item) {
  clearTimeout(item._idleTimeoutId);
  var msecs = item._idleTimeout;

  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout) item._onTimeout();
    }, msecs);
  }
}; // setimmediate attaches itself to the global object


__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js"); // On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.


exports.setImmediate = typeof self !== "undefined" && self.setImmediate || typeof global !== "undefined" && global.setImmediate || this && this.setImmediate;
exports.clearImmediate = typeof self !== "undefined" && self.clearImmediate || typeof global !== "undefined" && global.clearImmediate || this && this.clearImmediate;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
  // This works if the window reference is available
  if (typeof window === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),

/***/ "./polyfill/Array.find.js":
/*!********************************!*\
  !*** ./polyfill/Array.find.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://tc39.github.io/ecma262/#sec-array.prototype.find
if (!Array.prototype.find) {
  Object.defineProperty(Array.prototype, 'find', {
    value: function value(predicate) {
      // 1. Let O be ? ToObject(this value).
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      var o = Object(this); // 2. Let len be ? ToLength(? Get(O, "length")).

      var len = o.length >>> 0; // 3. If IsCallable(predicate) is false, throw a TypeError exception.

      if (typeof predicate !== 'function') {
        throw new TypeError('predicate must be a function');
      } // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.


      var thisArg = arguments[1]; // 5. Let k be 0.

      var k = 0; // 6. Repeat, while k < len

      while (k < len) {
        // a. Let Pk be ! ToString(k).
        // b. Let kValue be ? Get(O, Pk).
        // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
        // d. If testResult is true, return kValue.
        var kValue = o[k];

        if (predicate.call(thisArg, kValue, k, o)) {
          return kValue;
        } // e. Increase k by 1.


        k++;
      } // 7. Return undefined.


      return undefined;
    }
  });
}

/***/ }),

/***/ "./polyfill/Array.from.js":
/*!********************************!*\
  !*** ./polyfill/Array.from.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Production steps of ECMA-262, Edition 6, 22.1.2.1
if (!Array.from) {
  Array.from = function () {
    var toStr = Object.prototype.toString;

    var isCallable = function isCallable(fn) {
      return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
    };

    var toInteger = function toInteger(value) {
      var number = Number(value);

      if (isNaN(number)) {
        return 0;
      }

      if (number === 0 || !isFinite(number)) {
        return number;
      }

      return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
    };

    var maxSafeInteger = Math.pow(2, 53) - 1;

    var toLength = function toLength(value) {
      var len = toInteger(value);
      return Math.min(Math.max(len, 0), maxSafeInteger);
    }; // The length property of the from method is 1.


    return function from(arrayLike
    /*, mapFn, thisArg */
    ) {
      // 1. Let C be the this value.
      var C = this; // 2. Let items be ToObject(arrayLike).

      var items = Object(arrayLike); // 3. ReturnIfAbrupt(items).

      if (arrayLike == null) {
        throw new TypeError('Array.from requires an array-like object - not null or undefined');
      } // 4. If mapfn is undefined, then let mapping be false.


      var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
      var T;

      if (typeof mapFn !== 'undefined') {
        // 5. else
        // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
        if (!isCallable(mapFn)) {
          throw new TypeError('Array.from: when provided, the second argument must be a function');
        } // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.


        if (arguments.length > 2) {
          T = arguments[2];
        }
      } // 10. Let lenValue be Get(items, "length").
      // 11. Let len be ToLength(lenValue).


      var len = toLength(items.length); // 13. If IsConstructor(C) is true, then
      // 13. a. Let A be the result of calling the [[Construct]] internal method 
      // of C with an argument list containing the single item len.
      // 14. a. Else, Let A be ArrayCreate(len).

      var A = isCallable(C) ? Object(new C(len)) : new Array(len); // 16. Let k be 0.

      var k = 0; // 17. Repeat, while k < len… (also steps a - h)

      var kValue;

      while (k < len) {
        kValue = items[k];

        if (mapFn) {
          A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
        } else {
          A[k] = kValue;
        }

        k += 1;
      } // 18. Let putStatus be Put(A, "length", len, true).


      A.length = len; // 20. Return A.

      return A;
    };
  }();
}

/***/ }),

/***/ "./polyfill/CustomEvent.js":
/*!*********************************!*\
  !*** ./polyfill/CustomEvent.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  function CustomEvent(event, params) {
    params = params || {
      bubbles: false,
      cancelable: false,
      detail: undefined
    };
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    return evt;
  }

  CustomEvent.prototype = window.Event.prototype;
  window.CustomEvent = CustomEvent;
})();

/***/ }),

/***/ "./polyfill/Element.children.js":
/*!**************************************!*\
  !*** ./polyfill/Element.children.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (constructor) {
  if (constructor && constructor.prototype && constructor.prototype.children == null) {
    Object.defineProperty(constructor.prototype, 'children', {
      get: function get() {
        var i = 0,
            node,
            nodes = this.childNodes,
            children = [];

        while (node = nodes[i++]) {
          if (node.nodeType === 1) {
            children.push(node);
          }
        }

        return children;
      }
    });
  }
})(window.Node || window.Element);

/***/ }),

/***/ "./polyfill/Function.name.js":
/*!***********************************!*\
  !*** ./polyfill/Function.name.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Hack in support for Function.name for browsers that don't support it.
 * IE, I'm looking at you.
**/
if (Function.prototype.name === undefined && Object.defineProperty !== undefined) {
  Object.defineProperty(Function.prototype, 'name', {
    get: function get() {
      var funcNameRegex = /function\s([^(]{1,})\(/;
      var results = funcNameRegex.exec(this.toString());
      return results && results.length > 1 ? results[1].trim() : "";
    },
    set: function set(value) {}
  });
}

/***/ }),

/***/ "./polyfill/Promise.js":
/*!*****************************!*\
  !*** ./polyfill/Promise.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(setImmediate) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function () {
  'use strict'; // Store setTimeout reference so promise-polyfill will be unaffected by
  // other code modifying setTimeout (like sinon.useFakeTimers())

  var setTimeoutFunc = setTimeout;

  function noop() {} // Polyfill for Function.prototype.bind


  function bind(fn, thisArg) {
    return function () {
      fn.apply(thisArg, arguments);
    };
  }

  function handle(self, deferred) {
    while (self._state === 3) {
      self = self._value;
    }

    if (self._state === 0) {
      self._deferreds.push(deferred);

      return;
    }

    self._handled = true;

    Promise._immediateFn(function () {
      var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;

      if (cb === null) {
        (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
        return;
      }

      var ret;

      try {
        ret = cb(self._value);
      } catch (e) {
        reject(deferred.promise, e);
        return;
      }

      resolve(deferred.promise, ret);
    });
  }

  function resolve(self, newValue) {
    try {
      // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
      if (newValue === self) throw new TypeError('A promise cannot be resolved with itself.');

      if (newValue && (_typeof(newValue) === 'object' || typeof newValue === 'function')) {
        var then = newValue.then;

        if (newValue instanceof Promise) {
          self._state = 3;
          self._value = newValue;
          finale(self);
          return;
        } else if (typeof then === 'function') {
          doResolve(bind(then, newValue), self);
          return;
        }
      }

      self._state = 1;
      self._value = newValue;
      finale(self);
    } catch (e) {
      reject(self, e);
    }
  }

  function reject(self, newValue) {
    self._state = 2;
    self._value = newValue;
    finale(self);
  }

  function finale(self) {
    if (self._state === 2 && self._deferreds.length === 0) {
      Promise._immediateFn(function () {
        if (!self._handled) {
          Promise._unhandledRejectionFn(self._value);
        }
      });
    }

    for (var i = 0, len = self._deferreds.length; i < len; i++) {
      handle(self, self._deferreds[i]);
    }

    self._deferreds = null;
  }

  function Handler(onFulfilled, onRejected, promise) {
    this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
    this.onRejected = typeof onRejected === 'function' ? onRejected : null;
    this.promise = promise;
  }
  /**
   * Take a potentially misbehaving resolver function and make sure
   * onFulfilled and onRejected are only called once.
   *
   * Makes no guarantees about asynchrony.
   */


  function doResolve(fn, self) {
    var done = false;

    try {
      fn(function (value) {
        if (done) return;
        done = true;
        resolve(self, value);
      }, function (reason) {
        if (done) return;
        done = true;
        reject(self, reason);
      });
    } catch (ex) {
      if (done) return;
      done = true;
      reject(self, ex);
    }
  }

  function Promise(fn) {
    if (!(this instanceof Promise)) throw new TypeError('Promises must be constructed via new');
    if (typeof fn !== 'function') throw new TypeError('not a function');
    this._state = 0;
    this._handled = false;
    this._value = undefined;
    this._deferreds = [];
    doResolve(fn, this);
  }

  var _proto = Promise.prototype;

  _proto.catch = function (onRejected) {
    return this.then(null, onRejected);
  };

  _proto.then = function (onFulfilled, onRejected) {
    var prom = new this.constructor(noop);
    handle(this, new Handler(onFulfilled, onRejected, prom));
    return prom;
  };

  Promise.all = function (arr) {
    return new Promise(function (resolve, reject) {
      if (!arr || typeof arr.length === 'undefined') throw new TypeError('Promise.all accepts an array');
      var args = Array.prototype.slice.call(arr);
      if (args.length === 0) return resolve([]);
      var remaining = args.length;

      function res(i, val) {
        try {
          if (val && (_typeof(val) === 'object' || typeof val === 'function')) {
            var then = val.then;

            if (typeof then === 'function') {
              then.call(val, function (val) {
                res(i, val);
              }, reject);
              return;
            }
          }

          args[i] = val;

          if (--remaining === 0) {
            resolve(args);
          }
        } catch (ex) {
          reject(ex);
        }
      }

      for (var i = 0; i < args.length; i++) {
        res(i, args[i]);
      }
    });
  };

  Promise.resolve = function (value) {
    if (value && _typeof(value) === 'object' && value.constructor === Promise) {
      return value;
    }

    return new Promise(function (resolve) {
      resolve(value);
    });
  };

  Promise.reject = function (value) {
    return new Promise(function (resolve, reject) {
      reject(value);
    });
  };

  Promise.race = function (values) {
    return new Promise(function (resolve, reject) {
      for (var i = 0, len = values.length; i < len; i++) {
        values[i].then(resolve, reject);
      }
    });
  }; // Use polyfill for setImmediate for performance gains


  Promise._immediateFn = typeof setImmediate === 'function' && function (fn) {
    setImmediate(fn);
  } || function (fn) {
    setTimeoutFunc(fn, 0);
  };

  Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
    if (typeof console !== 'undefined' && console) {
      console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
    }
  };

  var global = function () {
    // the only reliable means to get the global object is
    // `Function('return this')()`
    // However, this causes CSP violations in Chrome apps.
    if (typeof self !== 'undefined') {
      return self;
    }

    if (typeof window !== 'undefined') {
      return window;
    }

    if (typeof global !== 'undefined') {
      return global;
    }

    throw new Error('unable to locate global object');
  }();

  if (!global.Promise) {
    global.Promise = Promise;
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./polyfill/fetch.js":
/*!***************************!*\
  !*** ./polyfill/fetch.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (self) {
  'use strict';

  if (self.fetch) {
    return;
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && function () {
      try {
        new Blob();
        return true;
      } catch (e) {
        return false;
      }
    }(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  };

  if (support.arrayBuffer) {
    var viewClasses = ['[object Int8Array]', '[object Uint8Array]', '[object Uint8ClampedArray]', '[object Int16Array]', '[object Uint16Array]', '[object Int32Array]', '[object Uint32Array]', '[object Float32Array]', '[object Float64Array]'];

    var isDataView = function isDataView(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj);
    };

    var isArrayBufferView = ArrayBuffer.isView || function (obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
    };
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name);
    }

    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name');
    }

    return name.toLowerCase();
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value);
    }

    return value;
  } // Build a destructive iterator for the value list


  function iteratorFor(items) {
    var iterator = {
      next: function next() {
        var value = items.shift();
        return {
          done: value === undefined,
          value: value
        };
      }
    };

    if (support.iterable) {
      iterator[Symbol.iterator] = function () {
        return iterator;
      };
    }

    return iterator;
  }

  function Headers(headers) {
    this.map = {};

    if (headers instanceof Headers) {
      headers.forEach(function (value, name) {
        this.append(name, value);
      }, this);
    } else if (Array.isArray(headers)) {
      headers.forEach(function (header) {
        this.append(header[0], header[1]);
      }, this);
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function (name) {
        this.append(name, headers[name]);
      }, this);
    }
  }

  Headers.prototype.append = function (name, value) {
    name = normalizeName(name);
    value = normalizeValue(value);
    var oldValue = this.map[name];
    this.map[name] = oldValue ? oldValue + ',' + value : value;
  };

  Headers.prototype['delete'] = function (name) {
    delete this.map[normalizeName(name)];
  };

  Headers.prototype.get = function (name) {
    name = normalizeName(name);
    return this.has(name) ? this.map[name] : null;
  };

  Headers.prototype.has = function (name) {
    return this.map.hasOwnProperty(normalizeName(name));
  };

  Headers.prototype.set = function (name, value) {
    this.map[normalizeName(name)] = normalizeValue(value);
  };

  Headers.prototype.forEach = function (callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this);
      }
    }
  };

  Headers.prototype.keys = function () {
    var items = [];
    this.forEach(function (value, name) {
      items.push(name);
    });
    return iteratorFor(items);
  };

  Headers.prototype.values = function () {
    var items = [];
    this.forEach(function (value) {
      items.push(value);
    });
    return iteratorFor(items);
  };

  Headers.prototype.entries = function () {
    var items = [];
    this.forEach(function (value, name) {
      items.push([name, value]);
    });
    return iteratorFor(items);
  };

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'));
    }

    body.bodyUsed = true;
  }

  function fileReaderReady(reader) {
    return new Promise(function (resolve, reject) {
      reader.onload = function () {
        resolve(reader.result);
      };

      reader.onerror = function () {
        reject(reader.error);
      };
    });
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsArrayBuffer(blob);
    return promise;
  }

  function readBlobAsText(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsText(blob);
    return promise;
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf);
    var chars = new Array(view.length);

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i]);
    }

    return chars.join('');
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0);
    } else {
      var view = new Uint8Array(buf.byteLength);
      view.set(new Uint8Array(buf));
      return view.buffer;
    }
  }

  function Body() {
    this.bodyUsed = false;

    this._initBody = function (body) {
      this._bodyInit = body;

      if (!body) {
        this._bodyText = '';
      } else if (typeof body === 'string') {
        this._bodyText = body;
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body;
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body;
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString();
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer); // IE 10-11 can't handle a DataView body.

        this._bodyInit = new Blob([this._bodyArrayBuffer]);
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body);
      } else {
        throw new Error('unsupported BodyInit type');
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8');
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type);
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        }
      }
    };

    if (support.blob) {
      this.blob = function () {
        var rejected = consumed(this);

        if (rejected) {
          return rejected;
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob);
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]));
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob');
        } else {
          return Promise.resolve(new Blob([this._bodyText]));
        }
      };

      this.arrayBuffer = function () {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer);
        } else {
          return this.blob().then(readBlobAsArrayBuffer);
        }
      };
    }

    this.text = function () {
      var rejected = consumed(this);

      if (rejected) {
        return rejected;
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob);
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text');
      } else {
        return Promise.resolve(this._bodyText);
      }
    };

    if (support.formData) {
      this.formData = function () {
        return this.text().then(decode);
      };
    }

    this.json = function () {
      return this.text().then(JSON.parse);
    };

    return this;
  } // HTTP methods whose capitalization should be normalized


  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

  function normalizeMethod(method) {
    var upcased = method.toUpperCase();
    return methods.indexOf(upcased) > -1 ? upcased : method;
  }

  function Request(input, options) {
    options = options || {};
    var body = options.body;

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read');
      }

      this.url = input.url;
      this.credentials = input.credentials;

      if (!options.headers) {
        this.headers = new Headers(input.headers);
      }

      this.method = input.method;
      this.mode = input.mode;

      if (!body && input._bodyInit != null) {
        body = input._bodyInit;
        input.bodyUsed = true;
      }
    } else {
      this.url = String(input);
    }

    this.credentials = options.credentials || this.credentials || 'omit';

    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers);
    }

    this.method = normalizeMethod(options.method || this.method || 'GET');
    this.mode = options.mode || this.mode || null;
    this.referrer = null;

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests');
    }

    this._initBody(body);
  }

  Request.prototype.clone = function () {
    return new Request(this, {
      body: this._bodyInit
    });
  };

  function decode(body) {
    var form = new FormData();
    body.trim().split('&').forEach(function (bytes) {
      if (bytes) {
        var split = bytes.split('=');
        var name = split.shift().replace(/\+/g, ' ');
        var value = split.join('=').replace(/\+/g, ' ');
        form.append(decodeURIComponent(name), decodeURIComponent(value));
      }
    });
    return form;
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers();
    rawHeaders.split(/\r?\n/).forEach(function (line) {
      var parts = line.split(':');
      var key = parts.shift().trim();

      if (key) {
        var value = parts.join(':').trim();
        headers.append(key, value);
      }
    });
    return headers;
  }

  Body.call(Request.prototype);

  function Response(bodyInit, options) {
    if (!options) {
      options = {};
    }

    this.type = 'default';
    this.status = 'status' in options ? options.status : 200;
    this.ok = this.status >= 200 && this.status < 300;
    this.statusText = 'statusText' in options ? options.statusText : 'OK';
    this.headers = new Headers(options.headers);
    this.url = options.url || '';

    this._initBody(bodyInit);
  }

  Body.call(Response.prototype);

  Response.prototype.clone = function () {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    });
  };

  Response.error = function () {
    var response = new Response(null, {
      status: 0,
      statusText: ''
    });
    response.type = 'error';
    return response;
  };

  var redirectStatuses = [301, 302, 303, 307, 308];

  Response.redirect = function (url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code');
    }

    return new Response(null, {
      status: status,
      headers: {
        location: url
      }
    });
  };

  self.Headers = Headers;
  self.Request = Request;
  self.Response = Response;

  self.fetch = function (input, init) {
    return new Promise(function (resolve, reject) {
      var request = new Request(input, init);
      var xhr = new XMLHttpRequest();

      xhr.onload = function () {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        };
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
        var body = 'response' in xhr ? xhr.response : xhr.responseText;
        resolve(new Response(body, options));
      };

      xhr.onerror = function () {
        reject(new TypeError('Network request failed'));
      };

      xhr.ontimeout = function () {
        reject(new TypeError('Network request failed'));
      };

      xhr.open(request.method, request.url, true);

      if (request.credentials === 'include') {
        xhr.withCredentials = true;
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob';
      }

      request.headers.forEach(function (value, name) {
        xhr.setRequestHeader(name, value);
      });
      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
    });
  };

  self.fetch.polyfill = true;
})(typeof self !== 'undefined' ? self : this);

/***/ }),

/***/ "./polyfill/polyfill.js":
/*!******************************!*\
  !*** ./polyfill/polyfill.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Function.name.js */ "./polyfill/Function.name.js");
/* harmony import */ var _Function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Element_children_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Element.children.js */ "./polyfill/Element.children.js");
/* harmony import */ var _Element_children_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Element_children_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Array_find_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Array.find.js */ "./polyfill/Array.find.js");
/* harmony import */ var _Array_find_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Array_find_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Array_from_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Array.from.js */ "./polyfill/Array.from.js");
/* harmony import */ var _Array_from_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Array_from_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _CustomEvent_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CustomEvent.js */ "./polyfill/CustomEvent.js");
/* harmony import */ var _CustomEvent_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_CustomEvent_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fetch_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fetch.js */ "./polyfill/fetch.js");
/* harmony import */ var _fetch_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fetch_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Promise__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Promise */ "./polyfill/Promise.js");
/* harmony import */ var _Promise__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Promise__WEBPACK_IMPORTED_MODULE_6__);








/***/ }),

/***/ "./src/components/Gallery/Gallery.js":
/*!*******************************************!*\
  !*** ./src/components/Gallery/Gallery.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Landing; });
/* harmony import */ var _lib_Component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/Component.js */ "./src/lib/Component.js");
/* harmony import */ var _lib_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/utils.js */ "./src/lib/utils.js");
/* harmony import */ var _actions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions.js */ "./src/components/Gallery/actions.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils.js */ "./src/utils.js");
/* harmony import */ var _Photo_Photo_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Photo/Photo.js */ "./src/components/Photo/Photo.js");
/* harmony import */ var _Loader_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Loader.js */ "./src/components/Gallery/Loader.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var Landing =
/*#__PURE__*/
function (_Component) {
  _inherits(Landing, _Component);

  function Landing(className) {
    var _this;

    _classCallCheck(this, Landing);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Landing).call(this, className, [_Photo_Photo_js__WEBPACK_IMPORTED_MODULE_4__["default"]]));
    _this.inited = false;
    window.addEventListener(Object(_lib_utils_js__WEBPACK_IMPORTED_MODULE_1__["mapEvent"])('resize'), _actions_js__WEBPACK_IMPORTED_MODULE_2__["setWindowSize"]);
    window.addEventListener('scroll', function (ev) {
      Object(_actions_js__WEBPACK_IMPORTED_MODULE_2__["setScrollPos"])(_this.$clip);
    });
    Object(_actions_js__WEBPACK_IMPORTED_MODULE_2__["setWindowSize"])();
    Object(_actions_js__WEBPACK_IMPORTED_MODULE_2__["setScrollPos"])(_this.$clip);
    return _this;
  }

  _createClass(Landing, [{
    key: "stateToprops",
    value: function stateToprops(state) {
      var images = _toConsumableArray(state.images || []);

      var _state$App = _objectSpread({}, state.App),
          winW = _state$App.winW;

      var rows = 10;

      var imageW = function imageW() {
        return Math.floor(winW / rows);
      };

      while (imageW() < 150) {
        rows--;
      }

      return {
        images: images,
        imageW: imageW()
      };
    }
  }, {
    key: "render",
    value: function render() {
      var images = this.props.images;
      var loaded = images && images.length;
      return "\n            <style>\n                .Gallery__photo {\n                    width: ".concat(this.props.imageW, "px;\n                    height: ").concat(this.props.imageW, "px;\n                }\n            </style>\n            ").concat(Object(_Loader_js__WEBPACK_IMPORTED_MODULE_5__["default"])(loaded), "\n            <div class=\"Gallery__header\">\n            </div>\n            <div class=\"Gallery__content\">\n                ").concat(loaded ? "\n                    ".concat(images.map(function (image) {
        var title = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["parseStringToHTML"])(image.title);
        var owner = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["parseStringToHTML"])(image.ownername);
        var imageUrl = image.url_s || image.url_q || image.url_t;
        return "\n                            <Photo class=\"Gallery__photo Photo\"\n                                id=\"".concat(image.id, "\"\n                                url=\"").concat(imageUrl, "\" \n                                caption=\"").concat(title, "\"\n                                owner=\"").concat(owner, "\">\n                            </Photo>\n                        ");
      }).join(''), "\n                ") : '', "\n            </div>\n            <div class=\"Gallery__footer\">\n            </div>\n        ");
    }
  }]);

  return Landing;
}(_lib_Component_js__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/components/Gallery/Loader.js":
/*!******************************************!*\
  !*** ./src/components/Gallery/Loader.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Loader; });
function Loader(loaded) {
  return "\n        <div class=\"Loader Loader--".concat(loaded ? 'loaded' : 'loading', "\">\n            <svg width=\"38\" height=\"38\" viewBox=\"0 0 38 38\" xmlns=\"http://www.w3.org/2000/svg\" stroke=\"#ac0e35\">\n                <g fill=\"none\" fill-rule=\"evenodd\">\n                    <g transform=\"translate(1 1)\" stroke-width=\"2\">\n                        <circle stroke-opacity=\".5\" cx=\"18\" cy=\"18\" r=\"16\"/>\n                        <path d=\"M36 18c0-9.94-8.06-18-18-18\">\n                            <animateTransform\n                                attributeName=\"transform\"\n                                type=\"rotate\"\n                                from=\"0 18 18\"\n                                to=\"360 18 18\"\n                                dur=\"1s\"\n                                repeatCount=\"indefinite\"/>\n                        </path>\n                    </g>\n                </g>\n            </svg>\n        </div>\n    ");
}

/***/ }),

/***/ "./src/components/Gallery/actions.js":
/*!*******************************************!*\
  !*** ./src/components/Gallery/actions.js ***!
  \*******************************************/
/*! exports provided: actions, modes, getImages, setWindowSize, setScrollPos, reducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modes", function() { return modes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImages", function() { return getImages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setWindowSize", function() { return setWindowSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setScrollPos", function() { return setScrollPos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony import */ var _lib_actions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/actions.js */ "./src/lib/actions.js");
/* harmony import */ var _lib_store_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/store.js */ "./src/lib/store.js");
/* harmony import */ var _data_flickrAPI_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/flickrAPI.js */ "./src/data/flickrAPI.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils.js */ "./src/utils.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var actions = {
  GET_IMAGES: 'GET_IMAGES'
};
var modes = {
  DESKTOP: 'desktop',
  MOBILE: 'mobile'
};
function getImages(page) {
  Object(_lib_store_js__WEBPACK_IMPORTED_MODULE_1__["dispatchAction"])(_lib_actions_js__WEBPACK_IMPORTED_MODULE_0__["actions"].SET_APP_PROP, {
    pageLoading: page
  });
  Object(_data_flickrAPI_js__WEBPACK_IMPORTED_MODULE_2__["getImagesJSON"])(page).then(function (results) {
    Object(_lib_store_js__WEBPACK_IMPORTED_MODULE_1__["dispatchAction"])(_lib_actions_js__WEBPACK_IMPORTED_MODULE_0__["actions"].SET_APP_PROP, {
      pageLoading: null
    });
    Object(_lib_store_js__WEBPACK_IMPORTED_MODULE_1__["dispatchAction"])(actions.GET_IMAGES, results.photos);
  });
}
function setWindowSize() {
  var windowSize = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["getWindowSize"])();
  Object(_lib_store_js__WEBPACK_IMPORTED_MODULE_1__["dispatchAction"])(_lib_actions_js__WEBPACK_IMPORTED_MODULE_0__["actions"].SET_APP_PROP, {
    winW: windowSize.width - 7,
    winH: windowSize.height,
    mode: windowSize.width > 767 ? modes.DESKTOP : modes.MOBILE
  });
}
function setScrollPos(clip) {
  var offset = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["getOffset"])(clip);
  var winH = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["getWindowSize"])().height;

  if (offset.top + offset.height < winH * 1.9) {
    var nextPage = _lib_store_js__WEBPACK_IMPORTED_MODULE_1__["state"].page + 1;

    if (nextPage !== _lib_store_js__WEBPACK_IMPORTED_MODULE_1__["state"].App.pageLoading) {
      getImages(nextPage);
    }
  }
}
var reducers = _defineProperty({}, actions.GET_IMAGES, setImages);

function setImages(state, payload) {
  var _payload = _objectSpread({}, payload),
      images = _payload.photo,
      page = _payload.page,
      perpage = _payload.perpage;

  return _objectSpread({}, state, {
    images: _toConsumableArray(state.images).concat(_toConsumableArray(images)),
    page: page,
    perpage: perpage
  });
}

/***/ }),

/***/ "./src/components/Photo/Photo.js":
/*!***************************************!*\
  !*** ./src/components/Photo/Photo.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Photo; });
/* harmony import */ var _lib_Component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/Component.js */ "./src/lib/Component.js");
/* harmony import */ var _lib_router_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/router.js */ "./src/lib/router.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Photo =
/*#__PURE__*/
function (_Component) {
  _inherits(Photo, _Component);

  function Photo(className) {
    _classCallCheck(this, Photo);

    return _possibleConstructorReturn(this, _getPrototypeOf(Photo).call(this, className));
  }

  _createClass(Photo, [{
    key: "stateToprops",
    value: function stateToprops(state) {
      return {};
    }
  }, {
    key: "onClickImage",
    value: function onClickImage(ev) {
      Object(_lib_router_js__WEBPACK_IMPORTED_MODULE_1__["goOut"])(this.props.package.motogpUrl);
    }
  }, {
    key: "render",
    value: function render() {
      var imageStyle = "background-image:url('".concat(this.domProps.url, "')");
      return "\n            <div class=\"Photo__image\" style=\"".concat(imageStyle, "\"></div>\n            <div class=\"Photo__info\">\n                <div class=\"Photo__title\">").concat(this.domProps.caption, "</div>\n                <div class=\"Photo__owner\">").concat(this.domProps.owner, "</div>\n            </div>\n        ");
    }
  }]);

  return Photo;
}(_lib_Component_js__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/data/flickrAPI.js":
/*!*******************************!*\
  !*** ./src/data/flickrAPI.js ***!
  \*******************************/
/*! exports provided: onFetchError, getImagesJSON */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onFetchError", function() { return onFetchError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImagesJSON", function() { return getImagesJSON; });
/* harmony import */ var _lib_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/utils.js */ "./src/lib/utils.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function getAPIServer() {
  var key = '361410381e0bb1885ee6ad24c0348007';
  var method = 'flickr.photos.search';
  var format = 'json';
  var text = "archdaily";
  var atts = '?sort=relevance&parse_tags=1&content_type=7&lang=es-US&text=archdaily&viewerNSID=&csrf=&hermes=1&hermesClient=1&reqId=4a394135&nojsoncallback=1';
  return "https://www.flickr.com/services/rest/".concat(atts, "&text=").concat(text, "&method=").concat(method, "&format=").concat(format, "&api_key=").concat(key);
}

var apiServer = getAPIServer();
var PROD_ROUTES = {
  photos: "".concat(apiServer, "&extras=owner_name,url_sq, url_t, url_s, url_q, url_m, url_l")
};

var API_ROUTES = _objectSpread({}, PROD_ROUTES, window.DEV_ROUTES);

function onFetchError(err) {
  console.log("fetch error: ", err);
}
function getImagesJSON(page) {
  return _get("".concat(API_ROUTES.photos, "&page=").concat(page || 1));
}

function _get(url, config) {
  if (Object(_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(url)) {
    url = url();
  }

  return _gpFetch(url, config);
}

;

function _gpFetch(url, config) {
  return fetch(url, config).then(function (response) {
    if (response.ok) {
      var contentType = response.headers.get("Content-Type") || "";

      if (contentType.indexOf("application/json") != -1) {
        return response.json().catch(function (error) {
          return Promise.reject(new Error("Invalid JSON: " + error.message));
        });
      }

      if (contentType.indexOf("text/html") != -1 || contentType.indexOf("text/javascript") != -1) {
        return response.text().catch(function (error) {
          return Promise.reject(error);
        });
      }

      return Promise.reject(new Error("Invalid content type: " + contentType));
    }

    if (response.status == 404) {
      return Promise.reject(new Error("Page not found: " + url));
    }

    return Promise.reject(new Error("HTTP error: " + response.status));
  }).catch(function (error) {
    return Promise.reject(error);
  });
}

/***/ }),

/***/ "./src/initialState.js":
/*!*****************************!*\
  !*** ./src/initialState.js ***!
  \*****************************/
/*! exports provided: initialState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
var initialState = {
  images: [],
  perpage: 100,
  page: 2
};

/***/ }),

/***/ "./src/lib/Component.js":
/*!******************************!*\
  !*** ./src/lib/Component.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Component; });
/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store.js */ "./src/lib/store.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./src/lib/utils.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var uniqueNames = [];

function getUniqueName(name) {
  var origName = name;
  var index = 0;

  while (uniqueNames.indexOf(name) != -1) {
    name = origName + index++;
  }

  uniqueNames.push(name);
  return name;
}

var isTextNode = function isTextNode(node) {
  return node.nodeType === Node.TEXT_NODE;
};

var Component =
/*#__PURE__*/
function () {
  function Component(initiator, classes2Render) {
    _classCallCheck(this, Component);

    var className = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["isDOMElement"])(initiator) ? this.constructor.name : initiator || this.constructor.name;
    var DOMElement = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["isDOMElement"])(initiator) ? [initiator] : document.querySelectorAll(".".concat(className));

    if (DOMElement.length > 1) {
      throw new Error("".concat(this.type, ":\n            A Component needs a unique DOM Element to initialize,\n            there are ").concat(DOMElement.length, " '").concat(className, "' at DOM"));
    }

    if (!DOMElement.length) {
      throw new Error("".concat(this.type, ":\n                Component needs to be initializated with a single DOMElement,\n                there are not any '").concat(className, "' at DOM"));
    }

    this.$clip = DOMElement[0];
    this._name = getUniqueName(className);
    this._classes2Render = classes2Render || [];
    this.props = {};
    this.domProps = {};
    this._components = {};
    this._stateListener = this._onChangeState.bind(this);
    document.addEventListener('state', this._stateListener);

    this._stateListener();
  }

  _createClass(Component, [{
    key: "getAppProp",
    value: function getAppProp(propName) {
      return (_store_js__WEBPACK_IMPORTED_MODULE_0__["state"].App || {})[propName];
    }
  }, {
    key: "stateToprops",
    value: function stateToprops(state) {
      var componentState = (state.Components || [])[this.name];
      return _objectSpread({}, componentState);
    }
  }, {
    key: "render",
    value: function render() {
      return "Hello I'm ".concat(this.name, " and these are my props: ").concat(this.props);
    }
  }, {
    key: "renderTemplate",
    value: function renderTemplate($domElement, templateTpl) {
      var templateStr = templateTpl.replace(/(?:\r\n|\r|\n)/g, '').replace(/onload=/g, 'onload_axplain=');

      if (!$domElement || !Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["isDOMElement"])($domElement)) {
        throw new TypeError("".concat(this.type, ": renderTemplate requires a DOMElement and you passed [").concat($domElement, "]"));
      }

      if (!templateStr || !Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["isString"])(templateStr)) {
        throw new TypeError("".concat(this.type, ": renderTemplate requires a string and you passed [").concat($domElement, "]"));
      }

      if (!$domElement.children.length) {
        $domElement.innerHTML = templateStr;
      } else {
        var $tempDom = document.createElement('div');
        $tempDom.innerHTML = templateStr;

        if ($domElement.innerHTML === $tempDom.innerHTML) {
          Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["aXplainWarn"])("".concat(this.type, ": the updated DOM provided to renderTemplate is equal than\n                    actual DOM, maybe our stateToProps function is not well optimized"));
        } else if (!$tempDom.children.length) {
          $domElement.innerHTML = $tempDom.innerHTML;
        } else {
          this._updateDomElement($domElement, $tempDom);
        }
      }

      this._setDomEvents($domElement);
    }
  }, {
    key: "forceRender",
    value: function forceRender() {
      var _this = this;

      var tmpStr = this.render();

      if (tmpStr) {
        this.renderTemplate(this.$clip, tmpStr);

        if (this._classes2Render && this._classes2Render.length) {
          requestAnimationFrame(function () {
            _this._initSubcomponents();
          });
        }

        if (!!this.onEndRender) {
          requestAnimationFrame(function () {
            _this.onEndRender();
          });
        }
      }
    }
  }, {
    key: "_initSubcomponents",
    value: function _initSubcomponents() {
      var _this2 = this;

      this._components = this._components || [];

      this._classes2Render.map(function (classFunc) {
        var className = classFunc.prototype.constructor.name;

        var elements = _this2.$clip.querySelectorAll(className.toLowerCase());

        Object.keys(elements).forEach(function (id, index) {
          var tempName = elements[id].getAttribute('id') || className + index;

          if (!_this2._components[tempName] || _this2._components[tempName].$clip !== elements[id]) {
            elements[id].setAttribute('id', tempName);
            _this2._components[tempName] = new classFunc(elements[id]);
          } else {
            _this2._components[tempName]._onChangeState();
          }
        });
      });
    }
  }, {
    key: "_isSubcomponent",
    value: function _isSubcomponent(element) {
      return this._classes2Render.find(function (classFunc) {
        return classFunc.prototype.constructor.name.toLowerCase() === element.nodeName.toLowerCase();
      });
    }
  }, {
    key: "_updateDomElement",
    value: function _updateDomElement(oldDom, newDom) {
      var _this3 = this;

      Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["cleanChildNodes"])(oldDom);
      Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["cleanChildNodes"])(newDom);

      if (oldDom && !isTextNode(oldDom) && this._isSubcomponent(oldDom)) {
        newDom.innerHTML = oldDom.innerHTML;
      } else {
        var newDomChildren = Array.from(newDom.childNodes);
        var oldDomChildren = Array.from(oldDom.childNodes);

        for (var iD = oldDomChildren.length - 1; iD >= newDomChildren.length; iD--) {
          oldDom.removeChild(oldDomChildren[iD]);
        }

        newDomChildren.forEach(function (element, index) {
          var oldElement = oldDomChildren[index];

          if (!oldElement) {
            oldElement = element.cloneNode(true);
            oldDom.appendChild(oldElement);
          } else if (isTextNode(element) && isTextNode(oldElement) && oldElement.nodeValue !== element.nodeValue) {
            oldElement.nodeValue = element.nodeValue;
          } else if (isTextNode(oldElement) && !isTextNode(element)) {
            oldDom.replaceChild(element.cloneNode(true), oldElement);
          } else if (element.nodeName !== oldElement.nodeName) {
            oldElement.outerHTML = element.outerHTML || '';
          } else if (element.outerHTML !== oldElement.outerHTML) {
            Array.from(element.attributes || []).forEach(function (attr) {
              var oldAttr = oldElement.getAttribute(attr.name);

              if (!oldAttr || oldAttr !== attr.value) {
                oldElement.setAttribute(attr.name, attr.value);
              }
            });

            if (oldElement.attributes.length > element.attributes.length) {
              Array.from(oldElement.attributes || []).forEach(function (attr) {
                if (!element.attributes[attr.name]) {
                  oldElement.removeAttribute(attr.name);
                }
              });
            }

            if (element.value !== oldElement.value) {
              oldElement.value = element.value;
            }

            if (element.childNodes.length || oldElement.childNodes.length) {
              _this3._updateDomElement(oldElement, element);
            }
          }
        });
      } //Security check


      if (newDom.innerHTML.replace(/\s+/g, '') !== oldDom.innerHTML.replace(/\s+/g, '')) {
        Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["aXplainWarn"])("\n                    Force innerHTML substitution :(\n                        OLD: ".concat(oldDom.innerHTML.replace(/\s+/g, ''), "\n                        NEW: ").concat(newDom.innerHTML.replace(/\s+/g, ''), "\n                    "));
        oldDom.innerHTML = newDom.innerHTML;
      }
    }
  }, {
    key: "_onChangeState",
    value: function _onChangeState() {
      var newProps = this.stateToprops(_store_js__WEBPACK_IMPORTED_MODULE_0__["state"]) || null;
      var newDomProps = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getAllAttributes"])(this.$clip);

      if (newProps && JSON.stringify(this.props) !== JSON.stringify(newProps) || newDomProps && JSON.stringify(this.domProps) !== JSON.stringify(newDomProps)) {
        this.domProps = newDomProps;
        this.props = newProps;
        this.forceRender();
      }
    }
  }, {
    key: "_setDomEvents",
    value: function _setDomEvents($domElement) {
      var _this4 = this;

      var actNodes = Array.from($domElement.querySelectorAll('*'));
      actNodes.forEach(function (element) {
        Array.from(element.attributes).forEach(function (attr) {
          if (attr.name === 'id') {
            _this4["$".concat(attr.value)] = element;
          } else if (attr.value != '' && attr.name.indexOf('on') === 0) {
            var tempFunc = _this4[attr.value];

            if (tempFunc) {
              if (attr.name.indexOf('_axplain') !== -1) {
                element.removeAttribute(attr.name);
              }

              var validEvent = 'on' + Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["mapEvent"])(attr.name.replace('_axplain', '').slice(2));
              element[validEvent] = tempFunc.bind(_this4);
            } else {
              throw new Error("function ".concat(attr.value, " do not exists in ").concat(_this4.name));
            }
          }
        });
      });
    }
  }, {
    key: "dispose",
    value: function dispose() {
      document.removeEventListener('state', this._stateListener);

      for (var prop in this) {
        this[prop] = null;
        delete this[prop];
      }
    }
  }, {
    key: "name",
    get: function get() {
      return this._name;
    }
  }, {
    key: "type",
    get: function get() {
      return this.constructor.name;
    }
  }]);

  return Component;
}();



/***/ }),

/***/ "./src/lib/actions.js":
/*!****************************!*\
  !*** ./src/lib/actions.js ***!
  \****************************/
/*! exports provided: actions, setRoutes, setLocation, reducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setRoutes", function() { return setRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLocation", function() { return setLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store.js */ "./src/lib/store.js");
var _reducers;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


var actions = {
  SET_LOCATION: 'SET_LOCATION',
  SET_COMPONENT_PROP: 'SET_COMPONENT_PROP_nolog',
  SET_APP_PROP: 'SET_APP_PROP_nolog',
  SET_APP_PROP_LOG: 'SET_APP_PROP'
};
function setRoutes(routes) {
  return {
    type: actions.SET_LOCATION,
    payload: {
      routes: routes
    }
  };
}
function setLocation(url, route, props, _ref) {
  var params = _extends({}, _ref);

  return {
    type: actions.SET_LOCATION,
    payload: _objectSpread({
      url: url,
      route: route
    }, props, {
      params: params
    })
  };
}
var reducers = (_reducers = {}, _defineProperty(_reducers, actions.SET_LOCATION, setRouterPayload), _defineProperty(_reducers, actions.SET_COMPONENT_PROP, setComponentPayload), _defineProperty(_reducers, actions.SET_APP_PROP, setAppPayload), _defineProperty(_reducers, actions.SET_APP_PROP_LOG, setAppPayload), _reducers);

function setAppPayload(state, payload) {
  return _objectSpread({}, state, {
    App: _objectSpread({}, state.App, payload)
  });
}

function setComponentPayload(state, payload) {
  var _payload = _objectSpread({}, payload),
      componentName = _payload.componentName,
      props = _objectWithoutProperties(_payload, ["componentName"]);

  return _objectSpread({}, state, {
    Components: _objectSpread({}, state.Components, _defineProperty({}, componentName, _objectSpread({}, (state.Components || {})[componentName], props)))
  });
}

function setRouterPayload(state, payload) {
  return _objectSpread({}, state, {
    router: _objectSpread({}, state.router, payload)
  });
}

/***/ }),

/***/ "./src/lib/logger.js":
/*!***************************!*\
  !*** ./src/lib/logger.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store.js */ "./src/lib/store.js");


if (window.env && env === 'dev') {
  document.addEventListener('state', function (ev) {
    var type = ev.detail.type;

    if (type.indexOf('nolog') === -1) {
      console.groupCollapsed(type, ev.detail.payload);
      console.log('state:', _store_js__WEBPACK_IMPORTED_MODULE_0__["state"]);
      console.groupEnd();
    }
  });
}

/***/ }),

/***/ "./src/lib/router.js":
/*!***************************!*\
  !*** ./src/lib/router.js ***!
  \***************************/
/*! exports provided: initRouter, go, goOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initRouter", function() { return initRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "go", function() { return go; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "goOut", function() { return goOut; });
/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store.js */ "./src/lib/store.js");
/* harmony import */ var _actions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions.js */ "./src/lib/actions.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }



var routes = [];
var BASE_URL = '';
function initRouter(routesArr) {
  BASE_URL = window.BASE_URL || '';
  routes = _toConsumableArray(routesArr) || [{
    url: '/'
  }];
  Object(_store_js__WEBPACK_IMPORTED_MODULE_0__["dispatch"])(Object(_actions_js__WEBPACK_IMPORTED_MODULE_1__["setRoutes"])(routes));
}
function go(url2go) {
  var addToHistory = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if (url2go !== _store_js__WEBPACK_IMPORTED_MODULE_0__["state"].router.url && setStateLocation(url2go)) {
    var func = addToHistory ? 'pushState' : 'replaceState';
    history[func](null, '', BASE_URL + url2go);
  }
}
function goOut(url2go, newTab) {
  if (newTab) {
    window.open(url2go, '_system');
  } else {
    location.assign(url2go);
  }
}

function setStateLocation(url2go) {
  var url = url2go || routes[0].url;

  var routeMatch = _matchRoute(url);

  if (routeMatch) {
    if (routeMatch.redirect) {
      go(routeMatch.redirect);
      return false;
    }

    var _routeMatch = _objectSpread({}, routeMatch),
        urlMatch = _routeMatch.url,
        props = _objectWithoutProperties(_routeMatch, ["url"]);

    var params = _getParams(url, routeMatch.url);

    Object(_store_js__WEBPACK_IMPORTED_MODULE_0__["dispatch"])(Object(_actions_js__WEBPACK_IMPORTED_MODULE_1__["setLocation"])(url2go, url, props, params));
    return true;
  } else {
    var route404 = _matchRoute('404');

    if (route404) {
      setStateLocation('404');
    } else {
      throw new Error("\n                ".concat(url, " do not exists in routes:\n                ").concat(routes.map(function (route) {
        return " ".concat(route.url, " ");
      }).join(''), "\n            "));
    }

    return false;
  }
}

function _matchRoute(url) {
  var routeMatch = routes.find(function (route) {
    var routeReduce = route.url.replace(/(:\w+)/g, "([\\w-]+)");
    return url.match("^".concat(routeReduce, "$"));
  });
  return routeMatch;
}

function _getParams(url, urlMatch) {
  var urlMatchArr = urlMatch.split('/');
  var urlArr = url.split('/');
  var params = {};

  for (var i = 0; i < urlMatchArr.length; i++) {
    if (urlArr[i] && ~urlMatchArr[i].indexOf(":")) {
      params[urlMatchArr[i].slice(1)] = urlArr[i];
    }
  }

  return params;
}

window.onpopstate = function (ev) {
  setStateLocation(window.location.pathname);
};

/***/ }),

/***/ "./src/lib/store.js":
/*!**************************!*\
  !*** ./src/lib/store.js ***!
  \**************************/
/*! exports provided: state, initStore, addReducer, dispatchAction, dispatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initStore", function() { return initStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addReducer", function() { return addReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dispatchAction", function() { return dispatchAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dispatch", function() { return dispatch; });
/* harmony import */ var _actions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions.js */ "./src/lib/actions.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var reducers = _objectSpread({}, _actions_js__WEBPACK_IMPORTED_MODULE_0__["reducers"]);

var state = {};
function initStore(reducersArray, initialState) {
  if (_typeof(initialState) !== 'object') {
    throw new Error('initialState should be an object');
  }

  if (_typeof(reducersArray) !== 'object' && !Array.isArray(reducersArray)) {
    throw new Error('initialState should be an object or an Array of objects');
  }

  reducersArray = Array.isArray(reducersArray) ? reducersArray : [reducersArray];
  reducersArray.map(function (reducerObj) {
    return addReducer(reducerObj);
  });
  state = _objectSpread({}, initialState);
}
function addReducer(reducerObj) {
  reducers = _objectSpread({}, reducers, reducerObj);
}
function dispatchAction(type, payload) {
  dispatch({
    type: type,
    payload: payload
  });
}
function dispatch(_ref) {
  var type = _ref.type,
      payload = _ref.payload;

  if (reducers[type]) {
    state = reducers[type](state, payload);
    document.dispatchEvent(new CustomEvent('state', {
      detail: {
        type: type,
        payload: payload
      }
    }));
  } else {
    throw new Error("\n            Do not exist a reducer with name ".concat(type, "\n            The state will not change\n        "));
  }
}

/***/ }),

/***/ "./src/lib/utils.js":
/*!**************************!*\
  !*** ./src/lib/utils.js ***!
  \**************************/
/*! exports provided: isMobile, addClass, removeClass, hasClass, isDOMElement, isString, isObject, isFunction, escape, cleanChildNodes, getAllAttributes, aXplainWarn, mapEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMobile", function() { return isMobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addClass", function() { return addClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeClass", function() { return removeClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasClass", function() { return hasClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDOMElement", function() { return isDOMElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escape", function() { return escape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanChildNodes", function() { return cleanChildNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllAttributes", function() { return getAllAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aXplainWarn", function() { return aXplainWarn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapEvent", function() { return mapEvent; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function isMobile() {
  var check = false;

  (function (a) {
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);

  return check;
}
function addClass(el, className) {
  var classesArr = className.split(' ');
  classesArr.forEach(function (className) {
    if (className != '') {
      if (el.classList) el.classList.add(className);else el.className += ' ' + className;
    }
  });
}
function removeClass(el, className) {
  if (el.classList) el.classList.remove(className);else el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
}
function hasClass(el, className) {
  return el.classList.contains(className);
}
function isDOMElement(el) {
  return el instanceof Element;
}
function isString(str) {
  return typeof str === 'string' || str instanceof String;
}
function isObject(val) {
  if (val === null) {
    return false;
  }

  return typeof val === 'function' || _typeof(val) === 'object';
}
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}
function escape(str) {
  return (str + '').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&#34;').replace(/'/g, '&#39;');
}
function cleanChildNodes(node) {
  for (var n = 0; n < node.childNodes.length; n++) {
    var child = node.childNodes[n];

    if (child.nodeType === 8 || child.nodeType === 3 && !/\S/.test(child.nodeValue)) {
      node.removeChild(child);
      n--;
    } else if (child.nodeType === 1) {
      cleanChildNodes(child);
    }
  }
}
function getAllAttributes(el) {
  var result = {};

  if (el.hasAttributes()) {
    var attrs = el.attributes;

    for (var i = attrs.length - 1; i >= 0; i--) {
      result[attrs[i].name] = attrs[i].value;
    }
  }

  return result;
}
function aXplainWarn(message) {
  if (window.env && env === 'dev') {
    console.warn(message);
  }
}
var eventReplacement = {
  "mousedown": "touchstart",
  "mouseup": "touchend",
  "click": "touchstart",
  "mousemove": "touchmove"
};
function mapEvent(eventName) {
  var eventReplace = eventReplacement[eventName];
  var validEvent = _typeof(window['on' + eventReplace]) === 'object' ? eventReplace : eventName;
  return validEvent;
}

/***/ }),

/***/ "./src/main.scss":
/*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: getAssetsFolder, getWindowSize, getOffset, getDevicePixelRatio, parseStringToHTML */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAssetsFolder", function() { return getAssetsFolder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWindowSize", function() { return getWindowSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOffset", function() { return getOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDevicePixelRatio", function() { return getDevicePixelRatio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseStringToHTML", function() { return parseStringToHTML; });
var isAxelServer = true;
function getAssetsFolder() {
  return window.ASSETS_FOLDER || './';
}
function getWindowSize() {
  return {
    width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
    height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
  };
}
function getOffset(el) {
  var rect = el.getBoundingClientRect();
  return {
    top: rect.top,
    left: rect.left + document.body.scrollLeft,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };
}
function getDevicePixelRatio() {
  return parseInt(window.devicePixelRatio || 1);
}
function parseStringToHTML(str) {
  var txt = (str || '').toString().replace(/"/g, "'").replace(/'/g, '&apos;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return txt;
}

/***/ }),

/***/ 0:
/*!**************************************************************!*\
  !*** multi ./polyfill/polyfill.js ./main.js ./src/main.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./polyfill/polyfill.js */"./polyfill/polyfill.js");
__webpack_require__(/*! ./main.js */"./main.js");
module.exports = __webpack_require__(/*! ./src/main.scss */"./src/main.scss");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zZXRpbW1lZGlhdGUvc2V0SW1tZWRpYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90aW1lcnMtYnJvd3NlcmlmeS9tYWluLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vcG9seWZpbGwvQXJyYXkuZmluZC5qcyIsIndlYnBhY2s6Ly8vLi9wb2x5ZmlsbC9BcnJheS5mcm9tLmpzIiwid2VicGFjazovLy8uL3BvbHlmaWxsL0N1c3RvbUV2ZW50LmpzIiwid2VicGFjazovLy8uL3BvbHlmaWxsL0VsZW1lbnQuY2hpbGRyZW4uanMiLCJ3ZWJwYWNrOi8vLy4vcG9seWZpbGwvRnVuY3Rpb24ubmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9wb2x5ZmlsbC9Qcm9taXNlLmpzIiwid2VicGFjazovLy8uL3BvbHlmaWxsL2ZldGNoLmpzIiwid2VicGFjazovLy8uL3BvbHlmaWxsL3BvbHlmaWxsLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0dhbGxlcnkvR2FsbGVyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9HYWxsZXJ5L0xvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9HYWxsZXJ5L2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUGhvdG8vUGhvdG8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvZmxpY2tyQVBJLmpzIiwid2VicGFjazovLy8uL3NyYy9pbml0aWFsU3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9Db21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9saWIvbG9nZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9saWIvcm91dGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9saWIvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5zY3NzIiwid2VicGFjazovLy8uL3NyYy91dGlscy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJ1cmwiLCJyZWRpcmVjdCIsImluaXRHYWxsZXJ5IiwiaW5pdFN0b3JlIiwiR2FsbGVyeVJlZHVjZXIiLCJpbml0aWFsU3RhdGUiLCJpbml0Um91dGVyIiwiQkFTRV9VUkwiLCJnYWxsZXJ5IiwiR2FsbGVyeSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInByb2Nlc3MiLCJtb2R1bGUiLCJleHBvcnRzIiwiY2FjaGVkU2V0VGltZW91dCIsImNhY2hlZENsZWFyVGltZW91dCIsImRlZmF1bHRTZXRUaW1vdXQiLCJFcnJvciIsImRlZmF1bHRDbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiZSIsImNsZWFyVGltZW91dCIsInJ1blRpbWVvdXQiLCJmdW4iLCJjYWxsIiwicnVuQ2xlYXJUaW1lb3V0IiwibWFya2VyIiwicXVldWUiLCJkcmFpbmluZyIsImN1cnJlbnRRdWV1ZSIsInF1ZXVlSW5kZXgiLCJjbGVhblVwTmV4dFRpY2siLCJsZW5ndGgiLCJjb25jYXQiLCJkcmFpblF1ZXVlIiwidGltZW91dCIsImxlbiIsInJ1biIsIm5leHRUaWNrIiwiYXJncyIsIkFycmF5IiwiYXJndW1lbnRzIiwiaSIsInB1c2giLCJJdGVtIiwiYXJyYXkiLCJwcm90b3R5cGUiLCJhcHBseSIsInRpdGxlIiwiYnJvd3NlciIsImVudiIsImFyZ3YiLCJ2ZXJzaW9uIiwidmVyc2lvbnMiLCJub29wIiwib24iLCJhZGRMaXN0ZW5lciIsIm9uY2UiLCJvZmYiLCJyZW1vdmVMaXN0ZW5lciIsInJlbW92ZUFsbExpc3RlbmVycyIsImVtaXQiLCJwcmVwZW5kTGlzdGVuZXIiLCJwcmVwZW5kT25jZUxpc3RlbmVyIiwibGlzdGVuZXJzIiwibmFtZSIsImJpbmRpbmciLCJjd2QiLCJjaGRpciIsImRpciIsInVtYXNrIiwiZ2xvYmFsIiwidW5kZWZpbmVkIiwic2V0SW1tZWRpYXRlIiwibmV4dEhhbmRsZSIsInRhc2tzQnlIYW5kbGUiLCJjdXJyZW50bHlSdW5uaW5nQVRhc2siLCJkb2MiLCJyZWdpc3RlckltbWVkaWF0ZSIsImNhbGxiYWNrIiwiRnVuY3Rpb24iLCJ0YXNrIiwiY2xlYXJJbW1lZGlhdGUiLCJoYW5kbGUiLCJydW5JZlByZXNlbnQiLCJpbnN0YWxsTmV4dFRpY2tJbXBsZW1lbnRhdGlvbiIsImNhblVzZVBvc3RNZXNzYWdlIiwicG9zdE1lc3NhZ2UiLCJpbXBvcnRTY3JpcHRzIiwicG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cyIsIm9sZE9uTWVzc2FnZSIsIm9ubWVzc2FnZSIsImluc3RhbGxQb3N0TWVzc2FnZUltcGxlbWVudGF0aW9uIiwibWVzc2FnZVByZWZpeCIsIk1hdGgiLCJyYW5kb20iLCJvbkdsb2JhbE1lc3NhZ2UiLCJldmVudCIsInNvdXJjZSIsImRhdGEiLCJpbmRleE9mIiwic2xpY2UiLCJhdHRhY2hFdmVudCIsImluc3RhbGxNZXNzYWdlQ2hhbm5lbEltcGxlbWVudGF0aW9uIiwiY2hhbm5lbCIsIk1lc3NhZ2VDaGFubmVsIiwicG9ydDEiLCJwb3J0MiIsImluc3RhbGxSZWFkeVN0YXRlQ2hhbmdlSW1wbGVtZW50YXRpb24iLCJodG1sIiwiZG9jdW1lbnRFbGVtZW50Iiwic2NyaXB0IiwiY3JlYXRlRWxlbWVudCIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlbW92ZUNoaWxkIiwiYXBwZW5kQ2hpbGQiLCJpbnN0YWxsU2V0VGltZW91dEltcGxlbWVudGF0aW9uIiwiYXR0YWNoVG8iLCJPYmplY3QiLCJnZXRQcm90b3R5cGVPZiIsInRvU3RyaW5nIiwic2VsZiIsInNjb3BlIiwid2luZG93IiwiVGltZW91dCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImNsb3NlIiwiaWQiLCJjbGVhckZuIiwiX2lkIiwiX2NsZWFyRm4iLCJ1bnJlZiIsInJlZiIsImVucm9sbCIsIml0ZW0iLCJtc2VjcyIsIl9pZGxlVGltZW91dElkIiwiX2lkbGVUaW1lb3V0IiwidW5lbnJvbGwiLCJfdW5yZWZBY3RpdmUiLCJhY3RpdmUiLCJvblRpbWVvdXQiLCJfb25UaW1lb3V0IiwicmVxdWlyZSIsImciLCJldmFsIiwiZmluZCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJwcmVkaWNhdGUiLCJUeXBlRXJyb3IiLCJvIiwidGhpc0FyZyIsImsiLCJrVmFsdWUiLCJmcm9tIiwidG9TdHIiLCJpc0NhbGxhYmxlIiwiZm4iLCJ0b0ludGVnZXIiLCJudW1iZXIiLCJOdW1iZXIiLCJpc05hTiIsImlzRmluaXRlIiwiZmxvb3IiLCJhYnMiLCJtYXhTYWZlSW50ZWdlciIsInBvdyIsInRvTGVuZ3RoIiwibWluIiwibWF4IiwiYXJyYXlMaWtlIiwiQyIsIml0ZW1zIiwibWFwRm4iLCJUIiwiQSIsIkN1c3RvbUV2ZW50IiwicGFyYW1zIiwiYnViYmxlcyIsImNhbmNlbGFibGUiLCJkZXRhaWwiLCJldnQiLCJjcmVhdGVFdmVudCIsImluaXRDdXN0b21FdmVudCIsIkV2ZW50IiwiY29uc3RydWN0b3IiLCJjaGlsZHJlbiIsImdldCIsIm5vZGUiLCJub2RlcyIsImNoaWxkTm9kZXMiLCJub2RlVHlwZSIsIk5vZGUiLCJFbGVtZW50IiwiZnVuY05hbWVSZWdleCIsInJlc3VsdHMiLCJleGVjIiwidHJpbSIsInNldCIsImZhY3RvcnkiLCJkZWZpbmUiLCJzZXRUaW1lb3V0RnVuYyIsImJpbmQiLCJkZWZlcnJlZCIsIl9zdGF0ZSIsIl92YWx1ZSIsIl9kZWZlcnJlZHMiLCJfaGFuZGxlZCIsIlByb21pc2UiLCJfaW1tZWRpYXRlRm4iLCJjYiIsIm9uRnVsZmlsbGVkIiwib25SZWplY3RlZCIsInJlc29sdmUiLCJyZWplY3QiLCJwcm9taXNlIiwicmV0IiwibmV3VmFsdWUiLCJ0aGVuIiwiZmluYWxlIiwiZG9SZXNvbHZlIiwiX3VuaGFuZGxlZFJlamVjdGlvbkZuIiwiSGFuZGxlciIsImRvbmUiLCJyZWFzb24iLCJleCIsIl9wcm90byIsImNhdGNoIiwicHJvbSIsImFsbCIsImFyciIsInJlbWFpbmluZyIsInJlcyIsInZhbCIsInJhY2UiLCJ2YWx1ZXMiLCJlcnIiLCJjb25zb2xlIiwid2FybiIsImZldGNoIiwic3VwcG9ydCIsInNlYXJjaFBhcmFtcyIsIml0ZXJhYmxlIiwiU3ltYm9sIiwiYmxvYiIsIkJsb2IiLCJmb3JtRGF0YSIsImFycmF5QnVmZmVyIiwidmlld0NsYXNzZXMiLCJpc0RhdGFWaWV3Iiwib2JqIiwiRGF0YVZpZXciLCJpc1Byb3RvdHlwZU9mIiwiaXNBcnJheUJ1ZmZlclZpZXciLCJBcnJheUJ1ZmZlciIsImlzVmlldyIsIm5vcm1hbGl6ZU5hbWUiLCJTdHJpbmciLCJ0ZXN0IiwidG9Mb3dlckNhc2UiLCJub3JtYWxpemVWYWx1ZSIsIml0ZXJhdG9yRm9yIiwiaXRlcmF0b3IiLCJuZXh0Iiwic2hpZnQiLCJIZWFkZXJzIiwiaGVhZGVycyIsIm1hcCIsImZvckVhY2giLCJhcHBlbmQiLCJpc0FycmF5IiwiaGVhZGVyIiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsIm9sZFZhbHVlIiwiaGFzIiwiaGFzT3duUHJvcGVydHkiLCJrZXlzIiwiZW50cmllcyIsImNvbnN1bWVkIiwiYm9keSIsImJvZHlVc2VkIiwiZmlsZVJlYWRlclJlYWR5IiwicmVhZGVyIiwib25sb2FkIiwicmVzdWx0Iiwib25lcnJvciIsImVycm9yIiwicmVhZEJsb2JBc0FycmF5QnVmZmVyIiwiRmlsZVJlYWRlciIsInJlYWRBc0FycmF5QnVmZmVyIiwicmVhZEJsb2JBc1RleHQiLCJyZWFkQXNUZXh0IiwicmVhZEFycmF5QnVmZmVyQXNUZXh0IiwiYnVmIiwidmlldyIsIlVpbnQ4QXJyYXkiLCJjaGFycyIsImZyb21DaGFyQ29kZSIsImpvaW4iLCJidWZmZXJDbG9uZSIsImJ5dGVMZW5ndGgiLCJidWZmZXIiLCJCb2R5IiwiX2luaXRCb2R5IiwiX2JvZHlJbml0IiwiX2JvZHlUZXh0IiwiX2JvZHlCbG9iIiwiRm9ybURhdGEiLCJfYm9keUZvcm1EYXRhIiwiVVJMU2VhcmNoUGFyYW1zIiwiX2JvZHlBcnJheUJ1ZmZlciIsInR5cGUiLCJyZWplY3RlZCIsInRleHQiLCJkZWNvZGUiLCJqc29uIiwiSlNPTiIsInBhcnNlIiwibWV0aG9kcyIsIm5vcm1hbGl6ZU1ldGhvZCIsIm1ldGhvZCIsInVwY2FzZWQiLCJ0b1VwcGVyQ2FzZSIsIlJlcXVlc3QiLCJpbnB1dCIsIm9wdGlvbnMiLCJjcmVkZW50aWFscyIsIm1vZGUiLCJyZWZlcnJlciIsImNsb25lIiwiZm9ybSIsInNwbGl0IiwiYnl0ZXMiLCJyZXBsYWNlIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicGFyc2VIZWFkZXJzIiwicmF3SGVhZGVycyIsImxpbmUiLCJwYXJ0cyIsImtleSIsIlJlc3BvbnNlIiwiYm9keUluaXQiLCJzdGF0dXMiLCJvayIsInN0YXR1c1RleHQiLCJyZXNwb25zZSIsInJlZGlyZWN0U3RhdHVzZXMiLCJSYW5nZUVycm9yIiwibG9jYXRpb24iLCJpbml0IiwicmVxdWVzdCIsInhociIsIlhNTEh0dHBSZXF1ZXN0IiwiZ2V0QWxsUmVzcG9uc2VIZWFkZXJzIiwicmVzcG9uc2VVUkwiLCJyZXNwb25zZVRleHQiLCJvbnRpbWVvdXQiLCJvcGVuIiwid2l0aENyZWRlbnRpYWxzIiwicmVzcG9uc2VUeXBlIiwic2V0UmVxdWVzdEhlYWRlciIsInNlbmQiLCJwb2x5ZmlsbCIsIkxhbmRpbmciLCJjbGFzc05hbWUiLCJQaG90byIsImluaXRlZCIsIm1hcEV2ZW50Iiwic2V0V2luZG93U2l6ZSIsImV2Iiwic2V0U2Nyb2xsUG9zIiwiJGNsaXAiLCJzdGF0ZSIsImltYWdlcyIsIkFwcCIsIndpblciLCJyb3dzIiwiaW1hZ2VXIiwicHJvcHMiLCJsb2FkZWQiLCJMb2FkZXIiLCJpbWFnZSIsInBhcnNlU3RyaW5nVG9IVE1MIiwib3duZXIiLCJvd25lcm5hbWUiLCJpbWFnZVVybCIsInVybF9zIiwidXJsX3EiLCJ1cmxfdCIsIkNvbXBvbmVudCIsImFjdGlvbnMiLCJHRVRfSU1BR0VTIiwibW9kZXMiLCJERVNLVE9QIiwiTU9CSUxFIiwiZ2V0SW1hZ2VzIiwicGFnZSIsImRpc3BhdGNoQWN0aW9uIiwibGliQWN0aW9ucyIsIlNFVF9BUFBfUFJPUCIsInBhZ2VMb2FkaW5nIiwiZ2V0SW1hZ2VzSlNPTiIsInBob3RvcyIsIndpbmRvd1NpemUiLCJnZXRXaW5kb3dTaXplIiwid2lkdGgiLCJ3aW5IIiwiaGVpZ2h0IiwiY2xpcCIsIm9mZnNldCIsImdldE9mZnNldCIsInRvcCIsIm5leHRQYWdlIiwicmVkdWNlcnMiLCJzZXRJbWFnZXMiLCJwYXlsb2FkIiwicGhvdG8iLCJwZXJwYWdlIiwiZ29PdXQiLCJwYWNrYWdlIiwibW90b2dwVXJsIiwiaW1hZ2VTdHlsZSIsImRvbVByb3BzIiwiY2FwdGlvbiIsImdldEFQSVNlcnZlciIsImZvcm1hdCIsImF0dHMiLCJhcGlTZXJ2ZXIiLCJQUk9EX1JPVVRFUyIsIkFQSV9ST1VURVMiLCJERVZfUk9VVEVTIiwib25GZXRjaEVycm9yIiwibG9nIiwiX2dldCIsImNvbmZpZyIsImlzRnVuY3Rpb24iLCJfZ3BGZXRjaCIsImNvbnRlbnRUeXBlIiwibWVzc2FnZSIsInVuaXF1ZU5hbWVzIiwiZ2V0VW5pcXVlTmFtZSIsIm9yaWdOYW1lIiwiaW5kZXgiLCJpc1RleHROb2RlIiwiVEVYVF9OT0RFIiwiaW5pdGlhdG9yIiwiY2xhc3NlczJSZW5kZXIiLCJpc0RPTUVsZW1lbnQiLCJET01FbGVtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsIl9uYW1lIiwiX2NsYXNzZXMyUmVuZGVyIiwiX2NvbXBvbmVudHMiLCJfc3RhdGVMaXN0ZW5lciIsIl9vbkNoYW5nZVN0YXRlIiwicHJvcE5hbWUiLCJjb21wb25lbnRTdGF0ZSIsIkNvbXBvbmVudHMiLCIkZG9tRWxlbWVudCIsInRlbXBsYXRlVHBsIiwidGVtcGxhdGVTdHIiLCJpc1N0cmluZyIsImlubmVySFRNTCIsIiR0ZW1wRG9tIiwiYVhwbGFpbldhcm4iLCJfdXBkYXRlRG9tRWxlbWVudCIsIl9zZXREb21FdmVudHMiLCJ0bXBTdHIiLCJyZW5kZXIiLCJyZW5kZXJUZW1wbGF0ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIl9pbml0U3ViY29tcG9uZW50cyIsIm9uRW5kUmVuZGVyIiwiY2xhc3NGdW5jIiwiZWxlbWVudHMiLCJ0ZW1wTmFtZSIsImdldEF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsImVsZW1lbnQiLCJub2RlTmFtZSIsIm9sZERvbSIsIm5ld0RvbSIsImNsZWFuQ2hpbGROb2RlcyIsIl9pc1N1YmNvbXBvbmVudCIsIm5ld0RvbUNoaWxkcmVuIiwib2xkRG9tQ2hpbGRyZW4iLCJpRCIsIm9sZEVsZW1lbnQiLCJjbG9uZU5vZGUiLCJub2RlVmFsdWUiLCJyZXBsYWNlQ2hpbGQiLCJvdXRlckhUTUwiLCJhdHRyaWJ1dGVzIiwiYXR0ciIsIm9sZEF0dHIiLCJyZW1vdmVBdHRyaWJ1dGUiLCJuZXdQcm9wcyIsInN0YXRlVG9wcm9wcyIsIm5ld0RvbVByb3BzIiwiZ2V0QWxsQXR0cmlidXRlcyIsInN0cmluZ2lmeSIsImZvcmNlUmVuZGVyIiwiYWN0Tm9kZXMiLCJ0ZW1wRnVuYyIsInZhbGlkRXZlbnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicHJvcCIsIlNFVF9MT0NBVElPTiIsIlNFVF9DT01QT05FTlRfUFJPUCIsIlNFVF9BUFBfUFJPUF9MT0ciLCJzZXRSb3V0ZXMiLCJzZXRMb2NhdGlvbiIsInJvdXRlIiwic2V0Um91dGVyUGF5bG9hZCIsInNldENvbXBvbmVudFBheWxvYWQiLCJzZXRBcHBQYXlsb2FkIiwiY29tcG9uZW50TmFtZSIsInJvdXRlciIsImdyb3VwQ29sbGFwc2VkIiwiZ3JvdXBFbmQiLCJyb3V0ZXNBcnIiLCJkaXNwYXRjaCIsImdvIiwidXJsMmdvIiwiYWRkVG9IaXN0b3J5Iiwic2V0U3RhdGVMb2NhdGlvbiIsImZ1bmMiLCJoaXN0b3J5IiwibmV3VGFiIiwiYXNzaWduIiwicm91dGVNYXRjaCIsIl9tYXRjaFJvdXRlIiwidXJsTWF0Y2giLCJfZ2V0UGFyYW1zIiwicm91dGU0MDQiLCJyb3V0ZVJlZHVjZSIsIm1hdGNoIiwidXJsTWF0Y2hBcnIiLCJ1cmxBcnIiLCJvbnBvcHN0YXRlIiwicGF0aG5hbWUiLCJsaWJSZWR1Y2VycyIsInJlZHVjZXJzQXJyYXkiLCJyZWR1Y2VyT2JqIiwiYWRkUmVkdWNlciIsImRpc3BhdGNoRXZlbnQiLCJpc01vYmlsZSIsImNoZWNrIiwiYSIsInN1YnN0ciIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsInZlbmRvciIsIm9wZXJhIiwiYWRkQ2xhc3MiLCJlbCIsImNsYXNzZXNBcnIiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmVDbGFzcyIsInJlbW92ZSIsIlJlZ0V4cCIsImhhc0NsYXNzIiwiY29udGFpbnMiLCJzdHIiLCJpc09iamVjdCIsImZ1bmN0aW9uVG9DaGVjayIsImdldFR5cGUiLCJlc2NhcGUiLCJuIiwiY2hpbGQiLCJoYXNBdHRyaWJ1dGVzIiwiYXR0cnMiLCJldmVudFJlcGxhY2VtZW50IiwiZXZlbnROYW1lIiwiZXZlbnRSZXBsYWNlIiwiaXNBeGVsU2VydmVyIiwiZ2V0QXNzZXRzRm9sZGVyIiwiQVNTRVRTX0ZPTERFUiIsImlubmVyV2lkdGgiLCJjbGllbnRXaWR0aCIsImlubmVySGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImxlZnQiLCJzY3JvbGxMZWZ0IiwicmlnaHQiLCJib3R0b20iLCJnZXREZXZpY2VQaXhlbFJhdGlvIiwicGFyc2VJbnQiLCJkZXZpY2VQaXhlbFJhdGlvIiwidHh0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7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QVA7QUFJSDtBQUVNLFNBQVM1SyxTQUFULENBQW1CaUosRUFBbkIsRUFBdUI7QUFDMUIsTUFBSTRCLElBQUksR0FBRzVCLEVBQUUsQ0FBQzZCLHFCQUFILEVBQVg7QUFDQSxTQUFPO0FBQ0g3SyxPQUFHLEVBQUU0SyxJQUFJLENBQUM1SyxHQURQO0FBRUg4SyxRQUFJLEVBQUVGLElBQUksQ0FBQ0UsSUFBTCxHQUFZbGtCLFFBQVEsQ0FBQ2dSLElBQVQsQ0FBY21ULFVBRjdCO0FBR0hyTCxTQUFLLEVBQUVrTCxJQUFJLENBQUNJLEtBQUwsR0FBYUosSUFBSSxDQUFDRSxJQUh0QjtBQUlIbEwsVUFBTSxFQUFFZ0wsSUFBSSxDQUFDSyxNQUFMLEdBQWNMLElBQUksQ0FBQzVLO0FBSnhCLEdBQVA7QUFNSDtBQUVNLFNBQVNrTCxtQkFBVCxHQUErQjtBQUNsQyxTQUFPQyxRQUFRLENBQUNyZCxNQUFNLENBQUNzZCxnQkFBUCxJQUEyQixDQUE1QixDQUFmO0FBQ0g7QUFFTSxTQUFTak4saUJBQVQsQ0FBMkJzTCxHQUEzQixFQUFnQztBQUNuQyxNQUFNNEIsR0FBRyxHQUFHLENBQUM1QixHQUFHLElBQUksRUFBUixFQUFZOWIsUUFBWixHQUNYdU4sT0FEVyxDQUNILElBREcsRUFDRyxHQURILEVBRVhBLE9BRlcsQ0FFSCxJQUZHLEVBRUcsUUFGSCxFQUdYQSxPQUhXLENBR0gsSUFIRyxFQUdHLE1BSEgsRUFJWEEsT0FKVyxDQUlILElBSkcsRUFJRyxNQUpILENBQVo7QUFLQSxTQUFPbVEsR0FBUDtBQUNILEMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCB7IGluaXRTdG9yZSB9IGZyb20gJy4vc3JjL2xpYi9zdG9yZS5qcyc7XHJcbmltcG9ydCB7IGluaXRSb3V0ZXIgfSBmcm9tICcuL3NyYy9saWIvcm91dGVyLmpzJztcclxuaW1wb3J0IFwiLi9zcmMvbGliL2xvZ2dlci5qc1wiO1xyXG5cclxuaW1wb3J0IHtpbml0aWFsU3RhdGV9IGZyb20gJy4vc3JjL2luaXRpYWxTdGF0ZS5qcyc7XHJcbmltcG9ydCBHYWxsZXJ5IGZyb20gJy4vc3JjL2NvbXBvbmVudHMvR2FsbGVyeS9HYWxsZXJ5LmpzJztcclxuaW1wb3J0IHsgcmVkdWNlcnMgYXMgR2FsbGVyeVJlZHVjZXIgfSBmcm9tICcuL3NyYy9jb21wb25lbnRzL0dhbGxlcnkvYWN0aW9ucy5qcyc7XHJcblxyXG5jb25zdCByb3V0ZXMgPSBbXHJcbiAgICB7IHVybDogXCIvXCIgfSxcclxuICAgIHsgdXJsOiBcIi9JbWFnZS86aW1hZ2VJZFwiIH0sXHJcbiAgICB7IHVybDogXCI0MDRcIiwgcmVkaXJlY3Q6IFwiL1wiIH1cclxuXVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdEdhbGxlcnkoKXtcclxuICAgIGluaXRTdG9yZShbR2FsbGVyeVJlZHVjZXJdLCBpbml0aWFsU3RhdGUpO1xyXG4gICAgaW5pdFJvdXRlcihyb3V0ZXMsIEJBU0VfVVJMIHx8ICcnKTtcclxuXHJcbiAgICBjb25zdCBnYWxsZXJ5ID0gbmV3IEdhbGxlcnkoJ0dhbGxlcnknKTtcclxufVxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGluaXRHYWxsZXJ5KVxyXG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiKGZ1bmN0aW9uIChnbG9iYWwsIHVuZGVmaW5lZCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgaWYgKGdsb2JhbC5zZXRJbW1lZGlhdGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBuZXh0SGFuZGxlID0gMTsgLy8gU3BlYyBzYXlzIGdyZWF0ZXIgdGhhbiB6ZXJvXG4gICAgdmFyIHRhc2tzQnlIYW5kbGUgPSB7fTtcbiAgICB2YXIgY3VycmVudGx5UnVubmluZ0FUYXNrID0gZmFsc2U7XG4gICAgdmFyIGRvYyA9IGdsb2JhbC5kb2N1bWVudDtcbiAgICB2YXIgcmVnaXN0ZXJJbW1lZGlhdGU7XG5cbiAgICBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoY2FsbGJhY2spIHtcbiAgICAgIC8vIENhbGxiYWNrIGNhbiBlaXRoZXIgYmUgYSBmdW5jdGlvbiBvciBhIHN0cmluZ1xuICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGNhbGxiYWNrID0gbmV3IEZ1bmN0aW9uKFwiXCIgKyBjYWxsYmFjayk7XG4gICAgICB9XG4gICAgICAvLyBDb3B5IGZ1bmN0aW9uIGFyZ3VtZW50c1xuICAgICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpICsgMV07XG4gICAgICB9XG4gICAgICAvLyBTdG9yZSBhbmQgcmVnaXN0ZXIgdGhlIHRhc2tcbiAgICAgIHZhciB0YXNrID0geyBjYWxsYmFjazogY2FsbGJhY2ssIGFyZ3M6IGFyZ3MgfTtcbiAgICAgIHRhc2tzQnlIYW5kbGVbbmV4dEhhbmRsZV0gPSB0YXNrO1xuICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUobmV4dEhhbmRsZSk7XG4gICAgICByZXR1cm4gbmV4dEhhbmRsZSsrO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGhhbmRsZSkge1xuICAgICAgICBkZWxldGUgdGFza3NCeUhhbmRsZVtoYW5kbGVdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJ1bih0YXNrKSB7XG4gICAgICAgIHZhciBjYWxsYmFjayA9IHRhc2suY2FsbGJhY2s7XG4gICAgICAgIHZhciBhcmdzID0gdGFzay5hcmdzO1xuICAgICAgICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJ1bklmUHJlc2VudChoYW5kbGUpIHtcbiAgICAgICAgLy8gRnJvbSB0aGUgc3BlYzogXCJXYWl0IHVudGlsIGFueSBpbnZvY2F0aW9ucyBvZiB0aGlzIGFsZ29yaXRobSBzdGFydGVkIGJlZm9yZSB0aGlzIG9uZSBoYXZlIGNvbXBsZXRlZC5cIlxuICAgICAgICAvLyBTbyBpZiB3ZSdyZSBjdXJyZW50bHkgcnVubmluZyBhIHRhc2ssIHdlJ2xsIG5lZWQgdG8gZGVsYXkgdGhpcyBpbnZvY2F0aW9uLlxuICAgICAgICBpZiAoY3VycmVudGx5UnVubmluZ0FUYXNrKSB7XG4gICAgICAgICAgICAvLyBEZWxheSBieSBkb2luZyBhIHNldFRpbWVvdXQuIHNldEltbWVkaWF0ZSB3YXMgdHJpZWQgaW5zdGVhZCwgYnV0IGluIEZpcmVmb3ggNyBpdCBnZW5lcmF0ZWQgYVxuICAgICAgICAgICAgLy8gXCJ0b28gbXVjaCByZWN1cnNpb25cIiBlcnJvci5cbiAgICAgICAgICAgIHNldFRpbWVvdXQocnVuSWZQcmVzZW50LCAwLCBoYW5kbGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHRhc2sgPSB0YXNrc0J5SGFuZGxlW2hhbmRsZV07XG4gICAgICAgICAgICBpZiAodGFzaykge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IHRydWU7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcnVuKHRhc2spO1xuICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW1tZWRpYXRlKGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxOZXh0VGlja0ltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgcHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbiAoKSB7IHJ1bklmUHJlc2VudChoYW5kbGUpOyB9KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYW5Vc2VQb3N0TWVzc2FnZSgpIHtcbiAgICAgICAgLy8gVGhlIHRlc3QgYWdhaW5zdCBgaW1wb3J0U2NyaXB0c2AgcHJldmVudHMgdGhpcyBpbXBsZW1lbnRhdGlvbiBmcm9tIGJlaW5nIGluc3RhbGxlZCBpbnNpZGUgYSB3ZWIgd29ya2VyLFxuICAgICAgICAvLyB3aGVyZSBgZ2xvYmFsLnBvc3RNZXNzYWdlYCBtZWFucyBzb21ldGhpbmcgY29tcGxldGVseSBkaWZmZXJlbnQgYW5kIGNhbid0IGJlIHVzZWQgZm9yIHRoaXMgcHVycG9zZS5cbiAgICAgICAgaWYgKGdsb2JhbC5wb3N0TWVzc2FnZSAmJiAhZ2xvYmFsLmltcG9ydFNjcmlwdHMpIHtcbiAgICAgICAgICAgIHZhciBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhciBvbGRPbk1lc3NhZ2UgPSBnbG9iYWwub25tZXNzYWdlO1xuICAgICAgICAgICAgZ2xvYmFsLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXMgPSBmYWxzZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoXCJcIiwgXCIqXCIpO1xuICAgICAgICAgICAgZ2xvYmFsLm9ubWVzc2FnZSA9IG9sZE9uTWVzc2FnZTtcbiAgICAgICAgICAgIHJldHVybiBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFBvc3RNZXNzYWdlSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIC8vIEluc3RhbGxzIGFuIGV2ZW50IGhhbmRsZXIgb24gYGdsb2JhbGAgZm9yIHRoZSBgbWVzc2FnZWAgZXZlbnQ6IHNlZVxuICAgICAgICAvLyAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuL0RPTS93aW5kb3cucG9zdE1lc3NhZ2VcbiAgICAgICAgLy8gKiBodHRwOi8vd3d3LndoYXR3Zy5vcmcvc3BlY3Mvd2ViLWFwcHMvY3VycmVudC13b3JrL211bHRpcGFnZS9jb21tcy5odG1sI2Nyb3NzRG9jdW1lbnRNZXNzYWdlc1xuXG4gICAgICAgIHZhciBtZXNzYWdlUHJlZml4ID0gXCJzZXRJbW1lZGlhdGUkXCIgKyBNYXRoLnJhbmRvbSgpICsgXCIkXCI7XG4gICAgICAgIHZhciBvbkdsb2JhbE1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnNvdXJjZSA9PT0gZ2xvYmFsICYmXG4gICAgICAgICAgICAgICAgdHlwZW9mIGV2ZW50LmRhdGEgPT09IFwic3RyaW5nXCIgJiZcbiAgICAgICAgICAgICAgICBldmVudC5kYXRhLmluZGV4T2YobWVzc2FnZVByZWZpeCkgPT09IDApIHtcbiAgICAgICAgICAgICAgICBydW5JZlByZXNlbnQoK2V2ZW50LmRhdGEuc2xpY2UobWVzc2FnZVByZWZpeC5sZW5ndGgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBvbkdsb2JhbE1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdsb2JhbC5hdHRhY2hFdmVudChcIm9ubWVzc2FnZVwiLCBvbkdsb2JhbE1lc3NhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShtZXNzYWdlUHJlZml4ICsgaGFuZGxlLCBcIipcIik7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbE1lc3NhZ2VDaGFubmVsSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHZhciBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBoYW5kbGUgPSBldmVudC5kYXRhO1xuICAgICAgICAgICAgcnVuSWZQcmVzZW50KGhhbmRsZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIGNoYW5uZWwucG9ydDIucG9zdE1lc3NhZ2UoaGFuZGxlKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsUmVhZHlTdGF0ZUNoYW5nZUltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICB2YXIgaHRtbCA9IGRvYy5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICAvLyBDcmVhdGUgYSA8c2NyaXB0PiBlbGVtZW50OyBpdHMgcmVhZHlzdGF0ZWNoYW5nZSBldmVudCB3aWxsIGJlIGZpcmVkIGFzeW5jaHJvbm91c2x5IG9uY2UgaXQgaXMgaW5zZXJ0ZWRcbiAgICAgICAgICAgIC8vIGludG8gdGhlIGRvY3VtZW50LiBEbyBzbywgdGh1cyBxdWV1aW5nIHVwIHRoZSB0YXNrLiBSZW1lbWJlciB0byBjbGVhbiB1cCBvbmNlIGl0J3MgYmVlbiBjYWxsZWQuXG4gICAgICAgICAgICB2YXIgc2NyaXB0ID0gZG9jLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgICAgICAgICBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJ1bklmUHJlc2VudChoYW5kbGUpO1xuICAgICAgICAgICAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBudWxsO1xuICAgICAgICAgICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgICAgICAgICBzY3JpcHQgPSBudWxsO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsU2V0VGltZW91dEltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgc2V0VGltZW91dChydW5JZlByZXNlbnQsIDAsIGhhbmRsZSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gSWYgc3VwcG9ydGVkLCB3ZSBzaG91bGQgYXR0YWNoIHRvIHRoZSBwcm90b3R5cGUgb2YgZ2xvYmFsLCBzaW5jZSB0aGF0IGlzIHdoZXJlIHNldFRpbWVvdXQgZXQgYWwuIGxpdmUuXG4gICAgdmFyIGF0dGFjaFRvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mICYmIE9iamVjdC5nZXRQcm90b3R5cGVPZihnbG9iYWwpO1xuICAgIGF0dGFjaFRvID0gYXR0YWNoVG8gJiYgYXR0YWNoVG8uc2V0VGltZW91dCA/IGF0dGFjaFRvIDogZ2xvYmFsO1xuXG4gICAgLy8gRG9uJ3QgZ2V0IGZvb2xlZCBieSBlLmcuIGJyb3dzZXJpZnkgZW52aXJvbm1lbnRzLlxuICAgIGlmICh7fS50b1N0cmluZy5jYWxsKGdsb2JhbC5wcm9jZXNzKSA9PT0gXCJbb2JqZWN0IHByb2Nlc3NdXCIpIHtcbiAgICAgICAgLy8gRm9yIE5vZGUuanMgYmVmb3JlIDAuOVxuICAgICAgICBpbnN0YWxsTmV4dFRpY2tJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChjYW5Vc2VQb3N0TWVzc2FnZSgpKSB7XG4gICAgICAgIC8vIEZvciBub24tSUUxMCBtb2Rlcm4gYnJvd3NlcnNcbiAgICAgICAgaW5zdGFsbFBvc3RNZXNzYWdlSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoZ2xvYmFsLk1lc3NhZ2VDaGFubmVsKSB7XG4gICAgICAgIC8vIEZvciB3ZWIgd29ya2Vycywgd2hlcmUgc3VwcG9ydGVkXG4gICAgICAgIGluc3RhbGxNZXNzYWdlQ2hhbm5lbEltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGRvYyAmJiBcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiIGluIGRvYy5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpKSB7XG4gICAgICAgIC8vIEZvciBJRSA24oCTOFxuICAgICAgICBpbnN0YWxsUmVhZHlTdGF0ZUNoYW5nZUltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBGb3Igb2xkZXIgYnJvd3NlcnNcbiAgICAgICAgaW5zdGFsbFNldFRpbWVvdXRJbXBsZW1lbnRhdGlvbigpO1xuICAgIH1cblxuICAgIGF0dGFjaFRvLnNldEltbWVkaWF0ZSA9IHNldEltbWVkaWF0ZTtcbiAgICBhdHRhY2hUby5jbGVhckltbWVkaWF0ZSA9IGNsZWFySW1tZWRpYXRlO1xufSh0eXBlb2Ygc2VsZiA9PT0gXCJ1bmRlZmluZWRcIiA/IHR5cGVvZiBnbG9iYWwgPT09IFwidW5kZWZpbmVkXCIgPyB0aGlzIDogZ2xvYmFsIDogc2VsZikpO1xuIiwidmFyIHNjb3BlID0gKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsKSB8fFxuICAgICAgICAgICAgKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGYpIHx8XG4gICAgICAgICAgICB3aW5kb3c7XG52YXIgYXBwbHkgPSBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHk7XG5cbi8vIERPTSBBUElzLCBmb3IgY29tcGxldGVuZXNzXG5cbmV4cG9ydHMuc2V0VGltZW91dCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFRpbWVvdXQoYXBwbHkuY2FsbChzZXRUaW1lb3V0LCBzY29wZSwgYXJndW1lbnRzKSwgY2xlYXJUaW1lb3V0KTtcbn07XG5leHBvcnRzLnNldEludGVydmFsID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgVGltZW91dChhcHBseS5jYWxsKHNldEludGVydmFsLCBzY29wZSwgYXJndW1lbnRzKSwgY2xlYXJJbnRlcnZhbCk7XG59O1xuZXhwb3J0cy5jbGVhclRpbWVvdXQgPVxuZXhwb3J0cy5jbGVhckludGVydmFsID0gZnVuY3Rpb24odGltZW91dCkge1xuICBpZiAodGltZW91dCkge1xuICAgIHRpbWVvdXQuY2xvc2UoKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gVGltZW91dChpZCwgY2xlYXJGbikge1xuICB0aGlzLl9pZCA9IGlkO1xuICB0aGlzLl9jbGVhckZuID0gY2xlYXJGbjtcbn1cblRpbWVvdXQucHJvdG90eXBlLnVucmVmID0gVGltZW91dC5wcm90b3R5cGUucmVmID0gZnVuY3Rpb24oKSB7fTtcblRpbWVvdXQucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuX2NsZWFyRm4uY2FsbChzY29wZSwgdGhpcy5faWQpO1xufTtcblxuLy8gRG9lcyBub3Qgc3RhcnQgdGhlIHRpbWUsIGp1c3Qgc2V0cyB1cCB0aGUgbWVtYmVycyBuZWVkZWQuXG5leHBvcnRzLmVucm9sbCA9IGZ1bmN0aW9uKGl0ZW0sIG1zZWNzKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcbiAgaXRlbS5faWRsZVRpbWVvdXQgPSBtc2Vjcztcbn07XG5cbmV4cG9ydHMudW5lbnJvbGwgPSBmdW5jdGlvbihpdGVtKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcbiAgaXRlbS5faWRsZVRpbWVvdXQgPSAtMTtcbn07XG5cbmV4cG9ydHMuX3VucmVmQWN0aXZlID0gZXhwb3J0cy5hY3RpdmUgPSBmdW5jdGlvbihpdGVtKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcblxuICB2YXIgbXNlY3MgPSBpdGVtLl9pZGxlVGltZW91dDtcbiAgaWYgKG1zZWNzID49IDApIHtcbiAgICBpdGVtLl9pZGxlVGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbiBvblRpbWVvdXQoKSB7XG4gICAgICBpZiAoaXRlbS5fb25UaW1lb3V0KVxuICAgICAgICBpdGVtLl9vblRpbWVvdXQoKTtcbiAgICB9LCBtc2Vjcyk7XG4gIH1cbn07XG5cbi8vIHNldGltbWVkaWF0ZSBhdHRhY2hlcyBpdHNlbGYgdG8gdGhlIGdsb2JhbCBvYmplY3RcbnJlcXVpcmUoXCJzZXRpbW1lZGlhdGVcIik7XG4vLyBPbiBzb21lIGV4b3RpYyBlbnZpcm9ubWVudHMsIGl0J3Mgbm90IGNsZWFyIHdoaWNoIG9iamVjdCBgc2V0aW1tZWRpYXRlYCB3YXNcbi8vIGFibGUgdG8gaW5zdGFsbCBvbnRvLiAgU2VhcmNoIGVhY2ggcG9zc2liaWxpdHkgaW4gdGhlIHNhbWUgb3JkZXIgYXMgdGhlXG4vLyBgc2V0aW1tZWRpYXRlYCBsaWJyYXJ5LlxuZXhwb3J0cy5zZXRJbW1lZGlhdGUgPSAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZi5zZXRJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbC5zZXRJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICh0aGlzICYmIHRoaXMuc2V0SW1tZWRpYXRlKTtcbmV4cG9ydHMuY2xlYXJJbW1lZGlhdGUgPSAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZi5jbGVhckltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwuY2xlYXJJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMgJiYgdGhpcy5jbGVhckltbWVkaWF0ZSk7XG4iLCJ2YXIgZztcclxuXHJcbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXHJcbmcgPSAoZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXM7XHJcbn0pKCk7XHJcblxyXG50cnkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxyXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSwgZXZhbCkoXCJ0aGlzXCIpO1xyXG59IGNhdGNoIChlKSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcclxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcclxufVxyXG5cclxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxyXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xyXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGc7XHJcbiIsIi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5maW5kXHJcbmlmICghQXJyYXkucHJvdG90eXBlLmZpbmQpIHtcclxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQXJyYXkucHJvdG90eXBlLCAnZmluZCcsIHtcclxuICAgIHZhbHVlOiBmdW5jdGlvbihwcmVkaWNhdGUpIHtcclxuICAgICAvLyAxLiBMZXQgTyBiZSA/IFRvT2JqZWN0KHRoaXMgdmFsdWUpLlxyXG4gICAgICBpZiAodGhpcyA9PSBudWxsKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJ0aGlzXCIgaXMgbnVsbCBvciBub3QgZGVmaW5lZCcpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB2YXIgbyA9IE9iamVjdCh0aGlzKTtcclxuXHJcbiAgICAgIC8vIDIuIExldCBsZW4gYmUgPyBUb0xlbmd0aCg/IEdldChPLCBcImxlbmd0aFwiKSkuXHJcbiAgICAgIHZhciBsZW4gPSBvLmxlbmd0aCA+Pj4gMDtcclxuXHJcbiAgICAgIC8vIDMuIElmIElzQ2FsbGFibGUocHJlZGljYXRlKSBpcyBmYWxzZSwgdGhyb3cgYSBUeXBlRXJyb3IgZXhjZXB0aW9uLlxyXG4gICAgICBpZiAodHlwZW9mIHByZWRpY2F0ZSAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3ByZWRpY2F0ZSBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gNC4gSWYgdGhpc0FyZyB3YXMgc3VwcGxpZWQsIGxldCBUIGJlIHRoaXNBcmc7IGVsc2UgbGV0IFQgYmUgdW5kZWZpbmVkLlxyXG4gICAgICB2YXIgdGhpc0FyZyA9IGFyZ3VtZW50c1sxXTtcclxuXHJcbiAgICAgIC8vIDUuIExldCBrIGJlIDAuXHJcbiAgICAgIHZhciBrID0gMDtcclxuXHJcbiAgICAgIC8vIDYuIFJlcGVhdCwgd2hpbGUgayA8IGxlblxyXG4gICAgICB3aGlsZSAoayA8IGxlbikge1xyXG4gICAgICAgIC8vIGEuIExldCBQayBiZSAhIFRvU3RyaW5nKGspLlxyXG4gICAgICAgIC8vIGIuIExldCBrVmFsdWUgYmUgPyBHZXQoTywgUGspLlxyXG4gICAgICAgIC8vIGMuIExldCB0ZXN0UmVzdWx0IGJlIFRvQm9vbGVhbig/IENhbGwocHJlZGljYXRlLCBULCDCqyBrVmFsdWUsIGssIE8gwrspKS5cclxuICAgICAgICAvLyBkLiBJZiB0ZXN0UmVzdWx0IGlzIHRydWUsIHJldHVybiBrVmFsdWUuXHJcbiAgICAgICAgdmFyIGtWYWx1ZSA9IG9ba107XHJcbiAgICAgICAgaWYgKHByZWRpY2F0ZS5jYWxsKHRoaXNBcmcsIGtWYWx1ZSwgaywgbykpIHtcclxuICAgICAgICAgIHJldHVybiBrVmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGUuIEluY3JlYXNlIGsgYnkgMS5cclxuICAgICAgICBrKys7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIDcuIFJldHVybiB1bmRlZmluZWQuXHJcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn0iLCJcclxuLy8gUHJvZHVjdGlvbiBzdGVwcyBvZiBFQ01BLTI2MiwgRWRpdGlvbiA2LCAyMi4xLjIuMVxyXG5pZiAoIUFycmF5LmZyb20pIHtcclxuICBBcnJheS5mcm9tID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XHJcbiAgICB2YXIgaXNDYWxsYWJsZSA9IGZ1bmN0aW9uIChmbikge1xyXG4gICAgICByZXR1cm4gdHlwZW9mIGZuID09PSAnZnVuY3Rpb24nIHx8IHRvU3RyLmNhbGwoZm4pID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xyXG4gICAgfTtcclxuICAgIHZhciB0b0ludGVnZXIgPSBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgdmFyIG51bWJlciA9IE51bWJlcih2YWx1ZSk7XHJcbiAgICAgIGlmIChpc05hTihudW1iZXIpKSB7IHJldHVybiAwOyB9XHJcbiAgICAgIGlmIChudW1iZXIgPT09IDAgfHwgIWlzRmluaXRlKG51bWJlcikpIHsgcmV0dXJuIG51bWJlcjsgfVxyXG4gICAgICByZXR1cm4gKG51bWJlciA+IDAgPyAxIDogLTEpICogTWF0aC5mbG9vcihNYXRoLmFicyhudW1iZXIpKTtcclxuICAgIH07XHJcbiAgICB2YXIgbWF4U2FmZUludGVnZXIgPSBNYXRoLnBvdygyLCA1MykgLSAxO1xyXG4gICAgdmFyIHRvTGVuZ3RoID0gZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgIHZhciBsZW4gPSB0b0ludGVnZXIodmFsdWUpO1xyXG4gICAgICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgobGVuLCAwKSwgbWF4U2FmZUludGVnZXIpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBUaGUgbGVuZ3RoIHByb3BlcnR5IG9mIHRoZSBmcm9tIG1ldGhvZCBpcyAxLlxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGZyb20oYXJyYXlMaWtlLyosIG1hcEZuLCB0aGlzQXJnICovKSB7XHJcbiAgICAgIC8vIDEuIExldCBDIGJlIHRoZSB0aGlzIHZhbHVlLlxyXG4gICAgICB2YXIgQyA9IHRoaXM7XHJcblxyXG4gICAgICAvLyAyLiBMZXQgaXRlbXMgYmUgVG9PYmplY3QoYXJyYXlMaWtlKS5cclxuICAgICAgdmFyIGl0ZW1zID0gT2JqZWN0KGFycmF5TGlrZSk7XHJcblxyXG4gICAgICAvLyAzLiBSZXR1cm5JZkFicnVwdChpdGVtcykuXHJcbiAgICAgIGlmIChhcnJheUxpa2UgPT0gbnVsbCkge1xyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FycmF5LmZyb20gcmVxdWlyZXMgYW4gYXJyYXktbGlrZSBvYmplY3QgLSBub3QgbnVsbCBvciB1bmRlZmluZWQnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gNC4gSWYgbWFwZm4gaXMgdW5kZWZpbmVkLCB0aGVuIGxldCBtYXBwaW5nIGJlIGZhbHNlLlxyXG4gICAgICB2YXIgbWFwRm4gPSBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHZvaWQgdW5kZWZpbmVkO1xyXG4gICAgICB2YXIgVDtcclxuICAgICAgaWYgKHR5cGVvZiBtYXBGbiAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAvLyA1LiBlbHNlXHJcbiAgICAgICAgLy8gNS4gYSBJZiBJc0NhbGxhYmxlKG1hcGZuKSBpcyBmYWxzZSwgdGhyb3cgYSBUeXBlRXJyb3IgZXhjZXB0aW9uLlxyXG4gICAgICAgIGlmICghaXNDYWxsYWJsZShtYXBGbikpIHtcclxuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FycmF5LmZyb206IHdoZW4gcHJvdmlkZWQsIHRoZSBzZWNvbmQgYXJndW1lbnQgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyA1LiBiLiBJZiB0aGlzQXJnIHdhcyBzdXBwbGllZCwgbGV0IFQgYmUgdGhpc0FyZzsgZWxzZSBsZXQgVCBiZSB1bmRlZmluZWQuXHJcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAyKSB7XHJcbiAgICAgICAgICBUID0gYXJndW1lbnRzWzJdO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gMTAuIExldCBsZW5WYWx1ZSBiZSBHZXQoaXRlbXMsIFwibGVuZ3RoXCIpLlxyXG4gICAgICAvLyAxMS4gTGV0IGxlbiBiZSBUb0xlbmd0aChsZW5WYWx1ZSkuXHJcbiAgICAgIHZhciBsZW4gPSB0b0xlbmd0aChpdGVtcy5sZW5ndGgpO1xyXG5cclxuICAgICAgLy8gMTMuIElmIElzQ29uc3RydWN0b3IoQykgaXMgdHJ1ZSwgdGhlblxyXG4gICAgICAvLyAxMy4gYS4gTGV0IEEgYmUgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBbW0NvbnN0cnVjdF1dIGludGVybmFsIG1ldGhvZCBcclxuICAgICAgLy8gb2YgQyB3aXRoIGFuIGFyZ3VtZW50IGxpc3QgY29udGFpbmluZyB0aGUgc2luZ2xlIGl0ZW0gbGVuLlxyXG4gICAgICAvLyAxNC4gYS4gRWxzZSwgTGV0IEEgYmUgQXJyYXlDcmVhdGUobGVuKS5cclxuICAgICAgdmFyIEEgPSBpc0NhbGxhYmxlKEMpID8gT2JqZWN0KG5ldyBDKGxlbikpIDogbmV3IEFycmF5KGxlbik7XHJcblxyXG4gICAgICAvLyAxNi4gTGV0IGsgYmUgMC5cclxuICAgICAgdmFyIGsgPSAwO1xyXG4gICAgICAvLyAxNy4gUmVwZWF0LCB3aGlsZSBrIDwgbGVu4oCmIChhbHNvIHN0ZXBzIGEgLSBoKVxyXG4gICAgICB2YXIga1ZhbHVlO1xyXG4gICAgICB3aGlsZSAoayA8IGxlbikge1xyXG4gICAgICAgIGtWYWx1ZSA9IGl0ZW1zW2tdO1xyXG4gICAgICAgIGlmIChtYXBGbikge1xyXG4gICAgICAgICAgQVtrXSA9IHR5cGVvZiBUID09PSAndW5kZWZpbmVkJyA/IG1hcEZuKGtWYWx1ZSwgaykgOiBtYXBGbi5jYWxsKFQsIGtWYWx1ZSwgayk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIEFba10gPSBrVmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGsgKz0gMTtcclxuICAgICAgfVxyXG4gICAgICAvLyAxOC4gTGV0IHB1dFN0YXR1cyBiZSBQdXQoQSwgXCJsZW5ndGhcIiwgbGVuLCB0cnVlKS5cclxuICAgICAgQS5sZW5ndGggPSBsZW47XHJcbiAgICAgIC8vIDIwLiBSZXR1cm4gQS5cclxuICAgICAgcmV0dXJuIEE7XHJcbiAgICB9O1xyXG4gIH0oKSk7XHJcbn0iLCIoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQ3VzdG9tRXZlbnQgKCBldmVudCwgcGFyYW1zICkge1xyXG4gICAgICBwYXJhbXMgPSBwYXJhbXMgfHwgeyBidWJibGVzOiBmYWxzZSwgY2FuY2VsYWJsZTogZmFsc2UsIGRldGFpbDogdW5kZWZpbmVkIH07XHJcbiAgICAgIHZhciBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCggJ0N1c3RvbUV2ZW50JyApO1xyXG4gICAgICBldnQuaW5pdEN1c3RvbUV2ZW50KCBldmVudCwgcGFyYW1zLmJ1YmJsZXMsIHBhcmFtcy5jYW5jZWxhYmxlLCBwYXJhbXMuZGV0YWlsICk7XHJcbiAgICAgIHJldHVybiBldnQ7XHJcbiAgICAgfVxyXG4gIFxyXG4gICAgQ3VzdG9tRXZlbnQucHJvdG90eXBlID0gd2luZG93LkV2ZW50LnByb3RvdHlwZTtcclxuICBcclxuICAgIHdpbmRvdy5DdXN0b21FdmVudCA9IEN1c3RvbUV2ZW50O1xyXG4gIH0pKCk7XHJcblxyXG4gIFxyXG4iLCIoZnVuY3Rpb24oY29uc3RydWN0b3IpIHtcclxuICAgIGlmIChjb25zdHJ1Y3RvciAmJlxyXG4gICAgICAgIGNvbnN0cnVjdG9yLnByb3RvdHlwZSAmJlxyXG4gICAgICAgIGNvbnN0cnVjdG9yLnByb3RvdHlwZS5jaGlsZHJlbiA9PSBudWxsKSB7XHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvbnN0cnVjdG9yLnByb3RvdHlwZSwgJ2NoaWxkcmVuJywge1xyXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGkgPSAwLCBub2RlLCBub2RlcyA9IHRoaXMuY2hpbGROb2RlcywgY2hpbGRyZW4gPSBbXTtcclxuICAgICAgICAgICAgICAgIHdoaWxlIChub2RlID0gbm9kZXNbaSsrXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuLnB1c2gobm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkcmVuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0pKHdpbmRvdy5Ob2RlIHx8IHdpbmRvdy5FbGVtZW50KTsiLCIvKipcclxuICogSGFjayBpbiBzdXBwb3J0IGZvciBGdW5jdGlvbi5uYW1lIGZvciBicm93c2VycyB0aGF0IGRvbid0IHN1cHBvcnQgaXQuXHJcbiAqIElFLCBJJ20gbG9va2luZyBhdCB5b3UuXHJcbioqL1xyXG5pZiAoRnVuY3Rpb24ucHJvdG90eXBlLm5hbWUgPT09IHVuZGVmaW5lZCAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZ1bmN0aW9uLnByb3RvdHlwZSwgJ25hbWUnLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIGZ1bmNOYW1lUmVnZXggPSAvZnVuY3Rpb25cXHMoW14oXXsxLH0pXFwoLztcclxuICAgICAgICAgICAgdmFyIHJlc3VsdHMgPSAoZnVuY05hbWVSZWdleCkuZXhlYygodGhpcykudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIHJldHVybiAocmVzdWx0cyAmJiByZXN1bHRzLmxlbmd0aCA+IDEpID8gcmVzdWx0c1sxXS50cmltKCkgOiBcIlwiO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbih2YWx1ZSkge31cclxuICAgIH0pO1xyXG59IiwiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcclxuXHR0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBmYWN0b3J5KCkgOlxyXG5cdHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6XHJcblx0KGZhY3RvcnkoKSk7XHJcbn0odGhpcywgKGZ1bmN0aW9uICgpIHsgJ3VzZSBzdHJpY3QnO1xyXG5cclxuLy8gU3RvcmUgc2V0VGltZW91dCByZWZlcmVuY2Ugc28gcHJvbWlzZS1wb2x5ZmlsbCB3aWxsIGJlIHVuYWZmZWN0ZWQgYnlcclxuLy8gb3RoZXIgY29kZSBtb2RpZnlpbmcgc2V0VGltZW91dCAobGlrZSBzaW5vbi51c2VGYWtlVGltZXJzKCkpXHJcbnZhciBzZXRUaW1lb3V0RnVuYyA9IHNldFRpbWVvdXQ7XHJcblxyXG5mdW5jdGlvbiBub29wKCkge31cclxuXHJcbi8vIFBvbHlmaWxsIGZvciBGdW5jdGlvbi5wcm90b3R5cGUuYmluZFxyXG5mdW5jdGlvbiBiaW5kKGZuLCB0aGlzQXJnKSB7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xyXG4gICAgZm4uYXBwbHkodGhpc0FyZywgYXJndW1lbnRzKTtcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGUoc2VsZiwgZGVmZXJyZWQpIHtcclxuICB3aGlsZSAoc2VsZi5fc3RhdGUgPT09IDMpIHtcclxuICAgIHNlbGYgPSBzZWxmLl92YWx1ZTtcclxuICB9XHJcbiAgaWYgKHNlbGYuX3N0YXRlID09PSAwKSB7XHJcbiAgICBzZWxmLl9kZWZlcnJlZHMucHVzaChkZWZlcnJlZCk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIHNlbGYuX2hhbmRsZWQgPSB0cnVlO1xyXG4gIFByb21pc2UuX2ltbWVkaWF0ZUZuKGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIGNiID0gc2VsZi5fc3RhdGUgPT09IDEgPyBkZWZlcnJlZC5vbkZ1bGZpbGxlZCA6IGRlZmVycmVkLm9uUmVqZWN0ZWQ7XHJcbiAgICBpZiAoY2IgPT09IG51bGwpIHtcclxuICAgICAgKHNlbGYuX3N0YXRlID09PSAxID8gcmVzb2x2ZSA6IHJlamVjdCkoZGVmZXJyZWQucHJvbWlzZSwgc2VsZi5fdmFsdWUpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB2YXIgcmV0O1xyXG4gICAgdHJ5IHtcclxuICAgICAgcmV0ID0gY2Ioc2VsZi5fdmFsdWUpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICByZWplY3QoZGVmZXJyZWQucHJvbWlzZSwgZSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHJlc29sdmUoZGVmZXJyZWQucHJvbWlzZSwgcmV0KTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVzb2x2ZShzZWxmLCBuZXdWYWx1ZSkge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBQcm9taXNlIFJlc29sdXRpb24gUHJvY2VkdXJlOiBodHRwczovL2dpdGh1Yi5jb20vcHJvbWlzZXMtYXBsdXMvcHJvbWlzZXMtc3BlYyN0aGUtcHJvbWlzZS1yZXNvbHV0aW9uLXByb2NlZHVyZVxyXG4gICAgaWYgKG5ld1ZhbHVlID09PSBzZWxmKVxyXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBIHByb21pc2UgY2Fubm90IGJlIHJlc29sdmVkIHdpdGggaXRzZWxmLicpO1xyXG4gICAgaWYgKFxyXG4gICAgICBuZXdWYWx1ZSAmJlxyXG4gICAgICAodHlwZW9mIG5ld1ZhbHVlID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgbmV3VmFsdWUgPT09ICdmdW5jdGlvbicpXHJcbiAgICApIHtcclxuICAgICAgdmFyIHRoZW4gPSBuZXdWYWx1ZS50aGVuO1xyXG4gICAgICBpZiAobmV3VmFsdWUgaW5zdGFuY2VvZiBQcm9taXNlKSB7XHJcbiAgICAgICAgc2VsZi5fc3RhdGUgPSAzO1xyXG4gICAgICAgIHNlbGYuX3ZhbHVlID0gbmV3VmFsdWU7XHJcbiAgICAgICAgZmluYWxlKHNlbGYpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIGRvUmVzb2x2ZShiaW5kKHRoZW4sIG5ld1ZhbHVlKSwgc2VsZik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBzZWxmLl9zdGF0ZSA9IDE7XHJcbiAgICBzZWxmLl92YWx1ZSA9IG5ld1ZhbHVlO1xyXG4gICAgZmluYWxlKHNlbGYpO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHJlamVjdChzZWxmLCBlKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlamVjdChzZWxmLCBuZXdWYWx1ZSkge1xyXG4gIHNlbGYuX3N0YXRlID0gMjtcclxuICBzZWxmLl92YWx1ZSA9IG5ld1ZhbHVlO1xyXG4gIGZpbmFsZShzZWxmKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZmluYWxlKHNlbGYpIHtcclxuICBpZiAoc2VsZi5fc3RhdGUgPT09IDIgJiYgc2VsZi5fZGVmZXJyZWRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgUHJvbWlzZS5faW1tZWRpYXRlRm4oZnVuY3Rpb24oKSB7XHJcbiAgICAgIGlmICghc2VsZi5faGFuZGxlZCkge1xyXG4gICAgICAgIFByb21pc2UuX3VuaGFuZGxlZFJlamVjdGlvbkZuKHNlbGYuX3ZhbHVlKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gc2VsZi5fZGVmZXJyZWRzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICBoYW5kbGUoc2VsZiwgc2VsZi5fZGVmZXJyZWRzW2ldKTtcclxuICB9XHJcbiAgc2VsZi5fZGVmZXJyZWRzID0gbnVsbDtcclxufVxyXG5cclxuZnVuY3Rpb24gSGFuZGxlcihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCwgcHJvbWlzZSkge1xyXG4gIHRoaXMub25GdWxmaWxsZWQgPSB0eXBlb2Ygb25GdWxmaWxsZWQgPT09ICdmdW5jdGlvbicgPyBvbkZ1bGZpbGxlZCA6IG51bGw7XHJcbiAgdGhpcy5vblJlamVjdGVkID0gdHlwZW9mIG9uUmVqZWN0ZWQgPT09ICdmdW5jdGlvbicgPyBvblJlamVjdGVkIDogbnVsbDtcclxuICB0aGlzLnByb21pc2UgPSBwcm9taXNlO1xyXG59XHJcblxyXG4vKipcclxuICogVGFrZSBhIHBvdGVudGlhbGx5IG1pc2JlaGF2aW5nIHJlc29sdmVyIGZ1bmN0aW9uIGFuZCBtYWtlIHN1cmVcclxuICogb25GdWxmaWxsZWQgYW5kIG9uUmVqZWN0ZWQgYXJlIG9ubHkgY2FsbGVkIG9uY2UuXHJcbiAqXHJcbiAqIE1ha2VzIG5vIGd1YXJhbnRlZXMgYWJvdXQgYXN5bmNocm9ueS5cclxuICovXHJcbmZ1bmN0aW9uIGRvUmVzb2x2ZShmbiwgc2VsZikge1xyXG4gIHZhciBkb25lID0gZmFsc2U7XHJcbiAgdHJ5IHtcclxuICAgIGZuKFxyXG4gICAgICBmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgICAgIGlmIChkb25lKSByZXR1cm47XHJcbiAgICAgICAgZG9uZSA9IHRydWU7XHJcbiAgICAgICAgcmVzb2x2ZShzZWxmLCB2YWx1ZSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGZ1bmN0aW9uKHJlYXNvbikge1xyXG4gICAgICAgIGlmIChkb25lKSByZXR1cm47XHJcbiAgICAgICAgZG9uZSA9IHRydWU7XHJcbiAgICAgICAgcmVqZWN0KHNlbGYsIHJlYXNvbik7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfSBjYXRjaCAoZXgpIHtcclxuICAgIGlmIChkb25lKSByZXR1cm47XHJcbiAgICBkb25lID0gdHJ1ZTtcclxuICAgIHJlamVjdChzZWxmLCBleCk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBQcm9taXNlKGZuKSB7XHJcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFByb21pc2UpKVxyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUHJvbWlzZXMgbXVzdCBiZSBjb25zdHJ1Y3RlZCB2aWEgbmV3Jyk7XHJcbiAgaWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykgdGhyb3cgbmV3IFR5cGVFcnJvcignbm90IGEgZnVuY3Rpb24nKTtcclxuICB0aGlzLl9zdGF0ZSA9IDA7XHJcbiAgdGhpcy5faGFuZGxlZCA9IGZhbHNlO1xyXG4gIHRoaXMuX3ZhbHVlID0gdW5kZWZpbmVkO1xyXG4gIHRoaXMuX2RlZmVycmVkcyA9IFtdO1xyXG5cclxuICBkb1Jlc29sdmUoZm4sIHRoaXMpO1xyXG59XHJcblxyXG52YXIgX3Byb3RvID0gUHJvbWlzZS5wcm90b3R5cGU7XHJcbl9wcm90by5jYXRjaCA9IGZ1bmN0aW9uKG9uUmVqZWN0ZWQpIHtcclxuICByZXR1cm4gdGhpcy50aGVuKG51bGwsIG9uUmVqZWN0ZWQpO1xyXG59O1xyXG5cclxuX3Byb3RvLnRoZW4gPSBmdW5jdGlvbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xyXG4gIHZhciBwcm9tID0gbmV3IHRoaXMuY29uc3RydWN0b3Iobm9vcCk7XHJcblxyXG4gIGhhbmRsZSh0aGlzLCBuZXcgSGFuZGxlcihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCwgcHJvbSkpO1xyXG4gIHJldHVybiBwcm9tO1xyXG59O1xyXG5cclxuUHJvbWlzZS5hbGwgPSBmdW5jdGlvbihhcnIpIHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICBpZiAoIWFyciB8fCB0eXBlb2YgYXJyLmxlbmd0aCA9PT0gJ3VuZGVmaW5lZCcpXHJcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Byb21pc2UuYWxsIGFjY2VwdHMgYW4gYXJyYXknKTtcclxuICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJyKTtcclxuICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHJlc29sdmUoW10pO1xyXG4gICAgdmFyIHJlbWFpbmluZyA9IGFyZ3MubGVuZ3RoO1xyXG5cclxuICAgIGZ1bmN0aW9uIHJlcyhpLCB2YWwpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBpZiAodmFsICYmICh0eXBlb2YgdmFsID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nKSkge1xyXG4gICAgICAgICAgdmFyIHRoZW4gPSB2YWwudGhlbjtcclxuICAgICAgICAgIGlmICh0eXBlb2YgdGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICB0aGVuLmNhbGwoXHJcbiAgICAgICAgICAgICAgdmFsLFxyXG4gICAgICAgICAgICAgIGZ1bmN0aW9uKHZhbCkge1xyXG4gICAgICAgICAgICAgICAgcmVzKGksIHZhbCk7XHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICByZWplY3RcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBhcmdzW2ldID0gdmFsO1xyXG4gICAgICAgIGlmICgtLXJlbWFpbmluZyA9PT0gMCkge1xyXG4gICAgICAgICAgcmVzb2x2ZShhcmdzKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGV4KSB7XHJcbiAgICAgICAgcmVqZWN0KGV4KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xyXG4gICAgICByZXMoaSwgYXJnc1tpXSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcblxyXG5Qcm9taXNlLnJlc29sdmUgPSBmdW5jdGlvbih2YWx1ZSkge1xyXG4gIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlLmNvbnN0cnVjdG9yID09PSBQcm9taXNlKSB7XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkge1xyXG4gICAgcmVzb2x2ZSh2YWx1ZSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5Qcm9taXNlLnJlamVjdCA9IGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgcmVqZWN0KHZhbHVlKTtcclxuICB9KTtcclxufTtcclxuXHJcblByb21pc2UucmFjZSA9IGZ1bmN0aW9uKHZhbHVlcykge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSB2YWx1ZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgdmFsdWVzW2ldLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcclxuICAgIH1cclxuICB9KTtcclxufTtcclxuXHJcbi8vIFVzZSBwb2x5ZmlsbCBmb3Igc2V0SW1tZWRpYXRlIGZvciBwZXJmb3JtYW5jZSBnYWluc1xyXG5Qcm9taXNlLl9pbW1lZGlhdGVGbiA9XHJcbiAgKHR5cGVvZiBzZXRJbW1lZGlhdGUgPT09ICdmdW5jdGlvbicgJiZcclxuICAgIGZ1bmN0aW9uKGZuKSB7XHJcbiAgICAgIHNldEltbWVkaWF0ZShmbik7XHJcbiAgICB9KSB8fFxyXG4gIGZ1bmN0aW9uKGZuKSB7XHJcbiAgICBzZXRUaW1lb3V0RnVuYyhmbiwgMCk7XHJcbiAgfTtcclxuXHJcblByb21pc2UuX3VuaGFuZGxlZFJlamVjdGlvbkZuID0gZnVuY3Rpb24gX3VuaGFuZGxlZFJlamVjdGlvbkZuKGVycikge1xyXG4gIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiYgY29uc29sZSkge1xyXG4gICAgY29uc29sZS53YXJuKCdQb3NzaWJsZSBVbmhhbmRsZWQgUHJvbWlzZSBSZWplY3Rpb246JywgZXJyKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXHJcbiAgfVxyXG59O1xyXG5cclxudmFyIGdsb2JhbCA9IChmdW5jdGlvbigpIHtcclxuICAvLyB0aGUgb25seSByZWxpYWJsZSBtZWFucyB0byBnZXQgdGhlIGdsb2JhbCBvYmplY3QgaXNcclxuICAvLyBgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKWBcclxuICAvLyBIb3dldmVyLCB0aGlzIGNhdXNlcyBDU1AgdmlvbGF0aW9ucyBpbiBDaHJvbWUgYXBwcy5cclxuICBpZiAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICByZXR1cm4gc2VsZjtcclxuICB9XHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICByZXR1cm4gd2luZG93O1xyXG4gIH1cclxuICBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIHJldHVybiBnbG9iYWw7XHJcbiAgfVxyXG4gIHRocm93IG5ldyBFcnJvcigndW5hYmxlIHRvIGxvY2F0ZSBnbG9iYWwgb2JqZWN0Jyk7XHJcbn0pKCk7XHJcblxyXG5pZiAoIWdsb2JhbC5Qcm9taXNlKSB7XHJcbiAgZ2xvYmFsLlByb21pc2UgPSBQcm9taXNlO1xyXG59XHJcblxyXG59KSkpO1xyXG4iLCIoZnVuY3Rpb24oc2VsZikge1xyXG4gICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgaWYgKHNlbGYuZmV0Y2gpIHtcclxuICAgIHJldHVyblxyXG4gIH1cclxuXHJcbiAgdmFyIHN1cHBvcnQgPSB7XHJcbiAgICBzZWFyY2hQYXJhbXM6ICdVUkxTZWFyY2hQYXJhbXMnIGluIHNlbGYsXHJcbiAgICBpdGVyYWJsZTogJ1N5bWJvbCcgaW4gc2VsZiAmJiAnaXRlcmF0b3InIGluIFN5bWJvbCxcclxuICAgIGJsb2I6ICdGaWxlUmVhZGVyJyBpbiBzZWxmICYmICdCbG9iJyBpbiBzZWxmICYmIChmdW5jdGlvbigpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBuZXcgQmxvYigpXHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgfSBjYXRjaChlKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgIH1cclxuICAgIH0pKCksXHJcbiAgICBmb3JtRGF0YTogJ0Zvcm1EYXRhJyBpbiBzZWxmLFxyXG4gICAgYXJyYXlCdWZmZXI6ICdBcnJheUJ1ZmZlcicgaW4gc2VsZlxyXG4gIH1cclxuXHJcbiAgaWYgKHN1cHBvcnQuYXJyYXlCdWZmZXIpIHtcclxuICAgIHZhciB2aWV3Q2xhc3NlcyA9IFtcclxuICAgICAgJ1tvYmplY3QgSW50OEFycmF5XScsXHJcbiAgICAgICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcclxuICAgICAgJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJyxcclxuICAgICAgJ1tvYmplY3QgSW50MTZBcnJheV0nLFxyXG4gICAgICAnW29iamVjdCBVaW50MTZBcnJheV0nLFxyXG4gICAgICAnW29iamVjdCBJbnQzMkFycmF5XScsXHJcbiAgICAgICdbb2JqZWN0IFVpbnQzMkFycmF5XScsXHJcbiAgICAgICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxyXG4gICAgICAnW29iamVjdCBGbG9hdDY0QXJyYXldJ1xyXG4gICAgXVxyXG5cclxuICAgIHZhciBpc0RhdGFWaWV3ID0gZnVuY3Rpb24ob2JqKSB7XHJcbiAgICAgIHJldHVybiBvYmogJiYgRGF0YVZpZXcucHJvdG90eXBlLmlzUHJvdG90eXBlT2Yob2JqKVxyXG4gICAgfVxyXG5cclxuICAgIHZhciBpc0FycmF5QnVmZmVyVmlldyA9IEFycmF5QnVmZmVyLmlzVmlldyB8fCBmdW5jdGlvbihvYmopIHtcclxuICAgICAgcmV0dXJuIG9iaiAmJiB2aWV3Q2xhc3Nlcy5pbmRleE9mKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopKSA+IC0xXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBub3JtYWxpemVOYW1lKG5hbWUpIHtcclxuICAgIGlmICh0eXBlb2YgbmFtZSAhPT0gJ3N0cmluZycpIHtcclxuICAgICAgbmFtZSA9IFN0cmluZyhuYW1lKVxyXG4gICAgfVxyXG4gICAgaWYgKC9bXmEtejAtOVxcLSMkJSYnKisuXFxeX2B8fl0vaS50ZXN0KG5hbWUpKSB7XHJcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgY2hhcmFjdGVyIGluIGhlYWRlciBmaWVsZCBuYW1lJylcclxuICAgIH1cclxuICAgIHJldHVybiBuYW1lLnRvTG93ZXJDYXNlKClcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZVZhbHVlKHZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xyXG4gICAgICB2YWx1ZSA9IFN0cmluZyh2YWx1ZSlcclxuICAgIH1cclxuICAgIHJldHVybiB2YWx1ZVxyXG4gIH1cclxuXHJcbiAgLy8gQnVpbGQgYSBkZXN0cnVjdGl2ZSBpdGVyYXRvciBmb3IgdGhlIHZhbHVlIGxpc3RcclxuICBmdW5jdGlvbiBpdGVyYXRvckZvcihpdGVtcykge1xyXG4gICAgdmFyIGl0ZXJhdG9yID0ge1xyXG4gICAgICBuZXh0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgdmFsdWUgPSBpdGVtcy5zaGlmdCgpXHJcbiAgICAgICAgcmV0dXJuIHtkb25lOiB2YWx1ZSA9PT0gdW5kZWZpbmVkLCB2YWx1ZTogdmFsdWV9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoc3VwcG9ydC5pdGVyYWJsZSkge1xyXG4gICAgICBpdGVyYXRvcltTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaXRlcmF0b3JcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIEhlYWRlcnMoaGVhZGVycykge1xyXG4gICAgdGhpcy5tYXAgPSB7fVxyXG5cclxuICAgIGlmIChoZWFkZXJzIGluc3RhbmNlb2YgSGVhZGVycykge1xyXG4gICAgICBoZWFkZXJzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHtcclxuICAgICAgICB0aGlzLmFwcGVuZChuYW1lLCB2YWx1ZSlcclxuICAgICAgfSwgdGhpcylcclxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShoZWFkZXJzKSkge1xyXG4gICAgICBoZWFkZXJzLmZvckVhY2goZnVuY3Rpb24oaGVhZGVyKSB7XHJcbiAgICAgICAgdGhpcy5hcHBlbmQoaGVhZGVyWzBdLCBoZWFkZXJbMV0pXHJcbiAgICAgIH0sIHRoaXMpXHJcbiAgICB9IGVsc2UgaWYgKGhlYWRlcnMpIHtcclxuICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoaGVhZGVycykuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XHJcbiAgICAgICAgdGhpcy5hcHBlbmQobmFtZSwgaGVhZGVyc1tuYW1lXSlcclxuICAgICAgfSwgdGhpcylcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEhlYWRlcnMucHJvdG90eXBlLmFwcGVuZCA9IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XHJcbiAgICBuYW1lID0gbm9ybWFsaXplTmFtZShuYW1lKVxyXG4gICAgdmFsdWUgPSBub3JtYWxpemVWYWx1ZSh2YWx1ZSlcclxuICAgIHZhciBvbGRWYWx1ZSA9IHRoaXMubWFwW25hbWVdXHJcbiAgICB0aGlzLm1hcFtuYW1lXSA9IG9sZFZhbHVlID8gb2xkVmFsdWUrJywnK3ZhbHVlIDogdmFsdWVcclxuICB9XHJcblxyXG4gIEhlYWRlcnMucHJvdG90eXBlWydkZWxldGUnXSA9IGZ1bmN0aW9uKG5hbWUpIHtcclxuICAgIGRlbGV0ZSB0aGlzLm1hcFtub3JtYWxpemVOYW1lKG5hbWUpXVxyXG4gIH1cclxuXHJcbiAgSGVhZGVycy5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24obmFtZSkge1xyXG4gICAgbmFtZSA9IG5vcm1hbGl6ZU5hbWUobmFtZSlcclxuICAgIHJldHVybiB0aGlzLmhhcyhuYW1lKSA/IHRoaXMubWFwW25hbWVdIDogbnVsbFxyXG4gIH1cclxuXHJcbiAgSGVhZGVycy5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24obmFtZSkge1xyXG4gICAgcmV0dXJuIHRoaXMubWFwLmhhc093blByb3BlcnR5KG5vcm1hbGl6ZU5hbWUobmFtZSkpXHJcbiAgfVxyXG5cclxuICBIZWFkZXJzLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xyXG4gICAgdGhpcy5tYXBbbm9ybWFsaXplTmFtZShuYW1lKV0gPSBub3JtYWxpemVWYWx1ZSh2YWx1ZSlcclxuICB9XHJcblxyXG4gIEhlYWRlcnMucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbihjYWxsYmFjaywgdGhpc0FyZykge1xyXG4gICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzLm1hcCkge1xyXG4gICAgICBpZiAodGhpcy5tYXAuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcclxuICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXNBcmcsIHRoaXMubWFwW25hbWVdLCBuYW1lLCB0aGlzKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBIZWFkZXJzLnByb3RvdHlwZS5rZXlzID0gZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgaXRlbXMgPSBbXVxyXG4gICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7IGl0ZW1zLnB1c2gobmFtZSkgfSlcclxuICAgIHJldHVybiBpdGVyYXRvckZvcihpdGVtcylcclxuICB9XHJcblxyXG4gIEhlYWRlcnMucHJvdG90eXBlLnZhbHVlcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIGl0ZW1zID0gW11cclxuICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkgeyBpdGVtcy5wdXNoKHZhbHVlKSB9KVxyXG4gICAgcmV0dXJuIGl0ZXJhdG9yRm9yKGl0ZW1zKVxyXG4gIH1cclxuXHJcbiAgSGVhZGVycy5wcm90b3R5cGUuZW50cmllcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIGl0ZW1zID0gW11cclxuICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkgeyBpdGVtcy5wdXNoKFtuYW1lLCB2YWx1ZV0pIH0pXHJcbiAgICByZXR1cm4gaXRlcmF0b3JGb3IoaXRlbXMpXHJcbiAgfVxyXG5cclxuICBpZiAoc3VwcG9ydC5pdGVyYWJsZSkge1xyXG4gICAgSGVhZGVycy5wcm90b3R5cGVbU3ltYm9sLml0ZXJhdG9yXSA9IEhlYWRlcnMucHJvdG90eXBlLmVudHJpZXNcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNvbnN1bWVkKGJvZHkpIHtcclxuICAgIGlmIChib2R5LmJvZHlVc2VkKSB7XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgVHlwZUVycm9yKCdBbHJlYWR5IHJlYWQnKSlcclxuICAgIH1cclxuICAgIGJvZHkuYm9keVVzZWQgPSB0cnVlXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBmaWxlUmVhZGVyUmVhZHkocmVhZGVyKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXNvbHZlKHJlYWRlci5yZXN1bHQpXHJcbiAgICAgIH1cclxuICAgICAgcmVhZGVyLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICByZWplY3QocmVhZGVyLmVycm9yKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVhZEJsb2JBc0FycmF5QnVmZmVyKGJsb2IpIHtcclxuICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpXHJcbiAgICB2YXIgcHJvbWlzZSA9IGZpbGVSZWFkZXJSZWFkeShyZWFkZXIpXHJcbiAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoYmxvYilcclxuICAgIHJldHVybiBwcm9taXNlXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZWFkQmxvYkFzVGV4dChibG9iKSB7XHJcbiAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxyXG4gICAgdmFyIHByb21pc2UgPSBmaWxlUmVhZGVyUmVhZHkocmVhZGVyKVxyXG4gICAgcmVhZGVyLnJlYWRBc1RleHQoYmxvYilcclxuICAgIHJldHVybiBwcm9taXNlXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZWFkQXJyYXlCdWZmZXJBc1RleHQoYnVmKSB7XHJcbiAgICB2YXIgdmlldyA9IG5ldyBVaW50OEFycmF5KGJ1ZilcclxuICAgIHZhciBjaGFycyA9IG5ldyBBcnJheSh2aWV3Lmxlbmd0aClcclxuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZpZXcubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY2hhcnNbaV0gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHZpZXdbaV0pXHJcbiAgICB9XHJcbiAgICByZXR1cm4gY2hhcnMuam9pbignJylcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGJ1ZmZlckNsb25lKGJ1Zikge1xyXG4gICAgaWYgKGJ1Zi5zbGljZSkge1xyXG4gICAgICByZXR1cm4gYnVmLnNsaWNlKDApXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB2YXIgdmlldyA9IG5ldyBVaW50OEFycmF5KGJ1Zi5ieXRlTGVuZ3RoKVxyXG4gICAgICB2aWV3LnNldChuZXcgVWludDhBcnJheShidWYpKVxyXG4gICAgICByZXR1cm4gdmlldy5idWZmZXJcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIEJvZHkoKSB7XHJcbiAgICB0aGlzLmJvZHlVc2VkID0gZmFsc2VcclxuXHJcbiAgICB0aGlzLl9pbml0Qm9keSA9IGZ1bmN0aW9uKGJvZHkpIHtcclxuICAgICAgdGhpcy5fYm9keUluaXQgPSBib2R5XHJcbiAgICAgIGlmICghYm9keSkge1xyXG4gICAgICAgIHRoaXMuX2JvZHlUZXh0ID0gJydcclxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgYm9keSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICB0aGlzLl9ib2R5VGV4dCA9IGJvZHlcclxuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LmJsb2IgJiYgQmxvYi5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSkge1xyXG4gICAgICAgIHRoaXMuX2JvZHlCbG9iID0gYm9keVxyXG4gICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuZm9ybURhdGEgJiYgRm9ybURhdGEucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkpIHtcclxuICAgICAgICB0aGlzLl9ib2R5Rm9ybURhdGEgPSBib2R5XHJcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5zZWFyY2hQYXJhbXMgJiYgVVJMU2VhcmNoUGFyYW1zLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpKSB7XHJcbiAgICAgICAgdGhpcy5fYm9keVRleHQgPSBib2R5LnRvU3RyaW5nKClcclxuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LmFycmF5QnVmZmVyICYmIHN1cHBvcnQuYmxvYiAmJiBpc0RhdGFWaWV3KGJvZHkpKSB7XHJcbiAgICAgICAgdGhpcy5fYm9keUFycmF5QnVmZmVyID0gYnVmZmVyQ2xvbmUoYm9keS5idWZmZXIpXHJcbiAgICAgICAgLy8gSUUgMTAtMTEgY2FuJ3QgaGFuZGxlIGEgRGF0YVZpZXcgYm9keS5cclxuICAgICAgICB0aGlzLl9ib2R5SW5pdCA9IG5ldyBCbG9iKFt0aGlzLl9ib2R5QXJyYXlCdWZmZXJdKVxyXG4gICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuYXJyYXlCdWZmZXIgJiYgKEFycmF5QnVmZmVyLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpIHx8IGlzQXJyYXlCdWZmZXJWaWV3KGJvZHkpKSkge1xyXG4gICAgICAgIHRoaXMuX2JvZHlBcnJheUJ1ZmZlciA9IGJ1ZmZlckNsb25lKGJvZHkpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd1bnN1cHBvcnRlZCBCb2R5SW5pdCB0eXBlJylcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCF0aGlzLmhlYWRlcnMuZ2V0KCdjb250ZW50LXR5cGUnKSkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYm9keSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgIHRoaXMuaGVhZGVycy5zZXQoJ2NvbnRlbnQtdHlwZScsICd0ZXh0L3BsYWluO2NoYXJzZXQ9VVRGLTgnKVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUJsb2IgJiYgdGhpcy5fYm9keUJsb2IudHlwZSkge1xyXG4gICAgICAgICAgdGhpcy5oZWFkZXJzLnNldCgnY29udGVudC10eXBlJywgdGhpcy5fYm9keUJsb2IudHlwZSlcclxuICAgICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuc2VhcmNoUGFyYW1zICYmIFVSTFNlYXJjaFBhcmFtcy5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSkge1xyXG4gICAgICAgICAgdGhpcy5oZWFkZXJzLnNldCgnY29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PVVURi04JylcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoc3VwcG9ydC5ibG9iKSB7XHJcbiAgICAgIHRoaXMuYmxvYiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciByZWplY3RlZCA9IGNvbnN1bWVkKHRoaXMpXHJcbiAgICAgICAgaWYgKHJlamVjdGVkKSB7XHJcbiAgICAgICAgICByZXR1cm4gcmVqZWN0ZWRcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9ib2R5QmxvYikge1xyXG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9ib2R5QmxvYilcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikge1xyXG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShuZXcgQmxvYihbdGhpcy5fYm9keUFycmF5QnVmZmVyXSkpXHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5Rm9ybURhdGEpIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignY291bGQgbm90IHJlYWQgRm9ybURhdGEgYm9keSBhcyBibG9iJylcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShuZXcgQmxvYihbdGhpcy5fYm9keVRleHRdKSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuYXJyYXlCdWZmZXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAodGhpcy5fYm9keUFycmF5QnVmZmVyKSB7XHJcbiAgICAgICAgICByZXR1cm4gY29uc3VtZWQodGhpcykgfHwgUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcilcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuYmxvYigpLnRoZW4ocmVhZEJsb2JBc0FycmF5QnVmZmVyKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudGV4dCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICB2YXIgcmVqZWN0ZWQgPSBjb25zdW1lZCh0aGlzKVxyXG4gICAgICBpZiAocmVqZWN0ZWQpIHtcclxuICAgICAgICByZXR1cm4gcmVqZWN0ZWRcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRoaXMuX2JvZHlCbG9iKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlYWRCbG9iQXNUZXh0KHRoaXMuX2JvZHlCbG9iKVxyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikge1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVhZEFycmF5QnVmZmVyQXNUZXh0KHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikpXHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUZvcm1EYXRhKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3VsZCBub3QgcmVhZCBGb3JtRGF0YSBib2R5IGFzIHRleHQnKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fYm9keVRleHQpXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoc3VwcG9ydC5mb3JtRGF0YSkge1xyXG4gICAgICB0aGlzLmZvcm1EYXRhID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGV4dCgpLnRoZW4oZGVjb2RlKVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5qc29uID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnRleHQoKS50aGVuKEpTT04ucGFyc2UpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXNcclxuICB9XHJcblxyXG4gIC8vIEhUVFAgbWV0aG9kcyB3aG9zZSBjYXBpdGFsaXphdGlvbiBzaG91bGQgYmUgbm9ybWFsaXplZFxyXG4gIHZhciBtZXRob2RzID0gWydERUxFVEUnLCAnR0VUJywgJ0hFQUQnLCAnT1BUSU9OUycsICdQT1NUJywgJ1BVVCddXHJcblxyXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZU1ldGhvZChtZXRob2QpIHtcclxuICAgIHZhciB1cGNhc2VkID0gbWV0aG9kLnRvVXBwZXJDYXNlKClcclxuICAgIHJldHVybiAobWV0aG9kcy5pbmRleE9mKHVwY2FzZWQpID4gLTEpID8gdXBjYXNlZCA6IG1ldGhvZFxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gUmVxdWVzdChpbnB1dCwgb3B0aW9ucykge1xyXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge31cclxuICAgIHZhciBib2R5ID0gb3B0aW9ucy5ib2R5XHJcblxyXG4gICAgaWYgKGlucHV0IGluc3RhbmNlb2YgUmVxdWVzdCkge1xyXG4gICAgICBpZiAoaW5wdXQuYm9keVVzZWQpIHtcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBbHJlYWR5IHJlYWQnKVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMudXJsID0gaW5wdXQudXJsXHJcbiAgICAgIHRoaXMuY3JlZGVudGlhbHMgPSBpbnB1dC5jcmVkZW50aWFsc1xyXG4gICAgICBpZiAoIW9wdGlvbnMuaGVhZGVycykge1xyXG4gICAgICAgIHRoaXMuaGVhZGVycyA9IG5ldyBIZWFkZXJzKGlucHV0LmhlYWRlcnMpXHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5tZXRob2QgPSBpbnB1dC5tZXRob2RcclxuICAgICAgdGhpcy5tb2RlID0gaW5wdXQubW9kZVxyXG4gICAgICBpZiAoIWJvZHkgJiYgaW5wdXQuX2JvZHlJbml0ICE9IG51bGwpIHtcclxuICAgICAgICBib2R5ID0gaW5wdXQuX2JvZHlJbml0XHJcbiAgICAgICAgaW5wdXQuYm9keVVzZWQgPSB0cnVlXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudXJsID0gU3RyaW5nKGlucHV0KVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY3JlZGVudGlhbHMgPSBvcHRpb25zLmNyZWRlbnRpYWxzIHx8IHRoaXMuY3JlZGVudGlhbHMgfHwgJ29taXQnXHJcbiAgICBpZiAob3B0aW9ucy5oZWFkZXJzIHx8ICF0aGlzLmhlYWRlcnMpIHtcclxuICAgICAgdGhpcy5oZWFkZXJzID0gbmV3IEhlYWRlcnMob3B0aW9ucy5oZWFkZXJzKVxyXG4gICAgfVxyXG4gICAgdGhpcy5tZXRob2QgPSBub3JtYWxpemVNZXRob2Qob3B0aW9ucy5tZXRob2QgfHwgdGhpcy5tZXRob2QgfHwgJ0dFVCcpXHJcbiAgICB0aGlzLm1vZGUgPSBvcHRpb25zLm1vZGUgfHwgdGhpcy5tb2RlIHx8IG51bGxcclxuICAgIHRoaXMucmVmZXJyZXIgPSBudWxsXHJcblxyXG4gICAgaWYgKCh0aGlzLm1ldGhvZCA9PT0gJ0dFVCcgfHwgdGhpcy5tZXRob2QgPT09ICdIRUFEJykgJiYgYm9keSkge1xyXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdCb2R5IG5vdCBhbGxvd2VkIGZvciBHRVQgb3IgSEVBRCByZXF1ZXN0cycpXHJcbiAgICB9XHJcbiAgICB0aGlzLl9pbml0Qm9keShib2R5KVxyXG4gIH1cclxuXHJcbiAgUmVxdWVzdC5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiBuZXcgUmVxdWVzdCh0aGlzLCB7IGJvZHk6IHRoaXMuX2JvZHlJbml0IH0pXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBkZWNvZGUoYm9keSkge1xyXG4gICAgdmFyIGZvcm0gPSBuZXcgRm9ybURhdGEoKVxyXG4gICAgYm9keS50cmltKCkuc3BsaXQoJyYnKS5mb3JFYWNoKGZ1bmN0aW9uKGJ5dGVzKSB7XHJcbiAgICAgIGlmIChieXRlcykge1xyXG4gICAgICAgIHZhciBzcGxpdCA9IGJ5dGVzLnNwbGl0KCc9JylcclxuICAgICAgICB2YXIgbmFtZSA9IHNwbGl0LnNoaWZ0KCkucmVwbGFjZSgvXFwrL2csICcgJylcclxuICAgICAgICB2YXIgdmFsdWUgPSBzcGxpdC5qb2luKCc9JykucmVwbGFjZSgvXFwrL2csICcgJylcclxuICAgICAgICBmb3JtLmFwcGVuZChkZWNvZGVVUklDb21wb25lbnQobmFtZSksIGRlY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICByZXR1cm4gZm9ybVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcGFyc2VIZWFkZXJzKHJhd0hlYWRlcnMpIHtcclxuICAgIHZhciBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKVxyXG4gICAgcmF3SGVhZGVycy5zcGxpdCgvXFxyP1xcbi8pLmZvckVhY2goZnVuY3Rpb24obGluZSkge1xyXG4gICAgICB2YXIgcGFydHMgPSBsaW5lLnNwbGl0KCc6JylcclxuICAgICAgdmFyIGtleSA9IHBhcnRzLnNoaWZ0KCkudHJpbSgpXHJcbiAgICAgIGlmIChrZXkpIHtcclxuICAgICAgICB2YXIgdmFsdWUgPSBwYXJ0cy5qb2luKCc6JykudHJpbSgpXHJcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoa2V5LCB2YWx1ZSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIHJldHVybiBoZWFkZXJzXHJcbiAgfVxyXG5cclxuICBCb2R5LmNhbGwoUmVxdWVzdC5wcm90b3R5cGUpXHJcblxyXG4gIGZ1bmN0aW9uIFJlc3BvbnNlKGJvZHlJbml0LCBvcHRpb25zKSB7XHJcbiAgICBpZiAoIW9wdGlvbnMpIHtcclxuICAgICAgb3B0aW9ucyA9IHt9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy50eXBlID0gJ2RlZmF1bHQnXHJcbiAgICB0aGlzLnN0YXR1cyA9ICdzdGF0dXMnIGluIG9wdGlvbnMgPyBvcHRpb25zLnN0YXR1cyA6IDIwMFxyXG4gICAgdGhpcy5vayA9IHRoaXMuc3RhdHVzID49IDIwMCAmJiB0aGlzLnN0YXR1cyA8IDMwMFxyXG4gICAgdGhpcy5zdGF0dXNUZXh0ID0gJ3N0YXR1c1RleHQnIGluIG9wdGlvbnMgPyBvcHRpb25zLnN0YXR1c1RleHQgOiAnT0snXHJcbiAgICB0aGlzLmhlYWRlcnMgPSBuZXcgSGVhZGVycyhvcHRpb25zLmhlYWRlcnMpXHJcbiAgICB0aGlzLnVybCA9IG9wdGlvbnMudXJsIHx8ICcnXHJcbiAgICB0aGlzLl9pbml0Qm9keShib2R5SW5pdClcclxuICB9XHJcblxyXG4gIEJvZHkuY2FsbChSZXNwb25zZS5wcm90b3R5cGUpXHJcblxyXG4gIFJlc3BvbnNlLnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZSh0aGlzLl9ib2R5SW5pdCwge1xyXG4gICAgICBzdGF0dXM6IHRoaXMuc3RhdHVzLFxyXG4gICAgICBzdGF0dXNUZXh0OiB0aGlzLnN0YXR1c1RleHQsXHJcbiAgICAgIGhlYWRlcnM6IG5ldyBIZWFkZXJzKHRoaXMuaGVhZGVycyksXHJcbiAgICAgIHVybDogdGhpcy51cmxcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBSZXNwb25zZS5lcnJvciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIHJlc3BvbnNlID0gbmV3IFJlc3BvbnNlKG51bGwsIHtzdGF0dXM6IDAsIHN0YXR1c1RleHQ6ICcnfSlcclxuICAgIHJlc3BvbnNlLnR5cGUgPSAnZXJyb3InXHJcbiAgICByZXR1cm4gcmVzcG9uc2VcclxuICB9XHJcblxyXG4gIHZhciByZWRpcmVjdFN0YXR1c2VzID0gWzMwMSwgMzAyLCAzMDMsIDMwNywgMzA4XVxyXG5cclxuICBSZXNwb25zZS5yZWRpcmVjdCA9IGZ1bmN0aW9uKHVybCwgc3RhdHVzKSB7XHJcbiAgICBpZiAocmVkaXJlY3RTdGF0dXNlcy5pbmRleE9mKHN0YXR1cykgPT09IC0xKSB7XHJcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHN0YXR1cyBjb2RlJylcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKG51bGwsIHtzdGF0dXM6IHN0YXR1cywgaGVhZGVyczoge2xvY2F0aW9uOiB1cmx9fSlcclxuICB9XHJcblxyXG4gIHNlbGYuSGVhZGVycyA9IEhlYWRlcnNcclxuICBzZWxmLlJlcXVlc3QgPSBSZXF1ZXN0XHJcbiAgc2VsZi5SZXNwb25zZSA9IFJlc3BvbnNlXHJcblxyXG4gIHNlbGYuZmV0Y2ggPSBmdW5jdGlvbihpbnB1dCwgaW5pdCkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICB2YXIgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KGlucHV0LCBpbml0KVxyXG4gICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KClcclxuXHJcbiAgICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgb3B0aW9ucyA9IHtcclxuICAgICAgICAgIHN0YXR1czogeGhyLnN0YXR1cyxcclxuICAgICAgICAgIHN0YXR1c1RleHQ6IHhoci5zdGF0dXNUZXh0LFxyXG4gICAgICAgICAgaGVhZGVyczogcGFyc2VIZWFkZXJzKHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSB8fCAnJylcclxuICAgICAgICB9XHJcbiAgICAgICAgb3B0aW9ucy51cmwgPSAncmVzcG9uc2VVUkwnIGluIHhociA/IHhoci5yZXNwb25zZVVSTCA6IG9wdGlvbnMuaGVhZGVycy5nZXQoJ1gtUmVxdWVzdC1VUkwnKVxyXG4gICAgICAgIHZhciBib2R5ID0gJ3Jlc3BvbnNlJyBpbiB4aHIgPyB4aHIucmVzcG9uc2UgOiB4aHIucmVzcG9uc2VUZXh0XHJcbiAgICAgICAgcmVzb2x2ZShuZXcgUmVzcG9uc2UoYm9keSwgb3B0aW9ucykpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHhoci5vbmVycm9yID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmVqZWN0KG5ldyBUeXBlRXJyb3IoJ05ldHdvcmsgcmVxdWVzdCBmYWlsZWQnKSlcclxuICAgICAgfVxyXG5cclxuICAgICAgeGhyLm9udGltZW91dCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJlamVjdChuZXcgVHlwZUVycm9yKCdOZXR3b3JrIHJlcXVlc3QgZmFpbGVkJykpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHhoci5vcGVuKHJlcXVlc3QubWV0aG9kLCByZXF1ZXN0LnVybCwgdHJ1ZSlcclxuXHJcbiAgICAgIGlmIChyZXF1ZXN0LmNyZWRlbnRpYWxzID09PSAnaW5jbHVkZScpIHtcclxuICAgICAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoJ3Jlc3BvbnNlVHlwZScgaW4geGhyICYmIHN1cHBvcnQuYmxvYikge1xyXG4gICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSAnYmxvYidcclxuICAgICAgfVxyXG5cclxuICAgICAgcmVxdWVzdC5oZWFkZXJzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHtcclxuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihuYW1lLCB2YWx1ZSlcclxuICAgICAgfSlcclxuXHJcbiAgICAgIHhoci5zZW5kKHR5cGVvZiByZXF1ZXN0Ll9ib2R5SW5pdCA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogcmVxdWVzdC5fYm9keUluaXQpXHJcbiAgICB9KVxyXG4gIH1cclxuICBzZWxmLmZldGNoLnBvbHlmaWxsID0gdHJ1ZVxyXG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcyk7XHJcbiIsImltcG9ydCBcIi4vRnVuY3Rpb24ubmFtZS5qc1wiXHJcbmltcG9ydCBcIi4vRWxlbWVudC5jaGlsZHJlbi5qc1wiXHJcbmltcG9ydCBcIi4vQXJyYXkuZmluZC5qc1wiXHJcbmltcG9ydCBcIi4vQXJyYXkuZnJvbS5qc1wiXHJcbmltcG9ydCBcIi4vQ3VzdG9tRXZlbnQuanNcIlxyXG5pbXBvcnQgXCIuL2ZldGNoLmpzXCJcclxuaW1wb3J0IFwiLi9Qcm9taXNlXCIiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uLy4uL2xpYi9Db21wb25lbnQuanMnXHJcbmltcG9ydCB7bWFwRXZlbnR9IGZyb20gJy4uLy4uL2xpYi91dGlscy5qcydcclxuaW1wb3J0IHtzZXRXaW5kb3dTaXplLCBzZXRTY3JvbGxQb3N9IGZyb20gJy4vYWN0aW9ucy5qcyc7XHJcbmltcG9ydCB7IHBhcnNlU3RyaW5nVG9IVE1MIH0gZnJvbSAnLi4vLi4vdXRpbHMuanMnO1xyXG5pbXBvcnQgUGhvdG8gZnJvbSAnLi4vUGhvdG8vUGhvdG8uanMnO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4vTG9hZGVyLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExhbmRpbmcgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNsYXNzTmFtZSkge1xyXG4gICAgICAgIHN1cGVyKGNsYXNzTmFtZSwgW1Bob3RvXSk7XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdGVkID0gZmFsc2U7XHJcbiAgICAgICAgXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIobWFwRXZlbnQoJ3Jlc2l6ZScpLCBzZXRXaW5kb3dTaXplKVxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoZXYpID0+IHtzZXRTY3JvbGxQb3ModGhpcy4kY2xpcCl9KTtcclxuXHJcbiAgICAgICAgc2V0V2luZG93U2l6ZSgpO1xyXG4gICAgICAgIHNldFNjcm9sbFBvcyh0aGlzLiRjbGlwKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0ZVRvcHJvcHMoc3RhdGUpIHtcclxuICAgICAgICBjb25zdCBpbWFnZXMgPSBbLi4uKHN0YXRlLmltYWdlc3x8W10pXTtcclxuICAgICAgICBjb25zdCB7d2luV30gPSB7Li4uc3RhdGUuQXBwfTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgcm93cyA9IDEwO1xyXG4gICAgICAgIGxldCBpbWFnZVcgPSAoKSA9PiBNYXRoLmZsb29yKHdpblcvcm93cyk7XHJcbiAgICAgICAgd2hpbGUoaW1hZ2VXKCk8MTUwKXtcclxuICAgICAgICAgICAgcm93cy0tO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuICh7XHJcbiAgICAgICAgICAgIGltYWdlcyxcclxuICAgICAgICAgICAgaW1hZ2VXOiBpbWFnZVcoKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IGltYWdlcyA9IHRoaXMucHJvcHMuaW1hZ2VzO1xyXG4gICAgICAgIGNvbnN0IGxvYWRlZCA9IGltYWdlcyAmJiBpbWFnZXMubGVuZ3RoO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiAoYFxyXG4gICAgICAgICAgICA8c3R5bGU+XHJcbiAgICAgICAgICAgICAgICAuR2FsbGVyeV9fcGhvdG8ge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAke3RoaXMucHJvcHMuaW1hZ2VXfXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogJHt0aGlzLnByb3BzLmltYWdlV31weDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgJHtMb2FkZXIobG9hZGVkKX1cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIkdhbGxlcnlfX2hlYWRlclwiPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIkdhbGxlcnlfX2NvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICR7bG9hZGVkID8gYFxyXG4gICAgICAgICAgICAgICAgICAgICR7aW1hZ2VzLm1hcChpbWFnZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gcGFyc2VTdHJpbmdUb0hUTUwoaW1hZ2UudGl0bGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvd25lciA9IHBhcnNlU3RyaW5nVG9IVE1MKGltYWdlLm93bmVybmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlVXJsID0gaW1hZ2UudXJsX3MgfHwgaW1hZ2UudXJsX3EgfHwgaW1hZ2UudXJsX3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuKGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQaG90byBjbGFzcz1cIkdhbGxlcnlfX3Bob3RvIFBob3RvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIiR7aW1hZ2UuaWR9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw9XCIke2ltYWdlVXJsfVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcHRpb249XCIke3RpdGxlfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3duZXI9XCIke293bmVyfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9QaG90bz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYClcclxuICAgICAgICAgICAgICAgICAgICB9KS5qb2luKCcnKX1cclxuICAgICAgICAgICAgICAgIGAgOiAnJ31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJHYWxsZXJ5X19mb290ZXJcIj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYClcclxuICAgIH1cclxufVxyXG5cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9hZGVyKGxvYWRlZCkge1xyXG4gICAgcmV0dXJuKGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiTG9hZGVyIExvYWRlci0tJHtsb2FkZWQgPyAnbG9hZGVkJyA6ICdsb2FkaW5nJ31cIj5cclxuICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjM4XCIgaGVpZ2h0PVwiMzhcIiB2aWV3Qm94PVwiMCAwIDM4IDM4XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHN0cm9rZT1cIiNhYzBlMzVcIj5cclxuICAgICAgICAgICAgICAgIDxnIGZpbGw9XCJub25lXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxIDEpXCIgc3Ryb2tlLXdpZHRoPVwiMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIHN0cm9rZS1vcGFjaXR5PVwiLjVcIiBjeD1cIjE4XCIgY3k9XCIxOFwiIHI9XCIxNlwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFuaW1hdGVUcmFuc2Zvcm1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVOYW1lPVwidHJhbnNmb3JtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicm90YXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tPVwiMCAxOCAxOFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89XCIzNjAgMTggMThcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cj1cIjFzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYClcclxufSIsImltcG9ydCB7IGFjdGlvbnMgYXMgbGliQWN0aW9ucyB9IGZyb20gJy4uLy4uL2xpYi9hY3Rpb25zLmpzJ1xyXG5pbXBvcnQgeyBkaXNwYXRjaEFjdGlvbiwgc3RhdGUgfSBmcm9tICcuLi8uLi9saWIvc3RvcmUuanMnO1xyXG5pbXBvcnQgeyBnZXRJbWFnZXNKU09OIH0gZnJvbSAnLi4vLi4vZGF0YS9mbGlja3JBUEkuanMnO1xyXG5pbXBvcnQgeyBnZXRPZmZzZXQsIGdldFdpbmRvd1NpemUgfSBmcm9tICcuLi8uLi91dGlscy5qcyc7XHJcblxyXG5leHBvcnQgY29uc3QgYWN0aW9ucyA9IHtcclxuICAgIEdFVF9JTUFHRVM6ICdHRVRfSU1BR0VTJ1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbW9kZXMgPSB7XHJcbiAgICBERVNLVE9QOiAnZGVza3RvcCcsXHJcbiAgICBNT0JJTEU6ICdtb2JpbGUnXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRJbWFnZXMocGFnZSkge1xyXG4gICAgZGlzcGF0Y2hBY3Rpb24obGliQWN0aW9ucy5TRVRfQVBQX1BST1AsIHtcclxuICAgICAgICBwYWdlTG9hZGluZzogcGFnZVxyXG4gICAgfSlcclxuICAgIGdldEltYWdlc0pTT04ocGFnZSlcclxuICAgICAgICAudGhlbihyZXN1bHRzID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2hBY3Rpb24obGliQWN0aW9ucy5TRVRfQVBQX1BST1AsIHtcclxuICAgICAgICAgICAgICAgIHBhZ2VMb2FkaW5nOiBudWxsLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBkaXNwYXRjaEFjdGlvbihhY3Rpb25zLkdFVF9JTUFHRVMsIHJlc3VsdHMucGhvdG9zKVxyXG4gICAgICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRXaW5kb3dTaXplKCl7XHJcbiAgICBjb25zdCB3aW5kb3dTaXplID0gZ2V0V2luZG93U2l6ZSgpO1xyXG5cclxuICAgIGRpc3BhdGNoQWN0aW9uKGxpYkFjdGlvbnMuU0VUX0FQUF9QUk9QLCB7XHJcbiAgICAgICAgd2luVzogd2luZG93U2l6ZS53aWR0aC03LFxyXG4gICAgICAgIHdpbkg6IHdpbmRvd1NpemUuaGVpZ2h0LFxyXG4gICAgICAgIG1vZGU6IHdpbmRvd1NpemUud2lkdGggPiA3NjcgPyBtb2Rlcy5ERVNLVE9QIDogbW9kZXMuTU9CSUxFIFxyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFNjcm9sbFBvcyhjbGlwKXtcclxuICAgIGNvbnN0IG9mZnNldCA9IGdldE9mZnNldChjbGlwKTtcclxuICAgIGNvbnN0IHdpbkggPSBnZXRXaW5kb3dTaXplKCkuaGVpZ2h0XHJcbiAgICBcclxuICAgIGlmKG9mZnNldC50b3AgKyBvZmZzZXQuaGVpZ2h0IDwgd2luSCoxLjkpe1xyXG4gICAgICAgIGNvbnN0IG5leHRQYWdlID0gc3RhdGUucGFnZSsxO1xyXG4gICAgICAgIGlmKG5leHRQYWdlICE9PSBzdGF0ZS5BcHAucGFnZUxvYWRpbmcpe1xyXG4gICAgICAgICAgICBnZXRJbWFnZXMobmV4dFBhZ2UpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcmVkdWNlcnMgPSB7XHJcbiAgICBbYWN0aW9ucy5HRVRfSU1BR0VTXTogc2V0SW1hZ2VzXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldEltYWdlcyhzdGF0ZSwgcGF5bG9hZCkge1xyXG4gICAgY29uc3Qge3Bob3RvOiBpbWFnZXMsIHBhZ2UsIHBlcnBhZ2V9ID0gey4uLnBheWxvYWR9XHJcbiAgICByZXR1cm4gKHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBpbWFnZXM6IFsuLi5zdGF0ZS5pbWFnZXMsLi4uaW1hZ2VzXSxcclxuICAgICAgICBwYWdlLFxyXG4gICAgICAgIHBlcnBhZ2VcclxuICAgIH0pXHJcbn1cclxuXHJcbiIsIlxyXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uLy4uL2xpYi9Db21wb25lbnQuanMnXHJcbmltcG9ydCB7IGdvT3V0IH0gZnJvbSAnLi4vLi4vbGliL3JvdXRlci5qcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBob3RvIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKGNsYXNzTmFtZSkge1xyXG4gICAgICAgIHN1cGVyKGNsYXNzTmFtZSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHN0YXRlVG9wcm9wcyhzdGF0ZSl7XHJcbiAgICAgICAgcmV0dXJuICh7IFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBcclxuICAgIG9uQ2xpY2tJbWFnZShldikge1xyXG4gICAgICAgIGdvT3V0KHRoaXMucHJvcHMucGFja2FnZS5tb3RvZ3BVcmwpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgaW1hZ2VTdHlsZSA9IGBiYWNrZ3JvdW5kLWltYWdlOnVybCgnJHt0aGlzLmRvbVByb3BzLnVybH0nKWBcclxuICAgICAgICByZXR1cm4oYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiUGhvdG9fX2ltYWdlXCIgc3R5bGU9XCIke2ltYWdlU3R5bGV9XCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJQaG90b19faW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlBob3RvX190aXRsZVwiPiR7dGhpcy5kb21Qcm9wcy5jYXB0aW9ufTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlBob3RvX19vd25lclwiPiR7dGhpcy5kb21Qcm9wcy5vd25lcn08L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYClcclxuICAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJy4uL2xpYi91dGlscy5qcyc7XHJcblxyXG5mdW5jdGlvbiBnZXRBUElTZXJ2ZXIoKSB7XHJcbiAgICBjb25zdCBrZXkgPSAnMzYxNDEwMzgxZTBiYjE4ODVlZTZhZDI0YzAzNDgwMDcnO1xyXG4gICAgY29uc3QgbWV0aG9kID0gJ2ZsaWNrci5waG90b3Muc2VhcmNoJztcclxuICAgIGNvbnN0IGZvcm1hdCA9ICdqc29uJztcclxuICAgIGNvbnN0IHRleHQgPSBcImFyY2hkYWlseVwiO1xyXG4gICAgY29uc3QgYXR0cyA9ICc/c29ydD1yZWxldmFuY2UmcGFyc2VfdGFncz0xJmNvbnRlbnRfdHlwZT03Jmxhbmc9ZXMtVVMmdGV4dD1hcmNoZGFpbHkmdmlld2VyTlNJRD0mY3NyZj0maGVybWVzPTEmaGVybWVzQ2xpZW50PTEmcmVxSWQ9NGEzOTQxMzUmbm9qc29uY2FsbGJhY2s9MSdcclxuICAgIHJldHVybiBgaHR0cHM6Ly93d3cuZmxpY2tyLmNvbS9zZXJ2aWNlcy9yZXN0LyR7YXR0c30mdGV4dD0ke3RleHR9Jm1ldGhvZD0ke21ldGhvZH0mZm9ybWF0PSR7Zm9ybWF0fSZhcGlfa2V5PSR7a2V5fWA7XHJcbn1cclxuXHJcbmNvbnN0IGFwaVNlcnZlciA9IGdldEFQSVNlcnZlcigpO1xyXG5cclxuY29uc3QgUFJPRF9ST1VURVMgPSB7XHJcbiAgICBwaG90b3M6IGAke2FwaVNlcnZlcn0mZXh0cmFzPW93bmVyX25hbWUsdXJsX3NxLCB1cmxfdCwgdXJsX3MsIHVybF9xLCB1cmxfbSwgdXJsX2xgXHJcbn07XHJcblxyXG5jb25zdCBBUElfUk9VVEVTID0geyAuLi5QUk9EX1JPVVRFUyxcclxuICAgIC4uLndpbmRvdy5ERVZfUk9VVEVTXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvbkZldGNoRXJyb3IoZXJyKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImZldGNoIGVycm9yOiBcIiwgZXJyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEltYWdlc0pTT04ocGFnZSkge1xyXG4gICAgcmV0dXJuIF9nZXQoYCR7QVBJX1JPVVRFUy5waG90b3N9JnBhZ2U9JHtwYWdlfHwxfWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfZ2V0KHVybCwgY29uZmlnKSB7XHJcbiAgICBpZiAoaXNGdW5jdGlvbih1cmwpKSB7XHJcbiAgICAgICAgdXJsID0gdXJsKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX2dwRmV0Y2godXJsLCBjb25maWcpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gX2dwRmV0Y2godXJsLCBjb25maWcpIHtcclxuICAgIHJldHVybiBmZXRjaCh1cmwsIGNvbmZpZylcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29udGVudFR5cGUgPSByZXNwb25zZS5oZWFkZXJzLmdldChcIkNvbnRlbnQtVHlwZVwiKSB8fCBcIlwiO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjb250ZW50VHlwZS5pbmRleE9mKFwiYXBwbGljYXRpb24vanNvblwiKSAhPSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCkuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRXJyb3IoXCJJbnZhbGlkIEpTT046IFwiICsgZXJyb3IubWVzc2FnZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY29udGVudFR5cGUuaW5kZXhPZihcInRleHQvaHRtbFwiKSAhPSAtMSB8fCBjb250ZW50VHlwZS5pbmRleE9mKFwidGV4dC9qYXZhc2NyaXB0XCIpICE9IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50ZXh0KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IFByb21pc2UucmVqZWN0KGVycm9yKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFxyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBFcnJvcihcIkludmFsaWQgY29udGVudCB0eXBlOiBcIiArIGNvbnRlbnRUeXBlKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PSA0MDQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJQYWdlIG5vdCBmb3VuZDogXCIgKyB1cmwpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkhUVFAgZXJyb3I6IFwiICsgcmVzcG9uc2Uuc3RhdHVzKSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4gUHJvbWlzZS5yZWplY3QoZXJyb3IpKTtcclxufSIsIlxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgaW1hZ2VzOiBbXSxcclxuICAgIHBlcnBhZ2U6MTAwLFxyXG4gICAgcGFnZToyXHJcbn07XHJcblxyXG4iLCJpbXBvcnQgeyBzdGF0ZSB9IGZyb20gJy4vc3RvcmUuanMnO1xyXG5pbXBvcnQgeyBpc0RPTUVsZW1lbnQsIGlzU3RyaW5nLCBjbGVhbkNoaWxkTm9kZXMsIGdldEFsbEF0dHJpYnV0ZXMsIGFYcGxhaW5XYXJuLCBtYXBFdmVudCB9IGZyb20gJy4vdXRpbHMuanMnXHJcblxyXG5jb25zdCB1bmlxdWVOYW1lcyA9IFtdO1xyXG5mdW5jdGlvbiBnZXRVbmlxdWVOYW1lKG5hbWUpe1xyXG4gICAgY29uc3Qgb3JpZ05hbWUgPSBuYW1lO1xyXG4gICAgbGV0IGluZGV4ID0gMDtcclxuICAgIHdoaWxlICh1bmlxdWVOYW1lcy5pbmRleE9mKG5hbWUpICE9IC0xKXtcclxuICAgICAgICBuYW1lID0gb3JpZ05hbWUgKyBpbmRleCsrXHJcbiAgICB9XHJcbiAgICB1bmlxdWVOYW1lcy5wdXNoKG5hbWUpO1xyXG4gICAgcmV0dXJuIG5hbWU7XHJcbn1cclxuXHJcbmNvbnN0IGlzVGV4dE5vZGUgPSAobm9kZSkgPT4gbm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREU7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGluaXRpYXRvciwgY2xhc3NlczJSZW5kZXIpIHtcclxuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBpc0RPTUVsZW1lbnQoaW5pdGlhdG9yKSA/IHRoaXMuY29uc3RydWN0b3IubmFtZSA6IGluaXRpYXRvciB8fCB0aGlzLmNvbnN0cnVjdG9yLm5hbWU7XHJcbiAgICAgICAgY29uc3QgRE9NRWxlbWVudCA9IGlzRE9NRWxlbWVudChpbml0aWF0b3IpID8gW2luaXRpYXRvcl0gOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuJHtjbGFzc05hbWV9YCk7XHJcblxyXG4gICAgICAgIGlmIChET01FbGVtZW50Lmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke3RoaXMudHlwZX06XHJcbiAgICAgICAgICAgIEEgQ29tcG9uZW50IG5lZWRzIGEgdW5pcXVlIERPTSBFbGVtZW50IHRvIGluaXRpYWxpemUsXHJcbiAgICAgICAgICAgIHRoZXJlIGFyZSAke0RPTUVsZW1lbnQubGVuZ3RofSAnJHtjbGFzc05hbWV9JyBhdCBET01gKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFET01FbGVtZW50Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7dGhpcy50eXBlfTpcclxuICAgICAgICAgICAgICAgIENvbXBvbmVudCBuZWVkcyB0byBiZSBpbml0aWFsaXphdGVkIHdpdGggYSBzaW5nbGUgRE9NRWxlbWVudCxcclxuICAgICAgICAgICAgICAgIHRoZXJlIGFyZSBub3QgYW55ICcke2NsYXNzTmFtZX0nIGF0IERPTWApXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLiRjbGlwID0gRE9NRWxlbWVudFswXTtcclxuICAgICAgICB0aGlzLl9uYW1lID0gZ2V0VW5pcXVlTmFtZShjbGFzc05hbWUpO1xyXG4gICAgICAgIHRoaXMuX2NsYXNzZXMyUmVuZGVyID0gY2xhc3NlczJSZW5kZXIgfHwgW107XHJcbiAgICAgICAgdGhpcy5wcm9wcyA9IHt9O1xyXG4gICAgICAgIHRoaXMuZG9tUHJvcHMgPSB7fTtcclxuXHJcbiAgICAgICAgdGhpcy5fY29tcG9uZW50cyA9IHt9O1xyXG5cclxuICAgICAgICB0aGlzLl9zdGF0ZUxpc3RlbmVyID0gdGhpcy5fb25DaGFuZ2VTdGF0ZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3N0YXRlJywgdGhpcy5fc3RhdGVMaXN0ZW5lcik7XHJcblxyXG4gICAgICAgIHRoaXMuX3N0YXRlTGlzdGVuZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdHlwZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QXBwUHJvcChwcm9wTmFtZSl7XHJcbiAgICAgICAgcmV0dXJuIChzdGF0ZS5BcHAgfHwge30pW3Byb3BOYW1lXTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0ZVRvcHJvcHMoc3RhdGUpIHtcclxuICAgICAgICBjb25zdCBjb21wb25lbnRTdGF0ZSA9IChzdGF0ZS5Db21wb25lbnRzIHx8IFtdKVt0aGlzLm5hbWVdXHJcbiAgICAgICAgcmV0dXJuIHsgLi4uY29tcG9uZW50U3RhdGUgfTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIGBIZWxsbyBJJ20gJHt0aGlzLm5hbWV9IGFuZCB0aGVzZSBhcmUgbXkgcHJvcHM6ICR7dGhpcy5wcm9wc31gO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclRlbXBsYXRlKCRkb21FbGVtZW50LCB0ZW1wbGF0ZVRwbCkge1xyXG4gICAgICAgIGNvbnN0IHRlbXBsYXRlU3RyID0gdGVtcGxhdGVUcGwucmVwbGFjZSgvKD86XFxyXFxufFxccnxcXG4pL2csICcnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL29ubG9hZD0vZywgJ29ubG9hZF9heHBsYWluPScpO1xyXG5cclxuICAgICAgICBpZiAoISRkb21FbGVtZW50IHx8ICFpc0RPTUVsZW1lbnQoJGRvbUVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYCR7dGhpcy50eXBlfTogcmVuZGVyVGVtcGxhdGUgcmVxdWlyZXMgYSBET01FbGVtZW50IGFuZCB5b3UgcGFzc2VkIFskeyRkb21FbGVtZW50fV1gKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRlbXBsYXRlU3RyIHx8ICFpc1N0cmluZyh0ZW1wbGF0ZVN0cikpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgJHt0aGlzLnR5cGV9OiByZW5kZXJUZW1wbGF0ZSByZXF1aXJlcyBhIHN0cmluZyBhbmQgeW91IHBhc3NlZCBbJHskZG9tRWxlbWVudH1dYClcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCEkZG9tRWxlbWVudC5jaGlsZHJlbi5sZW5ndGgpIHtcclxuICAgICAgICAgICAgJGRvbUVsZW1lbnQuaW5uZXJIVE1MID0gdGVtcGxhdGVTdHI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCAkdGVtcERvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAkdGVtcERvbS5pbm5lckhUTUwgPSB0ZW1wbGF0ZVN0cjtcclxuXHJcbiAgICAgICAgICAgIGlmICgkZG9tRWxlbWVudC5pbm5lckhUTUwgPT09ICR0ZW1wRG9tLmlubmVySFRNTCkge1xyXG4gICAgICAgICAgICAgICAgYVhwbGFpbldhcm4oXHJcbiAgICAgICAgICAgICAgICAgICAgYCR7dGhpcy50eXBlfTogdGhlIHVwZGF0ZWQgRE9NIHByb3ZpZGVkIHRvIHJlbmRlclRlbXBsYXRlIGlzIGVxdWFsIHRoYW5cclxuICAgICAgICAgICAgICAgICAgICBhY3R1YWwgRE9NLCBtYXliZSBvdXIgc3RhdGVUb1Byb3BzIGZ1bmN0aW9uIGlzIG5vdCB3ZWxsIG9wdGltaXplZGBcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICghJHRlbXBEb20uY2hpbGRyZW4ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAkZG9tRWxlbWVudC5pbm5lckhUTUwgPSAkdGVtcERvbS5pbm5lckhUTUxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZURvbUVsZW1lbnQoJGRvbUVsZW1lbnQsICR0ZW1wRG9tKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fc2V0RG9tRXZlbnRzKCRkb21FbGVtZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBmb3JjZVJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB0bXBTdHIgPSB0aGlzLnJlbmRlcigpO1xyXG5cclxuICAgICAgICBpZiAodG1wU3RyKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyVGVtcGxhdGUodGhpcy4kY2xpcCwgdG1wU3RyKVxyXG4gICAgICAgICAgICBpZih0aGlzLl9jbGFzc2VzMlJlbmRlciAmJiB0aGlzLl9jbGFzc2VzMlJlbmRlci5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pbml0U3ViY29tcG9uZW50cygpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZighIXRoaXMub25FbmRSZW5kZXIpe1xyXG4gICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uRW5kUmVuZGVyKCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9pbml0U3ViY29tcG9uZW50cygpe1xyXG4gICAgICAgIHRoaXMuX2NvbXBvbmVudHMgPSB0aGlzLl9jb21wb25lbnRzIHx8IFtdO1xyXG5cclxuICAgICAgICB0aGlzLl9jbGFzc2VzMlJlbmRlci5tYXAoY2xhc3NGdW5jID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gY2xhc3NGdW5jLnByb3RvdHlwZS5jb25zdHJ1Y3Rvci5uYW1lO1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50cyA9IHRoaXMuJGNsaXAucXVlcnlTZWxlY3RvckFsbChjbGFzc05hbWUudG9Mb3dlckNhc2UoKSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhlbGVtZW50cykuZm9yRWFjaCgoaWQsaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRlbXBOYW1lID0gZWxlbWVudHNbaWRdLmdldEF0dHJpYnV0ZSgnaWQnKSB8fCBjbGFzc05hbWUgKyBpbmRleDtcclxuICAgICAgICAgICAgICAgIGlmKCF0aGlzLl9jb21wb25lbnRzW3RlbXBOYW1lXSB8fCB0aGlzLl9jb21wb25lbnRzW3RlbXBOYW1lXS4kY2xpcCAhPT0gZWxlbWVudHNbaWRdKXtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50c1tpZF0uc2V0QXR0cmlidXRlKCdpZCcsIHRlbXBOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jb21wb25lbnRzW3RlbXBOYW1lXSA9IG5ldyBjbGFzc0Z1bmMoZWxlbWVudHNbaWRdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NvbXBvbmVudHNbdGVtcE5hbWVdLl9vbkNoYW5nZVN0YXRlKClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBfaXNTdWJjb21wb25lbnQoZWxlbWVudCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NsYXNzZXMyUmVuZGVyLmZpbmQoY2xhc3NGdW5jID0+IGNsYXNzRnVuYy5wcm90b3R5cGUuY29uc3RydWN0b3IubmFtZS50b0xvd2VyQ2FzZSgpID09PSBlbGVtZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpXHJcbiAgICB9XHJcblxyXG4gICAgX3VwZGF0ZURvbUVsZW1lbnQob2xkRG9tLCBuZXdEb20pIHtcclxuICAgICAgICBjbGVhbkNoaWxkTm9kZXMob2xkRG9tKVxyXG4gICAgICAgIGNsZWFuQ2hpbGROb2RlcyhuZXdEb20pXHJcblxyXG4gICAgICAgIGlmKG9sZERvbSAmJiAhaXNUZXh0Tm9kZShvbGREb20pICYmIHRoaXMuX2lzU3ViY29tcG9uZW50KG9sZERvbSkpe1xyXG4gICAgICAgICAgICBuZXdEb20uaW5uZXJIVE1MID0gb2xkRG9tLmlubmVySFRNTDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0RvbUNoaWxkcmVuID0gQXJyYXkuZnJvbShuZXdEb20uY2hpbGROb2Rlcyk7XHJcbiAgICAgICAgICAgIGNvbnN0IG9sZERvbUNoaWxkcmVuID0gQXJyYXkuZnJvbShvbGREb20uY2hpbGROb2Rlcyk7XHJcbiAgICBcclxuICAgICAgICAgICAgZm9yIChsZXQgaUQgPSBvbGREb21DaGlsZHJlbi5sZW5ndGggLSAxOyBpRCA+PSBuZXdEb21DaGlsZHJlbi5sZW5ndGg7IGlELS0pIHtcclxuICAgICAgICAgICAgICAgIG9sZERvbS5yZW1vdmVDaGlsZChvbGREb21DaGlsZHJlbltpRF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgbmV3RG9tQ2hpbGRyZW4uZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBvbGRFbGVtZW50ID0gb2xkRG9tQ2hpbGRyZW5baW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZiAoIW9sZEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBvbGRFbGVtZW50ID0gZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgb2xkRG9tLmFwcGVuZENoaWxkKG9sZEVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgaXNUZXh0Tm9kZShlbGVtZW50KSAmJiBpc1RleHROb2RlKG9sZEVsZW1lbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgb2xkRWxlbWVudC5ub2RlVmFsdWUgIT09IGVsZW1lbnQubm9kZVZhbHVlXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICBvbGRFbGVtZW50Lm5vZGVWYWx1ZSA9IGVsZW1lbnQubm9kZVZhbHVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChpc1RleHROb2RlKG9sZEVsZW1lbnQpICYmICFpc1RleHROb2RlKGVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2xkRG9tLnJlcGxhY2VDaGlsZChlbGVtZW50LmNsb25lTm9kZSh0cnVlKSwgb2xkRWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChlbGVtZW50Lm5vZGVOYW1lICE9PSBvbGRFbGVtZW50Lm5vZGVOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2xkRWxlbWVudC5vdXRlckhUTUwgPSBlbGVtZW50Lm91dGVySFRNTCB8fCAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZWxlbWVudC5vdXRlckhUTUwgIT09IG9sZEVsZW1lbnQub3V0ZXJIVE1MKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQXJyYXkuZnJvbShlbGVtZW50LmF0dHJpYnV0ZXMgfHwgW10pLmZvckVhY2goYXR0ciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9sZEF0dHIgPSBvbGRFbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW9sZEF0dHIgfHwgb2xkQXR0ciAhPT0gYXR0ci52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2xkRWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ci5uYW1lLCBhdHRyLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9sZEVsZW1lbnQuYXR0cmlidXRlcy5sZW5ndGggPiBlbGVtZW50LmF0dHJpYnV0ZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFycmF5LmZyb20ob2xkRWxlbWVudC5hdHRyaWJ1dGVzIHx8IFtdKS5mb3JFYWNoKGF0dHIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFlbGVtZW50LmF0dHJpYnV0ZXNbYXR0ci5uYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9sZEVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGF0dHIubmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LnZhbHVlICE9PSBvbGRFbGVtZW50LnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9sZEVsZW1lbnQudmFsdWUgPSBlbGVtZW50LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5jaGlsZE5vZGVzLmxlbmd0aCB8fCBvbGRFbGVtZW50LmNoaWxkTm9kZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZURvbUVsZW1lbnQob2xkRWxlbWVudCwgZWxlbWVudClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL1NlY3VyaXR5IGNoZWNrXHJcbiAgICAgICAgaWYgKG5ld0RvbS5pbm5lckhUTUwucmVwbGFjZSgvXFxzKy9nLCAnJykgIT09IG9sZERvbS5pbm5lckhUTUwucmVwbGFjZSgvXFxzKy9nLCAnJykpIHtcclxuICAgICAgICAgICAgYVhwbGFpbldhcm4oYFxyXG4gICAgICAgICAgICAgICAgICAgIEZvcmNlIGlubmVySFRNTCBzdWJzdGl0dXRpb24gOihcclxuICAgICAgICAgICAgICAgICAgICAgICAgT0xEOiAke29sZERvbS5pbm5lckhUTUwucmVwbGFjZSgvXFxzKy9nLCAnJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE5FVzogJHtuZXdEb20uaW5uZXJIVE1MLnJlcGxhY2UoL1xccysvZywgJycpfVxyXG4gICAgICAgICAgICAgICAgICAgIGApO1xyXG4gICAgICAgICAgICBvbGREb20uaW5uZXJIVE1MID0gbmV3RG9tLmlubmVySFRNTDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIF9vbkNoYW5nZVN0YXRlKCkge1xyXG4gICAgICAgIGNvbnN0IG5ld1Byb3BzID0gdGhpcy5zdGF0ZVRvcHJvcHMoc3RhdGUpIHx8IG51bGw7XHJcbiAgICAgICAgY29uc3QgbmV3RG9tUHJvcHMgPSBnZXRBbGxBdHRyaWJ1dGVzKHRoaXMuJGNsaXApO1xyXG5cclxuICAgICAgICBpZiAobmV3UHJvcHMgJiYgSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9wcykgIT09IEpTT04uc3RyaW5naWZ5KG5ld1Byb3BzKSB8fFxyXG4gICAgICAgICAgICBuZXdEb21Qcm9wcyAmJiBKU09OLnN0cmluZ2lmeSh0aGlzLmRvbVByb3BzKSAhPT0gSlNPTi5zdHJpbmdpZnkobmV3RG9tUHJvcHMpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZG9tUHJvcHMgPSBuZXdEb21Qcm9wcztcclxuICAgICAgICAgICAgdGhpcy5wcm9wcyA9IG5ld1Byb3BzO1xyXG4gICAgICAgICAgICB0aGlzLmZvcmNlUmVuZGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9zZXREb21FdmVudHMoJGRvbUVsZW1lbnQpIHtcclxuICAgICAgICBjb25zdCBhY3ROb2RlcyA9IEFycmF5LmZyb20oJGRvbUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnKicpKTtcclxuXHJcbiAgICAgICAgYWN0Tm9kZXMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgQXJyYXkuZnJvbShlbGVtZW50LmF0dHJpYnV0ZXMpLmZvckVhY2goYXR0ciA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihhdHRyLm5hbWUgPT09ICdpZCcpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXNbYCQke2F0dHIudmFsdWV9YF0gPSBlbGVtZW50XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChhdHRyLnZhbHVlICE9ICcnICYmIGF0dHIubmFtZS5pbmRleE9mKCdvbicpID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGVtcEZ1bmMgPSB0aGlzW2F0dHIudmFsdWVdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ZW1wRnVuYykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihhdHRyLm5hbWUuaW5kZXhPZignX2F4cGxhaW4nKSAhPT0gLTEpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0ci5uYW1lKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbGlkRXZlbnQgPSAnb24nICsgbWFwRXZlbnQoYXR0ci5uYW1lLnJlcGxhY2UoJ19heHBsYWluJywnJykuc2xpY2UoMikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50W3ZhbGlkRXZlbnRdID0gdGVtcEZ1bmMuYmluZCh0aGlzKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBmdW5jdGlvbiAke2F0dHIudmFsdWV9IGRvIG5vdCBleGlzdHMgaW4gJHt0aGlzLm5hbWV9YClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGRpc3Bvc2UoKXtcclxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzdGF0ZScsIHRoaXMuX3N0YXRlTGlzdGVuZXIpO1xyXG4gICAgICAgIGZvciAobGV0IHByb3AgaW4gdGhpcykge1xyXG4gICAgICAgICAgICB0aGlzW3Byb3BdID0gbnVsbDtcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXNbcHJvcF1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IHN0YXRlIH0gZnJvbSAnLi9zdG9yZS5qcyc7XHJcblxyXG5leHBvcnQgY29uc3QgYWN0aW9ucyA9IHtcclxuICAgIFNFVF9MT0NBVElPTjogJ1NFVF9MT0NBVElPTicsXHJcbiAgICBTRVRfQ09NUE9ORU5UX1BST1A6ICdTRVRfQ09NUE9ORU5UX1BST1Bfbm9sb2cnLFxyXG4gICAgU0VUX0FQUF9QUk9QOiAnU0VUX0FQUF9QUk9QX25vbG9nJyxcclxuICAgIFNFVF9BUFBfUFJPUF9MT0c6ICdTRVRfQVBQX1BST1AnLFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0Um91dGVzKHJvdXRlcyl7XHJcbiAgICByZXR1cm4oe1xyXG4gICAgICAgIHR5cGU6IGFjdGlvbnMuU0VUX0xPQ0FUSU9OLFxyXG4gICAgICAgIHBheWxvYWQ6IHtyb3V0ZXN9XHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0TG9jYXRpb24odXJsLCByb3V0ZSwgcHJvcHMsIHsuLi5wYXJhbXN9KXtcclxuICAgIHJldHVybih7XHJcbiAgICAgICAgdHlwZTogYWN0aW9ucy5TRVRfTE9DQVRJT04sXHJcbiAgICAgICAgcGF5bG9hZDogeyB1cmwsIHJvdXRlLCAuLi5wcm9wcywgcGFyYW1zIH1cclxuICAgIH0pICAgIFxyXG59ICAgIFxyXG5cclxuZXhwb3J0IGNvbnN0IHJlZHVjZXJzID0ge1xyXG4gICAgW2FjdGlvbnMuU0VUX0xPQ0FUSU9OXTogc2V0Um91dGVyUGF5bG9hZCxcclxuICAgIFthY3Rpb25zLlNFVF9DT01QT05FTlRfUFJPUF06IHNldENvbXBvbmVudFBheWxvYWQsXHJcbiAgICBbYWN0aW9ucy5TRVRfQVBQX1BST1BdOiBzZXRBcHBQYXlsb2FkLFxyXG4gICAgW2FjdGlvbnMuU0VUX0FQUF9QUk9QX0xPR106IHNldEFwcFBheWxvYWRcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0QXBwUGF5bG9hZChzdGF0ZSwgcGF5bG9hZCl7XHJcbiAgICByZXR1cm4gKHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBBcHA6IHtcclxuICAgICAgICAgICAgLi4uc3RhdGUuQXBwLFxyXG4gICAgICAgICAgICAuLi5wYXlsb2FkXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0Q29tcG9uZW50UGF5bG9hZChzdGF0ZSwgcGF5bG9hZCl7XHJcbiAgICBjb25zdCB7Y29tcG9uZW50TmFtZSwgLi4ucHJvcHN9ID0gey4uLnBheWxvYWR9XHJcbiAgICByZXR1cm4gKHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBDb21wb25lbnRzOiB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLkNvbXBvbmVudHMsXHJcbiAgICAgICAgICAgIFtjb21wb25lbnROYW1lXToge1xyXG4gICAgICAgICAgICAgICAgLi4uKHN0YXRlLkNvbXBvbmVudHMgfHwge30pW2NvbXBvbmVudE5hbWVdLFxyXG4gICAgICAgICAgICAgICAgLi4ucHJvcHNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFJvdXRlclBheWxvYWQoc3RhdGUsIHBheWxvYWQpe1xyXG4gICAgcmV0dXJuICh7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgcm91dGVyOiB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLnJvdXRlcixcclxuICAgICAgICAgICAgLi4ucGF5bG9hZFxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbiIsImltcG9ydCB7IHN0YXRlIH0gZnJvbSAnLi9zdG9yZS5qcydcclxuXHJcbmlmKHdpbmRvdy5lbnYgJiYgZW52ID09PSAnZGV2Jyl7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzdGF0ZScsIChldikgPT4ge1xyXG4gICAgICAgIGNvbnN0IHR5cGUgPSBldi5kZXRhaWwudHlwZTtcclxuICAgICAgICBpZih0eXBlLmluZGV4T2YoJ25vbG9nJykgPT09IC0xKXtcclxuICAgICAgICAgICAgY29uc29sZS5ncm91cENvbGxhcHNlZCh0eXBlLCBldi5kZXRhaWwucGF5bG9hZClcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3N0YXRlOicsIHN0YXRlKVxyXG4gICAgICAgICAgICBjb25zb2xlLmdyb3VwRW5kKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuIiwiaW1wb3J0IHsgc3RhdGUsIGRpc3BhdGNoIH0gZnJvbSAnLi9zdG9yZS5qcyc7XHJcbmltcG9ydCB7IHNldExvY2F0aW9uLCBzZXRSb3V0ZXMgfSBmcm9tICcuL2FjdGlvbnMuanMnO1xyXG5cclxubGV0IHJvdXRlcyA9IFtdO1xyXG5sZXQgQkFTRV9VUkwgPSAnJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0Um91dGVyKHJvdXRlc0Fycil7XHJcbiAgICBCQVNFX1VSTCA9IHdpbmRvdy5CQVNFX1VSTCB8fCAnJztcclxuICAgIHJvdXRlcyA9IFsuLi5yb3V0ZXNBcnJdIHx8IFt7dXJsOicvJ31dO1xyXG4gICAgZGlzcGF0Y2goc2V0Um91dGVzKHJvdXRlcykpXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnbyh1cmwyZ28sIGFkZFRvSGlzdG9yeSA9IHRydWUpe1xyXG4gICAgaWYodXJsMmdvICE9PSBzdGF0ZS5yb3V0ZXIudXJsICYmIHNldFN0YXRlTG9jYXRpb24odXJsMmdvKSl7XHJcbiAgICAgICAgY29uc3QgZnVuYyA9IGFkZFRvSGlzdG9yeSA/ICdwdXNoU3RhdGUnIDogJ3JlcGxhY2VTdGF0ZSc7XHJcbiAgICAgICAgaGlzdG9yeVtmdW5jXShudWxsLCAnJywgQkFTRV9VUkwgKyB1cmwyZ28pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ29PdXQodXJsMmdvLCBuZXdUYWIpe1xyXG4gICAgaWYobmV3VGFiKXtcclxuICAgICAgICB3aW5kb3cub3Blbih1cmwyZ28sICdfc3lzdGVtJyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBsb2NhdGlvbi5hc3NpZ24odXJsMmdvKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2V0U3RhdGVMb2NhdGlvbih1cmwyZ28pe1xyXG4gICAgbGV0IHVybCA9IHVybDJnbyB8fCByb3V0ZXNbMF0udXJsO1xyXG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IF9tYXRjaFJvdXRlKHVybCk7XHJcblxyXG4gICAgaWYocm91dGVNYXRjaCl7XHJcbiAgICAgICAgaWYocm91dGVNYXRjaC5yZWRpcmVjdCl7XHJcbiAgICAgICAgICAgIGdvKHJvdXRlTWF0Y2gucmVkaXJlY3QpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qge3VybDogdXJsTWF0Y2gsIC4uLnByb3BzfSA9IHsuLi5yb3V0ZU1hdGNofVxyXG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IF9nZXRQYXJhbXModXJsLCByb3V0ZU1hdGNoLnVybCk7XHJcblxyXG4gICAgICAgIGRpc3BhdGNoKHNldExvY2F0aW9uKHVybDJnbywgdXJsLCBwcm9wcywgcGFyYW1zKSlcclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBjb25zdCByb3V0ZTQwNCA9IF9tYXRjaFJvdXRlKCc0MDQnKVxyXG4gICAgICAgIGlmKHJvdXRlNDA0KXtcclxuICAgICAgICAgICAgc2V0U3RhdGVMb2NhdGlvbignNDA0JylcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93KG5ldyBFcnJvcihgXHJcbiAgICAgICAgICAgICAgICAke3VybH0gZG8gbm90IGV4aXN0cyBpbiByb3V0ZXM6XHJcbiAgICAgICAgICAgICAgICAke3JvdXRlcy5tYXAoKHJvdXRlKSA9PiBgICR7cm91dGUudXJsfSBgKS5qb2luKCcnKX1cclxuICAgICAgICAgICAgYCkpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gX21hdGNoUm91dGUodXJsKSB7XHJcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcm91dGVzLmZpbmQoKHJvdXRlKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgcm91dGVSZWR1Y2UgPSByb3V0ZS51cmwucmVwbGFjZSgvKDpcXHcrKS9nLCBcIihbXFxcXHctXSspXCIpO1xyXG4gICAgICAgIHJldHVybiB1cmwubWF0Y2goYF4ke3JvdXRlUmVkdWNlfSRgKVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gcm91dGVNYXRjaFxyXG59XHJcblxyXG5mdW5jdGlvbiBfZ2V0UGFyYW1zKHVybCwgdXJsTWF0Y2gpe1xyXG4gICAgY29uc3QgdXJsTWF0Y2hBcnIgPSB1cmxNYXRjaC5zcGxpdCgnLycpO1xyXG4gICAgY29uc3QgdXJsQXJyID0gdXJsLnNwbGl0KCcvJyk7XHJcbiAgICBsZXQgcGFyYW1zID0ge307XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB1cmxNYXRjaEFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmICh1cmxBcnJbaV0gJiYgfnVybE1hdGNoQXJyW2ldLmluZGV4T2YoXCI6XCIpKSB7XHJcbiAgICAgICAgICAgIHBhcmFtc1t1cmxNYXRjaEFycltpXS5zbGljZSgxKV0gPSB1cmxBcnJbaV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBwYXJhbXNcclxufVxyXG5cclxud2luZG93Lm9ucG9wc3RhdGUgPSAoZXYpID0+IHtcclxuICAgIHNldFN0YXRlTG9jYXRpb24od2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKVxyXG59IiwiaW1wb3J0IHsgcmVkdWNlcnMgYXMgbGliUmVkdWNlcnMgfSBmcm9tICcuL2FjdGlvbnMuanMnO1xyXG5cclxubGV0IHJlZHVjZXJzID0gey4uLmxpYlJlZHVjZXJzfTtcclxuXHJcbmV4cG9ydCBsZXQgc3RhdGUgPSB7fTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0U3RvcmUocmVkdWNlcnNBcnJheSwgaW5pdGlhbFN0YXRlKSB7XHJcbiAgICBpZih0eXBlb2YgaW5pdGlhbFN0YXRlICE9PSAnb2JqZWN0Jyl7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbml0aWFsU3RhdGUgc2hvdWxkIGJlIGFuIG9iamVjdCcpXHJcbiAgICB9XHJcbiAgICBpZih0eXBlb2YgcmVkdWNlcnNBcnJheSAhPT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkocmVkdWNlcnNBcnJheSkpe1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignaW5pdGlhbFN0YXRlIHNob3VsZCBiZSBhbiBvYmplY3Qgb3IgYW4gQXJyYXkgb2Ygb2JqZWN0cycpXHJcbiAgICB9XHJcblxyXG4gICAgcmVkdWNlcnNBcnJheSA9IEFycmF5LmlzQXJyYXkocmVkdWNlcnNBcnJheSkgPyByZWR1Y2Vyc0FycmF5IDogW3JlZHVjZXJzQXJyYXldXHJcbiAgICByZWR1Y2Vyc0FycmF5Lm1hcChyZWR1Y2VyT2JqID0+IGFkZFJlZHVjZXIocmVkdWNlck9iaikpXHJcblxyXG4gICAgc3RhdGUgPSB7Li4uaW5pdGlhbFN0YXRlfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZFJlZHVjZXIocmVkdWNlck9iaikge1xyXG4gICAgcmVkdWNlcnMgPSB7Li4ucmVkdWNlcnMsLi4ucmVkdWNlck9ian1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BhdGNoQWN0aW9uKHR5cGUsIHBheWxvYWQpIHtcclxuICAgIGRpc3BhdGNoKHt0eXBlLCBwYXlsb2FkfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BhdGNoKHt0eXBlLHBheWxvYWR9KSB7XHJcbiAgICBpZiAocmVkdWNlcnNbdHlwZV0pIHtcclxuICAgICAgICBzdGF0ZSA9IHJlZHVjZXJzW3R5cGVdKHN0YXRlLCBwYXlsb2FkKTtcclxuICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnc3RhdGUnLCB7IGRldGFpbDoge3R5cGUscGF5bG9hZH0gfSkpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBcclxuICAgICAgICAgICAgRG8gbm90IGV4aXN0IGEgcmVkdWNlciB3aXRoIG5hbWUgJHt0eXBlfVxyXG4gICAgICAgICAgICBUaGUgc3RhdGUgd2lsbCBub3QgY2hhbmdlXHJcbiAgICAgICAgYClcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gaXNNb2JpbGUoKXtcclxuICAgIHZhciBjaGVjayA9IGZhbHNlO1xyXG4gICAgKGZ1bmN0aW9uKGEpe2lmKC8oYW5kcm9pZHxiYlxcZCt8bWVlZ28pLittb2JpbGV8YXZhbnRnb3xiYWRhXFwvfGJsYWNrYmVycnl8YmxhemVyfGNvbXBhbHxlbGFpbmV8ZmVubmVjfGhpcHRvcHxpZW1vYmlsZXxpcChob25lfG9kKXxpcmlzfGtpbmRsZXxsZ2UgfG1hZW1vfG1pZHB8bW1wfG1vYmlsZS4rZmlyZWZveHxuZXRmcm9udHxvcGVyYSBtKG9ifGluKWl8cGFsbSggb3MpP3xwaG9uZXxwKGl4aXxyZSlcXC98cGx1Y2tlcnxwb2NrZXR8cHNwfHNlcmllcyg0fDYpMHxzeW1iaWFufHRyZW98dXBcXC4oYnJvd3NlcnxsaW5rKXx2b2RhZm9uZXx3YXB8d2luZG93cyBjZXx4ZGF8eGlpbm98YW5kcm9pZHxpcGFkfHBsYXlib29rfHNpbGsvaS50ZXN0KGEpfHwvMTIwN3w2MzEwfDY1OTB8M2dzb3w0dGhwfDUwWzEtNl1pfDc3MHN8ODAyc3xhIHdhfGFiYWN8YWMoZXJ8b298c1xcLSl8YWkoa298cm4pfGFsKGF2fGNhfGNvKXxhbW9pfGFuKGV4fG55fHl3KXxhcHR1fGFyKGNofGdvKXxhcyh0ZXx1cyl8YXR0d3xhdShkaXxcXC1tfHIgfHMgKXxhdmFufGJlKGNrfGxsfG5xKXxiaShsYnxyZCl8YmwoYWN8YXopfGJyKGV8dil3fGJ1bWJ8YndcXC0obnx1KXxjNTVcXC98Y2FwaXxjY3dhfGNkbVxcLXxjZWxsfGNodG18Y2xkY3xjbWRcXC18Y28obXB8bmQpfGNyYXd8ZGEoaXR8bGx8bmcpfGRidGV8ZGNcXC1zfGRldml8ZGljYXxkbW9ifGRvKGN8cClvfGRzKDEyfFxcLWQpfGVsKDQ5fGFpKXxlbShsMnx1bCl8ZXIoaWN8azApfGVzbDh8ZXooWzQtN10wfG9zfHdhfHplKXxmZXRjfGZseShcXC18Xyl8ZzEgdXxnNTYwfGdlbmV8Z2ZcXC01fGdcXC1tb3xnbyhcXC53fG9kKXxncihhZHx1bil8aGFpZXxoY2l0fGhkXFwtKG18cHx0KXxoZWlcXC18aGkocHR8dGEpfGhwKCBpfGlwKXxoc1xcLWN8aHQoYyhcXC18IHxffGF8Z3xwfHN8dCl8dHApfGh1KGF3fHRjKXxpXFwtKDIwfGdvfG1hKXxpMjMwfGlhYyggfFxcLXxcXC8pfGlicm98aWRlYXxpZzAxfGlrb218aW0xa3xpbm5vfGlwYXF8aXJpc3xqYSh0fHYpYXxqYnJvfGplbXV8amlnc3xrZGRpfGtlaml8a2d0KCB8XFwvKXxrbG9ufGtwdCB8a3djXFwtfGt5byhjfGspfGxlKG5vfHhpKXxsZyggZ3xcXC8oa3xsfHUpfDUwfDU0fFxcLVthLXddKXxsaWJ3fGx5bnh8bTFcXC13fG0zZ2F8bTUwXFwvfG1hKHRlfHVpfHhvKXxtYygwMXwyMXxjYSl8bVxcLWNyfG1lKHJjfHJpKXxtaShvOHxvYXx0cyl8bW1lZnxtbygwMXwwMnxiaXxkZXxkb3x0KFxcLXwgfG98dil8enopfG10KDUwfHAxfHYgKXxtd2JwfG15d2F8bjEwWzAtMl18bjIwWzItM118bjMwKDB8Mil8bjUwKDB8Mnw1KXxuNygwKDB8MSl8MTApfG5lKChjfG0pXFwtfG9ufHRmfHdmfHdnfHd0KXxub2soNnxpKXxuenBofG8yaW18b3AodGl8d3YpfG9yYW58b3dnMXxwODAwfHBhbihhfGR8dCl8cGR4Z3xwZygxM3xcXC0oWzEtOF18YykpfHBoaWx8cGlyZXxwbChheXx1Yyl8cG5cXC0yfHBvKGNrfHJ0fHNlKXxwcm94fHBzaW98cHRcXC1nfHFhXFwtYXxxYygwN3wxMnwyMXwzMnw2MHxcXC1bMi03XXxpXFwtKXxxdGVrfHIzODB8cjYwMHxyYWtzfHJpbTl8cm8odmV8em8pfHM1NVxcL3xzYShnZXxtYXxtbXxtc3xueXx2YSl8c2MoMDF8aFxcLXxvb3xwXFwtKXxzZGtcXC98c2UoYyhcXC18MHwxKXw0N3xtY3xuZHxyaSl8c2doXFwtfHNoYXJ8c2llKFxcLXxtKXxza1xcLTB8c2woNDV8aWQpfHNtKGFsfGFyfGIzfGl0fHQ1KXxzbyhmdHxueSl8c3AoMDF8aFxcLXx2XFwtfHYgKXxzeSgwMXxtYil8dDIoMTh8NTApfHQ2KDAwfDEwfDE4KXx0YShndHxsayl8dGNsXFwtfHRkZ1xcLXx0ZWwoaXxtKXx0aW1cXC18dFxcLW1vfHRvKHBsfHNoKXx0cyg3MHxtXFwtfG0zfG01KXx0eFxcLTl8dXAoXFwuYnxnMXxzaSl8dXRzdHx2NDAwfHY3NTB8dmVyaXx2aShyZ3x0ZSl8dmsoNDB8NVswLTNdfFxcLXYpfHZtNDB8dm9kYXx2dWxjfHZ4KDUyfDUzfDYwfDYxfDcwfDgwfDgxfDgzfDg1fDk4KXx3M2MoXFwtfCApfHdlYmN8d2hpdHx3aShnIHxuY3xudyl8d21sYnx3b251fHg3MDB8eWFzXFwtfHlvdXJ8emV0b3x6dGVcXC0vaS50ZXN0KGEuc3Vic3RyKDAsNCkpKSBjaGVjayA9IHRydWU7fSkobmF2aWdhdG9yLnVzZXJBZ2VudHx8bmF2aWdhdG9yLnZlbmRvcnx8d2luZG93Lm9wZXJhKTtcclxuICAgIHJldHVybiBjaGVjaztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZENsYXNzKGVsLGNsYXNzTmFtZSl7XHJcbiAgICBjb25zdCBjbGFzc2VzQXJyID0gY2xhc3NOYW1lLnNwbGl0KCcgJyk7XHJcbiAgICBjbGFzc2VzQXJyLmZvckVhY2goY2xhc3NOYW1lID0+IHtcclxuICAgICAgICBpZihjbGFzc05hbWUgIT0gJycpe1xyXG4gICAgICAgICAgICBpZiAoZWwuY2xhc3NMaXN0KVxyXG4gICAgICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBlbC5jbGFzc05hbWUgKz0gJyAnICsgY2xhc3NOYW1lOyAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUNsYXNzKGVsLGNsYXNzTmFtZSl7XHJcbiAgICBpZiAoZWwuY2xhc3NMaXN0KVxyXG4gICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcclxuICAgIGVsc2VcclxuICAgICAgICBlbC5jbGFzc05hbWUgPSBlbC5jbGFzc05hbWUucmVwbGFjZShuZXcgUmVnRXhwKCcoXnxcXFxcYiknICsgY2xhc3NOYW1lLnNwbGl0KCcgJykuam9pbignfCcpICsgJyhcXFxcYnwkKScsICdnaScpLCAnICcpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBoYXNDbGFzcyhlbCwgY2xhc3NOYW1lKXtcclxuICByZXR1cm4gZWwuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0RPTUVsZW1lbnQoZWwpIHtcclxuICByZXR1cm4gZWwgaW5zdGFuY2VvZiBFbGVtZW50O1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBpc1N0cmluZyhzdHIpIHtcclxuICByZXR1cm4gdHlwZW9mIHN0ciA9PT0gJ3N0cmluZycgfHwgc3RyIGluc3RhbmNlb2YgU3RyaW5nO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBpc09iamVjdCh2YWwpIHtcclxuICBpZiAodmFsID09PSBudWxsKSB7IHJldHVybiBmYWxzZTt9XHJcbiAgcmV0dXJuICggKHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbicpIHx8ICh0eXBlb2YgdmFsID09PSAnb2JqZWN0JykgKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gaXNGdW5jdGlvbihmdW5jdGlvblRvQ2hlY2spIHtcclxuICB2YXIgZ2V0VHlwZSA9IHt9O1xyXG4gIHJldHVybiBmdW5jdGlvblRvQ2hlY2sgJiYgZ2V0VHlwZS50b1N0cmluZy5jYWxsKGZ1bmN0aW9uVG9DaGVjaykgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBlc2NhcGUoc3RyKSB7XHJcbiAgcmV0dXJuIChzdHIgKyAnJylcclxuICAgICAgLnJlcGxhY2UoLzwvZywgJyZsdDsnKVxyXG4gICAgICAucmVwbGFjZSgvPi9nLCAnJmd0OycpXHJcbiAgICAgIC5yZXBsYWNlKC9cIi9nLCAnJiMzNDsnKVxyXG4gICAgICAucmVwbGFjZSgvJy9nLCAnJiMzOTsnKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2xlYW5DaGlsZE5vZGVzKG5vZGUpIHtcclxuICBmb3IgKHZhciBuID0gMDsgbiA8IG5vZGUuY2hpbGROb2Rlcy5sZW5ndGg7IG4rKykge1xyXG4gICAgICB2YXIgY2hpbGQgPSBub2RlLmNoaWxkTm9kZXNbbl07XHJcbiAgICAgIGlmXHJcbiAgICAgIChcclxuICAgICAgICAgIGNoaWxkLm5vZGVUeXBlID09PSA4XHJcbiAgICAgICAgICB8fFxyXG4gICAgICAgICAgKGNoaWxkLm5vZGVUeXBlID09PSAzICYmICEvXFxTLy50ZXN0KGNoaWxkLm5vZGVWYWx1ZSkpXHJcbiAgICAgICkge1xyXG4gICAgICAgICAgbm9kZS5yZW1vdmVDaGlsZChjaGlsZCk7XHJcbiAgICAgICAgICBuLS07XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAoY2hpbGQubm9kZVR5cGUgPT09IDEpIHtcclxuICAgICAgICBjbGVhbkNoaWxkTm9kZXMoY2hpbGQpO1xyXG4gICAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsQXR0cmlidXRlcyhlbCkge1xyXG4gICAgbGV0IHJlc3VsdCA9IHt9O1xyXG5cclxuICAgIGlmIChlbC5oYXNBdHRyaWJ1dGVzKCkpIHtcclxuICAgICAgICBjb25zdCBhdHRycyA9IGVsLmF0dHJpYnV0ZXM7XHJcbiAgICAgICAgZm9yKHZhciBpID0gYXR0cnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgIHJlc3VsdFthdHRyc1tpXS5uYW1lXSA9IGF0dHJzW2ldLnZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYVhwbGFpbldhcm4obWVzc2FnZSl7XHJcbiAgaWYod2luZG93LmVudiAmJiBlbnYgPT09ICdkZXYnKXtcclxuICAgIGNvbnNvbGUud2FybihtZXNzYWdlKVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgZXZlbnRSZXBsYWNlbWVudCA9IHtcclxuICAgIFwibW91c2Vkb3duXCI6IFwidG91Y2hzdGFydFwiLFxyXG4gICAgXCJtb3VzZXVwXCI6IFwidG91Y2hlbmRcIixcclxuICAgIFwiY2xpY2tcIjogXCJ0b3VjaHN0YXJ0XCIsXHJcbiAgICBcIm1vdXNlbW92ZVwiOiBcInRvdWNobW92ZVwiXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWFwRXZlbnQoZXZlbnROYW1lKXtcclxuICAgIGNvbnN0IGV2ZW50UmVwbGFjZSA9ICBldmVudFJlcGxhY2VtZW50W2V2ZW50TmFtZV07XHJcbiAgICBjb25zdCB2YWxpZEV2ZW50ID0gdHlwZW9mIHdpbmRvd1snb24nICsgZXZlbnRSZXBsYWNlXSA9PT0gJ29iamVjdCcgPyBldmVudFJlcGxhY2UgOiBldmVudE5hbWU7IFxyXG4gICAgcmV0dXJuIHZhbGlkRXZlbnRcclxufVxyXG5cclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiY29uc3QgaXNBeGVsU2VydmVyID0gdHJ1ZTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRBc3NldHNGb2xkZXIoKXtcclxuICAgIHJldHVybiB3aW5kb3cuQVNTRVRTX0ZPTERFUiB8fCAnLi8nO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2luZG93U2l6ZSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCB8fCBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoLFxyXG4gICAgICAgIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgfHwgZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHRcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE9mZnNldChlbCkge1xyXG4gICAgdmFyIHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdG9wOiByZWN0LnRvcCxcclxuICAgICAgICBsZWZ0OiByZWN0LmxlZnQgKyBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnQsXHJcbiAgICAgICAgd2lkdGg6IHJlY3QucmlnaHQgLSByZWN0LmxlZnQsXHJcbiAgICAgICAgaGVpZ2h0OiByZWN0LmJvdHRvbSAtIHJlY3QudG9wXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXREZXZpY2VQaXhlbFJhdGlvKCkge1xyXG4gICAgcmV0dXJuIHBhcnNlSW50KHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDEpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VTdHJpbmdUb0hUTUwoc3RyKSB7XHJcbiAgICBjb25zdCB0eHQgPSAoc3RyIHx8ICcnKS50b1N0cmluZygpXHJcbiAgICAucmVwbGFjZSgvXCIvZywgXCInXCIpXHJcbiAgICAucmVwbGFjZSgvJy9nLCAnJmFwb3M7JykgXHJcbiAgICAucmVwbGFjZSgvPC9nLCAnJmx0OycpXHJcbiAgICAucmVwbGFjZSgvPi9nLCAnJmd0OycpO1xyXG4gICAgcmV0dXJuIHR4dDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=
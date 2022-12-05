define([], () => {

const bimport = specifier => {
	const dependencies = new Map([["scheduler","0.23.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};
const require = () => void 0;
// Prevent esbuild from considering the context to be amd
const define = void 0;
const module = {};

const code = (module, require) => {
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;

var __markAsModule = target => __defProp(target, "__esModule", {
  value: true
});

var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = {
    exports: {}
  }).exports, mod), mod.exports;
};

var __export = (target, all) => {
  for (var name in all) __defProp(target, name, {
    get: all[name],
    enumerable: true
  });
};

var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2)) if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default")) __defProp(target, key, {
      get: () => module2[key],
      enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable
    });
  }

  return target;
};

var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? {
    get: () => module2.default,
    enumerable: true
  } : {
    value: module2,
    enumerable: true
  })), module2);
};

var __toCommonJS = /* @__PURE__ */(cache => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */new WeakMap() : 0); // node_modules/scheduler/cjs/scheduler.development.js


var require_scheduler_development = __commonJS({
  "node_modules/scheduler/cjs/scheduler.development.js"(exports) {
    "use strict";

    if (true) {
      (function () {
        "use strict";

        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
        }

        var enableSchedulerDebugging = false;
        var enableProfiling = false;
        var frameYieldMs = 5;

        function push(heap, node) {
          var index = heap.length;
          heap.push(node);
          siftUp(heap, node, index);
        }

        function peek(heap) {
          return heap.length === 0 ? null : heap[0];
        }

        function pop(heap) {
          if (heap.length === 0) {
            return null;
          }

          var first = heap[0];
          var last = heap.pop();

          if (last !== first) {
            heap[0] = last;
            siftDown(heap, last, 0);
          }

          return first;
        }

        function siftUp(heap, node, i) {
          var index = i;

          while (index > 0) {
            var parentIndex = index - 1 >>> 1;
            var parent = heap[parentIndex];

            if (compare(parent, node) > 0) {
              heap[parentIndex] = node;
              heap[index] = parent;
              index = parentIndex;
            } else {
              return;
            }
          }
        }

        function siftDown(heap, node, i) {
          var index = i;
          var length = heap.length;
          var halfLength = length >>> 1;

          while (index < halfLength) {
            var leftIndex = (index + 1) * 2 - 1;
            var left = heap[leftIndex];
            var rightIndex = leftIndex + 1;
            var right = heap[rightIndex];

            if (compare(left, node) < 0) {
              if (rightIndex < length && compare(right, left) < 0) {
                heap[index] = right;
                heap[rightIndex] = node;
                index = rightIndex;
              } else {
                heap[index] = left;
                heap[leftIndex] = node;
                index = leftIndex;
              }
            } else if (rightIndex < length && compare(right, node) < 0) {
              heap[index] = right;
              heap[rightIndex] = node;
              index = rightIndex;
            } else {
              return;
            }
          }
        }

        function compare(a, b) {
          var diff = a.sortIndex - b.sortIndex;
          return diff !== 0 ? diff : a.id - b.id;
        }

        var ImmediatePriority = 1;
        var UserBlockingPriority = 2;
        var NormalPriority = 3;
        var LowPriority = 4;
        var IdlePriority = 5;

        function markTaskErrored(task, ms) {}

        var hasPerformanceNow = typeof performance === "object" && typeof performance.now === "function";

        if (hasPerformanceNow) {
          var localPerformance = performance;

          exports.unstable_now = function () {
            return localPerformance.now();
          };
        } else {
          var localDate = Date;
          var initialTime = localDate.now();

          exports.unstable_now = function () {
            return localDate.now() - initialTime;
          };
        }

        var maxSigned31BitInt = 1073741823;
        var IMMEDIATE_PRIORITY_TIMEOUT = -1;
        var USER_BLOCKING_PRIORITY_TIMEOUT = 250;
        var NORMAL_PRIORITY_TIMEOUT = 5e3;
        var LOW_PRIORITY_TIMEOUT = 1e4;
        var IDLE_PRIORITY_TIMEOUT = maxSigned31BitInt;
        var taskQueue = [];
        var timerQueue = [];
        var taskIdCounter = 1;
        var currentTask = null;
        var currentPriorityLevel = NormalPriority;
        var isPerformingWork = false;
        var isHostCallbackScheduled = false;
        var isHostTimeoutScheduled = false;
        var localSetTimeout = typeof setTimeout === "function" ? setTimeout : null;
        var localClearTimeout = typeof clearTimeout === "function" ? clearTimeout : null;
        var localSetImmediate = typeof setImmediate !== "undefined" ? setImmediate : null;
        var isInputPending = typeof navigator !== "undefined" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 ? navigator.scheduling.isInputPending.bind(navigator.scheduling) : null;

        function advanceTimers(currentTime) {
          var timer = peek(timerQueue);

          while (timer !== null) {
            if (timer.callback === null) {
              pop(timerQueue);
            } else if (timer.startTime <= currentTime) {
              pop(timerQueue);
              timer.sortIndex = timer.expirationTime;
              push(taskQueue, timer);
            } else {
              return;
            }

            timer = peek(timerQueue);
          }
        }

        function handleTimeout(currentTime) {
          isHostTimeoutScheduled = false;
          advanceTimers(currentTime);

          if (!isHostCallbackScheduled) {
            if (peek(taskQueue) !== null) {
              isHostCallbackScheduled = true;
              requestHostCallback(flushWork);
            } else {
              var firstTimer = peek(timerQueue);

              if (firstTimer !== null) {
                requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
              }
            }
          }
        }

        function flushWork(hasTimeRemaining, initialTime2) {
          isHostCallbackScheduled = false;

          if (isHostTimeoutScheduled) {
            isHostTimeoutScheduled = false;
            cancelHostTimeout();
          }

          isPerformingWork = true;
          var previousPriorityLevel = currentPriorityLevel;

          try {
            if (enableProfiling) {
              try {
                return workLoop(hasTimeRemaining, initialTime2);
              } catch (error) {
                if (currentTask !== null) {
                  var currentTime = exports.unstable_now();
                  markTaskErrored(currentTask, currentTime);
                  currentTask.isQueued = false;
                }

                throw error;
              }
            } else {
              return workLoop(hasTimeRemaining, initialTime2);
            }
          } finally {
            currentTask = null;
            currentPriorityLevel = previousPriorityLevel;
            isPerformingWork = false;
          }
        }

        function workLoop(hasTimeRemaining, initialTime2) {
          var currentTime = initialTime2;
          advanceTimers(currentTime);
          currentTask = peek(taskQueue);

          while (currentTask !== null && !enableSchedulerDebugging) {
            if (currentTask.expirationTime > currentTime && (!hasTimeRemaining || shouldYieldToHost())) {
              break;
            }

            var callback = currentTask.callback;

            if (typeof callback === "function") {
              currentTask.callback = null;
              currentPriorityLevel = currentTask.priorityLevel;
              var didUserCallbackTimeout = currentTask.expirationTime <= currentTime;
              var continuationCallback = callback(didUserCallbackTimeout);
              currentTime = exports.unstable_now();

              if (typeof continuationCallback === "function") {
                currentTask.callback = continuationCallback;
              } else {
                if (currentTask === peek(taskQueue)) {
                  pop(taskQueue);
                }
              }

              advanceTimers(currentTime);
            } else {
              pop(taskQueue);
            }

            currentTask = peek(taskQueue);
          }

          if (currentTask !== null) {
            return true;
          } else {
            var firstTimer = peek(timerQueue);

            if (firstTimer !== null) {
              requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
            }

            return false;
          }
        }

        function unstable_runWithPriority(priorityLevel, eventHandler) {
          switch (priorityLevel) {
            case ImmediatePriority:
            case UserBlockingPriority:
            case NormalPriority:
            case LowPriority:
            case IdlePriority:
              break;

            default:
              priorityLevel = NormalPriority;
          }

          var previousPriorityLevel = currentPriorityLevel;
          currentPriorityLevel = priorityLevel;

          try {
            return eventHandler();
          } finally {
            currentPriorityLevel = previousPriorityLevel;
          }
        }

        function unstable_next(eventHandler) {
          var priorityLevel;

          switch (currentPriorityLevel) {
            case ImmediatePriority:
            case UserBlockingPriority:
            case NormalPriority:
              priorityLevel = NormalPriority;
              break;

            default:
              priorityLevel = currentPriorityLevel;
              break;
          }

          var previousPriorityLevel = currentPriorityLevel;
          currentPriorityLevel = priorityLevel;

          try {
            return eventHandler();
          } finally {
            currentPriorityLevel = previousPriorityLevel;
          }
        }

        function unstable_wrapCallback(callback) {
          var parentPriorityLevel = currentPriorityLevel;
          return function () {
            var previousPriorityLevel = currentPriorityLevel;
            currentPriorityLevel = parentPriorityLevel;

            try {
              return callback.apply(this, arguments);
            } finally {
              currentPriorityLevel = previousPriorityLevel;
            }
          };
        }

        function unstable_scheduleCallback(priorityLevel, callback, options) {
          var currentTime = exports.unstable_now();
          var startTime2;

          if (typeof options === "object" && options !== null) {
            var delay = options.delay;

            if (typeof delay === "number" && delay > 0) {
              startTime2 = currentTime + delay;
            } else {
              startTime2 = currentTime;
            }
          } else {
            startTime2 = currentTime;
          }

          var timeout;

          switch (priorityLevel) {
            case ImmediatePriority:
              timeout = IMMEDIATE_PRIORITY_TIMEOUT;
              break;

            case UserBlockingPriority:
              timeout = USER_BLOCKING_PRIORITY_TIMEOUT;
              break;

            case IdlePriority:
              timeout = IDLE_PRIORITY_TIMEOUT;
              break;

            case LowPriority:
              timeout = LOW_PRIORITY_TIMEOUT;
              break;

            case NormalPriority:
            default:
              timeout = NORMAL_PRIORITY_TIMEOUT;
              break;
          }

          var expirationTime = startTime2 + timeout;
          var newTask = {
            id: taskIdCounter++,
            callback,
            priorityLevel,
            startTime: startTime2,
            expirationTime,
            sortIndex: -1
          };

          if (startTime2 > currentTime) {
            newTask.sortIndex = startTime2;
            push(timerQueue, newTask);

            if (peek(taskQueue) === null && newTask === peek(timerQueue)) {
              if (isHostTimeoutScheduled) {
                cancelHostTimeout();
              } else {
                isHostTimeoutScheduled = true;
              }

              requestHostTimeout(handleTimeout, startTime2 - currentTime);
            }
          } else {
            newTask.sortIndex = expirationTime;
            push(taskQueue, newTask);

            if (!isHostCallbackScheduled && !isPerformingWork) {
              isHostCallbackScheduled = true;
              requestHostCallback(flushWork);
            }
          }

          return newTask;
        }

        function unstable_pauseExecution() {}

        function unstable_continueExecution() {
          if (!isHostCallbackScheduled && !isPerformingWork) {
            isHostCallbackScheduled = true;
            requestHostCallback(flushWork);
          }
        }

        function unstable_getFirstCallbackNode() {
          return peek(taskQueue);
        }

        function unstable_cancelCallback(task) {
          task.callback = null;
        }

        function unstable_getCurrentPriorityLevel() {
          return currentPriorityLevel;
        }

        var isMessageLoopRunning = false;
        var scheduledHostCallback = null;
        var taskTimeoutID = -1;
        var frameInterval = frameYieldMs;
        var startTime = -1;

        function shouldYieldToHost() {
          var timeElapsed = exports.unstable_now() - startTime;

          if (timeElapsed < frameInterval) {
            return false;
          }

          return true;
        }

        function requestPaint() {}

        function forceFrameRate(fps) {
          if (fps < 0 || fps > 125) {
            console["error"]("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
            return;
          }

          if (fps > 0) {
            frameInterval = Math.floor(1e3 / fps);
          } else {
            frameInterval = frameYieldMs;
          }
        }

        var performWorkUntilDeadline = function () {
          if (scheduledHostCallback !== null) {
            var currentTime = exports.unstable_now();
            startTime = currentTime;
            var hasTimeRemaining = true;
            var hasMoreWork = true;

            try {
              hasMoreWork = scheduledHostCallback(hasTimeRemaining, currentTime);
            } finally {
              if (hasMoreWork) {
                schedulePerformWorkUntilDeadline();
              } else {
                isMessageLoopRunning = false;
                scheduledHostCallback = null;
              }
            }
          } else {
            isMessageLoopRunning = false;
          }
        };

        var schedulePerformWorkUntilDeadline;

        if (typeof localSetImmediate === "function") {
          schedulePerformWorkUntilDeadline = function () {
            localSetImmediate(performWorkUntilDeadline);
          };
        } else if (typeof MessageChannel !== "undefined") {
          var channel = new MessageChannel();
          var port = channel.port2;
          channel.port1.onmessage = performWorkUntilDeadline;

          schedulePerformWorkUntilDeadline = function () {
            port.postMessage(null);
          };
        } else {
          schedulePerformWorkUntilDeadline = function () {
            localSetTimeout(performWorkUntilDeadline, 0);
          };
        }

        function requestHostCallback(callback) {
          scheduledHostCallback = callback;

          if (!isMessageLoopRunning) {
            isMessageLoopRunning = true;
            schedulePerformWorkUntilDeadline();
          }
        }

        function requestHostTimeout(callback, ms) {
          taskTimeoutID = localSetTimeout(function () {
            callback(exports.unstable_now());
          }, ms);
        }

        function cancelHostTimeout() {
          localClearTimeout(taskTimeoutID);
          taskTimeoutID = -1;
        }

        var unstable_requestPaint = requestPaint;
        var unstable_Profiling = null;
        exports.unstable_IdlePriority = IdlePriority;
        exports.unstable_ImmediatePriority = ImmediatePriority;
        exports.unstable_LowPriority = LowPriority;
        exports.unstable_NormalPriority = NormalPriority;
        exports.unstable_Profiling = unstable_Profiling;
        exports.unstable_UserBlockingPriority = UserBlockingPriority;
        exports.unstable_cancelCallback = unstable_cancelCallback;
        exports.unstable_continueExecution = unstable_continueExecution;
        exports.unstable_forceFrameRate = forceFrameRate;
        exports.unstable_getCurrentPriorityLevel = unstable_getCurrentPriorityLevel;
        exports.unstable_getFirstCallbackNode = unstable_getFirstCallbackNode;
        exports.unstable_next = unstable_next;
        exports.unstable_pauseExecution = unstable_pauseExecution;
        exports.unstable_requestPaint = unstable_requestPaint;
        exports.unstable_runWithPriority = unstable_runWithPriority;
        exports.unstable_scheduleCallback = unstable_scheduleCallback;
        exports.unstable_shouldYield = shouldYieldToHost;
        exports.unstable_wrapCallback = unstable_wrapCallback;

        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
        }
      })();
    }
  }

}); // node_modules/scheduler/index.js


var require_scheduler = __commonJS({
  "node_modules/scheduler/index.js"(exports, module2) {
    "use strict";

    if (false) {
      module2.exports = null;
    } else {
      module2.exports = require_scheduler_development();
    }
  }

}); // .beyond/uimport/temp/scheduler.0.23.0.js


var scheduler_0_23_0_exports = {};

__export(scheduler_0_23_0_exports, {
  default: () => scheduler_0_23_0_default
});

__reExport(scheduler_0_23_0_exports, __toESM(require_scheduler()));

var import_scheduler = __toESM(require_scheduler());

var scheduler_0_23_0_default = import_scheduler.default;
module.exports = __toCommonJS(scheduler_0_23_0_exports);
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
};

code(module, require);
return module.exports;
});


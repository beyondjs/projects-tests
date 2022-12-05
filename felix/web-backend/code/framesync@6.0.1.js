define([], () => {

const bimport = specifier => {
	const dependencies = new Map([["framesync","6.0.1"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};
const require = () => void 0;
// Prevent esbuild from considering the context to be amd
const define = void 0;
const module = {};

const code = (module, require) => {
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;

var __markAsModule = target => __defProp(target, "__esModule", {
  value: true
});

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

var __toCommonJS = /* @__PURE__ */(cache => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */new WeakMap() : 0); // .beyond/uimport/temp/framesync.6.0.1.js


var framesync_6_0_1_exports = {};

__export(framesync_6_0_1_exports, {
  cancelSync: () => cancelSync,
  default: () => framesync_6_0_1_default,
  flushSync: () => flushSync,
  getFrameData: () => getFrameData
}); // node_modules/framesync/dist/es/on-next-frame.mjs


var defaultTimestep = 1 / 60 * 1e3;
var getCurrentTime = typeof performance !== "undefined" ? () => performance.now() : () => Date.now();
var onNextFrame = typeof window !== "undefined" ? callback => window.requestAnimationFrame(callback) : callback => setTimeout(() => callback(getCurrentTime()), defaultTimestep); // node_modules/framesync/dist/es/create-render-step.mjs

function createRenderStep(runNextFrame2) {
  let toRun = [];
  let toRunNextFrame = [];
  let numToRun = 0;
  let isProcessing2 = false;
  let flushNextFrame = false;
  const toKeepAlive = /* @__PURE__ */new WeakSet();
  const step = {
    schedule: (callback, keepAlive = false, immediate = false) => {
      const addToCurrentFrame = immediate && isProcessing2;
      const buffer = addToCurrentFrame ? toRun : toRunNextFrame;
      if (keepAlive) toKeepAlive.add(callback);

      if (buffer.indexOf(callback) === -1) {
        buffer.push(callback);
        if (addToCurrentFrame && isProcessing2) numToRun = toRun.length;
      }

      return callback;
    },
    cancel: callback => {
      const index = toRunNextFrame.indexOf(callback);
      if (index !== -1) toRunNextFrame.splice(index, 1);
      toKeepAlive.delete(callback);
    },
    process: frameData => {
      if (isProcessing2) {
        flushNextFrame = true;
        return;
      }

      isProcessing2 = true;
      [toRun, toRunNextFrame] = [toRunNextFrame, toRun];
      toRunNextFrame.length = 0;
      numToRun = toRun.length;

      if (numToRun) {
        for (let i = 0; i < numToRun; i++) {
          const callback = toRun[i];
          callback(frameData);

          if (toKeepAlive.has(callback)) {
            step.schedule(callback);
            runNextFrame2();
          }
        }
      }

      isProcessing2 = false;

      if (flushNextFrame) {
        flushNextFrame = false;
        step.process(frameData);
      }
    }
  };
  return step;
} // node_modules/framesync/dist/es/index.mjs


var maxElapsed = 40;
var useDefaultElapsed = true;
var runNextFrame = false;
var isProcessing = false;
var frame = {
  delta: 0,
  timestamp: 0
};
var stepsOrder = ["read", "update", "preRender", "render", "postRender"];
var steps = stepsOrder.reduce((acc, key) => {
  acc[key] = createRenderStep(() => runNextFrame = true);
  return acc;
}, {});
var sync = stepsOrder.reduce((acc, key) => {
  const step = steps[key];

  acc[key] = (process, keepAlive = false, immediate = false) => {
    if (!runNextFrame) startLoop();
    return step.schedule(process, keepAlive, immediate);
  };

  return acc;
}, {});
var cancelSync = stepsOrder.reduce((acc, key) => {
  acc[key] = steps[key].cancel;
  return acc;
}, {});
var flushSync = stepsOrder.reduce((acc, key) => {
  acc[key] = () => steps[key].process(frame);

  return acc;
}, {});

var processStep = stepId => steps[stepId].process(frame);

var processFrame = timestamp => {
  runNextFrame = false;
  frame.delta = useDefaultElapsed ? defaultTimestep : Math.max(Math.min(timestamp - frame.timestamp, maxElapsed), 1);
  frame.timestamp = timestamp;
  isProcessing = true;
  stepsOrder.forEach(processStep);
  isProcessing = false;

  if (runNextFrame) {
    useDefaultElapsed = false;
    onNextFrame(processFrame);
  }
};

var startLoop = () => {
  runNextFrame = true;
  useDefaultElapsed = true;
  if (!isProcessing) onNextFrame(processFrame);
};

var getFrameData = () => frame;

var es_default = sync; // .beyond/uimport/temp/framesync.6.0.1.js

var framesync_6_0_1_default = es_default;
module.exports = __toCommonJS(framesync_6_0_1_exports);
};

code(module, require);
return module.exports;
});


define([], () => {

const bimport = specifier => {
	const dependencies = new Map([["hey-listen","1.0.8"]]);
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
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */new WeakMap() : 0); // .beyond/uimport/temp/hey-listen.1.0.8.js


var hey_listen_1_0_8_exports = {};

__export(hey_listen_1_0_8_exports, {
  invariant: () => invariant,
  warning: () => warning
}); // node_modules/hey-listen/dist/hey-listen.es.js


var warning = function () {};

var invariant = function () {};

if (true) {
  warning = function (check, message) {
    if (!check && typeof console !== "undefined") {
      console.warn(message);
    }
  };

  invariant = function (check, message) {
    if (!check) {
      throw new Error(message);
    }
  };
}

module.exports = __toCommonJS(hey_listen_1_0_8_exports);
};

code(module, require);
return module.exports;
});


define(["@babel/runtime@7.19.0/helpers/esm/setPrototypeOf"], (dep_0) => {

const bimport = specifier => {
	const dependencies = new Map([["@babel/runtime","7.19.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};

const dependencies = new Map([["@babel/runtime@7.19.0/helpers/esm/setPrototypeOf", dep_0]]);
const require = dependency => dependencies.get(dependency);
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
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */new WeakMap() : 0); // .beyond/uimport/temp/@babel/runtime/helpers/esm/inheritsLoose.7.19.0.js


var inheritsLoose_7_19_0_exports = {};

__export(inheritsLoose_7_19_0_exports, {
  default: () => inheritsLoose_7_19_0_default
}); // node_modules/@babel/runtime/helpers/esm/inheritsLoose.js


var import_setPrototypeOf = __toESM(require("@babel/runtime@7.19.0/helpers/esm/setPrototypeOf"), 0);

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  (0, import_setPrototypeOf.default)(subClass, superClass);
} // .beyond/uimport/temp/@babel/runtime/helpers/esm/inheritsLoose.7.19.0.js


var inheritsLoose_7_19_0_default = _inheritsLoose;
module.exports = __toCommonJS(inheritsLoose_7_19_0_exports);
};

code(module, require);
return module.exports;
});


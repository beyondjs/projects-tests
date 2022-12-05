System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@socket.io/component-emitter","3.1.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};

var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [],
execute: function() {
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
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */new WeakMap() : 0); // .beyond/uimport/@socket.io/component-emitter.3.1.0.js


var component_emitter_3_1_0_exports = {};

__export(component_emitter_3_1_0_exports, {
  Emitter: () => Emitter
}); // node_modules/@socket.io/component-emitter/index.mjs


function Emitter(obj) {
  if (obj) return mixin(obj);
}

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }

  return obj;
}

Emitter.prototype.on = Emitter.prototype.addEventListener = function (event, fn) {
  this._callbacks = this._callbacks || {};
  (this._callbacks["$" + event] = this._callbacks["$" + event] || []).push(fn);
  return this;
};

Emitter.prototype.once = function (event, fn) {
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function (event, fn) {
  this._callbacks = this._callbacks || {};

  if (arguments.length == 0) {
    this._callbacks = {};
    return this;
  }

  var callbacks = this._callbacks["$" + event];
  if (!callbacks) return this;

  if (arguments.length == 1) {
    delete this._callbacks["$" + event];
    return this;
  }

  var cb;

  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];

    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }

  if (callbacks.length === 0) {
    delete this._callbacks["$" + event];
  }

  return this;
};

Emitter.prototype.emit = function (event) {
  this._callbacks = this._callbacks || {};
  var args = new Array(arguments.length - 1),
      callbacks = this._callbacks["$" + event];

  for (var i = 1; i < arguments.length; i++) {
    args[i - 1] = arguments[i];
  }

  if (callbacks) {
    callbacks = callbacks.slice(0);

    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

Emitter.prototype.emitReserved = Emitter.prototype.emit;

Emitter.prototype.listeners = function (event) {
  this._callbacks = this._callbacks || {};
  return this._callbacks["$" + event] || [];
};

Emitter.prototype.hasListeners = function (event) {
  return !!this.listeners(event).length;
};

module.exports = __toCommonJS(component_emitter_3_1_0_exports);
};

code(module, require);
_exports(module.exports);
}}});


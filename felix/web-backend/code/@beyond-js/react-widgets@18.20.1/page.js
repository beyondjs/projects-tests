define(["@beyond-js/kernel@0.1.1/bundle","react@18.2.0","scheduler@0.23.0","react-dom@18.2.0","react-dom@18.2.0/client","@beyond-js/kernel@0.1.1/core","@beyond-js/widgets@0.1.0/render","@beyond-js/kernel@0.1.1/styles","@beyond-js/widgets@0.1.0/controller","@beyond-js/react-widgets@18.20.1/base","@beyond-js/kernel@0.1.1/routing","@beyond-js/widgets@0.1.0/routing"], (dep_0, dep_1, dep_2, dep_3, dep_4, dep_5, dep_6, dep_7, dep_8, dep_9, dep_10, dep_11) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.1"],["react","18.2.0"],["scheduler","0.23.0"],["react-dom","18.2.0"],["@beyond-js/widgets","0.1.0"],["@beyond-js/react-widgets","18.20.1"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};

const dependencies = new Map([["@beyond-js/kernel@0.1.1/bundle", dep_0],["react@18.2.0", dep_1],["scheduler@0.23.0", dep_2],["react-dom@18.2.0", dep_3],["react-dom@18.2.0/client", dep_4],["@beyond-js/kernel@0.1.1/core", dep_5],["@beyond-js/widgets@0.1.0/render", dep_6],["@beyond-js/kernel@0.1.1/styles", dep_7],["@beyond-js/widgets@0.1.0/controller", dep_8],["@beyond-js/react-widgets@18.20.1/base", dep_9],["@beyond-js/kernel@0.1.1/routing", dep_10],["@beyond-js/widgets@0.1.0/routing", dep_11]]);
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
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */new WeakMap() : 0); // .beyond/uimport/temp/@beyond-js/react-widgets/page.18.20.1.js


var page_18_20_1_exports = {};

__export(page_18_20_1_exports, {
  PageReactWidgetController: () => PageReactWidgetController,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
}); // node_modules/@beyond-js/react-widgets/page/page.browser.mjs


var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.1/bundle"), 0);

var dependency_1 = __toESM(require("@beyond-js/react-widgets@18.20.1/base"), 0);

var dependency_2 = __toESM(require("@beyond-js/widgets@0.1.0/routing"), 0);

var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;

var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/react-widgets@18.18.2/page"
  },
  "type": "ts"
}, import_meta.url).package();

;

__pkg.dependencies.update([["@beyond-js/react-widgets/base", dependency_1], ["@beyond-js/widgets/routing", dependency_2]]);

var ims = /* @__PURE__ */new Map();
ims.set("./page", {
  hash: 3016655360,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.PageReactWidgetController = void 0;

    var _base = require2("@beyond-js/react-widgets/base");

    var _routing = require2("@beyond-js/widgets/routing");

    class PageReactWidgetController2 extends _base.ReactWidgetController {
      #uri;

      get uri() {
        return this.#uri;
      }

      mount() {
        return super.mount({
          uri: this.#uri
        });
      }

      async initialise() {
        this.#uri = new _routing.PageURI({
          widget: this.widget
        });
        await super.initialise();
      }

    }

    exports.PageReactWidgetController = PageReactWidgetController2;
  }
});
__pkg.exports.descriptor = [{
  "im": "./page",
  "from": "PageReactWidgetController",
  "name": "PageReactWidgetController"
}];
var PageReactWidgetController;

__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "PageReactWidgetController") && (PageReactWidgetController = require2 ? require2("./page").PageReactWidgetController : value);
};

var __beyond_pkg = __pkg;
var hmr = new function () {
  this.on = (event, listener) => void 0;

  this.off = (event, listener) => void 0;
}();

__pkg.initialise(ims);

module.exports = __toCommonJS(page_18_20_1_exports);
};

code(module, require);
return module.exports;
});


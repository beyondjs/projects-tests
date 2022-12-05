define(["@beyond-js/kernel@0.1.1/bundle","@beyond-js/kernel@0.1.1/core"], (dep_0, dep_1) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.1"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};

const dependencies = new Map([["@beyond-js/kernel@0.1.1/bundle", dep_0],["@beyond-js/kernel@0.1.1/core", dep_1]]);
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
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */new WeakMap() : 0); // .beyond/uimport/temp/@beyond-js/kernel/styles.0.1.1.js


var styles_0_1_1_exports = {};

__export(styles_0_1_1_exports, {
  DependenciesStyles: () => DependenciesStyles,
  V1Styles: () => V1Styles,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr,
  styles: () => styles
}); // node_modules/@beyond-js/kernel/styles/styles.browser.mjs


var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.1/bundle"), 0);

var dependency_1 = __toESM(require("@beyond-js/kernel@0.1.1/core"), 0);

var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;

var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/kernel@0.1.1/styles"
  },
  "type": "ts"
}, import_meta.url).package();

;

__pkg.dependencies.update([["@beyond-js/kernel/core", dependency_1]]);

var ims = /* @__PURE__ */new Map();
ims.set("./dependencies-styles", {
  hash: 282408023,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.DependenciesStyles = void 0;

    var _bundle = require2("@beyond-js/kernel/bundle");

    var _core = require2("@beyond-js/kernel/core");

    var _registry = require2("./registry");

    class DependenciesStyles2 extends _core.Events {
      #vspecifier;
      #elements;

      get elements() {
        return this.#elements;
      }

      constructor(vspecifier) {
        super();
        this.#vspecifier = vspecifier;

        const change = () => this.trigger("change");

        this.#elements = /* @__PURE__ */new Set();

        const recursive = vspecifier2 => {
          if (!vspecifier2) {
            console.trace("Bundle vspecifier not defined");
            return;
          }

          if (!_bundle.instances.has(vspecifier2)) {
            console.error(`Bundle id "${vspecifier2}" not found. Try refreshing the page.
If the problem still persist, delete the BeyondJS cache and try again.`);
            return;
          }

          const bundle = _bundle.instances.get(vspecifier2);

          if (vspecifier2 !== this.#vspecifier && bundle.type === "widget") return;

          const styles2 = _registry.styles.get(vspecifier2);

          if (styles2 && styles2.engine !== "legacy") {
            this.#elements.add(styles2);
            styles2.on("change", change);
          }

          const {
            dependencies
          } = bundle.package();
          dependencies.forEach(dependency => {
            const pkg = dependency.__beyond_pkg;
            if (!pkg) return;
            recursive(pkg.vspecifier);
          });
        };

        recursive(this.#vspecifier);
      }

    }

    exports.DependenciesStyles = DependenciesStyles2;
  }
});
ims.set("./legacy", {
  hash: 859564821,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;

    class _default {
      get engine() {
        return "legacy";
      }

      #bundle;
      #value;

      get value() {
        return this.#value;
      }

      #appended = false;

      get appended() {
        return this.#appended;
      }

      constructor(bundle, value) {
        this.#bundle = bundle;

        const module2 = (() => {
          const module3 = bundle.split("/");
          module3.pop();
          return module3.join("/");
        })();

        const regexp = /#host\.([\w\d]*)#([^.]*\.[\w\d]*)/g;
        this.#value = value.replace(regexp, (match, host, resource) => {
          if (host === "module" || host === "library") {
            return `${module2}/${resource}`;
          } else if (host === "application") {
            return resource;
          }

          console.warn(`Invalid css host specification on bundle "${bundle}"`, match);
        });
      }

      appendToDOM(is) {
        if (this.#appended) {
          const previous = document.querySelectorAll(`:scope > [bundle="${this.#bundle}"]`)[0];
          previous && document.removeChild(previous);
        }

        const css = document.createElement("style");
        css.appendChild(document.createTextNode(this.#value));
        is && css.setAttribute("is", is);
        document.getElementsByTagName("head")[0].appendChild(css);
        this.#appended = true;
      }

    }

    exports.default = _default;
  }
});
ims.set("./registry", {
  hash: 2402124624,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.styles = void 0;

    var _legacy = require2("./legacy");

    var _v = require2("./v1");

    class Registry {
      #registry = /* @__PURE__ */new Map();

      register(vspecifier, value) {
        if (this.#registry.has(vspecifier)) return;
        const styles3 = value ? new _legacy.default(vspecifier, value) : new _v.V1Styles(vspecifier);
        this.#registry.set(vspecifier, styles3);
        return styles3;
      }

      has(vspecifier) {
        return this.#registry.has(vspecifier);
      }

      get(vspecifier) {
        return this.#registry.get(vspecifier);
      }

    }

    const styles2 = new Registry();
    exports.styles = styles2;
    globalThis.beyondLegacyStyles = styles2;
  }
});
ims.set("./v1", {
  hash: 3449853183,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.V1Styles = void 0;

    var _core = require2("@beyond-js/kernel/core");

    var _bundle = require2("@beyond-js/kernel/bundle");

    class V1Styles2 extends _core.Events {
      get engine() {
        return "v1";
      }

      #bundle;

      get bundle() {
        return this.#bundle;
      }

      #version = 0;

      get version() {
        return this.#version;
      }

      #resource;

      get resource() {
        return this.#resource;
      }

      get href() {
        const version = this.#version ? `?version=${this.#version}` : "";
        return `${this.#resource}${version}`;
      }

      constructor(resource) {
        super();
        this.#bundle = _bundle.instances.get(resource);

        this.#resource = (() => {
          if (typeof process === "object") {
            const split = resource.split("/");
            const pkg = split[0].startsWith("@") ? `${split.shift()}/${split.shift()}` : split.shift();
            const subpath = split.join("/");
            return `##_!${pkg}!_##${subpath}.css`;
          }

          let {
            uri
          } = this.#bundle;
          uri = uri.slice(0, uri.length - 3);
          return `${uri}.css`;
        })();
      }

      change() {
        this.#version++;
        this.trigger("change");
      }

    }

    exports.V1Styles = V1Styles2;
  }
});
__pkg.exports.descriptor = [{
  "im": "./dependencies-styles",
  "from": "DependenciesStyles",
  "name": "DependenciesStyles"
}, {
  "im": "./registry",
  "from": "styles",
  "name": "styles"
}, {
  "im": "./v1",
  "from": "V1Styles",
  "name": "V1Styles"
}];
var DependenciesStyles, styles, V1Styles;

__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "DependenciesStyles") && (DependenciesStyles = require2 ? require2("./dependencies-styles").DependenciesStyles : value);
  (require2 || prop === "styles") && (styles = require2 ? require2("./registry").styles : value);
  (require2 || prop === "V1Styles") && (V1Styles = require2 ? require2("./v1").V1Styles : value);
};

var __beyond_pkg = __pkg;
var hmr = new function () {
  this.on = (event, listener) => void 0;

  this.off = (event, listener) => void 0;
}();

__pkg.initialise(ims);

module.exports = __toCommonJS(styles_0_1_1_exports);
};

code(module, require);
return module.exports;
});


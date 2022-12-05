define(["@beyond-js/kernel@0.1.1/bundle"], (dep_0) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.1"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};

const dependencies = new Map([["@beyond-js/kernel@0.1.1/bundle", dep_0]]);
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
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */new WeakMap() : 0); // .beyond/uimport/temp/@beyond-js/kernel/transversals.0.1.1.js


var transversals_0_1_1_exports = {};

__export(transversals_0_1_1_exports, {
  Transversal: () => Transversal,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
}); // node_modules/@beyond-js/kernel/transversals/transversals.browser.mjs


var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.1/bundle"), 0);

var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;

var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/kernel@0.1.1/transversals"
  },
  "type": "ts"
}, import_meta.url).package();

;

__pkg.dependencies.update([]);

var ims = /* @__PURE__ */new Map();
ims.set("./dependencies", {
  hash: 916907578,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;

    class _default extends Map {
      update(deps) {
        this.clear();
        deps?.forEach(([specifier, dependency]) => this.set(specifier, dependency));
      }

    }

    exports.default = _default;
  }
});
ims.set("./transversal", {
  hash: 2292377186,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Transversal = void 0;

    var _bundle = require2("@beyond-js/kernel/bundle");

    var _dependencies = require2("./dependencies");

    class Transversal2 {
      #name;

      get name() {
        return this.#name;
      }

      #language;

      get language() {
        return this.#language;
      }

      #bundles = /* @__PURE__ */new Map();

      get bundles() {
        return this.#bundles;
      }

      #dependencies = new _dependencies.default();

      get dependencies() {
        return this.#dependencies;
      }

      constructor(name, language) {
        this.#name = name;
        this.#language = language;
      }

      #initialised = false;

      initialise(bundles) {
        if (this.#initialised) throw new Error(`Transversal "${this.#name}" already initialised`);
        this.#initialised = true;
        const packages = /* @__PURE__ */new Map();
        bundles.forEach(([specs, creator]) => {
          const pkg = new _bundle.Bundle(specs).package(this.#language);
          const ims2 = /* @__PURE__ */new Map();
          const exports2 = {};
          const response = creator(ims2, exports2);
          const {
            dependencies
          } = response ? response : {
            dependencies: void 0
          };
          pkg.exports.descriptor = exports2.descriptor;
          packages.set(pkg.specifier, {
            pkg,
            dependencies,
            ims: ims2
          });
        });
        packages.forEach(({
          pkg,
          dependencies,
          ims: ims2
        }) => {
          const register = (() => {
            const register2 = [];
            dependencies?.forEach(specifier => {
              if (this.#dependencies.has(specifier)) {
                register2.push([specifier, this.#dependencies.get(specifier)]);
                return;
              }

              if (!packages.has(specifier)) {
                const data = `
	Dependencies: ${JSON.stringify([...this.#dependencies.keys()])}. 
	Bundles: ${JSON.stringify([...packages.keys()])}`;
                throw new Error(`Dependency "${specifier}" not found on "${this.#name}" transversal. ${data}`);
              }

              const {
                pkg: pkg2
              } = packages.get(specifier);
              register2.push([specifier, pkg2.exports.values]);
            });
            return register2;
          })();

          packages.forEach(({
            pkg: pkg2
          }) => this.#bundles.set(pkg2.specifier, pkg2.exports.values));
          register && pkg.dependencies.update(register);
          pkg.ims.register(ims2);
        });
        packages.forEach(({
          pkg
        }) => !pkg.initialised && pkg.initialise());
      }

    }

    exports.Transversal = Transversal2;
  }
});
__pkg.exports.descriptor = [{
  "im": "./transversal",
  "from": "Transversal",
  "name": "Transversal"
}];
var Transversal;

__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "Transversal") && (Transversal = require2 ? require2("./transversal").Transversal : value);
};

var __beyond_pkg = __pkg;
var hmr = new function () {
  this.on = (event, listener) => void 0;

  this.off = (event, listener) => void 0;
}();

__pkg.initialise(ims);

module.exports = __toCommonJS(transversals_0_1_1_exports);
};

code(module, require);
return module.exports;
});


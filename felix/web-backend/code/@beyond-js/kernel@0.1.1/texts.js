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
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */new WeakMap() : 0); // .beyond/uimport/temp/@beyond-js/kernel/texts.0.1.1.js


var texts_0_1_1_exports = {};

__export(texts_0_1_1_exports, {
  CurrentTexts: () => CurrentTexts,
  Texts: () => Texts,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
}); // node_modules/@beyond-js/kernel/texts/texts.browser.mjs


var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.1/bundle"), 0);

var dependency_1 = __toESM(require("@beyond-js/kernel@0.1.1/core"), 0);

var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;

var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/kernel@0.1.1/texts"
  },
  "type": "ts"
}, import_meta.url).package();

;

__pkg.dependencies.update([["@beyond-js/kernel/core", dependency_1]]);

var ims = /* @__PURE__ */new Map();
ims.set("./current", {
  hash: 1735458173,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.CurrentTexts = void 0;

    var _core = require2("@beyond-js/kernel/core");

    var _texts = require2("./texts");

    class CurrentTexts2 extends _core.Events {
      #texts = /* @__PURE__ */new Map();
      #bundle;

      get bundle() {
        return this.#bundle;
      }

      #enabled = false;

      get enabled() {
        return this.#enabled;
      }

      set enabled(value) {
        this.#enabled = !!value;
        value && this.fetch().catch(exc => console.error(exc.stack));
      }

      #last;

      get #current() {
        const {
          current: language
        } = _core.languages;
        if (this.#texts.has(language)) return this.#texts.get(language);
        const texts = new _texts.Texts(this.#bundle, {
          language
        });
        this.#texts.set(language, texts);
        return texts;
      }

      get loading() {
        return this.#current.loading;
      }

      get loaded() {
        return this.#current.loaded;
      }

      get ready() {
        !this.loaded && !this.loading && this.fetch().catch(exc => console.error(exc.stack));
        return this.loaded;
      }

      get value() {
        return this.#current.value;
      }

      constructor(bundle) {
        super();
        this.#bundle = bundle;
        if (!bundle) throw new Error(`Bundle parameter must be specified`);

        _core.languages.on("change", this.#change);

        this.#current.on("change", this.#triggerChange);
        this.#last = this.#current;
      }

      #triggerChange = () => {
        this.trigger("change");
      };
      #change = () => {
        this.#last.off("change", this.#triggerChange);
        this.#enabled && this.fetch().catch(exc => console.log(exc.stack));
        this.#current.on("change", this.#triggerChange);
        this.#last = this.#current;
        this.#triggerChange();
      };

      async fetch() {
        await _core.languages.ready;
        await this.#current.fetch();
      }

      async load() {
        await this.#current.fetch();
      }

      destroy() {
        this.#texts.forEach(texts => texts.destroy());

        _core.languages.off("change", this.#change);
      }

      toJSON() {
        return {};
      }

    }

    exports.CurrentTexts = CurrentTexts2;
  }
});
ims.set("./texts", {
  hash: 678111696,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Texts = void 0;

    var _core = require2("@beyond-js/kernel/core");

    class Texts2 extends _core.Events {
      #module;

      get module() {
        return this.#module;
      }

      #bundle;

      get bundle() {
        return this.#bundle;
      }

      #transversal;

      get transversal() {
        return this.#transversal;
      }

      #multilanguage;

      get multilanguage() {
        return this.#multilanguage;
      }

      #language;

      get language() {
        return this.#language;
      }

      #texts;
      #loaded = false;

      get loaded() {
        return this.#loaded;
      }

      #loading;

      get loading() {
        return this.#loading;
      }

      get value() {
        return this.#texts?.txt;
      }

      get ready() {
        if (this.#loading) return false;
        this.fetch().catch(exc => console.log(exc.stack));
        return !this.#loading && this.#loaded;
      }

      constructor(module2, specs) {
        if (!module2) throw new Error("Invalid parameters");
        super();
        this.#module = module2;
        specs = specs ? specs : {};
        this.#language = specs.language;
        this.#multilanguage = !!specs.language;
        this.#bundle = !specs.transversal ? specs.bundle ? specs.bundle : "txt" : void 0;
        this.#transversal = specs.transversal;
      }

      #update = () => this.trigger("change");

      async fetch() {
        if (this.#loading || this.#loaded) return;
        this.#loading = true;
        this.trigger("change");
        const language = this.#language ? `.${this.#language}` : "";

        const {
          specifier,
          resource
        } = (() => {
          if (this.#transversal) {
            const specifier2 = `${this.#module}.${this.#transversal}${language}`;

            const pkg = (() => {
              const split = this.#module.split("/");
              return split[0].startsWith("@") ? `${split[0]}/${split[1]}` : split[0];
            })();

            const resource2 = `${pkg}/${this.#transversal}${language}`;
            return {
              specifier: specifier2,
              resource: resource2
            };
          } else {
            const specifier2 = `${this.#module}.${this.#bundle}${language}`;
            return {
              specifier: specifier2,
              resource: specifier2
            };
          }
        })();

        const imported = await bimport(resource);

        this.#texts = (() => {
          if (!this.#transversal) return imported;
          const {
            __beyond_transversal: transversal
          } = imported;
          return transversal.bundles.get(specifier);
        })();

        this.#texts.hmr.on("change", this.#update);
        this.#loading = false;
        this.#loaded = true;
        this.trigger("change");
      }

      async load() {
        await this.fetch();
      }

      destroy() {
        this.#texts?.hmr.off("change", this.#update);
      }

      toJSON() {
        return {};
      }

    }

    exports.Texts = Texts2;
  }
});
__pkg.exports.descriptor = [{
  "im": "./current",
  "from": "CurrentTexts",
  "name": "CurrentTexts"
}, {
  "im": "./texts",
  "from": "Texts",
  "name": "Texts"
}];
var CurrentTexts, Texts;

__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "CurrentTexts") && (CurrentTexts = require2 ? require2("./current").CurrentTexts : value);
  (require2 || prop === "Texts") && (Texts = require2 ? require2("./texts").Texts : value);
};

var __beyond_pkg = __pkg;
var hmr = new function () {
  this.on = (event, listener) => void 0;

  this.off = (event, listener) => void 0;
}();

__pkg.initialise(ims);

module.exports = __toCommonJS(texts_0_1_1_exports);
};

code(module, require);
return module.exports;
});


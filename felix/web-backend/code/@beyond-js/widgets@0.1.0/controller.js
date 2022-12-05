define(["@beyond-js/kernel@0.1.1/bundle","@beyond-js/kernel@0.1.1/core","@beyond-js/widgets@0.1.0/render","@beyond-js/kernel@0.1.1/styles"], (dep_0, dep_1, dep_2, dep_3) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.1"],["@beyond-js/widgets","0.1.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};

const dependencies = new Map([["@beyond-js/kernel@0.1.1/bundle", dep_0],["@beyond-js/kernel@0.1.1/core", dep_1],["@beyond-js/widgets@0.1.0/render", dep_2],["@beyond-js/kernel@0.1.1/styles", dep_3]]);
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
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */new WeakMap() : 0); // .beyond/uimport/temp/@beyond-js/widgets/controller.0.1.0.js


var controller_0_1_0_exports = {};

__export(controller_0_1_0_exports, {
  IWidgetRendered: () => IWidgetRendered,
  IWidgetStore: () => IWidgetStore,
  WidgetAttributes: () => WidgetAttributes,
  WidgetClientController: () => WidgetClientController,
  WidgetControllerBase: () => WidgetControllerBase,
  WidgetServerController: () => WidgetServerController,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
}); // node_modules/@beyond-js/widgets/controller/controller.browser.mjs


var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.1/bundle"), 0);

var dependency_1 = __toESM(require("@beyond-js/kernel@0.1.1/core"), 0);

var dependency_2 = __toESM(require("@beyond-js/widgets@0.1.0/render"), 0);

var dependency_3 = __toESM(require("@beyond-js/kernel@0.1.1/styles"), 0);

var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;

var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/widgets@0.1.0/controller"
  },
  "type": "ts"
}, import_meta.url).package();

;

__pkg.dependencies.update([["@beyond-js/kernel/core", dependency_1], ["@beyond-js/widgets/render", dependency_2], ["@beyond-js/kernel/styles", dependency_3]]);

var ims = /* @__PURE__ */new Map();
ims.set("./attributes", {
  hash: 3176328789,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.WidgetAttributes = void 0;

    var _core = require2("@beyond-js/kernel/core");

    class WidgetAttributes2 extends Map {
      #widget;
      #events = new _core.Events();
      on = (event, listener) => this.#events.on(event, listener);
      off = (event, listener) => this.#events.off(event, listener);

      constructor(widget) {
        super();
        this.#widget = widget;
        let attrs = widget.specs.attrs;
        attrs?.forEach(attr => this.set(attr, widget.getAttribute(attr)));
      }

      change(name, old, value) {
        this.set(name, value);
        this.#events.trigger("change");
        this.#events.trigger(`${name}:change`, value);
      }

    }

    exports.WidgetAttributes = WidgetAttributes2;
  }
});
ims.set("./client", {
  hash: 97446879,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.WidgetClientController = void 0;

    var _controller = require2("./controller");

    var _attributes = require2("./attributes");

    var _bundle = require2("@beyond-js/kernel/bundle");

    var _styles = require2("@beyond-js/kernel/styles");

    class WidgetClientController2 extends _controller.WidgetControllerBase {
      #widget;

      get widget() {
        return this.#widget;
      }

      #store;

      get store() {
        return this.#store;
      }

      #attributes;

      get attributes() {
        return this.#attributes;
      }

      attributeChanged(name, old, value) {
        this.#attributes.change(name, old, value);
      }

      get styles() {
        const styles = this.#widget.styles;
        return styles;
      }

      constructor(widget) {
        super({
          widget
        });
        this.#widget = widget;
        this.#attributes = new _attributes.WidgetAttributes(widget);
        const styles = new _styles.DependenciesStyles(this.specs.vspecifier);

        const links = () => [...styles.elements].map(style => style.href);

        !this.styles.initialised && this.styles.initialise(links());
        styles.on("change", () => this.styles.update(links()));
      }

      render() {
        try {
          this.mount();
        } catch (exc) {
          console.log(`Error mounting widget controller "${this.#widget.localName}":`);
          console.log(exc.stack);
        }
      }

      refresh() {
        this.unmount();
        this.render();
      }

      #refresh = () => this.refresh();

      disconnect() {
        this.unmount();
      }

      async initialise() {
        if (!this.Widget) {
          throw new Error(`Widget "${this.#widget.localName}" does not expose a Widget property`);
        }

        this.#store = this.createStore?.();
        const prerender = this.#widget.ssr.prerender;

        if (prerender) {
          const cached = prerender?.store;
          await this.#store?.hydrate(cached);
        }

        this.#store?.fetch?.();
        this.render();

        if (!_bundle.instances.has(this.specs.vspecifier)) {
          console.log(`Bundle id "${this.specs.vspecifier}" not found. Try refreshing the page.
If the problem still persist, delete the BeyondJS cache and try again.`);
          return;
        }

        const pkg = _bundle.instances.get(this.specs.vspecifier).package();

        pkg.hmr.on("change", this.#refresh);
      }

    }

    exports.WidgetClientController = WidgetClientController2;
  }
});
ims.set("./controller", {
  hash: 4127212824,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.WidgetControllerBase = void 0;

    var _render = require2("@beyond-js/widgets/render");

    class WidgetControllerBase2 {
      #specs;

      get specs() {
        return this.#specs;
      }

      get element() {
        return this.#specs.name;
      }

      get is() {
        return this.#specs.is;
      }

      get route() {
        return this.#specs.route;
      }

      get layout() {
        return this.#specs.layout;
      }

      #pkg;

      get pkg() {
        return this.#pkg;
      }

      get Widget() {
        return;
      }

      createStore(language) {
        return void 0;
      }

      constructor({
        specs,
        widget
      }) {
        if (!specs) {
          const {
            localName
          } = widget;
          if (!_render.widgets.has(localName)) throw new Error(`Widget name "${localName}" is not registered`);
          specs = _render.widgets.get(localName);
        }

        this.#pkg = (() => {
          const split = specs.vspecifier.split("/");
          const scope = split[0].startsWith("@") ? split.shift() : void 0;
          const [name] = split.shift().split("@");
          return scope ? `${scope}/${name}` : name;
        })();

        this.#specs = specs;
      }

    }

    exports.WidgetControllerBase = WidgetControllerBase2;
  }
});
ims.set("./ssr", {
  hash: 712806230,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.WidgetServerController = void 0;

    var _controller = require2("./controller");

    var _styles = require2("@beyond-js/kernel/styles");

    class WidgetServerController2 extends _controller.WidgetControllerBase {
      #styles = [];

      get styles() {
        return this.#styles;
      }

      constructor(params) {
        super(params);
        const styles = new _styles.DependenciesStyles(this.specs.vspecifier);
        styles.elements.forEach(({
          href
        }) => this.#styles.push(href));
        this.#styles.unshift(`##_!${this.pkg}!_##global.css`);
      }

    }

    exports.WidgetServerController = WidgetServerController2;
  }
});
__pkg.exports.descriptor = [{
  "im": "./attributes",
  "from": "WidgetAttributes",
  "name": "WidgetAttributes"
}, {
  "im": "./client",
  "from": "WidgetClientController",
  "name": "WidgetClientController"
}, {
  "im": "./controller",
  "from": "IWidgetStore",
  "name": "IWidgetStore"
}, {
  "im": "./controller",
  "from": "WidgetControllerBase",
  "name": "WidgetControllerBase"
}, {
  "im": "./ssr",
  "from": "IWidgetRendered",
  "name": "IWidgetRendered"
}, {
  "im": "./ssr",
  "from": "WidgetServerController",
  "name": "WidgetServerController"
}];
var WidgetAttributes, WidgetClientController, IWidgetStore, WidgetControllerBase, IWidgetRendered, WidgetServerController;

__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "WidgetAttributes") && (WidgetAttributes = require2 ? require2("./attributes").WidgetAttributes : value);
  (require2 || prop === "WidgetClientController") && (WidgetClientController = require2 ? require2("./client").WidgetClientController : value);
  (require2 || prop === "IWidgetStore") && (IWidgetStore = require2 ? require2("./controller").IWidgetStore : value);
  (require2 || prop === "WidgetControllerBase") && (WidgetControllerBase = require2 ? require2("./controller").WidgetControllerBase : value);
  (require2 || prop === "IWidgetRendered") && (IWidgetRendered = require2 ? require2("./ssr").IWidgetRendered : value);
  (require2 || prop === "WidgetServerController") && (WidgetServerController = require2 ? require2("./ssr").WidgetServerController : value);
};

var __beyond_pkg = __pkg;
var hmr = new function () {
  this.on = (event, listener) => void 0;

  this.off = (event, listener) => void 0;
}();

__pkg.initialise(ims);

module.exports = __toCommonJS(controller_0_1_0_exports);
};

code(module, require);
return module.exports;
});


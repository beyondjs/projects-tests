define(["@beyond-js/kernel@0.1.1/bundle","react@18.2.0","scheduler@0.23.0","react-dom@18.2.0","react-dom@18.2.0/client","@beyond-js/kernel@0.1.1/core","@beyond-js/widgets@0.1.0/render","@beyond-js/kernel@0.1.1/styles","@beyond-js/widgets@0.1.0/controller"], (dep_0, dep_1, dep_2, dep_3, dep_4, dep_5, dep_6, dep_7, dep_8) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.1"],["react","18.2.0"],["scheduler","0.23.0"],["react-dom","18.2.0"],["@beyond-js/widgets","0.1.0"],["@beyond-js/react-widgets","18.20.1"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};

const dependencies = new Map([["@beyond-js/kernel@0.1.1/bundle", dep_0],["react@18.2.0", dep_1],["scheduler@0.23.0", dep_2],["react-dom@18.2.0", dep_3],["react-dom@18.2.0/client", dep_4],["@beyond-js/kernel@0.1.1/core", dep_5],["@beyond-js/widgets@0.1.0/render", dep_6],["@beyond-js/kernel@0.1.1/styles", dep_7],["@beyond-js/widgets@0.1.0/controller", dep_8]]);
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
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */new WeakMap() : 0); // .beyond/uimport/temp/@beyond-js/react-widgets/base.18.20.1.js


var base_18_20_1_exports = {};

__export(base_18_20_1_exports, {
  ReactWidgetController: () => ReactWidgetController,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
}); // node_modules/@beyond-js/react-widgets/base/base.browser.mjs


var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.1/bundle"), 0);

var dependency_1 = __toESM(require("react@18.2.0"), 0);

var dependency_2 = __toESM(require("react-dom@18.2.0/client"), 0);

var dependency_3 = __toESM(require("@beyond-js/widgets@0.1.0/controller"), 0);

var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;

var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/react-widgets@18.18.2/base"
  },
  "type": "ts"
}, import_meta.url).package();

;

__pkg.dependencies.update([["react", dependency_1], ["react-dom/client", dependency_2], ["@beyond-js/widgets/controller", dependency_3]]);

var ims = /* @__PURE__ */new Map();
ims.set("./controller", {
  hash: 4071237356,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ReactWidgetController = void 0;
    var React = require2("react");

    var _client = require2("react-dom/client");

    var _controller = require2("@beyond-js/widgets/controller");

    var _widget = require2("./widget");

    var _wrapper = require2("./wrapper");

    class ReactWidgetController2 extends _controller.WidgetClientController {
      #wrapper;
      #root;

      get Widget() {
        return null;
      }

      mount(props) {
        if (!this.Widget) {
          return {
            errors: [`Widget "${this.element}" does not export a Widget class`]
          };
        }

        props = Object.assign({
          widget: this.widget,
          attributes: this.attributes,
          component: this.widget,
          store: this.store
        }, props ? props : {});
        const holder = this.widget.holder;
        const hydrate = !!holder.children.length;

        try {
          const wrapper = this.#wrapper = new _wrapper.Wrapper(this);
          const p = {
            wrapper,
            props,
            styles: this.styles,
            holder: this.widget.holder
          };
          const element = React.createElement(_widget.default, p);

          if (hydrate) {
            this.#root = (0, _client.hydrateRoot)(holder, element);
          } else {
            const root = this.#root = (0, _client.createRoot)(holder);
            root.render(element);
          }
        } catch (exc) {
          console.log(`Error rendering widget "${this.widget.localName}":`);
          console.log(exc.stack);
        }
      }

      unmount() {
        this.#root.unmount();
      }

      refresh() {
        this.#wrapper.changed();
      }

    }

    exports.ReactWidgetController = ReactWidgetController2;
  }
});
ims.set("./styles", {
  hash: 3645751033,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = _default;
    var React = require2("react");

    function _default({
      styles
    }) {
      const rs = React.useState(0);
      React.useEffect(() => {
        const refresh = () => rs[1](prev => prev + 1);

        styles.on("change", refresh);
        return () => styles.off("change", refresh) && void 0;
      }, []);
      const head = [...styles.resources].map(url => {
        const loaded = () => styles.onloaded(url);

        return React.createElement("link", {
          key: url,
          href: url,
          rel: "stylesheet",
          onLoad: loaded,
          onError: loaded
        });
      });
      return React.createElement(React.Fragment, null, head);
    }
  }
});
ims.set("./widget", {
  hash: 1316246600,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = _default;
    var React = require2("react");

    var _styles = require2("./styles");

    function _default({
      wrapper,
      props,
      styles,
      holder
    }) {
      const elements = [];
      elements.push(React.createElement(_styles.default, {
        key: "styles",
        styles,
        widget: props.widget
      }));
      const rs = React.useState(0);

      const refresh = () => rs[1](rs[0] + 1);

      wrapper.changed = refresh;

      const loaded = (() => {
        !styles.loaded && styles.ready.then(refresh);
        holder.style.display = "";
        return styles.loaded;
      })();

      const {
        Widget
      } = wrapper;
      const widget = React.createElement(Widget, {
        key: "widgets",
        ...props
      });
      loaded && elements.push(widget);
      return React.createElement(React.Fragment, null, elements);
    }
  }
});
ims.set("./wrapper", {
  hash: 4175409966,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Wrapper = void 0;

    class Wrapper {
      #Widget;

      get Widget() {
        return this.#Widget.Widget;
      }

      changed = () => void 0;

      constructor(Widget) {
        this.#Widget = Widget;
      }

    }

    exports.Wrapper = Wrapper;
  }
});
__pkg.exports.descriptor = [{
  "im": "./controller",
  "from": "ReactWidgetController",
  "name": "ReactWidgetController"
}];
var ReactWidgetController;

__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "ReactWidgetController") && (ReactWidgetController = require2 ? require2("./controller").ReactWidgetController : value);
};

var __beyond_pkg = __pkg;
var hmr = new function () {
  this.on = (event, listener) => void 0;

  this.off = (event, listener) => void 0;
}();

__pkg.initialise(ims);

module.exports = __toCommonJS(base_18_20_1_exports);
};

code(module, require);
return module.exports;
});


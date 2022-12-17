define(["@beyond-js/kernel@0.1.1/bundle","@beyond-js/kernel@0.1.1/core","@beyond-js/widgets@0.1.0/render"], (dep_0, dep_1, dep_2) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.1"],["@beyond-js/widgets","0.1.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};

const dependencies = new Map([["@beyond-js/kernel@0.1.1/bundle", dep_0],["@beyond-js/kernel@0.1.1/core", dep_1],["@beyond-js/widgets@0.1.0/render", dep_2]]);
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
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */new WeakMap() : 0); // .beyond/uimport/temp/@beyond-js/widgets/layout.0.1.0.js


var layout_0_1_0_exports = {};

__export(layout_0_1_0_exports, {
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr,
  ssr: () => ssr
}); // node_modules/@beyond-js/widgets/layout/layout.browser.mjs


var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.1/bundle"), 0);

var dependency_1 = __toESM(require("@beyond-js/widgets@0.1.0/render"), 0);

var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;

var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/widgets@0.1.0/layout"
  },
  "type": "ts"
}, import_meta.url).package();

;

__pkg.dependencies.update([["@beyond-js/widgets/render", dependency_1]]);

var ims = /* @__PURE__ */new Map();
ims.set("./children", {
  hash: 1491145116,
  creator: function (require2, exports) {
    "use strict";

    var _render = require2("@beyond-js/widgets/render");

    var _ssr = require2("./ssr");

    let manager;
    customElements.define("beyond-layout-children", class extends HTMLElement {
      #layout;
      #active;

      connectedCallback() {
        this.attachShadow({
          mode: "open"
        });

        const managed = () => {
          const start = () => this.#start().catch(exc => console.error(exc.stack));

          manager.initialised ? start() : manager.ready.then(start);
        };

        if (manager) return managed();
        _ssr.ssr.page ? this.#onssr() : _ssr.ssr.addEventListener("received", this.#onssr);
        const promises = [];
        promises.push(bimport("@beyond-js/widgets/routing"));
        promises.push(bimport("@beyond-js/kernel/core"));
        const {
          specifier
        } = globalThis.__app_package;
        promises.push(bimport(`${specifier}/start`));
        Promise.all(promises).then(([routing]) => {
          ({
            manager
          } = routing);
          managed();
        }).catch(exc => console.log(exc.stack));
      }

      #container;

      get container() {
        if (this.#container !== void 0) return this.#container;

        const container = (() => {
          let parent = this;

          while (true) {
            const root = parent.getRootNode();
            if (root === document) return root;
            parent = root.host;
            if (_render.widgets.instances.has(parent)) return parent;
          }
        })();

        if (!container) {
          console.error(`Widget container of beyond-layout-children not found`);
          return this.#container = null;
        }

        return this.#container = container;
      }

      #onssr = () => {
        _ssr.ssr.removeEventListener("received", this.#onssr);

        const {
          container
        } = this;
        if (container === null) return;

        const {
          element,
          error
        } = (() => {
          const {
            hierarchy
          } = _ssr.ssr;
          if (container === document) return {
            element: hierarchy[0]
          };
          const {
            localName
          } = container;
          const index = hierarchy.indexOf(localName);
          if (index === -1) return {
            error: `Container widget of beyond-layout-children "${localName}" not found in ssr hierarchy`
          };
          if (index === hierarchy.length - 1) return {
            error: `Container widget of beyond-layout-children "${localName}" is the page, not a layout`
          };
          return {
            element: hierarchy[index + 1]
          };
        })();

        if (error) {
          console.error(error, this);
          return;
        }

        this.shadowRoot.appendChild(document.createElement(element));
      };
      #render = () => {
        this.#layout.children.forEach(child => {
          const {
            children
          } = this.shadowRoot;
          let element = [...children].find(element2 => element2.getAttribute("data-child-id") === child.id);

          if (!element) {
            element = document.createElement(child.element);
            element.setAttribute("data-child-id", child.id);
            this.shadowRoot.append(element);
          }

          const active = this.#layout.active === child;
          const controller = element.controller;

          if (active && element !== this.#active) {
            this.#active = element;

            const show = () => {
              element.removeEventListener("controller.initialised", show);
              if (element !== this.#active) return;
              const controller2 = element.controller;

              if (!controller2) {
                throw new Error(`Controller of element widget "${child.element}" is undefined`);
              }

              this.#active === element && controller2.show?.();
            };

            controller ? controller.show?.() : element.addEventListener("controller.initialised", show);
          } else if (!element.hidden && !active) {
            controller?.hide?.();
          }

          element.hidden = !active;
        });
      };

      #hydrate() {
        const {
          children
        } = this.shadowRoot;
        const layout = this.#layout;
        if (!children.length) return;

        if (children.length > 1) {
          console.error("Only one child was expected on beyond-layout-children start", this);
          return;
        }

        children[0].setAttribute("data-child-id", [...layout.children.keys()][0]);
      }

      async #start() {
        _ssr.ssr.removeEventListener("received", this.#onssr);

        if (this.container === null) return;

        const done = layout => {
          this.#layout = layout;
          this.#hydrate();
          this.#layout.on("change", this.#render);
          this.#render();
        };

        if (this.container === document) return done(manager.main);
        const {
          localName
        } = this.container;
        if (localName === manager.main.element) return done(manager.main);

        if (!manager.layouts.has(localName)) {
          console.error(`Layout "${localName}" not found`, [...manager.layouts], manager);
          return;
        }

        done(manager.layouts.get(localName));
      }

    });
  }
});
ims.set("./ssr", {
  hash: 2390596202,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ssr = void 0;
    const ssr2 = new class extends EventTarget {
      #main;

      get main() {
        return this.#main;
      }

      #page;

      get page() {
        return this.#page;
      }

      #layouts;

      get layouts() {
        return this.#layouts;
      }

      #hierarchy = [];

      get hierarchy() {
        return this.#hierarchy;
      }

      data(main, page) {
        this.#main = main;
        this.#page = page.element;
        this.#layouts = page.parents;
        main && this.#hierarchy.push(main);
        page.parents && (this.#hierarchy = this.#hierarchy.concat(page.parents));
        this.#hierarchy.push(page.element);
        const event = new Event("received");
        this.dispatchEvent(event);
      }

    }();
    exports.ssr = ssr2;
  }
});
__pkg.exports.descriptor = [{
  "im": "./ssr",
  "from": "ssr",
  "name": "ssr"
}];
var ssr;

__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "ssr") && (ssr = require2 ? require2("./ssr").ssr : value);
};

var __beyond_pkg = __pkg;
var hmr = new function () {
  this.on = (event, listener) => void 0;

  this.off = (event, listener) => void 0;
}();

__pkg.initialise(ims);

module.exports = __toCommonJS(layout_0_1_0_exports);
};

code(module, require);
return module.exports;
});


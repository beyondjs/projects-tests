define(["@beyond-js/kernel@0.1.1/bundle","@beyond-js/kernel@0.1.1/core","@beyond-js/widgets@0.1.0/render","@beyond-js/kernel@0.1.1/routing"], (dep_0, dep_1, dep_2, dep_3) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.1"],["@beyond-js/widgets","0.1.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};

const dependencies = new Map([["@beyond-js/kernel@0.1.1/bundle", dep_0],["@beyond-js/kernel@0.1.1/core", dep_1],["@beyond-js/widgets@0.1.0/render", dep_2],["@beyond-js/kernel@0.1.1/routing", dep_3]]);
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
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */new WeakMap() : 0); // .beyond/uimport/temp/@beyond-js/widgets/routing.0.1.0.js


var routing_0_1_0_exports = {};

__export(routing_0_1_0_exports, {
  Layout: () => Layout,
  PageInstance: () => PageInstance,
  PageURI: () => PageURI,
  Route: () => Route,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr,
  manager: () => manager
}); // node_modules/@beyond-js/widgets/routing/routing.browser.mjs


var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.1/bundle"), 0);

var dependency_1 = __toESM(require("@beyond-js/kernel@0.1.1/core"), 0);

var dependency_2 = __toESM(require("@beyond-js/widgets@0.1.0/render"), 0);

var dependency_3 = __toESM(require("@beyond-js/kernel@0.1.1/routing"), 0);

var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;

var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/widgets@0.1.0/routing"
  },
  "type": "ts"
}, import_meta.url).package();

;

__pkg.dependencies.update([["@beyond-js/kernel/core", dependency_1], ["@beyond-js/widgets/render", dependency_2], ["@beyond-js/kernel/routing", dependency_3]]);

var ims = /* @__PURE__ */new Map();
ims.set("./layouts/index", {
  hash: 2940970575,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;

    class _default extends Map {
      register(layout) {
        this.set(layout.id, layout);
      }

    }

    exports.default = _default;
  }
});
ims.set("./layouts/layout", {
  hash: 2602064878,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Layout = void 0;

    var _core = require2("@beyond-js/kernel/core");

    class Layout2 extends _core.Events {
      get is() {
        return "layout";
      }

      #layouts;
      #element;

      get element() {
        return this.#element;
      }

      get id() {
        return this.#element;
      }

      #active;

      get active() {
        return this.#active;
      }

      #parent;
      #children = /* @__PURE__ */new Map();

      get children() {
        return this.#children;
      }

      constructor(layouts, element, parent) {
        super();
        this.#layouts = layouts;
        this.#element = element ? element : "main";
        this.#parent = parent;
      }

      select(page, descending) {
        if (descending.length && descending[0].name === this.#element) {
          console.log(`Invalid layout configuration. Layout element "${this.#element}" is already created`);
          return;
        }

        const child = (() => {
          if (!descending.length) return page;
          const {
            name: element
          } = descending[0];
          const found = [...this.#children.values()].find(child2 => child2.element === element);
          if (found) return found;
          const layout = new Layout2(this.#layouts, element, this);
          this.#layouts.register(layout);
          return layout;
        })();

        this.#children.set(child.id, child);
        const changed = this.#active !== child;
        this.#active = child;
        descending.shift();
        child.is === "layout" && child.select(page, descending);
        changed && this.trigger("change");
      }

    }

    exports.Layout = Layout2;
  }
});
ims.set("./manager", {
  hash: 1504779151,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.manager = void 0;

    var _core = require2("@beyond-js/kernel/core");

    var _routing = require2("@beyond-js/kernel/routing");

    var _layout = require2("./layouts/layout");

    var _pages = require2("./pages");

    var _layouts = require2("./layouts");

    var _route = require2("./route");

    const manager2 = typeof process === "object" ? void 0 : new class Manager {
      #instances = {
        layouts: new _layouts.default(),
        pages: new _pages.default()
      };
      #initialised = false;

      get initialised() {
        return this.#initialised;
      }

      #resolve;
      #ready = new Promise(resolve => this.#resolve = resolve);

      get ready() {
        return this.#ready;
      }

      constructor() {
        const set = () => this.set(_routing.routing.uri).catch(exc => console.log(exc.stack));

        const {
          specifier
        } = globalThis.__app_package;
        Promise.all([bimport(`${specifier}/config`), bimport(`${specifier}/start`)]).then(([{
          default: config
        }]) => {
          this.#main = new _layout.Layout(this.#instances.layouts, config.layout);

          _routing.routing.on("change", set);

          _routing.routing.initialised ? set() : _routing.routing.ready.then(set);
        });
      }

      get layouts() {
        return this.#instances.layouts;
      }

      get pages() {
        return this.#instances.pages;
      }

      #main;

      get main() {
        return this.#main;
      }

      #ct = new _core.CancellationToken();

      async set(uri) {
        const cid = this.#ct.reset();
        const route = new _route.Route(uri.pathname);
        await route.process();
        if (!this.#ct.check(cid)) return;

        const done = () => {
          !this.#initialised && this.#resolve();
          this.#initialised = true;
        };

        const {
          page: element
        } = route;

        if (!element) {
          console.error(`Pathname "${uri.pathname}" does not have a page widget associated to it`);
          return done();
        }

        const page = this.#instances.pages.register(uri, route);
        const {
          error,
          value: descending
        } = page.parents;

        if (error) {
          console.error(`Page on "${uri.uri}" cannot be shown: ${error}`);
          return done();
        }

        this.#main.select(page, descending);
        return done();
      }

    }();
    exports.manager = manager2;
  }
});
ims.set("./pages/index", {
  hash: 635174642,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;

    var _instance = require2("./instance");

    class _default extends Map {
      instance(id) {
        return [...this.values()].find(instance => instance.id === id);
      }

      register(uri, route) {
        const {
          pathname
        } = uri;
        let instance = this.has(pathname) ? this.get(pathname) : void 0;
        instance = instance ? instance : new _instance.PageInstance(uri, route);
        this.set(pathname, instance);
        return instance;
      }

    }

    exports.default = _default;
  }
});
ims.set("./pages/instance", {
  hash: 2192565275,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.PageInstance = void 0;

    var _render = require2("@beyond-js/widgets/render");

    let id = 0;

    class PageInstance2 {
      #uri;

      get uri() {
        return this.#uri;
      }

      #route;

      get route() {
        return this.#route;
      }

      get element() {
        return this.#route.page;
      }

      get is() {
        return "page";
      }

      #id;

      get id() {
        return `${this.element}:${this.#id}`;
      }

      get parents() {
        const value = [];

        let {
          layout
        } = _render.widgets.get(this.element);

        while (layout) {
          const found = [..._render.widgets.values()].find(({
            name
          }) => name === layout);

          if (!found) {
            const error = `Layout "${layout}" not found`;
            return {
              error
            };
          }

          value.unshift(found);
          layout = found.layout;
        }

        return {
          value
        };
      }

      constructor(uri, route) {
        this.#uri = uri;
        this.#route = route;
        this.#id = ++id;
      }

    }

    exports.PageInstance = PageInstance2;
  }
});
ims.set("./route", {
  hash: 408835594,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Route = void 0;

    var _render = require2("@beyond-js/widgets/render");

    var _routing = require2("@beyond-js/kernel/routing");

    class Route2 {
      #pathname;

      get pathname() {
        return this.#pathname;
      }

      #page;

      get page() {
        return this.#page;
      }

      #vars;

      get vars() {
        return this.#vars;
      }

      constructor(pathname) {
        this.#pathname = pathname;
      }

      async process() {
        const pathname = this.#pathname.split("/");
        const registered = /* @__PURE__ */new Map();

        _render.widgets.forEach(({
          is,
          name,
          route
        }) => is === "page" && registered.set(name, route.split("/")));

        const target = [...registered].filter(([, route]) => route.length === pathname.length);
        this.#vars = /* @__PURE__ */new Map();
        const found = target.find(([, route]) => {
          this.#vars.clear();

          for (let i = 0; i < pathname.length; i++) {
            const dir = route[i];

            if (dir.startsWith("${") && dir.endsWith("}")) {
              const vname = dir.slice(2, dir.length - 1);
              this.#vars.set(vname, pathname[i]);
              continue;
            }

            if (dir !== pathname[i]) return false;
          }

          return true;
        });
        this.#page = found ? found[0] : await _routing.routing.missing?.(this.#pathname);
      }

    }

    exports.Route = Route2;
  }
});
ims.set("./uri", {
  hash: 615392904,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.PageURI = void 0;

    var _manager = require2("./manager");

    class PageURI2 {
      #uri;
      #route;

      get uri() {
        return this.#uri;
      }

      get pathname() {
        return this.#uri.pathname;
      }

      get search() {
        return this.#uri.search;
      }

      get qs() {
        return this.#uri.qs;
      }

      get hash() {
        return this.#uri.hash;
      }

      get vars() {
        return this.#route.vars;
      }

      constructor({
        widget,
        uri,
        route
      }) {
        if (widget) {
          const child = widget.getAttribute("data-child-id");

          const page = _manager.manager.pages.instance(child);

          if (!page) {
            throw new Error(`Element "${widget.localName}" is not a page, or page not found`);
          }

          ({
            uri,
            route
          } = page);
        }

        this.#uri = uri;
        this.#route = route;
      }

    }

    exports.PageURI = PageURI2;
  }
});
__pkg.exports.descriptor = [{
  "im": "./layouts/layout",
  "from": "Layout",
  "name": "Layout"
}, {
  "im": "./manager",
  "from": "manager",
  "name": "manager"
}, {
  "im": "./pages/instance",
  "from": "PageInstance",
  "name": "PageInstance"
}, {
  "im": "./route",
  "from": "Route",
  "name": "Route"
}, {
  "im": "./uri",
  "from": "PageURI",
  "name": "PageURI"
}];
var Layout, manager, PageInstance, Route, PageURI;

__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "Layout") && (Layout = require2 ? require2("./layouts/layout").Layout : value);
  (require2 || prop === "manager") && (manager = require2 ? require2("./manager").manager : value);
  (require2 || prop === "PageInstance") && (PageInstance = require2 ? require2("./pages/instance").PageInstance : value);
  (require2 || prop === "Route") && (Route = require2 ? require2("./route").Route : value);
  (require2 || prop === "PageURI") && (PageURI = require2 ? require2("./uri").PageURI : value);
};

var __beyond_pkg = __pkg;
var hmr = new function () {
  this.on = (event, listener) => void 0;

  this.off = (event, listener) => void 0;
}();

__pkg.initialise(ims);

module.exports = __toCommonJS(routing_0_1_0_exports);
};

code(module, require);
return module.exports;
});


define(["@beyond-js/kernel@0.1.1/bundle","@beyond-js/kernel@0.1.1/core"], (dep_0, dep_1) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.1"],["@beyond-js/widgets","0.1.0"]]);
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
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */new WeakMap() : 0); // .beyond/uimport/temp/@beyond-js/widgets/render.0.1.0.js


var render_0_1_0_exports = {};

__export(render_0_1_0_exports, {
  BeyondWidget: () => BeyondWidget,
  GlobalCSS: () => GlobalCSS,
  IBeyondWidgetController: () => IBeyondWidgetController,
  IWidgetSpecs: () => IWidgetSpecs,
  NodeWidget: () => NodeWidget,
  StylesManager: () => StylesManager,
  WidgetCSR: () => WidgetCSR,
  __beyond_pkg: () => __beyond_pkg,
  attributes: () => attributes,
  hmr: () => hmr,
  prerender: () => prerender,
  widgets: () => widgets
}); // node_modules/@beyond-js/widgets/render/render.browser.mjs


var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.1/bundle"), 0);

var dependency_1 = __toESM(require("@beyond-js/kernel@0.1.1/core"), 0);

var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;

var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/widgets@0.1.0/render"
  },
  "type": "ts"
}, import_meta.url).package();

;

__pkg.dependencies.update([["@beyond-js/kernel/core", dependency_1]]);

var ims = /* @__PURE__ */new Map();
ims.set("./anchor", {
  hash: 1014568902,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    typeof process !== "object" && customElements.define("beyond-link", class extends HTMLElement {
      #routing;

      constructor() {
        super();
        bimport("@beyond-js/kernel/routing").then(({
          routing
        }) => this.#routing = routing);
      }

      connectedCallback() {
        this.addEventListener("click", () => {
          if (!this.hasAttribute("data-url")) return;
          const url = this.getAttribute("data-url");
          this.#routing?.pushState(url);
        });
      }

    });
  }
});
ims.set("./attributes", {
  hash: 1262494723,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.attributes = exports.Attributes = void 0;

    var _core = require2("@beyond-js/kernel/core");

    class Attributes extends _core.Events {
      #values = /* @__PURE__ */new Map();

      get values() {
        return this.#values;
      }

      add(name, value) {
        this.#values.set(name, value);
        this.trigger("add", name, value);
        this.trigger("change");
      }

      remove(name) {
        this.#values.delete(name);
        this.trigger("remove", name);
        this.trigger("change");
      }

    }

    exports.Attributes = Attributes;
    const attributes2 = new Attributes();
    exports.attributes = attributes2;
  }
});
ims.set("./instances/index", {
  hash: 2022060609,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.instances = void 0;

    var _node = require2("./node");

    const instances = new class extends Set {
      register(widget) {
        this.add(widget);

        const parent = (() => {
          let parent2 = widget;

          while (true) {
            const root = parent2.getRootNode();
            if (root === document) return;
            parent2 = root.host;
            if (this.has(parent2)) return parent2;
          }
        })();

        const node = new _node.NodeWidget(widget, parent);
        parent?.wnode.children.add(widget);
        this.add(widget);
        return node;
      }

    }();
    exports.instances = instances;
  }
});
ims.set("./instances/node", {
  hash: 3167083658,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.NodeWidget = void 0;

    class NodeWidget2 {
      #widget;

      get widget() {
        return this.#widget;
      }

      #parent;

      get parent() {
        return this.#parent;
      }

      #children = /* @__PURE__ */new Set();

      get children() {
        return this.#children;
      }

      constructor(widget, parent) {
        this.#widget = widget;
        this.#parent = parent;
      }

    }

    exports.NodeWidget = NodeWidget2;
  }
});
ims.set("./prerendered/index", {
  hash: 483738484,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.prerender = void 0;
    const prerender2 = new class {
      #ssr = [];

      get ssr() {
        return this.#ssr;
      }

      find(element, attrs) {
        return this.#ssr.find(item => {
          if (item.element !== element) return false;
          const iattrs = new Map(item.attributes);
          return [...attrs].reduce((prev, [name, value]) => prev || iattrs.get(name) === value, true);
        });
      }

    }();
    exports.prerender = prerender2;
  }
});
ims.set("./widget/attributes", {
  hash: 1029410984,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.WidgetGlobalAttributes = void 0;

    var _attributes = require2("../attributes");

    class WidgetGlobalAttributes {
      #holder;

      get holder() {
        return this.#holder;
      }

      #set = (name, value) => {
        this.#holder.setAttribute(name, value);
      };
      #remove = name => {
        this.#holder.removeAttribute(name);
      };

      initialise(holder) {
        this.#holder = holder;

        _attributes.attributes.values.forEach((value, name) => this.#set(name, value));

        _attributes.attributes.on("add", this.#set);

        _attributes.attributes.on("remove", this.#remove);
      }

      destroy() {
        _attributes.attributes.off("add", this.#set);

        _attributes.attributes.off("remove", this.#remove);
      }

    }

    exports.WidgetGlobalAttributes = WidgetGlobalAttributes;
  }
});
ims.set("./widget/checksum", {
  hash: 1702419318,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = _default;

    function _default(s) {
      let hash = 0,
          i,
          c;
      const length = s.length;

      if (length === 0) {
        return hash;
      }

      for (i = 0; i < length; i++) {
        c = s.charCodeAt(i);
        hash = (hash << 5) - hash + c;
        hash = hash & hash;
      }

      return hash.toString().replace("-", "n");
    }

    ;
  }
});
ims.set("./widget/csr", {
  hash: 1023760945,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.WidgetCSR = void 0;

    var _core = require2("@beyond-js/kernel/core");

    class WidgetCSR2 extends _core.Events {
      #widget;
      #bundle;

      get bundle() {
        return this.#bundle;
      }

      #controller;

      get controller() {
        return this.#controller;
      }

      #error;

      get error() {
        return this.#error;
      }

      #loading = false;

      get loading() {
        return this.#loading;
      }

      #loaded = false;

      get loaded() {
        return this.#loaded;
      }

      #holders = /* @__PURE__ */new Set(["initialised", "loaded"]);

      initialise() {
        if (!this.#widget.specs.render.csr) return;
        if (!this.#holders.has("initialised")) throw new Error("Widget CSR already initialised");
        this.#holders.delete("initialised");
        this.#render();
      }

      constructor(widget) {
        super();
        const {
          specifier,
          specs
        } = this.#widget = widget;
        if (!specs.render.csr) return;
        bimport(specifier).then(bundle => {
          this.#bundle = bundle;
          this.#loading = false;
          this.#loaded = true;
          this.#holders.delete("loaded");
          this.#render();
        }).catch(exc => {
          console.error(`Error loading widget "${specifier}"`, exc.stack);
          this.#error = exc.message;
          this.#loading = false;
        });
      }

      #render = () => {
        if (this.#holders.size) return;
        const {
          Controller
        } = this.#bundle;

        if (!Controller || typeof Controller !== "function") {
          const message = `Widget "${this.#widget.localName}" does not export its Controller`;
          console.error(message);
          this.#error = message;
          return;
        }

        this.#controller = new Controller(this.#widget);
        this.#controller.initialise().then(() => this.trigger("controller.initialised")).catch(exc => console.log(exc instanceof Error ? exc.stack : exc));
      };

      disconnect() {
        this.#controller?.disconnect?.();
      }

      attributeChanged(name, old, value) {
        this.#controller?.attributeChanged(name, old, value);
      }

    }

    exports.WidgetCSR = WidgetCSR2;
  }
});
ims.set("./widget/index", {
  hash: 2251972216,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.BeyondWidget = void 0;

    var _instances = require2("../instances");

    var _sr = require2("./sr");

    var _csr = require2("./csr");

    var _ssr = require2("./ssr");

    var _attributes = require2("./attributes");

    var _styles = require2("./styles");

    const Element = typeof HTMLElement === "undefined" ? null : HTMLElement;

    class BeyondWidget2 extends Element {
      #specs;

      get specs() {
        return this.#specs;
      }

      get name() {
        return this.#specs.name;
      }

      get vspecifier() {
        return this.#specs.vspecifier;
      }

      #specifier;

      get specifier() {
        return this.#specifier;
      }

      get host() {
        return `${location.origin}/`;
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

      #holder;

      get holder() {
        return this.#holder;
      }

      #sr;

      get sr() {
        return this.#sr;
      }

      #csr;

      get csr() {
        return this.#csr;
      }

      get controller() {
        return this.#csr.controller;
      }

      #ssr;

      get ssr() {
        return this.#ssr;
      }

      #attributes;
      #styles;

      get styles() {
        return this.#styles;
      }

      #wnode;

      get wnode() {
        return this.#wnode;
      }

      get wparent() {
        return this.#wnode.parent;
      }

      get wchildren() {
        return [...this.#wnode.children];
      }

      #oncontroller = () => {
        const event = new CustomEvent("controller.initialised", {
          bubbles: false,
          composed: false
        });
        this.dispatchEvent(event);
      };

      constructor(specs) {
        super();
        this.#specs = specs;
        this.attachShadow({
          mode: "open"
        });

        this.#specifier = (() => {
          const split = specs.vspecifier.split("/");
          const scope = split[0].startsWith("@") ? split.shift() : void 0;
          const [name] = split.shift().split("@");
          const subpath = split.join("/");
          return (scope ? `${scope}/${name}` : name) + (subpath ? `/${subpath}` : "");
        })();

        this.#attributes = new _attributes.WidgetGlobalAttributes();
        this.#sr = new _sr.WidgetSR(this);
        this.#ssr = new _ssr.WidgetSSR(this);
        this.#csr = new _csr.WidgetCSR(this);
        this.#csr?.on("controller.initialised", this.#oncontroller);
        this.#styles = new _styles.StylesManager(this);
      }

      connectedCallback() {
        this.#wnode = _instances.instances.register(this);
        this.#holder = document.createElement("span");
        this.#holder.style.display = "none";
        this.shadowRoot.append(this.#holder);
        this.#attributes.initialise(this.#holder);
        this.#ssr.initialise().catch(exc => console.error(exc.stack));
        this.#sr.initialise().catch(exc => console.error(exc.stack));
        this.#csr.initialise();
      }

      disconnectedCallback() {
        this.#csr.disconnect();
      }

      attributeChangedCallback(name, old, value) {
        this.#csr.attributeChanged(name, old, value);
      }

    }

    exports.BeyondWidget = BeyondWidget2;
  }
});
ims.set("./widget/renderer", {
  hash: 571206461,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Renderer = void 0;

    class Renderer {
      #widget;

      constructor(widget) {
        this.#widget = widget;
      }

      #ct = 0;

      async render(sr) {
        const ct = ++this.#ct;
        const {
          name,
          holder,
          styles
        } = this.#widget;

        if (sr.errors?.length) {
          console.error(`Error fetching static rendered widget "${name}":`, sr.errors);
          return;
        }

        if (holder.children.length) return;
        if (!sr.html) return "";
        const host = await this.#widget.host;

        holder.innerHTML = (() => sr.html.replace(/##_!(.*?)!_##/g, () => host))();

        const links = [];
        const resources = holder.querySelectorAll("link");
        resources.forEach(node => links.push(node.href));
        links.length && (await styles.initialise(links));
        resources.forEach(node => node.localName === "link" && node.addEventListener("load", styles.onloaded));
        await styles?.ready;
        if (this.#ct !== ct) return;
        holder.style.display = "";
      }

    }

    exports.Renderer = Renderer;
  }
});
ims.set("./widget/sr", {
  hash: 3408004663,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.WidgetSR = void 0;

    var _checksum = require2("./checksum");

    var _renderer = require2("./renderer");

    class WidgetSR {
      #widget;
      #renderer;

      constructor(widget) {
        this.#widget = widget;
        this.#renderer = new _renderer.Renderer(widget);
      }

      #initialised = false;

      async initialise() {
        if (this.#initialised) throw new Error("Widget SSR already initialised");
        this.#initialised = true;
        const {
          specs
        } = this.#widget;
        if (!specs.render.sr) return;

        const language = (() => {
          const {
            multilanguage
          } = specs.render;
          if (!multilanguage) return "";
          let language2 = localStorage.__beyond_language;
          language2 = language2 ? language2 : navigator.language;
          language2 = language2.slice(0, 2);
          return `${language2}:`;
        })();

        let resource;

        if (specs.is === "page") {
          let key = `${language}${specs.name}//${location.pathname}${location.search}`;
          resource = (0, _checksum.default)(key);
        } else if (specs.is === "layout") {
          resource = (0, _checksum.default)(`${language}${specs.name}`);
        } else {
          const compute = /* @__PURE__ */new Map();
          specs.attrs?.forEach(attr => {
            const value = this.#widget.getAttribute(attr);
            value && compute.set(attr, value);
          });
          let key = language;
          [...compute].sort((a, b) => a[0] < b[0] ? 1 : 0).forEach(([k, v]) => key += `${k}//${v}///`);
          resource = (0, _checksum.default)(key);
        }

        const host = await this.#widget.host;
        const url = `${host}__sr_widgets__/${specs.name}.${resource}.js`;

        try {
          const response = await fetch(url);

          if (response.status !== 200) {
            console.error(`Error fetching static rendered widget "${specs.name}". Status code: ${response.status}`);
            return;
          }

          const sr = await response.json();
          await this.#renderer.render(sr);
        } catch (exc) {
          console.error("Widget static content fetch error:", exc.message);
        }
      }

    }

    exports.WidgetSR = WidgetSR;
  }
});
ims.set("./widget/ssr", {
  hash: 102088058,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.WidgetSSR = void 0;

    var _prerendered = require2("../prerendered");

    var _renderer = require2("./renderer");

    class WidgetSSR {
      #widget;
      #renderer;
      #prerender;

      get prerender() {
        return this.#prerender;
      }

      constructor(widget) {
        this.#widget = widget;
        this.#renderer = new _renderer.Renderer(widget);
      }

      #initialised = false;

      async initialise() {
        if (!this.#widget.specs.render.ssr) return;
        if (this.#initialised) throw new Error("Widget SSR already initialised");
        this.#initialised = true;
        const widget = this.#widget;
        const {
          specs
        } = widget;
        const attrs = new Map(specs.attrs ? specs.attrs.map(attr => [attr, widget.getAttribute(attr)]) : void 0);

        const found = _prerendered.prerender.find(specs.name, attrs);

        if (!found) {
          return await this.#load();
        }

        this.#prerender = found;
        await this.#renderer.render(found);
      }

      async #load() {
        const {
          specifier,
          name
        } = this.#widget;
        const host = await (async () => {
          const split = specifier.split("/");
          const pkg = split[0].startsWith("@") ? `${split.shift()}/${split.shift()}` : split.shift();
          const {
            ssr: config
          } = (await bimport(`${pkg}/config`)).default;

          if (!config || !config.host) {
            console.error(`Project "${pkg}" does not support SSR (host not configured). Required by "${name}" widget.`);
            return;
          }

          return config.host;
        })();
        if (!host) return;

        const language = (() => {
          const {
            specs
          } = this.#widget;
          const {
            multilanguage
          } = specs.render;
          if (!multilanguage) return "";
          let language2 = localStorage.__beyond_language;
          language2 = language2 ? language2 : navigator.language;
          language2 = language2.slice(0, 2);
          return `&language=${language2}`;
        })();

        let attrs = (() => {
          const {
            specs
          } = this.#widget;
          if (!specs.attrs?.length) return "";
          let attrs2 = "&attrs=" + specs.attrs.join(",");
          specs.attrs.forEach(attr => {
            const value = this.#widget.getAttribute(attr);
            if (!value) return;
            attrs2 += `&attr.${attr}=${value}`;
          });
        })();

        const url = `${host}/widget?name=${name}${language}${attrs}`;

        try {
          const response = await fetch(url);

          if (response.status !== 200) {
            console.error(`Error fetching SSR of widget "${name}". Status code: ${response.status}`);
            return;
          }

          const sr = await response.json();
          await this.#renderer.render(sr);
        } catch (exc) {
          console.error(exc.stack);
        }
      }

    }

    exports.WidgetSSR = WidgetSSR;
  }
});
ims.set("./widget/styles/global", {
  hash: 1566285625,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.GlobalCSS = void 0;

    var _core = require2("@beyond-js/kernel/core");

    class GlobalCSS2 extends _core.Events {
      #widget;
      #version = 0;

      constructor(widget) {
        super();
        this.#widget = widget;
        const {
          host
        } = this.#widget;
        const version = this.#version !== 0 ? `?version=${this.#version}` : "";
        this.#link = `${host}global.css${version}`;
      }

      #link;

      get link() {
        return this.#link;
      }

      update() {
        this.#version++;
        this.trigger("change");
      }

    }

    exports.GlobalCSS = GlobalCSS2;
  }
});
ims.set("./widget/styles/index", {
  hash: 2180237271,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.StylesManager = void 0;

    var _core = require2("@beyond-js/kernel/core");

    var _link = require2("./link");

    var _global = require2("./global");

    class StylesManager2 {
      #events = new _core.Events();
      on = (event, listener) => this.#events.on(event, listener);
      off = (event, listener) => this.#events.off(event, listener);
      #loaded = /* @__PURE__ */new Map();
      #globalcss;
      #version = 0;

      get version() {
        return this.#version;
      }

      #changed() {
        this.#version++;
        this.#resolved && this.#events.trigger("change");
      }

      get resources() {
        return /* @__PURE__ */new Set([...this.#loaded.keys()]);
      }

      get loaded() {
        this.#check();
        return this.#resolved;
      }

      #promise;
      #resolved = false;
      #resolve;

      get ready() {
        this.#check();
        return this.#promise;
      }

      onloaded = event => {
        const href = typeof event === "string" ? event : event.currentTarget.href;

        if (!this.#loaded.has(href)) {
          console.warn(`Stylesheet href="${href}" not registered`);
          return;
        }

        this.#loaded.set(href, true);
        this.#check();
        const changed = this.#purge();
        changed && this.#changed();
        return true;
      };

      #check() {
        if (this.#resolved) return true;
        const loaded = [...this.#loaded.values()].reduce((prev, loaded2) => prev && loaded2, true);
        loaded && this.#resolve();
        return this.#resolved = loaded;
      }

      #purge() {
        const versions = {
          last: /* @__PURE__ */new Map(),
          values: /* @__PURE__ */new Map(),
          lastLoaded: /* @__PURE__ */new Map()
        };
        [...this.#loaded.keys()].forEach(href => {
          const link = new _link.default(href);
          const prevLast = versions.last.get(link.resource);
          const last = prevLast && prevLast > link.version ? prevLast : link.version;
          versions.last.set(link.resource, last);

          if (this.#loaded.get(link.href)) {
            const prevLastLoaded = versions.lastLoaded.get(link.resource);
            const lastLoaded = prevLastLoaded && prevLastLoaded > link.version ? prevLastLoaded : link.version;
            versions.lastLoaded.set(link.resource, lastLoaded);
          }

          const values = versions.values.has(link.resource) ? versions.values.get(link.resource) : /* @__PURE__ */new Set();
          values.add(link.version);
          versions.values.set(link.resource, values);
        });
        const purge = [];
        [...this.#loaded.keys()].forEach(href => {
          const link = new _link.default(href);
          const lastLoaded = versions.lastLoaded.get(link.resource);
          link.version < lastLoaded && purge.push(link);
        });
        purge.forEach(link => this.#loaded.delete(link.href));
        return !!purge.length;
      }

      #last;
      #refresh = () => {
        if (!this.#last) return;
        const changed = this.#update(this.#last);
        changed && this.#changed();
      };

      #update(_links) {
        this.#last = _links;

        _links.unshift(this.#globalcss.link);

        const links = _links.map(link => new _link.default(link));

        let changed = false;
        links.forEach(link => {
          if (this.#loaded.has(link.href)) return;
          this.#loaded.set(link.href, false);
          changed = true;
        });
        return changed;
      }

      update(links) {
        const changed = this.#update(links);
        changed && this.#changed();
      }

      constructor(widget) {
        this.#globalcss = new _global.GlobalCSS(widget);
        this.#promise = new Promise(resolve => this.#resolve = resolve);
      }

      #initialised = false;

      get initialised() {
        return this.#initialised;
      }

      async initialise(links) {
        if (this.#initialised) throw new Error(`Widget styles already initialised`);
        this.#initialised = true;
        this.#update(links);
        this.#globalcss.on("change", this.#refresh);
      }

      destroy() {
        this.#globalcss.off("change", this.#refresh);
      }

    }

    exports.StylesManager = StylesManager2;
  }
});
ims.set("./widget/styles/link", {
  hash: 3219871066,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;

    class _default {
      #href;

      get href() {
        return this.#href;
      }

      #resource;

      get resource() {
        return this.#resource;
      }

      #version;

      get version() {
        return this.#version;
      }

      constructor(href) {
        this.#href = href;
        const iv = href.split("?version=");
        this.#resource = iv[0];
        this.#version = iv[1] ? parseInt(iv[1]) : 0;
      }

    }

    exports.default = _default;
  }
});
ims.set("./widgets", {
  hash: 3986250608,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.widgets = void 0;

    var _widget = require2("./widget");

    var _instances = require2("./instances");

    var _attributes = require2("./attributes");

    require2("./anchor");

    class BeyondWidgets extends Map {
      #ssr = true;

      get ssr() {
        return this.#ssr;
      }

      constructor() {
        super();
      }

      setup(config) {
        this.#ssr = typeof config?.ssr === "boolean" ? config.ssr : true;
      }

      get instances() {
        return _instances.instances;
      }

      get attributes() {
        return _attributes.attributes;
      }

      register(specs) {
        specs.forEach(specs2 => {
          if (this.has(specs2.name)) return;
          specs2.render = specs2.render ? specs2.render : {
            csr: true,
            ssr: false,
            sr: false
          };
          const {
            name,
            render
          } = specs2;
          render.csr = typeof render.csr === "boolean" ? render.csr : true;
          this.set(name, specs2);
          if (typeof process === "object") return;
          customElements.define(name, class extends _widget.BeyondWidget {
            static get observedAttributes() {
              return specs2.attrs ? specs2.attrs : [];
            }

            constructor() {
              super(specs2);
            }

          });
        });
      }

    }

    const widgets2 = new BeyondWidgets();
    exports.widgets = widgets2;
  }
});
__pkg.exports.descriptor = [{
  "im": "./attributes",
  "from": "attributes",
  "name": "attributes"
}, {
  "im": "./instances/node",
  "from": "NodeWidget",
  "name": "NodeWidget"
}, {
  "im": "./prerendered/index",
  "from": "prerender",
  "name": "prerender"
}, {
  "im": "./widget/csr",
  "from": "IBeyondWidgetController",
  "name": "IBeyondWidgetController"
}, {
  "im": "./widget/csr",
  "from": "WidgetCSR",
  "name": "WidgetCSR"
}, {
  "im": "./widget/index",
  "from": "IWidgetSpecs",
  "name": "IWidgetSpecs"
}, {
  "im": "./widget/index",
  "from": "BeyondWidget",
  "name": "BeyondWidget"
}, {
  "im": "./widget/styles/global",
  "from": "GlobalCSS",
  "name": "GlobalCSS"
}, {
  "im": "./widget/styles/index",
  "from": "StylesManager",
  "name": "StylesManager"
}, {
  "im": "./widgets",
  "from": "widgets",
  "name": "widgets"
}];
var attributes, NodeWidget, prerender, IBeyondWidgetController, WidgetCSR, IWidgetSpecs, BeyondWidget, GlobalCSS, StylesManager, widgets;

__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "attributes") && (attributes = require2 ? require2("./attributes").attributes : value);
  (require2 || prop === "NodeWidget") && (NodeWidget = require2 ? require2("./instances/node").NodeWidget : value);
  (require2 || prop === "prerender") && (prerender = require2 ? require2("./prerendered/index").prerender : value);
  (require2 || prop === "IBeyondWidgetController") && (IBeyondWidgetController = require2 ? require2("./widget/csr").IBeyondWidgetController : value);
  (require2 || prop === "WidgetCSR") && (WidgetCSR = require2 ? require2("./widget/csr").WidgetCSR : value);
  (require2 || prop === "IWidgetSpecs") && (IWidgetSpecs = require2 ? require2("./widget/index").IWidgetSpecs : value);
  (require2 || prop === "BeyondWidget") && (BeyondWidget = require2 ? require2("./widget/index").BeyondWidget : value);
  (require2 || prop === "GlobalCSS") && (GlobalCSS = require2 ? require2("./widget/styles/global").GlobalCSS : value);
  (require2 || prop === "StylesManager") && (StylesManager = require2 ? require2("./widget/styles/index").StylesManager : value);
  (require2 || prop === "widgets") && (widgets = require2 ? require2("./widgets").widgets : value);
};

var __beyond_pkg = __pkg;
var hmr = new function () {
  this.on = (event, listener) => void 0;

  this.off = (event, listener) => void 0;
}();

__pkg.initialise(ims);

module.exports = __toCommonJS(render_0_1_0_exports);
};

code(module, require);
return module.exports;
});


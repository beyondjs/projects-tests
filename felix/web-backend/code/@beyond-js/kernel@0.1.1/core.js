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
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */new WeakMap() : 0); // .beyond/uimport/temp/@beyond-js/kernel/core.0.1.1.js


var core_0_1_1_exports = {};

__export(core_0_1_1_exports, {
  CancellationToken: () => CancellationToken,
  Events: () => Events,
  Languages: () => Languages,
  ListenerFunction: () => ListenerFunction,
  PendingPromise: () => PendingPromise,
  SingleCall: () => SingleCall,
  __beyond_pkg: () => __beyond_pkg,
  beyond: () => beyond,
  hmr: () => hmr,
  languages: () => languages
}); // node_modules/@beyond-js/kernel/core/core.browser.mjs


var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.1/bundle"), 0);

var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;

var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/kernel@0.1.1/core"
  },
  "type": "ts"
}, import_meta.url).package();

;

__pkg.dependencies.update([]);

var ims = /* @__PURE__ */new Map();
ims.set("./beyond", {
  hash: 959081709,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.beyond = exports.Beyond = void 0;

    var _languages = require2("./languages");

    class Beyond {
      get languages() {
        return _languages.languages;
      }

      async import(resource, version) {
        return await bimport(resource, version);
      }

    }

    exports.Beyond = Beyond;
    const beyond2 = new Beyond();
    exports.beyond = beyond2;
    globalThis.beyond = beyond2;
  }
});
ims.set("./languages/index", {
  hash: 2966511149,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.languages = exports.Languages = void 0;

    var _events = require2("../utils/events/events");

    class Languages2 extends _events.Events {
      #project;
      #specs;
      #storage = typeof localStorage === "object" ? localStorage : void 0;
      #supported;

      get supported() {
        return this.#supported;
      }

      get default() {
        return this.#specs?.default;
      }

      #current;

      get current() {
        return this.#current;
      }

      #resolve;
      #ready = new Promise(resolve => this.#resolve = resolve);

      get ready() {
        return this.#ready;
      }

      #fetched = false;

      get fetched() {
        return this.#fetched;
      }

      constructor(project) {
        super();
        this.#project = project;
        bimport(`${project}/config`).then(({
          default: config
        }) => {
          this.#setup(config.languages);
          this.#fetched = true;
          this.#resolve();
        });
      }

      #configure(value) {
        if (this.#current === value) return true;

        if (typeof value !== "string" || value.length !== 2) {
          console.warn(`Configured language "${value}" is invalid`);
          return false;
        }

        if (value && !this.#supported.has(value)) {
          console.log(`Language "${value}" is not supported`);
          return false;
        }

        const previous = this.#current;
        this.#current = value;
        previous && this.trigger("change");
        return true;
      }

      set current(value) {
        if (!this.#configure(value)) return;
        this.#storage?.setItem("__beyond_language", value);
      }

      #setup(specs) {
        if (specs.default && typeof specs.default !== "string" || specs.default.length !== 2) {
          console.log(`Default language "${specs.default}" is invalid`);
          specs.default = void 0;
        }

        const def = specs.default ? specs.default : "en";
        specs.supported = specs.supported instanceof Array ? specs.supported : [def];
        !specs.supported.length && specs.supported.push(def);
        this.#supported = new Set(specs.supported);
        specs.default = specs.default ? specs.default : [...this.#supported][0];

        if (!this.#supported.has(specs.default)) {
          console.warn(`Default language "${specs.default}" is not supported by current application`);
          specs.default = [...this.#supported][0];
        }

        this.#specs = specs;
        const configured = this.#storage?.getItem("__beyond_language");
        if (configured && this.#configure(configured)) return;
        const device = typeof location === "object" ? navigator.language.split("-")[0] : void 0;
        if (device && this.#configure(device)) return;
        this.#configure(specs.default);
      }

    }

    exports.Languages = Languages2;
    const languages2 = new Languages2(globalThis.__app_package.specifier);
    exports.languages = languages2;
  }
});
ims.set("./utils/events/events", {
  hash: 3993267980,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Events = void 0;

    class Events2 {
      #specs;
      #listeners = /* @__PURE__ */new Map();
      #destroyed = false;

      get destroyed() {
        return this.#destroyed;
      }

      constructor(specs) {
        specs = specs ? specs : {};
        if (specs.supported && !(specs.supported instanceof Array)) throw new Error("Invalid parameters");
        this.#specs = specs;

        if (specs.bind) {
          specs.bind.bind = (event, listener, priority) => this.on(event, listener, priority);

          specs.bind.unbind = (event, listener) => this.off(event, listener);
        }
      }

      on(event, listener, priority) {
        if (this.#destroyed) {
          throw new Error("Events object is destroyed");
        }

        if (this.#specs.supported && !this.#specs.supported.includes(event)) {
          throw new Error(`Event "${event}" is not defined`);
        }

        if (typeof listener !== "function") {
          throw new Error("Listener is not a function");
        }

        this.off(event, listener);
        const l = this.#listeners.has(event) ? this.#listeners.get(event) : [];
        this.#listeners.set(event, l);
        l.push({
          listener,
          priority: priority ? priority : 0
        });
        return this;
      }

      bind = (event, listener, priority) => this.on(event, listener, priority);

      off(event, listener, force) {
        if (this.#destroyed) {
          throw new Error("Events object is destroyed");
        }

        if (!event) {
          throw new Error(`Event name not specified`);
        }

        if (this.#specs.supported && !this.#specs.supported.includes(event)) {
          throw new Error(`Event "${event}" is not defined`);
        }

        if (!listener) {
          if (!force) throw new Error("Listener function not set");
          this.#listeners.delete(event);
          return this;
        }

        if (!this.#listeners.has(event)) {
          return this;
        }

        const e = this.#listeners.get(event);
        const filtered = e.filter(item => item.listener !== listener);
        this.#listeners.set(event, filtered);
        return this;
      }

      unbind = (event, listener, force) => this.off(event, listener, force);

      trigger(event, ...rest) {
        if (this.#destroyed) {
          throw new Error("Events object is destroyed");
        }

        event = typeof event === "string" ? {
          "name": event
        } : event;
        if (typeof event !== "object") throw new Error("Invalid parameters");
        if (typeof event.name !== "string") throw new Error("Invalid event name");

        if (this.#specs.supported && !this.#specs.supported.includes(event.name)) {
          throw new Error(`Event "${event.name}" is not defined`);
        }

        let args = [...arguments];
        args.shift();
        if (!this.#listeners.has(event.name)) return;
        let l = this.#listeners.get(event.name);
        l.sort((a, b) => b.priority - a.priority);

        if (event.async) {
          const trigger = async function () {
            const promises = [];

            for (let listener of l) {
              promises.push(listener.listener(...args));
            }

            await Promise.all(promises);
          };

          return trigger.call(this, ...args).catch(exc => console.error(exc.stack));
        } else {
          for (let listener of l) {
            listener.listener(...args);
          }
        }
      }

      destroy() {
        this.#destroyed = true;
        this.#listeners.clear();
      }

    }

    exports.Events = Events2;
    globalThis.Events = Events2;
  }
});
ims.set("./utils/events/types", {
  hash: 1632705009,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
  }
});
ims.set("./utils/execution-control/cancellation-token/cancellation-token", {
  hash: 4200323006,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.CancellationToken = void 0;

    class CancellationToken2 {
      #id = 0;

      get current() {
        return this.#id;
      }

      reset = () => ++this.#id;
      check = id => id === this.#id;
    }

    exports.CancellationToken = CancellationToken2;
  }
});
ims.set("./utils/execution-control/single-call/single-call", {
  hash: 783668127,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.SingleCall = SingleCall2;

    function SingleCall2(target, propertyKey, descriptor) {
      const originalMethod = descriptor.value;
      let promises = /* @__PURE__ */new WeakMap();

      descriptor.value = function (...args) {
        if (promises.has(this)) return promises.get(this);
        const promise = originalMethod.apply(this, args);
        promises.set(this, promise);

        const clean = () => promises.delete(this);

        promise.then(clean).catch(clean);
        return promise;
      };

      return descriptor;
    }
  }
});
ims.set("./utils/pending-promise/pending-promise", {
  hash: 3255928960,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.PendingPromise = void 0;

    class PendingPromise2 extends Promise {
      resolve;
      reject;

      constructor(executor) {
        if (executor instanceof Function) {
          super(executor);
          return;
        }

        let resolve = void 0;
        let reject = void 0;
        super((a, b) => {
          resolve = a;
          reject = b;
        });
        this.resolve = resolve;
        this.reject = reject;
      }

    }

    exports.PendingPromise = PendingPromise2;
    typeof globalThis.process !== "object" && (window.PendingPromise = PendingPromise2);
  }
});
__pkg.exports.descriptor = [{
  "im": "./beyond",
  "from": "beyond",
  "name": "beyond"
}, {
  "im": "./languages/index",
  "from": "Languages",
  "name": "Languages"
}, {
  "im": "./languages/index",
  "from": "languages",
  "name": "languages"
}, {
  "im": "./utils/events/events",
  "from": "Events",
  "name": "Events"
}, {
  "im": "./utils/events/types",
  "from": "ListenerFunction",
  "name": "ListenerFunction"
}, {
  "im": "./utils/execution-control/cancellation-token/cancellation-token",
  "from": "CancellationToken",
  "name": "CancellationToken"
}, {
  "im": "./utils/execution-control/single-call/single-call",
  "from": "SingleCall",
  "name": "SingleCall"
}, {
  "im": "./utils/pending-promise/pending-promise",
  "from": "PendingPromise",
  "name": "PendingPromise"
}];
var beyond, Languages, languages, Events, ListenerFunction, CancellationToken, SingleCall, PendingPromise;

__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "beyond") && (beyond = require2 ? require2("./beyond").beyond : value);
  (require2 || prop === "Languages") && (Languages = require2 ? require2("./languages/index").Languages : value);
  (require2 || prop === "languages") && (languages = require2 ? require2("./languages/index").languages : value);
  (require2 || prop === "Events") && (Events = require2 ? require2("./utils/events/events").Events : value);
  (require2 || prop === "ListenerFunction") && (ListenerFunction = require2 ? require2("./utils/events/types").ListenerFunction : value);
  (require2 || prop === "CancellationToken") && (CancellationToken = require2 ? require2("./utils/execution-control/cancellation-token/cancellation-token").CancellationToken : value);
  (require2 || prop === "SingleCall") && (SingleCall = require2 ? require2("./utils/execution-control/single-call/single-call").SingleCall : value);
  (require2 || prop === "PendingPromise") && (PendingPromise = require2 ? require2("./utils/pending-promise/pending-promise").PendingPromise : value);
};

var __beyond_pkg = __pkg;
var hmr = new function () {
  this.on = (event, listener) => void 0;

  this.off = (event, listener) => void 0;
}();

__pkg.initialise(ims);

module.exports = __toCommonJS(core_0_1_1_exports);
};

code(module, require);
return module.exports;
});


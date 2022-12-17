define(["@beyond-js/kernel@0.1.1/bundle","@beyond-js/kernel@0.1.1/core"], (dep_0, dep_1) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.1"],["@beyond-js/backend","0.1.0"]]);
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
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */new WeakMap() : 0); // .beyond/uimport/temp/@beyond-js/backend/client.0.1.0.js


var client_0_1_0_exports = {};

__export(client_0_1_0_exports, {
  ActionsBridge: () => ActionsBridge,
  Backend: () => Backend,
  __beyond_pkg: () => __beyond_pkg,
  backends: () => backends,
  hmr: () => hmr
}); // node_modules/@beyond-js/backend/client/client.browser.mjs


var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.1/bundle"), 0);

var dependency_1 = __toESM(require("@beyond-js/kernel@0.1.1/core"), 0);

var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;

var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/backend@0.1.0/client"
  },
  "type": "ts"
}, import_meta.url).package();

;

__pkg.dependencies.update([["@beyond-js/kernel/core", dependency_1]]);

var ims = /* @__PURE__ */new Map();
ims.set("./action/bridge", {
  hash: 2081575659,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ActionsBridge = void 0;

    var _ = require2("./");

    class ActionsBridge2 {
      #distribution;
      #bundle;
      #backend;

      constructor(distribution, bundle) {
        this.#distribution = distribution;
        this.#bundle = bundle.specifier;
        this.#backend = `${bundle.module.pkg}/${this.#distribution}`;
      }

      async execute(action, ...params) {
        const a = new _.default(this.#backend, this.#bundle, action, ...params);
        return await a.execute();
      }

    }

    exports.ActionsBridge = ActionsBridge2;
  }
});
ims.set("./action/execution-error", {
  hash: 3368390780,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ExecutionError = void 0;
    const ExecutionError = class {
      #message;

      get message() {
        return this.#message;
      }

      #stack;

      get stack() {
        return this.#stack;
      }

      constructor(message, stack) {
        this.#message = message;
        this.#stack = stack;
      }

    };
    exports.ExecutionError = ExecutionError;
  }
});
ims.set("./action/index", {
  hash: 2047620412,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;

    var _core = require2("@beyond-js/kernel/core");

    var _backends = require2("../backends");

    var _executionError = require2("./execution-error");

    let autoincrement = 0;

    class _default extends _core.Events {
      #pkg;
      #request;
      #module;

      get module() {
        return this.#module;
      }

      #action;

      get action() {
        return this.#action;
      }

      #params;

      get params() {
        return this.#params;
      }

      constructor(backend, module2, action, ...params) {
        super();
        const id = this.#id;

        const pkg = this.#pkg = (() => {
          const split = backend.split("/");
          split.pop();
          return split.join("/");
        })();

        this.#module = module2;
        this.#action = action;
        this.#params = params;
        this.#request = {
          id,
          pkg,
          module: module2,
          action,
          params
        };
      }

      #id = ++autoincrement;

      get id() {
        return this.#id;
      }

      #channel = `response-v2-${this.#id}`;

      get channel() {
        return this.#channel;
      }

      #executed = false;

      get executed() {
        return this.#executed;
      }

      #executing = false;

      get executing() {
        return this.#executing;
      }

      #error = false;

      get error() {
        return this.#error;
      }

      #timer;
      #attempts = 0;
      #promise = new _core.PendingPromise();
      #send = socket => {
        this.#attempts && this.trigger("retrying", this.#attempts);
        this.#attempts++;

        try {
          socket.emit("rpc-v2", this.#request);
        } catch (exc) {
          this.#executing = false;
          this.#executed = true;
          this.#error = true;
          this.#promise.reject(exc);
        }
      };

      async execute() {
        if (this.#executing || this.#executed) return this.#promise;
        this.#executing = true;
        const backend = await _backends.backends.get(this.#pkg);
        if (!backend) throw new Error(`Project "${this.#pkg}" does not have a backend configured`);

        try {
          const socket = await backend.socket;

          if (!socket) {
            const message = `Error getting socket on "${backend.pkg}" backend. `;
            this.#promise.reject(new Error(message));
            return;
          }

          const onresponse = response => {
            this.#executed = true;
            this.#executing = false;
            clearTimeout(this.#timer);
            socket.off(this.#channel, onresponse);
            const {
              error,
              message,
              source,
              processingTime
            } = response;
            error ? this.#promise.reject(new _executionError.ExecutionError(error.message, error.stack)) : this.#promise.resolve(message);
          };

          socket.on(this.#channel, onresponse);
          this.#send(socket);
        } catch (exc) {
          this.#promise.reject(exc);
          return;
        }

        return this.#promise;
      }

    }

    exports.default = _default;
  }
});
ims.set("./backend", {
  hash: 486330626,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Backend = void 0;

    var _io = require2("./io");

    var _socket = require2("./socket");

    class Backend2 {
      #pkg;

      get pkg() {
        return this.#pkg;
      }

      #host;

      get host() {
        return this.#host;
      }

      #local;

      get local() {
        return this.#local;
      }

      #socket;
      #io = new _io.ServiceIOConfiguration();

      get io() {
        return this.#io;
      }

      constructor(pkg, host, local) {
        this.#pkg = pkg;
        this.#host = host;
        this.#local = local;
        this.#socket = new _socket.default(this);
      }

      get socket() {
        return this.#socket.get();
      }

    }

    exports.Backend = Backend2;
  }
});
ims.set("./backends", {
  hash: 1705909413,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.backends = void 0;

    var _backend = require2("./backend");

    const backends2 = new class {
      #hosts = /* @__PURE__ */new Map();

      register(pkg, host) {
        !this.#hosts.has(pkg) && this.#hosts.set(pkg, new _backend.Backend(pkg, host));
      }

      async get(pkg) {
        if (this.#hosts.has(pkg)) return this.#hosts.get(pkg);

        try {
          const {
            backend: config
          } = (await bimport(`${pkg}/config`)).default;

          if (!config) {
            console.log(`Backend configuration not set on package "${pkg}"`);
            this.#hosts.set(pkg, void 0);
            return;
          }

          const {
            host,
            local
          } = config;
          if (this.#hosts.has(pkg)) return this.#hosts.get(pkg);
          const backend = new _backend.Backend(pkg, host, local);
          this.#hosts.set(pkg, backend);
          return this.#hosts.get(pkg);
        } catch (exc) {
          console.log(`Error importing package "${pkg}" configuration: ${exc.message}`);
          this.#hosts.set(pkg, void 0);
        }
      }

      async execute(pkg, distribution, module2, action, ...params) {
        const a = new (require2("./action").default)(`${pkg}/${distribution}`, module2, action, ...params);
        return await a.execute();
      }

    }();
    exports.backends = backends2;
  }
});
ims.set("./io", {
  hash: 2941830475,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ServiceIOConfiguration = void 0;

    class ServiceIOConfiguration {
      querystring;
    }

    exports.ServiceIOConfiguration = ServiceIOConfiguration;
  }
});
ims.set("./socket/index", {
  hash: 1119353765,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;

    var _core = require2("@beyond-js/kernel/core");

    var _initiator = require2("./initiator");

    var __decorate = function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    class default_1 {
      #backend;
      #initiator;
      #socket;

      constructor(backend) {
        this.#backend = backend;
        this.#initiator = new _initiator.default(backend);
      }

      async get() {
        if (this.#socket) return this.#socket;
        const backend = this.#backend;
        const {
          pkg
        } = backend;
        pkg !== "@beyond-js/local" && (await this.#initiator.check());
        const {
          io
        } = await bimport("socket.io-client");
        let query = backend.io.querystring && (await backend.io.querystring());
        const {
          host
        } = this.#backend;
        return this.#socket = io(host, {
          transports: ["websocket"],
          "query": query
        });
      }

    }

    exports.default = default_1;

    __decorate([_core.SingleCall], default_1.prototype, "get", null);
  }
});
ims.set("./socket/initiator", {
  hash: 4260137755,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;

    var _core = require2("@beyond-js/kernel/core");

    class _default {
      #backend;
      #local;

      constructor(backend) {
        this.#backend = backend;
      }

      #promise;
      #initialise = async () => {
        if (this.#promise) {
          await this.#promise;
          return;
        }

        this.#promise = new _core.PendingPromise();
        if (!this.#backend.local || this.#local) return;
        this.#local = (await bimport("@beyond-js/local/main")).local;
        this.#promise.resolve();
      };

      async check() {
        await this.#initialise();
        if (!this.#local) return;
        const {
          pkg,
          local
        } = this.#backend;
        const id = `${pkg}/${local}`;
        const launcher = this.#local.launchers.get(id);
        const status = await launcher.status;
        if (status === "running") return;
        await launcher.start();
        await new Promise(resolve => setTimeout(resolve, 2e3));
      }

    }

    exports.default = _default;
  }
});
__pkg.exports.descriptor = [{
  "im": "./action/bridge",
  "from": "ActionsBridge",
  "name": "ActionsBridge"
}, {
  "im": "./backend",
  "from": "Backend",
  "name": "Backend"
}, {
  "im": "./backends",
  "from": "backends",
  "name": "backends"
}];
var ActionsBridge, Backend, backends;

__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "ActionsBridge") && (ActionsBridge = require2 ? require2("./action/bridge").ActionsBridge : value);
  (require2 || prop === "Backend") && (Backend = require2 ? require2("./backend").Backend : value);
  (require2 || prop === "backends") && (backends = require2 ? require2("./backends").backends : value);
};

var __beyond_pkg = __pkg;
var hmr = new function () {
  this.on = (event, listener) => void 0;

  this.off = (event, listener) => void 0;
}();

__pkg.initialise(ims);

module.exports = __toCommonJS(client_0_1_0_exports);
};

code(module, require);
return module.exports;
});


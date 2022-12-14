System.register(["@beyond-js/kernel/bundle", "@beyond-js/kernel/core"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, __Bundle, __pkg, ims, ActionsBridge, Backend, backends, __beyond_pkg, hmr;

  _export({
    ActionsBridge: void 0,
    Backend: void 0,
    backends: void 0
  });

  return {
    setters: [function (_beyondJsKernelBundle) {
      dependency_0 = _beyondJsKernelBundle;
    }, function (_beyondJsKernelCore) {
      dependency_1 = _beyondJsKernelCore;
    }],
    execute: function () {
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@beyond-js/backend@0.1.0/client"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;

      __pkg.dependencies.update([['@beyond-js/kernel/core', dependency_1]]);

      ims = new Map();
      /*******************************
      INTERNAL MODULE: ./action/bridge
      *******************************/

      ims.set('./action/bridge', {
        hash: 2081575659,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActionsBridge = void 0;

          var _ = require("./");
          /*bundle*/


          class ActionsBridge {
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

          exports.ActionsBridge = ActionsBridge;
        }
      });
      /****************************************
      INTERNAL MODULE: ./action/execution-error
      ****************************************/

      ims.set('./action/execution-error', {
        hash: 3368390780,
        creator: function (require, exports) {
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
      /******************************
      INTERNAL MODULE: ./action/index
      ******************************/

      ims.set('./action/index', {
        hash: 2047620412,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;

          var _core = require("@beyond-js/kernel/core");

          var _backends = require("../backends");

          var _executionError = require("./execution-error");

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

            constructor(backend, module, action, ...params) {
              super();
              const id = this.#id;

              const pkg = this.#pkg = (() => {
                const split = backend.split('/');
                split.pop(); // Remove the distribution name

                return split.join('/');
              })();

              this.#module = module;
              this.#action = action;
              this.#params = params;
              this.#request = {
                id,
                pkg,
                module,
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
              this.#attempts && this.trigger('retrying', this.#attempts);
              this.#attempts++;

              try {
                socket.emit('rpc-v2', this.#request);
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
                  void source; // source can be 'server' or 'cache'

                  void processingTime;
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
      /*************************
      INTERNAL MODULE: ./backend
      *************************/

      ims.set('./backend', {
        hash: 486330626,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Backend = void 0;

          var _io = require("./io");

          var _socket = require("./socket");
          /*bundle*/


          class Backend {
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

          exports.Backend = Backend;
        }
      });
      /**************************
      INTERNAL MODULE: ./backends
      **************************/

      ims.set('./backends', {
        hash: 1705909413,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.backends = void 0;

          var _backend = require("./backend");
          /*bundle*/


          const backends = new class {
            #hosts = new Map();

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
                } = config; // Due to the get method is asynchronous, check if host is already set

                if (this.#hosts.has(pkg)) return this.#hosts.get(pkg);
                const backend = new _backend.Backend(pkg, host, local);
                this.#hosts.set(pkg, backend);
                return this.#hosts.get(pkg);
              } catch (exc) {
                console.log(`Error importing package "${pkg}" configuration: ${exc.message}`);
                this.#hosts.set(pkg, void 0);
              }
            }
            /**
             * @deprecated Actually used by the legacy module.execute(...)
             *
             * @param {string} pkg
             * @param {string} distribution
             * @param {string} module
             * @param {string} action
             * @param params
             * @return {Promise<*>}
             */


            async execute(pkg, distribution, module, action, ...params) {
              const a = new (require('./action').default)(`${pkg}/${distribution}`, module, action, ...params);
              return await a.execute();
            }

          }();
          exports.backends = backends;
        }
      });
      /********************
      INTERNAL MODULE: ./io
      ********************/

      ims.set('./io', {
        hash: 2941830475,
        creator: function (require, exports) {
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
      /******************************
      INTERNAL MODULE: ./socket/index
      ******************************/

      ims.set('./socket/index', {
        hash: 1119353765,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;

          var _core = require("@beyond-js/kernel/core");

          var _initiator = require("./initiator");

          var __decorate = void 0 && (void 0).__decorate || function (decorators, target, key, desc) {
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
              } = backend; // Check if the service is running. Start it if it is not

              pkg !== '@beyond-js/local' && (await this.#initiator.check());
              const {
                io
              } = await bimport('socket.io-client');
              let query = backend.io.querystring && (await backend.io.querystring());
              const {
                host
              } = this.#backend;
              return this.#socket = io(host, {
                transports: ['websocket'],
                'query': query
              });
            }

          }

          exports.default = default_1;

          __decorate([_core.SingleCall], default_1.prototype, "get", null);
        }
      });
      /**********************************
      INTERNAL MODULE: ./socket/initiator
      **********************************/

      ims.set('./socket/initiator', {
        hash: 4260137755,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;

          var _core = require("@beyond-js/kernel/core");
          /**
           * Service launcher required only in local development environment
           */


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
              this.#local = (await bimport('@beyond-js/local/main')).local;
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
              if (status === 'running') return;
              await launcher.start();
              await new Promise(resolve => setTimeout(resolve, 2000));
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

      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'ActionsBridge') && _export("ActionsBridge", ActionsBridge = require ? require('./action/bridge').ActionsBridge : value);
        (require || prop === 'Backend') && _export("Backend", Backend = require ? require('./backend').Backend : value);
        (require || prop === 'backends') && _export("backends", backends = require ? require('./backends').backends : value);
      };

      _export("__beyond_pkg", __beyond_pkg = __pkg);

      _export("hmr", hmr = new function () {
        this.on = (event, listener) => void 0;

        this.off = (event, listener) => void 0;
      }());

      __pkg.initialise(ims);
    }
  };
});
//# sourceMappingURL=client.sjs.js.map
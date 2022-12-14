System.register(["@beyond-js/kernel/bundle"], function (_export, _context) {
  "use strict";

  var dependency_0, __Bundle, __pkg, ims, beyond, Languages, languages, Events, ListenerFunction, CancellationToken, SingleCall, PendingPromise, __beyond_pkg, hmr;

  _export({
    beyond: void 0,
    Languages: void 0,
    languages: void 0,
    Events: void 0,
    ListenerFunction: void 0,
    CancellationToken: void 0,
    SingleCall: void 0,
    PendingPromise: void 0
  });

  return {
    setters: [function (_beyondJsKernelBundle) {
      dependency_0 = _beyondJsKernelBundle;
    }],
    execute: function () {
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@beyond-js/kernel@0.1.0/core"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;

      __pkg.dependencies.update([]);

      ims = new Map();
      /************************
      INTERNAL MODULE: ./beyond
      ************************/

      ims.set('./beyond', {
        hash: 959081709,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.beyond = exports.Beyond = void 0;

          var _languages = require("./languages");

          class Beyond {
            /**
             * @deprecated
             * Use import {languages} from '@beyond-js/kernel/core';
             */
            get languages() {
              return _languages.languages;
            }
            /**
             * @deprecated
             * Use bimport instead of beyond.import
             *
             * @param {string} resource
             * @param {number} version
             * @return {Promise<*>}
             */


            async import(resource, version) {
              return await bimport(resource, version);
            }

          }

          exports.Beyond = Beyond;
          /*bundle*/

          const beyond = new Beyond();
          exports.beyond = beyond;
          globalThis.beyond = beyond;
        }
      });
      /*********************************
      INTERNAL MODULE: ./languages/index
      *********************************/

      ims.set('./languages/index', {
        hash: 2966511149,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.languages = exports.Languages = void 0;

          var _events = require("../utils/events/events");
          /*bundle*/


          class Languages extends _events.Events {
            #project;
            #specs;
            #storage = typeof localStorage === 'object' ? localStorage : void 0;
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

              if (typeof value !== 'string' || value.length !== 2) {
                console.warn(`Configured language "${value}" is invalid`);
                return false;
              }

              if (value && !this.#supported.has(value)) {
                console.log(`Language "${value}" is not supported`);
                return false;
              }

              const previous = this.#current;
              this.#current = value;
              previous && this.trigger('change');
              return true;
            }

            set current(value) {
              if (!this.#configure(value)) return;
              this.#storage?.setItem('__beyond_language', value);
            }

            #setup(specs) {
              // Check if the default language is valid
              if (specs.default && typeof specs.default !== 'string' || specs.default.length !== 2) {
                console.log(`Default language "${specs.default}" is invalid`);
                specs.default = undefined;
              } // Check the supported languages, if not set, default will be english


              const def = specs.default ? specs.default : 'en';
              specs.supported = specs.supported instanceof Array ? specs.supported : [def];
              !specs.supported.length && specs.supported.push(def);
              this.#supported = new Set(specs.supported); // If default language not set or was invalid, take the first supported language

              specs.default = specs.default ? specs.default : [...this.#supported][0]; // If default language was configured, but not set in the supported list, warn it

              if (!this.#supported.has(specs.default)) {
                console.warn(`Default language "${specs.default}" is not supported by current application`);
                specs.default = [...this.#supported][0];
              }

              this.#specs = specs;
              const configured = this.#storage?.getItem('__beyond_language'); // Try to configure the locally previously configured language

              if (configured && this.#configure(configured)) return; // Try to configure the language configured in the device

              const device = typeof location === 'object' ? navigator.language.split('-')[0] : void 0;
              if (device && this.#configure(device)) return;
              this.#configure(specs.default);
            }

          }

          exports.Languages = Languages;
          /*bundle*/

          const languages = new Languages(globalThis.__app_package.specifier);
          exports.languages = languages;
        }
      });
      /*************************************
      INTERNAL MODULE: ./utils/events/events
      *************************************/

      ims.set('./utils/events/events', {
        hash: 3993267980,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Events = void 0;
          /*bundle*/

          class Events {
            #specs;
            #listeners = new Map();
            #destroyed = false;

            get destroyed() {
              return this.#destroyed;
            }

            constructor(specs) {
              specs = specs ? specs : {};
              if (specs.supported && !(specs.supported instanceof Array)) throw new Error('Invalid parameters');
              this.#specs = specs;

              if (specs.bind) {
                specs.bind.bind = (event, listener, priority) => this.on(event, listener, priority);

                specs.bind.unbind = (event, listener) => this.off(event, listener);
              }
            }
            /**
             * Binds an event handler to an event name
             *
             * @param {string} event
             * @param {ListenerFunction} listener
             * @param {number} priority
             * @returns {this}
             */


            on(event, listener, priority) {
              if (this.#destroyed) {
                throw new Error('Events object is destroyed');
              }

              if (this.#specs.supported && !this.#specs.supported.includes(event)) {
                throw new Error(`Event "${event}" is not defined`);
              }

              if (typeof listener !== 'function') {
                throw new Error('Listener is not a function');
              }

              this.off(event, listener); // Just in case the listener is already registered

              const l = this.#listeners.has(event) ? this.#listeners.get(event) : [];
              this.#listeners.set(event, l);
              l.push({
                listener: listener,
                priority: priority ? priority : 0
              });
              return this;
            }

            bind = (event, listener, priority) => this.on(event, listener, priority);
            /**
             * Unbind an event listener
             *
             * @param {string} event
             * @param {ListenerFunction} listener
             * @param {number} force
             * @returns {this}
             */

            off(event, listener, force) {
              if (this.#destroyed) {
                throw new Error('Events object is destroyed');
              }

              if (!event) {
                throw new Error(`Event name not specified`);
              }

              if (this.#specs.supported && !this.#specs.supported.includes(event)) {
                throw new Error(`Event "${event}" is not defined`);
              }

              if (!listener) {
                if (!force) throw new Error('Listener function not set');
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
            /**
             * Triggers an event
             *
             * @param {Trigger} event
             * @param {*} rest
             * @returns {Promise<*>}
             */

            trigger(event, ...rest) {
              if (this.#destroyed) {
                throw new Error('Events object is destroyed');
              }

              event = typeof event === 'string' ? {
                'name': event
              } : event;
              if (typeof event !== 'object') throw new Error('Invalid parameters');
              if (typeof event.name !== 'string') throw new Error('Invalid event name');

              if (this.#specs.supported && !this.#specs.supported.includes(event.name)) {
                throw new Error(`Event "${event.name}" is not defined`);
              }

              let args = [...arguments];
              args.shift(); // Remove the event name from the list of arguments

              if (!this.#listeners.has(event.name)) return;
              let l = this.#listeners.get(event.name); // Sort by priority

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

          exports.Events = Events;
          globalThis.Events = Events;
        }
      });
      /************************************
      INTERNAL MODULE: ./utils/events/types
      ************************************/

      ims.set('./utils/events/types', {
        hash: 1632705009,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });
      /*******************************************************************************
      INTERNAL MODULE: ./utils/execution-control/cancellation-token/cancellation-token
      *******************************************************************************/

      ims.set('./utils/execution-control/cancellation-token/cancellation-token', {
        hash: 4200323006,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CancellationToken = void 0;
          /*bundle*/

          class CancellationToken {
            #id = 0;

            get current() {
              return this.#id;
            }

            reset = () => ++this.#id;
            check = id => id === this.#id;
          }

          exports.CancellationToken = CancellationToken;
        }
      });
      /*****************************************************************
      INTERNAL MODULE: ./utils/execution-control/single-call/single-call
      *****************************************************************/

      ims.set('./utils/execution-control/single-call/single-call', {
        hash: 783668127,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SingleCall = SingleCall;
          /*bundle*/

          function SingleCall(target, propertyKey, descriptor) {
            const originalMethod = descriptor.value;
            let promises = new WeakMap();

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
      /*******************************************************
      INTERNAL MODULE: ./utils/pending-promise/pending-promise
      *******************************************************/

      ims.set('./utils/pending-promise/pending-promise', {
        hash: 3255928960,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PendingPromise = void 0;
          /*bundle*/

          class PendingPromise extends Promise {
            resolve;
            reject;

            constructor(executor) {
              // needed for PendingPromise.race/all ecc
              if (executor instanceof Function) {
                super(executor);
                return;
              }

              let resolve = undefined;
              let reject = undefined;
              super((a, b) => {
                resolve = a;
                reject = b;
              });
              this.resolve = resolve;
              this.reject = reject;
            }

          } // For backward compatibility


          exports.PendingPromise = PendingPromise;
          typeof globalThis.process !== 'object' && (window.PendingPromise = PendingPromise);
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

      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'beyond') && _export("beyond", beyond = require ? require('./beyond').beyond : value);
        (require || prop === 'Languages') && _export("Languages", Languages = require ? require('./languages/index').Languages : value);
        (require || prop === 'languages') && _export("languages", languages = require ? require('./languages/index').languages : value);
        (require || prop === 'Events') && _export("Events", Events = require ? require('./utils/events/events').Events : value);
        (require || prop === 'ListenerFunction') && _export("ListenerFunction", ListenerFunction = require ? require('./utils/events/types').ListenerFunction : value);
        (require || prop === 'CancellationToken') && _export("CancellationToken", CancellationToken = require ? require('./utils/execution-control/cancellation-token/cancellation-token').CancellationToken : value);
        (require || prop === 'SingleCall') && _export("SingleCall", SingleCall = require ? require('./utils/execution-control/single-call/single-call').SingleCall : value);
        (require || prop === 'PendingPromise') && _export("PendingPromise", PendingPromise = require ? require('./utils/pending-promise/pending-promise').PendingPromise : value);
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
//# sourceMappingURL=core.sjs.js.map
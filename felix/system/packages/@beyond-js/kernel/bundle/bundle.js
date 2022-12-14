System.register([], function (_export, _context) {
  "use strict";

  var __pkg, ims, bimport, brequire, IBundleSpecs, Bundle, Events, ListenerFunction, instances, Module, IExportsDescriptor, IMSpecs, IMCreators, Package, __bp;

  _export({
    bimport: void 0,
    brequire: void 0,
    IBundleSpecs: void 0,
    Bundle: void 0,
    Events: void 0,
    ListenerFunction: void 0,
    instances: void 0,
    Module: void 0,
    IExportsDescriptor: void 0,
    IMSpecs: void 0,
    IMCreators: void 0,
    Package: void 0
  });

  return {
    setters: [],
    execute: function () {
      __pkg = {
        exports: {}
      };
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./base/index
      ****************************/

      ims.set('./base/index', {
        hash: 1936310117,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BeyondPackage = void 0;
          exports.resolve = resolve;

          function resolve(source, id) {
            if (!id.startsWith('.')) throw new Error(`Module id must be a relative resource "${id}"`);
            const split = {};
            split.source = source.split('/');
            split.source.pop();
            split.target = (id.startsWith('./') ? id.slice(2) : id).split('../');

            while (split.target[0] === '' && split.target.length > 1) {
              split.target.shift();
              split.source.pop();
            }

            return split.source.join('/') + '/' + split.target.join('/');
          }
          /**
           * This class is used only by beyond/core
           */


          class BeyondPackage {
            #ims;
            #cached = new Map();
            #exports;

            constructor(exports) {
              this.#exports = exports;
            }

            initialise(ims) {
              this.#ims = ims;
              this.#exports.process((id, source) => this.require(id, source), {});
            }
            /**
             * Solve the require function
             *
             * @param source {string} The module from where the require is being triggered
             * @param id {string} The module id being requested
             * @returns {*}
             */


            require(id, source) {
              id = source ? resolve(source, id) : id;

              const module = (() => {
                if (this.#ims.has(id)) return id;
                return id.endsWith('/') ? `${id}index` : `${id}/index`;
              })();

              if (this.#cached.has(module)) return this.#cached.get(module);
              if (!this.#ims.has(module)) throw new Error(`Internal module "${id}" not found`);
              const fn = this.#ims.get(module).creator;

              const require = required => this.require(required, module); // Here the id is the source of the require


              const exports = {};
              fn(require, exports);
              this.#cached.set(module, exports);
              return exports;
            }

          }

          exports.BeyondPackage = BeyondPackage;
        }
      });
      /*********************************
      INTERNAL MODULE: ./bimport/bimport
      *********************************/

      ims.set('./bimport/bimport', {
        hash: 1563705995,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.bimport = bimport;

          require("./brequire");
          /*bundle*/

          /**
           * Import a module, solving internally the module format (amd, esm).
           *
           * When running in a BEE, brequire and bimport are implemented by it, overriding both functions.
           *
           * @param resource {string} The resource identifier of the bundle
           * @param version {number} The version required by hmr to update a bundle's processor
           * @returns {Promise<*>}
           */


          function bimport(resource, version) {
            if (bimport.mode === 'amd') {
              return new Promise((resolve, reject) => {
                if (typeof resource !== "string") throw 'Invalid module parameter';
                resource = resource.endsWith('.js') ? resource.slice(0, resource.length - 3) : resource;
                const error = new Error(`Error loading or processing module "${resource}"`);
                amd_require([resource], returned => resolve(returned), exc => {
                  console.error(`Error loading resource "${resource}".`);
                  console.log(exc.stack);
                  reject(error);
                });
              });
            } else if (bimport.mode === 'sjs') {
              return globalThis.System.import(resource + (version ? `?version=${version}` : ''));
            } else {
              return _context.import(`${resource + (version ? `?version=${version}` : '')}`);
            }
          }

          bimport.mode = (() => {
            if (typeof amd_require === 'function') return 'amd';
            const {
              System
            } = globalThis;
            if (typeof System === 'object' && typeof System.import === 'function') return 'sjs';
            return 'esm';
          })();

          const appDependencies = (() => {
            const dependencies = globalThis.__app_package?.dependencies;
            return new Map(dependencies);
          })();

          bimport.resolve = (specifier, dependencies) => {
            if (/^https?:\/\//.test(specifier)) return specifier;
            const split = specifier.split('/');
            const pkg = split[0].startsWith('@') ? `${split.shift()}/${split.shift()}` : split.shift();

            const version = (() => {
              if (dependencies.has(pkg)) return dependencies.get(pkg);
              if (appDependencies.has(pkg)) return appDependencies.get(pkg);
            })();

            if (!version) return specifier;
            const subpath = split.join('/');
            return `${pkg}@${version}` + (subpath ? `/${subpath}` : '');
          };
        }
      });
      /**********************************
      INTERNAL MODULE: ./bimport/brequire
      **********************************/

      ims.set('./bimport/brequire', {
        hash: 596501557,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.brequire = brequire;

          var _instances = require("../package/instances");
          /*bundle*/

          /**
           * Require a previously loaded bundle synchronously:
           * (can be a project bundle or library bundle, or an external bundle).
           *
           * brequire is implemented for internal use, as the require function available in the internal modules
           * exposes this functionality.
           * In fact the require of the internal modules internally makes use of brequire.
           *
           * When running in a BEE, brequire and bimport are implemented by it, overriding both functions.
           *
           * @param {string} specifier
           * @return {*}
           */


          function brequire(specifier) {
            const split = specifier.split('/');
            const pkg = split[0].startsWith('@') ? `${split.shift()}/${split.shift()}` : split.shift();
            const subpath = split.join('/');
            const found = [..._instances.default].find(([vspecifier]) => {
              if (!vspecifier.startsWith(`${pkg}@`)) return;
              const split = vspecifier.slice(pkg.length).split('/');
              split.shift(); // Remove the version of the specifier of the instance

              return subpath === split.join('/');
            });
            if (!found) return;
            !found[1].initialised && found[1].initialise();
            return found[1].exports.values;
          }
        }
      });
      /*******************************
      INTERNAL MODULE: ./bimport/index
      *******************************/

      ims.set('./bimport/index', {
        hash: 478135557,
        creator: function (require, exports) {
          "use strict";

          var _bimport = require("./bimport");

          var _brequire = require("./brequire");
          /**
           * When running in a BEE, bimport and brequire are implemented by it
           */


          globalThis.bimport === void 0 && (globalThis.bimport = _bimport.bimport);
          globalThis.brequire === void 0 && (globalThis.brequire = _brequire.brequire);
        }
      });
      /***********************************
      INTERNAL MODULE: ./bimport/requirejs
      ***********************************/

      ims.set('./bimport/requirejs', {
        hash: 2243979856,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });
      /************************
      INTERNAL MODULE: ./bundle
      ************************/

      ims.set('./bundle', {
        hash: 2786310194,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Bundle = void 0;

          var _package = require("./package");

          var _instances = require("./instances");

          var _module = require("./module");

          require("./bimport");
          /*bundle*/


          class Bundle extends Map {
            #type;

            get type() {
              return this.#type;
            }

            #name;

            get name() {
              return this.#name;
            }

            #vspecifier;

            get vspecifier() {
              return this.#vspecifier;
            }

            #specifier;

            get specifier() {
              return this.#specifier;
            }

            #module;

            get module() {
              return this.#module;
            }

            #uri;

            get uri() {
              return this.#uri;
            }

            constructor(specs, uri) {
              super();
              if (typeof specs !== 'object') throw new Error('Bundle creation specification is not defined');
              const name = this.#name = specs.name ? specs.name : specs.type;
              if (!name) throw new Error('Invalid bundle creation specification');
              this.#module = new _module.Module(specs.module);
              this.#uri = uri;
              this.#type = specs.type;
              const {
                multibundle,
                vspecifier,
                specifier
              } = this.#module;
              this.#vspecifier = multibundle ? `${vspecifier}.${name}` : vspecifier;
              this.#specifier = multibundle ? `${specifier}.${name}` : specifier;

              _instances.instances.register(this);
            }

            package(language) {
              if (language && language.length !== 2) throw new Error(`Language "${language}" is invalid`);
              language = !language ? '' : language;
              if (this.has(language)) return this.get(language);
              const pkg = new _package.Package(this, language);
              this.set(language, pkg);
              return pkg;
            }

          }

          exports.Bundle = Bundle;
        }
      });
      /******************************
      INTERNAL MODULE: ./events/index
      ******************************/

      ims.set('./events/index', {
        hash: 1779469688,
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
        }
      });
      /******************************
      INTERNAL MODULE: ./events/types
      ******************************/

      ims.set('./events/types', {
        hash: 1632705009,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });
      /***************************
      INTERNAL MODULE: ./instances
      ***************************/

      ims.set('./instances', {
        hash: 1214802090,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.instances = void 0;
          /*bundle*/

          const instances = new class extends Map {
            register(bundle) {
              this.set(bundle.vspecifier, bundle);
            }

          }();
          exports.instances = instances;
        }
      });
      /******************************
      INTERNAL MODULE: ./module/index
      ******************************/

      ims.set('./module/index', {
        hash: 702878917,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Module = void 0;
          /*bundle*/

          class Module {
            #pkg;

            get pkg() {
              return this.#pkg;
            }

            #vspecifier;

            get vspecifier() {
              return this.#vspecifier;
            }

            #specifier;

            get specifier() {
              return this.#specifier;
            }

            #version;

            get version() {
              return this.#version;
            }

            #subpath;

            get subpath() {
              return this.#subpath;
            }

            #multibundle;

            get multibundle() {
              return this.#multibundle;
            }

            constructor(specs) {
              this.#vspecifier = specs.vspecifier;
              this.#multibundle = specs.multibundle;
              const split = specs.vspecifier.split('/');
              const scope = split[0].startsWith('@') ? split.shift() : void 0;
              const [name, version] = split.shift().split('@');
              this.#subpath = split.join('/');
              this.#pkg = scope ? `${scope}/${name}` : name;
              this.#version = version;
              this.#specifier = this.#pkg + (this.#subpath ? `/${this.#subpath}` : '');
            }
            /**
             * @deprecated
             *
             * @param {string} action
             * @param {Record<string, *>} params
             * @return {Promise<*>}
             */


            async execute(action, params) {
              if (typeof globalThis.beyond !== 'object') return;
              const {
                backends
              } = await beyond.import('@beyond-js/backend/client');
              return await backends.execute(this.#pkg, 'legacy', this.#subpath, action, params);
            }

          }

          exports.Module = Module;
        }
      });
      /**************************************
      INTERNAL MODULE: ./package/dependencies
      **************************************/

      ims.set('./package/dependencies', {
        hash: 3724344928,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;

          class _default extends Map {
            #pkg;

            constructor(pkg) {
              super();
              this.#pkg = pkg;
            }

            update(deps) {
              this.clear();
              deps?.forEach(([specifier, dependency]) => {
                if (!dependency) {
                  throw new Error(`Dependency "${specifier}" not found on package "${this.#pkg.vspecifier}"`);
                }

                const {
                  __beyond_transversal: transversal
                } = dependency;
                dependency = transversal ? transversal.bundles.get(specifier) : dependency;
                this.set(specifier, dependency);
              });
            }

          }

          exports.default = _default;
        }
      });
      /*********************************
      INTERNAL MODULE: ./package/exports
      *********************************/

      ims.set('./package/exports', {
        hash: 3682924180,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;

          var _trace = require("./ims/require/trace");

          class _default {
            #require;
            #values = {};

            get values() {
              return this.#values;
            }
            /**
             * Property is set by the bundle file, or by the transversal
             * @type {{im: string, from: string, name: string}[]}
             */


            descriptor;
            /**
             * Property is set by the bundle file to process the module exports (es6, cjs, amd)
             * @type {(require: (id: string) => any) => {void(require)}}
             */

            process;

            constructor(require) {
              this.#require = require;
              this.#values.hmr = {
                on: (event, listener) => require.pkg.hmr.on(event, listener),
                off: (event, listener) => require.pkg.hmr.off(event, listener)
              };
              this.#values.__beyond_pkg = this.#require.pkg;
            } // Used by the IM exports proxy to update the value of the bundle exported property when
            // the property is changed in the IM


            set(key, value) {
              this.#values[key] = value;
            }

            update() {
              const require = id => {
                const trace = new _trace.Trace();
                trace.register('exports.update', id);
                return this.#require.solve(id, trace);
              };

              this.process?.({
                require
              }); // Clean all previous values

              const reserved = ['__beyond_pkg', 'hmr'];
              Object.keys(this.#values).forEach(p => !reserved.includes(p) && delete this.#values[p]);
              this.descriptor?.forEach(({
                im,
                from,
                name
              }) => {
                const trace = new _trace.Trace();
                this.#values[name] = this.#require.solve(im, trace)[from];
              });
            }

          }

          exports.default = _default;
        }
      });
      /*************************************
      INTERNAL MODULE: ./package/ims/exports
      *************************************/

      ims.set('./package/ims/exports', {
        hash: 3697874831,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.IMExports = void 0;

          class IMExports {
            constructor(im, bexports) {
              return new Proxy(this, {
                set: (self, name, value) => {
                  // Set the exported property
                  self[name] = value; // Check if it is a bundle exported property

                  const prop = bexports.descriptor?.find(({
                    im: id,
                    from
                  }) => {
                    return im.id === id && name === from;
                  });
                  prop && bexports.set(prop.name, value);
                  prop && bexports.process?.({
                    prop: prop.name,
                    value
                  });
                  return true;
                }
              });
            }

          }

          exports.IMExports = IMExports;
        }
      });
      /********************************
      INTERNAL MODULE: ./package/ims/im
      ********************************/

      ims.set('./package/ims/im', {
        hash: 2241059934,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.InternalModule = void 0;

          var _trace = require("./require/trace");

          var _exports = require("./exports"); // Bundle internal module


          class InternalModule {
            #pkg;

            get package() {
              return this.#pkg;
            }

            #id;

            get id() {
              return this.#id;
            }

            #hash;

            get hash() {
              return this.#hash;
            }

            #require;
            #exports;
            #creator;
            #creating = false;
            #created = false;

            get created() {
              return this.#created;
            }

            #create = trace => {
              if (this.#created) throw new Error(`Internal module "${this.#id}" already created`);
              if (this.#creating) throw new Error(`Cyclical import found on internal module "${this.#id}"`);
              this.#creating = true;

              const require = id => this.#require.solve(id, trace, this);

              Object.keys(this.#exports).forEach(key => delete this.#exports[key]);
              this.#creator(require, this.#exports);
              this.#created = true;
              this.#creating = false;
            };

            require(trace, source) {
              if (!this.#created) {
                source && trace.register(source.id, this.#id);
                this.#create(trace);
                trace.pop();
              }

              return this.#exports;
            }

            initialise() {
              if (this.#created) return;
              const trace = new _trace.Trace();
              trace.register('initialisation', this.#id);
              this.#create(trace);
            }

            update(creator, hash) {
              this.#created = false;
              this.#creator = creator;
              this.#hash = hash;
            }

            constructor(pkg, id, hash, creator, require) {
              this.#pkg = pkg;
              this.#id = id;
              this.#hash = hash;
              this.#creator = creator;
              this.#require = require;
              this.#exports = new _exports.IMExports(this, pkg.exports);
            }

          }

          exports.InternalModule = InternalModule;
        }
      });
      /***********************************
      INTERNAL MODULE: ./package/ims/index
      ***********************************/

      ims.set('./package/ims/index', {
        hash: 993201032,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.InternalModules = void 0;

          var _im = require("./im");

          class InternalModules {
            #pkg;
            #ims = new Map();
            #require;

            constructor(pkg) {
              this.#pkg = pkg;
            }

            set _require(value) {
              this.#require = value;
            }

            #register = (id, hash, creator) => {
              if (this.#ims.has(id)) throw new Error(`IM "${id}" already registered`);
              const im = new _im.InternalModule(this.#pkg, id, hash, creator, this.#require);
              this.#ims.set(im.id, im);
            };

            register(ims) {
              ims.forEach(({
                creator,
                hash
              }, id) => this.#register(id, hash, creator));
            }

            require(id, trace, source) {
              const module = (() => {
                if (this.#ims.has(id)) return id;
                return id.endsWith('/') ? `${id}index` : `${id}/index`;
              })();

              if (!this.#ims.has(module)) {
                throw new Error(`Internal module "${id}" not found`);
              }

              const im = this.#ims.get(module);
              return im.require(trace, source);
            }

            initialise() {
              this.#ims.forEach(im => im.initialise());
            }

            update(ims) {
              ims.forEach(({
                creator,
                hash
              }, id) => {
                if (!this.#ims.has(id)) {
                  this.#register(id, hash, creator);
                  return;
                }

                const im = this.#ims.get(id);
                if (im.hash === hash) return;
                im.update(creator, hash);
                this.#pkg.hmr.trigger(`${id}:change`);
              });
            }

          }

          exports.InternalModules = InternalModules;
        }
      });
      /*******************************************
      INTERNAL MODULE: ./package/ims/require/index
      *******************************************/

      ims.set('./package/ims/require/index', {
        hash: 12273943,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Require = void 0;

          var _base = require("../../../base");

          class Require {
            #pkg;

            get pkg() {
              return this.#pkg;
            }

            constructor(pkg) {
              this.#pkg = pkg;
            }
            /**
             * Solve a cjs require function
             *
             * @param {string} specifier The id of the internal module being required
             * @param {Trace} trace {object} The internal trace to find cyclical dependencies of internal modules
             * @param {InternalModule=} im The internal module that is making the call
             * @return {*}
             */


            solve(specifier, trace, im) {
              if (specifier.startsWith('.')) {
                // Relative require (internal module)
                specifier = im ? (0, _base.resolve)(im.id, specifier) : specifier;
                return this.#pkg.ims.require(specifier, trace, im);
              }
              /**
               * It is a non-relative require
               */


              if (specifier === 'beyond_context') {
                const {
                  bundle
                } = this.#pkg;
                return {
                  module: bundle.module,
                  bundle,
                  pkg: this.#pkg
                };
              } // @beyond-js/kernel/transversals requires the Bundle object


              if (specifier === '@beyond-js/kernel/bundle') {
                const {
                  Bundle
                } = require('../../../bundle');

                const {
                  instances
                } = require('../../../instances');

                return {
                  Bundle,
                  instances
                };
              }

              const {
                dependencies
              } = this.#pkg;

              if (dependencies.has(specifier)) {
                /**
                 * The package may not be initialized.
                 * In principle, it is a feature required by transversals, but it could be applied to other use cases.
                 */
                const {
                  __beyond_pkg: pkg
                } = dependencies.get(specifier);
                typeof pkg === 'object' && !pkg.initialised && pkg.initialise();
                return dependencies.get(specifier);
              }

              const keys = JSON.stringify([...dependencies.keys()]);
              throw new Error(`Bundle "${specifier}" is not registered as a dependency: ${keys}`);
            }

          }

          exports.Require = Require;
        }
      });
      /*******************************************
      INTERNAL MODULE: ./package/ims/require/trace
      *******************************************/

      ims.set('./package/ims/require/trace', {
        hash: 1932027471,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Trace = void 0; // Used to find cyclical requires of internal modules
          // Key is the id being required and the value is the source

          class Trace extends Array {
            has = id => this.find(rt => rt.id === id);

            register(source, id) {
              // Check for cyclical module require
              if (this.has(id)) {
                let traced = '';
                this.forEach(({
                  id,
                  source
                }) => {
                  const s = ['initialisation', 'exports.update'].includes(source) ? 'Cycle initiates with source' : `then "${source}" requires`;
                  traced += `\t${s} "${id}"\n`;
                });
                traced += `\tthat finally requires "${id}" again.\n`;
                throw new Error(`Recursive module load found.\n` + `Internal module "${source}" is requiring another internal module that was previously required: "${id}"\n` + `Trace of required modules:\n${traced}`);
              }

              this.push({
                id,
                source
              });
            }

          }

          exports.Trace = Trace;
        }
      });
      /*******************************
      INTERNAL MODULE: ./package/index
      *******************************/

      ims.set('./package/index', {
        hash: 458850112,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Package = void 0;

          var _ims = require("./ims");

          var _require = require("./ims/require");

          var _exports = require("./exports");

          var _dependencies = require("./dependencies");

          var _instances = require("./instances");

          var _events = require("../events");
          /*bundle*/


          class Package {
            #bundle;

            get bundle() {
              return this.#bundle;
            }

            #language;

            get language() {
              return this.#language;
            }

            #vspecifier;

            get vspecifier() {
              return this.#vspecifier;
            }

            #specifier;

            get specifier() {
              return this.#specifier;
            }

            #require;
            #ims;

            get ims() {
              return this.#ims;
            }

            #exports;

            get exports() {
              return this.#exports;
            } // The beyond dependencies that are required by the bundle


            #dependencies = new _dependencies.default(this);

            get dependencies() {
              return this.#dependencies;
            }

            #hmr = new _events.Events();

            get hmr() {
              return this.#hmr;
            }

            constructor(bundle, language) {
              this.#bundle = bundle;
              this.#language = language ? language : '';
              this.#vspecifier = language ? `${bundle.vspecifier}.${language}` : bundle.vspecifier;
              this.#specifier = language ? `${bundle.specifier}.${language}` : bundle.specifier;
              this.#ims = new _ims.InternalModules(this);
              this.#require = new _require.Require(this);
              this.#ims._require = this.#require;
              this.#exports = new _exports.default(this.#require);

              _instances.default.register(this);
            }

            #initialised = false;

            get initialised() {
              return this.#initialised;
            }

            initialise(ims) {
              if (this.#initialised) throw new Error('Package already initialised');
              this.#initialised = true;
              ims && this.#ims.register(ims);
              this.exports.update();
              this.#ims.initialise();
            }

            update(ims) {
              this.#ims.update(ims);
              this.exports.update();
              this.#ims.initialise();
              this.#hmr.trigger('change');
            }

          }

          exports.Package = Package;
        }
      });
      /***********************************
      INTERNAL MODULE: ./package/instances
      ***********************************/

      ims.set('./package/instances', {
        hash: 2745122839,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;

          var _default = new class extends Map {
            register(pkg) {
              this.set(pkg.vspecifier, pkg);
            }

          }();

          exports.default = _default;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./bimport/bimport",
        "from": "bimport",
        "name": "bimport"
      }, {
        "im": "./bimport/brequire",
        "from": "brequire",
        "name": "brequire"
      }, {
        "im": "./bundle",
        "from": "IBundleSpecs",
        "name": "IBundleSpecs"
      }, {
        "im": "./bundle",
        "from": "Bundle",
        "name": "Bundle"
      }, {
        "im": "./events/index",
        "from": "Events",
        "name": "Events"
      }, {
        "im": "./events/types",
        "from": "ListenerFunction",
        "name": "ListenerFunction"
      }, {
        "im": "./instances",
        "from": "instances",
        "name": "instances"
      }, {
        "im": "./module/index",
        "from": "Module",
        "name": "Module"
      }, {
        "im": "./package/exports",
        "from": "IExportsDescriptor",
        "name": "IExportsDescriptor"
      }, {
        "im": "./package/ims/im",
        "from": "IMSpecs",
        "name": "IMSpecs"
      }, {
        "im": "./package/ims/index",
        "from": "IMCreators",
        "name": "IMCreators"
      }, {
        "im": "./package/index",
        "from": "Package",
        "name": "Package"
      }];

      // Module exports
      __pkg.exports.process = function (require) {
        _export("bimport", bimport = require('./bimport/bimport').bimport);

        _export("brequire", brequire = require('./bimport/brequire').brequire);

        _export("IBundleSpecs", IBundleSpecs = require('./bundle').IBundleSpecs);

        _export("Bundle", Bundle = require('./bundle').Bundle);

        _export("Events", Events = require('./events/index').Events);

        _export("ListenerFunction", ListenerFunction = require('./events/types').ListenerFunction);

        _export("instances", instances = require('./instances').instances);

        _export("Module", Module = require('./module/index').Module);

        _export("IExportsDescriptor", IExportsDescriptor = require('./package/exports').IExportsDescriptor);

        _export("IMSpecs", IMSpecs = require('./package/ims/im').IMSpecs);

        _export("IMCreators", IMCreators = require('./package/ims/index').IMCreators);

        _export("Package", Package = require('./package/index').Package);
      };

      __bp = {};
      ims.get('./base/index').creator(() => 0, __bp);
      __pkg = new __bp.BeyondPackage(__pkg.exports);

      __pkg.initialise(ims);
    }
  };
});
//# sourceMappingURL=bundle.sjs.js.map
System.register(["@beyond-js/backend@0.1.0/client", "@beyond-js/kernel@0.1.0/bundle"], function (_export, _context) {
    "use strict";

    var dependency_0, dependency_1, bimport, __Bundle, __pkg, ActionsBridge, ims, Auth, __beyond_pkg, hmr;

    _export("Auth", void 0);

    return {
        setters: [function (_beyondJsBackend010Client) {
            dependency_0 = _beyondJsBackend010Client;
        }, function (_beyondJsKernel010Bundle) {
            dependency_1 = _beyondJsKernel010Bundle;
        }],
        execute: function () {
            bimport = specifier => {
                const dependencies = new Map([["socket.io", "4.5.3"], ["socket.io-client", "4.5.3"], ["@beyond-js/backend", "0.1.0"], ["@beyond-js/local", "0.1.0"], ["@beyond-js/react-widgets", "18.20.2"], ["@tests/code", "1.0.0"], ["@tests/code", "1.0.0"]]);
                return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
            };

            ({
                Bundle: __Bundle
            } = dependency_1);
            __pkg = new __Bundle({
                "module": {
                    "vspecifier": "@tests/code@1.0.0/auth"
                },
                "type": "bridge"
            }, _context.meta.url).package();
            ;

            __pkg.dependencies.update([['@beyond-js/backend/client', dependency_0]]);

            ({
                ActionsBridge
            } = brequire('@beyond-js/backend/client'));
            ims = new Map();
            /***********************
             INTERNAL MODULE: ./index
             ***********************/

            ims.set('./index', {
                hash: 3169156854,
                creator: function (require, exports) {
                    "use strict";

                    Object.defineProperty(exports, "__esModule", {
                        value: true
                    });
                    exports.Auth = void 0;

                    var _beyond_context = require("beyond_context");
                    /*actions*/

                    /*bundle*/


                    class Auth extends ActionsBridge {
                        async login(user, password) {
                            return await this.execute("index//Auth//login", ...arguments);
                        }

                        constructor() {
                            super("backend", _beyond_context.bundle);
                        }

                    }

                    exports.Auth = Auth;
                }
            });
            __pkg.exports.descriptor = [{
                "im": "./index",
                "from": "Auth",
                "name": "Auth"
            }];

            // Module exports
            __pkg.exports.process = function ({
                                                  require,
                                                  prop,
                                                  value
                                              }) {
                (require || prop === 'Auth') && _export("Auth", Auth = require ? require('./index').Auth : value);
            };

            _export("__beyond_pkg", __beyond_pkg = __pkg);

            _export("hmr", hmr = new function () {
                this.on = (event, listener) => __pkg.hmr.on(event, listener);

                this.off = (event, listener) => __pkg.hmr.off(event, listener);
            }());

            __pkg.initialise(ims);
        }
    };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQTtVQUVPOztVQUFZOzs7VUFBVSxNQUFPQSxJQUFQLFNBQW9CQyxhQUFwQixDQUFpQztZQUMvQyxNQUFMQyxLQUFLLENBQUNDLElBQUQsRUFBZUMsUUFBZixFQUErQjtjQUN0QyxPQUFPLE1BQU0sS0FBS0MsT0FBTCxDQUFhLG9CQUFiLEVBQW1DLEdBQUdDLFNBQXRDLENBQWI7WUFDSDs7WUFDREM7Y0FDSSxNQUFNLFNBQU4sRUFBaUJDLHNCQUFqQjtZQUNIOztVQU55RCIsIm5hbWVzIjpbIkF1dGgiLCJBY3Rpb25zQnJpZGdlIiwibG9naW4iLCJ1c2VyIiwicGFzc3dvcmQiLCJleGVjdXRlIiwiYXJndW1lbnRzIiwiY29uc3RydWN0b3IiLCJidW5kbGUiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbIndlYi1iYWNrZW5kL21vZHVsZXMvYXV0aC9icmlkZ2UvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=
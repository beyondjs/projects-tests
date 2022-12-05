System.register(["@beyond-js/backend/client", "@beyond-js/kernel/bundle"], function (_export, _context) {
    "use strict";

    var dependency_0, dependency_1, __Bundle, __pkg, ActionsBridge, ims, Auth, __beyond_pkg, hmr;

    _export("Auth", void 0);

    return {
        setters: [function (_beyondJsBackendClient) {
            dependency_0 = _beyondJsBackendClient;
        }, function (_beyondJsKernelBundle) {
            dependency_1 = _beyondJsKernelBundle;
        }],
        execute: function () {
            ({
                Bundle: __Bundle
            } = dependency_1);
            __pkg = new __Bundle({
                "module": {
                    "vspecifier": "@tests/web-backend-app@1.0.0/auth"
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
                    const data = {
                        user: 'admin',
                        password: '123456.'
                    };
                    /*actions*/

                    /*bundle*/

                    class Auth {
                        async login(user, password) {
                            if (user !== data.user || password !== data.password) {
                                return {
                                    status: true,
                                    error: 'Invalid data'
                                };
                            }

                            return {
                                status: true,
                                data: {
                                    valid: true
                                }
                            };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxNQUFNQSxJQUFJLEdBQUc7WUFDVEMsSUFBSSxFQUFFLE9BREc7WUFFVEMsUUFBUSxFQUFFO1VBRkQsQ0FBYjtVQUtPOztVQUFXOztVQUFVLE1BQ3RCQyxJQURzQixDQUNsQjtZQUNLLE1BQUxDLEtBQUssQ0FBQ0gsSUFBRCxFQUFlQyxRQUFmLEVBQStCO2NBQ3RDLElBQUlELElBQUksS0FBS0QsSUFBSSxDQUFDQyxJQUFkQSxJQUFzQkMsUUFBUSxLQUFLRixJQUFJLENBQUNFLFFBQTVDLEVBQXNEO2dCQUNsRCxPQUFPO2tCQUFDRyxNQUFNLEVBQUUsSUFBVDtrQkFBZUMsS0FBSyxFQUFFO2dCQUF0QixDQUFQO2NBQ0g7O2NBRUQsT0FBTztnQkFBQ0QsTUFBTSxFQUFFLElBQVQ7Z0JBQWVMLElBQUksRUFBRTtrQkFBQ08sS0FBSyxFQUFFO2dCQUFSO2NBQXJCLENBQVA7WUFDSDs7VUFQSyIsIm5hbWVzIjpbImRhdGEiLCJ1c2VyIiwicGFzc3dvcmQiLCJBdXRoIiwibG9naW4iLCJzdGF0dXMiLCJlcnJvciIsInZhbGlkIl0sInNvdXJjZVJvb3QiOiJFOlxcd29ya3NwYWNlXFxiZXlvbmRcXHByb2plY3RzLXRlc3RzXFxmZWxpeC8iLCJzb3VyY2VzIjpbIndlYi1iYWNrZW5kL21vZHVsZXMvYXV0aC9icmlkZ2UvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=
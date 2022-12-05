System.register(["@beyond-js/kernel@0.1.0/bundle"], function (_export, _context) {
    "use strict";

    var dependency_0, bimport, __Bundle, __pkg, ims, BD, __beyond_pkg, hmr;

    _export("BD", void 0);

    return {
        setters: [function (_beyondJsKernel010Bundle) {
            dependency_0 = _beyondJsKernel010Bundle;
        }],
        execute: function () {
            bimport = specifier => {
                const dependencies = new Map([["socket.io", "4.5.3"], ["socket.io-client", "4.5.3"], ["@beyond-js/backend", "0.1.0"], ["@beyond-js/local", "0.1.0"], ["@beyond-js/react-widgets", "18.20.2"], ["@tests/web-backend-app", "1.0.0"], ["@tests/web-backend-app", "1.0.0"]]);
                return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
            };

            ({
                Bundle: __Bundle
            } = dependency_0);
            __pkg = new __Bundle({
                "module": {
                    "vspecifier": "@tests/web-backend-app@1.0.0/bd"
                },
                "type": "ts"
            }, _context.meta.url).package();
            ;

            __pkg.dependencies.update([]);

            ims = new Map();
            /***********************
             INTERNAL MODULE: ./index
             ***********************/

            ims.set('./index', {
                hash: 1755056524,
                creator: function (require, exports) {
                    "use strict";

                    Object.defineProperty(exports, "__esModule", {
                        value: true
                    });
                    exports.BD = void 0;
                    const data = {
                        user: 'admin',
                        password: '123456.'
                    };
                    /*bundle*/

                    class BD {
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

                        test() {
                            return {
                                status: true,
                                message: 'OK'
                            };
                        }

                    }

                    exports.BD = BD;
                }
            });
            __pkg.exports.descriptor = [{
                "im": "./index",
                "from": "BD",
                "name": "BD"
            }];

            // Module exports
            __pkg.exports.process = function ({
                                                  require,
                                                  prop,
                                                  value
                                              }) {
                (require || prop === 'BD') && _export("BD", BD = require ? require('./index').BD : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxNQUFNQSxJQUFJLEdBQUc7WUFDVEMsSUFBSSxFQUFFLE9BREc7WUFFVEMsUUFBUSxFQUFFO1VBRkQsQ0FBYjtVQUtPOztVQUFVLE1BQ1hDLEVBRFcsQ0FDVDtZQUNPLE1BQUxDLEtBQUssQ0FBQ0gsSUFBRCxFQUFlQyxRQUFmLEVBQStCO2NBQ3RDLElBQUlELElBQUksS0FBS0QsSUFBSSxDQUFDQyxJQUFkQSxJQUFzQkMsUUFBUSxLQUFLRixJQUFJLENBQUNFLFFBQTVDLEVBQXNEO2dCQUNsRCxPQUFPO2tCQUFDRyxNQUFNLEVBQUUsSUFBVDtrQkFBZUMsS0FBSyxFQUFFO2dCQUF0QixDQUFQO2NBQ0g7O2NBQ0QsT0FBTztnQkFBQ0QsTUFBTSxFQUFFLElBQVQ7Z0JBQWVMLElBQUksRUFBRTtrQkFBQ08sS0FBSyxFQUFFO2dCQUFSO2NBQXJCLENBQVA7WUFDSDs7WUFFREMsSUFBSTtjQUNBLE9BQU87Z0JBQUNILE1BQU0sRUFBRSxJQUFUO2dCQUFlSSxPQUFPLEVBQUU7Y0FBeEIsQ0FBUDtZQUNIOztVQVZHIiwibmFtZXMiOlsiZGF0YSIsInVzZXIiLCJwYXNzd29yZCIsIkJEIiwibG9naW4iLCJzdGF0dXMiLCJlcnJvciIsInZhbGlkIiwidGVzdCIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbIndlYi1iYWNrZW5kL21vZHVsZXMvYmQvdHMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=
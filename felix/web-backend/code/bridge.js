define(["exports", "module", "@beyond-js/backend@0.1.0/client", "@beyond-js/kernel@0.1.0/bundle"], function (_exports, _amd_module, dependency_0, dependency_1) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.hmr = _exports.__beyond_pkg = _exports.Auth = void 0;

    const bimport = specifier => {
        const dependencies = new Map([["socket.io", "4.5.3"], ["socket.io-client", "4.5.3"], ["@beyond-js/backend", "0.1.0"], ["@beyond-js/local", "0.1.0"], ["@beyond-js/react-widgets", "18.20.2"], ["@tests/web-backend-app", "1.0.0"], ["@tests/web-backend-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
    };

    const {
        Bundle: __Bundle
    } = dependency_1;

    const __pkg = new __Bundle({
        "module": {
            "vspecifier": "@tests/web-backend-app@1.0.0/auth"
        },
        "type": "bridge"
    }, _amd_module.uri).package();

    ;

    __pkg.dependencies.update([['@beyond-js/backend/client', dependency_0]]);

    const {
        ActionsBridge
    } = brequire('@beyond-js/backend/client');
    const ims = new Map();
    /***********************
     INTERNAL MODULE: ./index
     ***********************/

    ims.set('./index', {
        hash: 3872605709,
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
    let Auth; // Module exports

    _exports.Auth = Auth;

    __pkg.exports.process = function ({
                                          require,
                                          prop,
                                          value
                                      }) {
        (require || prop === 'Auth') && (_exports.Auth = Auth = require ? require('./index').Auth : value);
    };

    const __beyond_pkg = __pkg;
    _exports.__beyond_pkg = __beyond_pkg;
    const hmr = new function () {
        this.on = (event, listener) => __pkg.hmr.on(event, listener);

        this.off = (event, listener) => __pkg.hmr.off(event, listener);
    }();
    _exports.hmr = hmr;

    __pkg.initialise(ims);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQUFBO01BRU87O01BQVk7OztNQUFVLE1BQU9BLElBQVAsU0FBb0JDLGFBQXBCLENBQWlDO1FBQy9DLE1BQUxDLEtBQUssQ0FBQ0MsSUFBRCxFQUFlQyxRQUFmLEVBQStCO1VBQ3RDLE9BQU8sTUFBTSxLQUFLQyxPQUFMLENBQWEsb0JBQWIsRUFBbUMsR0FBR0MsU0FBdEMsQ0FBYjtRQUNIOztRQUNEQztVQUNJLE1BQU0sU0FBTixFQUFpQkMsc0JBQWpCO1FBQ0g7O01BTnlEIiwibmFtZXMiOlsiQXV0aCIsIkFjdGlvbnNCcmlkZ2UiLCJsb2dpbiIsInVzZXIiLCJwYXNzd29yZCIsImV4ZWN1dGUiLCJhcmd1bWVudHMiLCJjb25zdHJ1Y3RvciIsImJ1bmRsZSJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsid2ViLWJhY2tlbmQvbW9kdWxlcy9hdXRoL2JyaWRnZS9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==
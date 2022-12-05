define(["exports", "module", "@beyond-js/kernel/bundle", "@tests/web-backend-app/auth", "@tests/web-backend-app/bd"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.hmr = _exports.__beyond_pkg = void 0;
    const {
        Bundle: __Bundle
    } = dependency_0;

    const __pkg = new __Bundle({
        "module": {
            "vspecifier": "@tests/web-backend-app@1.0.0/consumer"
        },
        "type": "ts"
    }, _amd_module.uri).package();

    ;

    __pkg.dependencies.update([['@tests/web-backend-app/auth', dependency_1], ['@tests/web-backend-app/bd', dependency_2]]);

    const ims = new Map();
    /***********************
     INTERNAL MODULE: ./index
     ***********************/

    ims.set('./index', {
        hash: 2961641168,
        creator: function (require, exports) {
            "use strict";

            var _auth = require("@tests/web-backend-app/auth");

            var _bd = require("@tests/web-backend-app/bd");

            console.log('hi consumer'); // Auth test

            var auth = new _auth.Auth();
            auth.login('admin', '123456.').then(r => console.log(r)); // BD test

            var bd = new _bd.BD();
            console.log(bd.test());
        }
    }); // Module exports

    __pkg.exports.process = function ({
                                          require,
                                          prop,
                                          value
                                      }) {};

    const __beyond_pkg = __pkg;
    _exports.__beyond_pkg = __beyond_pkg;
    const hmr = new function () {
        this.on = (event, listener) => __pkg.hmr.on(event, listener);

        this.off = (event, listener) => __pkg.hmr.off(event, listener);
    }();
    _exports.hmr = hmr;

    __pkg.initialise(ims);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFHQTs7TUFNQTs7TUFUQUEsT0FBTyxDQUFDQyxHQUFSRCxDQUFZLGFBQVpBLEdBRUE7O01BR0EsSUFBSUUsSUFBSSxHQUFHLElBQUlDLFVBQUosRUFBWDtNQUNBRCxJQUFJLENBQUNFLEtBQUxGLENBQVcsT0FBWEEsRUFBb0IsU0FBcEJBLEVBQStCRyxJQUEvQkgsQ0FBb0NJLENBQUMsSUFBSU4sT0FBTyxDQUFDQyxHQUFSRCxDQUFZTSxDQUFaTixDQUF6Q0UsR0FFQTs7TUFHQSxJQUFJSyxFQUFFLEdBQUcsSUFBSUMsTUFBSixFQUFUO01BQ0FSLE9BQU8sQ0FBQ0MsR0FBUkQsQ0FBWU8sRUFBRSxDQUFDRSxJQUFIRixFQUFaUCIsIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJhdXRoIiwiQXV0aCIsImxvZ2luIiwidGhlbiIsInIiLCJiZCIsIkJEIiwidGVzdCJdLCJzb3VyY2VSb290IjoiRTpcXHdvcmtzcGFjZVxcYmV5b25kXFxwcm9qZWN0cy10ZXN0c1xcZmVsaXgvIiwic291cmNlcyI6WyJ3ZWItYmFja2VuZC9tb2R1bGVzL2NvbnN1bWVyL3RzL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19
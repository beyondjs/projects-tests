define(["exports", "module", "@beyond-js/backend@0.1.0/client", "@beyond-js/kernel@0.1.1/bundle"], function (_exports, _amd_module, dependency_0, dependency_1) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.__beyond_pkg = _exports.Token = _exports.Session = _exports.Register = _exports.Password = _exports.Logout = _exports.Login = void 0;

  const bimport = specifier => {
    const dependencies = new Map([["socket.io", "4.5.3"], ["socket.io-client", "4.5.3"], ["framer-motion", "5.6.0"], ["moment", "2.29.4"], ["mysql2", "2.3.3"], ["node-sass", "7.0.3"], ["nodemailer", "6.8.0"], ["nodemailer-express-handlebars", "4.0.0"], ["path", "0.12.7"], ["prop-types", "15.8.1"], ["react-query", "3.39.2"], ["react-toastify", "8.2.0"], ["sequelize", "6.6.2"], ["swiper", "7.4.1"], ["tippy.js", "6.3.7"], ["twilio", "3.82.1"], ["v-wave", "1.5.0"], ["@beyond-js/local", "0.1.0"], ["@beyond-js/backend", "0.1.0"], ["@beyond-js/kernel", "0.1.1"], ["@beyond-js/widgets", "0.1.0"], ["@beyond-js/react-widgets", "18.20.1"], ["@app/mentora", "1.0.0"], ["@app/mentora", "1.0.0"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };

  const {
    Bundle: __Bundle
  } = dependency_1;

  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@app/mentora@1.0.0/auth",
      "multibundle": true
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
  INTERNAL MODULE: ./login
  ***********************/

  ims.set('./login', {
    hash: 612508742,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Login = void 0;

      var _beyond_context = require("beyond_context");
      /*actions*/

      /*bundle*/

      /**
       * The server actions
       */


      class Login extends ActionsBridge {
        async email(email, password) {
          return await this.execute("login//Login//email", ...arguments);
        }

        constructor() {
          super("backend", _beyond_context.bundle);
        }

      }

      exports.Login = Login;
    }
  });
  /************************
  INTERNAL MODULE: ./logout
  ************************/

  ims.set('./logout', {
    hash: 2217234153,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Logout = void 0;

      var _beyond_context = require("beyond_context");
      /*actions*/

      /*bundle*/

      /**
       * The server actions
       */


      class Logout extends ActionsBridge {
        async call(user_id, access_token) {
          return await this.execute("logout//Logout//call", ...arguments);
        }

        constructor() {
          super("backend", _beyond_context.bundle);
        }

      }

      exports.Logout = Logout;
    }
  });
  /**************************
  INTERNAL MODULE: ./password
  **************************/

  ims.set('./password', {
    hash: 4177436192,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Password = void 0;

      var _beyond_context = require("beyond_context");
      /*actions*/

      /*bundle*/

      /**
       * The server actions
       */


      class Password extends ActionsBridge {
        async set(user_id, password) {
          return await this.execute("password//Password//set", ...arguments);
        }

        constructor() {
          super("backend", _beyond_context.bundle);
        }

      }

      exports.Password = Password;
    }
  });
  /**************************
  INTERNAL MODULE: ./register
  **************************/

  ims.set('./register', {
    hash: 3403017024,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Register = void 0;

      var _beyond_context = require("beyond_context");
      /*actions*/

      /*bundle*/

      /**
       * The server actions
       */


      class Register extends ActionsBridge {
        async call(params) {
          return await this.execute("register//Register//call", ...arguments);
        }

        constructor() {
          super("backend", _beyond_context.bundle);
        }

      }

      exports.Register = Register;
    }
  });
  /*************************
  INTERNAL MODULE: ./session
  *************************/

  ims.set('./session', {
    hash: 544626721,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Session = void 0;

      var _beyond_context = require("beyond_context");
      /*actions*/

      /*bundle*/

      /**
       * The server actions
       */


      class Session extends ActionsBridge {
        async validate(user_id, access_token) {
          return await this.execute("session//Session//validate", ...arguments);
        }

        constructor() {
          super("backend", _beyond_context.bundle);
        }

      }

      exports.Session = Session;
    }
  });
  /***********************
  INTERNAL MODULE: ./token
  ***********************/

  ims.set('./token', {
    hash: 475817983,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Token = void 0;

      var _beyond_context = require("beyond_context");
      /*actions*/

      /*bundle*/

      /**
       * The server actions
       */


      class Token extends ActionsBridge {
        async validateUser(value, field) {
          return await this.execute("token//Token//validateUser", ...arguments);
        }

        async validateCode(code) {
          return await this.execute("token//Token//validateCode", ...arguments);
        }

        async generateCode(value, type, user) {
          return await this.execute("token//Token//generateCode", ...arguments);
        }

        async sendRegisterEmail(value, target) {
          return await this.execute("token//Token//sendRegisterEmail", ...arguments);
        }

        async sendRegisterSms(value, target) {
          return await this.execute("token//Token//sendRegisterSms", ...arguments);
        }

        async sendRecoverEmail(value, target) {
          return await this.execute("token//Token//sendRecoverEmail", ...arguments);
        }

        async sendRecoverSms(value, target) {
          return await this.execute("token//Token//sendRecoverSms", ...arguments);
        }

        async send(value, type) {
          return await this.execute("token//Token//send", ...arguments);
        }

        async query(code, step) {
          return await this.execute("token//Token//query", ...arguments);
        }

        async validate(code, step) {
          return await this.execute("token//Token//validate", ...arguments);
        }

        constructor() {
          super("backend", _beyond_context.bundle);
        }

      }

      exports.Token = Token;
    }
  });
  __pkg.exports.descriptor = [{
    "im": "./login",
    "from": "Login",
    "name": "Login"
  }, {
    "im": "./logout",
    "from": "Logout",
    "name": "Logout"
  }, {
    "im": "./password",
    "from": "Password",
    "name": "Password"
  }, {
    "im": "./register",
    "from": "Register",
    "name": "Register"
  }, {
    "im": "./session",
    "from": "Session",
    "name": "Session"
  }, {
    "im": "./token",
    "from": "Token",
    "name": "Token"
  }];
  let Login, Logout, Password, Register, Session, Token; // Module exports

  _exports.Token = Token;
  _exports.Session = Session;
  _exports.Register = Register;
  _exports.Password = Password;
  _exports.Logout = Logout;
  _exports.Login = Login;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'Login') && (_exports.Login = Login = require ? require('./login').Login : value);
    (require || prop === 'Logout') && (_exports.Logout = Logout = require ? require('./logout').Logout : value);
    (require || prop === 'Password') && (_exports.Password = Password = require ? require('./password').Password : value);
    (require || prop === 'Register') && (_exports.Register = Register = require ? require('./register').Register : value);
    (require || prop === 'Session') && (_exports.Session = Session = require ? require('./session').Session : value);
    (require || prop === 'Token') && (_exports.Token = Token = require ? require('./token').Token : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBZndCLGVBQWUsQ0FBQ1QsS0FBRCxFQUFRUSxNQUFSLEVBQWM7VUFDL0IsT0FBTyxNQUFNLEtBQUt4QixPQUFMLENBQWEsK0JBQWIsRUFBOEMsR0FBR0MsU0FBakQsQ0FBYjtRQUNIOztRQUNxQixNQUFoQnlCLGdCQUFnQixDQUFDVixLQUFELEVBQVFRLE1BQVIsRUFBYztVQUNoQyxPQUFPLE1BQU0sS0FBS3hCLE9BQUwsQ0FBYSxnQ0FBYixFQUErQyxHQUFHQyxTQUFsRCxDQUFiO1FBQ0g7O1FBQ21CLE1BQWQwQixjQUFjLENBQUNYLEtBQUQsRUFBUVEsTUFBUixFQUFjO1VBQzlCLE9BQU8sTUFBTSxLQUFLeEIsT0FBTCxDQUFhLDhCQUFiLEVBQTZDLEdBQUdDLFNBQWhELENBQWI7UUFDSDs7UUFDUyxNQUFKMkIsSUFBSSxDQUFDWixLQUFELEVBQWdCSyxJQUFoQixFQUE0QjtVQUNsQyxPQUFPLE1BQU0sS0FBS3JCLE9BQUwsQ0FBYSxvQkFBYixFQUFtQyxHQUFHQyxTQUF0QyxDQUFiO1FBQ0g7O1FBQ1UsTUFBTDRCLEtBQUssQ0FBQ1YsSUFBRCxFQUFlVyxJQUFmLEVBQTJCO1VBQ2xDLE9BQU8sTUFBTSxLQUFLOUIsT0FBTCxDQUFhLHFCQUFiLEVBQW9DLEdBQUdDLFNBQXZDLENBQWI7UUFDSDs7UUFDYSxNQUFSWSxRQUFRLENBQUNNLElBQUQsRUFBZVcsSUFBZixFQUEyQjtVQUNyQyxPQUFPLE1BQU0sS0FBSzlCLE9BQUwsQ0FBYSx3QkFBYixFQUF1QyxHQUFHQyxTQUExQyxDQUFiO1FBQ0g7O1FBQ0RDO1VBQ0ksTUFBTSxTQUFOLEVBQWlCQyxzQkFBakI7UUFDSDs7TUFqQzBEIiwibmFtZXMiOlsiTG9naW4iLCJBY3Rpb25zQnJpZGdlIiwiZW1haWwiLCJwYXNzd29yZCIsImV4ZWN1dGUiLCJhcmd1bWVudHMiLCJjb25zdHJ1Y3RvciIsImJ1bmRsZSIsIkxvZ291dCIsImNhbGwiLCJ1c2VyX2lkIiwiYWNjZXNzX3Rva2VuIiwiUGFzc3dvcmQiLCJzZXQiLCJSZWdpc3RlciIsInBhcmFtcyIsIlNlc3Npb24iLCJ2YWxpZGF0ZSIsIlRva2VuIiwidmFsaWRhdGVVc2VyIiwidmFsdWUiLCJmaWVsZCIsInZhbGlkYXRlQ29kZSIsImNvZGUiLCJnZW5lcmF0ZUNvZGUiLCJ0eXBlIiwidXNlciIsInNlbmRSZWdpc3RlckVtYWlsIiwidGFyZ2V0Iiwic2VuZFJlZ2lzdGVyU21zIiwic2VuZFJlY292ZXJFbWFpbCIsInNlbmRSZWNvdmVyU21zIiwic2VuZCIsInF1ZXJ5Iiwic3RlcCJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsibW9kdWxlcy9tb2RlbHMvYXV0aC9icmlkZ2UvbG9naW4udHMiLCJtb2R1bGVzL21vZGVscy9hdXRoL2JyaWRnZS9sb2dvdXQudHMiLCJtb2R1bGVzL21vZGVscy9hdXRoL2JyaWRnZS9wYXNzd29yZC50cyIsIm1vZHVsZXMvbW9kZWxzL2F1dGgvYnJpZGdlL3JlZ2lzdGVyLnRzIiwibW9kdWxlcy9tb2RlbHMvYXV0aC9icmlkZ2Uvc2Vzc2lvbi50cyIsIm1vZHVsZXMvbW9kZWxzL2F1dGgvYnJpZGdlL3Rva2VuLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdfQ==
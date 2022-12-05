define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    "package": "@app/mentora",
    "version": "1.0.0",
    "languages": {
      "default": "en",
      "supported": ["en", "es"]
    },
    "params": {
      "version": "0.0.40",
      "urlPolicies": "./policies.html",
      "marketiOS": "https://mentoraapp.jidadesarrollos.com/terms.html",
      "marketAndroid": "https://play.google.com/store/apps/details?id=com.santillana.mentoraapp",
      "disabledSubscription": true
    },
    "ssr": {},
    "backend": {
      "host": "https://ws.dev.backend.mentora.jidadesarrollos.com/xapp/xapp-app"
    }
  };
  _exports.default = _default;
});
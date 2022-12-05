System.register([], function (_export, _context) {
    "use strict";

    return {
        setters: [],
        execute: function () {
            _export("default", {
                "package": "@tests/code",
                "version": "1.0.0",
                "languages": {
                    "default": "en",
                    "supported": ["en", "es"]
                },
                "layout": "main-layout",
                "params": {},
                "ssr": {},
                "backend": {
                    "host": "https://ws.dev.backend.mentora.jidadesarrollos.com/xapp/xapp-app"
                }
            });
        }
    };
});
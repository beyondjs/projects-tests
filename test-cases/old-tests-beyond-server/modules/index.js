require('colors');
(async () => {
    console.log('starting...');

    const beyondProcess = await (require('../beyond-start.js'))();
    const {ipc} = global.utils;

    const name = `test-${Math.floor(Math.random() * 100)}`;
    const applicationPath = require('path').join(__dirname, './source/app');
    const applicationId = await ipc.exec('main', 'ids.path/generate', applicationPath);

    const procedure = 'builder/modules/create';
    const modules = {
        widget: {
            name: name,
            description: `Una descripcion de ejemplo para ${name}`,
            title: `Otro titulo de ejemplo`,
            developer: 'ftovar',
            id: 'prueba-ftovar',
            styles: true,
            element: {
                is: 'page',
                name: name,
                route: '/'
            },
            applicationId: applicationId,
            bundle: 'widget',
        },
        code: {
            test: true,
            name: name,
            description: `Una descripcion de ejemplo para ${name}`,
            title: `Un titulo de ejemplo`,
            developer: 'ftovar',
            id: 'prueba-ftovar',
            styles: true,
            server: true,

            applicationId: applicationId,
            bundle: 'code',

        },
        backend: {
            name: name,
            description: `Una descripcion de ejemplo para ${name}`,
            title: `Un titulo de ejemplo`,
            developer: 'ftovar',
            id: 'prueba-ftovar',
            applicationId: applicationId,
            bundle: 'backend'
        },
        static: {
            name: name,
            description: `Una descripcion de ejemplo para ${name}`,
            title: `Un titulo de ejemplo`,
            developer: 'ftovar',
            id: 'prueba-ftovar',
            applicationId: applicationId,
            bundle: 'static'
        },
        start: {
            name: name,
            description: `Una descripcion de ejemplo para ${name}`,
            title: `Un titulo de ejemplo`,
            developer: 'ftovar',
            id: 'prueba-ftovar',
            applicationId: applicationId,
            bundle: 'start'
        },
        layout: {
            test: true,
            name: name,
            description: `Una descripcion de ejemplo para ${name}`,
            title: `Un titulo de ejemplo`,
            developer: 'ftovar',
            id: 'prueba-ftovar',
            styles: true,
            server: true,
            applicationId: applicationId,
            bundle: 'layout',

        },
        page: {
            test: true,
            name: name,
            description: `Una descripcion de ejemplo para ${name}`,
            title: `Otro titulo de ejemplo`,
            developer: 'ftovar',
            id: 'prueba-ftovar',
            styles: true,
            route: '/',
            applicationId: applicationId,
            bundle: 'page'
        },
    }
    beyondProcess.send({
        type: 'exec',
        procedure: procedure,
        params: [modules.page]
    });

    console.log('finish...');
})();

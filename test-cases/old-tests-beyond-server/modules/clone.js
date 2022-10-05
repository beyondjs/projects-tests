require('colors');
(async () => {

    const beyondProcess = await (require('../beyond-start.js'))();
    const {ipc} = global.utils;

    const name = `test-${Math.floor(Math.random() * 100)}`;
    const applicationPath = require('path').join(__dirname, './source/app');

    const applicationId = await ipc.exec('main', 'ids.path/generate', applicationPath);
    const procedure = 'builder/modules/clone';
    console.log(`module : ${name} created`.yellow);
    beyondProcess.send({
        type: 'exec',
        procedure: procedure,
        params: [{
            test: true,
            name: name,
            template: 'server_page',
            description: `Una descripcion de ejemplo para ${name}`,
            title: `Un titulo de ejemplo`,
            developer: 'jrodriguez',
            id: 'prueba-1',
            styles: true,
            server: true,
            route: '/',
            applicationId: applicationId,
            multilanguage: true,
            processors: ['less', "scss"]
        }]
    });

})();

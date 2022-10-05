require('colors');
(async () => {

    const action = 'Editing modules...';
    console.log(`starting: ${action}`.green);

    const beyondProcess = await (require('../beyond-start.js'))();

    const {ipc} = global.utils;
    /**
     * Check always that the app folder is correct.
     * @type {string}
     */
    const applicationPath = require('path').join(__dirname, './source/app');
    const applicationId = await ipc.exec('main', 'ids.path/generate', applicationPath);

    const moduleId = `application//3308369333//module-to-edit`;
    // const module = await ipc.exec('main-client', 'applications/modules/data', [moduleId]);
    console.log(`editing module : ${moduleId}`);
    beyondProcess.send({
        type: 'exec',
        procedure: 'builder/modules/edit',
        params: [{
            applicationId: applicationId,

            bundles: {
                hmr: false,
                ts: {
                    transpile: false
                }
            },
            moduleId: moduleId,
            title: "Prueba de edicion..."
        }]
    });

})();

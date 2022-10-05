(async () => {

    const process = await (require('../beyond-start.js'))();
    const {ipc} = global.utils;
    const tplPath = await ipc.exec('main', 'templates');

    const applicationPath = require('path').join(__dirname, './source/app');
    const applicationId = await ipc.exec('main', 'ids.path/generate', applicationPath);

    const response = await process.send({
        type: 'exec',
        procedure: 'builder/application/edit',
        params: [{
            applicationId: applicationId,
            port: 3050,
            transpile: true,
            description: "alguna descripcion distinta 22",
            "libraries": [
                "plm",
                "graphs"
            ]
        }]
    });

})();

(async () => {
    const process = await (require('../beyond-start.js'))();

    const applicationPath = require('path').join(__dirname, './source/app');
    const applicationId = await global.utils.ipc.exec('main', 'ids.path/generate', applicationPath);

    const overwrites = [
        {
            module: 'test',
            bundle: 'page',
            processor: 'scss',
            path: 'test/editado',
            files: 'file-nuevo.scss'
        },
        {
            module: 'test',
            bundle: 'static',
            static: {
                "origen1": "destino"
            }
        }, {
            module: 'static-test',
            bundle: 'static',
            static: {
                "origen": "destino editado"
            }
        }
    ]

    const specs = {
        applicationId: applicationId,
        overwrites: overwrites
    }

    await process.send({
        type: 'exec',
        procedure: 'builder/template/update',
        params: [specs]
    });

    console.log('Finish test: builder/template/update');
})();
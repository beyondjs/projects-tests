(async () => {
    const process = await (require('../beyond-start.js'))();

    const applicationPath = require('path').join(__dirname, './source/app');
    const applicationId = await global.utils.ipc.exec('main', 'ids.path/generate', applicationPath);

    const overwrites = [
        {
            module: 'welcome',
            bundle: 'page',
            processor: 'scss',
            path: 'welcome/editado',
            files: {
                action: 'remove',
                item: 'file-nuevo.scss'
            }
        },
        {
            module: 'welcome',
            bundle: 'page',
            processor: 'scss',
            path: 'welcome/editado',
            files: 'file-nuevo-add.scss',
        },
        {
            module: 'welcome',
            bundle: 'txt',
            path: 'welcome/txt/editado',
            files: 'file-nuevo.json'
        },
    ]

    const specs = {
        applicationId: applicationId,
        application: {
            path: 'application/editado',
            files: 'file-nuevo.scss'
        },
        overwrites: overwrites,
        processors: [{
            processor: 'scss',
            path: 'processor/editado',
            files: 'file-nuevo.scss'
        }]
    }

    await process.send({
        type: 'exec',
        procedure: 'builder/template/update',
        params: [specs]
    });

    console.log('Finish test: builder/template/update');

})();

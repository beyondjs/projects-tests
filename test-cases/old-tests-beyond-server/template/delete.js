(async () => {
    const process = await (require('../beyond-start.js'))();

    const applicationPath = require('path').join(__dirname, './source/app');
    const applicationId = await global.utils.ipc.exec('main', 'ids.path/generate', applicationPath);

    const overwrites = [
        {
            module: 'welcome', bundle: 'page',
        },
        {
            module: 'welcome', bundle: 'txt'
        },
        {
            module: 'static-test', bundle: 'static'
        }
    ]

    const specs = {
        applicationId: applicationId,
        overwrites: overwrites
    }

    await process.send({
        type: 'exec',
        procedure: 'builder/template/delete',
        params: [specs]
    });

    console.log('Finish test: builder/template/delete');

})();

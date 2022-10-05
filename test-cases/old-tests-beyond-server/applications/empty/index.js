(async () => {
    const process = await (require('../../beyond-start.js'))();
    const {ipc} = global.utils;
    await ipc.exec('main', 'templates');

    await process.send({
        type: 'exec',
        procedure: 'builder/application/create',
        params: [{
            name: 'empty-app',
            port: 4040,
            type: 'empty'
        }]
    });
})();

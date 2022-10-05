(() => {
    require('../../../lib/global');
    console.log('starting...');
    const WD = '../../../../../../../applications/builder-test';
    const route = '../../../lib/dashboard/libraries/dashboard/service/builder/';
    const {Server, Application} = (require(`${route}/models`));

    const dataApp = {
        name: 'prueba',
        title: 'Prueba',
        version: '1'
    };
    const app = new Application(WD, dataApp)
    const server = new Server(WD);

    app.create();
    server.save();

})();
(async () => {
    require('../../../lib/global');
    console.log('starting...');

    const WD = '../../../applications/prueba';
    const route = '../../../lib/dashboard/libraries/dashboard/service/builder/';
    const {Server, Application} = (require(`${route}/models`));
    const fs = global.utils.fs;
    const name = `app-${Math.floor(Math.random() * 100).toString()}`;
    const applicationPath = require('path').join(WD, name);
    await fs.copy(`${route}/templates/empty`, applicationPath);
    const app = new Application(applicationPath);

    app.save({
        name: 'App de prueba',
        description: 'Somos nosostros causa'
    });

    console.log(`app created: ${name}`);

})();
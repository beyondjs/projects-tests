(() => {
    require('../../../lib/global');
    console.log('starting...');

    const WD = '../../../../../../../applications/builder-test';
    const route = '../../../lib/dashboard/libraries/dashboard/service/builder/';
    const {Module, Application} = (require(`${route}/models`));

    const specs = {
        bundle: 'code',
        name: 'code test',
        developer: 'ftovar',
        multilanguage: true,
        server: true,
        processors: ['scss']
    };

    const app = new Application(WD);

    const module = new Module(WD, specs);

    module.create();

    console.log('finish build bundle...');
})();
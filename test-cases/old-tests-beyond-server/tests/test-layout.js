(() => {
    require('../../../lib/global');
    console.log('starting...');

    const WD = '../../../../../../../applications/builder-test';
    const route = '../../../lib/dashboard/libraries/dashboard/service/builder/';
    const {Module, Application} = (require(`${route}/models`));

    const specs = {
        bundle: 'layout',
        name: 'main',
        id: 'main',
        developer: 'ftovar',
        processors: ['scss']
    };

    const app = new Application(WD);

    const module = new Module(WD, specs);

    module.create();

    console.log('finish build bundle...');
})();
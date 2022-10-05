require('colors');
const path = '../../../../lib/dashboard/libraries/dashboard/service/builder/models';
(async () => {
    require('../../../../lib/global');
    /**
     * Instance the template objects with a path
     */
    require(`${path}/templates`).get('../../../../lib/templates');
    const {Project, Module} = require(`${path}`);
    const wd = require('path').join(process.cwd(), 'app');
    const project = new Project(wd);
    /**
     * Parameters required to create a Module
     * @type {{route: string, name: string, processors: *[], title: string, bundle: string}}
     */
    const name = `test-${Math.floor(Math.random() * 100)}`;
    const specs = {
        name,
        route: '/test',
        title: 'Test',
        bundles: ["page"],
        processors: ['ts']
    };

    console.log(`creating`.blue, `${name}`.bgBlack, 'module'.blue);
    const module = new Module(project.modulesPath, specs.name);
    try {
        /**
         * Es necesario cargar el módulo aunque no exista.
         */
        await module.load();
        if (module.exists) {
            return console.log('the module already exists'.red);
        }

        await module.create(specs);
        console.log(`module ${name}`.green, 'created!'.green);
    }
    catch (e) {
        console.error(e);
    }
})();

const path = '../../../../lib/dashboard/libraries/dashboard/service/builder/models';
(async () => {
    require('../../../../lib/global');
    /**
     * Instance the template objects with a path
     *
     * title en los module json NO.
     * /[az]-[az]/g
     */
    require(`${path}/templates`).get('../../../../lib/templates');
    const {Project, Module} = require(`${path}`);
    const wd = require('path').join(process.cwd(), 'app');
    const project = new Project(wd);
    /**
     * Parameters required to create a Module
     * @type {{route: string, name: string, processors: *[], title: string, bundle: string}}
     */
    const name = `module-to-edit`;
    const module = new Module(project.modulesPath, name);
    await module.load();

    module.bundles.add("page");
    await module.save({
        widget: {is: 'page'},
        start: {processors: ["ts"]},
        ts: {processors: ["ts"]}
    });
    console.log("ready");

})();

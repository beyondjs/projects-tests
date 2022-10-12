(async () => {

    try {

        const {Project, Module} = require('../imports');

        const wd = require('path').join(process.cwd(), 'app');
        const project = new Project(wd);
        await project.load();
        console.log(200, project.modulesPath)
        /**
         * Parameters required to create a Module
         * @type {{route: string, name: string, processors: *[], title: string, bundle: string}}
         */
        const name = `module-to-edit`;
        const module = new Module(project.modulesPath, name);
        await module.load();

        // module.bundles.add("page");
        const response = await module.save({
            widget: {is: 'layout'},
            start: {processors: ["ts"]},
            ts: {processors: ["ts"]},
            platforms: [{}, "android"]
        });
        console.log("ready", project.modulesPath);

    }
    catch (e) {
        console.error(e);
    }

})();

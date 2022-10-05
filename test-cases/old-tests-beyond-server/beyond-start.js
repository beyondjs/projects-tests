module.exports = async function () {
    const instances = require('../../lib');
    await instances.ready;
    const dsServices = instances.dashboard.server.services.libraries;
    await dsServices.ready;

    const promises = [];
    dsServices.forEach(service => promises.push(service.ready));
    await Promise.all(promises);

    let id;
    dsServices.forEach((service, key) => id = service.name === 'beyond-dashboard' ? key : id);
    const service = dsServices.get(id);

    //wait to beyond server is ready
    await service.ready;

    //wait to applications ready
    await global.utils.ipc.exec('main-client', 'applications/ready');
    await service.start();

    return service.process.process;
}

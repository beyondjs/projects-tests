import bee from '@beyond-js/bee';

(async () => {
    try {
        bee('http://localhost:8080', {inspect: 4000});
    }
    catch (e) {
        console.error(e);
    }
})();

let devServer = 1010, appPort = 2020;

const {local} = await import('@beyond-js/local/main');
local.register(devServer, appPort);


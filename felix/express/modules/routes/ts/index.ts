import {server} from '@tests/express-app/server';

console.log(1, server)

export/*bundle*/ function routes(app) {
    app.get('/', (req, res) => {
        res.send('Express page with BeyondJS ')
    });
}
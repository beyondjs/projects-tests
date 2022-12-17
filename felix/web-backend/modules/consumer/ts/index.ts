console.log('hi consumer');

// Auth test
import {Auth} from '@tests/web-backend-app/auth';

var auth = new Auth();
auth.login('admin', '123456.').then(r => console.log(r));

// BD test
import {BD} from '@tests/web-backend-app/bd';

var bd = new BD();
console.log(bd.test());
const bee = require('../../../@beyond-js/bee');

bee('http://localhost:8890', {inspect: 4000});
bimport('/start').catch(e => console.log(e.stack));

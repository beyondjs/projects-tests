const bee = require('../../../@beyond-js/bee');

bee('http://localhost:9090', {inspect: 4000});
bimport('/start').catch(e => console.log(e.stack));

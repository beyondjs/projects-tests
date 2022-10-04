const {Bundle, TxtBundle, Transversal} = require('beyond/bundler-helpers');

module.exports = [{
    name: 'txt-menu',
    extname: ['.js'],
    multilanguage: true,
    bundle: {
        processors: ['txt'],
        Bundle: TxtBundle,
        template: true
    },
    transversal: {
        Transversal: Transversal,
    }
}, {
    name: 'txt-start',
    extname: ['.js'],
    bundle: {
        processors: ['ts'],
        Bundle: Bundle
    },
    transversal: {
        Transversal: Transversal,
    }
}];

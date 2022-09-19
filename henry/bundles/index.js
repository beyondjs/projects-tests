module.exports = [{
    name: 'txt-menu',
    extname: ['.js'],
    multilanguage: true,
    bundle: {
        processors: ['txt'],
        Bundle: global.TxtBundle,
        template: true
    },
    transversal: {
        Transversal: global.Transversal,
    }
}, {
    name: 'txt-start',
    extname: ['.js'],
    bundle: {
        processors: ['ts'],
        Bundle: global.Bundle
    },
    transversal: {
        Transversal: global.Transversal,
    }
}];

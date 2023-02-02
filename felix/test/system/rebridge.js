define([], function () {
    return new class {
        async execute(module, ...params) {
            if (module === 'login') {
                const {Auth} = await System.import('@tests/code/auth');
                const auth = new Auth();
                return auth.login(...params);
            }
            throw new Error('Not found');
        }
    };
});
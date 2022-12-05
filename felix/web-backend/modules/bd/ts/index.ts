const data = {
    user: 'admin',
    password: '123456.'
}

export /*bundle*/
class BD {
    async login(user: string, password: string) {
        if (user !== data.user || password !== data.password) {
            return {status: true, error: 'Invalid data'};
        }
        return {status: true, data: {valid: true}}
    }

    test() {
        return {status: true, message: 'OK'};
    }
}

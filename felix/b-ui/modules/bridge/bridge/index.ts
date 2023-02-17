export /*actions*/ /*bundle*/
class AuthBridge {
    async login(params) {
        console.log('bridge', params)
        return {msg: 'logged'};
    }
}

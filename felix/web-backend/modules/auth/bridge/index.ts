import {BD} from "@tests/web-backend-app/bd";

export /*actions*//*bundle*/
class Auth {
    #bd;

    constructor() {
        console.log('constructor ')
        this.#bd = new BD();
    }

    async login(user: string, password: string) {
        console.log('login method')
        return this.#bd.login(user, password);
    }

    test() {
        console.log('test method')
    }
}
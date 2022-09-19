import {StaticProvider} from "@test/testing-app/static-provider";

/**
 * The server actions
 */
export /*actions*/ /*bundle*/
class Users {
    provider = new StaticProvider();

    get(id: number) {
        return this.provider.get(id);
    }

    list() {
        return this.provider.list();
    }
}
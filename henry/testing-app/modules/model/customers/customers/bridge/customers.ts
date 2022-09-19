import {Provider} from "@test/testing-app/provider";

/**
 * The server actions
 */
export /*actions*/ /*bundle*/
class Customers {
    provider;

    constructor() {
        this.provider = new Provider();
    }

    get(id: number) {
        return this.provider.get(id);
    }

    list() {
        return this.provider.get();
    }
}

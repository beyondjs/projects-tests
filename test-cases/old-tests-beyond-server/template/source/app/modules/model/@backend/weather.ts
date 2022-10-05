import {ActionsBridge} from '@libraries/beyond/core/ts'
import {module} from '@dependencies/bundle'

/**
 * The server actions
 */
export /*actions*/ /*bundle*/
class Weather extends ActionsBridge {
    async temperature(city: string): Promise<string> {
        return await this.execute("//Weather//temperature", ...arguments);
    }

    constructor() {
        super(module);
    }
}

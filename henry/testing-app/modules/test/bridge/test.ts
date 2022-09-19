import {City} from "@test/testing-app/weather/backend";

/**
 * The server actions
 */
export /*actions*/ /*bundle*/
class Test {
    information(error: boolean): string {
        return error ? 'Im error message' : 'Im  message';
    }

    getImports() {
        console.log('Test imports:', City);
        return City;
    }
}

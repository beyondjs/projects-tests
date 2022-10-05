import {config} from "beyond_core/config";

/**
 * The server actions
 */
export /*actions*/ /*bundle*/
class Weather {

    temperature(city: string): string {
        return `103 ${config.degreesMetric} degrees at ${city}`;
    }

    celcius(): string {
        return "50 aweefsefef";
    }

    prueba(): string {
        return "si es prueba 12";
    }

}

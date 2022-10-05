import {Weather} from "@backend/weather";

export /*bundle*/
class City {
    readonly #name;
    readonly #weather = new Weather();

    #temperature;
    get temperature() {
        return this.#temperature;
    }

    /**
     * City constructor
     *
     * @param name {string} The city name
     */
    constructor(name) {
        this.#name = name;
    }

    async initialise() {
        this.#temperature = await this.#weather.temperature(this.#name);
        console.log('response', this.#temperature, this.#weather, 11);
    }
}

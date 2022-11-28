import {Events} from '@beyond-js/kernel/core';
import {IWidgetStore} from '@beyond-js/widgets/controller';

interface IValue {
    count: number
}

export /*bundle*/
class Store extends Events implements IWidgetStore {
    #loading = false;
    get loading() {
        return this.#loading;
    }

    #loaded = false;
    get loaded() {
        return this.#loaded;
    }

    #value: IValue = {count: 0};
    get value() {
        return this.#value;
    }

    #hydrated = false;
    get hydrated() {
        return this.#hydrated;
    }

    set(value: number) {
        this.#value.count = value;
        this.trigger('change');
        console.log('SET',this.#value)
        this.hydrate();
    }

    async fetch() {
        console.log(`fetch: ${this.#loaded}`);
        this.#loading = true;
        this.trigger('change');

        this.#value.count = 1;

        this.#loading = false;
        this.#loaded = true;
        this.trigger('change');
        console.log(`fetch: ${this.#loaded}`, this.#value);
    }

    hydrate(cached: IValue) {
        console.log('hydrate', cached)
        this.#loading = false;
        this.#loaded = true;
        if (!cached) return;
        this.#value.count = cached.count;
        this.#hydrated = true;
    }

    toJSON() {
        console.log('toJSON', this.#value)
        return this.#value;
    }
}
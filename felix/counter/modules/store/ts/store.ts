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
        this.#value.count = value + 1;
        this.trigger('change');
    }

    async fetch() {
        this.#loading = true;
        this.trigger('change');

        this.#value.count = 1;

        this.#loading = false;
        this.#loaded = true;
        this.trigger('change');

        console.log('store fetch')
    }

    hydrate(cached: IValue) {
        this.#loading = false;
        this.#loaded = true;
        if (!cached) return;
        this.#value.count = cached.count;
        this.#hydrated = true;
    }

    toJSON() {
        return this.#value;
    }
}
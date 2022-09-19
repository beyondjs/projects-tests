import {Events} from '@beyond-js/kernel/core';
import {IWidgetStore} from '@beyond-js/widgets/controller';

interface ICompany {
    id: number;
    name: string;
}

export /*bundle*/
class Companies extends Events implements IWidgetStore {
    #loading = false;
    get loading() {
        return this.#loading;
    }

    #loaded = false;
    get loaded() {
        return this.#loaded;
    }

    #value: ICompany[] = [];
    get value() {
        return this.#value;
    }

    #hydrated = false;
    get hydrated() {
        return this.#hydrated;
    }

    async fetch() {
        this.#loading = true;
        this.trigger('change');
        // await new Promise(resolve => setTimeout(resolve, 4000));

        this.#value.length = 0;
        this.#value.push({id: 1, name: 'Pepsi'});
        this.#value.push({id: 2, name: 'Coca Cola'});

        console.log('fetch')

        this.#loading = false;
        this.#loaded = true;
        this.trigger('change');
    }

    hydrate(cached: ICompany[]) {
        console.trace('hydrate')
        this.#loading = false;
        this.#loaded = true;
        cached.forEach(company => this.#value.push(company));
        this.#hydrated = true;
    }

    toJSON() {
        console.log('toJSON', this.#value)
        return this.#value;
    }
}

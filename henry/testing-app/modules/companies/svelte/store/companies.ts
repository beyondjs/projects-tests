import {writable, get} from 'svelte/store';
import type {IWidgetStore} from '@beyond-js/widgets/controller';

interface ICompany {
    id: number;
    name: string;
}

interface IStoreValue {
    loading: boolean;
    loaded: boolean;
    value: ICompany[];
    hydrated: boolean;
}

export /* bundle */
const companies: IWidgetStore = (() => {
    const value: IStoreValue = {
        loading: false,
        loaded: false,
        value: [],
        hydrated: false
    };
    const {subscribe, update} = writable(value);

    async function fetch() {
        update((previous: IStoreValue) => {
            previous.loading = true;
            return previous;
        });

        // await new Promise(resolve => setTimeout(resolve, 4000));

        update((previous: IStoreValue) => {
            previous.value = [];
            previous.value.push({id: 1, name: 'Pepsi'});
            previous.value.push({id: 2, name: 'Coca Cola'});

            previous.loading = false;
            previous.loaded = true;
            return previous;
        });
    }

    function hydrate(cached: ICompany[]) {
        update((previous: IStoreValue) => {
            previous.loading = false;
            previous.loaded = true;
            cached.forEach(company => previous.value.push(company));
            previous.hydrated = true;
            return previous;
        });
    }

    function toJSON(): object {
        const stored: IStoreValue = get(this);
        return stored.value;
    }

    return {subscribe, fetch, hydrate, toJSON};
})();

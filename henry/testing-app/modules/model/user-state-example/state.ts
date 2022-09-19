interface IUser {
    name: string;
    lastname: string;
}

export class State {
    #state: Partial<IUser> = {};
    get state() {
        return this.#state;
    }

    set name(value: string) {
        this.#state.name = value;
    }

    set lastname(value: string) {
        this.#state.lastname = value;
    }
}

import {languages, Events} from '@beyond-js/kernel/core';
import type {Texts} from '@beyond-js/kernel/texts';
import type {Menu} from "./menu";
import type {IMenu, MenuLanguage, MenuItemTexts, route} from "./menu-language";

export class CurrentLanguageMenu extends Events implements IMenu {
    readonly #menu: Menu;

    #enabled = false;
    get enabled() {
        return this.#enabled;
    }

    set enabled(value) {
        this.#enabled = !!value;
        value && this.fetch().catch(exc => console.error(exc.stack));
    }

    #last: MenuLanguage;

    get #current(): MenuLanguage {
        return this.#menu.get(languages.current);
    }

    get items(): Map<route, Texts<MenuItemTexts>> {
        return this.#current.items;
    }

    get error(): string {
        return this.#current.error;
    }

    get loading(): boolean {
        return this.#current.loading;
    }

    get loaded(): boolean {
        return this.#current.loaded;
    }

    constructor(menu: Menu) {
        super();
        this.#menu = menu;

        languages.on('change', this.#change);

        this.#current.on('change', this.#triggerChange);
        this.#last = this.#current;
    }

    #triggerChange = () => {
        this.trigger('change');
    }

    #change = () => {
        this.#last.off('change', this.#triggerChange);

        this.#enabled && this.fetch().catch(exc => console.log(exc.stack));
        this.#current.on('change', this.#triggerChange);
        this.#last = this.#current;

        this.#triggerChange();
    }

    async fetch() {
        await this.#current.fetch();
    }

    async hydrate() {
        await this.#current.fetch();
    }

    toJSON() {
        return {};
    }
}

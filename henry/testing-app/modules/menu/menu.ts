import {Module} from '@beyond-js/kernel/bundle';
import {route, MenuItemTexts, MenuLanguage} from "./menu-language";
import {CurrentLanguageMenu} from "./current";

export /*bundle*/
interface MenuSpecs<MenuItemTexts> {
    void: MenuItemTexts // Just to force type checking
    module: Module
}

export class Menu {
    readonly #items: Map<route, MenuSpecs<MenuItemTexts>> = new Map();
    get items() {
        return this.#items;
    }

    readonly #languages: Map<string, MenuLanguage> = new Map();

    readonly #current: CurrentLanguageMenu;
    get current() {
        return this.#current;
    }

    constructor() {
        this.#current = new CurrentLanguageMenu(this);
    }

    set(route: string, specs: MenuSpecs<MenuItemTexts>) {
        this.#items.set(route, specs);
    }

    get(language: string) {
        if (this.#languages.has(language)) return this.#languages.get(language);

        const texts = new MenuLanguage(this, language);
        this.#languages.set(language, texts);
        return texts;
    }
}

export /*bundle*/ const menu = new Menu();

import type {Menu, MenuSpecs} from "./menu";
import {Events, SingleCall} from '@beyond-js/kernel/core';
import {Texts} from '@beyond-js/kernel/texts';
import type {IWidgetStore} from '@beyond-js/widgets/controller';

export type route = string;
export type MenuItemTexts = { title: string };

export /*bundle*/
interface IMenu extends Events, IWidgetStore {
    items: Map<route, Texts<MenuItemTexts>>,
    error: string,
    loading: boolean,
    loaded: boolean
}

export class MenuLanguage extends Events implements IMenu {
    readonly #menu: Menu;
    readonly #language: string;

    readonly #items: Map<route, Texts<MenuItemTexts>> = new Map();
    get items() {
        return this.#items;
    }

    #error: string;
    get error() {
        return this.#error;
    }

    #loading = false;
    get loading() {
        return this.#loading;
    }

    #loaded = false;
    get loaded() {
        return this.#loaded;
    }

    #warnings: string[] = [];
    get warnings() {
        return this.#warnings;
    }

    constructor(menu: Menu, language: string) {
        super();
        this.#menu = menu;
        this.#language = language;
    }

    #timer: number;

    #triggerChange = () => {
        if (this.#timer) return;
        this.#timer = window.setTimeout(() => {
            this.#timer = void 0;
            this.trigger('change');
        }, 0);
    }

    @SingleCall
    async fetch() {
        if (this.#loaded || this.#loading) return;
        this.#loading = true;
        this.trigger('change');

        const promises: Promise<void>[] = [];
        this.#menu.items.forEach((specs: MenuSpecs<any>, route: string) => {
            const transversal = 'txt-menu';
            const language = this.#language;

            const {specifier} = specs.module;
            const texts: Texts<MenuItemTexts> = new Texts(specifier, {transversal, language});
            promises.push(texts.load());

            this.#items.set(route, texts);
        });

        try {
            await Promise.all(promises);
            this.#items.forEach(texts => texts.on('change', this.#triggerChange));
        } catch (exc) {
            console.log(exc.stack);
            this.#error = exc.message;
        } finally {
            this.#loading = false;
            this.#loaded = true;
            this.trigger('change');
        }
    }

    async hydrate() {
        await this.fetch();
    }

    toJSON() {
        return {};
    }
}

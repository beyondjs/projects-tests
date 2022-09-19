import {module} from "beyond_context";
import {menu, MenuSpecs} from "@test/testing-app/menu";
import type {txt} from "@test/testing-app/welcome-vue.txt-menu";

const specs: MenuSpecs<typeof txt> = {module};
menu.set('/welcome-vue', specs);

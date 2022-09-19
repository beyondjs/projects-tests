import {ReactWidgetController} from '@beyond-js/react-widgets/base';
import {menu} from "@test/testing-app/menu";
import Menu from './menu';

export /*bundle*/
class Controller extends ReactWidgetController {
    get Widget() {
        return Menu;
    }

    createStore(language: string) {
        if (typeof window === 'object') return menu.current;
        return menu.get(language);
    }
}

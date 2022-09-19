import {PageReactWidgetController} from '@beyond-js/react-widgets/page';
import {Widget} from "./page";

export /*bundle*/
class Controller extends PageReactWidgetController {
    get Widget() {
        return Widget;
    }

    show() {
        console.log('import-backend page show method called');
    }

    hide() {
        console.log('import-backend page hide method called');
    }
}

import {ReactWidgetController} from '@beyond-js/react-widgets/base';
import {Widget} from './page';

export /*bundle*/
class Controller extends ReactWidgetController {
    get Widget() {
        return Widget;
    }

    show() {
        console.log('welcome page show method called');
    }

    hide() {
        console.log('welcome page hide method called');
    }
}

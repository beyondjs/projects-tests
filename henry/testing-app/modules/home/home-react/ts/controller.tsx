import {PageReactWidgetController} from '@beyond-js/react-widgets/page';
import Page from './page';

export /*bundle*/
class Controller extends PageReactWidgetController {
    get Widget() {
        return Page;
    }

    show() {
        console.log('home page show method called.');
    }

    hide() {
        console.log('home page hide method called');
    }
}
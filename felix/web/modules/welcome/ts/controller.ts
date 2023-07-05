import {PageReactWidgetController} from '@beyond-js/react-18-widgets/page';
import {Page} from "./views";

// console.log('welcome')

export /*bundle*/
class Controller extends PageReactWidgetController {
    get Widget() {
        return Page;
    }
}
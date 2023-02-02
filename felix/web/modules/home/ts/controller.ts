import {PageReactWidgetController} from '@beyond-js/react-18-widgets/page';
import {Page} from "./views";
import {routing} from '@beyond-js/kernel/routing';

console.log(1, routing)


export /*bundle*/
class Controller extends PageReactWidgetController {
    get Widget() {
        return Page;
    }
}
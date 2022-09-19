import {PageReactWidgetController} from '@beyond-js/react-widgets/page';
import {Page} from "./page";

export /*bundle*/
class Controller extends PageReactWidgetController {
    get Widget() {
        return Page;
    }
}
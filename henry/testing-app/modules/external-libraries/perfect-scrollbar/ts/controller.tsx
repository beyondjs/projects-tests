import {PageReactWidgetController} from '@beyond-js/react-widgets/controller';
import {Page} from "./page";

export /*bundle*/
class Controller extends PageReactWidgetController {
    get Widget() {
        return Page;
    }
}
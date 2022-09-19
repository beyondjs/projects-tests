import {PageReactWidgetController} from '@beyond-js/react-widgets/base';
import {View} from "./views";

export /*bundle*/
class Controller extends PageReactWidgetController {
    get Widget() {
        return View;
    }
}
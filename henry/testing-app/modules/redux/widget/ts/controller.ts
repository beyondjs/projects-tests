import {PageReactWidgetController} from '@beyond-js/react-widgets/page';
import {module} from "beyond_context";

export /*bundle*/
class Controller extends PageReactWidgetController {
    async fetch() {
        await module.texts.load();
    }
}

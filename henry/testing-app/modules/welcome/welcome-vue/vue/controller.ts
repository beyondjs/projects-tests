import {VueWidgetController} from '@beyond-js/kernel/vue-widget';
import Widget from "./page.vue";

export /*bundle*/
class Controller extends VueWidgetController {
    get Widget() {
        return Widget;
    }
}

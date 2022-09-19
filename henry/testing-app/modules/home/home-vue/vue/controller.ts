import {VueWidgetController} from '@beyond-js/kernel/vue-widget';

export /*bundle*/
class Controller extends VueWidgetController {
    get Widget() {
        return require('./widget').default;
    }
}

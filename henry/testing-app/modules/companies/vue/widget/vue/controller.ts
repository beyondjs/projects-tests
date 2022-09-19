import {PageVueWidgetController} from '@beyond-js/vue-widgets/page';
// import type {IWidgetStore} from '@beyond-js/widgets/controller';
// import {Companies} from '@test/testing-app/companies-vue';
import Widget from './Widget.vue';

export /*bundle*/
class Controller extends PageVueWidgetController {
    get Widget() {
        return Widget;
    }

    // createStore(): IWidgetStore {
    //     return new Companies();
    // }
}

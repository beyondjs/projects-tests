import {ReactWidgetController} from '@beyond-js/react-widgets/base';
import {IWidgetStore} from '@beyond-js/widgets/controller';
import {Store} from '@beyond-test/counter/store-entries';
import {Widget} from "./views";

export /*bundle*/
class Controller extends ReactWidgetController {
    get Widget() {
        return Widget;
    }

    createStore(): IWidgetStore {
        return new Store();
    }
}

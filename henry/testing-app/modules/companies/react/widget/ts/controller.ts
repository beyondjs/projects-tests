import {IWidgetStore} from '@beyond-js/widgets/controller';
import {PageReactWidgetController} from '@beyond-js/react-widgets/page';
import {Companies} from '@test/testing-app/companies-react.store';
import Page from './page';

export /*bundle*/
class Controller extends PageReactWidgetController {
    get Widget() {
        return Page;
    }

    createStore(): IWidgetStore {
        return new Companies();
    }
}

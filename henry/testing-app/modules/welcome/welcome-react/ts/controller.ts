import {PageReactWidgetController} from '@beyond-js/react-widgets/page';
import {CurrentTexts, Texts} from '@beyond-js/kernel/texts';
import {module} from 'beyond_context';
import Page from './page';

export /*bundle*/
class Controller extends PageReactWidgetController {
    get Widget() {
        return Page;
    }

    createStore(language) {
        const {resource} = module;
        return language ? new Texts<any>(resource, 'txt', language) : new CurrentTexts(resource);
    }
}

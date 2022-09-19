import {PageSvelteWidgetController} from '@beyond-js/svelte-widgets/page';
import {companies} from '@test/testing-app/companies-svelte.store';

export /*bundle*/
class Controller extends PageSvelteWidgetController {
    get Widget() {
        return require('./widget.svelte').default;
    }

    createStore() {
        return companies;
    }
}

import {PageReactWidgetController} from '@beyond-js/react-widgets/page';
import {Page} from "./views";

console.log('login')
localStorage.setItem('session', 'true')

export /*bundle*/
class Controller extends PageReactWidgetController {
    get Widget() {
        return Page;
    }
}
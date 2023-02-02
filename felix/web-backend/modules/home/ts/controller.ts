import {PageReactWidgetController} from '@beyond-js/react-18-widgets/page';
import {View} from "./views";
import * as bundle from '@beyond-js/kernel/bundle';

console.log(12, bundle)
// import * as ctrl from '@beyond-js/widgets/controller';
// console.log(13,ctrl)

export /*bundle*/
class Controller extends PageReactWidgetController {
    get Widget() {
        return View;
    }
}
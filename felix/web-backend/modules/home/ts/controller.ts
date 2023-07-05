import {PageReactWidgetController} from '@beyond-js/react-18-widgets/page';
import {View} from "./views";
// import {Bundle} from '@beyond-js/kernel/bundle';
// console.log(12, Bundle.bundle)
// const b = new bundle.Bundle();

// import * as ctrl from '@beyond-js/widgets/controller';
// console.log(13,ctrl)

/**
 * event controller
 */
// import {YourClass} from "./t";
// const c = new YourClass();
// console.log('YourClass', YourClass)
// console.log('c', c)
// c.on('funny.event', () => console.log('funny.event fired'))
// c.funny();

// import b from '@beyond-js/kernel/bundle';
// console.log(12345, b)

export /*bundle*/
class Controller extends PageReactWidgetController {
    get Widget() {
        return View;
    }
}
import {ReactWidgetController} from '@beyond-js/react-widgets/base';

export /*bundle*/
class Controller extends ReactWidgetController {
    constructor(...props) {
        super(...props);
        window.asd = this.component;
    }
}
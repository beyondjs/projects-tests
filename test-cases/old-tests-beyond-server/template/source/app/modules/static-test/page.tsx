import {PageComponent} from "beyond_libraries/beyond/routing/ts";
import {bundle} from "beyond_context";
import {Control} from "./control";

export /*bundle*/
class Page extends PageComponent {

    constructor(props: any) {
        super(props, bundle, Control);
        this.container.id = 'page';
    }
}

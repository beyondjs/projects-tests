import {PageComponent} from "beyond_libraries/beyond/routing/ts";
import {bundle} from "beyond_context";
import {Control} from "./control";

export /*bundle*/
class Page extends PageComponent {
    // #dynamic = async () => {
    //     const {x} = await import('beyond_modules/example/dynamic/ts');
    //     console.log(`dynamic import, x: ${x}`);
    // };

    constructor(props: any) {
        super(props, bundle, Control);
        this.container.id = 'page';
        // setTimeout(() => this.#dynamic().catch(exc => console.error(exc.stack)), 5000);
    }
}

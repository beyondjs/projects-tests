import {routing} from "@beyond-js/kernel/routing";

routing.redirect = async function redirect(uri): Promise<string> {
    return uri.pathname;
}
routing.setup();
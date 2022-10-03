import {routing} from "@beyond-js/kernel/routing";


routing.redirect = async function redirect(uri): Promise<string> {
    console.log('routing', uri.pathname)
    return uri.pathname;
}

routing.setup();
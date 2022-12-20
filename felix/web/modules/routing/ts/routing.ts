import {routing} from "@beyond-js/kernel/routing";

routing.redirect = async function redirect(uri): Promise<string> {
    if (uri.pathname === '/welcome' && !!localStorage.getItem('session')) {
        return '/welcome';
    }

    if (uri.pathname === '/welcome') {
        return '/';
    }
    return uri.pathname;
};
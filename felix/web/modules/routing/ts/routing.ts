import {routing} from "@beyond-js/kernel/routing";

routing.redirect = async function redirect(uri): Promise<string> {
    if (uri.pathname === '/welcome' && !!localStorage.getItem('session')) {
        console.log(2, 'welcome logged')
        return '/welcome';
    }

    if (uri.pathname === '/welcome') {
        console.log(3, 'welcome no session')
        return '/';
    }

    console.log(4, uri)
    return uri.pathname;
};
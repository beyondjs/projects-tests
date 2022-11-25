import {routing} from "@beyond-js/kernel/routing";
import {RoutingAppController} from './controller/controller';

const data: Map<any, any> = new Map();

routing.redirect = async function redirect(uri): Promise<string> {

    const control: RoutingAppController = new RoutingAppController(uri.pathname, data);
    const response: { pathname: any } = await control.load();

    return response.pathname;
};

const invalidToken = (): void => {
    localStorage.removeItem('userName');
    localStorage.setItem('tokenInvalid', 'Sesión vencida, por favor inicie sesión nuevamente.');
    routing.pushState('/auth/login');
};

(<any>window)._managerException = (exc, message) => {
    if (message && message === 'TOKEN_NOT_VALIDATE') invalidToken();
};
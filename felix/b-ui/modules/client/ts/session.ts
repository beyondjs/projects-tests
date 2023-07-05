import {ReactiveModel} from '@b-ui/ui/reactive-model';
import {AuthBridge} from '@b-ui/algodon/bridge';

const auth = new AuthBridge();

class Session extends ReactiveModel {
    login = async params => {
        console.log('Session params', params)
        const result = await auth.login(params);
        console.log('Session result', result)
        return result;
    };
}

export /*bundle*/
const Auth = new Session();

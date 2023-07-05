import * as React from "react";
import {Auth} from "@tests/web-backend-app/auth";
import {routing} from "@beyond-js/kernel/routing";
import {useBinder} from '@beyond-js/react-18-widgets/hooks';
// import {Events} from "@beyond-js/events/events";
// import {Footer} from "@b-ui/ui/footer";
// console.log('Events', Events)
// console.log('Footer', Footer)

interface IForm {
    disabled?: boolean;
}

const model = new Auth();

export /*page*/
function View(): JSX.Element {
    const defaultValues = {username: '', password: '', fetching: false};
    const [values, setValues] = React.useState(defaultValues);
    const [error, setError] = React.useState();
    const handleChange = ({currentTarget: target}) => {
        const currentValue = {...values};
        currentValue[target.name] = target.value;
        setValues(currentValue);
        console.log('actualizamos')
    };
    const formDisabled: IForm = {};
    const {username, password} = values;
    if (!username || !password) {
        formDisabled.disabled = true;
    }
    const onSubmit = async (event) => {
        try {
            event.preventDefault();
            const response = await model.login(username, password);
            console.log('response', response)
            if (response.data?.valid) {
                console.log('valid data');
                routing.pushState('/welcome');
                return;
            }
            setError(response.error);
        } catch (e) {
            console.log(e)
        }
    }

    console.log('test sourcemaps', useBinder)
    const change = (): void => console.log('actualizamos')
    useBinder([], change, 'change');

    return (
        <>
            <div className="page__container">
                <form onSubmit={onSubmit}>
                    {error && <div className="form__error">{error}</div>}
                    <label>User: </label>
                    <input onChange={handleChange} type="text" name="username"/>
                    <label>Password</label>
                    <input onChange={handleChange} type="password" name="password"/>
                    <div className="form__actions">
                        <button onClick={onSubmit} {...formDisabled}>Login</button>
                    </div>
                </form>
            </div>
            {/*<Footer/>*/}
        </>
    );
}
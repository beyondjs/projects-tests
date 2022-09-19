import * as React from "react";
import {ToastContainer, toast} from 'react-toastify';

export /*bundle*/
const Widget = (): JSX.Element => {
    const notify = () => toast("Wow so easy!");

    return (
        <div>
            <button onClick={notify}>Notify!</button>
            <ToastContainer/>
        </div>
    );
}

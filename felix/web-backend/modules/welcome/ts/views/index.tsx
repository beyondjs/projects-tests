import * as React from "react";
import {BeyondSpinner} from '@bgroup/ui/spinner';
import Swal from "sweetalert2";

export /*bundle*/
function Page(): JSX.Element {

    console.log(new Swal())
    return (
        <div className="page__container">
            <BeyondSpinner color="#617096" className="spinner"/>
            <h1>Welcome <span className="beyond">BeyondJS</span>!</h1>
        </div>
    );
}

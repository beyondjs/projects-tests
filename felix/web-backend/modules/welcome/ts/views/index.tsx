import * as React from "react";
import {BeyondIcon} from "@bgroup/ui/icon";
import {BeyondEmpty} from '@bgroup/ui/empty';
import {BeyondSpinner} from '@bgroup/ui/spinner';

export /*bundle*/
function Page(): JSX.Element {
    return (
        <div className="page__container">
            <BeyondSpinner color="#617096" className="spinner"/>
            <h1>Welcome <span className="beyond">BeyondJS</span>!</h1>
            <BeyondIcon icon="delete"/>
            <BeyondEmpty text="No records to display" icon="info"/>
        </div>
    );
}

import * as React from "react";
import Dexie from 'dexie';
import {ReactiveModel} from "@beyond-js/reactive";

export /*bundle*/
function View(): JSX.Element {

    console.log(123, Dexie, ReactiveModel)
    return (
        <div className="page__container">
            <h1>My first page using <span className="beyond">BeyondJS</span>!</h1>
        </div>
    );
}
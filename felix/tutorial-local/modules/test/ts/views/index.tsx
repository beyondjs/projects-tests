import * as React from "react";
import {initializeApp} from "firebase/app";
import {getMessaging, getToken, onMessage} from "firebase/messaging";
import {onBackgroundMessage} from "firebase/messaging/sw";

export /*bundle*/
function View(): JSX.Element {

    // console.log('initializeApp', initializeApp)
    // console.log('getMessaging', getMessaging)
    // console.log('onBackgroundMessage', onBackgroundMessage)

    return (
        <div className="page__container">
            <h1>My first page using <span className="beyond">BeyondJS</span>!</h1>
        </div>
    );
}

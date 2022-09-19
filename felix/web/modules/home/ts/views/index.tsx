import * as React from "react";
import {Header} from "@jida/web/header";
import {Footer} from "@jida/web/footer";
import {List} from "@jida/web/list";

export /*bundle*/
function Page(): JSX.Element {

    var position: number;
    position = 3;
    const header = Header({message: 'Header component section'});

    return (
        <>
            {header}
            <div className="page__container">
                <h1>My first page using <span className="beyond">BeyondJS</span>!</h1>
            </div>
            <List/>
            <Footer/>
        </>
    );
}

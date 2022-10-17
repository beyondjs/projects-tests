import * as React from "react";
import {chart} from "@test/project-app/chart-code";
import {day} from "@test/project-app/day-code";

export /*bundle*/
function Page(): JSX.Element {

    console.log(1, chart)
    console.log(2, day)

    return (
        <div className="page__container">
            <h1>My first page using <span className="beyond">BeyondJS</span>!</h1>
        </div>
    );
}

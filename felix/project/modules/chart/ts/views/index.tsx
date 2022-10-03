import * as React from "react";
import Chart, {ChartData} from "chart.js/auto";

export /*bundle*/
function Page(): JSX.Element {

    console.log(1, Chart)

    return (
        <div className="page__container">
            <h1>My first page using <span className="beyond">BeyondJS</span>!</h1>
        </div>
    );
}

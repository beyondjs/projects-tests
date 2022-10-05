import React from "react";
import ReactDOM from "react-dom";
import {PageContainer} from "@dependencies/beyond/routing/ts";
import {View} from "./view";

export /*bundle*/
class Page extends PageContainer {

    render() {
        ReactDOM.render(React.createElement(View), this.container);
    }

}

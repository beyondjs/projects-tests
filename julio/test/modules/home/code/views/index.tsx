import * as React from "react";
import Component from "../mdx/index.mdx";

export /*bundle*/
function Page(): JSX.Element {
    return (
        <div className="page__container">
            <h1>
                My first page using <span className="beyond">BeyondJS</span>!
            </h1>
            <Component />
        </div>
    );
}

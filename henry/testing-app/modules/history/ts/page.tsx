import * as React from "react";
import {beyond} from "@beyond-js/kernel/core";
import {Header} from "@test/testing-app/header";

export /*bundle*/
class Widget extends React.Component {
    render() {
        const back = () => beyond.back();
        const header = Header({message: 'History page test'});

        return (
            <>
                {header}
                <div className="container">
                    <button className="back-button" onClick={back}>Go back!</button>
                    <iframe
                        id="inlineFrameExample" title="Inline Frame Example" width="1000" height="1000"
                        src="https://es.wikipedia.org/wiki/Wikipedia:Portada">
                    </iframe>
                </div>
            </>
        );
    }
}

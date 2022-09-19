import * as React from "react";
import {Button} from "@jida/web/button";

export /*bundle*/
class List extends React.Component {
    render() {
        return (
            <div className="list-container">
                <h3>List component</h3>
                <ul>
                    <li>list element 1</li>
                    <li>list element 2</li>
                    <li>list element 3</li>
                </ul>
                <Button/>
            </div>
        );
    }
}

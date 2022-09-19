import * as React from "react";
import {Button} from "@test/testing-app/button/code";

export /*bundle*/
class List extends React.Component {
    render() {
        return (
            <>
                <ul className="container-button">
                    <li>Item 1 de color amarillo <Button/></li>
                    <li>
                        <p>Item 2 de color amarillo</p>
                        <Button/>
                    </li>
                    <li>Item 3 de color amarillo <Button/></li>
                </ul>
            </>
        );
    }
}

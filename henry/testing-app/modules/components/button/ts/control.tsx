import * as React from "react";

export /*bundle*/
class Button extends React.Component {
    render() {
        const show = () => console.log('click on button');
        return (
            <div className="container-button">
                <button className="container-button-style" onClick={show}>click on two me!</button>
            </div>
        );
    }
}
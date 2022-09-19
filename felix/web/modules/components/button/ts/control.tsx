import * as React from "react";

export /*bundle*/
class Button extends React.Component {
    render() {
        const show = () => console.log('click button');
        return (
            <div>
                <button className="container-button-style" onClick={show}>click on me!</button>
            </div>
        );
    }
}
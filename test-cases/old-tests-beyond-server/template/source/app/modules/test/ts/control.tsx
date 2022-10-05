import * as React from "react";

const Header = function ({title}) {
    return (<header><h1>{title}</h1></header>)
}

export class Control extends React.Component {
    render() {
        return (
            <div>
                <Header title="Bienvenido"/>
                ¡Modulo test! :)
            </div>
        );
    }
}
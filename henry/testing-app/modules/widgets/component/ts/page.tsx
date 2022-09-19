import * as React from "react";
import * as Button from "@test/testing-app/button/code";

export /*bundle*/
class Widget extends React.Component {
    constructor(props: any) {
        super(props);

        (window as any)._Button = Button;
    }

    render() {
        return (
            <div className="import-page">
                <div>
                    Pagina de prueba de importacion
                </div>
                <Button.Button/>
            </div>
        );
    }
}
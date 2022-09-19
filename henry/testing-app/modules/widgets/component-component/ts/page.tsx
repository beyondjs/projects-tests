import * as React from "react";
import {List} from "@test/testing-app/list/code";
import {Header} from '@test/testing-app/header/code';

export /*bundle*/
class Widget extends React.Component {
    render() {
        const header = Header({message: `Header widget/component/component con estilos locales`});
        return (
            <>
                {header}
                <div className="import-page-widget-component-component">
                    <div>
                        Pagina de prueba de importacion
                    </div>
                    <List/>
                </div>
            </>
        );
    }
}
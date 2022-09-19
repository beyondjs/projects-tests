import * as React from "react";
import {module} from "beyond_context";
import {Header} from "@test/testing-app/header/code";
import {Content} from "./content";
import {Utils} from "./utils";

export /*bundle*/
class Widget extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.updateState = this.updateState.bind(this);
    }

    componentDidMount() {
        module.texts.bind('change', this.updateState);
    }

    componentWillUnmount() {
        module.texts.unbind('change', this.updateState);
    }

    updateState() {
        this.setState({});
    }

    render() {
        if (!module.texts.ready) return <>Cargando titulo...</>;

        const header = Header({message: module.texts.value.title});

        return (
            <div className="import-page">
                {header}
                <div>
                    Pagina de prueba de numero :
                    {Utils(10)}
                </div>
                <Content/>
            </div>
        );
    }
}

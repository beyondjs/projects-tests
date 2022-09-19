import * as React from 'react';
import type {PageURI} from '@beyond-js/widgets/routing';

export default class extends React.Component<{ uri: PageURI }> {
    #uri: PageURI;
    #texts;

    constructor(props: any) {
        super(props);
        this.state = {};
        this.#uri = props.uri;
        this.#texts = props.store;
    }

    async componentDidMount() {
        this.#texts.on('change', this.updateState);
    }

    componentWillUnmount() {
        this.#texts.off('change', this.updateState);
    }

    updateState = () => this.setState({});

    render() {
        if (!this.#texts.ready) {
            return <>...</>;
        }

        const texts = this.#texts.value;
        return (<>
            <div className="welcome-page">{texts.title}</div>
            <div className="name">URI var value: "{this.#uri.vars.get('name')}"</div>
        </>);
    }
}

import * as React from 'react';
import type {WidgetAttributes} from '@beyond-js/widgets/controller';
import {IMenu} from '@test/testing-app/menu';

export default class extends React.Component {
    #menu: IMenu;
    #attributes: WidgetAttributes;

    constructor(props: any) {
        super(props);
        this.#menu = props.store;
        this.#attributes = props.attributes;
    }

    #changed = () => this.setState({});

    componentDidMount() {
        this.#menu.on('change', this.#changed);
        this.#attributes.on('change', this.#changed);
    }

    componentWillUnmount() {
        this.#menu.off('change', this.#changed);
        this.#attributes.off('change', this.#changed);
    }

    render() {
        if (!this.#menu.loaded) return null;
        let title = this.#attributes.get('title');
        title = title ? title : 'Menu';

        const items = [];
        for (const [route, texts] of this.#menu.items) {
            items.push(
                <beyond-link key={route} class="item" data-url={route}>
                    {texts.value.title}
                </beyond-link>
            );
        }

        return (
            <aside>
                <h1>{title}</h1>
                <div className="slot">
                    <slot/>
                </div>
                {items}
            </aside>
        );
    }
}

import * as React from 'react';
import type {Companies} from '@test/testing-app/companies-react.store';

const {useState} = React;

interface IProps {
    store: Companies
}

let autoincrement = 0;

export default function Widget({store: companies}: IProps) {
    console.log('autoincrement', autoincrement)
    const [, change] = useState(autoincrement++);
    companies.on('change', () => {
        companies.off('change', change);
        change(autoincrement++);
    });

    console.log('companies edited', companies?.loaded)

    if (!companies?.loaded) return <div>...</div>;

    const list = [...companies.value.values()].map(({id, name}) => <div key={id}>{id}: {name}</div>);

    return (
        <div>{list}</div>
    );
}

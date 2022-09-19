import * as React from 'react';
import {Header} from '@test/testing-app/header';
import {message} from '@testing/message/message';

export default class extends React.Component {
    render() {
        const header = Header({message});
        return (
            <>
                {header}
                <div>The content of the home page</div>
            </>
        );
    }
}

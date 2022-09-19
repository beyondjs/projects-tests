import * as React from 'react';
import {Provider} from 'react-redux';
import {store} from '@test/testing-app/redux';
import {Counter} from './counter';

export /*bundle*/ function Widget() {
    return (
        <Provider store={store}>
            <Counter/>
        </Provider>
    );
}

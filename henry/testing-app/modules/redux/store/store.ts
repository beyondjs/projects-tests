import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './counter';

export /*bundle*/ const store = configureStore({
    reducer: {
        counter: counterReducer,
    }
});

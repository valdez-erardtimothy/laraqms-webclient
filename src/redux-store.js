import {combineReducers, configureStore} from '@reduxjs/toolkit';

/* customer reducers */
import customerQueue from './features/customer-queue';

import AuthReducer from './features/auth';

export default configureStore({
    reducer: combineReducers({
        auth: AuthReducer,
        customer: combineReducers({
            queue: customerQueue
        })
    })
});
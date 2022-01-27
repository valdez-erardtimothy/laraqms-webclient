import {combineReducers, configureStore} from '@reduxjs/toolkit';

/* customer reducers */
import customerQueue from './features/customer-queue';

import AuthReducer from './features/auth';

import tellerDashboard from './features/teller-dashboard';

export default configureStore({
    reducer: combineReducers({
        auth: AuthReducer,
        customer: combineReducers({
            queue: customerQueue
        }),
        teller: combineReducers({
            dashboard: tellerDashboard
        })
    })
});
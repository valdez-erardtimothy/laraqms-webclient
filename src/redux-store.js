import {combineReducers, configureStore} from '@reduxjs/toolkit';


/* teller reducers */
import AuthReducer from './features/auth';

export default configureStore({
    reducer: combineReducers({
        auth: AuthReducer,
    })
});
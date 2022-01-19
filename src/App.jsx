import React from 'react';
import {BrowserRouter, Routes} from 'react-router-dom';
import {Provider} from 'react-redux';
import AppRoutes from './Routes';

import store from './redux-store';

/* do on app load initalizations */
import './boot/boot';

export function App() {
    return <>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    {AppRoutes()}
                </Routes> 
            </BrowserRouter>
        </Provider>
    </>;
}

export default App;

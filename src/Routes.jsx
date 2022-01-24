import React from 'react';
import {Route} from 'react-router-dom';

import MainLayout from './Layout';
import TellerLayout from './teller/Layout';
/* main app page-imports */
import Home from './pages/Index';
import Login from './pages/auth/Login';

/* teller page-imports */
// import TellerLogin from './teller/pages/auth/Login';

const Routes = () => {
    return <>
        {/* route for app main functions (normal users) */}
        <Route element={<MainLayout/>}>
            <Route index element={<Home/>}/>
            <Route path="login" element={<Login/>}/>
        </Route>
        {/* routes for tellers */}
        <Route path="teller" element={<TellerLayout/>}>
        </Route>
    </>;
};

export default Routes;
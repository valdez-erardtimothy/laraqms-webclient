import React from 'react';
import {Route} from 'react-router-dom';

import CustomerLayout from './customer/Layout';
import TellerLayout from './teller/Layout';
/* customer page-imports */
import Home from './customer/pages/Index';
import Login from './customer/pages/auth/Login';

/* teller page-imports */
import TellerLogin from './teller/pages/auth/Login';

const Routes = () => {
    return <>
        <Route element={<CustomerLayout/>}>
            <Route index element={<Home/>}/>
            {/* 
            no customer login unimplemented at backend,
            kept here for checking guard
            */}
            <Route path="login" element={<Login/>}/>
        </Route>
        <Route path="teller" element={<TellerLayout/>}>
            <Route path="login" element={<TellerLogin/>}/>
        </Route>
    </>;
};

export default Routes;
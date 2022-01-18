import React from 'react';
import { Outlet } from 'react-router-dom';

export default function AuthenticatedTellerRoute({children}) {
    // placeholder
    const authenticated = true;
    
    return authenticated && children ? children : <Outlet/>; 
}
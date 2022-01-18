import React from 'react';
import {BrowserRouter, Routes} from 'react-router-dom';
import AppRoutes from './Routes';
export function App() {
    return <>
        <BrowserRouter>
            <Routes>
                {AppRoutes()}
            </Routes> 
        </BrowserRouter>
    </>;
}

export default App;

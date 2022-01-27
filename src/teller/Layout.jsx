import React from 'react';
import {Container} from 'react-bootstrap';
import {Outlet} from 'react-router-dom';
import NavigationBar from '../components/NavigationBar';
export default function Layout(){
    return <Container fluid className="g-0">
        <NavigationBar/>
        <div className="mt-2">
            <Outlet/>
        </div>
    </Container>;
}
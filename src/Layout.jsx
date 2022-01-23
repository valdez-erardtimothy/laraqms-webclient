import React from 'react';
import {Container} from 'react-bootstrap';
import {Outlet} from 'react-router-dom';
import MainNav from './components/NavigationBar';

export default function Layout(){
    return <Container fluid className="g-0">
        <MainNav/>
        <Outlet/>
    </Container>;
}
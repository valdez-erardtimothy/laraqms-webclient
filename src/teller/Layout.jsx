import React from 'react';
import {Container} from 'react-bootstrap';
import {Outlet} from 'react-router-dom';
export default function Layout(){
    return <Container fluid className="g-0">
        <Outlet/>
    </Container>;
}
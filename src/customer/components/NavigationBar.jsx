import React from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';

import {Link} from 'react-router-dom';

export default function NavigationBar() {
    return <Navbar bg="light">
        <Navbar.Brand>LaraQMS</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to="/login">Log in</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>;
}
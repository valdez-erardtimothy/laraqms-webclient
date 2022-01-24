import React from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';

/* action imports */
import { logout } from '../features/auth';

export default function NavigationBar() {
    /* hooks */
    const dispatch = useDispatch();
    
    /* redux state vars */
    const {isAuthenticated, user} = useSelector(state=>state.auth);
    
    /* render */
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
                {!isAuthenticated ? (
                    <Nav.Link as={Link} to="/login">Log in</Nav.Link>) : (
                    <NavDropdown
                        title={user?.name ?? "User!"}
                        id="nav-authenticated-dropdown"
                    >
                        <NavDropdown.Item 
                            as="button"
                            onClick={()=>{dispatch(logout());}}
                        >
                            Log out
                        </NavDropdown.Item>
                        
                    </NavDropdown>
                )}
            </Nav>
        </Navbar.Collapse>
    </Navbar>;
}
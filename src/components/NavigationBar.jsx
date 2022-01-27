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
                
                {!isAuthenticated ? (
                    <Nav.Link as={Link} to="/login">Log in</Nav.Link>) : (
                    <NavDropdown
                        title={user?.name ?? "User!"}
                        id="nav-authenticated-dropdown"
                    >
                        <NavDropdown.Item 
                            as={Link}
                            to="/teller"
                        >
                            Dashboard
                        </NavDropdown.Item>
                    
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
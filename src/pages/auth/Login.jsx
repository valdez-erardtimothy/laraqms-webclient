import React, { useEffect } from 'react';
import { Button, Container, Form, FloatingLabel } from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';

/* action imports */
import {attemptLogin} from '../../features/auth';

export default function Login() {
    /* hooks */
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    /* redux state */
    const {isAuthenticated} = useSelector(state=>state.auth);

    /* effect hooks */
    useEffect(()=> {
        // redirect user if logged in or login successful
        isAuthenticated && navigate('/teller');
    }, [isAuthenticated]);

    /* handlers */
    // attempt customer login
    const loginHandler = (e) => {
        e.preventDefault();
        let credentials = new FormData(e.target);
        dispatch(attemptLogin({credentials}));
    };

    
    
    return <>
        <Container>
            <p></p>
            <Form onSubmit={loginHandler}>
                <Form.Group className="mb-4">
                    <FloatingLabel
                        controlId="login-username"
                        label="Username"
                        className='mb-2'
                    >
                        <Form.Control name="username"/>
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="login-password"
                        label="Password"
                        className='mb-2'
                    >
                        <Form.Control 
                            type="password" 
                            name="password"/>
                    </FloatingLabel>
                </Form.Group>
                <Button type="submit">Log in</Button>
            </Form>
        </Container> 
    </>;
}
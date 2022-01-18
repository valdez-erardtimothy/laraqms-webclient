import React from 'react';
import { Button, Container, Form, FloatingLabel } from 'react-bootstrap';

export default function Login() {

    
    /* handlers */
    // attempt customer login
    const loginHandler = (e) => {
        e.preventDefault();
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
                        type="password"
                        className='mb-2'
                    >
                        <Form.Control name="password"/>
                    </FloatingLabel>
                </Form.Group>
                <Button type="submit">Log in</Button>
            </Form>
        </Container> 
    </>;
}
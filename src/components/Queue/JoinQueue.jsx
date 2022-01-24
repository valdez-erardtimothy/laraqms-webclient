import React from 'react';
import {Button, FloatingLabel, Form} from 'react-bootstrap';
import { useDispatch } from 'react-redux';

/* action imports */
import { enqueue } from '../../features/customer-queue';

export default function JoinQueue() {
    /* hooks */
    const dispatch = useDispatch(); 
    /* handlers */
    const joinQueueHandler = (e) => {
        e.preventDefault();
        dispatch(enqueue(new FormData(e.target)));
    };

    return <>
        <Form onSubmit={joinQueueHandler}>
            <h3>Doing some business with us?</h3>
            <p>Enter your details here to get a number! 
                Then you may just wait until your number is up.
            </p>
            
            <Form.Group>
                <FloatingLabel
                    label="E-mail"
                >
                    <Form.Control 
                        type="email" 
                        name="email" 
                        placeholder="E-mail"
                        required
                    />
                </FloatingLabel>
            </Form.Group>

            <Form.Group className='mt-2'>
                <FloatingLabel
                    label="Name"
                >
                    <Form.Control 
                        type="text" 
                        name="customer_name"
                        placeholder="Name"
                        required
                    />

                </FloatingLabel>
            </Form.Group>
            <div className='d-flex justify-center'>
                <Button type="submit" >Join Queue</Button>
            </div>
        </Form>
    </>;
}
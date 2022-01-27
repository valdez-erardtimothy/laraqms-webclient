import React, { Fragment } from 'react';
import {
    Row,
    Col
} from 'react-bootstrap';

export default function Dashboard({waitlist}) {
    return <>
        <Row>
            <Col md="4">
                <h4>Waitlist</h4>
                {waitlist.map(waiting=><Fragment key={waiting.id}>
                    <p>{waiting.customer_name}</p>
                </Fragment>)}
            </Col>
            <Col md="4">
    
            </Col>
            <Col md="4">
    
            </Col>
        </Row>
    </>;

}
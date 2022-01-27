import React from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';

/* component import */
import JoinQueue from '../components/Queue/JoinQueue';
import QueueInfo from '../components/QueueInfo';


export default function Index() {
    const {queueData}= useSelector(state=>state.customer.queue);
    const isQueued = !!queueData;
    return <>
        <Container>
            {
                !isQueued? 
                    <JoinQueue/>:
                    <>
                        <QueueInfo queueData={queueData}/>
                    </>
            }

        </Container>
    </>;
}
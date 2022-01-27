import React from 'react';

export default function QueueInfo({queueData}) {
    return <>
        <h4>Welcome, {queueData.customer_name}! </h4>
        <p>Your Queue number is {queueData.queue_number}</p>
    </>;
}
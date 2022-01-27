import React, { useEffect } from 'react';
import {
    Container,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

/* redux action imports */
import {loadData} from '../../features/teller-dashboard';

/* component imports */
import TellerDashboard from '../components/Dashboard';

/* HoC imports */
import WithLoading from '../../components/WithLoading';

export default function Index() {
    /* hooks */
    const dispatch = useDispatch(); 

    /* redux state */
    const {
        waitlist
    } = useSelector(state=>state.teller.dashboard);

    /* effect hooks */
    // onload
    useEffect(()=> {
        dispatch(loadData());
    }, []);

    /* render */
    return (
        <>
            <Container fluid="md">
                <WithLoading 
                    isLoading={!waitlist} 
                    preRender={false}
                >
                    <TellerDashboard waitlist={waitlist}/>
                </WithLoading >
            </Container>
        </>   
    );
}
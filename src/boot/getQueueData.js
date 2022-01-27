import store from '../redux-store';
import {loadQueueNumber} from '../features/customer-queue';

store.dispatch(loadQueueNumber());
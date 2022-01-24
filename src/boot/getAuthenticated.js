import appReduxStore from '../redux-store';
import {getAuthenticatedUser} from '../features/auth';

appReduxStore.dispatch(getAuthenticatedUser());

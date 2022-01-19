import axios from 'axios';

import config from '../config/axios';

// below line causes requests to send twice
axios.defaults.withCredentials = true;
axios.defaults.baseURL = config.apiURL;
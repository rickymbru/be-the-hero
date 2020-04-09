import axios from 'axios';

import { NODE_APP_API_URL } from 'react-native-dotenv';

const api = axios.create({
    baseURL: NODE_APP_API_URL
});

export default api;

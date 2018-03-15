import axios from 'axios';
import apiToken from './api_token';

export default () => axios.create({
    headers: {
        'Authorization': 'Bearer ' + apiToken,
    },
    transformResponse: [(data) => {
        try {
            return JSON.parse(data);
        } catch (Exception) {
            return data;
        }
    }],
});

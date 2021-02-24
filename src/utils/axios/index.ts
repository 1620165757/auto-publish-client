/**
 * @author: zxs
 * @date: 2020/11/24
 */
import axios from 'axios';
import {getCookie} from "../index";


axios.interceptors.request.use(function (config) {
    const token = getCookie('token');
    if (token) {
        config.headers['Authorization'] = `Bearer ${getCookie('token')}`;
    }
    return config;
}, function (error) {
    console.log('request2', error);
    return Promise.reject(error);
});

axios.interceptors.response.use((response) => {
    if (response.status === 200) {
        return response.data;
    }
}, (error) => {
    console.log('response_err', error.response);
    if (error.response.status === 401) {
        window.location.replace('/login');
    }
    return {};
});

const httpRequest = {
    get: async (url) => {
        return await axios.get('http://localhost:3000' + url);
    },
    post: async (url, body) => {
        return await axios.post('http://localhost:3000' + url, body);
    }
};

export default httpRequest;

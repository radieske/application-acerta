import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api-application-acerta.herokuapp.com/'
});

export default api;
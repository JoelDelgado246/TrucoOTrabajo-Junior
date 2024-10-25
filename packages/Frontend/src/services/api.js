import axios from 'axios';

const api = axios.create({
    baseURL: 'http://tu-backend-url',
    // headers comunes, timeout, etc
});

export default api;
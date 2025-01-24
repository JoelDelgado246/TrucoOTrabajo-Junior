import axios from 'axios';

const BASE_URL = import.meta.env.PROD
    ? 'https://trucootrabajo-junior-production-9d0c.up.railway.app'
    : 'http://localhost:3001';

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

export default api;
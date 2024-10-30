// src/services/api.js
import axios from 'axios';

const BASE_URL = import.meta.env.PROD
    ? 'trucootrabajo-junior-production-9d0c.up.railway.app'  // URL de producción
    : 'http://localhost:3001';                  // URL de desarrollo

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

export default api;
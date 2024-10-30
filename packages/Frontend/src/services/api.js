// src/services/api.js
import axios from 'axios';

const BASE_URL = import.meta.env.PROD
    ? 'https://url-del-backend-desplegado.com'  // URL de producción
    : 'http://localhost:3001';                  // URL de desarrollo

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

export default api;
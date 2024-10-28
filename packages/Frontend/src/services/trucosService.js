// src/services/trucosService.js
import api from './api';

export const trucosService = {
    // Obtener todos los trucos
    getAllTrucos: async () => {
        try {
            const response = await api.get('/trucos');
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    // Obtener un truco específico
    getTrucoById: async (id) => {
        try {
            const response = await api.get(`/trucos/${id}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    // Obtener test cases para trucos terroríficos
    getTestCases: async (trucoId) => {
        try {
            const response = await api.get(`/trucos/${trucoId}/test`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    // Obtener opciones de respuesta para trucos fáciles
    getOpcionesRespuesta: async (trucoId) => {
        try {
            const response = await api.get(`/trucos/${trucoId}/opciones`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    // Enviar solución
    submitSolution: async (id, solution) => {
        try {
            const response = await api.post(`/trucos/${id}/solucion`, { solution });
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    // Obtener comentarios
    getComments: async (id) => {
        try {
            const response = await api.get(`/trucos/${id}/comentarios`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    // Publicar comentario
    postComment: async (id, comment) => {
        try {
            const response = await api.post(`/trucos/${id}/comentarios`, { comment });
            return response.data;
        } catch (error) {
            throw error;
        }
    }
};

export default trucosService;
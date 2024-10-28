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

    // Enviar solución
    submitSolution: async (id, solution, userId) => {
        try {
            const response = await api.post(`/trucos/${id}/solucion`, {
                solution,
                userId
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    // Obtener las opciones de respuesta
    getOpcionesRespuesta: async (trucoId) => {
        try {
            const response = await api.get(`/trucos/${trucoId}/opciones`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    // Verificar respuesta
    verificarRespuesta: async (trucoId, opcionId, userId) => {
        try {
            const response = await api.post(`/trucos/${trucoId}/verificar`, {
                opcionId,
                userId
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    }
};
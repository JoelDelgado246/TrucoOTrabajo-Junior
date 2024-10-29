// src/services/trucosService.js
import api from './api';

export const trucosService = {
    getAllTrucos: async (params = {}) => {
        try {
            const queryString = params.id ? `?id=${params.id}` : '';
            const response = await api.get(`/trucos${queryString}`);
            return response.data;
        } catch (error) {
            console.error('Error en getAllTrucos:', error);
            throw error;
        }
    },

    getTrucoById: async (id) => {
        try {
            const response = await api.get(`/trucos/${id}`);
            return response.data;
        } catch (error) {
            console.error('Error en getTrucoById:', error);
            throw error;
        }
    },

    getTestCases: async (trucoId) => {
        try {
            const response = await api.get(`/trucos/${trucoId}/test`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    getOpcionesRespuesta: async (trucoId) => {
        try {
            const response = await api.get(`/trucos/${trucoId}/opciones`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    submitSolution: async (id, solution) => {
        try {
            const response = await api.post(`/trucos/${id}/solucion`, {
                code: solution
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    getComments: async (id) => {
        try {
            const response = await api.get(`/trucos/${id}/comments`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    postComment: async (id, comment) => {
        try {
            const response = await api.post(`/trucos/${id}/comments`, { comment });
            return response.data;
        } catch (error) {
            throw error;
        }
    }
};

export default trucosService;
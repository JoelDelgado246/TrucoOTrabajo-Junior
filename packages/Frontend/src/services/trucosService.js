// src/services/trucosService.js
import api from './api';

export const trucosService = {
    // Obtener todos los trucos
    getAllTrucos: async (params = {}) => {
        try {
            // Construir query string si hay params
            const queryString = params.id ? `?id=${params.id}` : '';
            const response = await api.get(`/trucos${queryString}`);
            return response.data;
        } catch (error) {
            console.error('Error en getAllTrucos:', error);
            throw error;
        }
    },

    // Obtener un truco específico
    getTrucoById: async (id) => {
        try {
            const response = await api.get(`/trucos/${id}`);
            return response.data;
        } catch (error) {
            console.error('Error en getTrucoById:', error);
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
    submitSolution: async (trucoId, code) => {
        try {
            const response = await api.post(`/trucos/${trucoId}/solucion`, { code });
            return response.data;
        } catch (error) {
            console.error('Error al enviar solución:', error);
            throw error;
        }
    },

    // Obtener comentarios
    getComments: async (id) => {
        try {
            const response = await api.get(`/trucos/${id}/comments`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    // Publicar comentario
    postComment: async (id, comment) => {
        try {
            const response = await api.post(`/trucos/${id}/comments`, { comment });
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    guardarPuntuacion: async (trucoId, puntuacion) => {
        try {
            const response = await api.post(`/trucos/${trucoId}/puntuacion`, {
                puntuacion
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    // Método para obtener un trato
    getTrato: async (tratoId) => {
        try {
            const response = await api.get(`/tratos/${tratoId}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
};

export default trucosService;
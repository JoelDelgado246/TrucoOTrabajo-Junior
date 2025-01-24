import api from './api';

const tratoService = {
  getAllTratos: async () => {
    try {
      const response = await api.get('/tratos'); // sin el /api/
      return response.data;
    } catch (error) {
      console.error('Error en getAllTratos:', error);
      throw error;
    }
  },

  getTratoById: async (trucoId) => {
    try {
      console.log('Consultando trato para trucoId:', trucoId);
      const response = await api.get(`/tratos/truco/${trucoId}`);
      console.log('Respuesta del servidor:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error detallado:', error.response || error);
      throw error;
    }
  }
};

export default tratoService;
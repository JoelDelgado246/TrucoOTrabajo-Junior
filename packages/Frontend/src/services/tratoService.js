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

  getTratoById: async (id) => {
    try {
      const response = await api.get(`/tratos/${id}`); // sin el /api/
      return response.data;
    } catch (error) {
      console.error('Error en getTratoById:', error);
      throw error;
    }
  }
};

export default tratoService;
import api from './api';

const tratosService = {
  getAllTratos: async () => {
    try {
      const response = await api.get('/tratos');
      return response.data;
    } catch (error) {
      console.error('Error en getAllTratos:', error);
      throw error;
    }
  },
};

export default tratosService;

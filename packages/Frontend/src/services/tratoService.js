import api from './api';

const tratoService = {
  getAllTratos: async () => {
    try {
      const response = await api.get('/api/tratos');
      console.log('Respuesta getAllTratos:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error en getAllTratos:', error.response || error);
      throw error;
    }
  },

  getTratoById: async (id) => {
    try {
      if (!id) throw new Error('ID es requerido');

      console.log('Intentando obtener trato con ID:', id);
      const response = await api.get(`/api/tratos/${id}`);
      console.log('Respuesta getTratoById:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error en getTratoById:', error);
      throw error;
    }
  }
};

export default tratoService;
import axios from 'axios';

export const getData = async (endpoint) => {
  try {
    const response = await axios.get(endpoint)
    return response.data;
  } catch (error) {
    console.error('Error al obtener datos:', error);
    throw error;
  }
};

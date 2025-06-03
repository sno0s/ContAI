import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001', // Troque para a porta do seu backend
});

export default api;

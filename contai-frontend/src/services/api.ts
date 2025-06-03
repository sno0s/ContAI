import axios from 'axios';
// api de conectividade com o backend
const api = axios.create({
  baseURL: 'http://localhost:3001', // Porta do backend
});

export default api;

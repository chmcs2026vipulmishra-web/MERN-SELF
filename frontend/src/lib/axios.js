import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:3001/footwear`,
});

export default api;
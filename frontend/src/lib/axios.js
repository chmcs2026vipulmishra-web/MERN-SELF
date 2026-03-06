import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:3000/footwear`,
});

export default api;
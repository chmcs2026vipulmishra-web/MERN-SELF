import axios from 'axios';

// point at backend server port and keep base URL simple
const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL || "http://localhost:3000",
});

export default api;
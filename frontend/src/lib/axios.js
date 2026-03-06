import axios from 'axios';

// point at backend server port and keep base URL simple
const api = axios.create({
  baseURL: "http://localhost:3000",
});

export default api;
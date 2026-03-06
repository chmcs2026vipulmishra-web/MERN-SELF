import axios from 'axios';

// point at backend server port and keep base URL simple
const api = axios.create({
  baseURL: `https://mern-self.onrender.com/`
});

export default api;
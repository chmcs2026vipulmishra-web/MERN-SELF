import axios from 'axios';

const api = axios.create({
  baseURL: `https://mern-self.onrender.com/`
});

export default api;
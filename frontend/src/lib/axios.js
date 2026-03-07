import axios from 'axios';

const api = axios.create({
  baseURL: 'https://mern-self.onrender.com',
  //baseURL: `http://localhost:3001/footwear`,
});

export default api;

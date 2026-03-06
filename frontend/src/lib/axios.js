import axios from 'axios';

// Determine API URL based on environment
const getApiUrl = () => {
  // Check if we're on Render (production)
  const isProduction = window.location.hostname.includes('render');
  
  if (isProduction) {
    return 'https://mern-self.onrender.com';
  }
  
  // Development - use environment variable or default to localhost
  return import.meta.env.VITE_API_URL || 'http://localhost:3001';
};

const api = axios.create({
  baseURL: `${getApiUrl()}/footwear`,
});

export default api;
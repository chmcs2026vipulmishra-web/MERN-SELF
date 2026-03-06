import axios from 'axios';

// Determine API URL based on environment
const getApiUrl = () => {
  // Try environment variable first
  const envUrl = import.meta.env.VITE_API_URL;
  if (envUrl) {
    console.log('Using VITE_API_URL:', envUrl);
    return envUrl;
  }
  
  // For Render deployment, use the backend service URL
  if (window.location.hostname.includes('onrender.com')) {
    const backendUrl = 'https://mern-self.onrender.com';
    console.log('Using Render backend:', backendUrl);
    return backendUrl;
  }
  
  // Development
  console.log('Using localhost backend');
  return 'http://localhost:3001';
};

const api = axios.create({
  baseURL: `${getApiUrl()}/footwear`,
});

export default api;
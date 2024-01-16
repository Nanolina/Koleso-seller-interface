import axios from 'axios';

const authServiceAPI = axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_AUTH_SERVICE_URL,
});

authServiceAPI.interceptors.request.use((config) => {
  config.headers = config.headers || {};

  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }

  return config;
});

export { authServiceAPI };

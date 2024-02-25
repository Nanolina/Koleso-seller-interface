import axios from 'axios';
import { AuthResponse } from '../services/types/response';

const API_URL = process.env.REACT_APP_PRODUCT_SERVICE_URL;
const AUTH_API_URL = process.env.REACT_APP_AUTH_SERVICE_URL;

const productServiceAPI = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

productServiceAPI.interceptors.request.use(
  function (config) {
    config.headers = config.headers || {};

    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

productServiceAPI.interceptors.response.use(
  function (config) {
    return config;
  },
  async function (error) {
    try {
      const originalRequest = error.config;
      if (
        error.response.status === 401 &&
        error.config &&
        !error.config._isRetry
      ) {
        originalRequest._isRetry = true;
        const response = await axios.get<AuthResponse>(
          `${AUTH_API_URL}/refresh`,
          {
            withCredentials: true,
          }
        );
        localStorage.setItem('token', response.data.token);
        return productServiceAPI.request(originalRequest);
      }
    } catch (error) {
      console.error('NOT AUTHORIZED', error);
    }

    return Promise.reject(error);
  }
);

export { productServiceAPI };

import axios from 'axios';

const API_URL = process.env.REACT_APP_NOTIFICATION_SERVICE_URL;

const notificationServiceAPI = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

notificationServiceAPI.interceptors.request.use(
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

export { notificationServiceAPI };

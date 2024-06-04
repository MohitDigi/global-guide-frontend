import axios from 'axios';
import { deleteCookie, getCookie } from 'cookies-next';

const http = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

http.interceptors.request.use((config) => {
  const accessToken = getCookie('accessToken');
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

http.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      deleteCookie('accessToken');
      window.location.href = '/';
    }
    return Promise.reject(error);
  }
);

export default http;

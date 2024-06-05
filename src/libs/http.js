import axios from "axios";
import { deleteCookie, getCookie } from "cookies-next";

const http = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

const adminHttp = axios.create({
  baseURL: import.meta.env.VITE_API_ADMIN_URL,
});

http.interceptors.request.use((config) => {
  const accessToken = getCookie("accessToken");
  if (accessToken) {
    config.headers.Authorization = accessToken;
  }
  return config;
});

http.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      deleteCookie("accessToken");
      window.location.href = "/";
    }
    return Promise.reject(error);
  }
);

adminHttp.interceptors.request.use((config) => {
  const accessToken = getCookie("accessToken");
  console.log(accessToken);
  if (accessToken) {
    config.headers.Authorization = accessToken;
  }
  return config;
});

adminHttp.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      deleteCookie("accessToken");
      window.location.href = "/";
    }
    return Promise.reject(error);
  }
);

export { http, adminHttp };

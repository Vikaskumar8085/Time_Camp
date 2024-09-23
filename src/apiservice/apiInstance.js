import axios from "axios";
const baseurl = process.env.REACT_APP_BASE_URL || "http://localhost:8000/api";

const apiInstance = axios.create({
  baseURL: baseurl,
});

apiInstance.interceptors.request.use(
  (config) => {
    const getToken = JSON.parse(localStorage.getItem("token"));
    if (getToken) {
      config.headers.Authorization = `Bearer ${getToken}`;
    }
    return config;
  },
  (error) => {
    new Promise.reject(error.message);
  }
);

export default apiInstance;

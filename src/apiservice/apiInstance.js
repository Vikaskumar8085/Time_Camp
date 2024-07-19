import axios from "axios";
const baseurl = process.env.REACT_APP_BASE_URL || "http://localhost:8000/api";
console.log(baseurl);
const apiInstance = axios.create({
  baseURL: baseurl,
});

apiInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    new Promise.reject(error.message);
  }
);

export default apiInstance;

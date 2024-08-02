import axios from "axios";
const baseurl = process.env.REACT_APP_BASE_URL || "http://localhost:8000/api";
const apiInstance = axios.create({
  baseURL: baseurl,
});

apiInstance.interceptors.request.use(
  (config) => {
    const getToken = JSON.parse(localStorage.getItem("token"));
    if (getToken) {
      config.headers.Authorization = `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YWIyZDA1MzQwODNiODQxYmI3NzFhNSIsImlhdCI6MTcyMjU4NTU2OCwiZXhwIjoxNzIyNTg5MTY4fQ.j1OidwiX5_V7Gkueyjq7Pon8L1bgEaTaEBEo6MM1IQs"}`;
    }
    return config;
  },
  (error) => {
    new Promise.reject(error.message);
  }
);

export default apiInstance;

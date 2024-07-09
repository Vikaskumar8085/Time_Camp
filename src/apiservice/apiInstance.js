import axios from "axios";
const apiInstance = axios.create({
    baseURL: ""
});

apiInstance.interceptors.request.use(config => {

    return config;


}, (error) => {
    new Promise.reject(error.message)
})



export default apiInstance;

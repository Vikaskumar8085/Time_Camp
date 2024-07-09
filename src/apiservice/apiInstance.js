import axios from "axios";
const apiInstance = axios.create({
    baseURL: ""
});

apiInstance.interceptors.request.use(config => {




}, (error) => {
    return Promise.reject(error)
})



export default apiInstance;

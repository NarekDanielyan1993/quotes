import axios, { CancelToken } from "axios";
import { BASE_URL } from "./constants";

const axiosInstance = axios.create({
    baseURL: BASE_URL
})

const apiCall = ({ method = "get", url = '/', data = {}, headers = {} }) => {
    const httpMethod = method.toLowerCase()
    const source = CancelToken.source();
    data.cancelToken = source.token;
    return axiosInstance[httpMethod](url, data, headers)
}

axiosInstance.interceptors.request.use(config => {
    console.log(config)
    return config;
}, error => {
    return Promise.reject(error);
});

axios.interceptors.response.use((response) => {
  
    return response;
}, error => {
    return Promise.reject(error);
});

export default apiCall;
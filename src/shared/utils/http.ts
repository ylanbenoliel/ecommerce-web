import axios from "axios";

const baseURL = "https://api.example.com";

const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 1000,
});

axiosInstance.defaults.headers.common["Authorization"] = "Token";

export default axiosInstance;

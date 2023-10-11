import axios from "axios";

const http = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/Api`,
  timeout: 30000,
  withCredentials: false,
});

http.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default http;

import axios from "axios";

import { API_BASE_URL } from "utils/constants";

const Axios = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

Axios.interceptors.request.use(
  async (config) => {
    config.headers.Authorization = `Bearer ${process.env.REACT_APP_OPEN_AI_API_KEY}`;
    return config;
  },
  (error) => Promise.reject(error)
);

export default Axios;

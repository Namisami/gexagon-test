import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'https://front-test.hex.team/'
});

axiosInstance.interceptors.request.use((config) => {
  const token = window.localStorage.getItem('access_token');
  config.headers.Authorization = `Bearer ${token}`;
  return config
})

export default axiosInstance;

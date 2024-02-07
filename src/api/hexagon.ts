import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'https://front-test.hex.team/'
})

export default axiosInstance;

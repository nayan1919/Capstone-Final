import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api', // your backend URL
  withCredentials: true, // if using cookies for auth
});

export default axiosInstance;

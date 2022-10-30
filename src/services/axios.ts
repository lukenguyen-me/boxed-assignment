import axios from 'axios';

const axiosClient = axios.create();

axiosClient.interceptors.request.use(function (config) {
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

axiosClient.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    return Promise.reject({ status: error.status, ...error?.response?.data });
  });

export default axiosClient;
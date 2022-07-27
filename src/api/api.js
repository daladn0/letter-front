import axios from "axios";

const axiosParams = {
  withCredentials: true,
  baseURL: process.env.API_URL,
};

const axiosInstance = axios.create(axiosParams);

axiosInstance.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
  return config
})

axiosInstance.interceptors.response.use(config => {
  return config
}, async error => {
  const originalRequest = error.config
  if ( error.response.status === 401 && error.config && !error.config._isRetry ) {
    originalRequest._isRetry = true
    try {
      const response = await axios.get('/auth/refresh', { baseURL: process.env.API_URL, withCredentials: true })
      localStorage.setItem('token', response.data.accessToken)
      return axiosInstance.request(originalRequest)
    } catch(e) {
    }
  }
  throw error
})

const api = (axios) => {
  return {
    get: (url, config) => axios.get(url, config),
    post: (url, body, config) => axios.post(url, body, config),
    patch: (url, body, config) => axios.patch(url, body, config),
    delete: (url, config) => axios.delete(url, config),
  };
};

export default api(axiosInstance)
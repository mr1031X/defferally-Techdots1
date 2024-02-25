import axios, {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig
} from 'axios'

const apiClient: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'multipart/form-data',
    Accept: 'application/json'
  }
})

apiClient.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem('access_token')
  config.headers = config.headers || {}
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  if (config.method === 'get') {
    config.headers.setContentType('application/json; charset=utf-8')
  }

  return config
})

apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return response
  },
  (error: AxiosError) => {
    try {
      const { response } = error
      if (response?.status === 401) {
        localStorage.removeItem('access_token')
      }
    } catch (e) {
      console.error(e)
    }
    throw error
  }
)

export default apiClient

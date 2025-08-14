import axios, { AxiosError, AxiosInstance } from 'axios'

const API_BASE_URL = '/api'

const instance: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

instance.interceptors.response.use(
  (res) => res.data,
  (e: AxiosError<any>) => {
    if (e.code === 'ECONNABORTED' || e.message?.includes('Network')) {
      throw new Error('네트워크 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.')
    }

    const status = e.response?.status
    const serverMessage = e.response?.data?.message || e.response?.data?.error || `요청 실패 (status: ${status})`

    throw new Error(serverMessage)
  },
)

export default instance

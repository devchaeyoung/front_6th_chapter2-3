import axios, { AxiosInstance } from 'axios'

const API_BASE_URL = '/api'

const instance: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default instance

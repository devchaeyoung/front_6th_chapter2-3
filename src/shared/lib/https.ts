import { AxiosRequestConfig } from 'axios'
import instance from './instance'

export const http = {
  get: async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
    const res = await instance.get<T, T>(url, config)
    return res
  },

  post: async <T>(url: string, data: any, config?: AxiosRequestConfig): Promise<T> => {
    const res = await instance.post<T, T>(url, data, config)
    return res
  },

  put: async <T>(url: string, data?: any, config?: AxiosRequestConfig) => {
    const res = await instance.put<T, T>(url, data, config)
    return res
  },

  patch: async <T>(url: string, data?: any, config?: AxiosRequestConfig) => {
    const res = await instance.patch<T, T>(url, data, config)
    return res
  },

  delete: async (url: string, config?: AxiosRequestConfig): Promise<void> => {
    return instance.delete(url, config)
  },
}

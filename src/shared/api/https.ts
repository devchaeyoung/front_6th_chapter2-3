import { AxiosRequestConfig } from 'axios'
import instance from './instance'
import type { APIResponse as Response } from './type'

export const http = {
  get: async <T>(url: string, config?: AxiosRequestConfig): Promise<Response<T>> => {
    const res = await instance.get<Response<T>>(url, config)
    return res.data
  },

  post: async <T>(url: string, data: any, config?: AxiosRequestConfig): Promise<Response<T>> => {
    const res = await instance.post<Response<T>>(url, data, config)
    return res.data
  },

  put: async <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<Response<T>> => {
    const res = await instance.put<Response<T>>(url, data, config)
    return res.data
  },

  patch: async <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<Response<T>> => {
    const res = await instance.patch<Response<T>>(url, data, config)
    return res.data
  },

  delete: async (url: string, config?: AxiosRequestConfig): Promise<void> => {
    return instance.delete(url, config)
  },
}

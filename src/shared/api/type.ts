import { AxiosResponse } from 'axios'

export type APIResponse<T> = Pick<AxiosResponse<T>, 'data' | 'status'>

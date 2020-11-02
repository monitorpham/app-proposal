import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'
import { Result } from './ApiResult'

export class ApiProvider {
    axiosInstance: AxiosInstance

    token?: string

    constructor(configuration: AxiosRequestConfig) {
        this.axiosInstance = axios.create(configuration)
        this.axiosInstance.interceptors.response.use(this.responseInterceptor, this.errorInterceptor)
    }

    responseInterceptor = (response: AxiosResponse) => {
        console.log(response)
        return response
    }

    errorInterceptor = (error: AxiosError) => {
        return Promise.reject(Result.fromAxiosError(error))
    }

    setToken(token: string) {
        this.token = token
        this.axiosInstance.defaults.headers.Authorization = token;
    }

    async get<T>(url: string, config?: AxiosRequestConfig | undefined): Promise<AxiosResponse<T>> {
        return this.axiosInstance.get<T>(url, config)
    }

    async post<T>(url: string, data?: any, config?: AxiosRequestConfig | undefined): Promise<AxiosResponse<T>> {
        return this.axiosInstance.post<T>(url, data, config)
    }

    async postForm<T>(url: string, data?: any, config?: AxiosRequestConfig | undefined): Promise<AxiosResponse<T>> {
        return this.axiosInstance.post<T>(url, data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            ...config
        })
    }
}
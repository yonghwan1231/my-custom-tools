import axios, { AxiosRequestConfig, AxiosError } from 'axios'
import { config } from '@constants'

type TCustomError = {
  default: string
  [key: number]: string
}

type TAPIOptions = {
  message?: {
    success?: string
    error?: TCustomError
  }
}

export const useCustomAxios = (baseURL: string = config.SERVER_URL) => {
  const customAxios = async <ResponseData, Data = unknown>(
    apiUrl: string,
    options?: AxiosRequestConfig<Data> & TAPIOptions,
  ): Promise<ResponseData> => {
    const url = baseURL + apiUrl
    const { headers, message, ...others } = options ?? {}
    try {
      const res = await axios.request({
        url,
        headers: { ...headers },
        withCredentials: true,
        ...others,
      })
      return res.data as ResponseData
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        alert(getErrorMessage(error, message?.error))
      }
      throw new Error(JSON.stringify(error))
    }
  }

  const getErrorMessage = (error: AxiosError, message?: TCustomError) => {
    if (!error.response) return 'An unexpected error occurred'
    const status = error.response.status
    if (status >= 500) return 'Network error'
    return message?.[status] || message?.default || 'Request error'
  }

  return customAxios
}

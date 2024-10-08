import axios, { AxiosRequestConfig, AxiosError } from 'axios'
import { useQuery, useSuspenseQuery, useMutation } from '@tanstack/react-query'
import { config, messages } from '@constants'

type TAxiosOtions = AxiosRequestConfig & {
  processor?: (data: unknown) => unknown
}

type TQueryOptions = { meta?: { messages?: { [key: number]: string } } }

const customAxios = async (url: string, options: TAxiosOtions) => {
  const isBaseUrl = options.baseURL !== undefined
  const baseURL = isBaseUrl ? options.baseURL : config.SERVER_URL
  const res = await axios.request({
    url: baseURL + url,
    // withCredentials: true,
    ...options,
  })

  if (!options.processor) return res.data
  else return options.processor(res.data)
}

export const useReactQuery = <ResponseData>(
  url: string,
  options: AxiosRequestConfig,
  queryOptions?: any,
) => {
  if (options.method === 'GET') {
    const { suspense } = queryOptions
    const query = suspense ? useSuspenseQuery : useQuery
    return query<ResponseData>({
      queryKey: [url],
      queryFn: () => customAxios(url, options),
      gcTime: Infinity,
      ...queryOptions,
    })
  } else {
    return useMutation<ResponseData>({
      mutationKey: [url],
      mutationFn: () => customAxios(url, options),
      gcTime: Infinity,
      ...queryOptions,
    })
  }
}

export const errorHandler = (error: unknown, query?: TQueryOptions) => {
  const isAxiosError = error instanceof AxiosError
  if (!isAxiosError || !error.response) return alert(messages.error.server)
  const status = error.response.status
  console.log(status)
  if (status >= 500) return alert(messages.error.server)
  if (!query?.meta) return alert(messages.error.request)
  const message = query?.meta?.messages?.[status]
  alert(message)
}

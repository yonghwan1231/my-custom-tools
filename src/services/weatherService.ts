import { config } from '@constants'
import { useReactQuery } from '@hooks'

const sampleAPIURL = `https://api.openweathermap.org/data/2.5/weather?lat=37&lon=126&appid=${config.WEATHER_API_KEY}&units=metric&lang=kr`

const processors = {
  getWeaterData: (data: unknown) => {
    return JSON.stringify(data)
  },
}

export const getWeaterData = () => {
  const url = sampleAPIURL
  const processor = processors.getWeaterData
  const options = { method: 'GET', baseURL: '', processor }
  const meta = { messages: { 404: '커스텀 메시지 출력' } }
  const queryOptions = { gcTime: 0, suspense: true, meta }
  const { data, error } = useReactQuery<string>(url, options, queryOptions)
  return { data, error }
}

//useSuspense 초기 렌더링 2회 발생 원인 필드 : isStale
//useSuspense 재 렌더링 발생 원인 필드 : dataUpdatedAt,errorUpdatedAt,isFetched,isFetching,isFetchedAfterMount,fetchStatus,isRefetching,

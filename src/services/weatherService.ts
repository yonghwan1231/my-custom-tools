import { config } from '@constants'
import { useCustomQuery } from '@hooks'

const sampleAPIURL = `https://api.openweathermap.org/data/2.5/weather?lat=37&lon=126&appid=${config.WEATHER_API_KEY}&units=metric&lang=kr`

const getWeaterData = () => {
  const url = sampleAPIURL
  const options = { method: 'GET', baseURL: '' }
  const meta = { messages: { 404: '커스텀 메시지 출력' } }
  const queryOptions = { gcTime: 0, suspense: true, meta }
  const res = useCustomQuery(url, options, queryOptions)
  return res
}

export const weatherService = { getWeaterData }

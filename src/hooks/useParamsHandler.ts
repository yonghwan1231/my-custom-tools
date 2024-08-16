import { useSearchParams } from 'react-router-dom'

export const useParamsHandler = () => {
  const [params, setParams] = useSearchParams()

  const selectParams = (filterType: string, filterValue: string) => {
    const newParams: { [key: string]: string } = {}
    for (const [key, value] of params.entries()) newParams[key] = value
    if (!filterValue) delete newParams[filterType]
    else newParams[filterType] = filterValue
    if (params.get('page')) newParams.page = '1'
    setParams(newParams)
  }

  return { params, setParams, selectParams }
}

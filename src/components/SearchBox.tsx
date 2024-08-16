import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SelectBox } from '@components'

type TSelectBoxItem = {
  name: string
  value: string
}

type TSelected = Record<string, TSelectBoxItem>

type OwnProps = {
  filters: Record<string, TSelectBoxItem[]>
}

export const SearchBox = ({ filters }: OwnProps) => {
  const [params, setParams] = useSearchParams()
  const [keyword, setKeyword] = useState<string>('')
  const [selected, setSelected] = useState<TSelected>(
    Object.keys(filters).reduce(
      (acc, curr) => ({ ...acc, [curr]: filters[curr][0] }),
      {},
    ),
  )

  const selectParam = (data: TSelectBoxItem) => {
    setSelected({ ...selected, [data.name]: data })
  }

  const refreshSelected = () => {
    params.delete('page')
    const paramsData = Object.fromEntries(params.entries())
    const paramsKeys = Object.keys(paramsData)
    const filterNames = Object.keys(filters)
    let defaultParams = paramsKeys.find((key) => !filterNames.includes(key))
    if (defaultParams) delete paramsData[defaultParams]
    else defaultParams = filters.default[0].value
    const setData = paramsKeys.reduce<Record<string, unknown>>((acc, curr) => {
      const key = Object.keys(paramsData).includes(curr) ? curr : 'default'
      const target = key === 'default' ? defaultParams : paramsData[key]
      acc[key] = filters[key].find(({ value }) => value === target)
      if (!acc[key]) acc[key] = filters[key][0]
      return acc
    }, {}) as TSelected
    setSelected({ ...selected, ...setData })
    setKeyword(params.get(defaultParams) || '')
  }

  const search = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const updateParmas: Record<string, unknown> = {}
    for (const prop in selected) {
      const value = selected[prop].value
      if (prop === 'default') updateParmas[value] = keyword
      else updateParmas[prop] = value
    }
    setParams({ ...updateParmas, page: '1' })
  }

  useEffect(() => {
    refreshSelected()
  }, [params])

  return (
    <form className="searchbox_wrap">
      {Object.keys(filters).map((name, idx) => (
        <SelectBox
          key={idx}
          name={name}
          values={filters[name]}
          onChange={selectParam}
          defaultValue={selected[name].value}
        />
      ))}
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <div className="btn_wrap inline">
        <button className="default search" onClick={search}>
          검색
        </button>
      </div>
    </form>
  )
}

import { useSearchParams } from 'react-router-dom'

export const Pagination = ({ total }: { total: number }) => {
  const [params, setParams] = useSearchParams()
  const perPage = 5
  const currPage = Number(params.get('page'))
  const lastPage = Math.ceil(total / perPage)
  const nextCount = Math.ceil(currPage / 5) - 1

  const pageHandler = (page: number) => {
    if (1 > page || page > lastPage) return
    const newParams: { [key: string]: unknown } = {}
    for (const [key, value] of params.entries()) newParams[key] = value
    setParams({ ...newParams, page: String(page) })
  }

  return (
    <div id="pagination" className="mt_40">
      <button onClick={() => pageHandler(currPage - 1)}>&lt;</button>
      {[...new Array(perPage)].map((_, idx) => {
        const startPage = nextCount * perPage
        if (startPage + (idx + 1) > lastPage) return
        return (
          <button
            key={idx}
            className={currPage - 1 === startPage + idx ? 'active' : ''}
            onClick={() => {
              pageHandler(startPage + (idx + 1))
            }}
          >
            {startPage + (idx + 1)}
          </button>
        )
      })}
      <button onClick={() => pageHandler(currPage + 1)}>&gt;</button>
    </div>
  )
}

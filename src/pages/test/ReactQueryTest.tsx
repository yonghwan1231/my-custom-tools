import { getWeaterData } from '@services'
import { Suspense } from 'react'

const ReactQueryTestLoadable = () => {
  const res = getWeaterData()
  console.log(res.data)

  return (
    <main>
      <header>
        <h1>리액트 쿼리 테스트</h1>
      </header>

      <section>{res.data}</section>
    </main>
  )
}

export const ReactQueryTest = () => (
  <Suspense fallback={<div>이 페이지 전용 로딩창...</div>}>
    <ReactQueryTestLoadable />
  </Suspense>
)

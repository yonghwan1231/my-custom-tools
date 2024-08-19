import { getWeaterData } from '@services'
import { Suspense } from 'react'

const ReactQueryTestLoaded = () => {
  const res = getWeaterData()
  console.log(res)

  return (
    <main>
      <header>
        <h1>리액트 쿼리 테스트</h1>
      </header>

      <section>{JSON.stringify(res.data)}</section>
    </main>
  )
}

export const ReactQueryTest = () => (
  <Suspense fallback={<div>이 페이지 전용 로딩창...</div>}>
    <ReactQueryTestLoaded />
  </Suspense>
)

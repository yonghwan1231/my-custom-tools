import { weatherService } from '@services'

export const ReactQueryTest = () => {
  const res = weatherService.getWeaterData()

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

import { SearchBox, Pagination } from '@components'

export const SearchBoxTest = () => {
  const defaultValues = [
    { name: '제목', value: 'title' },
    { name: '내용', value: 'content' },
  ]

  const postTypeValues = [
    { name: '전체', value: 'all' },
    { name: '진행중', value: 'ongoing' },
    { name: '종료', value: 'finished' },
  ]

  return (
    <main id="searchBoxTest" className="container">
      <SearchBox
        filters={{
          postType: postTypeValues,
          default: defaultValues,
        }}
      />

      <section className="flex">리스트</section>

      <Pagination total={30} />
    </main>
  )
}

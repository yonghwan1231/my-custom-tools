export const getPostNumber = (
  idx: number,
  totalCount: number,
  size: number = 5
) => {
  const queryString = window.location.search
  const params = new URLSearchParams(queryString)
  const page = params.get('page')
  if (!page) throw new Error('페이지 없음')
  return totalCount - (Number(page) - 1) * size - idx
}

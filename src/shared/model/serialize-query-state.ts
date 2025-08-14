export type QueryState = {
  skip: number
  limit: number
  searchQuery: string
  sortBy: string
  sortOrder: string
  selectedTag: string
}

// todo -> setSTate 변경 어떻게 할지 고민하기
export const serializeQueryState = ({ skip, limit, searchQuery, sortBy, sortOrder, selectedTag }: QueryState) => {
  const params = new URLSearchParams()
  if (skip) params.set('skip', String(skip))
  if (limit) params.set('limit', String(limit))
  if (searchQuery) params.set('search', searchQuery)
  if (sortBy) params.set('sortBy', sortBy)
  if (sortOrder) params.set('sortOrder', sortOrder)
  if (selectedTag) params.set('tag', selectedTag)
  return `?${params.toString()}`
}

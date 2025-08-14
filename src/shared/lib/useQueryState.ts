import { useCallback } from 'react'
import { useQueryNavigate } from './useQueryNavigate'
import { useQueryParams } from './useQueryParams'
import { QueryState } from '../model'

export const useQueryState = () => {
  const { updateURL } = useQueryNavigate()
  const queryParams = useQueryParams()

  const setQueryParam = useCallback(
    (key: keyof QueryState, value: any) => {
      updateURL({ ...queryParams, [key]: value })
    },
    [updateURL, queryParams],
  )

  return {
    ...queryParams,
    setQueryParam,
    setSkip: (skip: number) => setQueryParam('skip', skip),
    setLimit: (limit: number) => setQueryParam('limit', limit),
    setSearchQuery: (searchQuery: string) => setQueryParam('searchQuery', searchQuery),
    setSortBy: (sortBy: string) => setQueryParam('sortBy', sortBy),
    setSortOrder: (sortOrder: string) => setQueryParam('sortOrder', sortOrder),
    setSelectedTag: (selectedTag: string) => setQueryParam('selectedTag', selectedTag),
  }
}

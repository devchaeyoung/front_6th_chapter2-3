import { useLocation } from 'react-router-dom'
import { useMemo } from 'react'
import type { QueryState } from '../model/serialize-query-state'

export const useQueryParams = (): QueryState => {
  const location = useLocation()

  return useMemo(() => {
    const params = new URLSearchParams(location.search)
    return {
      skip: parseInt(params.get('skip') || '0'),
      limit: parseInt(params.get('limit') || '10'),
      searchQuery: params.get('search') || '',
      sortBy: params.get('sortBy') || '',
      sortOrder: params.get('sortOrder') || 'asc',
      selectedTag: params.get('tag') || '',
    }
  }, [location.search])
}

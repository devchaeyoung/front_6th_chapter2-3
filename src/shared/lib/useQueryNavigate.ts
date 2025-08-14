import { useNavigate } from 'react-router-dom'
import { serializeQueryState, type QueryState } from '@/shared/model'

export const useQueryNavigate = () => {
  const navigate = useNavigate()

  const updateURL = (queryState: QueryState) => {
    const query = serializeQueryState(queryState)
    navigate(query)
  }

  return { updateURL }
}

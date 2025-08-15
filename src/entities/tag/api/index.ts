import { http } from '@/shared/lib'
import { Tag } from '@/entities/tag'

export const getTags = async () => {
  const res = await http.get<Tag[]>('/posts/tags')
  console.log(res)
  return res
}

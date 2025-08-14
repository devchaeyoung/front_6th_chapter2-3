import { http } from '@/shared/lib'
import type { Post, PostWithUser, User } from '../model/types'

export interface GetPostsParams {
  limit: number
  skip: number
}

interface PaginatedRes {
  total: number
  skip: number
  limit: number
}

interface PaginatedPost extends PaginatedRes {
  posts: Post[]
}

interface PaginatedUser extends PaginatedRes {
  users: User[]
}

export const getPosts = async ({ limit, skip }: GetPostsParams) => {
  const url = `/posts?limit=${limit}&skip=${skip}`
  const res = await http.get<PaginatedPost>(url)
  return res as PaginatedPost
}

export const getUsers = async () => {
  const url = `/users?limit=0&select=username,image`
  const res = await http.get<PaginatedUser>(url)
  return res as PaginatedUser
}

export const getPostsWithUsers = ({ users, posts }: { users: User[]; posts: Post[] }): PostWithUser[] => {
  const result = posts.map((post) => ({
    ...post,
    author: users.find((user) => user.id === post.userId),
  }))
  return result
}

export type NewPost = { title: string; body: string; userId: number }

export const postPost = async (post: NewPost) => {
  const data = JSON.stringify(post)
  const res = await http.post<Post>('/posts/add', data)
  return res
}

// export const getPost = async (id: number) => {
//   const res = await http.get(`/posts/${id}`)
//   return res.data
// }

// export const searchPosts = async (q: string) => {
//   const res = await http.get(`/posts/search?q=${q}`)
//   return res.data
// }

// export const getTags = async () => {
//   const res = await http.get(`/tags`)
//   return res.data
// }

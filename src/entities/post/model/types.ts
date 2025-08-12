export interface Post {
  id: number
  title: string
  body: string
  userId: number
  tags?: string[]
  reactions?: { likes: number; dislikes: number }
}

export interface User {
  id: number
  username: string
  image?: string /* ... */
}

export interface Comment {
  id: number
  postId: number
  body: string
  likes: number
  user: { username: string }
}

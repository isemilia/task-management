export interface IAuthContext {
  user: {
    id: string
    name: string
    username: string
  } | null
  isAuth: boolean
}
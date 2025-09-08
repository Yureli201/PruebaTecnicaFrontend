export interface User {
  id: number
  email: string
  password: string
  name: string
  role: string
  avatar: string
}

export interface NewUser {
  name: string
  email: string
  password: string
  avatar: string
}

export interface UserCredentials {
  email: string
  password: string
}
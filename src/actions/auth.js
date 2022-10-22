import {
  AUTH_SIGNUP,
  AUTH_SINGIN,
  AUTH_TOKEN
} from '../configs/actionTypes/auth'

export const signup = (email) => ({type: AUTH_SIGNUP, email})
export const signIn = (email) => ({type: AUTH_SINGIN, email})
export const authToken = (token) => ({type: AUTH_TOKEN, token})
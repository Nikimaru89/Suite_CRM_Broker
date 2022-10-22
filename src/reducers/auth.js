import {
  AUTH_SIGNUP,
  AUTH_SINGIN,
  AUTH_TOKEN
} from '../configs/actionTypes/auth'

const INITIAL_STATE = {
  currentUser: {
    email:'',
    token:''
  }
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_SIGNUP:
      return {
        ...state,
        currentUser: {
          email: action.email
        }
      }
    case AUTH_SINGIN:
      return {
        ...state,
        currentUser: {
          email:action.email
        }
      }
    case AUTH_TOKEN:
      return {
        ...state,
        currentUser: {
          token: action.token
        }
      }
    default:
      return state
  }
}

export default reducer
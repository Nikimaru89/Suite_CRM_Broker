import { combineReducers } from 'redux'

import auth from './auth'
import client from './client'
import income from './income'

const rootReducer = combineReducers({
  auth,
  client,
  income
})

export default rootReducer

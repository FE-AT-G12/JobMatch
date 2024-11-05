import { combineReducers } from '@reduxjs/toolkit'
import counterReducer from './features/userSlice'

const rootReducer = combineReducers({
  user: counterReducer,
})

export default rootReducer

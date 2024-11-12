import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from '../apis/apiSlice'

import userReducer from '../redux/features/userSlice'

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    user: userReducer, // Reference the user slice correctly
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
})

export default store

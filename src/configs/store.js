import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from '../apis/apiSlice'

const rootReducer = {}
const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,

    ...rootReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
})

export default store

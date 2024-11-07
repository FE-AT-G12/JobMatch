import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user', 
  initialState: {
    user: JSON.parse(localStorage.getItem('user')) || null,
  },
  reducers: {
    login: (state, actions) => {
      console.log({ payload: actions.payload })
      state.user = actions.payload
    },
    logout: (state) => {
      state.user = null
      localStorage.removeItem('user')
    },
  },
})

export const { login, logout } = userSlice.actions
export const selectUser = (store) => store.user.user
export default userSlice.reducer
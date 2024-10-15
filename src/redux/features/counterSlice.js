import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, actions) => {
      state.user = actions.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const {
  login,
  logout,
  setProduct,
  clearProduct,
  setDiamond,
  clearDiamond,
} = counterSlice.actions;
export const selectUser = (store) => store.user.user;
export default counterSlice.reducer;

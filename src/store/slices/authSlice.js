import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    isLoading: false,
    hasChannel: false,
  },
  reducers: {
    loginUser: (state, { payload }) => {
      state.isLoggedIn = true;
    },
    logoutUser: (state, { payload }) => {
      state.isLoggedIn = false;
    },
    createChannel: (state, { payload }) => {
      state.hasChannel = true;
    },
  },
});
export const { loginUser, logoutUser, createChannel } = authSlice.actions;
export default authSlice.reducer;

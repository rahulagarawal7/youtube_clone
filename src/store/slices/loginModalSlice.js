// src/store/slices/loginModalSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showLoinModal: false,
};

const loginModalSlice = createSlice({
  name: "loginModal",
  initialState,
  reducers: {
    openLoginModal: (state) => {
      state.showLoinModal = true;
    },
    closeLoginModal: (state) => {
      state.showLoinModal = false;
    },
    toggleLoginModal: (state) => {
      state.showLoinModal = !state.showLoinModal;
    },
  },
});

export const { openLoginModal, closeLoginModal, toggleLoginModal } =
  loginModalSlice.actions;

export default loginModalSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const alertSlice = createSlice({
  name: "alert",
  initialState: {
    queue: [],
  },
  reducers: {
    showAlert: (state, { payload }) => {
      state.queue.push({
        title: payload.title,
        status: payload.status,
        message: payload.message,
      });
    },
    popAlert: (state) => {
      state.queue.shift();
    },
    clearAllAlert: (state) => {
      state.queue = [];
    },
  },
});

export const { showAlert, popAlert, clearAllAlert } = alertSlice.actions;
export default alertSlice.reducer;

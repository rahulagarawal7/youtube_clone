import { combineReducers } from "@reduxjs/toolkit";
import sidebarReducer from "./slices/sidebarSlice";
import authSlice from "./slices/authSlice";
import loginModalSlice from "./slices/loginModalSlice";

export const rootReducer = combineReducers({
  sidebar: sidebarReducer,
  auth: authSlice,
  loginModal: loginModalSlice,
});

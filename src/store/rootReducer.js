import { combineReducers } from "@reduxjs/toolkit";
import sidebarReducer from "./slices/sidebarSlice";
import authReducer from "./slices/authSlice";
import loginModalReducer from "./slices/loginModalSlice";
import alertReducer from "./slices/alertSlice";

const rootReducer = combineReducers({
  sidebar: sidebarReducer,
  auth: authReducer,
  loginModal: loginModalReducer,
  alert: alertReducer,
});

export default rootReducer;

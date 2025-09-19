import { combineReducers } from "@reduxjs/toolkit";
import sidebarReducer from "./slices/sidebarSlice";
import authReducer from "./slices/authSlice";
import loginModalReducer from "./slices/loginModalSlice";
import alertReducer from "./slices/alertSlice";
import channelReducer from "./slices/channelSlice";

const rootReducer = combineReducers({
  sidebar: sidebarReducer,
  auth: authReducer,
  loginModal: loginModalReducer,
  alert: alertReducer,
  channel: channelReducer,
});

export default rootReducer;

import { AUTHENTICATION } from "./endpoints";
import axiosInstance from "./NetworkInterceptor";

export const resisterUser = (data) => {
  return axiosInstance.post(AUTHENTICATION.resister_user, data);
};

export const signinUser = (data) => {
  return axiosInstance.post(AUTHENTICATION.signin_user, data);
};

export const logoutUser = () => {
  return axiosInstance.post(AUTHENTICATION.logout_user);
};

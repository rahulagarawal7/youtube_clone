import { AUTHENTICATION, CHANNEL } from "./endpoints";
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

export const getUser = () => {
  return axiosInstance.get(AUTHENTICATION.get_user);
};

export const createChannel = (data) => {
  return axiosInstance.post(CHANNEL.create_channel, data);
};

export const getChannelById = (id) => {
  return axiosInstance.get(`${CHANNEL.get_channel_byID}/${id}`);
};

export const updateChannel = (id, data) => {
  return axiosInstance.put(`${CHANNEL.update_channel}/${id}`, data);
};

export const getAllChannel = (id) => {
  return axiosInstance.get(CHANNEL.get_all_channel);
};

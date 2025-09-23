import { AUTHENTICATION, CHANNEL, VIDEO } from "./endpoints";
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

export const addVideo = (data) => {
  return axiosInstance.post(VIDEO.add_video, data);
};

export const updateVideo = (id, data) => {
  return axiosInstance.put(`${VIDEO.update_video}/${id}`, data);
};

export const getAllVideos = () => {
  return axiosInstance.get(VIDEO.get_all_video);
};

export const getChannelVideos = (data) => {
  return axiosInstance.get(VIDEO.get_channel_video, data);
};

export const deleteVideo = (id) => {
  return axiosInstance.delete(`${VIDEO.update_video}/${id}`);
};

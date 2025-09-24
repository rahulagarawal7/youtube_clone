import axios from "axios";
import { AUTHENTICATION, CHANNEL, VIDEO, COMMENT } from "./endpoints";
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

export const toggleSubscription = (channelId) => {
  return axiosInstance.post(
    `${CHANNEL.toggle_subscription}/${channelId}/subscribe`
  );
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

export const getVideoById = (id) => {
  return axiosInstance.get(`${VIDEO.get_video_byId}/${id}`);
};

export const getAllVideoByCategory = (category) => {
  return axiosInstance.get(`${VIDEO.get_video_category}/${category}`);
};

export const getAllVideoByQuery = (query) => {
  return axiosInstance.get(`${VIDEO.get_video_search}/${query}`);
};

// Add a comment for a video
export const addComment = (videoId, text) => {
  return axiosInstance.post(`${COMMENT.add_comment}${videoId}`, { text });
};

// Get all comments for a video
export const getComments = (videoId) => {
  return axiosInstance.get(`${COMMENT.get_all_comment}${videoId}`);
};

// Edit a comment
export const editComment = (commentId, text) => {
  return axiosInstance.put(`${COMMENT.edit_comment}${commentId}`, { text });
};

// Delete a comment
export const deleteComment = (commentId) => {
  return axiosInstance.delete(`${COMMENT.delete_comment}${commentId}`);
};

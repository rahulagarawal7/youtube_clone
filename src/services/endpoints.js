import { API_URL, JWT_SECRET } from "./constant";

export const AUTHENTICATION = {
  resister_user: `${API_URL}auth/register`,
  signin_user: `${API_URL}auth/login`,
  logout_user: `${API_URL}auth/logout`,
  get_user: `${API_URL}auth`,
};

export const CHANNEL = {
  create_channel: `${API_URL}channels`,
  get_all_channel: `${API_URL}channels`,
  update_channel: `${API_URL}channels`,
  get_channel_byID: `${API_URL}channels`,
  toggle_subscription: `${API_URL}channels`,
};

export const VIDEO = {
  add_video: `${API_URL}videos`,
  get_all_video: `${API_URL}videos`,
  get_channel_video: `${API_URL}videos/channel`,
  update_video: `${API_URL}videos`,
  get_video_byId: `${API_URL}videos`,
  get_video_category:`${API_URL}videos/category`,
  get_video_search:`${API_URL}videos/search`
  
};

export const COMMENT = {
  add_comment: `${API_URL}comments/`, // POST /:videoId
  get_all_comment: `${API_URL}comments/`, // GET /:videoId
  edit_comment: `${API_URL}comments/`, // PUT /:commentId
  delete_comment: `${API_URL}comments/`, // DELETE /:commentId
};

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
};

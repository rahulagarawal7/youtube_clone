import { API_URL, JWT_SECRET } from "./constant";

export const AUTHENTICATION = {
  resister_user: `${API_URL}auth/register`,
  signin_user: `${API_URL}auth/login`,
  logout_user: `${API_URL}auth/logout`,
};

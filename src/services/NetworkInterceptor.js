import axios from "axios";
import { API_URL, REQUEST_TIMEOUT, JWT_SECRET } from "./constant";
import { showAlert } from "../store/slices/alertSlice";

let injectedStore; // store will be injected later

export const injectStore = (store) => {
  injectedStore = store;
};

const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: REQUEST_TIMEOUT,
  headers: {
    "Content-Type": "application/json",
    "jwt-secret": JWT_SECRET,
  },
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.log("inter-error-->", error.response.data);
    const status = error.response?.status;
    const message =
      error.response?.data?.message ||
      "Something went wrong. Please try again!";

    if (injectedStore) {
      injectedStore.dispatch(
        showAlert({
          title: "Alert!",
          message,
          status,
        })
      );
    }

    if (status === 401) {
      localStorage.removeItem("authToken");
      window.location.href = "/";
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;

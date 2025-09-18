import React from "react";
import { useDispatch } from "react-redux";
import { logoutUserThunk } from "../store/slices/authSlice";
import { showAlert } from "../store/slices/alertSlice";

const LogoutModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  if (!isOpen) return null;

  const handleOnLogout = async () => {
    const res = await dispatch(logoutUserThunk()).unwrap();
    if (res?.success) {
      dispatch(
        showAlert({ title: "Alert!", message: res?.message, status: 200 })
      );
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
      <div className="bg-white w-[90%] sm:w-full max-w-sm rounded-2xl shadow-2xl p-6 sm:p-8 relative animate-fadeIn">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-black"
        >
          ✕
        </button>

        {/* Header */}
        <div className="flex flex-col items-center mb-6">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
            alt="YouTube Logo"
            className="h-5 sm:h-6"
          />
          <h2 className="text-lg sm:text-xl font-semibold mt-3">
            Logout Confirmation
          </h2>
          <p className="text-gray-600 text-sm mt-2 text-center">
            Are you sure you want to log out of your account?
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-6">
          <button
            onClick={onClose}
            className="flex-1 bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300 transition"
          >
            Cancel
          </button>
          <button
            onClick={handleOnLogout}
            className="flex-1 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;

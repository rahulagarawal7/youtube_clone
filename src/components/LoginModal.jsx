import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signinUserThunk } from "../store/slices/authSlice";
import { Eye, EyeOff } from "lucide-react";
import { registerThunk } from "../store/slices/authSlice";
import Loader from "./Loader";
import PopupModal from "./PopupModal";

const LoginModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showPopup, setShowPopup] = useState({
    show: false,
    message: "",
    title: "",
  });

  const { loading } = useSelector((store) => store.auth?.register);
  const { loginLoading } = useSelector((store) => store.auth?.loggedIn);

  const dispatch = useDispatch();

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSignup) {
      const res = await dispatch(registerThunk(formData)).unwrap(); // unwrap gets the payload
      if (res.success) {
        setShowPopup({
          show: true,
          message: res?.message || "✅ Registered Successfully!",
          title: "Success",
        });
        setIsSignup(false);
      }

      // onClose();
    } else {
      console.log("Login Data:", formData);

      const result = await dispatch(signinUserThunk(formData)).unwrap();
      if (result?.success) {
        onClose();
      }
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
      <div className="bg-white w-[90%] sm:w-full max-w-md max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl p-6 sm:p-8 relative animate-fadeIn">
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
            className="h-4 sm:h-6 cursor-pointer"
          />
          <p className="text-gray-600 text-xs sm:text-sm mt-2 text-center">
            {isSignup ? "Create your account" : "Sign in to continue"}
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-4 text-sm sm:text-base"
        >
          {/* Full Name (only for signup) */}
          {isSignup && (
            <div>
              <label className="block text-gray-700">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
                className="mt-1 w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
          )}

          {/* Email */}
          <div>
            <label className="block text-gray-700">Email ID</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              className="mt-1 w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700">Password</label>
            <div className="flex items-center border rounded-lg mt-1 px-3">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Enter your password"
                className="flex-1 py-2 focus:outline-none focus:ring-0"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="ml-2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {/* Forgot password (only for login) */}
          {!isSignup && (
            <div className="text-right">
              <button
                type="button"
                className="text-xs sm:text-sm text-red-600 hover:underline"
              >
                Forgot password?
              </button>
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition shadow-md text-sm sm:text-base"
          >
            {isSignup ? "Create Account" : "Login"}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-500 text-xs sm:text-sm">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Footer */}
        <div className="text-center text-xs sm:text-sm">
          <p className="text-gray-600">
            {isSignup ? "Already have an account?" : "Don’t have an account?"}{" "}
            <button
              onClick={() => setIsSignup(!isSignup)}
              className="text-red-600 font-medium hover:underline"
            >
              {isSignup ? "Login here" : "Create one"}
            </button>
          </p>
        </div>
        <Loader isVisible={loading || loginLoading} />
        <PopupModal
          title={showPopup.title}
          message={showPopup.message}
          isVisible={showPopup.show}
          onClose={() => setShowPopup({ show: false, message: "", title: "" })}
        />
      </div>
    </div>
  );
};

export default LoginModal;

import React from "react";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import animationData from "../assets/animations/404_Animation.json";

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-4">
      <Lottie animationData={animationData} loop={true} className="w-80 h-80" />
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mt-4">
        Page Not Found
      </h2>
      <p className="text-gray-500 mt-2 max-w-md">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>

      <Link
        to="/"
        className="mt-6 inline-flex items-center gap-2 px-5 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg shadow-md transition"
      >
        <Home className="w-5 h-5" />
        Back to Home
      </Link>
    </div>
  );
};

export default PageNotFound;

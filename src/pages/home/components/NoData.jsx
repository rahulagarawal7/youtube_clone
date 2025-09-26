import React from "react";
import { VideoOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const NoData = () => {
  const navigate = useNavigate();

  const { isLoggedIn, userInfo } = useSelector(
    (store) => store?.auth?.loggedIn
  );

  return (
    <div className="flex items-center justify-center min-h-[60vh] px-4">
      <div className="flex flex-col items-center text-center">
        {/* Icon / Illustration */}
        <div className="p-8 bg-gray-100 rounded-full mb-6">
          <VideoOff className="w-16 h-16 text-gray-400" />
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          No videos found
        </h2>

        {/* Description */}
        <p className="text-gray-500 mb-4 max-w-xs">
          This Category doesn’t have any videos yet. Try creating your channel
          and adding videos to get started!
        </p>

        {/* CTA button */}
        <button
          onClick={() => navigate("channel")}
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          {!isLoggedIn
            ? "Login"
            : !userInfo.hasChannel
            ? "Create Channel"
            : "Add Video"}
        </button>
      </div>
    </div>
  );
};

export default NoData;

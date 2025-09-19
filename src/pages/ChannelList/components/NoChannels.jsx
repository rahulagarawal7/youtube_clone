import React from "react";
import { RefreshCw } from "lucide-react"; // optional refresh icon

const NoChannels = ({ fetchChannels }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-lg rounded-xl p-8 flex flex-col items-center text-center max-w-sm">
        {/* Optional icon */}
        <RefreshCw className="w-12 h-12 text-blue-400 mb-4 animate-spin-slow" />

        <p className="text-gray-700 text-lg font-medium mb-2">
          No channels available
        </p>
        <p className="text-gray-400 text-sm mb-6">
          Looks like you don’t have any channels yet. Click refresh to try
          again.
        </p>

        <button
          onClick={fetchChannels}
          className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-5 py-2 rounded-lg shadow-md transition duration-200"
        >
          <RefreshCw className="w-4 h-4" />
          Refresh
        </button>
      </div>
    </div>
  );
};

export default NoChannels;

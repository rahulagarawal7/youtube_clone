import React from "react";

const ChannelTabs = () => {
  return (
    <div className="border-b border-gray-200 flex gap-6 px-6">
      <button className="py-3 font-medium text-red-600 border-b-2 border-red-600">
        Videos
      </button>
      <button className="py-3 font-medium text-gray-600 hover:text-gray-900">
        Home
      </button>
      <button className="py-3 font-medium text-gray-600 hover:text-gray-900">
        Playlists
      </button>
      <button className="py-3 font-medium text-gray-600 hover:text-gray-900">
        About
      </button>
    </div>
  );
};

export default ChannelTabs;

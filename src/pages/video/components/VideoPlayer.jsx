import React from "react";

const VideoPlayer = ({ thumbnailUrl, title }) => {
  return (
    <div className="relative w-full bg-black rounded-xl overflow-hidden mb-4">
      <div className="aspect-video relative">
        <img
          src={thumbnailUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-700 transition-colors">
            <div className="w-0 h-0 border-l-[20px] border-l-white border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;

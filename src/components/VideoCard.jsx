import React from "react";

const VideoCard = ({ video }) => {
  return (
    <div className="w-full cursor-pointer">
      {/* Thumbnail */}
      <div className="relative w-full aspect-video rounded-lg overflow-hidden">
        <img
          src={video.thumbnailUrl}
          alt={video.title}
          className="w-full h-full object-cover"
        />
        <span className="absolute bottom-1 right-1 bg-black bg-opacity-75 text-white text-xs px-1.5 py-0.5 rounded">
          {video.duration}
        </span>
      </div>

      {/* Info */}
      <div className="mt-2 flex space-x-3">
        {/* Channel avatar */}
        <img
          src={`https://ui-avatars.com/api/?name=${video.uploader}&background=random`}
          alt={video.uploader}
          className="w-9 h-9 rounded-full flex-shrink-0"
        />

        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 leading-tight">
            {video.title}
          </h3>
          <p className="text-xs text-gray-600 mt-1">{video.uploader}</p>
          <p className="text-xs text-gray-500">
            {video.views.toLocaleString()} views •{" "}
            {new Date(video.uploadDate).toDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;

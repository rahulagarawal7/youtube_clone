import React from "react";

const SuggestedVideoCard = ({ video, formatNumber, formatDate }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
      {/* Thumbnail */}
      <div className="relative flex-shrink-0 w-full sm:w-48 md:w-56 lg:w-64">
        <img
          src={video.thumbnailUrl}
          alt={video.title}
          className="w-full h-44 sm:h-28 md:h-32 lg:h-36 object-cover rounded-lg"
        />
        <div className="absolute bottom-1 right-1 bg-black bg-opacity-80 text-white text-xs px-1 rounded">
          {video.duration}
        </div>
      </div>

      {/* Info */}
      <div className="flex-1">
        <h3 className="text-sm md:text-base font-medium text-gray-900 line-clamp-2 hover:text-blue-600 transition-colors">
          {video.title}
        </h3>
        <p className="text-xs md:text-sm text-gray-600">{video.uploader}</p>
        <div className="text-xs md:text-sm text-gray-500">
          {formatNumber(video.views)} views • {formatDate(video.uploadDate)}
        </div>
      </div>
    </div>
  );
};

export default SuggestedVideoCard;

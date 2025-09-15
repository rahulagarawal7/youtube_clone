import React from "react";

const VideoActions = ({
  views,
  date,
  likes,
  dislikes,
  formatNumber,
  formatDate,
}) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
      <div className="flex items-center gap-4 text-sm text-gray-600">
        <span>{formatNumber(views)} views</span>
        <span>•</span>
        <span>{formatDate(date)}</span>
      </div>

      <div className="flex items-center gap-2">
        {/* Like / Dislike */}
        <div className="flex items-center bg-gray-100 rounded-full overflow-hidden">
          <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-200 transition-colors">
            👍 <span>{formatNumber(likes)}</span>
          </button>
          <div className="w-px h-6 bg-gray-300"></div>
          <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-200 transition-colors">
            👎 <span>{formatNumber(dislikes)}</span>
          </button>
        </div>

        <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">
          Share
        </button>
        <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">
          Save
        </button>
      </div>
    </div>
  );
};

export default VideoActions;

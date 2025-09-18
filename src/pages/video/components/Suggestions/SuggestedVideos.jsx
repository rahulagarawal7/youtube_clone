import React from "react";
import SuggestedVideoCard from "./SuggestedVideoCard";

const SuggestedVideos = ({ videos, currentId, formatNumber, formatDate }) => {
  return (
    <div className="w-full xl:w-96">
      <h2 className="text-lg font-semibold mb-4">Up next</h2>
      <div className="space-y-3">
        {videos
          .filter((v) => v.videoId !== currentId)
          .slice(0, 10)
          .map((v) => (
            <div
              key={v?.videoId}
              className="transform hover:scale-105 transition-transform duration-200 ease-in-out"
            >
              <SuggestedVideoCard
                key={v.videoId}
                video={v}
                formatNumber={formatNumber}
                formatDate={formatDate}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default SuggestedVideos;

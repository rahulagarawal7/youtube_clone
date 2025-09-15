import React from "react";
import VideoCard from "../../../components/VideoCard";

const ChannelVideos = ({ videos, onUploadClick }) => {
  return (
    <div className="p-6 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {videos?.length > 0 ? (
        videos.map((video) => <VideoCard key={video.videoId} video={video} />)
      ) : (
        <div className="col-span-full flex flex-col items-center justify-center py-20">
          <p className="text-gray-500 mb-4">No videos uploaded yet.</p>
          <button
            onClick={onUploadClick}
            className="px-5 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition"
          >
            Upload New Video
          </button>
        </div>
      )}
    </div>
  );
};

export default ChannelVideos;

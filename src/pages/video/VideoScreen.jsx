import React from "react";
import { dummyComments, videos } from "../../utils/dummyData";
import VideoPlayer from "./components/VideoPlayer";
import VideoActions from "./components/VideoActions";
import ChannelInfo from "./components/ChannelInfo";
import CommentsSection from "./components/Comments/CommentsSection";
import SuggestedVideos from "./components/Suggestions/SuggestedVideos";

const VideoScreen = () => {
  const id = "1";
  const video = videos.find((v) => v.videoId === id) || videos[0];

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 1000) return (num / 1000).toFixed(1) + "K";
    return num.toString();
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className=" mx-auto px-4 py-6 flex flex-col xl:flex-row gap-6">
      <div className="flex-1 max-w-4xl">
        <VideoPlayer thumbnailUrl={video.thumbnailUrl} title={video.title} />
        <h1 className="text-xl md:text-2xl font-bold mb-2">{video.title}</h1>
        <VideoActions
          views={video.views}
          date={video.uploadDate}
          likes={video.likes}
          dislikes={video.dislikes}
          formatNumber={formatNumber}
          formatDate={formatDate}
        />
        <ChannelInfo
          uploader={video.uploader}
          description={video.description}
        />
        <CommentsSection comments={dummyComments} />
      </div>

      {/* Sidebar */}
      <SuggestedVideos
        videos={videos}
        currentId={id}
        formatNumber={formatNumber}
        formatDate={formatDate}
      />
    </div>
  );
};

export default VideoScreen;

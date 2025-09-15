import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { videos } from "../../utils/dummyData";
import { useSelector } from "react-redux";

import NoChannel from "./components/NoChannel";
import UploadVideoModal from "./components/UploadVideoModal";
import ChannelBanner from "./components/ChannelBanner";
import ChannelInfo from "./components/ChannelInfo";
import ChannelTabs from "./components/ChannelTabs";
import ChannelVideos from "./components/ChannelVideos";

const ChannelScreen = () => {
  const { channelId } = useParams();
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const { hasChannel } = useSelector((store) => store?.auth);

  const handleUploadVideo = (videoData) => {
    console.log("Uploaded:", videoData);
  };

  if (!hasChannel) return <NoChannel />;

  // Dummy channel data (replace with API/Redux later)
  const channel = {
    id: channelId,
    name: "CodeWithSam",
    avatar: "https://ui-avatars.com/api/?name=CodeWithSam&background=random",
    banner:
      "https://images.unsplash.com/photo-1503264116251-35a269479413?w=1200&h=400&fit=crop",
    subscribers: 25000,
    description:
      "Welcome to CodeWithSam! 🚀 Learn React, Node.js, and full-stack development in a fun and easy way.",
  };

  return (
    <div className="w-full">
      <ChannelBanner banner={channel.banner} />

      <ChannelInfo
        channel={channel}
        videos={videos}
        onUploadClick={() => setIsUploadOpen(true)}
      />

      <ChannelTabs />

      <UploadVideoModal
        isOpen={isUploadOpen}
        onClose={() => setIsUploadOpen(false)}
        onUpload={handleUploadVideo}
      />

      <ChannelVideos
        videos={videos}
        onUploadClick={() => setIsUploadOpen(true)}
      />
    </div>
  );
};

export default ChannelScreen;

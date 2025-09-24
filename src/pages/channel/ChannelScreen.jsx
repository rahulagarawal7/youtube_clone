import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { videos } from "../../utils/dummyData";
import { useDispatch, useSelector } from "react-redux";
import CreateChannelModal from "./components/CreateChannelModal";

import NoChannel from "./components/NoChannel";
import UploadVideoModal from "./components/UploadVideoModal";
import ChannelBanner from "./components/ChannelBanner";
import ChannelInfo from "./components/ChannelInfo";
import ChannelTabs from "./components/ChannelTabs";
import ChannelVideos from "./components/ChannelVideos";
import { getUserChannelThunk } from "../../store/slices/channelSlice";
import { getChannelVideoThunk } from "../../store/slices/videoSlice";

const ChannelScreen = () => {
  const { channelId } = useParams();
  const dispatch = useDispatch();

  // hooks at the top
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userChannelData, setUserChannelData] = useState({});

  const { userInfo } = useSelector((store) => store?.auth?.loggedIn);
  const { channel } = useSelector((store) => store?.channel);
  const { channelVideo } = useSelector((store) => store.video);

  // fetch channel info
  useEffect(() => {
    if (userInfo?.hasChannel && userInfo?.channel) {
      dispatch(getUserChannelThunk(userInfo.channel));
    }
  }, [userInfo?.hasChannel, userInfo?.channel, dispatch]);

  useEffect(() => {
    if (channel) {
      setUserChannelData(channel);
    }
  }, [channel]);

  useEffect(() => {
    if (channelVideo == null) {
      dispatch(getChannelVideoThunk());
    }
  }, [channelVideo, dispatch]);

  // conditional rendering happens here, after all hooks
  if (!userInfo?.hasChannel) {
    return <NoChannel />;
  }

  return (
    <div className="w-full">
      <ChannelBanner banner={userChannelData?.banner} />

      <ChannelInfo
        channel={userChannelData}
        videos={channelVideo}
        onEditClick={() => setIsModalOpen(true)}
        onUploadClick={() => setIsUploadOpen(true)}
      />

      <ChannelTabs />

      <UploadVideoModal
        isOpen={isUploadOpen}
        onClose={() => setIsUploadOpen(false)}
      />

      <ChannelVideos
        channelVideos={channelVideo}
        onUploadClick={() => setIsUploadOpen(true)}
      />

      <CreateChannelModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        isCreate={false}
        channelData={userChannelData}
      />
    </div>
  );
};

export default ChannelScreen;

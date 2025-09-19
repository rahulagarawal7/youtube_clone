import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllChannelThunk } from "../../store/slices/channelSlice";
import Loader from "../../components/Loader";
import NoChannels from "./components/NoChannels";
import ChannelCard from "./components/ChannelCard";

const ChannelList = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { allChannelList } = useSelector((store) => store.channel);
  const { userInfo } = useSelector((store) => store.auth.loggedIn);

  const fetchChannels = async () => {
    setLoading(true);
    try {
      await dispatch(getAllChannelThunk()).unwrap();
    } catch (err) {
      console.error("Failed to fetch channels:", err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchChannels();
  }, []);

  if (loading) return <Loader isVisible={true} />;

  if (!allChannelList || allChannelList.length === 0) {
    return <NoChannels fetchChannels={fetchChannels} />;
  }

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {allChannelList.map((channel) => {
        const isMyChannel = channel.user?._id === userInfo?._id;

        return (
          <ChannelCard
            key={channel._id}
            channel={channel}
            isMyChannel={isMyChannel}
          />
        );
      })}
    </div>
  );
};

export default ChannelList;

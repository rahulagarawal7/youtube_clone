import React, { useEffect } from "react";
import { dummyComments, videos } from "../../utils/dummyData";
import VideoPlayer from "./components/VideoPlayer";
import VideoActions from "./components/VideoActions";
import ChannelInfo from "./components/ChannelInfo";
import CommentsSection from "./components/Comments/CommentsSection";
import SuggestedVideos from "./components/Suggestions/SuggestedVideos";
import { useNavigate, useParams } from "react-router-dom";
import {
  formatNumber,
  formatDate,
  generateRandomViews,
} from "../../utils/helperFunctions";
import { useDispatch, useSelector } from "react-redux";
import { getVideoByIdThunk } from "../../store/slices/videoSlice";
import Loader from "../../components/Loader";
import PopupModal from "../../components/PopupModal";

const VideoScreen = () => {
  const { id } = useParams();
  const navigation = useNavigate();
  const { videoDetails, errorVideoDetails, loading, isSubscribed } =
    useSelector((store) => store?.video);


  const dispatch = useDispatch();
  useEffect(() => {
    if (id) dispatch(getVideoByIdThunk(id));
  }, []);

  if (loading) return <Loader isVisible={true} />;
  if (errorVideoDetails)
    return (
      <PopupModal
        isVisible={true}
        cancelText={"Okay"}
        title={"Alert!"}
        message={"Something went Wrong please try after some Time"}
        onClose={() => navigation("/")}
      />
    );
  return (
    <div className="mx-auto px-4 py-6 flex flex-col xl:flex-row gap-6">
      <div className="flex-1 max-w-4xl">
        <VideoPlayer
          thumbnailUrl={videoDetails?.thumbnailUrl}
          title={videoDetails?.title}
          videoId={videoDetails?.videoID}
        />
        <h1 className="text-xl md:text-2xl font-bold mb-2">
          {videoDetails?.title}
        </h1>
        <VideoActions
          views={generateRandomViews()}
          date={videoDetails?.updatedAt}
          likes={videoDetails?.likes?.length}
          dislikes={videoDetails?.dislikes?.length}
          formatNumber={formatNumber}
          formatDate={formatDate}
        />
        <ChannelInfo
          uploader={videoDetails?.channel?.name}
          id={videoDetails?.channel?._id}
          description={videoDetails?.description}
          avatar={videoDetails?.channel?.avatar}
          subscribers={videoDetails?.channel?.subscribers}
          isSubscribed={isSubscribed}
          videoID={id}
        />
        <CommentsSection videoId={id} comments={dummyComments} />
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

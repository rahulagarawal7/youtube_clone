import React, { useEffect } from "react";
import VideoCard from "../../../components/VideoCard";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllVideoThunk } from "../../../store/slices/videoSlice";
import HomeShimmer from "../../../components/Shimmer/HomeShimmer";
import NoData from "../components/NoData";

const Body = () => {
  const isOpen = useSelector((store) => store.sidebar.isOpen);
  const { AllVideos, loading } = useSelector((store) => store.video);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleVideoClick = (videoId) => {
    navigate(`/video/${videoId}`);
  };

  // Fetch videos on mount
  useEffect(() => {
    dispatch(getAllVideoThunk());
  }, [dispatch]);

  if (loading) return <HomeShimmer />;

  if (!AllVideos || AllVideos.length === 0) return <NoData />;

  return (
    <div className="p-4 sm:p-6 w-full">
      <div
        className={`
          grid gap-3 sm:gap-4 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-2 
          lg:grid-cols-3 
          ${isOpen ? "xl:grid-cols-3" : "xl:grid-cols-4"}
        `}
      >
        {AllVideos.map((item) => (
          <div
            key={item._id}
            onClick={() => handleVideoClick(item._id)}
            className="transform hover:scale-105 transition-transform duration-200 ease-in-out"
          >
            <VideoCard video={item} showEdit={false} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;

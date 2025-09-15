import React from "react";
import VideoCard from "../../../components/VideoCard";
import { videos } from "../../../utils/dummyData";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Body = () => {
  const isOpen = useSelector((store) => store?.sidebar?.isOpen);

  const navigate = useNavigate();

  const handleVideoClick = (videoId) => {
    navigate(`/video/${videoId}`); // navigate to video detail page
  };

  return (
    <div className="p-4 sm:p-6 w-full">
      <div
        className={`
          grid gap-3 sm:gap-4 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-2 
          lg:grid-cols-3 
          ${isOpen ? "xl:grid-cols-3 " : "xl:grid-cols-4 "}
        `}
      >
        {videos.map((item) => (
          <div
            key={item.videoId}
            onClick={() => handleVideoClick(item.videoId)}
            className="transform hover:scale-105 transition-transform duration-200 ease-in-out"
          >
            <VideoCard video={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;

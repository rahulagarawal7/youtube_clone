import React, { useEffect, useRef } from "react";
import Lottie from "lottie-react";
import animationData from "../../../assets/animations/Button_like.json";

const VideoActions = ({
  views,
  date,
  likes,
  dislikes,
  formatNumber,
  formatDate,
}) => {
  const likeRef = useRef(null);
  const dislikeRef = useRef(null);

  useEffect(() => {
    if (likeRef.current) likeRef.current.stop();
    if (dislikeRef.current) dislikeRef.current.stop();
  }, []);

  useEffect(() => {
    likeRef.current.goToAndPlay(0, true);
    dislikeRef.current.goToAndPlay(0, true);
  }, []);

  const handleLike = () => {
    if (likeRef.current) {
      likeRef.current.goToAndPlay(0, true); // restart animation
    }
  };

  const handleDislike = () => {
    if (dislikeRef.current) {
      dislikeRef.current.goToAndPlay(0, true); // restart animation
    }
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mb-4">
      {/* Views + Date */}
      <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600 flex-wrap">
        <span>{formatNumber(views)} views</span>
        <span className="hidden sm:inline">•</span>
        <span>{formatDate(date)}</span>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
        {/* Like / Dislike */}
        <div className="flex items-center bg-gray-100 rounded-full overflow-hidden">
          {/* Like */}
          <button
            onClick={handleLike}
            className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 hover:bg-gray-200 transition-colors"
          >
            <Lottie
              lottieRef={likeRef}
              animationData={animationData}
              loop={false}
              autoplay={false}
              className="w-8 h-8 sm:w-12 sm:h-12"
            />
            <span className="text-xs sm:text-sm">{formatNumber(likes)}</span>
          </button>

          <div className="w-px h-6 bg-gray-300"></div>

          {/* Dislike */}
          <button
            onClick={handleDislike}
            className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 hover:bg-gray-200 transition-colors"
          >
            <Lottie
              lottieRef={dislikeRef}
              animationData={animationData}
              loop={false}
              autoplay={false}
              className="w-8 h-8 sm:w-12 sm:h-12 rotate-180"
            />
            <span className="text-xs sm:text-sm">{formatNumber(dislikes)}</span>
          </button>
        </div>

        {/* Share & Save */}
        <button className="px-3 sm:px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-xs sm:text-sm transition-colors">
          Share
        </button>
        <button className="px-3 sm:px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-xs sm:text-sm transition-colors">
          Save
        </button>
      </div>
    </div>
  );
};

export default VideoActions;

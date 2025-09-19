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
        <div className="flex items-center rounded-full overflow-hidden border border-gray-200">
          {/* Like */}
          <button
            onClick={handleLike}
            className="flex items-center justify-center gap-2 w-24 sm:w-28 h-10 sm:h-12 hover:bg-gray-100 transition-colors"
          >
            <Lottie
              lottieRef={likeRef}
              animationData={animationData}
              loop={false}
              autoplay={false}
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
            <span className="text-xs sm:text-sm">{formatNumber(likes)}</span>
          </button>

          <div className="w-px h-6 bg-gray-300"></div>

          {/* Dislike */}
          <button
            onClick={handleDislike}
            className="flex items-center justify-center gap-2 w-24 sm:w-28 h-10 sm:h-12 hover:bg-gray-100 transition-colors"
          >
            <Lottie
              lottieRef={dislikeRef}
              animationData={animationData}
              loop={false}
              autoplay={false}
              className="w-8 h-8 sm:w-10 sm:h-10 rotate-180"
            />
            <span className="text-xs sm:text-sm">{formatNumber(dislikes)}</span>
          </button>
        </div>

        {/* Share & Save */}
        <button className="w-24 sm:w-28 h-10 sm:h-12 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full text-xs sm:text-sm transition-colors">
          Share
        </button>
        <button className="w-24 sm:w-28 h-10 sm:h-12 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full text-xs sm:text-sm transition-colors">
          Save
        </button>
      </div>
    </div>
  );
};

export default VideoActions;

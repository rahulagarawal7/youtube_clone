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
    likeRef.current.goToAndPlay(0, true);
    dislikeRef.current.goToAndPlay(0, true);
  }, []);

  const handleLike = () => {
    if (likeRef.current) likeRef.current.goToAndPlay(0, true);
  };

  const handleDislike = () => {
    if (dislikeRef.current) dislikeRef.current.goToAndPlay(0, true);
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
      {/* Views + Date */}
      <div className="flex items-center gap-2 text-sm sm:text-base text-gray-600 flex-wrap">
        <span>{formatNumber(views)} views</span>
        <span className="hidden sm:inline">•</span>
        <span>{formatDate(date)}</span>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3 flex-wrap">
        {/* Like / Dislike */}
        <div className="flex items-center rounded-full border border-gray-200 overflow-hidden">
          {/* Like */}
          <button
            onClick={handleLike}
            className="flex items-center justify-center gap-2 px-3 sm:px-4 h-10 sm:h-12 hover:bg-gray-100 transition-colors"
          >
            <Lottie
              lottieRef={likeRef}
              animationData={animationData}
              loop={false}
              autoplay={false}
              className="w-8 h-8 sm:w-8 sm:h-8"
            />
            <span className="text-sm sm:text-base font-medium">
              {formatNumber(likes)}
            </span>
          </button>

          <div className="w-px h-6 bg-gray-300"></div>

          {/* Dislike */}
          <button
            onClick={handleDislike}
            className="flex items-center justify-center gap-2 px-2 sm:px-4 h-10 sm:h-12 hover:bg-gray-100 transition-colors"
          >
            <Lottie
              lottieRef={dislikeRef}
              animationData={animationData}
              loop={false}
              autoplay={false}
              className="w-8 h-8 sm:w-8 sm:h-8 rotate-180"
            />
            <span className="text-sm sm:text-base font-medium">
              {formatNumber(dislikes)}
            </span>
          </button>
        </div>

        {/* Share & Save */}
        <button className="px-4 sm:px-6 h-10 sm:h-12 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full text-sm sm:text-base font-medium transition-colors">
          Share
        </button>
        <button className="px-4 sm:px-6 h-10 sm:h-12 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full text-sm sm:text-base font-medium transition-colors">
          Save
        </button>
      </div>
    </div>
  );
};

export default VideoActions;

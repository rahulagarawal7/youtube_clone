import React from "react";
import {
  ShimmerThumbnail,
  ShimmerTitle,
  ShimmerCircularImage,
} from "react-shimmer-effects";

const CardShimmer = () => {
  return (
    <div className="w-full max-w-sm bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer">
      {/* Thumbnail */}
      <ShimmerThumbnail height={180} rounded />

      {/* Info */}
      <div className="flex items-start gap-3 p-3">
        {/* Avatar */}
        <ShimmerCircularImage size={36} />

        {/* Text content */}
        <div className="flex-1 flex flex-col gap-2">
          {/* Video title */}
          <ShimmerTitle line={2} gap={6} variant="secondary" />

          {/* Channel name */}
          <ShimmerTitle line={1} width="50%" variant="secondary" />

          {/* Views & date */}
          <ShimmerTitle line={1} width="40%" variant="secondary" />
        </div>
      </div>
    </div>
  );
};

export default CardShimmer;

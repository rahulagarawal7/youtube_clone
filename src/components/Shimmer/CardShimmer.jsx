import React from "react";
import {
  ShimmerThumbnail,
  ShimmerTitle,
  ShimmerCircularImage,
} from "react-shimmer-effects";

const CardShimmer = () => {
  return (
    <div className="w-80 bg-white rounded-lg shadow-sm overflow-hidden">
      {/* Thumbnail */}
      <ShimmerThumbnail height={176} rounded />

      <div className="flex items-start gap-3 p-3">
        {/* Avatar */}
        <ShimmerCircularImage size={40} />

        <div className="flex flex-col gap-2 flex-1">
          {/* Title lines */}
          <ShimmerTitle line={2} gap={10} variant="secondary" />

          {/* Meta line */}
          <ShimmerTitle line={1} variant="secondary" />
        </div>
      </div>
    </div>
  );
};

export default CardShimmer;

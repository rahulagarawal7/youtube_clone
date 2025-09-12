import React from "react";
import CardShimmer from "./CardShimmer";

const HomeShimmer = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[...Array(6)].map((_, i) => (
          <CardShimmer key={i} />
        ))}
      </div>
    </div>
  );
};

export default HomeShimmer;

import React from "react";
import CardShimmer from "./CardShimmer";
import { useSelector } from "react-redux";

const HomeShimmer = () => {
  const isOpen = useSelector((store) => store.sidebar.isOpen);
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
        {[...Array(6)].map((_, i) => (
          <div key={i}>
            <CardShimmer />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeShimmer;

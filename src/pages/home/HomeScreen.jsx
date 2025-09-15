import React, { useEffect } from "react";
import HomeShimmer from "../../components/Shimmer/HomeShimmer";
import FilterBtnSection from "./components/FilterBtnSection";
import Body from "./components/Body";

const HomeScreen = () => {
  return (
    <div>
      <FilterBtnSection />
      <Body />
    </div>
  );
};

export default HomeScreen;

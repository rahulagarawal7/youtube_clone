import React, { useEffect } from "react";
import HomeShimmer from "../../components/Shimmer/HomeShimmer";
import FilterBtnSection from "./components/FilterBtnSection";
import Body from "./components/Body";
import { useDispatch } from "react-redux";
import { logoutAction } from "../../store/slices/authSlice";

const HomeScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    console.log("token-->", token);

    if (token === null) {
      console.log("logout-->", token);
      dispatch(logoutAction());
    }
  }, []);

  return (
    <div>
      <FilterBtnSection />
      <Body />
    </div>
  );
};

export default HomeScreen;

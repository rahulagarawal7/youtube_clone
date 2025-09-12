import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { openLoginModal } from "../../store/slices/loginModalSlice";

const ProtectedRoute = ({ children }) => {
  const dispatch = useDispatch();

  // const isLoggedIn = localStorage.getItem("isLoggedIn");
  const isLoggedIn = useSelector((store) => store?.auth.isLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) {
      dispatch(openLoginModal());
    }
  }, [isLoggedIn, dispatch]);

  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  } else {
    return children;
  }
};

export default ProtectedRoute;

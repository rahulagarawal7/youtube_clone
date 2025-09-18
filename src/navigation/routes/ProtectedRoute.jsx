import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { openLoginModal } from "../../store/slices/loginModalSlice";

const ProtectedRoute = ({ children }) => {
  const dispatch = useDispatch();

  // const isLoggedIn = localStorage.getItem("isLoggedIn");
  const { isLoggedIn } = useSelector((store) => store?.auth.loggedIn);
  const token = localStorage.getItem("authToken");

  useEffect(() => {
    if (!isLoggedIn || token === null) {
      dispatch(openLoginModal());
    }
  }, [isLoggedIn, dispatch]);

  if (!isLoggedIn || token === null) {
    return <Navigate to="/" replace />;
  } else {
    return children;
  }
};

export default ProtectedRoute;

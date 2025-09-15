import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import HomeScreen from "../../pages/home/HomeScreen";
import PageNotFound from "../../pages/PageNotFound";
import ChannelScreen from "../../pages/channel/ChannelScreen";
import ProtectedRoute from "./ProtectedRoute";
import VideoScreen from "../../pages/video/VideoScreen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomeScreen /> },
      {
        path: "channel",
        element: (
          <ProtectedRoute>
            <ChannelScreen />
          </ProtectedRoute>
        ),
      },
      { path: "/video/:id", element: <VideoScreen /> },
      { path: "*", element: <PageNotFound /> },
    ],
  },
]);

export default router;

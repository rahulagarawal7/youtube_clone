import { createBrowserRouter } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import Layout from "../layout/Layout";
import HomeScreen from "../../pages/home/HomeScreen";
import PageNotFound from "../../pages/PageNotFound";
import ProtectedRoute from "./ProtectedRoute";
import VideoScreen from "../../pages/video/VideoScreen";
import Loader from "../../components/Loader";

//  Lazy-loaded pages
const ChannelScreen = lazy(() => import("../../pages/channel/ChannelScreen"));
const ChannelList = lazy(() =>
  import("../../pages/ChannelList/ChannelListScreen")
);

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
            <Suspense fallback={<Loader isVisible={true} />}>
              <ChannelScreen />
            </Suspense>
          </ProtectedRoute>
        ),
      },
      {
        path: "/channels",
        element: (
          <Suspense fallback={<Loader isVisible={true} />}>
            <ChannelList />
          </Suspense>
        ),
      },
      { path: "/video/:id", element: <VideoScreen /> },
      { path: "*", element: <PageNotFound /> },
    ],
  },
]);

export default router;

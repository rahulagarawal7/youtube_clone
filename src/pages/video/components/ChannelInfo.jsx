import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSubscriptionThunk } from "../../../store/slices/channelSlice";
import { openLoginModal } from "../../../store/slices/loginModalSlice";
import { getVideoByIdThunk } from "../../../store/slices/videoSlice";

const ChannelInfo = ({
  uploader,
  description,
  avatar,
  subscribers,
  id,
  videoID,
}) => {
  const [showMore, setShowMore] = useState(false);
  const dispatch = useDispatch();

  const { isLoggedIn, userInfo } = useSelector((store) => store?.auth?.loggedIn);

  const isSubscribed = subscribers?.some((item) => item == userInfo._id) || 0;


  const handleToggleSubscription = async () => {
    if (!isLoggedIn) {
      dispatch(openLoginModal());
      return;
    }

    const res = await dispatch(toggleSubscriptionThunk(id)).unwrap();

    if (res.success) {
      dispatch(getVideoByIdThunk(videoID));
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3 sm:p-4 bg-gray-50 rounded-xl mb-4">
      {/* Avatar */}
      <img
        src={
          avatar ||
          `https://ui-avatars.com/api/?name=${uploader}&background=FF0000&color=fff&size=48`
        }
        alt={uploader}
        className="w-12 h-12 rounded-full flex-shrink-0"
      />

      {/* Info + Actions */}
      <div className="flex-1 w-full">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 gap-2">
          {/* Channel Name + Subs */}
          <div>
            <h3 className="font-semibold text-gray-900 text-base sm:text-lg">
              {uploader}
            </h3>
            <p className="text-sm text-gray-600">
              {subscribers?.length || 0} subscribers
            </p>
          </div>

          {/* Subscribe Button */}
         <button
            onClick={handleToggleSubscription}
            className={`px-4 py-2 rounded-full font-medium transition-colors w-full sm:w-auto text-center ${
              isSubscribed
                ? "bg-red-600 text-white hover:bg-red-700"
                : "bg-black text-white hover:bg-gray-900"
            }`}
          >
           {isLoggedIn
              ? isSubscribed
                ? "Unsubscribe"
                : "Subscribe"
              : "Login to Subscribe"}
          </button>
        </div>

        {/* Description */}
        <p
          className={`text-sm text-gray-800 ${
            !showMore ? "line-clamp-2" : ""
          }`}
        >
          {description}
        </p>

        {description?.length > 100 && (
          <button
            onClick={() => setShowMore(!showMore)}
            className="text-gray-600 hover:text-gray-800 font-medium mt-1"
          >
            {showMore ? "Show less" : "Show more"}
          </button>
        )}
      </div>
    </div>
  );
};

export default ChannelInfo;

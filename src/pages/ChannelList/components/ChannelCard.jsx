import { Link } from "react-router-dom";
import React, { useState } from "react";

const ChannelCard = ({ channel, isMyChannel }) => {
  const [showFullDesc, setShowFullDesc] = useState(false);

  const toggleDesc = () => setShowFullDesc((prev) => !prev);

  const description = channel.description || "No description available.";

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 flex flex-col">
      {channel.banner && (
        <img
          src={channel.banner}
          alt={channel.name}
          className="w-full h-32 object-cover"
        />
      )}

      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-center mb-2">
          <img
            src={channel?.avatar || `https://ui-avatars.com/api/?name=${
              channel.name || "User"
            }&background=FF0000&color=fff&size=48`}
            alt={channel.name}
            className="w-10 h-10 rounded-full mr-3 object-cover"
          />
          <div>
            <h3 className="text-lg font-semibold">{channel.name}</h3>
            <p className="text-gray-500 text-sm">
              Owner: {channel.user?.fullName || "Unknown"}
            </p>
          </div>
        </div>

        <p className="text-gray-600 text-sm flex-1 mb-2">
          {showFullDesc
            ? description
            : description.length > 100
            ? description.slice(0, 100) + "..."
            : description}
          {description.length > 100 && (
            <button
              onClick={toggleDesc}
              className="ml-1 text-blue-500 font-semibold text-sm hover:underline"
            >
              {showFullDesc ? "Show less" : "Show more"}
            </button>
          )}
        </p>

        <p className="text-gray-400 text-xs mb-2">
          Subscribers: {channel.subscribers?.length || 0}
        </p>

        {/* Extra UI if this is the logged-in user’s channel */}
        {isMyChannel && (
          <Link to="/channel">
            <span className="mt-2 text-blue-600 font-semibold text-sm">
              🌟 This is your channel
            </span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ChannelCard;

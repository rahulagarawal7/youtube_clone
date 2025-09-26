import React, { useState } from "react";
import { Edit } from "lucide-react";

const ChannelInfo = ({ channel, videos, onUploadClick, onEditClick }) => {
  const [showDesc, setShowDesc] = useState(false);

  return (
    <div className="p-6 flex  flex-col md:flex-row md:items-center gap-6">
      {/* Avatar + Edit Button */}
      <div className="relative  w-24 h-24">
        <img
          src={channel?.avatar}
          alt={channel?.name}
          className="w-24 h-24  rounded-full border-4 border-white shadow-lg object-cover"
        />
        <button
          onClick={onEditClick}
          className="absolute bottom-0 right-0 p-1.5 bg-white rounded-full shadow-md hover:bg-gray-100 transition"
          aria-label="Edit Channel"
        >
          <Edit size={18} className="text-gray-700" />
        </button>
        
      </div>

      {/* Channel Info */}
      <div className="flex-1">
        <div className="flex flex-col justify-between sm:flex-row">
          <div>
          
          <h1 className="text-2xl font-bold">{channel?.name}</h1>
        <p className="text-gray-600">
          {channel?.subscribers?.length || 0} subscribers
        </p>
          </div>
                
         {/* Upload Button */}
      {videos?.length > 0 && (
        <button
          onClick={onUploadClick}
          className="px-5 py-2 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition"
        >
          Upload New Video
        </button>
      )}
        </div>
        <p className={`mt-2 text-gray-700 ${showDesc ? "" : "line-clamp-2"}`}>
          {channel?.description}
        </p>
        {channel?.description?.length > 100 && ( // show button only if desc is long
          <button
            onClick={() => setShowDesc(!showDesc)}
            className="mt-1 text-blue-500 font-semibold text-sm hover:underline"
          >
            {showDesc ? "Show less" : "Show more"}
          </button>
        )}
      </div>
    </div>
  );
};

export default ChannelInfo;

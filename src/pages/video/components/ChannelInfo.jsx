import React, { useState } from "react";

const ChannelInfo = ({ uploader, description }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl mb-4">
      <img
        src={`https://ui-avatars.com/api/?name=${uploader}&background=FF0000&color=fff&size=48`}
        alt={uploader}
        className="w-12 h-12 rounded-full"
      />
      <div className="flex-1">
        <h3 className="font-semibold text-gray-900">{uploader}</h3>
        <p className="text-sm text-gray-600 mb-2">120K subscribers</p>
        <p
          className={`text-sm text-gray-800 ${!showMore ? "line-clamp-2" : ""}`}
        >
          {description}
        </p>
        {description.length > 100 && (
          <button
            onClick={() => setShowMore(!showMore)}
            className="text-gray-600 hover:text-gray-800 font-medium mt-1"
          >
            {showMore ? "Show less" : "Show more"}
          </button>
        )}
      </div>
      <button className="bg-red-600 text-white px-6 py-2 rounded-full font-medium hover:bg-red-700 transition-colors">
        Subscribe
      </button>
    </div>
  );
};

export default ChannelInfo;

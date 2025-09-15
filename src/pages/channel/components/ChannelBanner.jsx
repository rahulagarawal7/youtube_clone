import React from "react";

const ChannelBanner = ({ banner }) => {
  return (
    <div className="w-full h-48 md:h-60 lg:h-72 overflow-hidden">
      <img
        src={banner}
        alt="Channel Banner"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default ChannelBanner;

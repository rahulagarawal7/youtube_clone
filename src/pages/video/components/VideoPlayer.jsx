import React from "react";

const VideoPlayer = ({ videoId = "j6HGO9OMTvY", title = "YouTube Video" }) => {
  
  return (
    <div className="relative w-full bg-black rounded-xl overflow-hidden mb-4">
      <div className="aspect-video relative">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0&modestbranding=1`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
    </div>
  );
};

export default VideoPlayer;

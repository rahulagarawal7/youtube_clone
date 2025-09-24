import { useState } from "react";
import { Trash, Edit } from "lucide-react";
import ActionIcon from "./ActionIcon";
import { generateRandomViews } from "../utils/helperFunctions";
import Profile from "../assets/images/profile.png";

const VideoCard = ({ video, showEdit = false, setIsUpdate, handleDelete }) => {
  const [avatarLoading, setAvatarLoading] = useState(true);

  return (
    <div className="w-full cursor-pointer">
      {/* Thumbnail */}
      <div className="relative w-full aspect-video rounded-lg overflow-hidden">
        <img
          src={video?.thumbnailUrl}
          alt={video?.title}
          className="w-full h-full object-cover"
        />
        <span className="absolute bottom-1 right-1 bg-black bg-opacity-75 text-white text-xs px-1.5 py-0.5 rounded">
          {video?.duration}
        </span>
      </div>

      {/* Info */}
      <div className="mt-2 flex space-x-3">
        {/* Channel avatar */}
        <div className="relative w-9 h-9 flex-shrink-0">
          {avatarLoading && (
            <div className="w-9 h-9 rounded-full bg-red-200 animate-pulse absolute inset-0">
              <img
                src={Profile}
                className={`w-9 h-9 rounded-full object-cover`}
              />
            </div>
          )}
          <img
            src={
              video?.channel?.avatar ||
              `https://ui-avatars.com/api/?name=${video?.channel?.name}&background=random`
            }
            alt={video?.channel?.name}
            className={`w-9 h-9 rounded-full object-cover transition-opacity duration-300 ${
              avatarLoading ? "opacity-0" : "opacity-100"
            }`}
            onLoad={() => setAvatarLoading(false)}
          />
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 leading-tight">
            {video.title}
          </h3>
          <p className="text-xs text-gray-600 mt-1">{video?.channel?.name}</p>
          <p className="text-xs text-gray-500">
            {generateRandomViews()} views •{" "}
            {new Date(video?.updatedAt)?.toDateString()}
          </p>
        </div>

        {/* Actions */}
        {showEdit && (
          <div className="flex items-center gap-3">
            <ActionIcon
              Icon={Edit}
              label="Edit"
              onClick={() => setIsUpdate({ show: true, data: video })}
              className="text-gray-700 hover:text-blue-600"
            />
            <ActionIcon
              Icon={Trash}
              label="Delete"
              onClick={handleDelete}
              className="text-red-700 hover:text-red-900"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoCard;

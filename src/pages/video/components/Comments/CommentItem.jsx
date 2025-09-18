import React from "react";

const CommentItem = ({ comment }) => {
  return (
    <div className="flex gap-3">
      <img
        src={comment.avatar}
        alt={comment.author}
        className="w-12 h-12 rounded-full"
      />
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-sm font-medium text-gray-900">
            @{comment.author}
          </span>
          <span className="text-xs text-gray-600">{comment.timestamp}</span>
        </div>
        <p className="text-sm text-gray-800 mb-2">{comment.content}</p>
        <div className="flex items-center gap-4 text-xs text-gray-600">
          <button className="hover:text-gray-800">👍 {comment.likes}</button>
          <button className="hover:text-gray-800">👎</button>
          <button className="hover:text-gray-800">Reply</button>
        </div>
      </div>
    </div>
  );
};

export default CommentItem;

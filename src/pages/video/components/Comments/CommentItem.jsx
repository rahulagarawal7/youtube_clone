import React, { useState } from "react";

const CommentItem = ({ comment, currentUser, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(comment.text);

  const isOwner = currentUser?._id === comment.user?._id;

  const handleSave = () => {
    if (editText.trim()) {
      onEdit(comment._id, editText);
      setIsEditing(false);
    }
  };

  return (
    <div className="flex gap-3">
      <img
        src={`https://ui-avatars.com/api/?name=${
          comment.user?.fullName || "User"
        }&background=FF0000&color=fff&size=48`}
        alt={comment.user?.fullName}
        className="w-12 h-12 rounded-full"
      />
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-sm font-medium text-gray-900">
            @{comment.user?.fullName}
          </span>
          <span className="text-xs text-gray-600">
            {new Date(comment.createdAt).toLocaleString()}
          </span>
        </div>

        {isEditing ? (
          <div className="flex flex-col gap-2 mb-2">
            <input
              className="border-b border-gray-300 outline-none py-1 text-sm"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
            />
            <div className="flex gap-2">
              <button className="text-blue-600 text-xs" onClick={handleSave}>
                Save
              </button>
              <button
                className="text-gray-500 text-xs"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <p className="text-sm text-gray-800 mb-2">{comment.text}</p>
        )}

        <div className="flex items-center gap-4 text-xs text-gray-600">
          <button className="hover:text-gray-800">
            👍 {comment.likes || 0}
          </button>
          <button className="hover:text-gray-800">👎</button>
          <button className="hover:text-gray-800">Reply</button>

          {isOwner && !isEditing && (
            <>
              <button
                className="hover:text-gray-800"
                onClick={() => setIsEditing(true)}
              >
                Edit
              </button>
              <button
                className="hover:text-gray-800"
                onClick={() => onDelete(comment._id)}
              >
                Delete
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommentItem;

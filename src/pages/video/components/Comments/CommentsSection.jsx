import React, { useState } from "react";
import CommentItem from "./CommentItem";

const CommentsSection = ({ comments }) => {
  const [sort, setSort] = useState("top");

  return (
    <div className="mt-8">
      <div className="flex items-center gap-6 mb-6">
        <h3 className="text-xl font-semibold">{comments.length} Comments</h3>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="text-sm font-medium text-gray-700 border-none bg-transparent cursor-pointer"
        >
          <option value="top">Top comments</option>
          <option value="newest">Newest first</option>
        </select>
      </div>

      {/* Add Comment */}
      <div className="flex gap-3 mb-6">
        <img
          src="https://ui-avatars.com/api/?name=You&background=6366f1&color=fff&size=40"
          alt="Your avatar"
          className="w-10 h-10 rounded-full"
        />
        <input
          type="text"
          placeholder="Add a comment..."
          className="w-full border-b-2 border-gray-200 focus:border-gray-800 outline-none py-2 text-sm"
        />
      </div>

      {/* Comments List */}
      <div className="space-y-4">
        {comments.map((c) => (
          <CommentItem key={c.id} comment={c} />
        ))}
      </div>
    </div>
  );
};

export default CommentsSection;

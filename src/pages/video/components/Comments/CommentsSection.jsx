import React, { useState } from "react";
import { useSelector } from "react-redux";
import CommentItem from "./CommentItem";
import LoginModal from "../../../../components/LoginModal";
const CommentsSection = ({ comments, setComments }) => {
  const [sort, setSort] = useState("top");
  const [newComment, setNewComment] = useState("");
  const [btnLoading, setBtnLoading] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  // ✅ Get logged-in user from Redux
  const { userInfo, isLoggedIn } = useSelector((state) => state.auth.loggedIn);

  // ✅ Handle add comment
  const handleAddComment = async () => {
    if (!newComment.trim()) return;

    if (!isLoggedIn) {
      setShowLogin(true);
    }
  };

  return (
    <div className="mt-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <h3 className="text-lg sm:text-xl font-semibold">
          {comments.length} Comments
        </h3>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="text-sm font-medium text-gray-700 border rounded-md px-2 py-1 bg-white cursor-pointer"
        >
          <option value="top">Top comments</option>
          <option value="newest">Newest first</option>
        </select>
      </div>

      {/* Add Comment */}
      <div className="flex items-start gap-3 mb-6">
        <img
          src={
            userInfo?.avatar ||
            `https://ui-avatars.com/api/?name=${
              userInfo?.fullName || "User"
            }&background=FF0000&color=fff&size=48`
          }
          alt="Your avatar"
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
        />
        <div className="flex-1">
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment..."
            className="w-full border-b-2 border-gray-200 focus:border-gray-800 outline-none py-2 text-sm"
          />
          <div className="flex justify-end mt-2">
            <button
              onClick={handleAddComment}
              disabled={btnLoading}
              className={`px-4 py-2 rounded-md text-white text-sm font-medium transition ${
                btnLoading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {btnLoading ? "Posting..." : "Comment"}
            </button>
          </div>
        </div>
      </div>

      {/* Comments List */}
      <div className="space-y-4">
        {comments.length > 0 ? (
          comments.map((c) => <CommentItem key={c.id} comment={c} />)
        ) : (
          <p className="text-gray-500 text-sm">
            No comments yet. Be the first!
          </p>
        )}
      </div>
      <LoginModal
        isOpen={showLogin}
        onClose={() => {
          setShowLogin(false);
        }}
      />
    </div>
  );
};

export default CommentsSection;

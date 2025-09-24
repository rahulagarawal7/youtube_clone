import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CommentItem from "./CommentItem";
import LoginModal from "../../../../components/LoginModal";
import PopupModal from "../../../../components/PopupModal";
import {
  getAllCommentsThunk,
  addCommentThunk,
  deleteCommentThunk,
  editCommentThunk,
} from "../../../../store/slices/commentSlice";
import NoComments from "../NoComments";

const CommentsSection = ({ videoId }) => {
  const dispatch = useDispatch();
  const [newComment, setNewComment] = useState("");
  const [btnLoading, setBtnLoading] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const { userInfo, isLoggedIn } = useSelector((state) => state.auth.loggedIn);
  const { allComments, loadingComments } = useSelector(
    (state) => state.comment
  );

  // Fetch comments when component mounts or videoId changes
  useEffect(() => {
    if (videoId) dispatch(getAllCommentsThunk(videoId));
  }, [videoId, dispatch]);

  // Add comment
  const handleAddComment = async () => {
    if (!newComment.trim()) return;

    if (!isLoggedIn) {
      setShowAlert(true);
      return;
    }

    setBtnLoading(true);
    try {
      await dispatch(addCommentThunk({ videoId, text: newComment })).unwrap();
      setNewComment(""); // clear input
      dispatch(getAllCommentsThunk(videoId));
    } catch (err) {
      console.error("Failed to add comment:", err);
    } finally {
      setBtnLoading(false);
    }
  };

  // Delete comment
  const handleDeleteComment = async (commentId) => {
    try {
      await dispatch(deleteCommentThunk(commentId)).unwrap();
      dispatch(getAllCommentsThunk(videoId));
    } catch (err) {
      console.error("Failed to delete comment:", err);
    }
  };

  // Edit comment
  const handleEditComment = async (commentId, newText) => {
    if (!newText.trim()) return;

    try {
      await dispatch(editCommentThunk({ commentId, text: newText })).unwrap();
      dispatch(getAllCommentsThunk(videoId));
    } catch (err) {
      console.error("Failed to edit comment:", err);
    }
  };

  const handleOpenLogin = () => {
    setShowAlert(false);
    setShowLogin(true);
  };

  return (
    <div className="mt-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <h3 className="text-lg sm:text-xl font-semibold">
          {allComments?.length || 0} Comments
        </h3>
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
          className="w-8 h-8 sm:w-12 sm:h-12 rounded-full"
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
                  : "bg-black hover:bg-gray-900"
              }`}
            >
              {btnLoading ? "Posting..." : "Comment"}
            </button>
          </div>
        </div>
      </div>

      {/* Comments List */}
      <div className="space-y-4">
        {loadingComments ? (
          <p className="text-gray-500 text-sm">Loading comments...</p>
        ) : allComments && allComments.length > 0 ? (
          allComments.map((c) => (
            <CommentItem
              key={c._id}
              comment={c}
              videoId={videoId}
              currentUser={userInfo}
              onDelete={handleDeleteComment}
              onEdit={handleEditComment}
            />
          ))
        ) : (
          <NoComments />
        )}
      </div>

      {/* Modals */}
      <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
      <PopupModal
        isVisible={showAlert}
        onClose={() => setShowAlert(false)}
        title={"Alert!!"}
        message={"Please Login to Comment"}
        onConfirm={handleOpenLogin}
        confirmText="Login Now"
        showSecondBtn={true}
      />
    </div>
  );
};

export default CommentsSection;

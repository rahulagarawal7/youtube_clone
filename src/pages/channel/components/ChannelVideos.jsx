import React, { useState } from "react";
import VideoCard from "../../../components/VideoCard";
import { useDispatch } from "react-redux";
import {
  deleteVideoThunk,
  getChannelVideoThunk,
} from "../../../store/slices/videoSlice";
import { showAlert } from "../../../store/slices/alertSlice";
import PopupModal from "../../../components/PopupModal";
import UploadVideoModal from "./UploadVideoModal";

const ChannelVideos = ({ channelVideos, onUploadClick }) => {
  const dispatch = useDispatch();

  // State for popup
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedVideoId, setSelectedVideoId] = useState(null);
  const [isUpdate, setIsUpdate] = useState({show:false,data:null});

  // Open confirmation modal
  const confirmDelete = (videoId) => {
    setSelectedVideoId(videoId);
    setModalVisible(true);
  };

  // Handle actual deletion
  const handleDeleteVideo = async () => {
    try {
      const res = await dispatch(deleteVideoThunk(selectedVideoId)).unwrap();
      dispatch(getChannelVideoThunk());
      if (res.success) {
        dispatch(
          showAlert({
            title: "Success!",
            message: res.message,
            status: 200,
          })
        );
      }
    } catch (err) {
      console.error("❌ Delete failed:", err.response?.data || err.message);
    } finally {
      setModalVisible(false);
      setSelectedVideoId(null);
    }
  };

  return (
    <div className="p-6 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {channelVideos?.length > 0 ? (
        channelVideos.map((video) => (
          <div
            key={video?.videoID}
            className="transform hover:scale-105 transition-transform duration-200 ease-in-out"
          >
            <VideoCard
              showEdit={true}
              setIsUpdate={setIsUpdate}
              video={video}
              handleDelete={() => confirmDelete(video._id)}
            />
          </div>
        ))
      ) : (
        <div className="col-span-full flex flex-col items-center justify-center py-20">
          <p className="text-gray-500 mb-4">No videos uploaded yet.</p>
          <button
            onClick={onUploadClick}
            className="px-5 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition"
          >
            Upload New Video
          </button>
        </div>
      )}

      {/* Confirmation Popup */}

      <PopupModal
        title="Confirm Deletion"
        message="Are you sure you want to delete this video? This action cannot be undone."
        isVisible={modalVisible}
        onClose={() => setModalVisible(false)}
        onConfirm={handleDeleteVideo}
        confirmText="Delete"
        showSecondBtn={true} // Cancel button
      />
 {/* Update video modal  */}
       <UploadVideoModal
          isOpen={isUpdate.show}
          onClose={() => setIsUpdate({show:false,data:null})}
          data={isUpdate.data}
          update={true}
        />
    </div>
  );
};

export default ChannelVideos;

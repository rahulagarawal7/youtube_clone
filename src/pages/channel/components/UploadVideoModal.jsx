import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addVideoThunk } from "../../../store/slices/videoSlice";
import { showAlert } from "../../../store/slices/alertSlice";
import Loader from "../../../components/Loader";

const UploadVideoModal = ({ isOpen, onClose, onUpload }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    thumbnailUrl: "",
    videoID: "", 
  });

const dispatch=useDispatch()
const {loading}=useSelector(store=>store.video)

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title.trim()) return alert("Title is required!");

    try {
      const res= await dispatch(addVideoThunk(formData)).unwrap()
      if(res.success){
         dispatch(showAlert({
          message:res.message,
          title:'Success!',
          status:200
         }))
      }
      setFormData({
        title: "",
        description: "",
        thumbnailUrl: "",
        videoID: "",
      });
      onClose();
    } catch (error) {
      console.error("❌ Upload failed:", error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white w-full max-w-lg rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-bold mb-4">Upload New Video</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter video title"
              className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Add a description..."
              rows={3}
               required
              className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Thumbnail URL */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Thumbnail URL
            </label>
            <input
              type="text"
              name="thumbnailUrl"
              value={formData.thumbnailUrl}
              onChange={handleChange}
               required
              placeholder="Paste thumbnail image URL"
              className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Video URL / ID */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Video ID
            </label>
            <input
              type="text"
              name="videoID" // ✅ matches backend schema
              value={formData.videoID}
              onChange={handleChange}
               required
              placeholder="Paste video file URL or unique ID"
              className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-red-500"
            />
            <span className="text-red-600 text-sm ">Note: “Please make sure to enter all details correctly. Adding incorrect or incomplete information may result in your video not being uploaded or displayed properly.” </span>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100"
              disabled={loading}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-red-600 text-white font-semibold hover:bg-red-700 disabled:opacity-50"
              disabled={loading}
            >
              {loading ? "Uploading..." : "Upload"}
            </button>
          </div>
        </form>
      </div>
      <Loader isVisible={loading}/>
    </div>
  );
};

export default UploadVideoModal;

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addVideoThunk,
  getChannelVideoThunk,
  updateVideoThunk,
} from "../../../store/slices/videoSlice";
import { showAlert } from "../../../store/slices/alertSlice";
import Loader from "../../../components/Loader";
import { filterButtons } from "../../../utils/dummyData";

const UploadVideoModal = ({ isOpen, onClose, update = false, data = {} }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    thumbnailUrl: "",
    videoID: "",
    category: "",
  });

  const dispatch = useDispatch();
  const { loading } = useSelector((store) => store.video);

  // Pre-fill form when modal opens in update mode
  useEffect(() => {
    if (isOpen) {
      if (update && data && Object.keys(data).length > 0) {
        setFormData({
          title: data.title || "",
          description: data.description || "",
          thumbnailUrl: data.thumbnailUrl || "",
          videoID: data.videoID || "",
          category: data.category || "",
        });
      } else {
        // Reset form when opening in upload mode
        setFormData({
          title: "",
          description: "",
          thumbnailUrl: "",
          videoID: "",
          category: "",
        });
      }
    }
  }, [isOpen]); // Only run when isOpen, update, or data changes

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title.trim()) return alert("Title is required!");

    try {
      let res;

      if (update) {
        // Update existing video
        res = await dispatch(
          updateVideoThunk({
            id: data._id,
            data: formData,
          })
        ).unwrap();
      } else {
        // Add new video - preserve existing logic
        res = await dispatch(addVideoThunk(formData)).unwrap();
      }

      if (res.success) {
        dispatch(getChannelVideoThunk());
        dispatch(
          showAlert({
            message: res.message,
            title: update ? "Updated!" : "Success!",
            status: 200,
          })
        );
      }

      // Reset form and close modal
      setFormData({
        title: "",
        description: "",
        thumbnailUrl: "",
        videoID: "",
        category: "",
      });
      onClose();
    } catch (error) {
      console.error(
        `❌ ${update ? "Update" : "Upload"} failed:`,
        error.response?.data || error.message
      );
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white w-full max-w-lg rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-bold mb-4">
          {update ? "Edit Video" : "Upload New Video"}
        </h2>

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
              name="videoID"
              value={formData.videoID}
              onChange={handleChange}
              required
              placeholder="Paste video unique ID"
              className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-red-500"
            />

            <div className="mt-4 mb-2 gap-2">
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Category <span className="text-red-500">*</span>
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-red-500"
              >
                <option value="">-- Select Category --</option>
                {filterButtons.map((item) => (
                  <option key={item.id} value={item.label}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>

            <span className="text-red-600 text-sm">
              Note: "Please make sure to enter all details correctly.{" "}
              {update ? "Updating" : "Adding"} incorrect or incomplete
              information may result in your video not being{" "}
              {update ? "updated" : "uploaded"} or displayed properly."
            </span>
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
              {loading
                ? update
                  ? "Updating..."
                  : "Uploading..."
                : update
                ? "Update"
                : "Upload"}
            </button>
          </div>
        </form>
      </div>
      <Loader isVisible={loading} />
    </div>
  );
};

export default UploadVideoModal;

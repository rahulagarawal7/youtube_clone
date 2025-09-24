import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createChannelThunk,
  updateChannelThunk,
} from "../../../store/slices/channelSlice";
import Loader from "../../../components/Loader";
import { getUserThunk } from "../../../store/slices/authSlice";
import { showAlert } from "../../../store/slices/alertSlice";

const ChannelModal = ({
  isOpen,
  onClose,
  isCreate = true,
  channelData = {},
}) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    avatar: "",
    banner: "",
  });

  const dispatch = useDispatch();
  const { loading } = useSelector((store) => store.channel);

  // Prefill form data if update mode
  useEffect(() => {
    if (!isCreate && channelData) {
      setFormData({
        name: channelData.name || "",
        description: channelData.description || "",
        avatar: channelData.avatar || "",
        banner: channelData.banner || "",
      });
    }
  }, [isCreate, channelData]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      return alert("Channel name is required!");
    }

    try {
      let result;
      if (isCreate) {
        result = await dispatch(createChannelThunk(formData)).unwrap();
      } else {
        result = await dispatch(
          updateChannelThunk({ id: channelData._id, data: formData })
        ).unwrap();
      }

      if (result.success) {
        dispatch(getUserThunk());
        dispatch(
          showAlert({
            title: "Success",
            message: result.message,
            status: 200,
          })
        );
        onClose();
      }
    } catch (err) {
      console.error("Channel error:", err);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white w-full max-w-lg rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-bold mb-4">
          {isCreate ? "Create Your Channel" : "Update Your Channel"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Channel Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Channel Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your channel name"
              className="w-full border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-red-500"
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
              placeholder="Tell viewers about your channel"
              rows={3}
              className="w-full border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          {/* Avatar URL */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Avatar Image URL
            </label>
            <input
              type="text"
              name="avatar"
              value={formData.avatar}
              onChange={handleChange}
              placeholder="Paste avatar image URL"
              className="w-full border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          {/* Banner URL */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Banner Image URL
            </label>
            <input
              type="text"
              name="banner"
              value={formData.banner}
              onChange={handleChange}
              placeholder="Paste banner image URL"
              className="w-full border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>
          <span className="text-red-600 text-sm">
            Note: “Please make sure to enter all details correctly. Adding
            incorrect or incomplete information may result in your Channel not
            being updated or displayed properly.”
          </span>
          {/* Buttons */}
          <div className="flex justify-end gap-3 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-red-600 text-white font-semibold hover:bg-red-700"
            >
              {isCreate ? "Create Channel" : "Update Channel"}
            </button>
          </div>
        </form>
      </div>
      <Loader isVisible={loading} />
    </div>
  );
};

export default ChannelModal;

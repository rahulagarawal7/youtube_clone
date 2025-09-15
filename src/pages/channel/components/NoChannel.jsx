import React, { useState } from "react";
import CreateChannelModal from "./CreateChannelModal";

const NoChannel = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCreateChannel = (data) => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-[70vh] text-center p-6">
      <img
        src="https://www.freeiconspng.com/uploads/status-warning-icon-png-29.png"
        alt="No channel"
        className="w-28 h-28 mb-6 opacity-80"
      />
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        You don’t have a channel yet
      </h2>
      <p className="text-gray-600 max-w-md mb-6">
        Create your channel to upload videos, grow your audience, and start
        sharing your content with the world.
      </p>
      <button
        onClick={() => setIsModalOpen(true)}
        className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition"
      >
        Create Channel
      </button>

      {/* Modal */}
      <CreateChannelModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreate={handleCreateChannel}
      />
    </div>
  );
};

export default NoChannel;

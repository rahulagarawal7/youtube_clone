import React from "react";

const Loader = ({ isVisible = false }) => {
  if (!isVisible) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-50">
      <div className="w-14 h-14 border-4 border-red-600 border-t-transparent rounded-full animate-spin shadow-lg" />
    </div>
  );
};

export default Loader;

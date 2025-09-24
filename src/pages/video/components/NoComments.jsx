import React from "react";

const NoComments = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 px-4 sm:px-6 md:px-8 text-center bg-gray-50 rounded-lg shadow-sm">
      <svg
        className="w-16 h-16 text-gray-400 mb-4"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8 4.03-8 9-8 9 3.582 9 8z"
        />
      </svg>
      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
        No Comments Yet
      </h3>
      <p className="text-sm sm:text-base text-gray-500 max-w-xs sm:max-w-sm">
        Be the first to comment and start the conversation!
      </p>
    </div>
  );
};

export default NoComments;

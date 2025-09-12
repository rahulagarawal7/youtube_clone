import React from "react";

const FilterButton = ({ name, active = false, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-1.5 text-sm whitespace-nowrap rounded-md transition-colors duration-200
        ${
          active
            ? "bg-black text-white"
            : "bg-gray-100 hover:bg-gray-200 text-gray-800"
        }`}
    >
      {name}
    </button>
  );
};

export default FilterButton;

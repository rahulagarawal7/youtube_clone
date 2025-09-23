import React from "react";

const ActionIcon = ({ Icon, label, onClick, className }) => {
  return (
    <div className="relative group">
      <Icon
        onClick={onClick}
        className={`cursor-pointer transition ${className}`}
      />
      <span className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 text-xs bg-gray-800 text-white rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap">
        {label}
      </span>
    </div>
  );
};

export default ActionIcon;

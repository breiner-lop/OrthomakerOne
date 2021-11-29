import React from "react";

export default function ButtonPanelAdmin({ text, active, img, onClick,isCount }) {
  return (
    <button
      className={`w-full flex justify-between items-center text-left px-4 h-20 border-b text-xl border-gray-600 ${
        active ? "bg-purple-light" : "bg-transparent"
      }`}
      onClick={onClick}
    >
      <span className="flex items-center">
       <span> <img src={img} width="18px" height="18px" /></span>
        <span className="ml-4">{text}</span>
      </span>
      {isCount&&<span className="bg-red-400 rounded px-2 py-1 text-xs">0</span>}
    </button>
  );
}

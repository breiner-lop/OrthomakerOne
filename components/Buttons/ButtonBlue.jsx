import React from "react";

export default function ButtonBlue({ text,onClick,type }) {
  return (
    <button type={type} onClick={onClick} className="bg-gradient-to-b border border-solid from-blue-600 to-blue-900 w-48 h-12 text-white rounded mt-4 hover:from-blue-700 hover:to-blue-900 border-blue-500  transition duration-300">
      <span>
        {text}
      </span>
    </button>
  );
}

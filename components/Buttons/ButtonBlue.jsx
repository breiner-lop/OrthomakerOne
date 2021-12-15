import React from "react";

export default function ButtonBlue({ text,onClick,type }) {
  return (
    <button type={type} onClick={onClick} className="bg-gradient-to-b border mb-4 from-blue-600 to-blue-900 w-48 h-12 text-white rounded mt-4 hover:from-white hover:to-white hover:border-blue-500 hover:text-blue-500">
      <span>
        {text}
      </span>
    </button>
  );
}

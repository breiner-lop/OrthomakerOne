import React from "react";
import Link from "next/link";

export default function ButtonPanelAdmin({text, active,img,href,isCount,onClick,count}) {
  return (
    <Link href={href}>
      <div
        className={`w-full cursor-pointer flex justify-between items-center text-left px-4 h-20 border-b border-0 border-solid text-xl border-gray-600 ${
          active ? "bg-purple-light" : "bg-transparent"
        }`}
        onClick={onClick}
      >
        <span className="flex items-center">
          <span>
            <img src={img} width="18px" height="18px" />
          </span>
          <span className="ml-4">{text}</span>
        </span>
        {isCount && (
          <span className="bg-red-400 rounded px-2 py-1 text-xs">{count}</span>
        )}
      </div>
    </Link>
  );
}

import React from 'react'

export default function Extremidad({onClick,extremidad,img,text}) {
    return (
        <div
              onClick={onClick}
              className={`cursor-pointer ${extremidad?"border-blue-700 animate-pulse transform -translate-y-2":"border-purple"} hover:shadow-md transition duration-300 border border-dashed  h-36 w-32 flex flex-col justify-center items-center rounded-lg mx-1`}
            >
              <img
                src={img}
                alt={extremidad}
                className="pb-3 mt-4"
              />
              <span className="text-xs font-bold text-purple-dark">
               {text}
              </span>
            </div>
    )
}

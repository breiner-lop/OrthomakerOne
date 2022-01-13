import React from 'react'

export default function CardComoLoHacemos({img,text,title,icon}) {
    return (
        <div
        className="p-6 rounded-lg flex items-center my-2"
        style={{
          background: `url(${img})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="lg:w-1/5 w-3/5">
          <img
            src={icon}
            width="75px"
            height="75px"
          />
        </div>
        <div className="ml-3">
          <h4 className="font-semibold">{title}</h4>
          <p className="lg:w-4/5 w-full">
          {text}
          </p>
        </div>
      </div>
    )
}

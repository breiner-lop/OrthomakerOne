import React from 'react'

export default function ButtonRed({onClick,text}) {
    return (
        <button className="text-white rounded-lg w-44 h-11 bg-red-500" onClick={onClick}> {text} </button>
    )
}

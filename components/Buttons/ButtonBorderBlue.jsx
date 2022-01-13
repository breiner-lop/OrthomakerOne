import React from 'react'

export default function ButtonBorderBlue({text,onClick}) {
    return (
        <button onClick={onClick} className="border border-blue-600 w-44 text-blue-600 mr-1 rounded-lg h-11 hover:bg-blue-200 transition duration-200" > {text} </button>

    )
}

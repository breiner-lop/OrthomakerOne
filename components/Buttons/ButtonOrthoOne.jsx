import React from 'react'

export default function ButtonOrthoOne({children, onClick}) {
    return (
        <button className="font-light focus:ring" onClick={onClick}> {children} </button>
    )
}

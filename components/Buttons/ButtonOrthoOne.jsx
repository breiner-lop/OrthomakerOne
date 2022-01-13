import React from 'react'

export default function ButtonOrthoOne({children, onClick}) {
    return (
        <button className="font-light" onClick={onClick}> {children} </button>
    )
}

import React from 'react'

export default function ButtonOrthoOne({children, onClick}) {
    return (
        <button className="font-light border border-transparent" onClick={onClick}> {children} </button>
    )
}

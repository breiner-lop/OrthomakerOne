import React from 'react'

export default function Download3D({img,onClick}) {
    return (
        <button onClick={onClick} className='rounded-xl border-purple border mx-2'>
            <img src={img} alt="modelos 3d" className='rounded-xl' />
        </button>
    )
}

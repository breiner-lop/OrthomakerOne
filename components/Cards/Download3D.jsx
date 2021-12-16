import React from 'react'

export default function Download3D({img}) {
    return (
        <button className='rounded-xl border-purple border mx-2'>
            <img src={img} alt="modelos 3d" className='rounded-xl' />
        </button>
    )
}

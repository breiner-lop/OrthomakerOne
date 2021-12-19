import React from 'react'

export default function Download3D({img,onClick,href,name}) {
    return (
       <div className='rounded-xl border-purple border mx-2 w-28 h-28 flex items-center'>
            <a href={href} download={name}>
                <img src={img} alt="modelos 3d" className='rounded-xl' />
            </a>
       </div>
    )
}

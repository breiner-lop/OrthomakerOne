import React from 'react'

export default function CardPetPhotos({img,title}) {
    return (
        <button className='border rounded-lg border-dashed border-purple w-40 mx-1 filter drop-shadow-md'>
            <div className='h-36'>
                <img src={img} alt="imagen perfil" className='w-full h-full object-cover rounded-t-lg' />
            </div>
            <div className='bg-blue-light rounded-b-lg h-10 flex justify-between font-bold text-purple-dark py-2 px-4'>
                <h4>{title}</h4>
                <span>
                    <img src="/img/download.png" alt="descagar icon" className='mx-auto'/>
                </span>
            </div>
        </button>
    )
}

import React from 'react'
import  Link  from 'next/link'

export default function thankyou() {
    return (
        <div className=' bg-gradient-to-b from-white to-blue-200 flex items-center h-screen justify-center'>
            <div>
                <img src="/img/comprobado.png" alt="exito" className='w-28 mx-auto' />
                <h1 className='text-4xl my-6'>Orden realizada con exito</h1>
                <Link href="/admin/ordenes"><button className='bg-red-600 text-white font-medium mr-2 h-10 w-48 rounded-lg hover:bg-opacity-75 transition duration-200 border border-gray-200'>Administrar ordenes</button></Link>
                <Link href="/"><button className='bg-red-600 text-white h-10 ml-2 w-48 font-medium rounded-lg hover:bg-opacity-75 transition duration-200 border border-gray-200'>Volver al inicio</button></Link>
            </div>
        </div>
    )
}

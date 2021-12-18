import {useRouter} from 'next/router';
import React from 'react'

export default function RegistroExitoso() {
    const router=useRouter()
    React.useEffect(()=>{
        setTimeout(()=>{ router.push("login")},3000);
    })
    return (
        <div className='flex items-start justify-end absolute w-full h-full'>
          <div>
          <div className='rounded flex  transition duration-500 items-center h-20 px-10 filter drop-shadow-2xl bg-purple-dark text-white float-right relative mr-16 mt-10'>
               <img src="/img/chulo.png" alt="chulo registro" className='mr-2' /><h1>Registro exitoso</h1>
            </div>
          </div>  
        </div>
    )
}

import React from 'react'
import { useRouter } from 'next/router'

export default function ViewNoAuth() {
    const Router=useRouter()
    return (
        <div className='h-screen w-screen flex justify-center items-center bg-gradient-to-b from-white to-blue-200'>
          <div className='text-center'>
              <img src="/img/logo.png" alt="logo orthomakerone" className='mx-auto mb-6'/>
                <p className='text-center'><span className='text-4xl'>!Vaya, no has iniciado sesi&oacute;n¡</span></p>
              
                <button onClick={()=>Router.push("/login")} className='rounded-full mt-4 px-6 w-72 py-3  transition duration-300 filter drop-shadow-xl hover:bg-opacity-80 font-medium bg-opacity-100 bg-purple-dark  text-white '>Iniciar sesi&oacute;n</button>
          </div>
        </div>
    )
}

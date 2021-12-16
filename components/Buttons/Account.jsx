import React from 'react'
import Link from "next/link"
import { useCasosCtx } from '../../contexts/casosExito/navInicio.context'

export default function Account() {
    /// datos del context
   const {setPopup,popup}=useCasosCtx()
    ///popup's handler
    const logout=()=>{
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setPopup({...popup,auth:!popup.auth})
    }
    return (
        <div>
            <button onClick={()=>setPopup({...popup,state:!popup.state})} className='ml-4 filter drop-shadow-xl hover:bg-gray-50 hover:shadow-md transition duration-300 rounded-full'>
                <img src="/img/account.png" alt="icon account" />
            </button>
           {
            popup.state&& 
            <div className='absolute bg-white rounded-lg -ml-20 py-2 flex flex-col filter drop-shadow transition duration-1000'> 
                <Link href="/admin"><span className='px-4 py-1 hover:bg-gray-50 cursor-pointer'>Administrar</span></Link>
                <button onClick={()=>logout()} className='py-1 hover:bg-gray-50 px-4'>Cerrar sesi&oacute;n</button>
            </div>
           }
        </div>
        
    )
}

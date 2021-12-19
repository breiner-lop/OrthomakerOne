import {useRouter} from 'next/router';
import React from 'react'

export default function PopupExito({text,to,}) {
    const router=useRouter()
    React.useEffect(()=>{
        setTimeout(()=>{ router.push(to)},3000);
    })
    return (
        <div className='flex items-start justify-end absolute w-full h-full z-50'>
          <div>
          <div className={`rounded delay-1000 flex items-center h-20 px-10 filter drop-shadow-2xl bg-purple-dark text-white float-right relative  mt-10 mr-24 `}>
               <img src="/img/chulo.png" alt="chulo registro" className='mr-2' /><h1> {text} </h1>
            </div>
          </div>  
        </div>
    )
}

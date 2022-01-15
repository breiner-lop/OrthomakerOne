import Link from "next/link";
import GetStarted from "./Buttons/GetStarted";
import React from "react"
import Account from "./Buttons/Account";
import { useCasosCtx } from "../contexts/casosExito/navInicio.context";
export default function Navbar() {
  /// datos del context
  const{popup}=useCasosCtx()
  const [token,setToken]=React.useState("")
  const [menu,setMenu]=React.useState(false)
  React.useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token)
  },[popup.auth]);
  return (
    <nav className=" text-purple-dark bg-blue-light ">
    <div className="mx-auto md:flex hidden justify-between h-32 items-center pb-2 px-5 md:px-14 xl:px-24" style={{maxWidth:"1500px"}}>
      <img src="/img/logomain.png" alt="logo de orthomaker" />
      <ul className="flex text-lg">
        <li className="mx-4">
          <Link href="#nosotros">Nosotros</Link>
        </li>
        <li className="mx-4">
          <Link href="#experiencia">Experiencia</Link>
        </li>
        <li className="mx-4">
          <Link href="#contacto">Contacto</Link>
        </li>
      </ul>
      <div className="flex">
      <GetStarted />
     {
       token? <Account/>:<Link href="/login"><a className="font-semibold text-purple-dark border filter drop-shadow-md border-purple ml-2 w-40 h-10 rounded-3xl bg-transparent hover:text-white hover:bg-purple-dark transition duration-300 flex justify-center items-center cursor-pointer">Log in</a></Link>
     }
      </div>
    </div>
      {/*** Version mobile */}
      <div className="mx-auto fixed md:hidden min-h-[80px] z-50 flex flex-col border-b-2 border-gray-200 border-solid w-full pt-2 px-5 bg-gray-300 bg-opacity-10 filter backdrop-blur-md">
     <div className="flex justify-between items-center w-full">
      <img src="/img/logomain.png" alt="logo de orthomaker" className="w-14"/>
      <button onClick={()=>setMenu(!menu)}><img src="/img/menu.png" alt="logo de orthomaker" className="w-10" /></button>
     </div>
      {menu&&<div>
      <ul className="w-full text-2xl text-center">
        <li>
          <Link href="#nosotros">Nosotros</Link>
        </li>
        <li>
          <Link href="#experiencia">Experiencia</Link>
        </li>
        <li>
          <Link href="#contacto">Contacto</Link>
        </li>
      </ul>
      <div className="flex my-6 justify-around">
      <GetStarted />
     {
       token? <Account/>:<Link href="/login"><a className="font-semibold text-purple-dark border border-solid filter drop-shadow-md border-purple ml-2 w-40 h-10 rounded-3xl bg-transparent hover:text-white hover:bg-purple-dark transition duration-300 flex justify-center items-center cursor-pointer">Log in</a></Link>
     }
      </div>
    </div>}
    </div>
    </nav>
  );
}

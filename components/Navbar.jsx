import Link from "next/link";
import GetStarted from "./Buttons/GetStarted";
import React from "react"
import Account from "./Buttons/Account";
import { useCasosCtx } from "../contexts/casosExito/navInicio.context";
export default function Navbar() {
  /// datos del context
  const{popup}=useCasosCtx()
  const [token,setToken]=React.useState("")
  React.useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token)
  },[popup.auth]);
  return (
    <nav className=" text-purple-dark bg-blue-light ">
    <div className="mx-auto flex justify-between h-32 items-center pb-2 px-24" style={{maxWidth:"1500px"}}>
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
       token? <Account/>:<Link href="/login"><span className="font-semibold text-purple-dark border filter drop-shadow-md border-purple ml-2 w-40 h-10 rounded-3xl bg-transparent hover:text-white hover:bg-purple-dark transition duration-300 flex justify-center items-center cursor-pointer">Log in</span></Link>
     }
      </div>
    </div>
    </nav>
  );
}

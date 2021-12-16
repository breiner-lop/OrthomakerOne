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
    <div className="mx-auto flex justify-between h-20 items-end pb-2 pl-24 pr-12" style={{maxWidth:"1500px"}}>
    <Link href="/">
        <a className="text-purple-dark text-2xl">Ortho<strong>Maker</strong></a>
      </Link>
      <ul className="flex text-lg">
        <li className="mx-4">
          <Link href="/">About Us</Link>
        </li>
        <li className="mx-4">
          <Link href="/">Products</Link>
        </li>
        <li className="mx-4">
          <Link href="/">Reviews</Link>
        </li>
        <li className="mx-4">
          <Link href="/">Contact</Link>
        </li>
      </ul>
      <div className="flex">
      <GetStarted />
     {
       token? <Account/> : <Link href="/login"><span className="font-semibold text-purple-dark border filter drop-shadow-md border-purple ml-2 w-40 h-10 rounded-3xl bg-transparent hover:text-white hover:bg-purple-dark transition duration-300 flex justify-center items-center cursor-pointer">Log in</span></Link>
     }
      </div>
    </div>
    </nav>
  );
}

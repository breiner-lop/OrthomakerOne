import React from "react";
import ButtonBlue from "../components/Buttons/ButtonBlue";
import SingUpInput from "../components/Inputs/SingUpInput";

export default function PrimerPaso() {
  //const {setRegistrarseVista}=usePageContext();
  return (
    <div className="flex">
    <div className="w-7/12 bg-purple-dark h-screen" style={{backgroundImage:"url(/img/bgreg.png)",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}></div>
    <div className="w-5/12 h-screen 2xl:pr-32 2xl:pl-16 pr-20 pl-10 pt-6 overflow-y-scroll">
    <div className="flex h-full">
      <div className="w-14 border-l-2 border-gray-300  mt-10 mr-0 2xl:mr-10">
        <div className="w-10 h-10 flex items-center justify-center bg-blue-500 rounded-full -ml-5">
          <span className=" text-white text-3xl">1</span>
        </div>
      </div>
      <div>
        <div className="flex justify-center">
        <img src="/img/logo.png" alt="logo" width="150px" />
        </div>
        <h4 className="2xl:text-4xl text-3xl mt-1 mb-10">
          Informacion de registro
        </h4>
        <SingUpInput type="text" label="Nombre" />
        <SingUpInput type="text" label="Apellido" />
        <SingUpInput type="mail" label="Mail" />
        <SingUpInput type="password" label="Contraseña" />
        <SingUpInput type="text" label="Direccion" />
        <SingUpInput type="text" label="Ciudad de residencia" />
      <ButtonBlue text="Siguiente" onClick={()=>setRegistrarseVista(2)} />
      </div>
    </div>
      </div>
  </div>
   
  );
}

import React from "react";
import ButtonBlue from "../components/Buttons/ButtonBlue";
import SingUpInput from "../components/Inputs/SingUpInput";
import axios from 'axios'
import { useRouter } from "next/router";
import Link from "next/link"
import RegistroExitoso from "../components/RegistroExitoso";

export default function PrimerPaso() {

  const [dataSignup,setDataSignup]=React.useState({})
  // states
  const [registrado,setRegistrado]=React.useState(false)
  // handler inputs signup
  const hanleInputsSignup=(e)=>{
    setDataSignup({
      ...dataSignup,
      [e.target.name]:e.target.value
    })
  }
  // HANLDER SIGNUP 
  const signupSubmit=(e)=>{
    e.preventDefault()
    axios.post(`${process.env.SERVER}/signup`,dataSignup)
    .then(function (response) { // en caso de ser exitosa
      //history.push("/login")
      setRegistrado(true)

    })
    .catch(function (error) { // en caso de ser incorrectos los datos
      console.log(error)
    });
  }
  return (
    <div className="flex">
     {registrado&& <RegistroExitoso/>}
    <div className="w-7/12 bg-purple-dark h-screen" style={{backgroundImage:"url(/img/bgreg.png)",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}></div>
    <div className="w-5/12 h-screen overflow-y-scroll flex justify-center items-center">
    <div className="flex w-full px-6 py-4">
      <div className="w-full">
        <div className="flex justify-center">
        <img src="/img/logo.png" alt="logo" width="150px" />
        </div>
        <form onSubmit={(e)=>{signupSubmit(e)}} className="flex justify-center">
        <div className="w-full grid grid-cols-2 gap-2" style={{maxWidth:"650px"}}>
        <h4 className="2xl:text-4xl text-3xl my-4 col-span-2">
          Informacion de registro
        </h4>
        <div className="col-span-1"><SingUpInput name="name" type="text" label="Nombre" onChange={(e)=>hanleInputsSignup(e)} /></div>
        <div className="col-span-1"><SingUpInput name="lastname" type="text" label="Apellido" onChange={(e)=>hanleInputsSignup(e)} /></div>
        <div className="col-span-2"> <SingUpInput name="mail" type="mail" label="Mail" onChange={(e)=>hanleInputsSignup(e)} /></div>
        <div className="col-span-2"><SingUpInput name="password" type="password" label="Contraseña" onChange={(e)=>hanleInputsSignup(e)} /></div>
        <div className="col-span-1"><SingUpInput name="direction" type="text" label="Direccion" onChange={(e)=>hanleInputsSignup(e)} /></div>
        <div className="col-span-1"> <SingUpInput name="city" type="text" label="Ciudad de residencia" onChange={(e)=>hanleInputsSignup(e)} /></div>
        <div className="col-span-2">
      <ButtonBlue type="submit" text="Registrarse"/>
        <div className="text-center mt-1 2xl:mt-10">
            <span className="mr-1">¿Tienes una cuenta?</span>
            <Link href="/login"><span className="cursor-pointer font-medium underline text-blue-800 hover:text-blue-600">inicia sesi&oacute;n</span></Link>
        </div>
      </div>
       </div>
        </form>
      </div>
    </div>
  </div>
  </div>
   
  );
}

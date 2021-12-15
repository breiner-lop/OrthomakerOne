import React from "react";
import ButtonBlue from "../components/Buttons/ButtonBlue";
import SingUpInput from "../components/Inputs/SingUpInput";
import axios from 'axios'
import { useRouter } from "next/router";

export default function PrimerPaso() {
  //llamada del router
  const history=useRouter()

  // states
  const [dataSignup,setDataSignup]=React.useState({})
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
      history.push("/login")
    })
    .catch(function (error) { // en caso de ser incorrectos los datos
      console.log(error)
    });
  }
  return (
    <div className="flex">
    <div className="w-7/12 bg-purple-dark h-screen" style={{backgroundImage:"url(/img/bgreg.png)",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}></div>
    <div className="w-5/12 h-screen overflow-y-scroll flex justify-center">
    <div className="flex h-full w-full">
      <div>
        <div className="flex justify-center">
        <img src="/img/logo.png" alt="logo" width="150px" />
        </div>
        <h4 className="2xl:text-4xl text-3xl mt-1 mb-10">
          Informacion de registro
        </h4>
        <form onSubmit={(e)=>{signupSubmit(e)}}>
        <SingUpInput name="name" type="text" label="Nombre" onChange={(e)=>hanleInputsSignup(e)} />
        <SingUpInput name="lastname" type="text" label="Apellido" onChange={(e)=>hanleInputsSignup(e)} />
        <SingUpInput name="mail" type="mail" label="Mail" onChange={(e)=>hanleInputsSignup(e)} />
        <SingUpInput name="password" type="password" label="Contraseña" onChange={(e)=>hanleInputsSignup(e)} />
        <SingUpInput name="direction" type="text" label="Direccion" onChange={(e)=>hanleInputsSignup(e)} />
        <SingUpInput name="city" type="text" label="Ciudad de residencia" onChange={(e)=>hanleInputsSignup(e)} />
        <ButtonBlue type="submit" text="Registrarse"/>
        </form>
      </div>
    </div>
      </div>
  </div>
   
  );
}

import React from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";

export default function Login() {
  //llamada al router para redireccionar una ves logeado
  const history=useRouter()
  //use states (variables )
  const [dataLogin,setDatos]=React.useState({
    mail:"",
    password:""
  })
  //hadle inputs
  const handleInputChange = (e) => {
    setDatos({
        ...dataLogin,
        [e.target.name] : e.target.value
    })
}
//manejador del boton inicar sesion
const iniciarSesion=(e)=>{
  e.preventDefault() //llamada a api
  axios.post(`${process.env.SERVER}/login`, {
    mail: dataLogin.mail,
    password:dataLogin.password
  })
  .then(function (response) { // en caso de ser exitosa
    const token =response.data.key;
    localStorage.setItem("token",token);
    const usuario=JSON.stringify(response.data.usuario)
    localStorage.setItem("user",usuario);
{/***
    setTimeout(()=>{
      localStorage.removeItem("token")
      history.push("/login")
    },900000) */}
    response&&history.push("/admin")
  })
  .catch(function (error) { // en caso de ser incorrectos los datos
    setDatos({mail:"",password:""})
  });
}
  return (
    <div className="flex">
      <div
        className="w-7/12 bg-purple-dark h-screen"
        /* style={{
           backgroundImage: "url(/img/bglogin.png)",
           backgroundSize: "cover",
           backgroundRepeat: "no-repeat",
         }}*/
      ></div>
      <div className="w-5/12 h-screen px-16 py-6 2xl:pt-16 flex flex-col justify-between">
        <div>
         <div className="flex justify-center">
         <img src="/img/logo.png" width="150px" height="140px" />
         </div>
          <br />
          <h4 className="2xl:text-4xl text-2xl 2xl:mt-1 mt-0 mb-6 2xl:mb-10">
            Iniciar sesion.
          </h4>
         <form onSubmit={(e)=>iniciarSesion(e)}>
         <div className="rounded border border-gray-400 px-6 h-16 text-sm  my-2">
            <label htmlFor="nombre" className="text-purple-transparent text-xs">
              Nombre de usuario
            </label>
            <br />
            <input name="mail" type="email" className="w-full h-8 focus:outline-none" value={dataLogin.mail} onChange={(e)=>handleInputChange(e)} required />
          </div>
          <div className="rounded border border-gray-400 px-6 h-16 text-sm my-2">
            <label
              htmlFor="contraseña"
              className="text-purple-transparent text-xs "
            >
              Contraseña
            </label>
            <br />
            <input name="password" type="password" className="w-full h-8 focus:outline-none" value={dataLogin.password} onChange={(e)=>handleInputChange(e)} required/>
          </div>
          <div className="flex justify-between my-6">
            <div>
              <input type="checkbox" id="check" />
              <label className="ml-2" htmlFor="check">
                Recordar mi usuario
              </label>
            </div>
            <Link href="#">
              <span className="underline cursor-pointer">
                Olvide mi contraseña
              </span>
            </Link>
          </div>
          <hr />
          <button type="submit">Ingresar</button>
         </form>
        </div>
        <div className="mt-4 text-xs text-center font-medium">
          <span>
            Aun no tienes cuenta,
            <Link href="/registrarse">
              <span className="underline font-black cursor-pointer">
                creala ahora
              </span>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

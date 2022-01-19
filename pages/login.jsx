import React from "react";
import Link from "next/link";
import ButtonBlue from "../components/Buttons/ButtonBlue";
import axios from "axios";
import { useRouter } from "next/router";
import LoadingSping from "../components/LoadingSping";

export default function Login() {
  //llamada al router para redireccionar una ves logeado
  const history=useRouter()
  //use states (variables )
  const [dataLogin,setDatos]=React.useState({
    mail:"",
    password:""
  })
  const [error,setError]=React.useState(false)
  const [enviando,setEnviando]=React.useState(false)
  //hadle inputs
  const handleInputChange = (e) => {
    setDatos({
        ...dataLogin,
        [e.target.name] : e.target.value
    })
}
//manejador del boton inicar sesion
const iniciarSesion=(e)=>{
  setEnviando(true)
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
    response&&history.push("/")
  })
  .catch(function (error) { // en caso de ser incorrectos los datos
    setError(true)
    setEnviando(false)
    setDatos({
      ...dataLogin,
      password:""
    })
  });
}
  return (
    <div className="flex">
      {enviando&&<LoadingSping/>}
      <div
        className="w-7/12 hidden md:block bg-purple-dark h-screen"
        /* style={{
           backgroundImage: "url(/img/bglogin.png)",
           backgroundSize: "cover",
           backgroundRepeat: "no-repeat",
         }}*/
      ></div>
      <div className="md:w-5/12 w-full max-h-screen md:px-16 px-5 py-6 2xl:pt-16 flex flex-col justify-between">
        <div>
         <div className="flex justify-center">
         <img src="/img/logo.png" width="150px" height="140px" />
         </div>
          <br />
          <h4 className="2xl:text-4xl text-2xl 2xl:mt-1 mt-0 mb-6 2xl:mb-10">
            Iniciar sesion.
          </h4>
         <form onSubmit={(e)=>iniciarSesion(e)}>
         <div className="rounded border border-gray-400 border-solid px-6 h-16 text-sm  my-2">
            <label htmlFor="nombre" className="text-purple-transparent text-xs">
              Nombre de usuario
            </label>
            <br />
            <input name="mail" type="email" className="w-full border-none h-8 focus:outline-none" onKeyPress={(e)=>{e.key==="Enter"&&iniciarSesion(e)}} value={dataLogin.mail} onChange={(e)=>handleInputChange(e)} required />
          </div>
          <div className="rounded border border-gray-400 border-solid px-6 h-16 text-sm my-2">
            <label
              htmlFor="contraseña"
              className="text-purple-transparent text-xs "
            >
              Contraseña
            </label>
            <br />
            <input name="password" type="password" className="w-full border-none h-8 focus:outline-none" onKeyPress={(e)=>{e.key==="Enter"&&iniciarSesion(e)}} value={dataLogin.password} onChange={(e)=>handleInputChange(e)} required/>
          </div>
          {error? <div className="rounded  border border-red-100 border-solid shadow-sm text-red-600 p-2">
            <span className="mr-2 font-semibold">X</span><span>Usuario o contraseña incorrectos</span>
          </div>:null }
          {/* <div className="flex justify-between my-6">
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
          </div> */}
          <ButtonBlue type="submit" text="Ingresar" />
         </form>
        </div>
        <div className="mt-10 text-sm text-center font-medium">
          <span>
          ¿No tienes una cuenta?
            <Link href="/registrarse">
              <span className="underline hover:text-blue-500 text-blue-700 cursor-pointer ml-2">
                Registrate
              </span>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

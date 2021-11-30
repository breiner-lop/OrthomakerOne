import React from "react";
import Link from "next/link";
import ButtonBlue from "../components/Buttons/ButtonBlue";

export default function Login() {
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
          <span className="text-purple-transparent">Expositor</span>
          <h4 className="2xl:text-4xl text-2xl 2xl:mt-1 mt-0 mb-6 2xl:mb-10">
            Bienvenido a Arma tu feria
          </h4>
          <div className="rounded border border-gray-400 px-6 h-16 text-sm  my-2">
            <label htmlFor="nombre" className="text-purple-transparent text-xs">
              Nombre de usuario
            </label>
            <br />
            <input type="text" className="w-full h-8 focus:outline-none" />
          </div>
          <div className="rounded border border-gray-400 px-6 h-16 text-sm my-2">
            <label
              htmlFor="contraseña"
              className="text-purple-transparent text-xs "
            >
              Contraseña
            </label>
            <br />
            <input type="password" className="w-full h-8 focus:outline-none" />
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
         <div>
         </div>
          <ButtonBlue text="Ingresar" />
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

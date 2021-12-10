
import React from 'react'
import PropietarioView from "../components/ViewsGetStarted/Propietario";
import MascotaView from "../components/ViewsGetStarted/Mascota";
import Link from "next/link";
import {useCasosCtx} from "../contexts/casosExito/navInicio.context"
import Veterinario from "../components/ViewsGetStarted/Veterinario";
import PetSize from "../components/ViewsGetStarted/PetSize";
import ButtonRed from "../components/Buttons/ButtonCancel";
import ExtremidadAmputada from "../components/ViewsGetStarted/ExtremidadAmputada";
import AlturaAmputacion from "../components/ViewsGetStarted/AlturaAmputacion";
import PerimetroMuñon from "../components/ViewsGetStarted/PerimetroMuñon";
import LargoMuñon from "../components/ViewsGetStarted/LargoMuñon";
import Protesis from "../components/ViewsGetStarted/Protesis";
import { useRouter } from "next/router";

export default function Getstarted() {
    const {navForm}=useCasosCtx()
// privatizador de vistas
    const Router = useRouter();
    React.useEffect(() => {
      const token = localStorage.getItem("token");
      !token ? Router.push("/login") :null
    },[]);
  return (
    <div>
      <div className="flex justify-between text-purple-dark h-20 items-center px-24">
        <div>
          <Link href="/">
            <span className="text-2xl cursor-pointer">
              Ortho<strong>Maker</strong>
            </span>
          </Link>
          <span className="mx-4 text-2xl">/</span>
          <span className="text-2xl cursor-pointer text-blue-transparent">
            Datos basicos
          </span>
        </div>
        <div className="flex">
          <ButtonRed text="Cancelar"/>
        </div>
      </div>
     {
         navForm==1? <PropietarioView />:navForm==2?<MascotaView/>:navForm==3?<Veterinario/>:navForm==4?<PetSize/>:navForm==5?<ExtremidadAmputada/>:navForm==6?<AlturaAmputacion/>:navForm==7?<PerimetroMuñon/>:navForm==8 ? <LargoMuñon/>:navForm==9&&<Protesis/>
     }
    </div>
  );
}


import React from 'react'
import PropietarioView from "../components/ViewsGetStarted/Propietario";
import MascotaView from "../components/ViewsGetStarted/Mascota";
import Link from "next/link";
import {useCasosCtx} from "../contexts/casosExito/navInicio.context"
import Veterinario from "../components/ViewsGetStarted/Veterinario";
import PetSize from "../components/ViewsGetStarted/PetSize";
import ButtonCancel from "../components/Buttons/ButtonCancel";
import ButtonRed from '../components/Buttons/ButtonRed';
import ExtremidadAmputada from "../components/ViewsGetStarted/ExtremidadAmputada";
import AlturaAmputacion from "../components/ViewsGetStarted/AlturaAmputacion";
import PerimetroMuñon from "../components/ViewsGetStarted/PerimetroMuñon";
import LargoMuñon from "../components/ViewsGetStarted/LargoMuñon";
import Protesis from "../components/ViewsGetStarted/Protesis";
import { useRouter } from "next/router";
import ButtonCancelBlueLight from '../components/Buttons/ButtonCancelBlueLight';

export default function Getstarted() {
    const {navForm,setNavForm}=useCasosCtx()
    // states
    const [token, setToken] = React.useState("");
    const [user, setUser] = React.useState("");
// privatizador de vistas
    const Router = useRouter();
    
    React.useEffect(() => {
      const token = localStorage.getItem("token");
      !token ? Router.push("/login") :null
      setToken(token);
      setUser(JSON.parse(localStorage.getItem("user")));
        //localStorage user and token called
      const user = JSON.parse(localStorage.getItem("user"));
      const dataProduction={
        pet_size:localStorage.getItem("pet_size"),
        ext_emputee:localStorage.getItem("ext_emputee"),
        medidaAB:localStorage.getItem("medidaAB"),
        medidaBC:localStorage.getItem("medidaBC"),
        upper_perimeter:localStorage.getItem("upper_perimeter"),
        lower_perimeter:localStorage.getItem("lower_perimeter"),
        stump_length:localStorage.getItem("stump_length"),
        encaje:localStorage.getItem("encaje"),
        pilar:localStorage.getItem("pilar"),
        color:localStorage.getItem("color")
      }
    },[]);
    ///  LOCAL STORAGE DATA

    //HANDLER BOTON SEND TO PRODUCTION(ENVIAR A PRODUCCION)
      const sendToProduction=()=>{

      }
  return (
    <div>
      <div className="flex justify-between text-purple-dark h-20 items-center px-24">
        <div className='flex items-center'>
          {
            navForm==9&&<button className='p-3 mr-4 border border-red-600 rounded-full filter shadow-md transition duration-200 hover:shadow-none' onClick={()=>setNavForm(8)}><img src="/img/rowback.png" alt="rowback" /></button>
          }
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
         {
           navForm==9?<ButtonRed text="Enviar a producci&oacute;n" onClick={()=>sendToProduction} />:<ButtonCancel text="Cancelar"/>
         }
          {
           navForm==9&& <ButtonCancelBlueLight/>
         }
        
        </div>
      </div>
     {
         navForm==1? <PropietarioView token={token} user={user} />:navForm==2?<MascotaView token={token} user={user}/>:navForm==3?<Veterinario token={token} user={user}/>:navForm==4?<PetSize/>:navForm==5?<ExtremidadAmputada/>:navForm==6?<AlturaAmputacion/>:navForm==7?<PerimetroMuñon/>:navForm==8 ? <LargoMuñon/>:navForm==9&&<Protesis/>
     }
    </div>
  );
}

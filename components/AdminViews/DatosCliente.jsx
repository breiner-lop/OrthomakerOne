import React from "react";
import { useCasosCtx } from "../../contexts/casosExito/navInicio.context";
import CampoDetalleOrden from "../CampoDetalleOrden";

export default function DatosCliente() {
  const {panelMobile,setPanelMobile}=useCasosCtx()
  const [user,setUser]=React.useState({})
  React.useEffect(()=>{
    setUser(user=JSON.parse(localStorage.getItem("user")))
  },[])
  return (
    <div className="md:p-6 p-1 w-full" style={{maxWidth:"1000px"}}>
     <div className="flex justify-between">
    {!panelMobile&& <button onClick={()=>setPanelMobile(!panelMobile)} className="md:hidden block ml-3"><img src="/img/menu.png" alt="menu imagen" /></button>}
      <span className="text-blue-transparent">Usuario</span>
     </div>
      <h4 className="mt-6 text-4xl">Mis datos</h4>
      <div className=" border bg-white shadow-md border-gray-300 w-full h-48 rounded-2xl items-center p-6 mt-6">
       {/*  <button className="bg-blue-400 shadow-lg hover:bg-blue-300 transition duration-200 text-white rounded-xl float-right w-28 h-10">
          Editar
        </button> */}
        <div className="flex">
          <div>
            <img
              src="/img/pdto.png"
              alt=""
              className="w-48 rounded-2xl border border-gray-300"
            />
          </div>
          <div className="flex flex-col md:flex-row text-left justify-evenly w-full md:items-center items-start ml-4">
            <div>
              <h4>Breiner lopez</h4>
              <CampoDetalleOrden title="Telefono" valor={user.phone} />
              <CampoDetalleOrden title="Email" valor={user.mail} />
              <CampoDetalleOrden title="Ciudad" valor={user.city} />
            </div>
            <div>
              <CampoDetalleOrden title="Telefono(2)" valor={user.phone2} />
              <CampoDetalleOrden title="Direccion" valor={user.direction} />
            </div>
            <CampoDetalleOrden title="Zip" valor={user.zip} widthTitle="w-6" />
          </div>
        </div>
      </div>
    </div>
  );
}

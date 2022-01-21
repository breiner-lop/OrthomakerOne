import React from "react";
import { useCasosCtx } from "../../contexts/casosExito/navInicio.context";
import CampoDetalleOrden from "../CampoDetalleOrden";
import OrdenCard from "../Cards/OrdenAdmin";
import axios from 'axios'
import Buscar from "../Inputs/Buscar";
import Loading from "../Loading";
export default function DatosCliente() {
  //data context
  const {panelMobile,setPanelMobile,filterValue}=useCasosCtx()
  const [user,setUser]=React.useState({})
  const [orderData,setOrderData]=React.useState([])

  //useEffect
  React.useEffect(()=>{
    setUser(user=JSON.parse(localStorage.getItem("user")))
   if(user.rol_id==0){ 
     axios.get(`${process.env.SERVER}/borradores`,{
      headers: {
        "auth-token": localStorage.getItem("token") //the token is a variable which holds the token
      },
    })
    .then(function (response) {
      // en caso de ser exitosa
      setOrderData(response.data)
    })
    .catch(function (error) {
      // en caso de ser incorrectos los datos
      console.log(error);
    });}
    return ()=>{
      setOrderData([])
      setUser({})
    }
  },[]) 
  return (
    <div className="md:p-6 p-1 w-full h-screen overflow-y-auto" >
    <div className="max-w-[1500px]">
    <div className="flex justify-between">
    {!panelMobile&& <button onClick={()=>setPanelMobile(!panelMobile)} className="md:hidden block ml-3"><img src="/img/menu.png" alt="menu imagen" /></button>}
      <span className="text-blue-transparent">Usuario</span>
     </div>
      <h4 className="mt-6 text-4xl">Mis datos</h4>
      <div className=" border bg-white shadow-md border-gray-300 w-full h-48 rounded-2xl items-center p-6 mt-6">
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
              <h4>{user.name + " " + user.lastname}</h4>
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
      {user.rol_id==0&& 
     <div className="max-h-[600px]">
        <h1 className="text-3xl my-6">Ordenes del administrador</h1>
        <Buscar/>
        <div className="grid grid-cols-10 justify-center text-center text-gray-400 my-8 px-6">
        <h6 className="col-span-1">Consecutivo</h6>
            <h6 className="col-span-3">Numero de orden</h6>
            <h6 className="col-span-3">Valor total</h6>
            <h6 className="col-span-3">Fecha de creación</h6>
          </div>
      { orderData.length? orderData.map((order)=>{
       return(
        order.id.includes(filterValue)?(
          <OrdenCard  key={order.id} count={order.count} id={order.id} total={order.valor_total} date={order.date}/>
        ):order.count.toString().includes(filterValue)&&(
          <OrdenCard  key={order.id} count={order.count} id={order.id} total={order.valor_total} date={order.date}/>
        )
       )
       }):<Loading/>}
      </div>
       }
    </div>
    </div>
  );
}

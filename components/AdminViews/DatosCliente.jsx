import React from "react";
import { useCasosCtx } from "../../contexts/casosExito/navInicio.context";
import CampoDetalleOrden from "../CampoDetalleOrden";
import OrdenCard from "../Cards/OrdenAdmin";
import axios from 'axios'

export default function DatosCliente() {
  const {panelMobile,setPanelMobile}=useCasosCtx()
  const [user,setUser]=React.useState({})
  const [orderData,setOrderData]=React.useState([])
  React.useEffect(()=>{
    setUser(user=JSON.parse(localStorage.getItem("user")))
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
    }); 
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
      <div>
        <h1 className="text-3xl my-6">Ordenes del administrador</h1>
        <div className="grid grid-cols-3 justify-center text-center text-gray-400 my-8 px-6">
            <h6 className="col-span-1">Numero de orden</h6>
            <h6 className="col-span-1">Valor total</h6>
            <h6 className="col-span-1">Fecha de creación</h6>
          </div>
       {user.rol_id==0&& 
       orderData.map((order)=>{
       return(
        <OrdenCard  key={order.id} id={order.id} total={order.valor_total} date={order.date}/>
       )
       })
       }
      </div>
    </div>
  );
}

import React from "react";
import Orden from "../../components/Cards/Orden";
import Buscar from "../../components/Inputs/Buscar";
import LayoutAdmin from "../../components/LayoutAdmin";
import ViewNoAuth from "../../components/ViewNoAuth";
import { useCasosCtx } from "../../contexts/casosExito/navInicio.context";
import axios from "axios";
import Loading from "../../components/Loading";

export default function Ordenes() {
  // data context
  const { setCountOrders, filterValue,setPanelMobile,panelMobile } = useCasosCtx();
  // states
  const [loading, setLoading] = React.useState(true);
  const [orders, serOrders] = React.useState([]);
  const [token, setToken] = React.useState(false);
      //GET ORDENES ADMIN
      const getOrderAdmin=()=>{
        axios
        .get(`${process.env.SERVER}/orders`,{
          headers: {
            "auth-token": localStorage.getItem("token"),
          },
        })
        .then(function (response) {
          // en caso de ser exitosa
          serOrders(response.data);
          setCountOrders(response.data.length);
        })
        .catch(function (error) {
          // en caso de ser incorrectos los datos
        });
        setLoading(false);
      }
      //GET ORDENES CLIENT
      const getOrderUser=()=>{
        const user=JSON.parse(localStorage.getItem("user"))
        axios.get(`${process.env.SERVER}/ordersUser/${user.id}`,{
        headers: {
          "auth-token": localStorage.getItem("token"),
        },
      })
      .then(function (response) {
        // en caso de ser exitosa
        serOrders(response.data);
        setCountOrders(response.data.length);
      })
      .catch(function (error) {
        // en caso de ser incorrectos los datos
      });
      }
  React.useEffect(() => {
    const token = localStorage.getItem("token"); //get token
    const user=JSON.parse(localStorage.getItem("user"))
    setToken(token);
    setLoading(false);
        //llamada a la api ordenes
       if(user){
        if(user.rol_id==0){
          getOrderAdmin()
        }
        else if(user.rol_id==1){
          getOrderUser()
        }
       }
  },[]);
  return (
    <>
      {loading ? null : !token ? (
        <ViewNoAuth />
      ) : (
        <LayoutAdmin>
          <div className="bg-blu-light h-screen w-full md:p-8 p-1 overflow-y-auto">
          <div className="max-w-[1500px]">
                        {/**  ruta */}
          <div className="text-2xl text-purple-dark flex justify-between mb-4 px-4">
             <button onClick={()=>setPanelMobile(!panelMobile)} className="md:hidden block"><img src="/img/menu.png" alt="menu imagen" /></button>
            <span>  Ortho<strong>Maker</strong></span>
            </div>
            <h4 className="text-4xl font-medium mt-2 mb-6">Total ordenes</h4>
            <div className="flex">
              <div className="w-full">
                <div className="flex">
                  <Buscar/>
                </div>
                <div>
                  <div className="grid grid-cols-12 justify-center text-center text-gray-400 my-8 px-6">
                  <h6 className="col-span-1">Consecutivo</h6>
                    <h6 className="col-span-3">Numero de orden</h6>
                    <h6 className="col-span-3">Estado</h6>
                    <h6 className="col-span-2">Valor total</h6>
                    <h6 className="col-span-3">Usuario</h6>
                  </div>
                 {
                   orders.length>0?
                   <div className="overflow-y-auto overflow-x-visible p-2 w-full md:text-base text-xs" style={{maxHeight:"700px"}}>
                   {orders.map((order) => {
                     return (
                       order.id.includes(filterValue)?(
                         <Orden
                           key={order.id}
                           id={order.id}
                           count={order.count}
                           status={order.status}
                           total={order.valor_total}
                           statusProduction={order.prod_status}
                           fullName={order.username}
                         />
                       ):order.username.includes(filterValue)?
                       <Orden
                       key={order.id}
                       id={order.id}
                       count={order.count}
                       status={order.status}
                       total={order.valor_total}
                       statusProduction={order.prod_status}
                       fullName={order.username}
                     />:order.count.toString().includes(filterValue)&& 
                     <Orden
                     key={order.id}
                     id={order.id}
                     count={order.count}
                     status={order.status}
                     total={order.valor_total}
                     statusProduction={order.prod_status}
                     fullName={order.username}
                   />
                     );
                   })}
                 </div>:<Loading/>
                 }
                </div>
              </div>
            </div>
          </div>
          </div>
        </LayoutAdmin>
      )}
    </>
  );
}

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
  const { setCountOrders, filterValue,rolUser,setPanelMobile,panelMobile } = useCasosCtx();
  // states
  const [loading, setLoading] = React.useState(true);
  const [orders, serOrders] = React.useState([]);
  const [token, setToken] = React.useState(false);
  React.useEffect(() => {
    const token = localStorage.getItem("token"); //get token
    const user=JSON.parse(localStorage.getItem("user"))
    setToken(token);
    setLoading(false);
    //llamada a la api ordenes
    if(user&&rolUser!==3){
      axios
      .get(`${process.env.SERVER}/${rolUser==0?"orders":rolUser==1&&"ordersUser/"+user.id}`,{
        headers: {
          "auth-token": token,
        },
      })
      .then(function (response) {
        // en caso de ser exitosa
        console.log(response.data);
        serOrders(response.data);
        setCountOrders(response.data.length);
      })
      .catch(function (error) {
        // en caso de ser incorrectos los datos
      });
    }
  },[rolUser]);


  return (
    <>
      {loading ? null : !token ? (
        <ViewNoAuth />
      ) : (
        <LayoutAdmin>
          <div className="bg-blu-light h-screen w-full md:p-8 p-1 overflow-y-auto">
            {/**  ruta */}
            <div className="text-2xl text-purple-dark flex justify-between mb-4 px-4">
             <button onClick={()=>setPanelMobile(!panelMobile)} className="md:hidden block"><img src="/img/menu.png" alt="menu imagen" /></button>
            <span>  Ortho<strong>Maker</strong></span>
            </div>
            <h4 className="text-4xl font-medium mt-2 mb-6">Total ordenes</h4>
            <div className="flex">
              <div className="w-full">
                <div className="flex">
                  <Buscar />
                </div>
                <div>
                  <div className="grid grid-cols-4 justify-center text-center text-gray-400 my-8 px-6">
                    <h6 className="col-span-1">Numero de orden</h6>
                    <h6 className="col-span-1">Estado</h6>
                    <h6 className="col-span-1">Valor total</h6>
                    <h6 className="col-span-1">Usuario</h6>
                  </div>
                 {
                   orders.length>0?
                   <div className="overflow-y-auto overflow-x-visible p-2 w-full md:text-base text-xs" style={{maxHeight:"700px"}}>
                   {orders.map((order) => {
                     return (
                       order.id.includes(filterValue)&&(
                         <Orden
                           key={order.id}
                           id={order.id}
                           status={order.status}
                           total={order.valor_total}
                           userId={order.users_id}
                           statusProduction={order.prod_status}
                         />
                       )
                     );
                   })}
                 </div>:<Loading/>
                 }
                </div>
              </div>

              {/**  stats Ordenes */}
             {/*  <div className="w-3/12 ml-4 filter drop-shadow-lg">
                <div className="bg-white p-4 rounded-lg">
                  <span>Stats ordenes</span>
                  <br />
                  <h4 className="text-purple-transparent text-xs">
                    Aqui tienes numeros generales sobre tus ordenes
                  </h4>
                  <div className="flex text-center my-4">
                    <div>
                      <span className="text-3xl">56</span>
                      <br />
                      <h4 className="text-xs text-gray-400 mt-2">
                        Ordenes finalizadas
                      </h4>
                    </div>
                    <div>
                      <span className="text-3xl">1</span>
                      <br />
                      <h4 className="text-xs text-gray-400 mt-2">
                        Orden cancelada
                      </h4>
                    </div>
                    <div>
                      <span className="text-3xl">12</span>
                      <br />
                      <h4 className="text-xs text-gray-400 mt-2">
                        Nuevas ordenes
                      </h4>
                    </div>
                    <div>
                      <span className="text-3xl">5</span>
                      <br />
                      <h4 className="text-xs text-gray-400 mt-2">
                        Ordenes en envio
                      </h4>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </LayoutAdmin>
      )}
    </>
  );
}

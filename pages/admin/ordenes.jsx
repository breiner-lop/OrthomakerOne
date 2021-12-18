import React from "react";
import ButtonFiltrar from "../../components/Buttons/ButtonFiltrar";
import Orden from "../../components/Cards/Orden";
import Buscar from "../../components/Inputs/Buscar";
import LayoutAdmin from "../../components/LayoutAdmin";
import ViewNoAuth from "../../components/ViewNoAuth";
import axios from 'axios'

export default function Ordenes() {
  // states
  const [loading, setLoading] = React.useState(true);
  const [token, setToken] = React.useState(false);
  React.useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token)
    setLoading(false)
    //llamada a la api
    axios.get(`${process.env.SERVER}/orders`,{
      headers:{
        "auth-token": token,
      }
    })
    .then(function (response) { // en caso de ser exitosa
      console.log(response)
    })
    .catch(function (error) { // en caso de ser incorrectos los datos
    });
  }, []);
  //manejador del boton inicar sesion
const iniciarSesion=(e)=>{
  e.preventDefault() //llamada a api

}
  return (
    <>
      {loading ? null : !token ? (
        <ViewNoAuth />
      ) : (
        <LayoutAdmin>
          <div className="bg-blu-light h-screen w-full p-8 overflow-y-auto">
            {/**  ruta */}
            <div className="text-2xl text-purple-dark mb  -4">
              Ortho<strong>Maker</strong>
            </div>
            <h4 className="text-4xl font-medium mt-2 mb-6">Total ordenes</h4>
            <div className="flex">
              <div className="w-9/12">
                <div className="flex">
                  <Buscar />
                  <ButtonFiltrar />
                </div>
                <div>
                  <div className="flex justify-between text-gray-400 my-8 px-6">
                    <h6>Numero de orden</h6>
                    <h6>Estado</h6>
                    <h6>Valor total</h6>
                    <h6 className="w-32">Usuario</h6>
                  </div>
                  <div>
                    <Orden id="9034020230" />
                    <Orden id="4005045055" />
                  </div>
                </div>
              </div>

              {/**  stats Ordenes */}
              <div className="w-3/12 ml-4 filter drop-shadow-lg">
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
              </div>
            </div>
          </div>
        </LayoutAdmin>
      )}
    </>
  );
}

import React from "react";
import ButtonBorderBlue from "../../../components/Buttons/ButtonBorderBlue";
import ButtonRed from "../../../components/Buttons/ButtonRed";
import Layout from "../../../components/LayoutAdmin";
import { useRouter } from "next/router";

export default function Orden() {
  const Router = useRouter();
  React.useEffect(() => {
    const token = localStorage.getItem("token");
    token ? null : Router.push("/login");
  }, []);
  return (
    <Layout>
      <div className="bg-blu-light h-screen w-full p-8 overflow-y-auto">
        {/**  logo */}
        <div className="text-2xl text-purple-dark mb-4">
          Ortho<strong>Maker</strong>
        </div>
        {/**  header */}
        <div className="flex justify-between items-center">
          <div className="flex">
            <div className="text-green-500 text-xs h-7 w-20 bg-green-100 rounded-lg flex justify-center items-center mr-2">
              <span>Facturada</span>
            </div>
            <div className="text-blue-500 text-xs h-7 w-20 bg-blue-100 rounded-lg flex justify-center items-center">
              <span>Enviada</span>
            </div>
            <div className="text-gray-400 flex border-l-2 boder border-gray-400 text-xs items-center ml-6">
              <span>
                <img
                  src="/img/Calendar.png"
                  alt="calendarioorden"
                  width="18px"
                  height="20px"
                  className="mx-4"
                />
              </span>
              <span>25.10.2021 a las 06:00 PM</span>
            </div>
          </div>
          <div>
            <ButtonBorderBlue text="Tracking" />
            <ButtonRed text="Cancelar orden" />
          </div>
        </div>
        <div className="flex mt-10">
          <div className="w-4/6">
            {/**  productos */}
            <div className="bg-white rounded-lg pt-6 pb-10  mr-6 filter drop-shadow flex">
              <h6 className="px-6 mb-6 text-xl font-medium">Productos (1) </h6>
              <img src="/img/pdto.png" alt="pdto" width="125px" />
              <div>
                <h4 className="mb-2">Breiner Lopez</h4>
                <div className="flex flex-col text-blue-transparent">
                  <span className="flex">
                    <h6 className="w-24">Telefono</h6> <span className="text-purple-dark">999999</span>
                  </span>
                  <span className="flex">
                  <h6 className="w-24">Email</h6> <span className="text-purple-dark">a@a.com</span>
                  </span>
                  <span className="flex">
                  <h6 className="w-24">Ciudad</h6> <span className="text-purple-dark">Maicao</span>
                  </span>
                </div>
              </div>
              
            </div>
            {/**  envio y transporte */}
            <div className="bg-white rounded-lg mt-6 p-6 text-xs mr-6 filter drop-shadow">
              <h4 className="mb-6 text-xl font-medium">Envio / Transporte</h4>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <img src="/img/fedex.png" alt="fedex" className="mr-4" />
                  <span>
                    <h6>Fedex </h6>
                    <h6 className="text-gray-400">Envio inmediato</h6>
                  </span>
                </div>
                <span>$10.000</span>
              </div>
            </div>
            {/**  resumen pago */}
            <div className="bg-white rounded-lg mt-6 mr-6 text-xs filter drop-shadow-lg">
              <div className="p-6">
                <h4 className="mb-6 text-xl font-medium">Resumen de pago</h4>
                <div className="flex justify-between">
                  <span> Subtotal (2 items)</span>
                  <span>$1.350.000</span>
                </div>
                <div className="flex justify-between my-2">
                  <span> Envio</span>
                  <span>$10.000</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span> Impuestos (IVA 19%)</span>
                  <span>$52.700</span>
                </div>
              </div>
              <div className="flex justify-between bg-blue-50 rounded-b-lg p-6 mt-2">
                <span> Total a pagar usuario</span>
                <span>$1.520.000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

import React from "react";
import CampoDetalleOrden from "../CampoDetalleOrden";

export default function DatosCliente() {
  return (
    <div className="p-6 w-full" style={{maxWidth:"1000px"}}>
      <span className="text-blue-transparent">Usuario</span>
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
          <div className="flex justify-evenly w-full items-center">
            <div>
              <h4>Breiner lopez</h4>
              <CampoDetalleOrden title="Telefono" valor="305930340" />
              <CampoDetalleOrden title="Email" valor="fssffd@jfjf.com" />
              <CampoDetalleOrden title="Ciudad" valor="Santa marta" />
            </div>
            <div>
              <CampoDetalleOrden title="Telefono(2)" valor="345655" />
              <CampoDetalleOrden title="Direccion" valor="calle674 kr35" />
            </div>
            <CampoDetalleOrden title="Zip" valor="3455" />
          </div>
        </div>
      </div>
    </div>
  );
}

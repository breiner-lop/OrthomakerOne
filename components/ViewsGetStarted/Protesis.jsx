import React from "react";

export default function Protesis() {
  /*** LLAMADA DEL CONTEXT MANEJADOR DE VISTAS FORM */
  return (
    <div className="bg-white py-6 flex text-purple-dark overflow-y-hidden">
      {/*** panel de datos protesis */}
      <div className="w-2/5 bg-blue-light px-28 py-6">
        <div className="py-4">
          <h4>ENCAJE PROTÉSICO </h4>
          <div className="flex justify-between">
            <span>Longitud</span>
            <div className="bg-white w-28 flex px-3 rounded border border-gray-200">
              <input type="number" className="w-16 focus:outline-none" />
              <span>CM</span>
            </div>
          </div>
        </div>
        <div className="py-4">
          <h4>ENCAJE PROTÉSICO </h4>
          <div className="flex justify-between">
            <span>Longitud</span>
            <div className="bg-white w-28 flex px-3 rounded border border-gray-200">
              <input type="number" className="w-16 focus:outline-none" />
              <span>CM</span>
            </div>
          </div>
        </div>
        <div className="py-4">
          <h4>ENCAJE PROTÉSICO </h4>
          <div className="flex justify-between">
            <span>Longitud</span>{" "}
            <div className="bg-white w-28 flex px-3 rounded border border-gray-200">
              <input type="number" className="w-16 focus:outline-none" />
              <span>CM</span>
            </div>
          </div>
        </div>
      </div>
      {/*** diseño de la protesis */}
      <div id="threejsroot" className="w-3/5  bg-red-400"></div>
    </div>
  );
}

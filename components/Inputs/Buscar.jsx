import React from "react";

export default function Buscar() {
  return (
    <div className="border border-gray-200 flex px-6 h-20 bg-white rounded-lg w-full filter drop-shadow-lg">
      <input
        type="text"
        placeholder="Buscar por orden o usuario"
        className="w-full mr-10 focus:outline-none"
      />
      <button className="flex items-center">
        <img src="/img/buscar.png" width="28px" height="28px" />
      </button>
    </div>
  );
}

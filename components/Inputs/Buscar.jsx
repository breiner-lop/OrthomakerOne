import React, { useState } from "react";
import { useCasosCtx } from "../../contexts/casosExito/navInicio.context";

export default function Buscar() {
  // data context
  const {setFilterValue}=useCasosCtx()
  // states
  const [filter,setFilter]=useState("")
  return (
    <div className="border border-gray-200 flex px-6 h-20 bg-white rounded-lg w-full filter drop-shadow-lg">
      <input
        type="text"
        placeholder="Buscar por numero de orden"
        className="w-full mr-10 focus:outline-none"
        onChange={(e)=>setFilter(e.target.value)}
      />
      <button onClick={()=>setFilterValue(filter)} className="flex items-center">
        <img src="/img/buscar.png" width="28px" height="28px"/>
      </button>
    </div>
  );
}

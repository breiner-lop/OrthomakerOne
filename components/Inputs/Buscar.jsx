import React, { useState } from "react";
import { useCasosCtx } from "../../contexts/casosExito/navInicio.context";

export default function Buscar() {
  // data context
  const {setFilterValue}=useCasosCtx()
  // states
  const [filter,setFilter]=useState("")
  return (
    <div className="border border-gray-200 flex px-6 h-20 border-solid bg-white rounded-lg w-full filter drop-shadow-lg">
      <input
        type="text"
        placeholder="Buscar por numero de orden o nombre de usuario"
        className="w-full mr-10 border-none focus:outline-none"
        onChange={(e)=>setFilter(e.target.value)}
        onKeyPress={(e)=>{e.key==="Enter"&&setFilterValue(filter)}}
      />
      <button onClick={()=>setFilterValue(filter)} className="flex border-none items-center">
        <img src="/img/buscar.png" width="28px" height="28px"/>
      </button>
    </div>
  );
}

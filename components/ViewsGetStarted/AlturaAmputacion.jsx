import React from 'react'
import ButtonNextForm from "../Buttons/ButtonNextForm";
import {useCasosCtx} from "../../contexts/casosExito/navInicio.context"
import FormCompleted from '../Buttons/FormCompleted';

export default function AlturaAmputacion() {
      /*** LLAMADA DEL CONTEXT MANEJADOR DE VISTAS FORM */
  const {setNavForm}=useCasosCtx()
    return (
        <div className="bg-white py-20 flex justify-center text-purple-dark">
            {/***  formularios completador nav*/}
        <div className="flex flex-col">
          <FormCompleted onClick={()=>setNavForm(1)} perfil="Perfil propietario" />
          <FormCompleted onClick={()=>setNavForm(2)} perfil="Perfil mascota" />
          <FormCompleted onClick={()=>setNavForm(3)} perfil="Perfil veterinario" />
         <div className="border-t-2 border-gray-100 pt-6 flex flex-col">
         <FormCompleted onClick={()=>setNavForm(4)} perfil="Tamaño del canino" />
         <FormCompleted onClick={()=>setNavForm(5)} perfil="Extremidad amputada" />
         </div>
        </div>
        <div className="shadow-lg" style={{ width: "800px" }}>
          <div className="px-12 mb-1 flex justify-between items-center">
            <div className="my-10">
              <span className="text-3xl">Altura amputacion</span>
            </div>
            {/*** button siguientes formulario */}
            <div>
              <ButtonNextForm  onClick={()=>setNavForm(7)}/>
            </div>
          </div>
           {/***Imagen dog */}
          <div className=" flex bg-white p-12 mb-1 justify-center border-b-2 border-t-2 border-gray-200">
           <div className="border-2 rounded-lg border-dashed border-purple mx-1 w-60">
           <img src="/img/ampdelantera.png" alt="dogsize" className="pb-4 py-8" />
           <p className="px-4 text-xs font-bold mb-2 text-center">Si la amputacion es delantera debe ser a la altura del radio-cubito</p>
           </div>
           <div className="border-2 rounded-lg border-dashed border-purple mx-1 w-60">
           <img src="/img/amptrasera.png" alt="dogsize" className="pb-4 py-8" />
           <p className="px-4 text-xs font-bold mb-2 text-center">Si la amputacion es trasera debe ser a la altura de la tibia-perone.</p>
           </div>
          </div>
           {/***input tamaño  */}
           <div className="py-6 border-b-2 border-gray-200 ">
             <p className="w-4/5 text-blue-transparent px-12">A continuación veras la altura de amputación para el uso de esta protesis, selecciona el caso apropiado para tu mascota</p>
            <div className="flex justify-center">
            <img src="/img/ampaltura.png" alt="altura de amputacion" />
            </div>
           </div>
          {/***input tamaño  */}
          <div className=" bg-white p-12 mb-1 flex">
          <div className="mb-6 w-1/2">
              <label htmlFor="nombres">Medida</label>
              <br />
              <div className="bg-blue-light text-purple-dark mr-4 w-80 h-12 border border-blue-100 flex items-center justify-center">
              <input className="focus:outline-none bg-transparent px-4 h-10 w-64" type="number" />
              <span>CM</span>
              </div>
            </div>
            <div className="w-1/2 text-blue-transparent">
                <p>¿Como tomar la medida? Debes colocar de pie al canino, tomar como referencia la otra extremidad existente y haciendo uso de una cinta metrica medir desde el piso hasta la amputacion como lo muestra la siguiente imagenn</p>
            </div>
          </div>
        </div>
      </div>
    )
}

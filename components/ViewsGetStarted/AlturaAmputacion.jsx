import React from 'react'
import ButtonNextForm from "../Buttons/ButtonNextForm";
import {useCasosCtx} from "../../contexts/casosExito/navInicio.context"
import FormCompleted from '../Buttons/FormCompleted';

export default function ExtremidadAmputada() {
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
        <div style={{ width: "800px" }}>
          <div className="px-12 mb-1 flex justify-between">
            <div className="mb-10">
              <span className="text-3xl">Altura de amputacion</span>
            </div>
            {/*** button siguientes formulario */}
            <div>
              <ButtonNextForm  onClick={()=>setNavForm(7)}/>
            </div>
          </div>
           {/***Imagen dog */}
          <div className=" flex bg-white p-12 mb-1 justify-center border-b-2 border-t-2 border-gray-100">
            <img src="/img/peripuñon.png" alt="perimetro del muñon" />

          </div>
          {/***input tamaño  */}
          <div className=" bg-white mb-1">
            <div className=" text-blue-transparent">
                <div className="flex pt-4">
                <div className="mb-6 w-1/2">
              <label htmlFor="nombres">Medida</label>
              <br />
              <input placeholder="Perimetro inferior" className="bg-blue-light mr-4 w-80 h-12 focus:outline-none px-4 filter border border-blue-100" type="text" />
            </div>
            <div className="w-1/2 text-blue-transparent">
                <p>En este punto se deben tomar dos medidas. Para tomar esta medida el canino debe de estar de pie, con ayuda de la cinta metrica  se medirá el perimetro del muñon en las partes mas extremas del mismo como se muestra en la siguiente imagen</p>
            </div>
                </div>
                <div className="flex border-t-2 border-gray-100 pt-4 mt-6">
                <div className="mb-6 w-1/2">
              <label htmlFor="nombres">Medida</label>
              <br />
              <input placeholder="Perimetro superior" className="bg-blue-light mr-4 w-80 h-12 focus:outline-none px-4 filter border border-blue-100" type="text" />
            </div>
            <div className="w-1/2 text-blue-transparent">
                <p>En este punto se deben tomar dos medidas. Para tomar esta medida el canino debe de estar de pie, con ayuda de la cinta metrica  se medirá el perimetro del muñon en las partes mas extremas del mismo como se muestra en la siguiente imagen</p>
            </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    )
}

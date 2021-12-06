import React from 'react'
import ButtonNextForm from "../Buttons/ButtonNextForm";
import {useCasosCtx} from "../../contexts/casosExito/navInicio.context"
import FormCompleted from '../Buttons/FormCompleted';
export default function Veterinario() {
      /*** LLAMADA DEL CONTEXT MANEJADOR DE VISTAS FORM */
  const {setNavForm}=useCasosCtx()
    return (
        <div className="py-20 flex justify-center text-purple-dark">
            {/***  formularios completador nav*/}
        <div className="flex flex-col">
          <FormCompleted onClick={()=>setNavForm(1)} perfil="Perfil propietario" />
          <FormCompleted onClick={()=>setNavForm(2)} perfil="Perfil mascota" />
        </div>
        <div className="shadow-lg" style={{ width: "800px" }}>
          <div className="border-b-2 border-gray-200 p-12 flex justify-between">
            <div>
              <span className="text-3xl">Tienes un veterinario de confianza ?</span>
              <br />
              <span className="text-blue-transparent">
                Ingresa las siguientes datos
              </span>
            </div>
            {/*** button siguientes formulario */}
            <div className="flex items-center">
              <button className="mr-6 underline text-2xl text-blue-transparent" onClick={()=>setNavForm(4)}> Omitir </button>
              <ButtonNextForm  onClick={()=>setNavForm(4)}/>
            </div>
          </div>
           {/***formulario sect 1 */}
          <div className="flex border-b-2 border-gray-200 p-12">
            <div>
              <label htmlFor="nombres">Nombre veterianario</label>
              <br />
              <input className="bg-blue-light mr-4 w-80 h-12 focus:outline-none px-4" type="text" />
            </div>
            <div>
              <label htmlFor="apellidos">Telefono</label>
              <br />
              <input className="bg-blue-light mr-4 w-80 h-12 focus:outline-none px-4" type="number" />
            </div>
          </div>
          {/***formulario sect  */}
          <div className="p-12 border-b-2 border-gray-200">
          <div className="mb-6">
              <label htmlFor="nombres">Nombre veterianario</label>
              <br />
              <input className="bg-blue-light mr-4 w-80 h-12 focus:outline-none px-4" type="text" />
            </div>
            <div className="flex">
            <div>
              <label htmlFor="nombres">Direccion consultorio</label>
              <br />
              <input className="bg-blue-light mr-4 w-52 h-12 focus:outline-none px-4" type="text" />
            </div><div>
              <label htmlFor="nombres">Estado</label>
              <br />
              <input className="bg-blue-light mr-4 w-52 h-12 focus:outline-none px-4" type="text" />
            </div><div>
              <label htmlFor="nombres">ZIP</label>
              <br />
              <input className="bg-blue-light mr-4 w-52 h-12 focus:outline-none px-4" type="text" />
            </div>
            </div>
          </div>
        </div>
      </div>
    )
}

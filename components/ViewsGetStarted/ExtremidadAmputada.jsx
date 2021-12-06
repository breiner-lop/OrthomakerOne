import React from "react";
import ButtonNextForm from "../Buttons/ButtonNextForm";
import { useCasosCtx } from "../../contexts/casosExito/navInicio.context";
import FormCompleted from "../Buttons/FormCompleted";

export default function ExtremidadAmputada() {
  /*** LLAMADA DEL CONTEXT MANEJADOR DE VISTAS FORM */
  const { setNavForm } = useCasosCtx();
  return (
    <div className="py-20 flex justify-center text-purple-dark">
      {/***  formularios completador nav*/}
      <div className="flex flex-col">
        <FormCompleted
          onClick={() => setNavForm(1)}
          perfil="Perfil propietario"
        />
        <FormCompleted onClick={() => setNavForm(2)} perfil="Perfil mascota" />
        <FormCompleted
          onClick={() => setNavForm(3)}
          perfil="Perfil veterinario"
        />
        <div className="border-t-2 border-gray-100 pt-6">
          <FormCompleted
            onClick={() => setNavForm(4)}
            perfil="Tamaño del canino"
          />
        </div>
      </div>
      <div className="shadow-lg" style={{ width: "800px" }}>
        <div className="px-12 mb-1 flex justify-between items-center">
          <div className="my-10">
            <span className="text-3xl">Extremidad amputada</span>
          </div>
          {/*** button siguientes formulario */}
          <div>
            <ButtonNextForm onClick={() => setNavForm(6)} />
          </div>
        </div>
        {/***Imagen dog */}
        <div className=" flex p-12 justify-center border-b-2 border-t-2 border-gray-200">
          <div className="border border-dashed border-purple h-36 w-32 flex flex-col justify-center items-center rounded-lg mx-1">
            <img
              src="/img/piernadelderecha.png"
              alt="dogsize"
              className="pb-3 mt-4"
            />
            <span className="text-xs font-bold text-purple-dark">
              Delantera derecha
            </span>
          </div>
          <div className="border border-dashed border-purple h-36 w-32 flex flex-col justify-center items-center rounded-lg mx-1">
            <img
              src="/img/piernadelizquierda.png"
              alt="dogsize"
              className="pb-3 mt-4"
            />
            <span className="text-xs font-bold text-purple-dark">
              Delantera Izquierda
            </span>
          </div>
          <div className="border border-dashed border-purple h-36 w-32 flex flex-col justify-center items-center rounded-lg mx-1">
            <img
              src="/img/piernatraderecha.png"
              alt="dogsize"
              className="pb-3 mt-4"
            />
            <span className="text-xs font-bold text-purple-dark">
              Trasera derecha
            </span>
          </div>
          <div className="border border-dashed border-purple h-36 w-32 flex flex-col justify-center items-center rounded-lg mx-1">
            <img
              src="/img/piernatraizquierda.png"
              alt="dogsize"
              className="pb-3 mt-4"
            />
            <span className="text-xs font-bold text-purple-dark">
              Trasera izquierda
            </span>
          </div>
        </div>
        {/***texto */}
        <div className=" bg-white py-8 mb-1 text-center">
          <p className="text-blue-transparent">
            Selecciona de entre las opciones cual fue la extremidad amputada en
            tu mascota
          </p>
        </div>
      </div>
    </div>
  );
}

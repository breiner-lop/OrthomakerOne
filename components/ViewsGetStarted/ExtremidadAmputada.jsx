import React from "react";
import ButtonNextForm from "../Buttons/ButtonNextForm";
import { useCasosCtx } from "../../contexts/casosExito/navInicio.context";
import FormCompleted from "../Buttons/FormCompleted";
import { uploadLocalStorage } from "./uploadLocalStorage";
import Extremidad from "../Cards/ExtremidadAmputada";

export default function ExtremidadAmputada() {
  /// estados
  const [extremidad, setExtremidad] = React.useState("");
  /*** LLAMADA DEL CONTEXT MANEJADOR DE VISTAS FORM */
  const { setNavForm } = useCasosCtx();
  // hanle extremidad amputada
  const handleExtremidad = (extremidad) => {
    setExtremidad(extremidad);
    console.log(extremidad);
  };
    // manejador del submit form
    const handleSubmit=(e)=>{
      e.preventDefault()
      // llamada de datos al localStore
      const datosLocal = JSON.parse(localStorage.getItem('dataProthesis'))
      // objeto data prothesis localStorage
      var dataProthesis={
        prothesisData:
        {
          pet_size:parseFloat(datosLocal.prothesisData.pet_size),
          ext_emputee:extremidad
        }
      }
      uploadLocalStorage(dataProthesis)
      setNavForm(6)
    }

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
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="px-12 mb-1 flex justify-between items-center">
            <div className="my-10">
              <span className="text-3xl">Extremidad amputada</span>
            </div>
            {/*** button siguientes formulario */}
            <div>
              <ButtonNextForm />
            </div>
          </div>
          {/***Imagen dog */}
          <div className=" flex p-12 justify-center border-b-2 border-t-2 border-gray-200">
              <Extremidad onClick={() => handleExtremidad("Delantera derecha")} text="Delantera derecha" img="/img/piernadelderecha.png" extremidad={extremidad=="Delantera derecha"?true:false}/>
              <Extremidad onClick={() => handleExtremidad("Delantera izquierda")} text="Delantera izquierda" img="/img/piernadelizquierda.png" extremidad={extremidad=="Delantera izquierda"?true:false}/>
              <Extremidad onClick={() => handleExtremidad("Trasera derecha")} text="Trasera derecha" img="/img/piernatraderecha.png" extremidad={extremidad=="Trasera derecha"?true:false}/>
              <Extremidad onClick={() => handleExtremidad("Trasera izquierda")} text="Trasera izquierda" img="/img/piernatraizquierda.png" extremidad={extremidad=="Trasera izquierda"?true:false}/>
          </div>
          {/***texto */}
          <div className=" bg-white py-8 mb-1 text-center">
            <p className="text-blue-transparent">
              Selecciona de entre las opciones cual fue la extremidad amputada
              en tu mascota
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

import React from "react";
import ButtonNextForm from "../Buttons/ButtonNextForm";
import { useCasosCtx } from "../../contexts/casosExito/navInicio.context";
import FormCompleted from "../Buttons/FormCompleted";
import { uploadLocalStorage } from "./uploadLocalStorage";

export default function AlturaAmputacion() {
  // estados
  const [dataAltura, setAltura] = React.useState({})
  /*** LLAMADA DEL CONTEXT MANEJADOR DE VISTAS FORM */
  const { setNavForm } = useCasosCtx();

  const [medidaAB, setMedidaAB] = React.useState(8.6)
  const [medidaBC, setMedidaBC] = React.useState(11.9)

  //handle input

  //  manejador del submit form
  const handleSubmit = (e) => {
    e.preventDefault()
    // llamada de datos al localStorage
    const datosLocal = JSON.parse(localStorage.getItem('dataProthesis'))
    medidaAB = medidaAB ;
    medidaBC = (medidaBC * 10) - 80;
    // objeto data prothesis localStorage
    var dataProthesis = {
      prothesisData:
      {
        pet_size: parseFloat(datosLocal.prothesisData.pet_size),
        ext_emputee: datosLocal.prothesisData.ext_emputee,
        medidaAB: parseFloat(medidaAB),
        medidaBC: parseFloat(medidaBC),
      }
    }
    uploadLocalStorage(dataProthesis)
    setNavForm(7)
  }
  return (
    <div className="bg-white md:py-20 py-4 md:flex block justify-center text-purple-dark">
      {/***  formularios completador nav*/}
      <div className="flex md:flex-col flex-row md:px-0 text-xs md:text-base px-4">
        <div className="flex flex-col w-1/2 md:w-full">
          <FormCompleted
            onClick={() => setNavForm(1)}
            perfil="Perfil propietario"
          />
          <FormCompleted onClick={() => setNavForm(2)} perfil="Perfil mascota" />
          <FormCompleted
            onClick={() => setNavForm(3)}
            perfil="Perfil veterinario"
          />
        </div>
        <div className="md:border-t-2 w-1/2 md:w-full border-0 border-solid border-t-0 border-gray-100 md:pt-6 pt-0 flex flex-col">
          <FormCompleted
            onClick={() => setNavForm(4)}
            perfil="Tamaño del canino"
          />
          <FormCompleted
            onClick={() => setNavForm(5)}
            perfil="Extremidad amputada"
          />
        </div>
      </div>
      <div className="shadow-lg md:w-[800px] w-full">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="md:px-12 px-4 mb-1 flex justify-between items-center">
            <div className="my-10">
              <span className="text-3xl">Altura amputacion</span>
            </div>
            {/*** button siguientes formulario */}
            <div>
              <ButtonNextForm />
            </div>
          </div>
          {/***Imagen dog */}
          <div className=" flex bg-white md:p-12 p-4 mb-1 justify-center border-b-2 border-0 border-solid border-t-2 border-gray-200">
            <div className="border-2 rounded-lg border-dashed border-purple mx-1 w-60">
              <img
                src="/img/ampdelantera.png"
                alt="dogsize"
                className="pb-4 py-8"
              />
              <p className="px-4 text-xs font-bold mb-2 text-center">
                Si la amputacion es delantera debe ser a la altura del
                radio-cubito
              </p>
            </div>
            <div className="border-2 rounded-lg border-dashed border-purple mx-1 w-60">
              <img
                src="/img/amptrasera.png"
                alt="dogsize"
                className="pb-4 py-8"
              />
              <p className="px-4 text-xs font-bold mb-2 text-center">
                Si la amputacion es trasera debe ser a la altura de la
                tibia-perone.
              </p>
            </div>
          </div>
          {/***input tamaño  */}
          <div className="py-6 border-b-2 border-solid border-0 border-gray-200 ">
            <p className="w-4/5 text-blue-transparent md:px-12 px-4">
              A continuación veras la altura de amputación para el uso de esta
              protesis, selecciona el caso apropiado para tu mascota
            </p>
            <div className="flex justify-center">
              <img src="/img/medidas.png" alt="altura de amputacion"/>
            </div>
          </div>
          {/***input tamaño  */}
          <div className=" bg-white md:p-12 p-4 mb-1">
            <p className="text-blue-transparent">
              ¿Como tomar la medida? Debe colocar de pie al canino, tomar como referencia la otra extremidad existente y haciendo uso de una cinta métrica medir las partes de la extremidad como se muestra en la imagen. La medida se toma del Punto A al Punto B y del Punto B de la articulación hasta el piso o Punto C.
            </p>
            <div className="md:flex block mt-4">
              <div className="mb-6 w-1/2">
                <label htmlFor="nombres">Medida 1</label>
                <br />
                <div className="bg-blue-light text-purple-dark mr-4 w-80 h-12 border border-solid border-blue-200 flex items-center justify-center">
                  <input
                    onChange={(e) =>setMedidaAB(e.target.value) }
                    className="focus:outline-none bg-transparent border-none px-4 h-10 w-64"
                    type="number"
                    name="medidaBC"
                    required
                    step="0.1"
                    value={medidaAB}
                  />
                  <span>CM</span>
                </div>
              </div>
              <div className="w-1/2">
                <label htmlFor="nombres">Medida 2</label>
                <br />
                <div className="bg-blue-light text-purple-dark mr-4 w-80 h-12 border border-solid border-blue-200 flex items-center justify-center">
                  <input
                    onChange={(e) => setMedidaBC(e.target.value)}
                    className="focus:outline-none bg-transparent border-none px-4 h-10 w-64"
                    type="number"
                    name="medidaAB"
                    required
                    step="0.1"
                    value={medidaBC}
                  />
                  <span>CM</span>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

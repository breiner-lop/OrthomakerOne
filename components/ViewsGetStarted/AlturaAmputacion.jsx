import React from "react";
import ButtonNextForm from "../Buttons/ButtonNextForm";
import { useCasosCtx } from "../../contexts/casosExito/navInicio.context";
import FormCompleted from "../Buttons/FormCompleted";

export default function AlturaAmputacion() {
  // estados
  const [dataAltura, setAltura] = React.useState({})
  /*** LLAMADA DEL CONTEXT MANEJADOR DE VISTAS FORM */
  const { setNavForm } = useCasosCtx();
  //handle input
  const handleAltura = (e) => {
    setAltura({
      ...dataAltura,
      [e.target.name]:e.target.value
    });
    console.log(dataAltura);
  };
  //  manejador del submit form
  const handleSubmit=(e)=>{
    e.preventDefault()
    localStorage.setItem('medidaAB',dataAltura.medidaAB)
    localStorage.setItem('medidaBC',dataAltura.medidaBC)
    setNavForm(7)
  }
  return (
    <div className="bg-white py-20 flex justify-center text-purple-dark">
      {/***  formularios completador nav*/}
      <div className="flex flex-col">
        <FormCompleted
          onClick={()=>setNavForm(1)}
          perfil="Perfil propietario"
        />
        <FormCompleted onClick={() =>setNavForm(2)} perfil="Perfil mascota" />
        <FormCompleted
          onClick={()=>setNavForm(3)}
          perfil="Perfil veterinario"
        />
        <div className="border-t-2 border-gray-100 pt-6 flex flex-col">
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
      <div className="shadow-lg" style={{ width: "800px" }}>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="px-12 mb-1 flex justify-between items-center">
            <div className="my-10">
              <span className="text-3xl">Altura amputacion</span>
            </div>
            {/*** button siguientes formulario */}
            <div>
              <ButtonNextForm />
            </div>
          </div>
          {/***Imagen dog */}
          <div className=" flex bg-white p-12 mb-1 justify-center border-b-2 border-t-2 border-gray-200">
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
          <div className="py-6 border-b-2 border-gray-200 ">
            <p className="w-4/5 text-blue-transparent px-12">
              A continuación veras la altura de amputación para el uso de esta
              protesis, selecciona el caso apropiado para tu mascota
            </p>
            <div className="flex justify-center">
              <img src="/img/ampaltura.png" alt="altura de amputacion" />
            </div>
          </div>
          {/***input tamaño  */}
          <div className=" bg-white p-12 mb-1">
          <p className="text-blue-transparent">
              ¿Como tomar la medida? Debe colocar de pie al canino, tomar como referencia la otra extremidad existente y haciendo uso de una cinta métrica medir las partes de la extremidad como se muestra en la imagen. La medida se toma del Punto A al Punto B y del Punto B de la articulación hasta el piso o Punto C. 
              </p>
            <div className="flex mt-4">
            <div className="mb-6 w-1/2">
              <label htmlFor="nombres">Medida A {"->"} B</label>
              <br />
              <div className="bg-blue-light text-purple-dark mr-4 w-80 h-12 border border-blue-100 flex items-center justify-center">
                <input
                  onChange={(e) => handleAltura(e)}
                  className="focus:outline-none bg-transparent px-4 h-10 w-64"
                  type="number"
                  name="medidaBC"
                  required
                />
                <span>CM</span>
              </div>
            </div>
            <div className="w-1/2">
            <label htmlFor="nombres">Medida B {"->"} C</label>
              <br />
              <div className="bg-blue-light text-purple-dark mr-4 w-80 h-12 border border-blue-100 flex items-center justify-center">
                <input
                  onChange={(e) => handleAltura(e)}
                  className="focus:outline-none bg-transparent px-4 h-10 w-64"
                  type="number"
                  name="medidaAB"
                  required
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

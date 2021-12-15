import React from "react";
import ButtonNextForm from "../Buttons/ButtonNextForm";
import { useCasosCtx } from "../../contexts/casosExito/navInicio.context";
import FormCompleted from "../Buttons/FormCompleted";
import { uploadLocalStorage } from "./uploadLocalStorage";

export default function Veterinario() {
  /*** LLAMADA DEL CONTEXT MANEJADOR DE VISTAS FORM */
  const { setNavForm } = useCasosCtx();
  // use states
  const [size, setSize] = React.useState(undefined);
  // form inputs pet change
  const handleInputChange = (e) => {
    setSize(e.target.value);
    console.log(size);
  };
  //  manejador del submit form
  const handleSubmit=(e)=>{
    e.preventDefault()
    var dataProthesis={
      prothesisData:{pet_size:parseFloat(size)}
    }
    uploadLocalStorage(dataProthesis)    
    setNavForm(5)
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
      </div>
      <div className="shadow-lg" style={{ width: "800px" }}>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="px-12 mb-1 flex justify-between items-center">
            <div className="my-10">
              <span className="text-3xl">Tamaño del canino</span>
            </div>
            {/*** button siguientes formulario */}
            <div>
              <ButtonNextForm/>
            </div>
          </div>
          {/***Imagen dog */}
          <div className="flex  p-12 justify-center border-b-2 border-t-2 border-gray-200">
            <img src="/img/dogsize.png" alt="dogsize" />
          </div>
          {/***input tamaño  */}
          <div className=" bg-white p-12 mb-1 flex">
            <div className="mb-6 w-1/2">
              <label htmlFor="nombres">Medida</label>
              <br />
                <div className="bg-blue-light text-purple-dar px-2  mr-4 w-80 h-13 border border-blue-100 flex items-center justify-center">
                <input
                onChange={(e) => {
                  handleInputChange(e);
                }}
                name="pet-size"
                className="bg-blue-light mr-4 w-80 h-12 focus:outline-none px-4 filter "
                type="number"
                required
              />
                <span>CM</span>
              </div>
            </div>
            <div className="w-1/2 text-blue-transparent">
              <p>
                Debes tomar la medida desde el punto A hasta el B como se
                muestra en la imagen
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

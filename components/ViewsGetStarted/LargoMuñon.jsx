import React from "react";
import ButtonNextForm from "../Buttons/ButtonNextForm";
import { useCasosCtx } from "../../contexts/casosExito/navInicio.context";
import FormCompleted from "../Buttons/FormCompleted";
import { uploadLocalStorage } from "./uploadLocalStorage";

export default function LargoMuñon() {
  /*** LLAMADA DEL CONTEXT MANEJADOR DE VISTAS FORM */
  const { setNavForm } = useCasosCtx();
  // estados
  const [largo, setLargo] = React.useState();
  //handle input
  const handleLargo = (e) => {
    var largo = (parseFloat(e.target.value));
    largo = (largo * 10) + 19;

    setLargo(largo);
    console.log(largo);
  };
  //  manejador del submit form
  const handleSubmit=(e)=>{
    e.preventDefault()
          // llamada de datos al localStorage
          const datosLocal = JSON.parse(localStorage.getItem('dataProthesis'))
          // objeto data prothesis localStorage
          var dataProthesis={
            prothesisData:
            {
              pet_size:parseFloat(datosLocal.prothesisData.pet_size),
              ext_emputee:datosLocal.prothesisData.ext_emputee,
              medidaAB:parseFloat(datosLocal.prothesisData.medidaAB),
              medidaBC:parseFloat(datosLocal.prothesisData.medidaBC),
              stump_perimeter_inf:parseFloat(datosLocal.prothesisData.stump_perimeter_inf),
              stump_perimeter_sup:parseFloat(datosLocal.prothesisData.stump_perimeter_sup),
              stump_length:parseFloat(largo)
            }
          }
          uploadLocalStorage(dataProthesis)
    setNavForm(9)
  }
  return (
    <div className="bg-white py-20 flex justify-center text-purple-dark">
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
        <div className="border-t-2 border-gray-100 pt-6 flex flex-col">
          <FormCompleted
            onClick={() => setNavForm(4)}
            perfil="Tamaño del canino"
          />
          <FormCompleted
            onClick={() => setNavForm(5)}
            perfil="Extremidad amputada"
          />
          <FormCompleted
            onClick={() => setNavForm(6)}
            perfil="Altura de amputacion"
          />
          <FormCompleted
            onClick={() => setNavForm(7)}
            perfil="Perimetro del muñon"
          />
        </div>
      </div>
      <div style={{ width: "800px" }}>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="px-12 mb-1 flex justify-between">
            <div className="mb-10">
              <span className="text-3xl">Largo del muñon</span>
            </div>
            {/*** button siguientes formulario */}
            <div>
              <ButtonNextForm />
            </div>
          </div>
          {/***Imagen dog */}
          <div className=" flex bg-white p-12 mb-1 justify-center border-b-2 border-t-2 border-0 border-solid border-gray-100">
            <img src="/img/largomunon.png" alt="dogsize" />
          </div>
          {/***input tamaño  */}
          <div className=" bg-white p-12 mb-1 flex">
            <div className="mb-6 w-1/2">
              <label htmlFor="nombres">Medida</label>
              <br />
              <div className="bg-blue-light text-purple-dark mr-4 w-80 h-12 border border-solid border-blue-200 flex items-center justify-center">
                <input
                  onChange={(e) => handleLargo(e)}
                  name="largo"
                  className="focus:outline-none bg-transparent border-none px-4 h-10 w-64"
                  type="number" required
                  step="0.1"
                />
                <span>CM</span>
              </div>
            </div>
            <div className="w-1/2 text-blue-transparent">
              <p>
                Esta medida sirve para conocer el largo del encaje que estara en
                contacto con la amputacion y debe tomarse como se muestra en la
                siguiente imagen
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

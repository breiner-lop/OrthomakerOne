import React from "react";
import ButtonNextForm from "../Buttons/ButtonNextForm";
import { useCasosCtx } from "../../contexts/casosExito/navInicio.context";
import FormCompleted from "../Buttons/FormCompleted";
import axios from "axios";

export default function Veterinario() {
  /*** LLAMADA DEL CONTEXT MANEJADOR DE VISTAS FORM */
  const { setNavForm } = useCasosCtx();
  //localStorage user and token called
  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");
  // use states
  const [size, setSize] = React.useState("");
  // form inputs pet change
  const handleInputChange = (e) => {
    setSize(e.target.value);
    console.log(size);
  };
  /// method POST pet
  const postProthesis = async (e) => {
    e.preventDefault();
    await axios
      .put(
        `https://api.orthomakerone.com/editProthesis/${user.id}`,
        {
          pet_size: size,
        },
        {
          headers: {
            "auth-token": token, //the token is a variable which holds the token
          },
        }
      )
      .then((response) => {
        // en caso de ser exitosa
        console.log(response);
        setNavForm(5);
      })
      .catch((error) => {
        // en caso de ser incorrectos los datos
        console.log(error);
        setNavForm(5);
      });
  };
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
        <form onSubmit={(e) => postProthesis(e)}>
          <div className="px-12 mb-1 flex justify-between items-center">
            <div className="my-10">
              <span className="text-3xl">Tamaño del canino</span>
            </div>
            {/*** button siguientes formulario */}
            <div>
              <ButtonNextForm onClick={() => setNavForm(5)} />
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
              <input
                onChange={(e) => {
                  handleInputChange(e);
                }}
                name="pet-size"
                className="bg-blue-light mr-4 w-80 h-12 focus:outline-none px-4 filter border border-blue-100"
                type="text"
              />
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

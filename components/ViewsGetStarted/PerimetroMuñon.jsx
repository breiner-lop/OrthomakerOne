import React from "react";
import ButtonNextForm from "../Buttons/ButtonNextForm";
import { useCasosCtx } from "../../contexts/casosExito/navInicio.context";
import FormCompleted from "../Buttons/FormCompleted";
import axios from "axios";

export default function PerimetroMuñon() {
  /*** LLAMADA DEL CONTEXT MANEJADOR DE VISTAS FORM */
  const { setNavForm } = useCasosCtx();
  // estados
  const [perimetro, setPerimetro] = React.useState({});
  //localStorage user and token called
  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");
  //handle input
  const handleInputChange = (e) => {
    setPerimetro({
      ...perimetro,
      [e.target.name]: e.target.value,
    });
    console.log(perimetro);
  };
  //method PUT prothesis
  const putProthesis = async (e) => {
    e.preventDefault();
    await axios
      .put(
        `https://api.orthomakerone.com/editProthesis/${user.id}`,
        {
          perimetro: perimetro, // FALTA POR DEFINIAR LAS VARIABLES DE LA TABLA ACA
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
        setNavForm(8);
      })
      .catch((error) => {
        // en caso de ser incorrectos los datos
        console.log(error);
        setNavForm(8);
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
            perfil="Altura amputacion"
          />
        </div>
      </div>
      <div className="shadow-lg" style={{ width: "800px" }}>
        <form onSubmit={(e) => putProthesis(e)}>
          <div className="px-12 mb-1 flex justify-between items-center">
            <div className="my-10">
              <span className="text-3xl">Perimetro del muñon</span>
            </div>
            {/*** button siguientes formulario */}
            <div>
              <ButtonNextForm />
            </div>
          </div>
          {/***Imagen dog */}
          <div className=" flex bg-white p-12 mb-1 justify-center border-b-2 border-t-2 border-gray-200">
            <img src="/img/peripuñon.png" alt="perimetro del muñon" />
          </div>
          {/***input tamaño  */}
          <div className=" p-10 mb-1">
            <div className=" text-blue-transparent">
              <div className="flex pt-4">
                <div className="mb-6 w-1/2">
                  <label htmlFor="nombres">Medida</label>
                  <br />
                  <div className="bg-blue-light text-purple-dark mr-4 w-80 h-12 border border-blue-100 flex items-center justify-center">
                    <input
                      onChange={(e) => handleInputChange(e)}
                      name="perimetroinferior"
                      placeholder="Perimetro inferior"
                      className="focus:outline-none bg-transparent px-4 h-10 w-64 placeholder-gray-300"
                      type="number"
                      required
                    />
                    <span>CM</span>
                  </div>
                </div>
                <div className="w-1/2 text-blue-transparent">
                  <p>
                    En este punto se deben tomar dos medidas. Para tomar esta
                    medida el canino debe de estar de pie, con ayuda de la cinta
                    metrica se medirá el perimetro del muñon en las partes mas
                    extremas del mismo como se muestra en la siguiente imagen
                  </p>
                </div>
              </div>
              <div className="flex border-t-2 border-gray-100 pt-4 mt-6">
                <div className="mb-6 w-1/2">
                  <label htmlFor="nombres">Medida</label>
                  <br />
                  <div className="bg-blue-light text-purple-dark mr-4 w-80 h-12 border border-blue-100 flex items-center justify-center">
                    <input
                      onChange={(e) => handleInputChange(e)}
                      name="perimetrosuperior"
                      placeholder="Perimetro superior"
                      className="focus:outline-none bg-transparent px-4 h-10 w-64 placeholder-gray-300"
                      type="number"
                      required
                    />
                    <span>CM</span>
                  </div>
                </div>
                <div className="w-1/2 text-blue-transparent">
                  <p>
                    En este punto se deben tomar dos medidas. Para tomar esta
                    medida el canino debe de estar de pie, con ayuda de la cinta
                    metrica se medirá el perimetro del muñon en las partes mas
                    extremas del mismo como se muestra en la siguiente imagen
                  </p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

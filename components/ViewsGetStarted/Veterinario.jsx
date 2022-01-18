import React from "react";
import ButtonNextForm from "../Buttons/ButtonNextForm";
import { useCasosCtx } from "../../contexts/casosExito/navInicio.context";
import FormCompleted from "../Buttons/FormCompleted";
import axios from "axios";
import LoadingSping from "../LoadingSping";

export default function Veterinario({token,user}) {
  // use states
  const [dataVet, setDataVet] = React.useState({});
  const [enviando, setEnviando] = React.useState(false);
  /*** LLAMADA DEL CONTEXT MANEJADOR DE VISTAS FORM */
  const { setNavForm } = useCasosCtx();
  /// method POST pet
  const postVet = async (e) => {
    setEnviando(true)
    e.preventDefault();
    await axios
      .post(
        `${process.env.SERVER}/addVet/${user.id}`,
        {
          zip: dataVet.zip,
          name: dataVet.name,
          phone: dataVet.phone,
          city: dataVet.city,
          state: dataVet.state,
          direction: dataVet.direction,
        },
        {
          headers: {
            "auth-token": token, //the token is a variable which holds the token
          },
        }
      )
      .then((response) => {
        // en caso de ser exitosa
        setNavForm(4);
      })
      .catch((error) => {
        // en caso de ser incorrectos los datos
        setNavForm(3);
      });
  };
  // form inputs pet change
  const handleInputChange = (e) => {
    setDataVet({
      ...dataVet,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="md:py-20 p-4 md:flex block justify-center text-purple-dark">
      {enviando&&<LoadingSping/>}
      {/***  formularios completador nav*/}
      <div className="flex flex-col">
        <FormCompleted onClick={() => setNavForm(1)} perfil="Perfil propietario"/>
        <FormCompleted onClick={() => setNavForm(2)} perfil="Perfil mascota" />
      </div>
      <div className="shadow-lg md:w-[800px] w-full ">
        <form
          onSubmit={(e) => {
            postVet(e);
          }}
        >
          <div className="border-b-2 border-0 border-solid border-gray-200 md:p-12 p-4 flex justify-between">
            <div>
              <span className="md:text-3xl text-xl">
                Tienes un veterinario de confianza ?
              </span>
              <br />
              <span className="text-blue-transparent">
                Ingresa las siguientes datos
              </span>
            </div>
            {/*** button siguientes formulario */}
            <div className="flex items-center">
              <button className="mr-6 underline md:text-2xl text-lg text-blue-transparent border-none" onClick={() => setNavForm(4)}>
                Omitir
              </button>
              <ButtonNextForm />
            </div>
          </div>
          {/***formulario sect 1 */}
          <div className="flex flex-col md:flex-row border-b-2 border-0 border-solid border-gray-200 md:p-12 p-4">
            <div>
              <label htmlFor="nombres">Nombre veterianario</label>
              <br />
              <input
                name="name"
                onChange={(e) => {
                  handleInputChange(e);
                }}
                className="bg-blue-light mr-4 w-80 h-12 focus:outline-none px-4 border border-blue-200 border-solid"
                type="text"
              />
            </div>
            <div>
              <label htmlFor="apellidos">Telefono</label>
              <br />
              <input
                name="phone"
                onChange={(e) => {
                  handleInputChange(e);
                }}
                className="bg-blue-light mr-4 w-80 h-12 focus:outline-none px-4 border border-blue-200 border-solid"
                type="number"
              />
            </div>
          </div>
          {/***formulario sect  */}
          <div className="md:p-12 p-4 border-b-2 border-0 border-solid border-gray-200">
            <div className="mb-6">
              <label htmlFor="nombres">Direccion consultorio</label>
              <br />
              <input
                name="direction"
                onChange={(e) => {
                  handleInputChange(e);
                }}
                className="bg-blue-light mr-4 w-80 h-12 focus:outline-none px-4 border border-blue-200 border-solid"
                type="text"
              />
            </div>
            <div className="md:flex block">
              <div>
                <label htmlFor="nombres">Ciudad</label>
                <br />
                <input
                  name="city"
                  onChange={(e) => {
                    handleInputChange(e);
                  }}
                  className="bg-blue-light mr-4 md:w-52 w-80 h-12 focus:outline-none px-4 border border-blue-200 border-solid"
                  type="text"
                />
              </div>
              <div>
                <label htmlFor="nombres">Departamento</label>
                <br />
                <input
                  name="state"
                  onChange={(e) => {
                    handleInputChange(e);
                  }}
                  className="bg-blue-light mr-4 md:w-52 w-80 h-12 focus:outline-none px-4 border border-blue-200 border-solid"
                  type="text"
                />
              </div>
              <div>
                <label htmlFor="nombres">Codigo postal</label>
                <br />
                <input
                  name="zip"
                  onChange={(e) => {
                    handleInputChange(e);
                  }}
                  className="bg-blue-light mr-4 md:w-52 w-80 h-12 focus:outline-none px-4 border border-blue-200 border-solid"
                  type="text"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

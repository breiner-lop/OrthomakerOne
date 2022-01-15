import ButtonNextForm from "../Buttons/ButtonNextForm";
import { useCasosCtx } from "../../contexts/casosExito/navInicio.context";
import axios from "axios";
import React from "react";
import LoadingSping from "../LoadingSping";

export default function Propietario({token,user}) {
  const [data, setData] = React.useState(user);
  const [enviando, setEnviando] = React.useState(false);

  const {setNavForm } = useCasosCtx();

  /// metodo put  de usuario
  const putUser = (e) => {
    setEnviando(true)
    e.preventDefault()
    axios.put(
      `${process.env.SERVER}/editUser/${user.id}`,
      {
        name:user.name,
        lastname:user.lastname,
        phone:data.phone,
        phone2:data.phone2,
        direction:user.direction,
        city:user.city,
        state:data.state,
        zip:data.zip
      },
      {
        headers: {
          'auth-token': token //the token is a variable which holds the token
        },
      }
    ).then(function (response) { // en caso de ser exitosa
      localStorage.setItem("user",JSON.stringify(data))
      setNavForm(2)
      console.log(response)
    })
    .catch(function (error) { // en caso de ser incorrectos los datos
      console.log(error)
    });
    
  };
  // inputs change
  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
   
   
   // const data=JSON.stringify({...user,[e.target.name]:e.target.value})
    //localStorage.setItem("user",data)
  };

  return (
    <div>
     {enviando&&<LoadingSping/>}
      <div className="md:py-20 py-10 flex justify-center text-purple-dark">
        <div className="shadow-lg w-[800px] md:mx-0 mx-2">
          <form
            onSubmit={(e)=>putUser(e)}
          >
            <div className="md:p-12 p-4 flex justify-between border-b-2 border-gray-200">
              <div>
                <span className="text-2xl">
                  Hola, queremos conocerte un poco mas
                </span>
                <br />
                <span className="text-blue-transparent">
                  ingresa las siguientes asignaciones
                </span>
              </div>
              <div>
                <ButtonNextForm />
              </div>
            </div>
            <div className="grid grid-cols-2 md:p-12 p-4 border-b-2 border-gray-200">
              <div className="col-span-1">
                <label htmlFor="nombres">Nombres</label>
                <br />
                <input
                  name="name"
                  onChange={(e) => handleInputChange(e)}
                  required
                  value={data.name}
                  className="bg-blue-light mr-4 md:w-80 w-40 h-12 border border-blue-200 focus:outline-none px-4"
                  type="text"
                />
              </div>
              <div className="col-span-1">
                <label htmlFor="apellidos">Apellidos</label>
                <br />
                <input
                  name="lastname"
                  onChange={(e) => handleInputChange(e)}
                  required
                  value={data.lastname}
                  className="bg-blue-light mr-4 border border-blue-200 md:w-80 w-44 h-12 focus:outline-none px-4"
                  type="text"
                />
              </div>
            </div>
            <div className="grid grid-cols-2  border-b-2 border-gray-200 md:p-12 p-4">
              <div className="col-span-1">
                <label htmlFor="Telefono">Telefono</label>
                <br />
                <input
                  name="phone"
                  onChange={(e) => handleInputChange(e)}
                  required
                  className="bg-blue-light mr-4 border border-blue-200 md:w-80 w-40 h-12 focus:outline-none px-4"
                  type="number"
                  value={data.phone}
                />
              </div>
              <div className="col-span-1">
                <label htmlFor="Mail">Mail</label>
                <br />
                <input
                  name="mail"
                  onChange={(e) => handleInputChange(e)}
                  value={user.mail}
                  required
                  className="bg-blue-light mr-4 border border-blue-200 md:w-80 w-44 h-12 focus:outline-none px-4"
                  type="email"
                  disabled
                />
              </div>
              <div className="col-span-1 mt-6">
                <label htmlFor="Telefono">Telefono alternativo</label>
                <br />
                <input
                  name="phone2"
                  onChange={(e) => handleInputChange(e)}
                  className="bg-blue-light mr-4 w-80 h-12 border border-blue-200 focus:outline-none px-4"
                  type="number" value={data.phone2}
                />
              </div>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 bg-white md:p-12 p-4 mb-1">
              <div className="md:col-span-3 col-span-1 mb-6 mr-6">
                <label htmlFor="Direccion">Direccion residencia </label>
                <br />
                <input
                  name="direction"
                  onChange={(e) => handleInputChange(e)}
                  value={data.direction}
                  required
                  className="bg-blue-light mr-4 w-full border border-blue-200 h-12 focus:outline-none px-4"
                  type="text"
                />
              </div>
              <div className="col-span-1">
                <label htmlFor="Ciudad">Ciudad </label>
                <br />
                <input
                  name="city"
                  onChange={(e) => handleInputChange(e)}
                  value={data.city}
                  required
                  className="bg-blue-light mr-4 md:w-52 border border-blue-200 w-80 h-12 focus:outline-none px-4"
                  type="text"
                />
              </div>
              <div className="col-span-1">
                <label htmlFor="Estado">Estado </label>
                <br />
                <input
                  name="state"
                  onChange={(e) => handleInputChange(e)}
                  required
                  className="bg-blue-light mr-4 md:w-52 border border-blue-200 w-80 h-12 focus:outline-none px-4"
                  type="text"
                  value={data.state}
                />
              </div>
              <div className="col-span-1">
                <label htmlFor="Zip"> Zip </label>
                <br />
                <input
                  name="zip"
                  onChange={(e) => handleInputChange(e)}
                  required
                  className="bg-blue-light mr-4 md:w-52 w-80 h-12 border border-blue-200 focus:outline-none px-4"
                  type="text"
                  value={data.zip}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

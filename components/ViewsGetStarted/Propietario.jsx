import ButtonNextForm from "../Buttons/ButtonNextForm";
import { useCasosCtx } from "../../contexts/casosExito/navInicio.context";
import axios from "axios";
import React from "react";

export default function Propietario({token,user}) {
  const [data, setData] = React.useState({});
  const [dataUser, setDataUser] = React.useState({});

  const { navForm,setNavForm } = useCasosCtx();

/// metodo put  de usuario
  const putUser = () => {
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
  /**React.useEffect(()=>{
    axios.get(
      `${process.env.SERVER}/user/${user.id}`,
      {
        headers: {
          'auth-token': token //the token is a variable which holds the token
        },
      }
    ).then(function (response) { // en caso de ser exitosa
      console.log(response)
      setDataUser(response.data)
    })
    .catch(function (error) { // en caso de ser incorrectos los datos
      console.log(error)
    });
  },[navForm])**/
  return (
    <div>
      <div className=" py-20 flex justify-center text-purple-dark">
        <div className="shadow-lg" style={{ width: "800px" }}>
          <form
            onSubmit={() => {
              setNavForm(2);
              putUser();
            }}
          >
            <div className="p-12 flex justify-between border-b-2 border-gray-200">
              <div>
                <span className="text-3xl">
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
            <div className="grid grid-cols-2 p-12 border-b-2 border-gray-200">
              <div className="col-span-1">
                <label htmlFor="nombres">Nombres</label>
                <br />
                <input
                  name="name"
                  onChange={(e) => handleInputChange(e)}
                  required
                  value={dataUser.name}
                  className="bg-blue-light mr-4 w-80 h-12 focus:outline-none px-4"
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
                  value={dataUser.lastname}
                  className="bg-blue-light mr-4 w-80 h-12 focus:outline-none px-4"
                  type="text"
                />
              </div>
            </div>
            <div className="grid grid-cols-2  border-b-2 border-gray-200 p-12">
              <div className="col-span-1">
                <label htmlFor="Telefono">Telefono</label>
                <br />
                <input
                  name="phone"
                  onChange={(e) => handleInputChange(e)}
                  required
                  className="bg-blue-light mr-4 w-80 h-12 focus:outline-none px-4"
                  type="number"
                  value={dataUser.phone}
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
                  className="bg-blue-light mr-4 w-80 h-12 focus:outline-none px-4"
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
                  className="bg-blue-light mr-4 w-80 h-12 focus:outline-none px-4"
                  type="number" value={dataUser.phone2}
                />
              </div>
            </div>
            <div className="grid grid-cols-3 bg-white p-12 mb-1">
              <div className="col-span-3 mb-6 mr-6">
                <label htmlFor="Direccion">Direccion residencia </label>
                <br />
                <input
                  name="addres"
                  onChange={(e) => handleInputChange(e)}
                  value={dataUser.direction}
                  required
                  className="bg-blue-light mr-4 w-full h-12 focus:outline-none px-4"
                  type="text"
                />
              </div>
              <div className="col-span-1">
                <label htmlFor="Ciudad">Ciudad </label>
                <br />
                <input
                  name="city"
                  onChange={(e) => handleInputChange(e)}
                  value={dataUser.city}
                  required
                  className="bg-blue-light mr-4 w-52 h-12 focus:outline-none px-4"
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
                  className="bg-blue-light mr-4 w-52 h-12 focus:outline-none px-4"
                  type="text"
                  value={dataUser.state}
                />
              </div>
              <div className="col-span-1">
                <label htmlFor="Zip"> Zip </label>
                <br />
                <input
                  name="zip"
                  onChange={(e) => handleInputChange(e)}
                  required
                  className="bg-blue-light mr-4 w-52 h-12 focus:outline-none px-4"
                  type="text"
                  value={dataUser.zip}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

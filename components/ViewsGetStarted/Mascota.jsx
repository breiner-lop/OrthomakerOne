import ButtonNextForm from "../Buttons/ButtonNextForm";
import { useCasosCtx } from "../../contexts/casosExito/navInicio.context";
import FormCompleted from "../Buttons/FormCompleted";
import React from "react";
import axios from "axios";

export default function Propietario() {
  //localStorage user and token called
  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");
  // use states
  const [dataPet, setDataPet] = React.useState({});
  /*** LLAMADA DEL CONTEXT MANEJADOR DE VISTAS FORM */
  const { setNavForm } = useCasosCtx();
  /*** MANEJADOR DEL EVENTO SUBIR IMAGEN */
  const handleFile = (ide) => {
    document.getElementById(`${ide}`).click();
  };
  const handleImg = (e) => {
    // Where you will display your image
    var preview = document.getElementById(`${e.target.name}`);
    // The button where the user chooses the local image to display
    var file = document.getElementById(`${e.target.id}`).files[0];
    // FileReader instance
    var reader = new FileReader();
    // When the image is loaded we will set it as source of
    // our img tag
    reader.onloadend = function () {
      setDataPet({
        ...dataPet,
        [e.target.name]: e.target.value,
      });
      preview.style.backgroundImage = `url("${reader.result}")`;
    };
    if (file) {
      // Load image as a base64 encoded URI
      reader.readAsDataURL(file);
    } else {
      preview.src = "";
    }
  };
  /// method POST pet
  const postPet = () => {
    axios
      .post(
        `https://api.orthomakerone.com/addpet/${user.id}`,
        {
          race: dataPet.race,
          name: dataPet.name,
          weight: dataPet.weight,
          age: dataPet.age,
          Image1:dataPet.image1,
          Image2:dataPet.image2,
          Image3:dataPet.image3,
          Image4:dataPet.image4
        },
        {
          headers: {
            "auth-token": token, //the token is a variable which holds the token
          },
        }
      )
      .then(function (response) {
        // en caso de ser exitosa
        console.log(response);
      })
      .catch(function (error) {
        // en caso de ser incorrectos los datos
        console.log(error);
      });
  };
  // form inputs pet change
  const handleInputChange = (e) => {
    setDataPet({
      ...dataPet,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="py-20 flex justify-center text-purple-dark">
      <div>
        <FormCompleted
          onClick={() => setNavForm(1)}
          perfil="Perfil propietario"
        />
      </div>
      <div className="shadow-lg" style={{ width: "800px" }}>
        <form
          onSubmit={() => {
            setNavForm(6);
            postPet();
          }}
        >
          <div className="p-12 border-b-2 border-gray-200 flex justify-between">
            <div>
              <span className="text-3xl">Cuentanos de tu mascota</span>
              <br />
              <span className="text-blue-transparent">
                Ingresa las siguientes datos
              </span>
            </div>
            <div>
              <ButtonNextForm />
            </div>
          </div>
          <div className="flex border-b-2 border-gray-200 p-12">
            <div className="">
              <label htmlFor="nombres">Nombre mascota</label>
              <br />
              <input
                name="name"
                onChange={(e) => {
                  handleInputChange(e);
                }}
                className="bg-blue-light mr-4 w-80 h-12 focus:outline-none px-4"
                type="text"
                required
              />
            </div>
            <div>
              <label htmlFor="age">Edad</label>
              <br />
              <input
                name="age"
                onChange={(e) => {
                  handleInputChange(e);
                }}
                className="bg-blue-light mr-4 w-20 h-12 focus:outline-none px-4"
                type="number"
                required
              />
            </div>
            <div className="">
              <label htmlFor="race">Raza</label>
              <br />
              <input
                name="race"
                onChange={(e) => {
                  handleInputChange(e);
                }}
                className="bg-blue-light mr-4 w-60 h-12 focus:outline-none px-4"
                type="text"
                required
              />
            </div>
          </div>

          <div className="p-12 border-b-2 border-gray-200">
            <div className="">
              <span>Fotografia diferentes perfiles</span>
              <div className="flex">
                {/*** perfil frente */}
                <div style={{backgroundSize:"cover"}}
                  onClick={() => handleFile("frente")}
                  className="h-32 w-32 border-2 rounded border-purple border-dashed mt-6 mr-4 cursor-pointer" id="image1"
                >
                  <input onChange={(e) => handleImg(e)} type="file" className="hidden" id="frente" required name="image1"/>
                  {
                    !dataPet.image1?<><div className="h-20 flex justify-center items-center">
                    <img src="/img/addimg.png" width="42px" height="36px" />
                  </div>
                  <div className="h-11 bg-blue-light px-4">
                    <span className="font-bold text-xs">Frente</span>
                  </div></>:null
                  }
                </div>
                {/*** perfil derecho */}
                <div style={{backgroundSize:"cover"}}
                  onClick={() => handleFile("derecho")}
                  className="h-32 w-32 border-2 rounded border-purple border-dashed mt-6 mr-4 cursor-pointer" id="image2"
                >
                  <input  onChange={(e) => handleImg(e)} type="file" className="hidden" id="derecho" required name="image2"/>
                  {
                    !dataPet.image2?<><div className="h-20 flex justify-center items-center">
                    <img src="/img/addimg.png" width="42px" height="36px" />
                  </div>
                  <div className="h-11 bg-blue-light px-4">
                    <span className="font-bold text-xs">Perfil derecho</span>
                  </div></>:null
                  }
                </div>
                {/*** perfil izquierdo */}
                <div style={{backgroundSize:"cover"}}
                  onClick={() => handleFile("izquierdo")}
                  className="h-32 w-32 border-2 rounded border-purple border-dashed mt-6 mr-4 cursor-pointer"
                  id="image3"
                >
                  <input
                   onChange={(e) => handleImg(e)}
                    type="file"
                    className="hidden"
                    id="izquierdo"
                    required
                    name="image3"
                  />
                  {
                   !dataPet.image3? <> <div className="h-20 flex justify-center items-center">
                   <img src="/img/addimg.png" width="42px" height="36px" />
                 </div>
                 <div className="h-11 bg-blue-light px-4">
                   <span className="font-bold text-xs">Perfil izquierdo</span>
                 </div>
                  </>:null
                  }
                </div>
                {/*** perfil trasero */}
                <div style={{backgroundSize:"cover"}} id="image4"
                  onClick={() => handleFile("trasero")}
                  className="h-32 w-32 border-2 rounded border-purple border-dashed mt-6 mr-4 cursor-pointer"
                  id="image4"
                >
                  <input
                    type="file"
                    onChange={(e) => handleImg(e)}
                    className="hidden"
                    id="trasero"
                    required
                    name="image4"
                  />
                 {
                   !dataPet.image4? <><div className="h-20 flex justify-center items-center">
                   <img
                     src="/img/addimg.png"
                     width="42px"
                     height="36px"
                     id="traseroimg"
                   />
                 </div>
                 
                  <div className="h-11 bg-blue-light px-4">
                    <span className="font-bold text-xs">Perfil trasero</span>
                  </div>
                  </>:null
                  }
                </div>
              </div>
            </div>
          </div>
          <div className="p-12 border-b-2 border-gray-200">
            <div className="">
              <ul className="flex text-white">
                <li>
                  <input
                    name="weight"
                    onClick={(e) => {
                      handleInputChange(e);
                    }}
                    type="radio"
                    value="1-5"
                    id="15"
                    className="hidden"
                  />
                  <label
                    className={` ${
                      dataPet.weight == "1-5" && "bg-red-dark"
                    } w-full py-4 px-10 text-black border cursor-pointer border-purple-light rounded-l-lg`}
                    htmlFor="15"
                  >
                    1-5
                  </label>
                </li>
                <li>
                  <input
                    name="weight"
                    onClick={(e) => {
                      handleInputChange(e);
                    }}
                    type="radio"
                    value="6-11"
                    id="611"
                    className="hidden"
                  />
                  <label
                    className={`${
                      dataPet.weight == "6-11" && "bg-red-dark"
                    } w-full py-4 px-10 text-black border cursor-pointer border-purple-light`}
                    htmlFor="611"
                  >
                    6-11
                  </label>
                </li>
                <li>
                  <input
                    name="weight"
                    onClick={(e) => {
                      handleInputChange(e);
                    }}
                    type="radio"
                    value="12-17"
                    id="1217"
                    className="hidden"
                  />
                  <label
                    className={`${
                      dataPet.weight == "12-17" && "bg-red-dark"
                    } w-full py-4 px-10 text-black border cursor-pointer border-purple-light`}
                    htmlFor="1217"
                  >
                    12-17
                  </label>
                </li>
                <li>
                  <input
                    name="weight"
                    onClick={(e) => {
                      handleInputChange(e);
                    }}
                    type="radio"
                    value="18-23"
                    id="1823"
                    className="hidden"
                  />
                  <label
                    className={`${
                      dataPet.weight == "18-23" && "bg-red-dark"
                    } w-full py-4 px-10 text-black border cursor-pointer border-purple-light`}
                    htmlFor="1823"
                  >
                    18-23
                  </label>
                </li>
                <li>
                  <input
                    name="weight"
                    onClick={(e) => {
                      handleInputChange(e);
                    }}
                    type="radio"
                    value="24-30"
                    id="2430"
                    className="hidden"
                  />
                  <label
                    className={`${
                      dataPet.weight == "24-30" && "bg-red-dark"
                    } w-full py-4 px-10 text-black border cursor-pointer border-purple-light rounded-r-lg`}
                    htmlFor="2430"
                  >
                    24-30
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

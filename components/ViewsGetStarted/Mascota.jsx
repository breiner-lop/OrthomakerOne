import ButtonNextForm from "../Buttons/ButtonNextForm";
import {useCasosCtx} from "../../contexts/casosExito/navInicio.context"
import FormCompleted from "../Buttons/FormCompleted";

export default function Propietario() {
  /*** LLAMADA DEL CONTEXT MANEJADOR DE VISTAS FORM */
  const {setNavForm}=useCasosCtx()
 /*** MANEJADOR DEL EVENTO SUBIR IMAGEN */
  const handleFile=(ide)=>{
    console.log(ide)
    document.getElementById(`${ide}`).click()
  }
  return (
      <div className="bg-blue-light py-20 flex justify-center text-purple-dark">
        <div>
         <FormCompleted  onClick={()=>setNavForm(1)} perfil="Perfil propietario" />
        </div>
        <div style={{ width: "800px" }}>
          <div className="bg-white p-12 mb-1 flex justify-between">
            <div>
              <span className="text-3xl">Cuentanos de tu mascota</span>
              <br />
              <span className="text-blue-transparent">
                Ingresa las siguientes datos
              </span>
            </div>
            <div>
              <ButtonNextForm  onClick={()=>setNavForm(3)}/>
            </div>
          </div>
          <div className=" flex bg-white p-12 mb-1">
            <div className="">
              <label htmlFor="nombres">Nombre mascota</label>
              <br />
              <input className="bg-blue-light mr-4 w-80 h-12 focus:outline-none px-4" type="text" />
            </div>
            <div>
              <label htmlFor="apellidos">Edad</label>
              <br />
              <input className="bg-blue-light mr-4 w-20 h-12 focus:outline-none px-4" type="text" />
            </div>
            <div className="">
              <label htmlFor="apellidos">Raza</label>
              <br />
              <input className="bg-blue-light mr-4 w-60 h-12 focus:outline-none px-4" type="text" />
            </div>
          </div>

          <div className="bg-white p-12 mb-1">
            <div className="">
              <span>Fotografia diferentes perfiles</span>
              <div className="flex">
                <div onClick={()=>handleFile("frente")} className="h-32 w-32 border-2 rounded border-purple border-dashed mt-6 mr-4 cursor-pointer">
                  <input type="file" className="hidden" id="frente" />
                  <div className="h-20 flex justify-center items-center">
                    <img src="/img/addimg.png" width="42px" height="36px" />
                  </div>
                  <div className="h-11 bg-blue-light px-4">
                    <span className="font-bold text-xs">Frente</span>
                  </div>
                </div>
                <div  onClick={()=>handleFile("derecho")} className="h-32 w-32 border-2 rounded border-purple border-dashed mt-6 mr-4 cursor-pointer">
                <input type="file" className="hidden" id="derecho" />
                  <div className="h-20 flex justify-center items-center">
                    <img src="/img/addimg.png" width="42px" height="36px" />
                  </div>
                  <div className="h-11 bg-blue-light px-4">
                    <span className="font-bold text-xs">Perfil derecho</span>
                  </div>
                </div>
                <div  onClick={()=>handleFile("izquierdo")} className="h-32 w-32 border-2 rounded border-purple border-dashed mt-6 mr-4 cursor-pointer">
                <input type="file" className="hidden" id="izquierdo" />
                  <div className="h-20 flex justify-center items-center">
                    <img src="/img/addimg.png" width="42px" height="36px" />
                  </div>
                  <div className="h-11 bg-blue-light px-4">
                    <span className="font-bold text-xs">Perfil izquierdo</span>
                  </div>
                </div>
                <div  onClick={()=>handleFile("trasero")} className="h-32 w-32 border-2 rounded border-purple border-dashed mt-6 mr-4 cursor-pointer">
                <input type="file" className="hidden" id="trasero" />
                  <div className="h-20 flex justify-center items-center">
                    <img src="/img/addimg.png" width="42px" height="36px" />
                  </div>
                  <div className="h-11 bg-blue-light px-4">
                    <span className="font-bold text-xs">Perfil trasero</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" bg-white p-12 mb-1">
            <div className="">
              <ul className="flex">
                <li>
                  <input type="radio" value="1" id="15" className="hidden" />
                  <label
                    className={`w-full py-4 px-10 text-black border cursor-pointer border-purple-light rounded-l-lg`}
                    htmlFor="15"
                  >
                    1-5
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    value="6-11"
                    id="611"
                    className="hidden"
                  />
                  <label
                    className="w-full py-4 px-10 text-black border cursor-pointer border-purple-light"
                    htmlFor="611"
                  >
                    6-11
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    value="12-17"
                    id="1217"
                    className="hidden"
                  />
                  <label
                    className="w-full py-4 px-10 text-black border cursor-pointer border-purple-light"
                    htmlFor="1217"
                  >
                    12-17
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    value="18-23"
                    id="1823"
                    className="hidden"
                  />
                  <label
                    className="w-full py-4 px-10 text-black border cursor-pointer border-purple-light"
                    htmlFor="1823"
                  >
                    18-23
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    value="24-30"
                    id="2430"
                    className="hidden"
                  />
                  <label
                    className="w-full py-4 px-10 text-black border cursor-pointer border-purple-light rounded-r-lg"
                    htmlFor="2430"
                  >
                    24-30
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  );
}

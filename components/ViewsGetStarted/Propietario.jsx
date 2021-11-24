import ButtonNextForm from "../Buttons/ButtonNextForm";
import {useCasosCtx} from "../../contexts/casosExito/navInicio.context"

export default function Propietario() {
    const {navForm,setNavForm}=useCasosCtx()
    const handleNavForm=(id)=>{
        setNavForm(id)
    }

  return (
    <div>
      <div className="bg-blue-light py-20 flex justify-center text-purple-dark">
        <div style={{ width: "800px" }}>
          <div className="bg-white p-12 mb-1 flex justify-between">
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
              <ButtonNextForm onClick={()=>setNavForm(2)} />
            </div>
          </div>
          <div className="grid grid-cols-2 bg-white p-12 mb-1">
            <div className="col-span-1">
              <label htmlFor="nombres">Nombres</label>
              <br />
              <input className="bg-blue-light mr-4 w-80 h-12 focus:outline-none px-4" type="text" />
            </div>
            <div className="col-span-1">
              <label htmlFor="apellidos">Apellidos</label>
              <br />
              <input className="bg-blue-light mr-4 w-80 h-12 focus:outline-none px-4" type="text" />
            </div>
          </div>
          <div className="grid grid-cols-2 bg-white p-12 mb-1">
            <div className="col-span-1">
              <label htmlFor="Telefono">Telefono</label>
              <br />
              <input className="bg-blue-light mr-4 w-80 h-12 focus:outline-none px-4" type="text" />
            </div>
            <div className="col-span-1">
              <label htmlFor="Mail">Mail</label>
              <br />
              <input className="bg-blue-light mr-4 w-80 h-12 focus:outline-none px-4" type="text" />
            </div>
            <div className="col-span-1">
              <label htmlFor="Telefono">Telefono alternativo</label>
              <br />
              <input className="bg-blue-light mr-4 w-80 h-12 focus:outline-none px-4" type="text" />
            </div>
          </div>
          <div className="bg-white p-12">
            <div>
              <label htmlFor="Direccion">Direccion residencia </label>
              <br />
              <input className="bg-blue-light mr-4 w-full h-12 focus:outline-none px-4" type="text" />
            </div>
          </div>
          <div className="grid grid-cols-3 bg-white p-12 mb-1">
            <div className="col-span-1">
              <label htmlFor="Ciudad">Ciudad </label>
              <br />
              <input className="bg-blue-light mr-4 w-52 h-12 focus:outline-none px-4" type="text" />
            </div>
            <div className="col-span-1">
              <label htmlFor="Estado">Estado </label>
              <br />
              <input className="bg-blue-light mr-4 w-52 h-12 focus:outline-none px-4" type="text" />
            </div>
            <div className="col-span-1">
              <label htmlFor="Zip"> Zip </label>
              <br />
              <input className="bg-blue-light mr-4 w-52 h-12 focus:outline-none px-4" type="text" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

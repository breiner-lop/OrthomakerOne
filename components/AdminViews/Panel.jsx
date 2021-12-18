import React from "react";
import ButtonPanelAdmin from "../../components/Buttons/ButtonPanelAdmin";
import { useCasosCtx } from "../../contexts/casosExito/navInicio.context";

export default function Panel() {
  // states
  const [user,setUser]=React.useState({})
  /**** traer datos del context */
  const {activeNumber,setActiveNumber } = useCasosCtx();
  //data localStorage
  React.useEffect(()=>{
    setUser(JSON.parse(localStorage.getItem('user')))
  },[])

  return (
    <div className="bg-purple-dark h-screen w-72 2xl:w-96 text-white flex flex-col justify-between">
      <div className="overflow-x-hidden overflow-y-auto">
      <div className="bg-purple-light m-3 2xl:m-6 w-64 2xl:w-80 rounded-lg p-2">
          <div className="flex items-center justify-between">
            <div className="flex">
              <img
                src="/img/avatar.png"
                width="50px"
                height="50px"
                className="rounded-lg"
              />
              <div className="ml-6 text-left">
                <span className="text-xl">{user.name} {user.lastname}</span> <br />
                <span className="text-xs text-white-transparent">admin</span>
              </div>
            </div>
            <button>
              <img
                src="/img/change.png"
                width="20px"
                height="20px"
                className="rounded-lg"
              />
            </button>
          </div>
        </div>
        <nav>
          <ul>
            <li>
              <ButtonPanelAdmin
              href="/admin/ordenes"
                text="Ordenes"
                img="/img/Ordenes.png"
                active={activeNumber == 1 ? true : false}
                onClick={() => setActiveNumber(1)}
                isCount={true}
              />
            </li>
            <li>
              <ButtonPanelAdmin
              href="/admin/mi-cuenta"
                text="Configuracion"
                img="/img/ordenes.png"
                active={activeNumber == 2 ? true : false}
                onClick={() => {
                  setActiveNumber(2);
                }}
               
              />
            </li>
          </ul>
        </nav>
      </div>
      <div>
        
      </div>
    </div>
  );
}

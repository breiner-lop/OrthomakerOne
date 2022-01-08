import React from "react";
import ButtonPanelAdmin from "../../components/Buttons/ButtonPanelAdmin";
import { useCasosCtx } from "../../contexts/casosExito/navInicio.context";
import { useRouter } from "next/router";
export default function Panel() {
  // states
  const [user,setUser]=React.useState({})
  // router
  const router=useRouter()
  /**** traer datos del context */
  const {activeNumber,setActiveNumber,countOrders,setRolUser,rolUser } = useCasosCtx();
  //data localStorage
  React.useEffect(()=>{
    const userdata=JSON.parse(localStorage.getItem('user'))
    setUser(userdata)
    setRolUser(userdata.rol_id)
  },[])
  // logout button
  const logout=()=>{
    localStorage.clear()
    router.push("/login")
}

  return (
    <div className="bg-purple-dark h-screen w-72 2xl:w-96 text-white flex py-4 flex-col justify-between">
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
                <span className="text-xs text-white-transparent">{rolUser==0?"Admin":"cliente"}</span>
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
                count={countOrders}
              />
            </li>
            <li>
              <ButtonPanelAdmin
              href="/admin/mi-cuenta"
                text="Mis datos"
                img="/img/user.png"
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
      <div className="text-purple-dark ">
          <button onClick={()=>logout()} className="flex bg-white bg-opacity-75 rounded-lg font-semibold h-10 items-center px-4 w-48 justify-center ml-2 hover:bg-opacity-50 transition duration-200">Cerrar sesion <img src="/img/logout.png" alt="logout imagen" className="ml-4" /></button>
        </div>
    </div>
  );
}

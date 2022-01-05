import React from "react";
import DatosCliente from "../../components/AdminViews/DatosCliente";
import Layout from "../../components/LayoutAdmin";
import ViewNoAuth from "../../components/ViewNoAuth";
import { useCasosCtx } from "../../contexts/casosExito/navInicio.context";
export default function InformacionPersonal() {
  //localSorage data
  const{rolUser}=useCasosCtx()
  //states
  const [loading, setLoading] = React.useState(true);
//local storage
    const [token,setToken]=React.useState("")
    // acciones al cargar la pagina
    React.useEffect(() => {
      const token = localStorage.getItem("token");
      setToken(token)
      setLoading(false)
    },[]);
  return (
<div className="bg-blu-light">
{
  loading?null:!token?<ViewNoAuth/>:<Layout><DatosCliente rolUser={rolUser} /></Layout>
}</div>
  );
}

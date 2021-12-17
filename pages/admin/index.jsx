import React from "react";
import Layout from "../../components/LayoutAdmin";
import ViewNoAuth from "../../components/ViewNoAuth";
export default function Home() {
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
<>
{
  loading?null:!token?<ViewNoAuth/>:<Layout>home view</Layout>
}</>
  );
}

import React from "react";
import PropietarioView from "../../components/ViewsGetStarted/Propietario";
import MascotaView from "../../components/ViewsGetStarted/Mascota";
import Link from "next/link";
import { useCasosCtx } from "../../contexts/casosExito/navInicio.context";
import Veterinario from "../../components/ViewsGetStarted/Veterinario";
import PetSize from "../../components/ViewsGetStarted/PetSize";
import ButtonCancel from "../../components/Buttons/ButtonCancel";
import ExtremidadAmputada from "../../components/ViewsGetStarted/ExtremidadAmputada";
import AlturaAmputacion from "../../components/ViewsGetStarted/AlturaAmputacion";
import PerimetroMuñon from "../../components/ViewsGetStarted/PerimetroMuñon";
import Protesis from "../../components/ViewsGetStarted/Protesis";
import ButtonCancelBlueLight from "../../components/Buttons/ButtonCancelBlueLight";
import { getObjects } from "../../threejs/apploader";
import axios from "axios";
import ViewNoAuth from "../../components/ViewNoAuth";
import { useRouter } from "next/router";

export default function Getstarted() {
  const { navForm, setNavForm, datosProtesis } = useCasosCtx();
  // states
  const [token, setToken] = React.useState("");
  const [user, setUser] = React.useState("");
  const [petsId, setPetsId] = React.useState("");
  const [dataProthesis, setDataProthesis] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const [loadingOrder, setLoadingOrder] = React.useState(false);
  // router
  const router =useRouter()
  // privatizador de vistas
  React.useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token);
    setUser(JSON.parse(localStorage.getItem("user")));
    //localStorage user and token called
    const dataProduction = JSON.parse(localStorage.getItem("dataProthesis"));
    const pets_id = localStorage.getItem("pets_id");
    setPetsId(pets_id);
    setDataProthesis(dataProduction);
    setLoading(false)
  },[navForm]);
  ///  LOCAL STORAGE DATA

  //HANDLER BOTON SEND TO PRODUCTION(ENVIAR A PRODUCCION)
  const sendToProduction = () => {
    setLoadingOrder(true)
     // traer datos del threejs
    const obThree = getObjects();
    // creacion del formulario de datos y set del mismo
    let formData = new FormData();
    formData.append("pet_size",parseFloat(dataProthesis.prothesisData.pet_size));
    formData.append("ext_emputee", dataProthesis.prothesisData.ext_emputee);
    formData.append("amputation_height_AB",parseFloat(dataProthesis.prothesisData.medidaAB));
    formData.append("amputation_height_BC",parseFloat(dataProthesis.prothesisData.medidaBC));
    formData.append("stump_perimeter_sup",parseFloat(dataProthesis.prothesisData.stump_perimeter_sup));
    formData.append("stump_perimeter_inf",parseFloat(dataProthesis.prothesisData.stump_perimeter_inf));
    formData.append("stump_length",0);
    formData.append("lace", 0);
    formData.append("pillar",0);
    formData.append("color", datosProtesis.color);
    formData.append("pets_id", petsId);
    formData.append("encajeobj", obThree.encaje, "encaje.stl");
    formData.append("pilarobj", obThree.hueso, "pilar.stl");
    formData.append("carcazaobj", obThree.carcaza, "carcaza.stl");

    axios
      .post(`${process.env.SERVER}/createProthesis/${user.id}`, formData, {
        headers: {
          "auth-token": token, //the token is a variable which holds the token
          "Content-Type": "multipart/form-data",
        },
      })
      .then(function (response) {
        // en caso de ser exitosa
        createOrder(response.data.idProthesis)
        console.log(response);
      })
      .catch(function (error) {
        // en caso de ser incorrectos los datos
        console.log(error);
      }); 
  };
  /// create order
 const createOrder=(idProthesis)=>{
  axios
  .post(`${process.env.SERVER}/orders/${user.id}`, {
    pilar:dataProthesis.prothesisData.medidaBC,
    prothesis_id:idProthesis,
    phone:user.phone,
    direction:user.direction,
    city:user.city,
    state:user.state,
    cod_postal:user.zip

  }, {
    headers: {
      "auth-token": token, //the token is a variable which holds the token
    },
  })
  .then(function (response) {
    // en caso de ser exitosa
    setLoadingOrder(false)
    router.push("/empezar/verificar-orden")
    localStorage.setItem("totalPagar",response.data.total)
    localStorage.setItem("idTransaccion",response.data.id_transacion)
    console.log(response);
  })
  .catch(function (error) {
    // en caso de ser incorrectos los datos
    console.log(error);
  }); 

 }
  return loading? null :!token?<ViewNoAuth />: (
    <div>
      <div className="flex justify-between text-purple-dark h-20 items-center px-24">
        <div className="flex items-center">
          {navForm == 8 && (
            <button
              className="p-3 mr-4 border border-red-600 rounded-full filter shadow-md transition duration-200 hover:shadow-none"
              onClick={() => setNavForm(7)}
            >
              <img src="/img/rowback.png" alt="rowback" />
            </button>
          )}
          <Link href="/">
            <span className="text-2xl cursor-pointer">
              Ortho<strong>Maker</strong>
            </span>
          </Link>
          <span className="mx-4 text-2xl">/</span>
          <span className="text-2xl cursor-pointer text-blue-transparent">
            Datos basicos
          </span>
        </div>
        <div className="flex">
          {navForm == 8 ? (
              <button onClick={()=>sendToProduction()} className="text-white rounded-lg flex items-center justify-center font-semibold  w-44 h-11 bg-red-500 hover:bg-red-600 transition duration-200 filter drop-shadow">{loadingOrder?"Cargando...":"Verificar orden"}</button>
          ) : (
            <ButtonCancel text="Cancelar" />
          )}
          {navForm == 8 && <ButtonCancelBlueLight />}
        </div>
      </div>
      {navForm == 1 ? (
        <PropietarioView token={token} user={user} />
      ) : navForm == 2 ? (
        <MascotaView token={token} user={user} />
      ) : navForm == 3 ? (
        <Veterinario token={token} user={user} />
      ) : navForm == 4 ? (
        <PetSize />
      ) : navForm == 5 ? (
        <ExtremidadAmputada />
      ) : navForm == 6 ? (
        <AlturaAmputacion />
      ) : navForm == 7 ? (
        <PerimetroMuñon />
      ) :(
        navForm == 8 && <Protesis />
      )}
    </div>
  );
}

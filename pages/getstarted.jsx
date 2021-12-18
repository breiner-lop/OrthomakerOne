import React from "react";
import PropietarioView from "../components/ViewsGetStarted/Propietario";
import MascotaView from "../components/ViewsGetStarted/Mascota";
import Link from "next/link";
import { useCasosCtx } from "../contexts/casosExito/navInicio.context";
import Veterinario from "../components/ViewsGetStarted/Veterinario";
import PetSize from "../components/ViewsGetStarted/PetSize";
import ButtonCancel from "../components/Buttons/ButtonCancel";
import ButtonRed from "../components/Buttons/ButtonRed";
import ExtremidadAmputada from "../components/ViewsGetStarted/ExtremidadAmputada";
import AlturaAmputacion from "../components/ViewsGetStarted/AlturaAmputacion";
import PerimetroMuñon from "../components/ViewsGetStarted/PerimetroMuñon";
import LargoMuñon from "../components/ViewsGetStarted/LargoMuñon";
import Protesis from "../components/ViewsGetStarted/Protesis";
import ButtonCancelBlueLight from "../components/Buttons/ButtonCancelBlueLight";
import { getObjects } from "../threejs/apploader";
import axios from "axios";
import ViewNoAuth from "../components/ViewNoAuth";

export default function Getstarted() {
  const { navForm, setNavForm, datosProtesis } = useCasosCtx();
  // states
  const [token, setToken] = React.useState("");
  const [user, setUser] = React.useState("");
  const [petsId, setPetsId] = React.useState("");
  const [dataProthesis, setDataProthesis] = React.useState({});
  const [loading, setLoading] = React.useState(true);
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
    formData.append("stump_length",parseFloat(dataProthesis.prothesisData.stump_length));
    formData.append("lace", parseFloat(datosProtesis.lace));
    formData.append("pillar", parseFloat(datosProtesis.pillar));
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
        console.log(response);
      })
      .catch(function (error) {
        // en caso de ser incorrectos los datos
        console.log(error);
      });
  };

  return loading? null :!token?<ViewNoAuth />: (
    <div>
      <div className="flex justify-between text-purple-dark h-20 items-center px-24">
        <div className="flex items-center">
          {navForm == 9 && (
            <button
              className="p-3 mr-4 border border-red-600 rounded-full filter shadow-md transition duration-200 hover:shadow-none"
              onClick={() => setNavForm(8)}
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
          {navForm == 9 ? (
            <ButtonRed
              text="Enviar a producci&oacute;n"
              onClick={() => {
                sendToProduction();
              }}
            />
          ) : (
            <ButtonCancel text="Cancelar" />
          )}
          {navForm == 9 && <ButtonCancelBlueLight />}
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
      ) : navForm == 8 ? (
        <LargoMuñon />
      ) : (
        navForm == 9 && <Protesis />
      )}
    </div>
  );
}

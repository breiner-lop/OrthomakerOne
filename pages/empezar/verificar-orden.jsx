import React from "react";
import Link from "next/link";
import ButtonCancelBlueLight from "../../components/Buttons/ButtonCancelBlueLight";
import { useCasosCtx } from "../../contexts/casosExito/navInicio.context";
import Head from "next/head";
import CampoDetalleOrden from "../../components/CampoDetalleOrden";
import axios from "axios";

export default function VerificarOrden() {
  // states
  const [dataUser, setDataUser] = React.useState({});
  const [dataProthesis, setDataProthesis] = React.useState(undefined);
  const [idTrasaccion, setIdTrasaccion] = React.useState("");
  const [image1, setImage1] = React.useState("");
  const [image2, setImage2] = React.useState("");
  const [image3, setImage3] = React.useState("");
  const [image4, setImage4] = React.useState("");
  const [total, setTotal] = React.useState(0);
  const [checkout, setCheckout] = React.useState("");
  const [token, setToken] = React.useState("");

  //data context
  const { setNavForm } = useCasosCtx();
  // get order
  const getOrder = (id) => {
    axios
      .get(`${process.env.SERVER}/order/${id}`, {
        headers: {
          "auth-token": token, //the token is a variable which holds the token
        },
      })
      .then(function (response) {
        // en caso de ser exitosa
        localStorage.setItem("user", JSON.stringify(data));
        setNavForm(2);
        console.log(response);
      })
      .catch(function (error) {
        // en caso de ser incorrectos los datos
        console.log(error);
      });
  };
  React.useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token);
    setDataUser(JSON.parse(localStorage.getItem("user")));
    setDataProthesis(JSON.parse(localStorage.getItem("dataProthesis")));
    setTotal(parseFloat(localStorage.getItem("totalPagar")) / 100);
    setImage1(localStorage.getItem("pet-img-image1"));
    setImage2(localStorage.getItem("pet-img-image2"));
    setImage3(localStorage.getItem("pet-img-image3"));
    setImage4(localStorage.getItem("pet-img-image4"));
    //wompi
    const idTransaccion = localStorage.getItem("idTransaccion");
    axios
      .get(`${process.env.SERVER}/order/${idTransaccion}`, {
        headers: {
          "auth-token": token, //the token is a variable which holds the token
        },
      })
      .then(function (response) {
        // en caso de ser exitosa
        localStorage.setItem("user", JSON.stringify(data));

        //wompi create object
        const scriptwompi = document.createElement("script");
        scriptwompi.src = "https://checkout.wompi.co/widget.js";
        scriptwompi.onload = function () {
          let checkout = new WidgetCheckout({
            currency: "COP",
            amountInCents: total,
            reference: "wompiinput",
            publicKey: "pub_test_7pVstX8t7nY6Xup5LOSFL1C6XVhWNrg4",
            redirectUrl:
              "https://creativosarte.ddns.net/data/User/kvnxp/home/desktop/wompi/wompitest.html", // Opcional
            //   taxInCents: { // Opcional
            //     vat: 1900,
            //     consumption: 800
            //   },
            customerData: {
              // Opcional
              email: dataUser.mail,
              fullName: dataUser.name,
              phoneNumber: dataUser.phone,
              phoneNumberPrefix: "+57",
            },
          });
          setCheckout(checkout);
        };
        document.head.appendChild(scriptwompi);

        //wompi end object

        setNavForm(2);
        console.log(response);
      })
      .catch(function (error) {
        // en caso de ser incorrectos los datos
        console.log(error);
      });
  }, []);
  return (
    <div className="px-24">
      <Head></Head>
      <div className="flex justify-between text-purple-dark h-20 items-center">
        <div className="flex items-center">
          <Link href="/empezar">
            <button
              className="p-3 mr-4 border border-red-600 rounded-full filter shadow-md transition duration-200 hover:shadow-none"
              onClick={() => setNavForm(8)}
            >
              <img src="/img/rowback.png" alt="rowback" />
            </button>
          </Link>
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
          <button
            className="bg-purple-dark text-white rounded-lg w-48 h-11 font-semibold shadow-md hover:shadow hover:bg-opacity-95 transition duration-200 flex justify-center items-center"
            onClick={() => {
              checkout.open(function (r) {});
            }}
          >
            Realizar pago
          </button>
          <ButtonCancelBlueLight />
        </div>
      </div>
      <div className="border border-gray-300  shadow-lg bg-white bg-opacity-75 rounded-lg px-6">
        <div className="text-center border-b border-gray-300 py-6">
          <span className="text-2xl">Detalles de la orden</span>
        </div>
        <div className="pt-6 flex">
          {/** datos personales */}
          <div className="w-1/2">
            <h4 className="text-xl text-center justify-between">
              Datos personales
            </h4>
            <div className="grid grid-cols-2 mt-6">
              <div className="flex justify-center">
                <div>
                  <CampoDetalleOrden
                    title="Nombres"
                    valor={`${dataUser.name}  ${dataUser.lastname}`}
                  />
                  <CampoDetalleOrden title="Correo" valor={dataUser.mail} />
                  <CampoDetalleOrden title="Telefono" valor={dataUser.phone} />
                </div>
              </div>
              <div className="flex justify-center">
                <div>
                  <CampoDetalleOrden
                    title="Direccion"
                    valor={dataUser.direction}
                  />
                  <CampoDetalleOrden title="Ciudad" valor={dataUser.city} />
                  <CampoDetalleOrden
                    title="Telefono(2)"
                    valor={dataUser.phone2}
                  />
                </div>
              </div>
            </div>
          </div>
          {/** datos de la protesis */}
          <div className="w-1/2">
            <h4 className="text-xl text-center">Datos de la protesis</h4>
            {dataUser && dataProthesis && (
              <div className="grid grid-cols-2 mt-6">
                <div className="flex justify-center">
                  <div>
                    <CampoDetalleOrden
                      title="Extremidad amputada"
                      valor={dataProthesis.prothesisData.ext_emputee}
                      widthTitle="w-32"
                    />
                    <CampoDetalleOrden
                      title="Medida A-B"
                      valor={dataProthesis.prothesisData.medidaAB / 10 + " cm"}
                      widthTitle="w-32"
                    />
                    <CampoDetalleOrden
                      title="Medida B-C"
                      valor={dataProthesis.prothesisData.medidaBC / 10 + " cm"}
                      widthTitle="w-32"
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <div>
                    <CampoDetalleOrden
                      title="Tamaño de la mascota"
                      valor={dataProthesis.prothesisData.pet_size + " cm"}
                      widthTitle="w-44"
                    />
                    <CampoDetalleOrden
                      title="Perimetro del muñon (inferior)"
                      valor={
                        dataProthesis.prothesisData.stump_perimeter_inf + " cm"
                      }
                      widthTitle="w-44"
                    />
                    <CampoDetalleOrden
                      title="Perimetro del muñon (superior)"
                      valor={
                        dataProthesis.prothesisData.stump_perimeter_sup + " cm"
                      }
                      widthTitle="w-44"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <div className="w-40 h-40 object-cover rounded-lg border border-gray-400 mr-2">
            <img
              className="h-32 w-full flex  rounded-t-lg object-cover justify-center items-center"
              src={image1}
            />
            <div className="h-7 bg-blue-light rounded-b-lg px-4">
              <span className="font-bold text-xs">Frente</span>
            </div>
          </div>
          <div className="w-40 h-40 object-cover rounded-lg border border-gray-400 mr-2">
            <img
              className="h-32 w-full flex  rounded-t-lg object-cover justify-center items-center"
              src={image2}
            />
            <div className="h-7 bg-blue-light rounded-b-lg px-4">
              <span className="font-bold text-xs">Perfil derecho</span>
            </div>
          </div>
          <div className="w-40 h-40 object-cover rounded-lg border border-gray-400 mr-2">
            <img
              className="h-32 w-full flex  rounded-t-lg object-cover justify-center items-center"
              src={image3}
            />
            <div className="h-7 bg-blue-light rounded-b-lg px-4">
              <span className="font-bold text-xs">Perfil izquierdo</span>
            </div>
          </div>
          <div className="w-40 h-40 object-cover rounded-lg border border-gray-400 mr-2">
            <img
              className="h-32 w-full flex  rounded-t-lg object-cover justify-center items-center"
              src={image4}
            />
            <div className="h-7 bg-blue-light rounded-b-lg px-4">
              <span className="font-bold text-xs">Perfil trasero</span>
            </div>
          </div>
        </div>
        {/** detalle del pago */}
        <div className="h-20 rounded-b-lg bg-blu-light -mx-6 border-t border-gray-400 mt-10 flex items-center px-6 justify-between">
          <img src="/img/logo.png" alt="logo orthomaker" className="w-16 " />
          <span className="text-lg">
            <span className="mr-2 text-blue-transparent">Total a pagar:</span>
            <span className="text-purple-dark">{`$${total}`}</span>
          </span>
        </div>
      </div>
    </div>
  );
}

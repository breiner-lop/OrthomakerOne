import React from "react";
import Link from "next/link";
import ButtonCancelBlueLight from "../../components/Buttons/ButtonCancelBlueLight";
import { useCasosCtx } from "../../contexts/casosExito/navInicio.context";
import Head from "next/head";
import CampoDetalleOrden from "../../components/CampoDetalleOrden";
import axios from "axios";
import ViewNoAuth from "../../components/ViewNoAuth";

export default function VerificarOrden() {
  // states
  const [dataUser,setDataUser]=React.useState({})
  const [dataProthesis,setDataProthesis]=React.useState(undefined)
  const [wompiLoading,setLoadingWompi]=React.useState(false)
  const [petImagenes,setPetImagenes]=React.useState("")
  const [total,setTotal]=React.useState(0)
  const [checkout,setCheckout]=React.useState(null)
  const [token, setToken] = React.useState("");

  //data context
  const { setNavForm } = useCasosCtx();
  // get order
  const getOrder=(id)=>{
    axios.get(
      `${process.env.SERVER}/order/${id}`,
      {
        headers: {
          'auth-token': token //the token is a variable which holds the token
        },
      }
    ).then(function (response) { // en caso de ser exitosa
      setTotal(response.data[0].valor_total)
    })
    .catch(function (error) { // en caso de ser incorrectos los datos
      console.log(error)
    });
  }
  // GET PET IMAGES
  const getPetImages=()=>{
    const petId=localStorage.getItem("pets_id")
    axios.get(
      `${process.env.SERVER}/petsImg/${petId}`,
      {
        headers: {
          'auth-token': token //the token is a variable which holds the token
        },
      }
    ).then(function (response) { // en caso de ser exitosa
      setPetImagenes(JSON.parse(response.data[0].path))
    })
    
  }
   React.useEffect(()=>{
    const token = localStorage.getItem("token");
    setToken(token);
    setDataUser(JSON.parse(localStorage.getItem("user")))
    setDataProthesis(JSON.parse(localStorage.getItem("dataProthesis")))
    //get pet imgs
    getPetImages()
    //wompi
    const scriptwompi = document.createElement("script");
      scriptwompi.src = "https://checkout.wompi.co/widget.js"
      scriptwompi.onload= function (){
        var idTransaccion=(localStorage.getItem("idTransaccion"))
        getOrder(idTransaccion)
        if(total){
          let checkout = new WidgetCheckout({
            currency: 'COP',
            amountInCents:total,
            reference:idTransaccion,
            publicKey: 'pub_test_7pVstX8t7nY6Xup5LOSFL1C6XVhWNrg4',
            redirectUrl: 'https://orthomakerone.com/thankyou', // Opcional
          //   taxInCents: { // Opcional
          //     vat: 1900,
          //     consumption: 800
          //   },
            customerData: { // Opcional
              email:dataUser.mail,
              fullName: `${dataUser.name} ${dataUser.lastname}`,
              phoneNumber:dataUser.phone,
              phoneNumberPrefix: '+57',
            }
          })
          setCheckout(checkout)
          setLoadingWompi(true)
        }
      }
      document.head.appendChild(scriptwompi);

   },[total])
   //coin Converter
   const coinConverter = function(number){
    return new Intl.NumberFormat('es-CO', {style: 'currency',currency: 'COP', minimumFractionDigits: 2}).format(number);
  };
  return (
    <>
    {!token?<ViewNoAuth/>:
        <div className="md:px-24 px-0 mx-auto" style={{maxWidth:"1800px"}}>
        <Head>
      </Head>
      <div className="flex justify-between text-purple-dark h-20 items-center">
            <div className="flex items-center">
            <Link href="/empezar">
                <button
                className=" h-10 w-10 flex justify-center items-center mr-4 border border-solid border-red-600 rounded-full filter shadow-md transition duration-200 hover:shadow-none"
                onClick={() => setNavForm(9)}
                >
                <img src="/img/rowback.png" alt="rowback" />
                </button>
            </Link>
              <div className="md:block hidden">
              <Link href="/" >
                <span className="text-2xl cursor-pointer">
                Ortho<strong>Maker</strong>
                </span>
            </Link>
            <span className="mx-4 text-2xl">/</span>
            <span className="text-2xl cursor-pointer text-blue-transparent">
                Datos basicos
            </span>
              </div>
            </div>
            <div className="flex">
              {wompiLoading&&<button className="bg-purple-dark text-white rounded-lg md:w-48 w-36 h-11 font-semibold shadow-md hover:shadow hover:bg-opacity-95 transition duration-200 flex justify-center items-center" onClick={()=>{checkout.open(function(r){})}}>Realizar pago</button>}
              <ButtonCancelBlueLight />
            </div>
      </div>
      <div className="border border-solid border-gray-300 mt-6 shadow-lg bg-white bg-opacity-75 rounded-lg md:px-6 px-1">
          <div className="text-center border-b border-gray-300 py-6"><span className="text-2xl">Detalles de la orden</span></div>
           <div className="pt-6 md:flex block">
             {/** datos personales */}
           <div className="md:w-1/2 w-full">
           <h4 className="text-xl text-center justify-between">Datos personales</h4>
            <div className="grid grid-cols-2 md:mt-6 mt-2 mb-6 md:mb-0">
            <div className="flex justify-center">
             <div>
             <CampoDetalleOrden title="Nombres" valor={`${dataUser.name}  ${dataUser.lastname}`}/>
              <CampoDetalleOrden title="Correo" valor={dataUser.mail}/>
              <CampoDetalleOrden title="Telefono" valor={dataUser.phone}/>
             </div>
              </div>
              <div className="flex justify-center">
              <div>
              <CampoDetalleOrden title="Direccion" valor={dataUser.direction}/>
              <CampoDetalleOrden title="Ciudad" valor={dataUser.city}/>
              <CampoDetalleOrden title="Telefono(2)" valor={dataUser.phone2}/>
              </div>
              </div>
            </div>
           </div>
           {/** datos de la protesis */}
           <div className="md:w-1/2 w-full">
           <h4 className="text-xl text-center">Datos de la protesis</h4>
           {
              dataUser&&dataProthesis&&       
              <div className="grid grid-cols-2 md:mt-6 mt-2">
              <div className="flex justify-center">
               <div>
               <CampoDetalleOrden title="Extremidad amputada" valor={dataProthesis.prothesisData.ext_emputee} widthTitle="md:w-32 w-28"/>
                <CampoDetalleOrden title="Medida 1" valor={dataProthesis.prothesisData.medidaAB/10+" cm"} widthTitle="md:w-32 w-28"/>
                <CampoDetalleOrden title="Medida 2" valor={dataProthesis.prothesisData.medidaBC/10+" cm"} widthTitle="md:w-32 w-28"/>
                <CampoDetalleOrden title="Largo del muñon" valor={dataProthesis.prothesisData.stump_length/10+" cm"} widthTitle="md:w-32 w-28"/>
               </div>
                </div>
                <div className="flex justify-center">
                <div>
                <CampoDetalleOrden title="Tamaño de la mascota" valor={dataProthesis.prothesisData.pet_size+" cm"} widthTitle="md:w-44 w-36"/>
                <CampoDetalleOrden title="Perimetro del muñon (inferior)" valor={dataProthesis.prothesisData.stump_perimeter_inf+" cm"} widthTitle="md:w-44 w-36"/>
                <CampoDetalleOrden title="Perimetro del muñon (superior)" valor={dataProthesis.prothesisData.stump_perimeter_sup+" cm"} widthTitle="md:w-44 w-36"/>
                </div>
                </div>
              </div>
            }
           </div>
           </div>
          {petImagenes&& <div className="grid md:grid-cols-4 grid-cols-2 justify-center mt-10 mx-auto md:w-[660px] w-full gap-2">
             <div className=" object-cover rounded-lg border border-gray-400">
                  <img className="h-32 w-full flex  rounded-t-lg object-cover justify-center items-center"src={"http://"+petImagenes.image1}/>
                  <div className="h-7 bg-blue-light rounded-b-lg px-4">
                    <span className="font-bold text-xs">Frente</span>
                  </div>
              </div>
              <div className=" object-cover rounded-lg border border-gray-400">
                  <img className="h-32 w-full flex  rounded-t-lg object-cover justify-center items-center"src={"http://"+petImagenes.image2}/>
                  <div className="h-7 bg-blue-light rounded-b-lg px-4">
                    <span className="font-bold text-xs">Perfil derecho</span>
                  </div>
              </div>
             <div className=" object-cover rounded-lg border border-gray-400">
                  <img className="h-32 w-full flex  rounded-t-lg object-cover justify-center items-center"src={"http://"+petImagenes.image3}/>
                  <div className="h-7 bg-blue-light rounded-b-lg px-4">
                    <span className="font-bold text-xs">Perfil izquierdo</span>
                  </div>
              </div>
             <div className=" object-cover rounded-lg border border-gray-400">
                  <img className="h-32 w-full flex  rounded-t-lg object-cover justify-center items-center"src={"http://"+petImagenes.image4}/>
                  <div className="h-7 bg-blue-light rounded-b-lg px-4">
                    <span className="font-bold text-xs">Perfil trasero</span>
                  </div>
              </div>
           </div>}
            {/** detalle del pago */}
        <div className="h-20 rounded-b-lg bg-blu-light md:-mx-6 -mx-1 border-t border-gray-400 mt-10 flex items-center px-6 justify-between">
          <img src="/img/logo.png" alt="logo orthomaker" className="w-16 " />
          <span>Este producto sera entregado de 5 a 7 días después de realizar el pago del dispositivo</span>
            <span className="text-lg"><span className="mr-2 text-blue-transparent">Total a pagar:</span><span className="text-purple-dark">{`${coinConverter(total/100)}`}</span></span>
        </div>
        </div>
    </div>
    }
    </>
  );
}

import React from "react";
import ButtonBorderBlue from "../../../components/Buttons/ButtonBorderBlue";
import ButtonRed from "../../../components/Buttons/ButtonRed";
import CampoDetalleOrden from "../../../components/CampoDetalleOrden";
import CardPetPhotos from "../../../components/Cards/CardPetPhotos";
import Download3D from "../../../components/Cards/Download3D";
import Layout from "../../../components/LayoutAdmin";
import ViewNoAuth from "../../../components/ViewNoAuth"
import { useRouter } from "next/router";
export default function Orden() {
  const router = useRouter()
  const { id } = router.query
  // states
  const [loading, setLoading] = React.useState(true);
  const [token,setToken]=React.useState("")
  React.useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token)
    setLoading(false)
  }, [token]);
  return (
   <>
   {loading?null:
     token? <Layout>
     <div className="bg-blu-light h-screen w-full p-8 overflow-y-auto justify-center flex">
       <div className="w-full" style={{maxWidth:"1500px"}}>
         {/**  logo */}
       <div className="text-2xl text-purple-dark mb-4">
         Ortho<strong>Maker</strong>
       </div>
       {/**  header */}
       <div className="flex justify-between items-center">
         <div className="flex">
           <div className="text-green-500 text-xs h-7 w-20 bg-green-100 rounded-lg flex justify-center items-center mr-2">
             <span>Facturada</span>
           </div>
           <div className="text-blue-500 text-xs h-7 w-20 bg-blue-100 rounded-lg flex justify-center items-center">
             <span>Enviada</span>
           </div>
           <div className="text-gray-400 flex border-l-2 boder border-gray-400 text-xs items-center ml-6">
             <span>
               <img
                 src="/img/Calendar.png"
                 alt="calendarioorden"
                 width="18px"
                 height="20px"
                 className="mx-4"
               />
             </span>
             <span>25.10.2021 a las 06:00 PM</span>
           </div>
         </div>
         <div>
           <ButtonBorderBlue text="Tracking" />
           <ButtonRed text="Cancelar orden" />
         </div>
       </div>
       <div className="flex mt-10" style={{maxWidth:"1000px"}}>
         <div className="w-full">
           {/**  Header */}
           <div className="bg-white pt-6 pb-6 rounded-t-lg filter drop-shadow flex justify-between px-6">
              <span>Detalle de la orden ({`#${id}`}) </span>
              <span>Valor: $950.000</span>
           </div>
           {/**  productos */}
           <div className="bg-white pt-6 pb-10 filter drop-shadow flex items-center">
             <div className="w-44">
             <img src="/img/pdto.png" alt="pdto" width="125px" className="mx-auto" />
             </div>
            <div className="text-xs">
               <h4 className="mb-2">Breiner Lopez</h4>
               <div className="flex flex-col">
               <CampoDetalleOrden title="Telefono" valor="99999"/>
               <CampoDetalleOrden title="Email" valor="breiner@mail.com"/>
               <CampoDetalleOrden title="Ciudad" valor="Maicao"/>
               </div>
             </div>
               <div className="flex flex-col text-xs ml-14">
               <CampoDetalleOrden title="Telefono (Opcional)" valor="56645" widthTitle='w-28' />
               <CampoDetalleOrden title="Ditrecci&oacute;n" valor="cr3 djhhsi Maicao" widthTitle='w-28' />
               </div>
               <div className="flex flex-col ml-14 text-xs">
               <CampoDetalleOrden title="Zip" valor="2020" widthTitle='w-10' />
               </div>
     
           </div>
           {/**  Informacion de la mascota */}
           <div className="bg-white px-44  text-xs filter drop-shadow py-6">
            <h6 className="text-base">Informaci&oacute;n de la mascota</h6>
            <div className="flex mt-6">
              <div className="flex flex-col text-xs mr-20">
              <CampoDetalleOrden title="Nombre mascota" valor="Scot" widthTitle="w-28"/>
              <CampoDetalleOrden title="Tamaño" valor="30 cm" widthTitle="w-28"/>
              </div>
              <div className="flex flex-col text-xs mr-20">
                <CampoDetalleOrden title="Edad" valor="12 meses" widthTitle="w-12"/>
                <CampoDetalleOrden title="Peso" valor="20 Kg" widthTitle="w-12"/>
              </div>
              <div className="flex flex-col text-xs mr-20">
                <CampoDetalleOrden title="Raza" valor="Chanda" widthTitle="w-12"/>
              </div>
            </div>
            <div>
            <h6 className="my-6 text-base">Fotos de perfiles </h6>
            <div className="flex">
              <CardPetPhotos img="/img/dog_01.png" title="Frente"/>
              <CardPetPhotos img="/img/dog_01.png" title="Perfil derecho"/>
              <CardPetPhotos img="/img/dog_01.png" title="Perfil izquierdo"/>
              <CardPetPhotos img="/img/dog_01.png" title="Perfil trasero"/>
            </div>
            </div>
           </div>
           {/**  Información para la prótesis */}
           <div className="bg-white px-44 py-6 filter drop-shadow ">
             <h4>Información para la prótesis</h4>
             <div className="text-xs mt-4">
              <div className="flex justify-between">
                <CampoDetalleOrden title="Altura de amputación" valor="22 cm" widthTitle='w-36' />
               <CampoDetalleOrden title="Extremidad emputada" valor="34 cm" widthTitle='w-36' />               
              </div>
             </div>
             <h4 className="mt-4">Medidas del muñon</h4>
             <div className="ml-4">
                <CampoDetalleOrden title="Inferior" valor="34 cm"/>
                <CampoDetalleOrden title="Superior" valor="45 cm"/>
                <CampoDetalleOrden title="Largo" valor="20 cm"/>   
             </div>
            <div className="flex justify-between my-6">
                <CampoDetalleOrden title="ENCAJE PROT&Eacute;SICO" valor="10.3 cm" widthTitle="w-32"/> 
                <CampoDetalleOrden title="PILAR PROT&Eacute;SICO" valor="15.3 cm" widthTitle="w-32"/>
            </div>
           <div className="flex items-center">
            <span className="text-blue-transparent">COLOR</span> <div className="ml-4 w-6 h-6 bg-red-700 rounded-full"></div>
           </div>
           <div>
             <h4 className="my-4">Descargar modelos 3D</h4>
             <Download3D img="/img/3d1.png"/>
             <Download3D img="/img/3d2.png"/>
             <Download3D img="/img/3d3.png"/>
           </div>
           </div>
           {/**  Información veterinario */}
           <div className="bg-white px-44 py-6 filter drop-shadow rounded-b-lg mb-10">
             <h4 className="my-2 text-base">Información del veterinario</h4>
             <div className="flex justify-between">
               <div>
               <CampoDetalleOrden title="Nombre veterinario" valor="Veteriario Name" widthTitle="w-32"/> 
                <CampoDetalleOrden title="Direccion consultorio" valor="calle 89 cr343" widthTitle="w-32"/>
               </div>
               <div>
               <CampoDetalleOrden title="Telefono" valor="329495945"/> 
                <CampoDetalleOrden title="Ciudad" valor="Barranquilla"/>
               </div>
             </div>
           </div>
         </div>
       </div>
       </div>
     </div>
   </Layout>:<ViewNoAuth/>
   }
   </>
  );
}

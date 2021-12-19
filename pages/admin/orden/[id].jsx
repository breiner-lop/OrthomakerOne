import React from "react";
import ButtonBorderBlue from "../../../components/Buttons/ButtonBorderBlue";
import ButtonRed from "../../../components/Buttons/ButtonRed";
import CampoDetalleOrden from "../../../components/CampoDetalleOrden";
import CardPetPhotos from "../../../components/Cards/CardPetPhotos";
import Download3D from "../../../components/Cards/Download3D";
import Layout from "../../../components/LayoutAdmin";
import ViewNoAuth from "../../../components/ViewNoAuth"
import { useRouter } from "next/router";
import axios from 'axios'
import Loading from "../../../components/Loading";
export default function Orden() {
  const router = useRouter()
  const { id } = router.query
  // states
  const [loading,setLoading] = React.useState(true);
  const [userData,setUserData]=React.useState("")
  const [dataOrder,setDataOrder]=React.useState({})
  const [dataPet,setDataPet]=React.useState({})
  const [dataProthesis,setDataProthesis]=React.useState("")
  const [token,setToken]=React.useState("")
  React.useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token)
    setLoading({page:false})
    /// get datas from BDD
    // get prothesisData from BDD                     
    axios.get(`${process.env.SERVER}/order/${id}`,{
      headers:{
         "auth-token": token,
       }
        })
         .then(function (response) { // en caso de ser exitosa la consulta de prothesis
          setDataOrder(response.data[0])
          setLoading(false)
          console.log(response.data[0])
          getProthesis(response.data[0].prothesis_id);
          getUser(response.data[0].users_id)
        })
        .catch(function (error) { // en caso de ser incorrectos los datos de consulta de prothesis
       });

  },[id]);
  ////GET USER
  const getUser=(id)=>{
    // get userdata from BDD                     
    axios.get(`${process.env.SERVER}/user/${id}`,{
      headers:{
        "auth-token": token,
      }
  })
 .then(function (response) { // en caso de ser exitosa la culta de usuario
      setUserData(response.data)
      console.log(response.data)
  })
  .catch(function (error) { // en caso de ser incorrectos los datos de conuslta der usuario
   });
  
  }
    ////GET Prothesis
    const getProthesis=(id)=>{
      // get userdata from BDD                     
      axios.get(`${process.env.SERVER}/prothesis/${id}`,{
        headers:{
          "auth-token": token,
        }
    })
   .then(function (response) { // en caso de ser exitosa la culta de usuario
        setDataProthesis(response.data[0])
        console.log(response.data[0])
        getPets(response.data[0].pets_id)
    })
    .catch(function (error) { // en caso de ser incorrectos los datos de conuslta der usuario
     });
      ////GET Prothesis
    const getPets=(id)=>{
      // get userdata from BDD                     
      axios.get(`${process.env.SERVER}/pet/${id}`,{
        headers:{
          "auth-token": token,
        }
    })
   .then(function (response) { // en caso de ser exitosa la culta de usuario
        setDataPet(response.data[0])
        console.log(response.data[0])
    })
    .catch(function (error) { // en caso de ser incorrectos los datos de conuslta der usuario
     });
   }
    
    }
  return (
   <>
   {loading?<div className="h-screen"><Loading/></div>:
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
            {dataOrder&& <span>{dataOrder.status}</span>}
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
              {
                userData?
                <>
              <div className="w-44">
              <img src="/img/pdto.png" alt="pdto" width="125px" className="mx-auto" />
              </div>
             <div className="text-xs">
                <h4 className="mb-2">{`${userData.name} ${userData.lastname}`}</h4>
                <div className="flex flex-col">
                <CampoDetalleOrden title="Telefono" valor={userData.phone}/>
                <CampoDetalleOrden title="Email" valor={userData.mail}/>
                <CampoDetalleOrden title="Ciudad" valor={userData.city}/>
                </div>
              </div>
                <div className="flex flex-col text-xs ml-14">
                <CampoDetalleOrden title="Telefono (Opcional)" valor={userData.phone2} widthTitle='w-28' />
                <CampoDetalleOrden title="Ditrecci&oacute;n" valor={userData.direction} widthTitle='w-28' />
                </div>
                <div className="flex flex-col ml-14 text-xs">
                <CampoDetalleOrden title="Zip" valor={userData.zip} widthTitle='w-10' />
                </div>
                </>:<Loading/>
              }

           </div>
           {/**  Informacion de la mascota */}
           <div className="bg-white px-44  text-xs filter drop-shadow py-6">
           {
             dataProthesis?
            <>
            <h6 className="text-base">Informaci&oacute;n de la mascota</h6>
             <div className="flex mt-6">
             <div className="flex flex-col text-xs mr-20">
             <CampoDetalleOrden title="Nombre mascota" valor="Scot" widthTitle="w-28"/>
             <CampoDetalleOrden title="Tamaño" valor={dataProthesis.pet_size} widthTitle="w-28"/>
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
            </>:<Loading/>
           }
           </div>
           {/**  Información para la prótesis */}
           <div className="bg-white px-44 py-6 filter drop-shadow ">
             {
               dataProthesis?
               <>
              <h4>Información para la prótesis</h4>
             <div className="text-xs mt-4">
              <div className="flex justify-between">
                <div>
                <CampoDetalleOrden title="Altura de amputación A->B" valor={dataProthesis.amputation_height_AB+" cm"} widthTitle='w-40' />
                <CampoDetalleOrden title="Altura de amputación B->C" valor={dataProthesis.amputation_height_BC+" cm"} widthTitle='w-40' />
                </div>
               <CampoDetalleOrden title="Extremidad emputada" valor={dataProthesis.ext_emputee} widthTitle='w-36' />               
              </div>
             </div>
             <h4 className="mt-4">Medidas del muñon</h4>
             <div className="ml-4">
                <CampoDetalleOrden title="Inferior" valor={dataProthesis.stump_perimeter_inf+" cm"}/>
                <CampoDetalleOrden title="Superior" valor={dataProthesis.stump_perimeter_sup+" cm"}/>
                <CampoDetalleOrden title="Largo" valor={dataProthesis.stump_length+" cm"}/>   
             </div>
            <div className="flex justify-between my-6">
                <CampoDetalleOrden title="ENCAJE PROT&Eacute;SICO" valor={dataProthesis.lace+" cm"} widthTitle="w-32"/> 
                <CampoDetalleOrden title="PILAR PROT&Eacute;SICO" valor={dataProthesis.pillar+" cm"} widthTitle="w-32"/>
            </div>
           <div className="flex items-center">
            <span className="text-blue-transparent">COLOR</span> <span className="ml-6"> {dataProthesis.color} </span>
             {/**<div className="ml-4 w-6 h-6 bg-red-700 rounded-full"></div> */}
           </div>
           <div>
             <h4 className="my-4">Descargar modelos 3D</h4>
             <Download3D onClick={()=>window.open(dataProthesis.case_path)} img="/img/3d1.png"/>
             <Download3D  onClick={()=>window.open(dataProthesis.pillar_path)} img="/img/3d2.png"/>
             <Download3D  onClick={()=>window.open(dataProthesis.lace_path)} img="/img/3d3.png"/>
           </div>
               </>:<Loading/>
             }
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

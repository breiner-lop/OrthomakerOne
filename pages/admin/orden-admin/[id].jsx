import React,{useState} from "react";
import ButtonBorderBlue from "../../../components/Buttons/ButtonBorderBlue";
import CampoDetalleOrden from "../../../components/CampoDetalleOrden";
import CardPetPhotos from "../../../components/Cards/CardPetPhotos";
import Download3D from "../../../components/Cards/Download3D";
import Layout from "../../../components/LayoutAdmin";
import ViewNoAuth from "../../../components/ViewNoAuth"
import { useRouter } from "next/router";
import axios from 'axios'
import Loading from "../../../components/Loading";
import { useCasosCtx } from "../../../contexts/casosExito/navInicio.context";
export default function Orden() {
  const {setPanelMobile,panelMobile}=useCasosCtx()
  const router = useRouter()
  const { id } = router.query
  // states
  const [loading,setLoading] = useState(true);
  const [userData,setUserData]=useState("")
  const [dataOrder,setDataOrder]=useState("")
  const [dataPet,setDataPet]=useState("")
  const [dataProthesis,setDataProthesis]=useState("")
  const [tokenn,setToken]=useState("")
  const [petImgs,setImgs]=useState("")
  const [vetData,setVet]=useState("")
  // use Effect
  React.useEffect(() => {
     let token = localStorage.getItem("token");
    setToken(token)
    setLoading(false)
    /// get datas from BDD
  if(id){
    axios.post(`${process.env.SERVER}/fullBorrador`,{
      borradorId:id
    },
    {headers:{
      "auth-token":localStorage.getItem("token"),
      "Content-type":"application/json"
    }}
    ).then((r)=>{
      setDataOrder(r.data.orderData);
      setUserData(r.data.userData)
      setDataProthesis(r.data.prothesisData)
      setDataPet(r.data.petData)
      setImgs(JSON.parse(r.data.petImages.path))
      setVet(r.data.vetData)
    }).catch((err)=>{
      console.log(err)
    })
  }
       return () => {
        setDataOrder("");
        setUserData("")
        setDataProthesis("")
        setDataPet("")
      };
      
  },[id]);
   //convertidor a moneda COP
const coinConverter = function(number){
  return new Intl.NumberFormat('es-CO', {style: 'currency',currency: 'COP', minimumFractionDigits: 2}).format(number);
};
  return (
   <>
   {loading?<div className="h-screen"><Loading/></div>:
     tokenn? <Layout>
     <div className="bg-blu-light h-screen w-full md:p-8 p-2 overflow-y-auto justify-center flex">
       <div className="w-full" style={{maxWidth:"1500px"}}>
         {/**  logo */}
       <div className="text-2xl text-purple-dark mb-4 flex justify-between">
       {!panelMobile&& <button onClick={()=>setPanelMobile(!panelMobile)} className="md:hidden block ml-3"><img src="/img/menu.png" alt="menu imagen" /></button>}
        <span> Ortho<strong>Maker</strong></span>
       </div>
       {/**  header */}
       <div className="md:flex block justify-between items-center" style={{maxWidth:"1000px"}}>
         <div className="flex">
           <div className="text-gray-400 flex border-l-2 boder border-0 border-solid border-gray-400 text-xs items-center ml-6">
             <span>
               <img
                 src="/img/Calendar.png"
                 alt="calendarioorden"
                 width="18px"
                 height="20px"
                 className="mx-4"
               />
             </span>
            {dataOrder&& <span>{dataOrder.date}</span>}
           </div>
         </div>
       </div>
       <div className="flex mt-10 text-xs" style={{maxWidth:"1000px"}}>
         <div className="w-full">
           {/**  Header */}
           <div className="bg-white pt-6 pb-6 rounded-t-lg filter md:text-lg text-xs drop-shadow flex justify-between md:px-6 px-1">
              <span>Detalle de la orden ({`#${id}`}) </span>
              {dataOrder?<><span className="mr-2"> {`Valor: ${coinConverter(dataOrder.valor_total/100)}`} </span></>:<div className="w-1/2"><Loading/></div> }
           </div>
           {/**  productos */}
           <div className="bg-white pt-6 pb-10 filter drop-shadow flex md:flex-row flex-col items-center">
              {
                userData?
                <>
              <div className="w-44">
              <img src="/img/pdto.png" alt="pdto" width="125px" className="mx-auto" />
              </div>
             <div className="text-xs">
                <h4 className="mb-2">{`${userData.name} ${userData.lastname}`}</h4>
                <div className="flex flex-col ">
                <CampoDetalleOrden title="Telefono" valor={userData.phone}/>
                <CampoDetalleOrden title="Email" valor={userData.mail}/>
                <CampoDetalleOrden title="Ciudad" valor={userData.city}/>
                </div>
              </div>
                <div className="flex flex-col items-start text-xs md:ml-14 ml-0">
                <CampoDetalleOrden title="Telefono (Opcional)" valor={userData.phone2} widthTitle='w-28'/>
                <CampoDetalleOrden title="Ditrecci&oacute;n" valor={userData.direction} widthTitle='w-28'/>
                </div>
                <div className="flex flex-col items-start md:ml-14 ml-0 text-xs">
                <CampoDetalleOrden title="Zip" valor={userData.zip} widthTitle='w-10'/>
                </div>
                </>:<Loading/>
              }

           </div>
           {/**  Informacion de la mascota */}
           <div className="bg-white xl:px-44 md:px-10 px-6  text-xs filter drop-shadow py-6">
           {
             dataProthesis?
            <>
            <h6 className="text-base">Informaci&oacute;n de la mascota</h6>
             <div className="md:flex block mt-6">
             <div className="flex flex-col text-xs mr-20">
             <CampoDetalleOrden title="Nombre mascota" valor={dataPet.name} widthTitle="w-28"/>
             <CampoDetalleOrden title="Tamaño" valor={`${dataProthesis.pet_size} cm`} widthTitle="w-28"/>
             </div>
             <div className="flex flex-col text-xs mr-20">
               <CampoDetalleOrden title="Edad" valor={`${dataPet.age} meses`} widthTitle="w-12"/>
               <CampoDetalleOrden title="Peso" valor={`${dataPet.weight} KG`} widthTitle="w-12"/>
             </div>
             <div className="flex flex-col text-xs mr-20">
               <CampoDetalleOrden title="Raza" valor={dataPet.race} widthTitle="w-12"/>
             </div>
           </div>
           <div>
           <h6 className="my-6 text-base">Fotos de perfiles </h6>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
             <CardPetPhotos href={`https://${petImgs.image1}`} img={`https://${petImgs.image1}`} title="Frente"/>
             <CardPetPhotos href={`https://${petImgs.image2}`} img={`https://${petImgs.image2}`} title="Perfil derecho"/>
             <CardPetPhotos href={`https://${petImgs.image3}`} img={`https://${petImgs.image3}`} title="Perfil izquierdo"/>
             <CardPetPhotos href={`https://${petImgs.image4}`} img={`https://${petImgs.image4}`} title="Perfil trasero"/>
           </div>
           </div>
            </>:<Loading/>
           }
           </div>
           {/**  Información para la prótesis */}
           <div className="bg-white md:px-44 p-6 py-6 filter drop-shadow ">
             {
               dataProthesis?
               <>
              <h4>Información para la prótesis</h4>
             <div className="text-xs mt-4">
              <div className="md:flex block justify-between">
                <div>
                <CampoDetalleOrden title="Medida de Encaje" valor={((parseInt(dataProthesis.stump_length))/10)+" cm"} widthTitle='w-40' />
                <CampoDetalleOrden title="Medida del Pilar" valor={((parseInt(dataProthesis.amputation_height_BC))/10)+" cm"} widthTitle='w-40' />
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
           <div className="mt-4">
             <h4>Color de la protesis</h4>
            <div className="flex justify-between mt-1">
            <CampoDetalleOrden title="Color de la carcaza" valor={dataProthesis.color} widthTitle='w-28'/> 
            <CampoDetalleOrden title="Color de la base" valor={dataProthesis.color2}widthTitle='w-24'/> 
            </div>
             {/**<div className="ml-4 w-6 h-6 bg-red-700 rounded-full"></div> */}
           </div>
            <div>
             <h4 className="my-4">Descargar modelos 3D</h4>
             <div className="flex">
             <Download3D href={`https://${dataProthesis.case_path}`} name="Case.stl" img="/img/3d1.png"/>
             <Download3D href={`https://${dataProthesis.pillar_path}`} name="Pillar.stl" img="/img/3d2.png"/>
             <Download3D href={`https://${dataProthesis.lace_path}`} name="Lace.stl" img="/img/3d3.png"/>
             </div>
           </div>
               </>:<Loading/>
             }
           </div>
           {/**  Información veterinario */}
           <div className="bg-white md:px-44 px-6 py-6 filter drop-shadow rounded-b-lg mb-10">
             <h4 className="my-2 text-base">Información del veterinario</h4>
            {vetData? <div className="flex justify-between">
               <div>
               <CampoDetalleOrden title="Nombre veterinario" valor={vetData.name} widthTitle="w-32"/> 
                <CampoDetalleOrden title="Direccion consultorio" valor={vetData.direction} widthTitle="w-32"/>
               </div>
               <div>
               <CampoDetalleOrden title="Telefono" valor={vetData.phone}/> 
                <CampoDetalleOrden title="Ciudad" valor={vetData.city} />
               </div>
             </div>:<h4 className="text-center">Sin veterinario de confianza</h4>}
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

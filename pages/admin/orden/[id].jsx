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
  const {rolUser}=useCasosCtx()
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
  const [checkout,setCheckout]=React.useState(null)
  const [wompiLoading,setLoadingWompi]=React.useState(false)
  React.useEffect(()=>{
    setLoadingWompi(true)
    //wompi
    const scriptwompi = document.createElement("script");
      scriptwompi.src = "https://checkout.wompi.co/widget.js"
      scriptwompi.onload= function (){
        //var idTransaccion=(localStorage.getItem("idTransaccion"))
        //getOrder(idTransaccion)

      if(dataOrder&&userData){
        let checkout = new WidgetCheckout({
          currency: 'COP',
          amountInCents:dataOrder.valor_total,
          reference:id,
          publicKey: 'pub_test_7pVstX8t7nY6Xup5LOSFL1C6XVhWNrg4',
          redirectUrl: 'https://orthomakerone.com/thankyou', // Opcional
        //   taxInCents: { // Opcional
        //     vat: 1900,
        //     consumption: 800
        //   },
          customerData: { // Opcional
            email:userData.mail,
            fullName: `${userData.name} ${ userData.lastname}`,
            phoneNumber:userData.phone,
            phoneNumberPrefix: '+57',
          }
        })
      }
      setCheckout(checkout)  
      }
      document.head.appendChild(scriptwompi);
  },[wompiLoading,dataOrder,userData])

  // use Effect
  React.useEffect(() => {
     let token = localStorage.getItem("token");
    setToken(token)
    setLoading(false)
    /// get datas from BDD
    /******  GET ORDER DATA from BDD *******/                    
    axios.get(`${process.env.SERVER}/order/${id}`,{
      headers:{
         "auth-token": token,
       }
        })
         .then(function (response) { // en caso de ser exitosa la consulta de prothesis
          setDataOrder(response.data[0])
          console.log(response.data[0],id)
          getProthesis(response.data[0].prothesis_id);
          getUser(response.data[0].users_id)
        })
        .catch(function (error) { // en caso de ser incorrectos los datos de consulta de prothesis
       });
       return () => {
        setDataOrder("");
        setUserData("")
        setDataProthesis("")
        setDataPet("")
      };
      
  },[id]);

  /*********GET USER******/
  const getUser=(id)=>{
    // get userdata from BDD                     
    axios.get(`${process.env.SERVER}/user/${id}`,{
      headers:{
        "auth-token":localStorage.getItem("token"),
      }
    })
    .then(function (response) { // en caso de ser exitosa la consulta de usuario
      setUserData(response.data)
      console.log(response.data)
    })
    .catch(function (error) { // en caso de ser incorrectos los datos de conuslta der usuario
    });
  
    }
    /*******GET Prothesis**********/
    const getProthesis=(id)=>{
      // get userdata from BDD                     
      axios.get(`${process.env.SERVER}/prothesis/${id}`,{
        headers:{
          "auth-token":localStorage.getItem("token"),
        }
      })
      .then(function (response) { // en caso de ser exitosa la consulta de prthothesis
        setDataProthesis(response.data[0])
        console.log(response.data[0])
       response.data[0].pets_id?getPets(response.data[0].pets_id):null
      })
      .catch(function (error) { // en caso de ser incorrectos los datos de conuslta der usuario
      });
      /************GET PETS************/
    const getPets=(id)=>{
      // get userdata from BDD                     
      axios.get(`${process.env.SERVER}/pets/${id}`,{
        headers:{
          "auth-token":localStorage.getItem("token"),
        }
    })
   .then(function (response) { // en caso de ser exitosa la consulta de mascota
        setDataPet(response.data)
        getPetImgs(response.data.id)
        console.log(response.data)
    })
    .catch(function (error) { // en caso de ser incorrectos los datos de conuslta de mascota
     });
    }
    }
    /************  GET PET IMGS **************/
    const getPetImgs=(id)=>{
      axios.get(`${process.env.SERVER}/petsimg/${id}`,{
        headers:{
          "auth-token":localStorage.getItem("token"),
        }
    })
   .then(function (response) { // en caso de ser exitosa la consulta de de imagenes de mascota
    setImgs(JSON.parse(response.data[0].path))
        console.log(JSON.parse(response.data[0].path))
    })
    .catch(function (error) { // en caso de ser incorrectos la consulta de imagenes de mascotas
      console.log(error)
     });
   }
   // Update prod_status
   const onChangeProdEstatus=(e)=>{
   setDataOrder({
     ...dataOrder,
     prod_status:e.target.value
   })
    axios.put(`${process.env.SERVER}/editOrdersProd/${id}`,{
      status:e.target.value
    },{
      headers:{
        "auth-token":localStorage.getItem("token"),
      }
      })
   }
   //convertidor a moneda COP
const coinConverter = function(number){
  return new Intl.NumberFormat('es-CO', {style: 'currency',currency: 'COP', minimumFractionDigits: 2}).format(number);
};
  return (
   <>
   {loading?<div className="h-screen"><Loading/></div>:
     tokenn? <Layout>
     <div className="bg-blu-light h-screen w-full p-8 overflow-y-auto justify-center flex">
       <div className="w-full" style={{maxWidth:"1500px"}}>
         {/**  logo */}
       <div className="text-2xl text-purple-dark mb-4">
         Ortho<strong>Maker</strong>
       </div>
       {/**  header */}
       <div className="flex justify-between items-center">
         <div className="flex">
          <div className={`text-green-500 text-xs h-7 bg-green-100 border border-solid border-green-400 min-w-[80px] rounded-lg flex justify-center items-center mr-2`}>
            {dataOrder&& <select disabled={rolUser==0?false:true} value={dataOrder.prod_status} onChange={(e)=>onChangeProdEstatus(e)} name="prod_status" id="prod_status" className="focus:outline-none border-none bg-green-100">
               <option value={0}>EN ESPERA</option>
               <option value={1}>EN PRODUCCIÓN</option>
               <option value={2}>ENVIADO</option>
             </select>}
           </div>
           <div className="text-blue-500 text-xs h-7 w-20 bg-blue-light rounded-lg border-solid border flex justify-center items-center">
             <span> {dataOrder&& <span>{dataOrder.status}</span>}</span>
           </div>
           <div className="text-gray-400 flex border-l-2 boder border-solid border-gray-400 text-xs items-center ml-6">
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
         <div>
           {userData&&!dataOrder.id_transaction&&<ButtonBorderBlue  onClick={()=>{checkout.open(function(r){})}} text="Pagar ahora" />}
           {/* <ButtonRed text="Cancelar orden" /> */}
         </div>
       </div>
       <div className="flex mt-10" style={{maxWidth:"1000px"}}>
         <div className="w-full">
           {/**  Header */}
           <div className="bg-white pt-6 pb-6 rounded-t-lg filter drop-shadow flex justify-between px-6">
              <span>Detalle de la orden ({`#${id}`}) </span>
             <div>
             {dataOrder?<><span className="mr-2"> {`Valor: ${coinConverter(dataOrder.valor_total/100)}`} </span>/
              <span className="ml-2"> {`Transacción: ${dataOrder.id_transaction?dataOrder.id_transaction:"NO PAGADO"}`} </span></>:<Loading/> }
             </div>
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
                <CampoDetalleOrden title="Telefono (Opcional)" valor={userData.phone2} widthTitle='w-28'/>
                <CampoDetalleOrden title="Ditrecci&oacute;n" valor={userData.direction} widthTitle='w-28'/>
                </div>
                <div className="flex flex-col ml-14 text-xs">
                <CampoDetalleOrden title="Zip" valor={userData.zip} widthTitle='w-10'/>
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
           <div className="flex">
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
           <div className="bg-white px-44 py-6 filter drop-shadow ">
             {
               dataProthesis?
               <>
              <h4>Información para la prótesis</h4>
             <div className="text-xs mt-4">
              <div className="flex justify-between">
                <div>
                <CampoDetalleOrden title="Altura de amputación A->B" valor={((parseInt(dataProthesis.amputation_height_AB)-19)/10)+" cm"} widthTitle='w-40' />
                <CampoDetalleOrden title="Altura de amputación B->C" valor={((parseInt(dataProthesis.amputation_height_BC)-80)/10)+" cm"} widthTitle='w-40' />
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
            {rolUser==0&& 
            <div>
             <h4 className="my-4">Descargar modelos 3D</h4>
             <div className="flex">
             <Download3D href={`https://${dataProthesis.case_path}`} name="Case.stl" img="/img/3d1.png"/>
             <Download3D href={`https://${dataProthesis.pillar_path}`} name="Pillar.stl" img="/img/3d2.png"/>
             <Download3D href={`https://${dataProthesis.lace_path}`} name="Lace.stl" img="/img/3d3.png"/>
             </div>
           </div>}
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

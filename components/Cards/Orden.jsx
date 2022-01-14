import React from "react";
import Link from "next/link"
import axios from 'axios'

export default function OrdenCard({id,status,total,userId,statusProduction}) {
  //  states
  const [userData,setUser]=React.useState({})
  const [loading,setLoading]=React.useState(true)
 React.useEffect(()=>{
    const token=localStorage.getItem("token");//get token
     //llamada a la api user
     axios.get(`${process.env.SERVER}/user/${userId}`,{
      headers:{
        "auth-token": token,
      }
    })
    .then(function (response) { // en caso de ser exitosa
      setUser({
        name:response.data.name,
        lastName:response.data.lastname
      })
      setLoading(false)
      //serOrders(response.data)
    })
    .catch(function (error) { // en caso de ser incorrectos los datos
    });

      return () => {
        setUser({}); // This worked for me
      };
  },[])
  return (
   <div>
   {
     <Link href={`/admin/orden/${id}`}>
     <div  className="bg-white rounded-lg text-center h-20 px-6 grid grid-cols-4 items-center my-2 cursor-pointer border border-transparent hover:border-gray-200 filter drop-shadow-lg">
       <div className="flex col-span-1 justify-center">
      <span> <img src="/img/Buy.png" width="20px" height="20px" /></span>
       <span className="ml-2">{id}</span>
     </div>
     <div className="flex col-span-1 justify-center">
     <div className="bg-blu-light text-blue-600 w-32 h-10 text-sm flex items-center justify-center rounded-lg text-center mr-2">
       <span>{status}</span>
     </div>
     <div className="bg-green-200 text-green-600 text-sm w-32 h-10 flex items-center justify-center rounded-lg text-center ">
       <span>{statusProduction==0?"EN ESPERA":statusProduction==1?"EN PRODUCCIÓN":statusProduction==2&&"ENVIADO"}</span>
     </div>
     </div>
     <div className="col-span-1">
     <span>${total/100}</span>
     </div>
     <div className="flex col-span-1 justify-center">
       <img
         src="/img/avatar.png"
         width="50px"
         height="50px"
         className="rounded-full"
       />
       <div className="flex items-center ml-2">
         <h6>{`${userData.name} ${userData.lastName}`}</h6>
       </div>
     </div>
     
     </div>
    </Link>
   }
   </div>
  );
}

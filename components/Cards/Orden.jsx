import React from "react";
import Link from "next/link"
import axios from 'axios'

export default function OrdenCard({id,status,total,userId}) {
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
     <div  className="bg-white rounded-lg h-20 px-6 flex items-center justify-between my-2 cursor-pointer border border-transparent hover:border-gray-200 filter drop-shadow-lg">
     
       
       <div className="flex">
       <img src="/img/Buy.png" width="20px" height="20px" />
       <span className="ml-2">{id}</span>
     </div>
     <div className="bg-blu-light text-blue-600 w-28 h-10 flex items-center justify-center rounded-lg text-center ">
       <span>{status}</span>
     </div>
     <span className="ml-10">{total}</span>
     <div className="flex">
       <img
         src="/img/avatar.png"
         width="50px"
         height="50px"
         className="rounded-full"
       />
       <div className="ml-4 flex items-center">
         <h6>{`${userData.name} ${userData.lastName}`}</h6>
       </div>
     </div>
     
     </div>
    </Link>
   }
   </div>
  );
}

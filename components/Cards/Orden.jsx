import React from "react";
import Link from "next/link"

export default function OrdenCard({id,status,total,statusProduction,fullName,count}) {
  // Coin converter
  const coinConverter = function(number){
    return new Intl.NumberFormat('es-CO', {style: 'currency',currency: 'COP', minimumFractionDigits: 2}).format(number);
  };
  return (
   <div>
   {
     <Link href={`/admin/orden/${id}`}>
     <div  className="bg-white rounded-lg text-center h-20 px-6 grid grid-cols-12 items-center my-2 cursor-pointer border border-transparent hover:border-gray-200 filter drop-shadow-lg">
       <span className="col-span-1"> {count} </span>
       <div className="flex col-span-3 justify-center">
      <span> <img src="/img/Buy.png" width="20px" height="20px" /></span>
       <span className="ml-2">{id}</span>
     </div>
     <div className="flex col-span-3 justify-center">
     <div className="bg-blu-light text-blue-600 w-32 h-10 md:text-sm text-xs flex items-center justify-center rounded-lg text-center mr-2">
       <span>{status}</span>
     </div>
     <div className="bg-green-200 text-green-600  md:text-sm text-xs w-32 h-10 flex items-center justify-center rounded-lg text-center ">
       <span>{statusProduction==0?"EN ESPERA":statusProduction==1?"EN PRODUCCIÓN":statusProduction==2&&"ENVIADO"}</span>
     </div>
     </div>
     <div className="col-span-2">
     <span>{coinConverter(total/100)}</span>
     </div>
     <div className="flex col-span-3 justify-center">
      <div className="w-72 flex">
      <img
         src="/img/avatar.png"
         width="50px"
         height="50px"
         className="md:block hidden rounded-full"
       />
       <div className="flex items-center ml-2">
         <h6>{fullName}</h6>
       </div>
      </div>
     </div>
     </div>
    </Link>
   }
   </div>
  );
}

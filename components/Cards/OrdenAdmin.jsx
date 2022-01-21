import React from "react";
import Link from "next/link"

export default function OrdenCardAdmin({id,total,date}) {
  // Coin converter
  const coinConverter = function(number){
    return new Intl.NumberFormat('es-CO', {style: 'currency',currency: 'COP', minimumFractionDigits: 2}).format(number);
  };
  return (
   <div>
   {
     <Link href={`/admin/orden-admin/${id}`}>
     <div  className="bg-white rounded-lg text-center h-20 px-6 grid grid-cols-3 items-center my-2 cursor-pointer border border-transparent hover:border-gray-200 filter drop-shadow-lg">
       <div className="flex col-span-1 justify-center">
      <span> <img src="/img/Buy.png" width="20px" height="20px" /></span>
       <span className="ml-2">{id}</span>
     </div>

     <div className="col-span-1">
     <span>{coinConverter(total/100)}</span>
     </div>
     <div className="flex col-span-1 justify-center">
      <div className="w-72 flex">
      <img
         src="/img/calendar.png"
       />
       <div className="flex items-center ml-2">
         <h6>{date}</h6>
       </div>
      </div>
     </div>
     </div>
    </Link>
   }
   </div>
  );
}

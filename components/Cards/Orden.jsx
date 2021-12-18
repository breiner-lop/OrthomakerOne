import React from "react";
import Link from "next/link"

export default function OrdenCard({id}) {
  // llamada al context para traer el id y para validar la vista
  return (
   <Link href={`/admin/orden/${id}`}>
    <div  className="bg-white rounded-lg h-20 px-6 flex items-center justify-between my-2 cursor-pointer border border-transparent hover:border-gray-200 filter drop-shadow-lg">
      <div className="flex">
        <img src="/img/Buy.png" width="20px" height="20px" />
        <span className="ml-2">#0947398</span>
      </div>
      <div className="bg-blu-light text-blue-600 w-20 h-7 rounded-lg text-center ">
        <span>Nueva</span>
      </div>
      <span className="ml-10">950.000</span>
      <div className="flex">
        <img
          src="/img/avatar.png"
          width="50px"
          height="50px"
          className="rounded-full"
        />
        <div className="ml-4 flex items-center">
          <h6>Breiner Lopez</h6>
        </div>
      </div>
    </div>
   </Link>
  );
}

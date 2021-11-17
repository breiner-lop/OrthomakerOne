import React from "react";
import Image from "next/image";

export default function Technology() {
    const cardDescription=[
       {
         id:"1",
        description:"Pilar Protésico ajustable"
       },
       {
        id:"2",
        description:"Mecanismo de articulación"
       },
       {
        id:"3",
        description:"Movimiento natural"
       },
       {
        id:"4",
        description:"Se adhiere al cuerpo de la mascota"
       },
       {
        id:"5",
        description:"Confort para mascotas"
       },
    ]
  return (
    <div>
      <div className="justify-end flex mb-10">
        <p className="text-2xl flex-col w-3/4 text-right font-light">
          Nuestro proceso de producción esta influenciado por diferentes
          tecnologías siempre enfocadas en la integración protesis/extremidad
        </p>
      </div>
      <div className=" grid grid-cols-3 gap-2">
    {
        cardDescription.map((cD)=>(
            <div key={cD.id} className="border border-gray-200 rounded-lg col-span-1 p-6 shadow h-44">
            <Image src="/img/configrosa.png" width="64px" height="64px" />
            <p> {cD.description} </p>
          </div>
        ))
    }
      </div>
    </div>
  );
}

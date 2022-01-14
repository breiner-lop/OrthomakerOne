import React from "react";

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
        <p className="text-2xl flex-col md:w-3/4 w-full md:text text-left-right font-light">
          Nuestro proceso de producción esta influenciado por diferentes
          tecnologías siempre enfocadas en la integración protesis/extremidad
        </p>
      </div>
      <div className="grid-cols-2 grid lg:grid-cols-3 gap-2">
    {
        cardDescription.map((cD)=>(
            <div key={cD.id} className="border border-gray-200 rounded-lg col-span-1 p-6 shadow h-44">
            <img src="/img/configrosa.png" width="64px" height="64px" />
            <p> {cD.description} </p>
          </div>
        ))
    }
      </div>
    </div>
  );
}

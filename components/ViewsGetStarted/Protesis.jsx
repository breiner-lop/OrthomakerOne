import React from "react";
import threejsLoader from "../../pages/threejs/apploader";

export default function Protesis() {
 
  const [datosProtesis, setDatos] = React.useState({
    color: "",
    pilar: 10,
    encaje:10,
  });
   /***MANEJADORM DE LOS COLORES */
  const handleInputColor = (color) => {
    setDatos({
      ...datosProtesis,
      color: color,
    });
  };
     /***MANEJADORM DE LOS inputs de valor */
     const handleInputChange = (e) => {
      setDatos({
          ...datosProtesis,
          [e.target.name] : e.target.value
      })
      console.log(datosProtesis)
  }
  React.useEffect(()=>{
    threejsLoader()
  })
  return (
    <div className="bg-blu-light flex text-purple-dark overflow-y-hidden">
      {/*** panel de datos protesis */}
      <div className="w-2/5  py-6" style={{minHeight:"570px"}}>
        <div className="py-4 px-28 border-b-2 border-gray-200">
          <h4 className="text-xl font-bold ">ENCAJE PROTÉSICO </h4>
          <div className="flex justify-between my-6">
            <span>Longitud</span>
            <div className="bg-white w-28 flex px-3 rounded border border-gray-200">
              <input type="number" id="txt1" name="encaje" onChange={(e)=>handleInputChange(e)} className="w-16 focus:outline-none" />
              <span>CM</span>
            </div>
          </div>
        </div>
        <div className="py-4 px-28 border-b-2 border-gray-200">
          <h4 className="text-xl font-bold">PILAS PROTÉSICO </h4>
          <div className="flex justify-between my-6">
            <span>Longitud</span>
            <div className="bg-white w-28 flex px-3 rounded border border-gray-200">
              <input type="number" id="txt2" name="pilar" onChange={(e)=>handleInputChange(e)} className="w-16 focus:outline-none" />
              <span>CM</span>
            </div>
          </div>
        </div>
        <div className="py-4 px-28 border-b-2 border-gray-200">
          <h4 className="text-xl font-bold">COLOR </h4>
          <div className="flex justify-between my-6">
            <span>Pigmento</span>
            <div className="flex">
              <div
                onClick={() => handleInputColor("#red")}
                className="w-8 h-8 rounded-full bg-red-600 mx-1 cursor-pointer"
              >
              </div>
              <div
                onClick={() => handleInputColor("#blue")}
                className="w-8 h-8 rounded-full bg-blue-600 mx-1 cursor-pointer"
              >
              </div>
              <div
                onClick={() => handleInputColor("#yellow")}
                className="w-8 h-8 rounded-full bg-yellow-600 mx-1 cursor-pointer"
              >
              </div>
              <div
                onClick={() => handleInputColor("#green")}
                className="w-8 h-8 rounded-full bg-green-600 mx-1 cursor-pointer"
              >
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*** diseño de la protesis */}
      <div id="threejsroot" className="w-3/5"></div>
    </div>
  );
}

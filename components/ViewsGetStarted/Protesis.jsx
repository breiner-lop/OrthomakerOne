import React from "react";
import threejsLoader, { changeColor } from "../../pages/threejs/apploader";
import { useCasosCtx } from '../../contexts/casosExito/navInicio.context'
export default function Protesis() {
  const state = 0;

  const { datosProtesis, setDatos } = useCasosCtx()
  setDatos(datosProtesis)

  /***MANEJADORM DE LOS COLORES */
  const handleInputColor = (color) => {
    changeColor(color)
    setDatos({
      ...datosProtesis,
      color: color,
    });
    localStorage.setItem('color',color)
  };
     /***MANEJADORM DE LOS inputs de valor */
     const handleInputChange = (e) => {
      localStorage.setItem(`${e.target.name}`,e.target.value)
  }
  React.useEffect(() => {
    threejsLoader()
  }, [state])
  return (
    <div className="bg-blu-light flex text-purple-dark overflow-y-hidden">
      {/*** panel de datos protesis */}
      <div className="w-2/5  py-6" style={{ minHeight: "570px" }}>
        <div className="py-4 px-28 border-b-2 border-gray-200">
          <h4 className="text-xl font-bold ">ENCAJE PROTÉSICO </h4>
          <div className="flex justify-between my-6">
            <span>Longitud</span>
            <div className="bg-white w-28 flex px-3 rounded border border-gray-200">
              <input type="number" id="txt1" name="encaje" onInput={(e) => handleInputChange(e)} className="w-16 focus:outline-none" />
              <span>CM</span>
            </div>
          </div>
        </div>
        <div className="py-4 px-28 border-b-2 border-gray-200">
          <h4 className="text-xl font-bold">PILAS PROTÉSICO </h4>
          <div className="flex justify-between my-6">
            <span>Longitud</span>
            <div className="bg-white w-28 flex px-3 rounded border border-gray-200">
              <input type="number" id="txt2" name="pilar" onChange={(e) => handleInputChange(e)} className="w-16 focus:outline-none" />
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
                onClick={() => handleInputColor(0x740500)}
                className="w-8 h-8 rounded-full bg-red-600 mx-1 cursor-pointer"
              >
              </div>
              <div
                onClick={() => handleInputColor(0x2c517f)}
                className="w-8 h-8 rounded-full bg-blue-600 mx-1 cursor-pointer"
              >
              </div>
              <div
                onClick={() => handleInputColor(0x775d06)}
                className="w-8 h-8 rounded-full bg-yellow-600 mx-1 cursor-pointer"
              >
              </div>
              <div
                onClick={() => handleInputColor(0x196716)}
                className="w-8 h-8 rounded-full bg-green-600 mx-1 cursor-pointer"
              >
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*** diseño de la protesis */}
      <div id="threejsroot" className="w-3/5 bg-white flex justify-center"></div>
    </div>
  );
}

import React from "react";
import threejsLoader, { changeColor, changePlasticColor } from "../../threejs/apploader";
import { useCasosCtx } from '../../contexts/casosExito/navInicio.context'
export default function Protesis() {
  const state = 0;

  const { datosProtesis, setDatos } = useCasosCtx()
  //setDatos(datosProtesis)
  const [medidaAB, setMedidaAB] = React.useState()
  const [medidaBC, setMedidaBC] = React.useState()

  /***MANEJADORM DE LOS COLORES */
  const handleInputColor = (color, colorText) => {
    changeColor(color)
    setDatos({
      ...datosProtesis,
      color: colorText,
    });
  };
  const handleInputColorTwo = (colorTwo, colorText) => {
    changePlasticColor(colorTwo)
    setDatos({
      ...datosProtesis,
      color2: colorText,
    });
  };
  React.useEffect(() => {
    const dataProthesis = JSON.parse(localStorage.getItem("dataProthesis"));
    setMedidaAB(dataProthesis.prothesisData.medidaAB);
    setMedidaBC(dataProthesis.prothesisData.medidaBC);
    // console.log(dataProthesis);

    threejsLoader(dataProthesis.prothesisData.medidaAB,dataProthesis.prothesisData.medidaBC);
  }, [state])
  return (
    <div className="bg-blu-light md:h-screen h-full md:flex block text-purple-dark overflow-y-hidden max-w-[1800px] mx-auto">
      {/*** panel de datos protesis */}
      <div className="md:w-2/5 py-6">
        <div className="py-4 md:px-28 px-2 border-b-2 border-gray-200">
          <h4 className="text-xl font-bold ">ENCAJE PROTÉSICO </h4>
          <div className="flex justify-between md:my-6 my-2">
            <span>Longitud</span>
            <div className="bg-white w-28 flex px-3 rounded border border-gray-200">
              <input type="number" disabled id="txt1" name="lace" min="1" max="10" step="0.1" value={parseInt(medidaAB) / 10} className="w-16 focus:outline-none" />
              <span>CM</span>
            </div>
          </div>
        </div>
        <div className="py-4 md:px-28 px-2 border-b-2 border-gray-200">
          <h4 className="text-xl font-bold">PILAR PROTÉSICO </h4>
          <div className="flex justify-between my-2 md:my-6">
            <span>Longitud</span>
            <div className="bg-white w-28 flex px-3 rounded border border-gray-200">
              <input type="number" disabled id="txt2" name="pillar" step="0.1" min="1" max="20" value={parseInt(medidaBC) / 10} className="w-16 focus:outline-none" />
              <span>CM</span>
            </div>
          </div>
        </div>
        <div className="py-4 md:px-28 px-2 ">
          <h4 className="text-xl font-bold">COLOR </h4>
          <div className="flex justify-between my-2 md:my-6">
            <span>Pigmento</span>
            <div className="flex md:ml-6 ml-1">
              <div
                onClick={() => handleInputColor(0x740500, "Rojo")}
                className="w-8 h-8 rounded-full bg-red-600 md:mr-2 mr-1 cursor-pointer"
              >
              </div>
              <div
                onClick={() => handleInputColor(0x2c517f, "Azul")}
                className="w-8 h-8 rounded-full bg-blue-600 md:mr-2 mr-1 cursor-pointer"
              >
              </div>
              <div
                onClick={() => handleInputColor(0x775d06, "Amarillo")}
                className="w-8 h-8 rounded-full bg-yellow-400 md:mr-2 mr-1 cursor-pointer"
              >
              </div>
              <div
                onClick={() => handleInputColor(0x196716, "Verde")}
                className="w-8 h-8 rounded-full bg-green-600 md:mr-2 mr-1 cursor-pointer"
              >
              </div>
              <div
                onClick={() => handleInputColor(0xff6309, "Naranja")}
                className="w-8 h-8 rounded-full md:mr-2 mr-1 cursor-pointer bg-orange"
              >
              </div>
              <div
                onClick={() => handleInputColor(0xd6d6d6, "Blanco")}
                className="w-8 h-8 rounded-full bg-white md:mr-2 mr-1  cursor-pointer"
              >
              </div>
              <div
                onClick={() => handleInputColor(0x6d6d6d, "Gris")}
                className="w-8 h-8 rounded-full bg-gray-400 md:mr-2 mr-1 cursor-pointer"
              >
              </div>
              <div
                onClick={() => handleInputColor(0x010101, "Negro")}
                className="w-8 h-8 rounded-full bg-black mx-1 cursor-pointer"
              >
              </div>
            </div>
          </div>
          <div className="flex justify-between my-6">
            <span>Estructura</span>
            <div className="flex md:ml-6 ml-1">
              <div
                onClick={() => handleInputColorTwo(0x740500, "Rojo")}
                className="w-8 h-8 rounded-full bg-red-600 md:mr-2 mr-1 cursor-pointer"
              >
              </div>
              <div
                onClick={() => handleInputColorTwo(0x2c517f, "Azul")}
                className="w-8 h-8 rounded-full bg-blue-600 md:mr-2 mr-1 cursor-pointer"
              >
              </div>
              <div
                onClick={() => handleInputColorTwo(0x775d06, "Amarillo")}
                className="w-8 h-8 rounded-full bg-yellow-400 md:mr-2 mr-1 cursor-pointer"
              >
              </div>
              <div
                onClick={() => handleInputColorTwo(0x196716, "Verde")}
                className="w-8 h-8 rounded-full bg-green-600 md:mr-2 mr-1 cursor-pointer"
              >
              </div>
              <div
                onClick={() => handleInputColorTwo(0xff6309, "Naranja")}
                className="w-8 h-8 rounded-full md:mr-2 mr-1 cursor-pointer bg-orange"
              >
              </div>
              <div
                onClick={() => handleInputColorTwo(0xd6d6d6, "Blanco")}
                className="w-8 h-8 rounded-full bg-white md:mr-2 mr-1  cursor-pointer"
              >
              </div>
              <div
                onClick={() => handleInputColorTwo(0x6d6d6d, "Gris")}
                className="w-8 h-8 rounded-full bg-gray-400 md:mr-2 mr-1 cursor-pointer"
              >
              </div>
              <div
                onClick={() => handleInputColorTwo(0x010101, "Negro")}
                className="w-8 h-8 rounded-full bg-black md:mr-2 mr-1 cursor-pointer"
              >
              </div>
            </div>
          </div>
         <div className="text-center w-20 h-20 border-2 filter drop-shadow-xl border-purple rounded-full md:hidden flex mx-auto justify-center items-end pb-1">
          <a href="#threejsroot"><img src="/img/bajar.png" alt="" className="w-12 animate-bounce" /></a>
         </div>
        </div>
      </div>
      {/*** diseño de la protesis */}
     <div className="md:h-screen h-1/2 bg-white w-full">
     <div id="threejsroot" className="w-full h-[520px] bg-white flex"></div>
     </div>
    </div>
  );
}

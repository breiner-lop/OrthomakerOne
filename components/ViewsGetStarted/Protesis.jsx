import React from "react";
import threejsLoader, { changeColor } from "../../threejs/apploader";
import { useCasosCtx } from '../../contexts/casosExito/navInicio.context'
export default function Protesis() {
  const state = 0;

  const { datosProtesis, setDatos, } = useCasosCtx()
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
    //localStorage.setItem('color',colorText)
  };
  /***MANEJADORM DE LOS inputs de valor */
  const handleInputChange = (e) => {
    setDatos({
      ...datosProtesis,
      [e.target.name]: parseFloat(e.target.value)
    })
  }
  React.useEffect(() => {
    const dataProthesis = JSON.parse(localStorage.getItem("dataProthesis"));
    setMedidaAB(dataProthesis.prothesisData.medidaAB);
    setMedidaBC(dataProthesis.prothesisData.medidaBC);
    // console.log(dataProthesis);

    threejsLoader(dataProthesis.prothesisData.medidaAB,dataProthesis.prothesisData.medidaBC);
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
              <input type="number" disabled id="txt1" name="lace" min="1" max="10" step="0.1" value={parseInt(medidaAB) / 10} className="w-16 focus:outline-none" />
              <span>CM</span>
            </div>
          </div>
        </div>
        <div className="py-4 px-28 border-b-2 border-gray-200">
          <h4 className="text-xl font-bold">PILAR PROTÉSICO </h4>
          <div className="flex justify-between my-6">
            <span>Longitud</span>
            <div className="bg-white w-28 flex px-3 rounded border border-gray-200">
              <input type="number" disabled id="txt2" name="pillar" step="0.1" min="1" max="20" value={parseInt(medidaBC) / 10} className="w-16 focus:outline-none" />
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
                onClick={() => handleInputColor(0x740500, "rojo")}
                className="w-8 h-8 rounded-full bg-red-600 mx-1 cursor-pointer"
              >
              </div>
              <div
                onClick={() => handleInputColor(0x2c517f, "azul")}
                className="w-8 h-8 rounded-full bg-blue-600 mx-1 cursor-pointer"
              >
              </div>
              <div
                onClick={() => handleInputColor(0x775d06, "amarillo")}
                className="w-8 h-8 rounded-full bg-yellow-600 mx-1 cursor-pointer"
              >
              </div>
              <div
                onClick={() => handleInputColor(0x196716, "verde")}
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

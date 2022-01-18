import {useCasosCtx} from "../../contexts/casosExito/navInicio.context"

export default function CardCasos({ img, name, textOne, textTwo,Uu,imgsig }) {
  const {setState,state,setCaso}=useCasosCtx();
  return (
    <div>
      <div>
        <div className={` ${state==false?"md:w-[1200px] w-[500px] flex":"md:w-[1400px] w-full pr-24 md:pr-0 md:flex block"}`}>
          <div className="md:w-1/2 w-full">
            <img src={img} width="100%" height="100%" />
          </div>
          <div className="md:w-2/5 w-full md:ml-10 ml-0">
            <h4 className="text-5xl mb-0 md:mb-12 uppercase md:mt-0 mt-4">{name}</h4>
            <p>{textOne}</p>
            <br />
            <p className="mb-12 uppercase">{textTwo}</p>
            <span className="flex items-center text-lg font-bold">
              <img className="mr-2 w-5 h-5" src="/img/chulo.png" alt="chulo" />
              Mejoramiento En La Calidad De Vida Del Canino
            </span>
            <span className="flex items-center text-lg font-bold">
              <img className="mr-2 w-5 h-5" src="/img/chulo.png" alt="chulo" />
              Prótesis Articular No Rígida
            </span>
            <span className="flex items-center text-lg font-bold">
              <img className="mr-2 w-5 h-5" src="/img/chulo.png" alt="chulo" />
              Entorno Web
            </span>
            <span className="flex items-center text-lg font-bold">
              <img className="mr-2 w-5 h-5" src="/img/chulo.png" alt="chulo" />
              Costos Y Tiempos De Producción Mas Bajos
            </span>
          </div>
          <div onClick={()=>setCaso(Uu)} className="min-h-full w-1/6 cursor-pointer" style={{backgroundImage:`url(${imgsig})`}}>
          </div>
        </div>
        <div className="-mb-10 pb-10" >
          {state&&<button className="border-none" onClick={()=>setState(false)}>
            <span className="underline">Inicio</span>
          </button>}
        </div>
      </div>
    </div>
  );
}

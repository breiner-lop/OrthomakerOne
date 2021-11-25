import {useCasosCtx} from "../../contexts/casosExito/navInicio.context"

export default function CardCasos({ key, img, name, textOne, textTwo,Uu,imgsig }) {
  const {setState,state,setCaso}=useCasosCtx();
  return (
    <div key={key} >
      <div>
        <div className="flex " style={{ width:`${state==false?"1200px":"1400px"}` }}>
          <div className="w-1/2">
            <img src={img} width="100%" height="100%" layout="responsive" />
          </div>
          <div className="w-2/5 ml-10">
            <h4 className="text-5xl mb-12 uppercase">{name}</h4>
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
          <button onClick={()=>setState(false)}>
            <span className="underline">Inicio</span>
          </button>
        </div>
      </div>
    </div>
  );
}

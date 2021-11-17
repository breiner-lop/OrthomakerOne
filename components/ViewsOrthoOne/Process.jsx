import Image from "next/image"

export default function Process() {
    const processCard=[
        {
            img:"/img/processone.png",
            number:"01",
            description:"Inicialmente se deben tomar de la manera mas exacta las medidas de la mascota desde diferentes puntos de la extremidad afectada."
        },
        {
            img:"/img/processtwo.png",
            number:"02",
            description:"En cuanto tengamos las dimensiones exactas se creara un modelo 2d y 3d especifico para tu mascota "
        },
        {
            img:"/img/processthree.png",
            number:"03",
            description:"A continuación el modelo de protesis se lleva a un software especialziado donde posteriormente se imprime en diferentes materiales con tecnología de impresión 3d"
        },
        {
            img:"/img/processfour.png",
            number:"04",
            description:"Finalmente, cuando recibas tu protesis ORTOMAKER ONE, tenemos un proceso poscompra donde estaremos atentos a la evolución de tu mascota"
        },
    ]
    return (
        <div className="grid h-full grid-rows-4">
            {
                processCard.map((pC)=>(
                <div key={pC.number} className="flex row-span-1 items-center">
                    <div className="w-44">
                    <Image src={pC.img} width="185px" height="99px" />
                    </div>
                    <div className="border-b-2 w-full ml-2 border-blue-light flex h-full items-center" >
                    <span className="px-6 text-5xl font-bold"> {pC.number} </span>
                    <p className="font-light text-xl"> {pC.description} </p>
                    </div>
                </div>
                ))
            }
        </div>
    )
}

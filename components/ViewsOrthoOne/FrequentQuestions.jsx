import React from 'react'
import Preguntas from "../../data/preguntasFrecuentes.json"


export default function FrequentQuestions() {

    return (
        <div className=' overflow-y-scroll' style={{maxHeight:"500px"}}>
            <div>
               {
                   Preguntas.map((pre)=>(
                    <div key={pre.id} className="mb-8">
                        <h4 className="text-2xl font-bold"> {pre.id}. {pre.title} </h4>
                        <p className="text-xl font-light"> {pre.text} </p>
                    </div>
                   ))
               }
            </div>
        </div>
    )
}

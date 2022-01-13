import React from 'react'

export default function CampoDetalleOrden({title,valor,widthTitle}) {
    return (
        <div className="flex text-xs">
            <h6 className={`${widthTitle?widthTitle:'w-16'} text-blue-transparent`} >{title}</h6> <span className="text-purple-dark">{valor}</span>
        </div>
    )
}

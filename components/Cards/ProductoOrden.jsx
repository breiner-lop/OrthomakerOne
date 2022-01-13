import React from 'react'

export default function ProductoOrden({img,nombre,color,tamaño,valorAntiguo,cantidad,total}) {
    return (
        <div className="flex justify-between border-t-2 border-gray-200 h-40 items-center px-6 text-xs">
        <div>
          <img src={img} alt={nombre} width="140px" height="140px" />
        </div>
        <div>
          <h1 className="mb-6">{nombre}</h1>
          <div>
            <span className="mr-4 text-gray-400">Color</span>
            <span>{color}</span>
            <br />
            <span className="mr-4 text-gray-400">Tamaño</span>
            <span>{tamaño}</span>
          </div>
        </div>
        <div className="w-36 text-right">
          <span className="text-gray-400">{valorAntiguo}</span>
        </div>
        <span> {cantidad}</span>
        <span>${total}</span>
      </div>
    )
}

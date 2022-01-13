import React from 'react'

export default function ButtonFiltrar() {
    return (
        <div className="h-20 w-36 bg-white rounded-lg p-4 flex items-center justify-center ml-4 filter drop-shadow-md">
            <span className="mr-1">Filtrar por</span>
           <button className="mt-2"> <img src="/img/Filter.png" width="19px" height="20px" /></button>
        </div>
    )
}

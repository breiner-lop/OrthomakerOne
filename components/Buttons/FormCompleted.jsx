import React from 'react'

export default function FormCompleted({onClick,perfil}) {
    return (
        <button onClick={onClick} className="mb-6">
            <span className="flex items-center">
              <span>
                <img
                  src="/img/completedchulo.png"
                  width="30px"
                  height="30px"
                />
              </span>
              <span className="flex flex-col text-left ml-4 mr-20">
                <span className="text-sm text-blue-transparent">Completado</span> <span className="font-bold"> {perfil} </span>
              </span>
            </span>
          </button>
    )
}
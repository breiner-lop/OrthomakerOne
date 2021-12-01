import React from 'react'

export default function SingUp({label,type}) {
    return (
        <div className="rounded border border-gray-400 px-6 h-16 text-sm  my-2">
          <label htmlFor={label} className="text-purple-transparent text-xs">
            {label}
          </label>
          <br />
          <input type={type} id={label} className="w-full h-8 focus:outline-none" />
        </div>
    )
}

import React from 'react'

export default function SingUp({label,type,onChange,name}) {
    return (
        <div className="rounded border border-gray-400 px-6 h-16 text-sm  my-2">
          <label htmlFor={label} className="text-purple-transparent text-xs">
            {label}
          </label>
          <br />
          <input type={type} id={label} onChange={onChange}name={name} className="w-1/2 h-8 focus:outline-none" />
        </div>
    )
}

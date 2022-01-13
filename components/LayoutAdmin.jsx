import React from 'react'
import Panel from './AdminViews/Panel'


export default function Layout({children}) {
    return (
        <div className="flex mx-auto">
            <Panel/>
            {children}
        </div>
    )
}
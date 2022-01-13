import React from 'react'

export default function Loading() {
    return (
        <div className="flex h-full text-base w-full items-center justify-center space-x-2 animate-pulse my-6">
            <div className="w-3 h-3 bg-purple-dark rounded-full"></div>
            <div className="w-3 h-3 bg-purple-dark rounded-full"></div>
            <div className="w-3 h-3 bg-purple-dark rounded-full mr-2"></div><span>Loading...</span>
        </div>
    )
}

import React from 'react'

const NowPlayingLoader = () => {
  return (
      <div className="inline-flex flex-col items-center sm:flex-row space-y-3 sm:space-y-0  truncate animate-pulse">
        <div className="capsize bg-gray-300 w-20 rounded h-2"/>
        <div className="capsize mx-2 t hidden sm:block"> – </div>
        <div className="capsize bg-gray-300  w-10 truncate rounded h-2"/>
      </div>
  )
}

export default NowPlayingLoader

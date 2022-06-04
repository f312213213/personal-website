import React from 'react'

const CardLoader = () => {
  return (
      <div className="w-full h-full border-2 p-4 rounded-xl">
        <div className={'animate-pulse  flex flex-col space-y-3'}>
          <div className={'h-2 bg-slate-700 rounded w-40'}/>
          <div className={'h-2 bg-slate-700 rounded w-20'}/>
        </div>
      </div>
  )
}

export default CardLoader

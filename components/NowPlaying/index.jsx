import React from 'react'

const NowPlaying = ({ songData }) => {
  return (
      <div className="inline-flex flex-col sm:flex-row sm:w-full w-3/5 truncate">
        <a href={songData?.item?.external_urls?.spotify} target={'_blank'} className="capsize text-gray-800 dark:text-gray-200 font-medium overflow-hidden text-ellipsis whitespace-nowrap" rel="noreferrer">{songData.item?.name}</a>
        <span className="capsize mx-2 text-gray-500 dark:text-gray-300 hidden sm:block"> – </span>
        <a href={songData.item?.artists[0]?.external_urls?.spotify} target={'_blank'} className="capsize text-gray-500 dark:text-gray-300 max-w-max truncate overflow-hidden text-ellipsis whitespace-nowrap" rel="noreferrer">{songData.item?.artists[0]?.name}</a>
      </div>
  )
}

export default NowPlaying

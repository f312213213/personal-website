import React from 'react'

const NowPlaying = ({ songData }) => {
  return (
      <div className={'inline-flex flex-col sm:flex-row sm:w-full truncate text-center'}>
        <a href={songData?.songUrl} target={'_blank'} className={'capsize text-gray-800 dark:text-gray-200 font-medium truncate'} rel={'noreferrer'}>{songData.title}</a>
        <span className={'capsize mx-2 text-gray-500 dark:text-gray-300 hidden sm:block'}> – </span>
        <p className={'capsize text-gray-500 dark:text-gray-300 max-w-max truncate'} rel={'noreferrer'}>{songData.artist}</p>
      </div>
  )
}

export default NowPlaying

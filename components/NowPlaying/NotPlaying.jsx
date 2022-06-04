import React from 'react'

const NotPlaying = () => {
  return (
      <div className="inline-flex flex-col sm:flex-row sm:w-full truncate text-center">
        <p className="capsize text-gray-800 dark:text-gray-200 font-medium" rel="noreferrer">Not playing</p>
        <span className="capsize mx-2 text-gray-500 dark:text-gray-300 hidden sm:block"> – </span>
        <a href={'https://www.spotify.com/'} target={'_blank'} className="capsize text-gray-500 dark:text-gray-300 max-w-max truncate" rel="noreferrer">Spotify</a>
      </div>
  )
}

export default NotPlaying

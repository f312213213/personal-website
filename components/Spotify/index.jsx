import React from 'react'
import { SiSpotify } from 'react-icons/si'
import { MdAutorenew } from 'react-icons/md'

import NowPlaying from '@/components/NowPlaying'
import NowPlayingLoader from '@/components/NowPlaying/NowPlayingLoader'
import NotPlaying from '@/components/NowPlaying/NotPlaying'

const Spotify = ({ songData, loading, getNowPlaying }) => {
  return (
      <div className="flex items-center justify-center sm:flex-row mb-4 space-x-0 sm:space-x-4 w-full">
        <div className={'flex items-center justify-center w-9/12 sm:w-auto space-x-2'}>
          <a href={'https://www.spotify.com/tw/'} target={'_blank'} className={'text-2xl'} rel="noreferrer">
            <SiSpotify />
          </a>
          {
            !loading && songData.is_playing && songData.currently_playing_type === 'track'
              ? <NowPlaying songData={songData} />
              : loading
                ? <NowPlayingLoader />
                : <NotPlaying />
          }
          <button disabled={loading} onClick={getNowPlaying} className={`hidden sm:block text-2xl ${loading && 'spin'}`}>
            <MdAutorenew />
          </button>
        </div>
      </div>
  )
}

export default Spotify

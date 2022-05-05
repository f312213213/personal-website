import React from 'react'
import { SiSpotify } from 'react-icons/si'
import { MdAutorenew } from 'react-icons/md'

import NowPlaying from '@/components/NowPlaying'
import NowPlayingLoader from '@/components/NowPlaying/NowPlayingLoader'
import NotPlaying from '@/components/NowPlaying/NotPlaying'

const Spotify = () => {
  const [songData, setSongData] = React.useState({})
  const [loading, setLoading] = React.useState(true)

  const getNowPlaying = async () => {
    setLoading(true)
    try {
      const response = await fetch('https://asia-east1-get-current-spotify-song.cloudfunctions.net/now-playing')
      const song = await response.json()
      setSongData(song)
      setLoading(false)
    } catch (e) {
      console.error(e)
      setLoading(false)
    }
  }

  React.useEffect(() => {
    getNowPlaying()
  }, [])
  return (
      <div className="flex items-center justify-center sm:flex-row mb-4 space-x-0 sm:space-x-4 w-full">
        <div className={'relative flex items-center justify-center w-9/12 sm:w-auto space-x-2 group'}>
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
          <div className={'absolute -top-10 transform transition scale-0 group-hover:scale-100 bg-[#121212] dark:bg-gray-50 dark:text-[#121212]  text-gray-50 rounded text-sm p-2'}>
            Current Playing!
          </div>
        </div>
      </div>
  )
}

export default Spotify

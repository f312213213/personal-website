import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiFillInstagram, AiFillMail } from 'react-icons/ai'
import { SiSpotify } from 'react-icons/si'
import { MdAutorenew } from 'react-icons/md'
import Link from 'next/link'

import { ContactDialogContext } from '@/context/useContactDialog'
import NowPlaying from '@/components/NowPlaying'
import NowPlayingLoader from '@/components/NowPlaying/NowPlayingLoader'
import NotPlaying from '@/components/NowPlaying/NotPlaying'
import Spotify from '@/components/Spotify'

const Footer = ({ isNav }) => {
  const { toggleContactDialog } = React.useContext(ContactDialogContext)
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
      <footer className={'p-5 flex flex-col items-center justify-center w-full text-black dark:bg-[#121212] dark:text-white text-opacity-70 text-lg'}>

        {
          !isNav && <Spotify getNowPlaying={getNowPlaying} loading={loading} songData={songData} />
        }

        <div className={'flex flex-row text-3xl space-x-6 mb-4'}>
          <Link href={'https://github.com/f312213213'}>
            <a target={'_blank'}>
              <AiFillGithub />
            </a>
          </Link>
          <Link href={'https://www.linkedin.com/in/davidchien419/'}>
            <a target={'_blank'}>
              <AiFillLinkedin />
            </a>
          </Link>
          <button onClick={toggleContactDialog} className={'shadow-none'}>
            <AiFillMail />
          </button>
          <Link href={'https://instagram.com/yeeggg_'}>
            <a target={'_blank'}>
              <AiFillInstagram />
            </a>
          </Link>
        </div>
        © 2022 David Chien
      </footer>
  )
}

export default Footer

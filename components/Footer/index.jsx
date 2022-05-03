import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiFillInstagram, AiFillMail } from 'react-icons/ai'
import { SiSpotify } from 'react-icons/si'
import Link from 'next/link'

import { ContactDialogContext } from '@/context/useContactDialog'
import NowPlaying from '@/components/NowPlaying'
import NowPlayingLoader from '@/components/NowPlaying/NowPlayingLoader'

const Footer = () => {
  const { toggleContactDialog } = React.useContext(ContactDialogContext)
  const [songData, setSongData] = React.useState({})

  const getNowPlaying = async () => {
    try {
      const response = await fetch('https://asia-east1-mysqlonengine.cloudfunctions.net/now-playing')
      const song = await response.json()
      setSongData(song)
    } catch (e) {
      console.error(e)
    }
  }

  React.useEffect(() => {
    getNowPlaying()
  }, [])
  return (
      <footer className={'p-5 flex flex-col items-center justify-center w-full text-black dark:bg-[#121212] dark:text-white text-opacity-70 text-lg'}>
        <div className="flex items-center justify-center sm:flex-row mb-8 space-x-0 sm:space-x-4 w-full">
          <div className={'flex items-center space-x-2'}>
            <a href={'https://www.spotify.com/tw/'} target={'_blank'} className={'text-2xl'} rel="noreferrer">
              <SiSpotify />
            </a>
            {
              songData.is_playing
                ? <NowPlaying songData={songData} />
                : <NowPlayingLoader />
            }
          </div>
        </div>

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

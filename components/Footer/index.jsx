import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiFillInstagram, AiFillMail } from 'react-icons/ai'
import Link from 'next/link'

import { ContactDialogContext } from '@/context/useContactDialog'
import Spotify from '@/components/Spotify'
import userData from '@/constant/userData'

const Footer = ({ isNav }) => {
  const { toggleContactDialog } = React.useContext(ContactDialogContext)

  return (
      <footer className={'p-5 flex flex-col items-center justify-center w-full text-black dark:bg-[#121212] dark:text-white text-opacity-70 text-lg'}>

        {
          !isNav && <Spotify />
        }

        <div className={'flex flex-row text-3xl space-x-6 mb-4'}>
          <Link href={`https://github.com/${userData.general.socialID.github}`}>
            <a target={'_blank'}>
              <AiFillGithub />
            </a>
          </Link>
          <Link href={`https://www.linkedin.com/in/${userData.general.socialID.linkedin}`}>
            <a target={'_blank'}>
              <AiFillLinkedin />
            </a>
          </Link>
          <button onClick={toggleContactDialog} className={'shadow-none'}>
            <AiFillMail />
          </button>
          <Link href={`https://instagram.com/${userData.general.socialID.instagram}`}>
            <a target={'_blank'}>
              <AiFillInstagram />
            </a>
          </Link>
        </div>
        © 2022 {userData.general.firstName} {userData.general.lastName}
      </footer>
  )
}

export default Footer

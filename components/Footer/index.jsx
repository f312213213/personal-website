import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai'

import Spotify from '@/components/Spotify'
import userData from '@/constant/userData'
import FooterLink from '@/components/Footer/components/FooterLink'
import FooterContact from '@/components/Footer/components/FooterContact'

const Footer = ({ isNav }) => {
  return (
      <footer className={'p-5 flex flex-col items-center justify-center w-full text-black dark:bg-[#121212] dark:text-white text-opacity-70 text-lg'}>

        {
          !isNav && <Spotify />
        }

        <div className={'flex flex-row text-3xl space-x-6 mb-4'}>
          <FooterLink link={`https://github.com/${userData.general.socialID.github}`} icon={<AiFillGithub />}/>
          <FooterLink link={`https://www.linkedin.com/in/${userData.general.socialID.linkedin}`} icon={<AiFillLinkedin />} />
          <FooterContact />
          <FooterLink link={`https://instagram.com/${userData.general.socialID.instagram}`} icon={<AiFillInstagram />} />
        </div>
        © 2022 {userData.general.firstName} {userData.general.lastName}
      </footer>
  )
}

export default Footer

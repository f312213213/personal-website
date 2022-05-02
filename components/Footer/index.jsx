import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiFillInstagram, AiFillMail } from 'react-icons/ai'
import Link from 'next/link'

const Footer = () => {
  return (
      <footer className={'absolute bottom-0 p-5 flex flex-col items-center justify-center w-full text-black dark:text-white opacity-70 text-lg'}>
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
          <Link href={'mailto:david@chiendavid.com'}>
            <a target={'_blank'}>
              <AiFillMail />
            </a>
          </Link>
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
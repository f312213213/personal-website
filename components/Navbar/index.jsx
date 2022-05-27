import React from 'react'
import Link from 'next/link'
import { FaHamburger } from 'react-icons/fa'
import { motion } from 'framer-motion'

import NavLink from './components/NavLink'
import { ContactDialogContext } from '@/context/useContactDialog'
import Footer from '@/components/Footer'
import ContactMeButton from '@/components/Buttons/ContactMeButton'
import userData from '@/constant/userData'
import Home from '@/components/Navbar/components/Home'

const Navbar = () => {
  const { openContactDialog } = React.useContext(ContactDialogContext)
  const [showNav, setShowNav] = React.useState(false)

  const bigBtn = React.useCallback(() => {
    setShowNav(false)
    openContactDialog()
  }, [])

  React.useEffect(() => {
    if (showNav) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [showNav])

  return (
      <>
        <motion.nav initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={'transition duration-200 justify-around items-center p-4 px-8 w-full text-lg pt-8 dark:opacity-70 hidden sm:flex dark:bg-[#121212]'}>
          <Home />
          <div className={'px-4 py-2 rounded-3xl bg-gray-200 dark:bg-gray-700 transition duration-75'}>
            <ul className={'w-full grid grid-cols-3 gap-6'}>
              <NavLink text={'About'} path={'/about'} />
              <NavLink text={'Blog'} path={'/blog'} />
              <NavLink text={'Projects'} path={'/projects'} />
            </ul>
          </div>
          <button onClick={openContactDialog} className={'shadow-none'}>
            Contact
          </button>
        </motion.nav>
        <button className={'absolute p-6 text-2xl z-50 sm:hidden shadow-none'} onClick={() => setShowNav(!showNav)}>
          <FaHamburger />
        </button>
        <div className={`block md:hidden h-screen w-full bg-white fixed transition z-20 dark:bg-[#121212] ${showNav ? 'scale-100' : 'scale-0'}`}>
          <div className={'flex flex-col text-2xl justify-center items-center mt-4 h-full dark:text-gray-50 space-y-3'}>
            <Link href={'/'}>
              <a onClick={() => setShowNav(false)}>
                {userData.general.firstName}
              </a>
            </Link>
            <Link href={'/about'}>
              <a onClick={() => setShowNav(false)}>
                About
              </a>
            </Link>
            <Link href={'/blog'}>
              <a onClick={() => setShowNav(false)}>
                Blog
              </a>
            </Link>
            <Link href={'/projects'}>
              <a onClick={() => setShowNav(false)}>
                Projects
              </a>
            </Link>
            <div className={'items-end'} onClick={() => setShowNav(false)}>
              <Footer isNav />
            </div>
            <ContactMeButton onClick={bigBtn} />
          </div>
        </div>

      </>
  )
}

export default React.memo(Navbar)

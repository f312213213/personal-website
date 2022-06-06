import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaHamburger } from 'react-icons/fa'

import NavLink from './components/NavLink'
import { ContactDialogContext } from '@/context/useContactDialog'
import userData from '@/constant/userData'
import Home from '@/components/Navbar/components/Home'
import MobileNavLink from '@/components/Navbar/components/MobileNavLink'

const Navbar = () => {
  const { openContactDialog } = React.useContext(ContactDialogContext)
  const [showNav, setShowNav] = React.useState(false)

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
          <ul className={'flex space-x-4 items-baseline'}>
            <Home />
            <NavLink text={'About'} path={'/about'} />
            <NavLink text={'Blog'} path={'/blog'} />
            <NavLink text={'Projects'} path={'/projects'} />
            <NavLink text={'cv'} path={'https://file.chiendavid.com/cv.pdf'} />
          </ul>
          <button type={'button'} onClick={openContactDialog} className={'shadow-none'}>
            Contact
          </button>
        </motion.nav>
        <button type={'button'} className={'absolute p-6 text-2xl z-50 sm:hidden shadow-none'} onClick={() => setShowNav(!showNav)}>
          <FaHamburger />
        </button>
        <AnimatePresence>
          {
              showNav &&
              <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{
                    opacity: 0
                  }}
                  className={'block md:hidden h-screen w-full bg-white fixed transition z-20 dark:bg-[#121212]'}
              >
                <ul className={'flex flex-col text-2xl justify-center items-center mt-4 h-full dark:text-gray-50 space-y-3'}>
                  <MobileNavLink path={'/'} setShowNav={setShowNav} text={userData.general.firstName} />
                  <MobileNavLink path={'/about'} setShowNav={setShowNav} text={'About'} />
                  <MobileNavLink path={'/blog'} setShowNav={setShowNav} text={'Blog'} />
                  <MobileNavLink path={'/projects'} setShowNav={setShowNav} text={'Projects'} />
                  <MobileNavLink path={'https://file.chiendavid.com/cv.pdf'} setShowNav={setShowNav} text={'CV'} />
                </ul>
              </motion.div>
          }
        </AnimatePresence>
      </>
  )
}

export default React.memo(Navbar)

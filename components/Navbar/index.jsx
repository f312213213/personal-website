import React from 'react'
import Link from 'next/link'
import { FaHamburger } from 'react-icons/fa'

import NavLink from './components/NavLink'
import { ContactDialogContext } from '@/context/useContactDialog'
import Footer from '@/components/Footer'

const Navbar = () => {
  const { toggleContactDialog } = React.useContext(ContactDialogContext)
  const [showNav, setShowNav] = React.useState(false)

  const bigBtn = () => {
    setShowNav(false)
    toggleContactDialog()
  }
  return (
      <>
        <nav className={'justify-around items-center p-4 px-8 w-full text-lg pt-8 dark:opacity-70 hidden sm:flex'}>
          <Link href={'/'}>
            <a>
              David
            </a>
          </Link>
          <div className={'px-4 py-2 rounded-3xl bg-gray-200 dark:bg-gray-700'}>
            <div className={'w-full grid grid-cols-3 gap-6'}>
              <NavLink text={'About'} path={'/about'} />
              <NavLink text={'Blog'} path={'https://blog.chiendavid.com/'} newTab />
              <NavLink text={'Projects'} path={'/projects'} />
            </div>
          </div>
          <button onClick={toggleContactDialog}>
            Contact
          </button>
        </nav>
        <button className={'absolute p-6 text-2xl z-50 sm:hidden'} onClick={() => setShowNav(!showNav)}>
          <FaHamburger />
        </button>
        <div className={`block md:hidden h-screen w-full dark:bg-black bg-white fixed transition z-20 ${showNav ? 'scale-100' : 'scale-0'}`}>
          <div className={'flex flex-col text-2xl justify-center items-center mt-4 h-full dark:text-gray-50 space-y-3'}>
              <Link href={'/'}>
                <a onClick={() => setShowNav(false)}>
                  David
                </a>
              </Link>
              <Link href={'/about'}>
                <a onClick={() => setShowNav(false)}>
                  About
                </a>
              </Link>
              <Link href={'https://blog.chiendavid.com/'}>
                <a target={'_blank'} onClick={() => setShowNav(false)}>
                  Blog
                </a>
              </Link>
              <Link href={'/projects'}>
                <a onClick={() => setShowNav(false)}>
                  Projects
                </a>
              </Link>
            <div className={'items-end'} onClick={() => setShowNav(false)}>
              <Footer />
            </div>
            <button className={'bg-black dark:bg-gray-50 dark:text-black text-gray-50 mt-8 text-2xl p-4 rounded-xl flex items-center transform hover:scale-110 transition'} onClick={bigBtn}>
              <span className={'animate-bounce mr-4'}>
               👋
              </span>
              Contact me
            </button>
          </div>
        </div>
      </>
  )
}

export default Navbar

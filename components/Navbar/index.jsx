import React from 'react'
import Link from 'next/link'

import NavLink from './components/NavLink'
import { ContactDialogContext } from '@/context/useContactDialog'

const Navbar = () => {
  const { toggleContactDialog } = React.useContext(ContactDialogContext)
  return (
      <nav className={'flex justify-around items-center p-4 px-8 w-full text-lg pt-8 dark:opacity-70'}>
        <Link href={'/'}>
          <a>
            David
          </a>
        </Link>
        <div className={'px-4 py-2 rounded-3xl bg-gray-200 dark:bg-gray-700'}>
          <div className={'w-full grid grid-cols-3 gap-6'}>
            <NavLink text={'About'} path={'/about'} />
            <NavLink text={'Blog'} path={'/blog'} />
            <NavLink text={'Projects'} path={'/projects'} />
          </div>
        </div>

        <button onClick={toggleContactDialog}>
          Contact
        </button>
      </nav>
  )
}

export default Navbar

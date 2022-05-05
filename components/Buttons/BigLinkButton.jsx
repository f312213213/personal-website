import React from 'react'
import Link from 'next/link'
import { AiOutlineArrowDown } from 'react-icons/ai'

const BigLinkButton = ({ path, text }) => {
  return (
      <Link href={path}>
        <a className={'bg-black dark:bg-gray-50 dark:text-black text-gray-50 mt-8 text-xl md:text-2xl p-4 rounded-xl flex items-center transform hover:scale-110 transition'}>
          {text}
          <div className={'-rotate-90'}>
            <div className={'animate-bounce mt-2'}>
              <AiOutlineArrowDown />
            </div>
          </div>
        </a>
      </Link>
  )
}

export default BigLinkButton

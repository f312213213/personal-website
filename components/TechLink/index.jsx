import React from 'react'
import Link from 'next/link'

const TechLink = ({ link, icon, text }) => {
  return (
      <Link href={link}>
        <a target={'_blank'} className={'w-full text-5xl flex justify-center items-center relative group'}>
          <div className={'p-4 group-hover:shadow-2xl transform group-hover:scale-125 rounded transition-transform'}>
            {icon}
          </div>
          <div className={'transform absolute text-sm p-2 bg-[#121212] dark:bg-gray-50 dark:text-[#121212] text-gray-50 scale-0 rounded top-20 transition duration-300 group-hover:scale-100'}>
            {text}
          </div>
        </a>
      </Link>
  )
}

export default TechLink

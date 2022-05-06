import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const NavLink = ({ path, text, newTab }) => {
  const router = useRouter()

  return (
      <li className={`text-center transition dark:hover:bg-gray-400 hover:bg-gray-300 rounded-2xl px-2 w-full ${router.asPath.includes(path) && 'activeLink'}`}>
        <Link href={path}>
          <a target={newTab ? '_blank' : undefined}>
            {text}
          </a>
        </Link>
      </li>
  )
}

export default React.memo(NavLink)

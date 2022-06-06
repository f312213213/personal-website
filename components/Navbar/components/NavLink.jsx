import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const NavLink = ({ path, text }) => {
  const router = useRouter()

  return (
      <li>
        <Link href={path}>
          <a className={`transition text-sm border-b border-transparent hover:border-gray-400${router.asPath.includes(path) ? ' activeLink' : ''}`}>
            {text}
          </a>
        </Link>
      </li>
  )
}

export default React.memo(NavLink)

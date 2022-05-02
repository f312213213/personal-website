import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const NavLink = ({ path, text, newTab }) => {
  const router = useRouter()

  return (
      <Link href={path}>
        <a className={`text-center px-2 w-full ${router.asPath.includes(path) && 'activeLink'}`} target={newTab ? '_blank' : undefined}>
          {text}
        </a>
      </Link>
  )
}

export default NavLink

import React from 'react'
import Link from 'next/link'

const MobileNavLink = ({ text, path, setShowNav }) => {
  return (
      <li>
        <Link href={path}>
          <a onClick={() => setShowNav(false)}>
            {text}
          </a>
        </Link>
      </li>
  )
}

export default MobileNavLink

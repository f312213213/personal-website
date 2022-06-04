import React from 'react'
import Link from 'next/link'

const FooterLink = ({ link, icon }) => {
  return (
      <Link href={link}>
        <a target={'_blank'}>
          {icon}
        </a>
      </Link>
  )
}

export default FooterLink

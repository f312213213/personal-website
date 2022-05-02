import React from 'react'
import Link from "next/link";

const TechLink = ({link, icon}) => {
  return (
      <Link href={link}>
        <a target={'_blank'} className={'w-full text-5xl flex justify-center items-center'}>
          <div className={'p-4 hover:shadow-2xl transform hover:scale-110 rounded transition'}>
            {icon}
          </div>
        </a>
      </Link>
  )
}

export default TechLink

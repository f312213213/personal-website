import React from 'react'
import Link from 'next/link'

import userData from '@/constant/userData'

const Home = () => {
  return (
      <li>
        <Link href={'/'}>
          <a className={'font-extrabold'}>
            {userData.general.firstName}&apos;s site
          </a>
        </Link>
      </li>
  )
}

export default React.memo(Home)

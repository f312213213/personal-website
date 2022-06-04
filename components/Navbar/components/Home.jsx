import React from 'react'
import Link from 'next/link'

import userData from '@/constant/userData'

const Home = () => {
  return (
      <Link href={'/'}>
        <a className={'font-extrabold'}>
          {userData.general.firstName}&apos;s site
        </a>
      </Link>
  )
}

export default React.memo(Home)

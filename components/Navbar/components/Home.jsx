import React from 'react'
import Link from 'next/link'

import userData from '@/constant/userData'

const Home = () => {
  return (
      <Link href={'/'}>
        <a>
          {userData.general.firstName}
        </a>
      </Link>
  )
}

export default React.memo(Home)

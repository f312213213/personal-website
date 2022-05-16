import React from 'react'
import Image from 'next/image'
import userData from '@/constant/userData'

const Avatar = () => {
  return (
      <div className={'w-40 h-40 rounded-full border-gray-700 dark:border-white border-2 overflow-hidden relative flex justify-center'}>
        <Image src={userData.general.avatar} layout={'fill'} objectFit={'contain'} alt={'My avatar!'}/>
      </div>
  )
}

export default React.memo(Avatar)

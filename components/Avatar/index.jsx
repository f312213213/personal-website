import React from 'react'

import userData from '@/constant/userData'
import AvatarBlurImage from '@/components/BlurImage/AvatarBlurImage'

const Avatar = () => {
  return (
      <div className={'w-40 h-40 rounded-full border-gray-700 dark:border-white border-2 overflow-hidden relative flex justify-center'}>
        <AvatarBlurImage
            src={userData.general.avatar}
            alt={userData.homePage.slogan}
            priority={true}
        />
      </div>
  )
}

export default React.memo(Avatar)

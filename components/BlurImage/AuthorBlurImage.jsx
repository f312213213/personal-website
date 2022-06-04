import React from 'react'

import AvatarBlurImage from '@/components/BlurImage/AvatarBlurImage'

const AuthorBlurImage = ({ src }) => {
  return (
      <div className={'w-8 aspect-square rounded-full overflow-hidden relative flex justify-center'}>
        <AvatarBlurImage
            src={src}
        />
      </div>
  )
}

export default AuthorBlurImage

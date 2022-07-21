import React from 'react'

import BlurImage from '@/components/BlurImage'

const AuthorBlurImage = ({ src }) => {
  return (
      <div className={'w-8 aspect-square rounded-full overflow-hidden relative flex justify-center'}>
        <BlurImage
            src={src}
            alt={'Avatar'}
            priority={true}
            layout={'fill'}
        />
      </div>
  )
}

export default AuthorBlurImage

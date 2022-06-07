import React from 'react'
import Image from 'next/image'

const AvatarBlurImage = ({ src, alt, priority }) => {
  const [isLoading, setLoading] = React.useState(true)
  const cn = (...classes) => {
    return classes.filter(Boolean).join(' ')
  }

  return (
      <Image
          className={cn('duration-700 ease-in-out',
            isLoading
              ? 'scale-110 blur-2xl grayscale'
              : 'scale-100 blur-0 grayscale-0'
          )}
          layout={'fill'}
          objectFit={'contain'}
          src={src}
          alt={alt}
          priority={priority ?? false}
          onLoadingComplete={() => { setLoading(false) }}
      />
  )
}

export default AvatarBlurImage
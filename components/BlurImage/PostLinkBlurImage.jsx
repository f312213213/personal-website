import React from 'react'
import Image from 'next/image'

const PostLinkBlurImage = (props) => {
  const [mount, setMount] = React.useState(false)
  const [isLoading, setLoading] = React.useState(true)
  const cn = (...classes) => {
    return classes.filter(Boolean).join(' ')
  }

  React.useEffect(() => {
    setMount(true)
  }, [])

  return (
      <>
        {
            mount &&
            <div className={'w-full h-32 md:h-40 relative p-4'}>
              <Image
                  className={cn('duration-700 ease-in-out rounded-xl aspect-square transform group-hover:scale-[1.3]',
                    isLoading
                      ? 'scale-110 blur-2xl grayscale'
                      : 'scale-100 blur-0 grayscale-0'
                  )}
                  layout={'fill'}
                  objectFit={'cover'}
                  src={props.src}
                  alt={'Cover photo.'}
                  onLoadingComplete={() => { setLoading(false) }}
              />
            </div>
        }
      </>
  )
}

export default PostLinkBlurImage

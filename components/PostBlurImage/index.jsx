import React from 'react'
import Image from 'next/image'

const PostBlurImage = (props) => {
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
            <div className={'w-full h-48 sm:h-96 relative'}>
              <Image
                  className={cn('duration-700 ease-in-out',
                    isLoading
                      ? 'scale-110 blur-2xl grayscale'
                      : 'scale-100 blur-0 grayscale-0'
                  )}
                  layout={'fill'}
                  objectFit='contain'
                  {...props}
                  onLoadingComplete={() => { setLoading(false) }}
              />
            </div>
        }
      </>
  )
}

export default PostBlurImage

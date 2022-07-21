import React from 'react'
import BlurImage from '@/components/BlurImage'

const PostLinkBlurImage = (props) => {
  const [mount, setMount] = React.useState(false)

  React.useEffect(() => {
    setMount(true)
  }, [])

  return (
      <>
        {
            mount &&
            <div className={'w-full h-32 md:h-40 relative p-4 post-link-card rounded-xl overflow-hidden'}>
              <BlurImage
                  src={props.src}
                  layout={'fill'}
                  alt={props.alt}
              />
            </div>
        }
      </>
  )
}

export default PostLinkBlurImage

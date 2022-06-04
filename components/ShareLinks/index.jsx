import React from 'react'
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton
} from 'next-share'
import { BsFacebook, BsTwitter, BsLinkedin } from 'react-icons/bs'
import { useRouter } from 'next/router'

const ShareLinks = ({ title }) => {
  const router = useRouter()
  return (
      <div className={'w-full flex justify-center mb-4'}>
        <div className={'flex w-1/3 items-center justify-around'}>
          <FacebookShareButton
              url={`https://chiendavid.com${router.asPath}`}
              quote={title}
              hashtag={'#tech'}
          >
            <BsFacebook size={22} />
          </FacebookShareButton>
          <TwitterShareButton
              url={`https://chiendavid.com${router.asPath}`}
              title={title}
          >
            <BsTwitter size={22} />
          </TwitterShareButton>
          <LinkedinShareButton url={`https://chiendavid.com${router.asPath}`}>
            <BsLinkedin size={22} />
          </LinkedinShareButton>
        </div>
      </div>
  )
}

export default ShareLinks

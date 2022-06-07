import React from 'react'
import Link from 'next/link'

import PostLinkBlurImage from '@/components/BlurImage/PostLinkBlurImage'

const LinkCard = ({ type, latest }) => {
  switch (type) {
    case 'blog': {
      return (
          <Link href={`/blog/${latest.slug}`} scroll={true}>
            <a className={'relative w-full flex flex-col p-2 rounded-xl group transition transform'}>
              <PostLinkBlurImage src={latest.coverPhoto.url} />
              <div className={'pt-4'}>
                <h1 className={'font-semibold text-xl dark:text-gray-200 text-gray-700 text-left'}>
                  {latest.title}
                </h1>
              </div>
            </a>
          </Link>
      )
    }
    case 'project': {
      return (
          <a
              href={latest.svn_url}
              target={'_blank'}
              className="w-full flex flex-col h-full border-2 p-4 rounded-xl hover:border-blue-400 group transition transform hover:scale-110" rel="noreferrer">
            <h1 className="font-semibold text-xl dark:text-gray-200 text-gray-700 text-left whitespace-nowrap text-ellipsis overflow-hidden">
              {latest.name}
            </h1>
            <div className="font-semibold flex flex-row space-x-2 w-full items-center ">
              <p>View Repository </p>
              <div>
                &rarr;
              </div>
            </div>
          </a>
      )
    }
    default: {
      return null
    }
  }
}

export default LinkCard

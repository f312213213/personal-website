import React from 'react'
import Link from 'next/link'
import { GraphQLClient, gql } from 'graphql-request'

import Page from '@/components/Page'

const graphCms = new GraphQLClient(
  'https://api-ap-northeast-1.graphcms.com/v2/cl3o4oihs4ln601z1cvixb8fj/master'
)

const QUERY = gql`
  {
    posts {
      title,
      id,
      datePost,
      slug
    }
  }
`

const BLog = () => {
  const [posts, setPosts] = React.useState(null)
  const getSomePost = async () => {
    const { posts } = await graphCms.request(QUERY)
    setPosts(posts)
  }
  React.useEffect(() => {
    getSomePost()
  }, [])

  return (
      <Page title={'My Blog - David'} description={'You can find some posts by me on this page.'}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mt-10 mb-10 sm:gap-y-20">
          {
            posts
              ? posts.map((latestPost) => (
                    <PostCard latestPost={latestPost} key={latestPost.id} />
              ))
              : [1, 2, 3, 4].map(num => <PostCardLoader key={num} />)
          }
        </div>
      </Page>
  )
}

const PostCard = ({ latestPost }) => {
  return (
      <Link href={`/blog/${latestPost.slug}`}>
        <a
            className="w-full flex flex-col h-full border-2 p-4 rounded-xl hover:border-blue-400 group transition transform hover:scale-110" rel="noreferrer">
          <h1 className="font-semibold text-xl dark:text-gray-200 text-gray-700 text-left whitespace-nowrap text-ellipsis overflow-hidden">
            {latestPost.title}
          </h1>
          <div className="font-semibold flex flex-row space-x-2 w-full items-center ">
            <p>View Post </p>
            <div className="transform  group-hover:translate-x-2 transition duration-300">
              &rarr;
            </div>
          </div>
        </a>
      </Link>
  )
}

const PostCardLoader = () => {
  return (
      <div className="w-full h-full border-2 p-4 rounded-xl">
        <div className={'animate-pulse  flex flex-col space-y-3'}>
          <div className={'h-2 bg-slate-700 rounded w-40'}/>
          <div className={'h-2 bg-slate-700 rounded w-20'}/>
        </div>
      </div>
  )
}

export default BLog

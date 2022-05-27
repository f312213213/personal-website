import React from 'react'
import { gql, GraphQLClient } from 'graphql-request'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

import Page from '@/components/Page'
import PostBlurImage from '@/components/PostBlurImage'

const graphCms = new GraphQLClient(
  'https://api-ap-northeast-1.graphcms.com/v2/cl3o4oihs4ln601z1cvixb8fj/master'
)

const QUERY_POSTS = gql`
  {
    posts {
      slug
    }
  }
`

const Post = ({ post, source }) => {
  return (
      <Page title={`${post.title} - David`} description={post.title} image={post.coverPhoto?.url ?? undefined} date={post.datePost}>
        <div className="prose prose-lg mt-20 dark:prose-invert max-w-none mt-4 text-left">
          <MDXRemote {...source} components={{ img: PostBlurImage }} />
        </div>
      </Page>
  )
}

export const getStaticProps = async ({ params }) => {
  const QUERY_POST = gql`
  {
    posts(where: {slug: "${params.slug}"}) {
      title
      datePost
      slug
      coverPhoto{
        url
      }
      content{
        html
        markdown
      }
    }
  }
`
  const { posts } = await graphCms.request(QUERY_POST)
  return {
    props: {
      post: posts[0],
      source: await serialize(posts[0].content.markdown)
    }
  }
}

export const getStaticPaths = async () => {
  const { posts } = await graphCms.request(QUERY_POSTS)
  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false
  }
}

export default Post

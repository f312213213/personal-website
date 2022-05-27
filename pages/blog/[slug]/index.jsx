import React from 'react'
import { gql, GraphQLClient } from 'graphql-request'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import he from 'he'

import Page from '@/components/Page'

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

const Post = ({ post, content }) => {
  return (
      <Page title={`${post.title} - David`} description={post.title}>
        <div className="prose prose-lg dark:prose-invert max-w-none mt-4" dangerouslySetInnerHTML={{ __html: content }} />
      </Page>
  )
}

export const getStaticProps = async ({ params }) => {
  const QUERY_POST = gql`
  {
    posts(where: {slug: "${params.slug}"}) {
      title
      id
      slug
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
      content: posts[0].content.html
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

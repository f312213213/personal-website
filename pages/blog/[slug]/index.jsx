import React from 'react'
import { gql, GraphQLClient } from 'graphql-request'
import Page from '@/components/Page'
const graphCms = new GraphQLClient(
  'https://api-ap-northeast-1.graphcms.com/v2/cl3o4oihs4ln601z1cvixb8fj/master'
)

const QUERY_POST = gql`
  {
    posts(where: {slug: "a-new-blog"}) {
      title
      id
      slug
      content{
        html
      }
    }
  }
`

const QUERY_POSTS = gql`
  {
    posts {
      slug
    }
  }
`

const Post = ({ posts }) => {
  return (
      <Page title={`${posts[0].title} - David`} description={posts[0].title}>
        <div dangerouslySetInnerHTML={{ __html: posts[0].content.html }} />
      </Page>
  )
}

export const getStaticProps = async () => {
  const { posts } = await graphCms.request(QUERY_POST)
  return {
    props: { posts }
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

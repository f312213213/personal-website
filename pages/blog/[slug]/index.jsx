import React from 'react'
import { gql, GraphQLClient } from 'graphql-request'
import { RichText } from '@graphcms/rich-text-react-renderer'

import Page from '@/components/Page'
import PostBlurImage from '@/components/BlurImage/PostBlurImage'
import ShareLinks from '@/components/ShareLinks'
import AuthorBlurImage from '@/components/BlurImage/AuthorBlurImage'

const graphCms = new GraphQLClient(
  'https://api-ap-northeast-1.graphcms.com/v2/cl3o4oihs4ln601z1cvixb8fj/master'
)

const Post = ({ post, content }) => {
  return (
      <Page
          title={`${post.title} - David`}
          keyword={post.keyword}
          description={post.description}
          image={post.coverPhoto?.url ?? undefined}
          date={post.datePost}
          author={post.author.username}
      >
        <article className="prose prose-lg mt-20 dark:prose-invert max-w-none mt-4 text-left">
          <h1>{post.title}</h1>
          <section className={'flex items-center space-x-2 text-sm'}>
            <AuthorBlurImage src={post.author.avatar.url} />
            <p>
              {post.author.username} / {post.datePost}
            </p>
          </section>
          <ShareLinks title={post.title} />
          <PostBlurImage src={post.coverPhoto.url} alt={post.title} height={post.coverPhoto.height} width={post.coverPhoto.width} />
          <RichText
              content={content}
              renderers={{
                img: ({ src, title, height, width }) => <PostBlurImage src={src} alt={title} height={height} width={width} />,
                a: ({ children, href }) => <a href={href} target={'_blank'} rel="noreferrer">{children}</a>
              }}
          />
        </article>
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
      keyword
      description
      coverPhoto{
        url
        height
        width
      }
      content{
        raw
      }
      author {
        username
        avatar {
          url
        }
      }
    }
  }
`
  const { posts } = await graphCms.request(QUERY_POST)
  return {
    props: {
      post: posts[0],
      content: posts[0].content.raw
    }
  }
}

export const getStaticPaths = async () => {
  const QUERY_POSTS = gql`
  {
    posts {
      slug
    }
  }
`
  const { posts } = await graphCms.request(QUERY_POSTS)
  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false
  }
}

export default Post

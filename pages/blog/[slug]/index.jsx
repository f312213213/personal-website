import React from 'react'
import { gql, GraphQLClient } from 'graphql-request'
import { RichText } from '@graphcms/rich-text-react-renderer'

import Page from '@/components/Page'
import PostBlurImage from '@/components/BlurImage/PostBlurImage'
import ShareLinks from '@/components/ShareLinks'
import AuthorBlurImage from '@/components/BlurImage/AuthorBlurImage'
import H2 from '@/components/H2'
import ToC from '@/components/ToC'

const graphCms = new GraphQLClient(
  'https://api-ap-northeast-1.graphcms.com/v2/cl3o4oihs4ln601z1cvixb8fj/master'
)

const Post = ({ post, content, anchor }) => {
  return (
      <Page
          title={`${post.title} - David`}
          keyword={post.keyword}
          description={post.description}
          image={post.coverPhoto?.url ?? undefined}
          date={post.datePost}
          author={post.author.username}
      >
        <article className="prose prose-lg sm:mt-20 dark:prose-invert max-w-none text-left">
          <h1 className={'text-3xl sm:text-4xl'}>{post.title}</h1>
          <section className={'flex items-center space-x-2 text-sm'}>
            <AuthorBlurImage src={post.author.avatar.url} />
            <p>
              {post.author.username} / {post.datePost}
            </p>
          </section>
          <ToC anchor={anchor} />
          <ShareLinks title={post.title} />
          <PostBlurImage src={post.coverPhoto.url} alt={post.title} height={post.coverPhoto.height} width={post.coverPhoto.width} priority={true} />
          <RichText
              content={content}
              renderers={{
                img: ({ src, title, height, width }) => <PostBlurImage src={src} alt={title} height={height} width={width} priority={false} />,
                a: ({ children, href }) => <a href={href} target={'_blank'} rel="noreferrer">{children}</a>,
                h2: ({ children }) => <H2>{children}</H2>
              }}
          />
        </article>
      </Page>
  )
}

export const getStaticProps = async ({ params, locale }) => {
  const QUERY_POST = gql`
  {
    posts(where: {slug: "${params.slug}"}, locales: ${locale}) {
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
      content: posts[0].content.raw,
      anchor: posts[0].content.raw.children
        .filter(children => (children.type === 'heading-two'))
        .map(h2 => (h2.children[0].text))
    }
  }
}

export const getStaticPaths = async ({ locales }) => {
  const QUERY_POSTS = gql`
  {
    posts {
      slug
    }
  }
`
  const { posts } = await graphCms.request(QUERY_POSTS)
  const paths = posts
    .map((post) => locales.map((locale) => ({
      params: { slug: post.slug },
      locale
    })))
    .flat()
  return {
    paths,
    fallback: false
  }
}

export default Post

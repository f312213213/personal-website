import React from 'react'
import { GraphQLClient, gql } from 'graphql-request'

import Page from '@/components/Page'
import LinkCard from '@/components/LinkCard'
import CardLoader from '@/components/LinkCard/CardLoader'

const BLog = ({ posts }) => {
  return (
      <Page title={'My Blog - David'} description={'You can find some posts by me on this page.'}>
        <div className={'mt-20 flex-col space-y-8 flex-center'}>
          <h2 className={'text-black text-4xl font-extrabold dark:text-gray-50'}>
            My Blog
          </h2>
          <p className={'text-black opacity-70 dark:text-gray-50'}>
            Here are some posts by me, wanna see more?
          </p>
        </div>
        <div className={'grid mx-auto my-10 gap-8 grid-cols-1 md:grid-cols-2'}>
          {
            posts
              ? posts.map((latestPost) => (
                    <LinkCard type={'blog'} latest={latestPost} key={latestPost.id} />
              ))
              : [1, 2, 3, 4].map(num => <CardLoader key={num} />)
          }
        </div>
      </Page>
  )
}

export const getStaticProps = async ({ locale }) => {
  const graphCms = new GraphQLClient(
    'https://api-ap-northeast-1.graphcms.com/v2/cl3o4oihs4ln601z1cvixb8fj/master'
  )

  const QUERY = gql`
      {
        posts(orderBy: datePost_DESC, locales: ${locale}) {
          title
          id
          keyword
          datePost
          slug
          coverPhoto {
            url
          }
        }
      }
    `
  const { posts } = await graphCms.request(QUERY)
  return {
    props: {
      posts
    }
  }
}

export default BLog

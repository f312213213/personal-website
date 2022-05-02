import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Footer from '@/components/Footer'

const Page = ({ children, ...customMeta }) => {
  const router = useRouter()
  const meta = {
    title: 'David - Learning, Developing and Writing',
    description: 'I am a student passionate about web development. Get in touch with me to know more.',
    image: '/david.jpg',
    type: 'website',
    ...customMeta
  }
  return (
      <>
        <Head>
          <title>{meta.title}</title>
          <meta name="robots" content="follow, index" />
          <meta content={meta.description} name="description" />
          <meta
              property="og:url"
              content={`https://chiendavid.com${router.asPath}`}
          />
          <link
              rel="canonical"
              href={`https://chiendavid.com${router.asPath}`}
          />
          <meta property="og:type" content={meta.type} />
          <meta property="og:site_name" content="David" />
          <meta property="og:description" content={meta.description} />
          <meta property="og:title" content={meta.title} />
          <meta property="og:image" content={meta.image} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@f312212213" />
          <meta name="twitter:title" content={meta.title} />
          <meta name="twitter:description" content={meta.description} />
          <meta name="twitter:image" content={meta.image} />
          {meta.date && (
              <meta property="article:published_time" content={meta.date} />
          )}
        </Head>
        <main className={'min-h-screen w-full relative'}>
          <div>{children}</div>
          <Footer />
        </main>
      </>
  )
}

export default Page

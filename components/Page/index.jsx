import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Script from 'next/script'
import { motion } from 'framer-motion'

import userData from '@/constant/userData'

const Page = ({ children, ...customMeta }) => {
  const router = useRouter()
  const meta = {
    title: 'David - Learning, Developing and Writing',
    description: 'I am a student passionate about web development. Get in touch with me to know more.',
    image: userData.general.avatar,
    type: 'website',
    ...customMeta
  }
  return (
      <>
        <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-TP0XQPDH1G"
            strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-TP0XQPDH1G');
        `}
        </Script>
        <Head>
          <title>{meta.title}</title>
          <meta name="robots" content="follow, index" />
          <meta content={meta.description} name="description" />
          <meta name="url" itemProp="url" content={`https://chiendavid.com${router.asPath}`} />
          <meta
              property="og:url"
              content={`https://chiendavid.com${router.asPath}`}
          />
          <link
              rel="canonical"
              href={`https://chiendavid.com${router.asPath}`}
          />
          <meta property="og:type" content={meta.type} />
          <meta property="og:site_name" content={userData.general.firstName} />
          <meta property="og:description" content={meta.description} />
          <meta property="og:title" content={meta.title} />
          <meta property="og:image" content={meta.image ?? userData.general.avatar} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@yeeggg__" />
          <meta name="twitter:title" content={meta.title} />
          <meta name="twitter:description" content={meta.description} />
          <meta name="twitter:image" content={meta.image ?? userData.general.avatar} />
          <meta charSet="utf-8" />
          {
            meta.author && <meta property="article:author" content={meta.author} />
          }
          {
            meta.date && <meta property="article:published_time" content={meta.date} />
          }
          {
            meta.keyword && <meta name="keywords" content={meta.keyword} />
          }
        </Head>
        <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={'min-h-screen w-full relative px-8 flex justify-center text-center dark:bg-[#121212] '}>
          <div className={'sm:max-w-2xl max-w-xs mx-auto scroll-smooth'}>
            {children}
          </div>
        </motion.main>
      </>
  )
}

export default Page

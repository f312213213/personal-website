import React from 'react'
import Page from '@/components/Page'

import ContactMeButton from '@/components/Buttons/ContactMeButton'
import BigLinkButton from '@/components/Buttons/BigLinkButton'
import userData from '@/constant/userData'
import Avatar from '@/components/Avatar'

const Home = () => {
  return (
    <Page>
      <div className={'w-full h-screen flex flex-col justify-center items-center relative -top-10'}>
        <div className={'flex flex-col items-center pb-8'}>
          <Avatar />
          <h1 className={'mt-8 sm:text-6xl text-4xl dark:text-gray-50 font-extrabold whitespace-nowrap'}>{userData.general.firstName} {userData.general.lastName}</h1>
          <h3 className={'mt-4 text-black dark:text-gray-50 opacity-70 text-2xl whitespace-nowrap'}>{userData.homePage.slogan}</h3>
        </div>
        <div className={'flex flex-col space-y-8 justify-center items-center'}>
          <p className={'text-black opacity-70 dark:text-gray-50'}>
            {userData.homePage.introduction}
          </p>
          <BigLinkButton path={'/about'} text={'More About Me'} />
        </div>
      </div>
      <div className={'flex flex-col space-y-8 justify-center items-center mb-16'}>
        <h2 className={'text-black text-4xl font-extrabold dark:text-gray-50'}>
          Get In Touch
        </h2>
        <p className={'text-black opacity-70 dark:text-gray-50'}>
          My inbox is always open for you. Feel free to ask me anything!
        </p>
        <ContactMeButton />
      </div>
    </Page>
  )
}

export default Home

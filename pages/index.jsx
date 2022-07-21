import React from 'react'
import Page from '@/components/Page'

import ContactMeButton from '@/components/Buttons/ContactMeButton'
import BigLinkButton from '@/components/Buttons/BigLinkButton'
import userData from '@/constant/userData'
import Avatar from '@/components/Avatar'

const Home = () => {
  return (
    <Page>
      <div className={'w-full h-screen flex-col flex-center'}>
        <div className={'flex flex-col items-center mb-8'}>
          <Avatar />
          <h1 className={'mt-8 sm:text-6xl text-4xl dark:text-gray-50 font-extrabold whitespace-nowrap font-mono'}>{userData.general.firstName} {userData.general.lastName}</h1>
          <h3 className={'mt-4 text-black dark:text-gray-50 opacity-70 text-2xl whitespace-nowrap'}>{userData.homePage.slogan}</h3>
        </div>
        <div className={'flex-col space-y-8 flex-center'}>
          <p className={'text-black opacity-70 dark:text-gray-50'}>
            {userData.homePage.introduction}
          </p>
          <BigLinkButton path={'/about'} text={'More About Me'} />
        </div>
      </div>
    </Page>
  )
}

export default Home

import React from 'react'
import Image from 'next/image'
import Page from '@/components/Page'

import { ContactDialogContext } from '@/context/useContactDialog'
import ContactMeButton from '@/components/Buttons/ContactMeButton'
import BigLinkButton from '@/components/Buttons/BigLinkButton'
import userData from '@/constant/userData'
import Avatar from '@/components/Avatar'

const Home = () => {
  const { openContactDialog } = React.useContext(ContactDialogContext)
  return (
    <Page>
      <div className={'flex flex-col items-center p-14 pb-8'}>
        <Avatar />
        <h1 className={'mt-8 sm:text-6xl text-4xl dark:text-gray-50 font-extrabold whitespace-nowrap'}>{userData.general.firstName} {userData.general.lastName}</h1>
        <p className={'mt-4 text-black dark:text-gray-50 opacity-70 text-2xl whitespace-nowrap'}>{userData.homePage.slogan}</p>
      </div>
      <div className={'mt-8 flex flex-col space-y-8 justify-center items-center'}>
        <p className={'text-black opacity-70 dark:text-gray-50'}>
          {userData.homePage.introduction}
        </p>
        <BigLinkButton path={'/about'} text={'More About Me'} />
      </div>
      <div className={'mt-36 sm:mt-44 flex flex-col space-y-8 justify-center items-center mb-16'}>
        <h2 className={'text-black text-4xl font-extrabold dark:text-gray-50'}>
          Get In Touch
        </h2>
        <p className={'text-black opacity-70 dark:text-gray-50'}>
          My inbox is always open for you. Feel free to ask me anything!
        </p>
        <ContactMeButton onClick={openContactDialog} />
      </div>
    </Page>
  )
}

export default Home

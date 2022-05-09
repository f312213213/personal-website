import React from 'react'

import Page from '@/components/Page'
import TechLink from '@/components/TechLink'
import ExperienceRow from '@/components/ExperienceRow'
import userData from '@/constant/userData'

const About = () => {
  return (
      <Page title={'About - David'} description={'I\'m a student and frontend developer living in Taipei. You can find more information on this page.'}>
        <div className={'mt-20 flex flex-col space-y-8 justify-center mb-16'}>
          <h1 className={'text-black text-4xl font-extrabold dark:text-gray-50'}>
            Student with Passionate
          </h1>
          <p className={'text-black opacity-70 dark:text-gray-50 sm:text-left'}>
            I&apos;m a student and frontend developer living in Taipei.
          </p>
          <p className={'text-black opacity-70 dark:text-gray-50 sm:text-left'}>
            During my free time I like going gym, doing Bench Press. You can also find some cool music festival live on my
            <a href={userData.aboutPage.mainSocial.link} target={'_blank'} className={'font-bold'} rel="noreferrer">{userData.aboutPage.mainSocial.type}</a>.
          </p>
          <p className={'text-black opacity-70 dark:text-gray-50 sm:text-left'}>
            You can find my cv when you click <a target={'_blank'}
              href={userData.aboutPage.cvLink} className={'font-bold'} rel="noreferrer">me</a>.
          </p>
        </div>

        <div className={'mt-20 flex flex-col space-y-8 justify-center items-center mb-16'}>
          <h2 className={'text-black text-2xl font-extrabold dark:text-gray-50'}>
            Technologies I frequently use
          </h2>
          <div className={'grid grid-cols-3 w-full mt-20 gap-6'}>
            {
              userData.aboutPage.frequentUseTech.map(tech => <TechLink key={tech.text} link={tech.link} icon={tech.icon} text={tech.text} />)
            }
          </div>
        </div>

        <div className={'mt-20 flex flex-col space-y-8 justify-center items-center mb-16'}>
          <h2 className={'text-black text-2xl font-extrabold dark:text-gray-50'}>
            Experiences
          </h2>
          <ul className={'flex flex-col w-full divide-y'}>
            {
              userData.aboutPage.experience.map(e => <ExperienceRow key={e.companyName} companyName={e.companyName} timeLine={e.timeLine} description={e.description} />)
            }
          </ul>
        </div>
      </Page>
  )
}

export default About

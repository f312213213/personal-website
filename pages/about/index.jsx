import React from 'react'
import { FaReact } from 'react-icons/fa'
import { SiFirebase, SiNextdotjs, SiJira, SiTailwindcss, SiPython, SiJavascript, SiJetbrains } from 'react-icons/si'
import { MdOutlineCloudQueue } from 'react-icons/md'

import Page from '@/components/Page'
import TechLink from '@/components/TechLink'
import ExperienceRow from '@/components/ExperienceRow'

const About = () => {
  return (
      <Page title={'About - David'}>
        <div className={'mt-20 flex flex-col space-y-8 justify-center mb-16'}>
          <h1 className={'text-black text-4xl font-extrabold dark:text-gray-50'}>
            Student and passionate
          </h1>
          <p className={'text-black opacity-70 dark:text-gray-50 sm:text-left'}>
            I&apos;m a student and frontend developer living in Taipei.
          </p>
          <p className={'text-black opacity-70 dark:text-gray-50 sm:text-left'}>
            During my free time I like going gym, doing Bench Press. You can also find some cool music festival live on my <a
              href="https://www.instagram.com/yeeggg_/" target={'_blank'} className={'font-bold'} rel="noreferrer">Instagram</a>.
          </p>
          <p className={'text-black opacity-70 dark:text-gray-50 sm:text-left'}>
            You can also find my cv when you click  <a target={'_blank'}
              href="https://file.chiendavid.com/cv.pdf" className={'font-bold'} rel="noreferrer">me</a>.
          </p>
        </div>

        <div className={'mt-20 flex flex-col space-y-8 justify-center items-center mb-16'}>
          <h2 className={'text-black text-2xl font-extrabold dark:text-gray-50'}>
            Technologies I frequently use
          </h2>
          <div className={'grid grid-cols-3 w-full mt-20 gap-6'}>
            <TechLink link={'https://reactjs.org/'} icon={<FaReact />} text={'React.js'} />
            <TechLink link={'https://firebase.google.com/'} icon={<SiFirebase />} text={'Firebase'} />
            <TechLink link={'https://nextjs.org/'} icon={<SiNextdotjs />} text={'Next.js'} />
            <TechLink link={'https://www.atlassian.com/software/jira'} icon={<SiJira />} text={'Jira'} />
            <TechLink link={'https://cloud.google.com/'} icon={<MdOutlineCloudQueue />} text={'GCP'} />
            <TechLink link={'https://tailwindcss.com/'} icon={<SiTailwindcss />} text={'Tailwind.css'} />
            <TechLink link={'https://www.python.org/'} icon={<SiPython />} text={'Python'} />
            <TechLink link={'https://www.javascript.com/'} icon={<SiJavascript />} text={'Javascript'} />
            <TechLink link={'https://www.jetbrains.com/'} icon={<SiJetbrains />} text={'Jetbrains'} />
          </div>
        </div>

        <div className={'mt-20 flex flex-col space-y-8 justify-center items-center mb-16'}>
          <h2 className={'text-black text-2xl font-extrabold dark:text-gray-50'}>
            Experiences
          </h2>
          <div className={'flex flex-col w-full divide-y'}>
            <ExperienceRow companyName={'dimorder'} timeLine={'2022 - Now'} description={'Designed and built a delivery platform for customer in HK, which reported by several media.'} />
            <ExperienceRow companyName={'GDSC - NTPU'} timeLine={'2021 - Now'} description={'Lead a community in my college, introduce google products, basic programming skills to other students.'} />
            <ExperienceRow companyName={'NTPU'} timeLine={'2019 - Now'} description={'Major in computer science'} />
          </div>
        </div>
      </Page>
  )
}

export default About

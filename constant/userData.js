import { FaReact } from 'react-icons/fa'
import React from 'react'
import { SiFirebase, SiJavascript, SiJetbrains, SiJira, SiNextdotjs, SiPython, SiTailwindcss } from 'react-icons/si'
import { MdOutlineCloudQueue } from 'react-icons/md'

export default {
  homePage: {
    slogan: 'I build website.',
    introduction: 'I am a self-motivated student in CS area, seeking for an intern position, hoping to learn more about web or software development in real business production.'
  },
  aboutPage: {
    frequentUseTech: [
      {
        text: 'React.js',
        link: 'https://reactjs.org/',
        icon: <FaReact />
      },
      {
        text: 'Firebase',
        link: 'https://firebase.google.com/',
        icon: <SiFirebase />
      },
      {
        text: 'Next.js',
        link: 'https://nextjs.org/',
        icon: <SiNextdotjs />
      },
      {
        text: 'Jira',
        link: 'https://www.atlassian.com/software/jira',
        icon: <SiJira />
      },
      {
        text: 'GCP',
        link: 'https://cloud.google.com/',
        icon: <MdOutlineCloudQueue />
      },
      {
        text: 'Tailwind.css',
        link: 'https://tailwindcss.com/',
        icon: <SiTailwindcss />
      },
      {
        text: 'Python',
        link: 'https://www.python.org/',
        icon: <SiPython />
      },
      {
        text: 'Javascript',
        link: 'https://www.javascript.com/',
        icon: <SiJavascript />
      },
      {
        text: 'Jetbrains',
        link: 'https://www.jetbrains.com/',
        icon: <SiJetbrains />
      }
    ],
    experience: [
      {
        companyName: 'dimorder',
        timeLine: '2022 - Now',
        description: 'Designed and built a delivery platform for customer in HK, which reported by several media.'
      },
      {
        companyName: 'GDSC - NTPU',
        timeLine: '2021 - Now',
        description: 'Lead a community in my college, introduce google products, basic programming skills to other students.'
      },
      {
        companyName: 'NTPU',
        timeLine: '2019 - Now',
        description: 'Major in computer science.'
      }
    ],
    mainSocial: {
      type: 'Instagram',
      link: 'https://www.instagram.com/yeeggg_/'
    },
    cvLink: 'https://file.chiendavid.com/cv.pdf'

  },
  general: {
    avatar: '/david.jpg',
    firstName: 'David',
    lastName: 'Chien',
    socialID: {
      instagram: 'yeeggg_',
      github: 'f312213213',
      linkedin: 'davidchien419'
    }
  }
}
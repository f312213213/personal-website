import React from 'react'
import Image from 'next/image'
import Page from '@/components/Page'
import Link from 'next/link'
import {AiOutlineArrowRight} from 'react-icons/ai'
import { ContactDialogContext } from "@/context/useContactDialog";

const Home = () => {
  const { toggleContactDialog } = React.useContext(ContactDialogContext)
  return (
    <Page>
      <div className={'flex flex-col items-center p-14 mt-8 pb-8'}>
        <div className={'w-40 h-40 rounded-full border-white border-2 overflow-hidden relative flex justify-center'}>
          <Image src={'/david.jpg'} layout={'fill'} objectFit={'contain'}/>
        </div>
        <h1 className={'mt-8 text-6xl dark:text-gray-50 font-extrabold whitespace-nowrap'}>David Chien</h1>
        <p className={'mt-4 text-black dark:text-gray-50 opacity-70 text-2xl'}>I build website.</p>
      </div>
      <div className={'mt-8 flex flex-col space-y-8 justify-center items-center'}>
        <p className={'text-black opacity-70 dark:text-gray-50'}>
          I am a self-motivated student in CS area seeking for an intern position, hoping to learn more about web or software development in real business production
        </p>
        <Link href={'/about'}>
          <a className={'bg-black text-gray-50 mt-8 text-2xl p-4 rounded-xl flex items-center transform hover:scale-110 transition'}>
            More About Me
            <AiOutlineArrowRight />
          </a>
        </Link>
      </div>
      <div className={'mt-52 flex flex-col space-y-8 justify-center items-center mb-16'}>
        <h2 className={'text-black text-4xl font-extrabold dark:text-gray-50'}>
          Get In Touch
        </h2>
        <p className={'text-black opacity-70 dark:text-gray-50'}>
          My inbox is always open for you. Feel free to ask me anything!
        </p>
        <button className={'bg-black  text-gray-50 mt-8 text-2xl p-4 rounded-xl flex items-center transform hover:scale-110 transition'} onClick={toggleContactDialog}>
          <span className={'animate-bounce mr-4'}>
           👋
          </span>
          Contact me
        </button>
      </div>
    </Page>
  )
}

export default Home

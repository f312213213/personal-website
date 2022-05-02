import React from 'react'
import Page from '@/components/Page'

const Projects = () => {
  return (
      <Page title={'Projects - David'}>
        <div className={'mt-52 flex flex-col space-y-8 justify-center items-center mb-16'}>
          <h2 className={'text-black text-4xl font-extrabold dark:text-gray-50'}>
            Get In Touch
          </h2>
          <p className={'text-black opacity-70 dark:text-gray-50'}>
            My inbox is always open for you. Feel free to ask me anything!
          </p>
          <button className={'bg-black  text-gray-50 mt-8 text-2xl p-4 rounded-xl flex items-center transform hover:scale-110 transition'}>
          <span className={'animate-bounce mr-4'}>
           👋
          </span>
            Contact me
          </button>
        </div>
      </Page>
  )
}

export const getServerSideProps = async () => {
  const response = await fetch('https://api.github.com/users/f312213213/repos?per_page=6&sort=pushed&page=1')
  const repos = await response.json()
  console.log(repos)
  return {
    props: { repos }
  }
}

export default Projects

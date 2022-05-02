import React from 'react'
import Page from '@/components/Page'
import { AiOutlineArrowDown } from "react-icons/ai";
import Link from "next/link";

const Projects = ({repos}) => {
  return (
      <Page title={'Projects - David'}>
        <div className={'mt-20 flex flex-col space-y-8 justify-center items-center mb-16'}>
          <h2 className={'text-black text-4xl font-extrabold dark:text-gray-50'}>
            Latest Code
          </h2>
          <p className={'text-black opacity-70 dark:text-gray-50'}>
            I'm always working on new projects.
          </p>
          <Link href={'https://github.com/f312213213'}>
            <a target={'_blank'} className={'bg-black text-gray-50 mt-8 text-xl md:text-2xl p-4 rounded-xl flex items-center transform hover:scale-110 transition'}>
              View my Github
              <div className={'animate-bounce ml-2'}>
                <div className={'transform -rotate-90'}>
                  <AiOutlineArrowDown />
                </div>
              </div>
            </a>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl mx-auto mt-10 mb-10 sm:gap-y-20">
          {
            repos && repos.map((latestRepo, idx) => (
                  <GithubRepoCard latestRepo={latestRepo} key={idx} />
              ))
          }
        </div>
      </Page>
  )
}

const GithubRepoCard = ({ latestRepo }) => {
  return (
      <div className="w-full flex flex-col h-full border-2 p-4 rounded-xl">
        <h1 className="font-semibold text-xl dark:text-gray-200 text-gray-700 text-left">
          {latestRepo.name}
        </h1>
        <a
            href={latestRepo.clone_url}
            target={'_blank'}
            className="font-semibold group flex flex-row space-x-2 w-full items-center items-end"
        >
          <p>View Repository </p>
          <div className="transform  group-hover:translate-x-2 transition duration-300">
            &rarr;
          </div>
        </a>
      </div>
  );
};

export const getServerSideProps = async () => {
  const response = await fetch('https://api.github.com/users/f312213213/repos?per_page=4&sort=pushed&page=1')
  const repos = await response.json()
  return {
    props: { repos }
  }
}

export default Projects

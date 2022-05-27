import React from 'react'
import Page from '@/components/Page'

import userData from '@/constant/userData'
import BigLinkButton from '@/components/Buttons/BigLinkButton'

const Projects = () => {
  const [repos, setRepos] = React.useState(null)
  const getRepos = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${userData.general.socialID.github}/repos?per_page=6&sort=pushed&page=1`)
      const repoJson = await response.json()
      setRepos(repoJson)
    } catch (e) {
      console.error(e)
    }
  }
  React.useEffect(() => {
    getRepos()
  }, [])
  return (
      <Page title={'Projects - David'} description={'Here are my recent works. Or you can find my github link inside!'}>
        <div className={'mt-20 mb-20 flex flex-col space-y-8 justify-center items-center mb-16'}>
          <h2 className={'text-black text-4xl font-extrabold dark:text-gray-50'}>
            Latest Code
          </h2>
          <p className={'text-black opacity-70 dark:text-gray-50'}>
            I&apos;m always working on new projects.
          </p>
          <BigLinkButton text={'View My Github'} path={`https://github.com/${userData.general.socialID.github}`} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mt-10 mb-10 sm:gap-y-20">
          {
            repos
              ? repos.map((latestRepo) => (
                  <GithubRepoCard latestRepo={latestRepo} key={latestRepo.id} />
              ))
              : [1, 2, 3, 4].map(num => <RepoCardLoader key={num} />)
          }
        </div>
      </Page>
  )
}

const GithubRepoCard = ({ latestRepo }) => {
  return (
      <a
          href={latestRepo.svn_url}
          target={'_blank'}
          className="w-full flex flex-col h-full border-2 p-4 rounded-xl hover:border-blue-400 group transition transform hover:scale-110" rel="noreferrer">
        <h1 className="font-semibold text-xl dark:text-gray-200 text-gray-700 text-left whitespace-nowrap text-ellipsis overflow-hidden">
          {latestRepo.name}
        </h1>
        <div className="font-semibold flex flex-row space-x-2 w-full items-center ">
          <p>View Repository </p>
          <div className="transform  group-hover:translate-x-2 transition duration-300">
            &rarr;
          </div>
        </div>
      </a>
  )
}

const RepoCardLoader = () => {
  return (
      <div className="w-full h-full border-2 p-4 rounded-xl">
        <div className={'animate-pulse  flex flex-col space-y-3'}>
          <div className={'h-2 bg-slate-700 rounded w-40'}/>
          <div className={'h-2 bg-slate-700 rounded w-20'}/>
        </div>
      </div>
  )
}

export default Projects

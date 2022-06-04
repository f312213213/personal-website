import React from 'react'
import Page from '@/components/Page'

import userData from '@/constant/userData'
import BigLinkButton from '@/components/Buttons/BigLinkButton'
import LinkCard from '@/components/LinkCard'
import CardLoader from '@/components/LinkCard/CardLoader'

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
          <BigLinkButton text={'View My Github'} path={`https://github.com/${userData.general.socialID.github}`} newtab />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mt-10 mb-10">
          {
            repos
              ? repos.map((latestRepo) => (
                  <LinkCard type={'project'} latest={latestRepo} key={latestRepo.id} />
              ))
              : [1, 2, 3, 4].map(num => <CardLoader key={num} />)
          }
        </div>
      </Page>
  )
}

export default Projects

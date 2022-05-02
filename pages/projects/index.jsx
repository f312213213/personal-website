import React from 'react'
import Page from '@/components/Page'

const Projects = () => {
  return (
      <Page title={'Projects - David'}>

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

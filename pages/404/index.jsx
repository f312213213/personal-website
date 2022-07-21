import React from 'react'
import Page from '@/components/Page'

const Custom404 = () => {
  return (
      <Page title={'404 - David'}>
        <div className={'w-full h-screen flex-center'}>
          <h1 className={'text-4xl'}>
            There Is A 404 Error!
          </h1>
        </div>
      </Page>
  )
}

export default Custom404

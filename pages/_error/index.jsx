import React from 'react'
import Page from '@/components/Page'

function Error ({ statusCode }) {
  return (
      <Page>
        <div className={'w-full h-screen flex justify-center items-center'}>
          <h1 className={'text-4xl'}>
            There Is A {statusCode} Error!
          </h1>
        </div>
      </Page>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error

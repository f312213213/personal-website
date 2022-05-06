import React from 'react'
import { useRouter } from 'next/router'

import Page from '@/components/Page'

const BLog = () => {
  const router = useRouter()
  React.useEffect(() => {
    router.push('https://blog.chiendavid.com')
  }, [])

  return (
      <Page title={'My Blog - David'} description={'You can find some posts by me on this page.'}>

      </Page>
  )
}

export default BLog

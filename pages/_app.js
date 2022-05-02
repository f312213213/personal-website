import React from 'react'
import { ThemeProvider } from 'next-themes'

import '../styles/globals.css'
import Navbar from '@/components/Navbar'
import ToggleDarkMode from '@/components/ToggleDarkMode'

function MyApp ({ Component, pageProps }) {
  return (
      <ThemeProvider enableSystem={true} attribute={'class'}>
        <Navbar />
        <Component {...pageProps} />
        <ToggleDarkMode />
      </ThemeProvider>
  )
}

export default MyApp

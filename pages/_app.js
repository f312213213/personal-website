import React from 'react'
import { ThemeProvider } from 'next-themes'

import '../styles/globals.css'
import Navbar from '@/components/Navbar'
import ToggleDarkMode from '@/components/ToggleDarkMode'
import { ContactDialogProvider } from '@/context/useContactDialog'
import ContactDialog from '@/components/ContactDialog/'

function MyApp ({ Component, pageProps }) {
  return (
      <ThemeProvider enableSystem={true} attribute={'class'}>
        <ContactDialogProvider>

          <ContactDialog />
          <Navbar />
          <Component {...pageProps} />
          <ToggleDarkMode />
        </ContactDialogProvider>
      </ThemeProvider>
  )
}

export default MyApp

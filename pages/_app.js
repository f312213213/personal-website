import React from 'react'
import { ThemeProvider } from 'next-themes'

import '../styles/globals.css'
import Navbar from '@/components/Navbar'
import ToggleDarkMode from '@/components/ToggleDarkMode'
import { ContactDialogProvider } from '@/context/useContactDialog'
import ContactDialog from '@/components/ContactDialog/'
import Footer from '@/components/Footer'

function App ({ Component, pageProps }) {
  return (
      <ThemeProvider enableSystem={true} attribute={'class'}>
        <ContactDialogProvider>
          <ContactDialog />
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </ContactDialogProvider>
        <ToggleDarkMode />
      </ThemeProvider>
  )
}

export default App

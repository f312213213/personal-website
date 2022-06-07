import React from 'react'
import { ThemeProvider } from 'next-themes'
import { AnimatePresence } from 'framer-motion'

import '../styles/globals.css'
import Navbar from '@/components/Navbar'
import { ContactDialogProvider } from '@/context/useContactDialog'
import ContactDialog from '@/components/ContactDialog/'
import Footer from '@/components/Footer'

function App ({ Component, pageProps }) {
  return (
      <ThemeProvider enableSystem={true} attribute={'class'}>
        <ContactDialogProvider>
          <ContactDialog />
          <Navbar />
          <AnimatePresence>
            <Component {...pageProps} />
          </AnimatePresence>
          <Footer />
        </ContactDialogProvider>
      </ThemeProvider>
  )
}

export default App

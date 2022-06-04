import React from 'react'

export const ContactDialogContext = React.createContext()

export const ContactDialogProvider = ({ children }) => {
  const [show, setShow] = React.useState(false)

  const openContactDialog = React.useCallback(() => {
    setShow(true)
  }, [])

  const closeContactDialog = React.useCallback(() => {
    setShow(false)
  }, [])

  return (
      <ContactDialogContext.Provider value={{ show, openContactDialog, closeContactDialog }}>
        {children}
      </ContactDialogContext.Provider>
  )
}

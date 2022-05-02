import React from 'react'

export const ContactDialogContext = React.createContext()

export const ContactDialogProvider = ({ children }) => {
  const [show, setShow] = React.useState(false)

  const toggleContactDialog = () => {
    setShow(!show)
  }

  return (
      <ContactDialogContext.Provider value={{ show, toggleContactDialog }}>
        {children}
      </ContactDialogContext.Provider>
  )
}

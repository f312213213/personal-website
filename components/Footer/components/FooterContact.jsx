import React from 'react'
import { AiFillMail } from 'react-icons/ai'
import { ContactDialogContext } from '@/context/useContactDialog'

const FooterContact = () => {
  const { openContactDialog } = React.useContext(ContactDialogContext)
  return (
      <button onClick={openContactDialog} className={'shadow-none'}>
        <AiFillMail />
      </button>
  )
}

export default FooterContact

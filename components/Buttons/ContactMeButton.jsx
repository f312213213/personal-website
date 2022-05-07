import React from 'react'
import { ContactDialogContext } from '@/context/useContactDialog'

const ContactMeButton = ({ onClick }) => {
  const { openContactDialog } = React.useContext(ContactDialogContext)
  return (
      <button className={'bg-black dark:bg-gray-50 dark:text-black text-gray-50 mt-8 text-2xl p-4 rounded-xl flex items-center transform hover:scale-110 transition'} onClick={onClick ?? openContactDialog}>
              <span className={'animate-bounce mr-4'}>
               👋
              </span>
        Contact me
      </button>
  )
}

export default React.memo(ContactMeButton)

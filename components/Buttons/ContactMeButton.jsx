import React from 'react'

const ContactMeButton = ({ onClick }) => {
  return (
      <button className={'bg-black dark:bg-gray-50 dark:text-black text-gray-50 mt-8 text-2xl p-4 rounded-xl flex items-center transform hover:scale-110 transition'} onClick={onClick}>
              <span className={'animate-bounce mr-4'}>
               👋
              </span>
        Contact me
      </button>
  )
}

export default React.memo(ContactMeButton)

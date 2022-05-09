import React from 'react'
import { ContactDialogContext } from '@/context/useContactDialog'

const ContactDialog = () => {
  const { show, closeContactDialog } = React.useContext(ContactDialogContext)
  const [sending, setSending] = React.useState(false)
  const [responseText, setResponseText] = React.useState('')
  const nameRef = React.useRef()
  const emailRef = React.useRef()
  const messageRef = React.useRef()
  const wrapperRef = React.useRef()

  React.useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [show])

  const sendMail = async (e) => {
    setSending(true)
    if (nameRef.current.value === '' || emailRef.current.value === '' || messageRef.current.value === '') return setSending(false)
    e.preventDefault()
    try {
      const response = await fetch('https://asia-east1-mysqlonengine.cloudfunctions.net/send-mail', {
        method: 'POST',
        body: JSON.stringify({
          name: nameRef.current.value,
          sender: emailRef.current.value,
          sender_msg: messageRef.current.value
        })
      })
      const res = await response.json()
      nameRef.current.value = ''
      emailRef.current.value = ''
      messageRef.current.value = ''
      setSending(false)
      setResponseText('I will get back to you ASAP.')
    } catch (e) {
      setSending(false)
      setResponseText('Something goes wrong, please try later.')
    }
  }

  React.useEffect(() => {
    if (show) {
      window.addEventListener('keydown', handleClose)
    }
    return () => {
      window.removeEventListener('keydown', handleClose)
    }
  }, [show])

  const handleClose = (e) => {
    if (e.target === wrapperRef.current || e.key === 'Escape') {
      closeContactDialog()
    }
  }

  return (
      <div className={`fixed flex justify-center items-center w-full h-screen z-50 bg-gray-300 dark:bg-gray-500 bg-opacity-80 dark:bg-opacity-80 ${!show && 'hide'}`} onClick={handleClose} ref={wrapperRef}>
        <form className="form w-11/12 sm:w-[32rem] rounded-lg bg-white dark:bg-gray-700 p-4 flex flex-col shadow-xl">
          <label htmlFor="name" className="text-sm text-gray-600 dark:text-gray-50 mx-4">
            Your Name
          </label>
          <input
              ref={nameRef}
              type="text"
              className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500"
              name="name"
              placeholder={'David'}
              required
              disabled={sending}
          />
          <label htmlFor="email" className="text-sm text-gray-600 dark:text-gray-50 mx-4 mt-4">
            Email
          </label>
          <input
              ref={emailRef}
              type="email"
              className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500"
              name="email"
              placeholder={'hi@example.com'}
              required
              disabled={sending}
          />
          <label
              htmlFor="message"
              className="text-sm text-gray-600 dark:text-gray-50 mx-4 mt-4"
          >
            Message
          </label>
          <textarea
              ref={messageRef}
              rows={5}
              className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500 resize-none"
              name={'message'}
              placeholder={'Type in some message!'}
              required
              disabled={sending}
          />
          <button
              onClick={sendMail}
              type="submit"
              className="bg-blue-500 disabled:bg-blue-300 rounded-md w-full mt-4 py-2 text-gray-50 text-sm font-bold flex justify-center"
              disabled={sending}
          >
            {
              sending
                ? <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg"
                         fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                    </svg>
                  </>
                : 'Send Message'
            }
          </button>
          <p className={'text-center mt-4'}>{responseText}</p>
        </form>
      </div>
  )
}

export default ContactDialog

import React from 'react'
import { useTheme } from 'next-themes'
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'
import { AnimatePresence, motion } from 'framer-motion'

const ToggleDarkMode = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  return (
      <motion.button
          type={'button'}
          className={'fixed hidden sm:block rounded-full p-4 bottom-4 right-4 text-2xl text-yellow-400 dark:bg-gray-50 bg-black hover:animate-spin'}
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          whileHover={{ rotate: [360, 0] }}
      >
        {
          mounted &&
            <>
              {
                theme === 'dark'
                  ? <BsFillSunFill />
                  : <BsFillMoonFill/>
              }
            </>
        }

      </motion.button>
  )
}

export default React.memo(ToggleDarkMode)

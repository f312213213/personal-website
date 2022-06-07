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
          className={'rounded-full text-2xl text-yellow-400 hover:animate-spin z-50 transition'}
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          whileHover={{ rotate: [360, 0] }}
          whileTap={{ rotate: [360, 0] }}
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

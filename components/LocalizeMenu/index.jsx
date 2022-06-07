import React from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { IoLanguageSharp } from 'react-icons/io5'
import { useRouter } from 'next/router'

const LocalizeMenu = () => {
  const [mounted, setMounted] = React.useState(false)
  const router = useRouter()

  React.useEffect(() => {
    setMounted(true)
  }, [])
  return (
      <>
        {
          mounted &&
          <DropdownMenu.Root>
            <DropdownMenu.Trigger className={'text-2xl'} >
              <IoLanguageSharp />
            </DropdownMenu.Trigger>

            <DropdownMenu.Content className={'bg-[#121212] dark:bg-gray-50 text-gray-50 dark:text-[#121212] p-2 rounded-xl sm:-top-8 relative'}>
              <>
                <DropdownMenu.Arrow className={'fill-[#121212] dark:fill-gray-50'} />
                <DropdownMenu.Item>
                  <button onClick={() => {
                    router.push(router.asPath, router.asPath, { locale: 'en' })
                  }}>
                    🇺🇸 en
                  </button>
                </DropdownMenu.Item>

                <DropdownMenu.Item><button onClick={() => {
                  router.push(router.asPath, router.asPath, { locale: 'zh' })
                }}>
                  🇹🇼 zh
                </button>
                </DropdownMenu.Item>
              </>

            </DropdownMenu.Content>
          </DropdownMenu.Root>
        }
      </>
  )
}

export default LocalizeMenu

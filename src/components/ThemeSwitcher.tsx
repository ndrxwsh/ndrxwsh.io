import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { CheckIcon, MoonIcon } from '@heroicons/react/20/solid'
import { SunIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme, themes } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <>
      <Listbox value={theme} onChange={value => setTheme(value)}>
        {({ open }) => {
          const iconClassName = clsx(
            'w-5 h-5 text-secondary hover:text-primary cursor-pointer transition-colors',
            open ? 'text-primary' : 'text-secondary'
          )
          return (
            <div className='relative'>
              <ListboxButton
                className={clsx(
                  'relative flex h-8 w-8 cursor-default items-center justify-center rounded-lg'
                )}
              >
                {resolvedTheme === 'dark' ? (
                  <MoonIcon className={iconClassName} />
                ) : (
                  <SunIcon className={iconClassName} />
                )}
              </ListboxButton>
              <AnimatePresence>
                {open && (
                  <ListboxOptions
                    as={motion.ul}
                    static
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ type: 'spring', bounce: 0.3, duration: 0.3 }}
                    className='w-42 absolute right-0 z-10 mt-2 max-h-60 origin-top-right overflow-auto rounded-xl bg-contrast p-2 text-base shadow-md focus:outline-none sm:text-sm'
                  >
                    {themes.map(theme => (
                      <ListboxOption
                        key={theme}
                        className={({ active }) =>
                          clsx(
                            'relative cursor-default select-none rounded-md py-2 pl-10 pr-4',
                            active ? 'bg-secondary' : ''
                          )
                        }
                        value={theme}
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? 'font-medium' : 'font-normal'
                              }`}
                            >
                              {theme == 'system' ? 'automatic' : theme}
                            </span>
                            {selected ? (
                              <span className='absolute inset-y-0 left-0 flex items-center pl-3 dark:text-neutral-50'>
                                <CheckIcon className='h-5 w-5' aria-hidden='true' />
                              </span>
                            ) : null}
                          </>
                        )}
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                )}
              </AnimatePresence>
            </div>
          )
        }}
      </Listbox>
    </>
  )
}

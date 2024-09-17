import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { useLocale } from 'next-intl'
import { useTransition } from 'react'

import { Locale } from '~/i18n/config'
import { setUserLocale } from '~/services/locale'

export const LangSwitcher = () => {
  const [isPending, startTransition] = useTransition()

  const onChange = (value: string) => {
    const locale = value as Locale
    startTransition(() => {
      setUserLocale(locale)
    })
  }

  const locale = useLocale()

  const isRu = locale === 'ru'
  const isEn = locale === 'en'

  return (
    <Listbox onChange={onChange}>
      {({ open }) => (
        <div className='relative'>
          <ListboxButton className='relative flex cursor-pointer items-center justify-center gap-1 rounded-md px-3 py-1 text-sm text-secondary transition-colors hover:text-primary'>
            {locale === 'en' ? (
              <div className='h-full w-full'>en</div>
            ) : (
              <div className='h-full w-full'>рус</div>
            )}

            <ChevronDownIcon
              className={`min-h-5 min-w-5 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
            />
          </ListboxButton>
          <AnimatePresence>
            {open && (
              <ListboxOptions
                as={motion.ul}
                static
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className='absolute right-0 z-10 mt-2 max-h-60 origin-top-right overflow-auto rounded-xl bg-contrast p-2 text-sm shadow-md focus:outline-none'
              >
                <ListboxOption
                  value={'en'}
                  className={clsx(
                    'relative cursor-pointer select-none rounded-md py-2 pl-10 pr-4',
                    isEn ? 'bg-secondary' : ''
                  )}
                >
                  <>
                    <span
                      className={`flex flex-row items-center gap-2 truncate ${isEn ? 'font-medium' : 'font-normal'}`}
                    >
                      english
                    </span>
                    {isEn && (
                      <span className='absolute inset-y-0 left-0 flex items-center pl-3 dark:text-neutral-50'>
                        <CheckIcon className='h-5 w-5' aria-hidden='true' />
                      </span>
                    )}
                  </>
                </ListboxOption>
                <ListboxOption
                  value={'ru'}
                  className={clsx(
                    'relative cursor-pointer select-none rounded-md py-2 pl-10 pr-4',
                    isRu ? 'bg-secondary' : ''
                  )}
                >
                  <>
                    <span
                      className={`flex flex-row items-center gap-2 truncate ${isRu ? 'font-medium' : 'font-normal'}`}
                    >
                      русский
                    </span>
                    {isRu && (
                      <span className='absolute inset-y-0 left-0 flex items-center pl-3 dark:text-neutral-50'>
                        <CheckIcon className='h-5 w-5' aria-hidden='true' />
                      </span>
                    )}
                  </>
                </ListboxOption>
              </ListboxOptions>
            )}
          </AnimatePresence>
        </div>
      )}
    </Listbox>
  )
}

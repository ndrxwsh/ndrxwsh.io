import { Metadata } from 'next'
import Image from 'next/image'
import { ReactNode } from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaTelegram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

import Places from '~/components/Places'
import { Link, Section } from '~/components/ui'

import kgeuLogo from '../../../public/education/kgeu.png'
import first from '../../../public/gallery/2.jpg'
import second from '../../../public/gallery/3.jpg'
import third from '../../../public/gallery/me.jpg'
import mageinnLogo from '../../../public/work/mageinn.png'

export const metadata: Metadata = {
  title: 'About | andrxw66',
  description: 'Kazan-based Software Engineer'
}

export default function About() {
  return (
    <div className='flex flex-col gap-16 md:gap-24'>
      <div>
        <h1 className='animate-in text-3xl font-bold tracking-tight text-primary'>About</h1>
        <p className='animate-in text-secondary' style={{ '--index': 1 } as React.CSSProperties}>
          A glimpse into me.
        </p>
      </div>
      <div className='mb-8 md:hidden'>
        <div className='animate-in' style={{ '--index': 1 } as React.CSSProperties}>
          <Image
            src={first}
            alt={'me'}
            width={324}
            height={139}
            className='pointer-events-none relative inset-0 h-60 -rotate-6 rounded-xl bg-gray-400 object-cover shadow-md'
            priority
          />
        </div>

        <div className='animate-in' style={{ '--index': 2 } as React.CSSProperties}>
          <Image
            src={second}
            alt={'me'}
            width={180}
            height={200}
            className='pointer-events-none absolute inset-0 -top-64 left-[50%] rotate-6 rounded-xl bg-gray-400 object-cover shadow-md md:left-[60%] md:w-56'
            priority
          />
        </div>

        <div className='animate-in' style={{ '--index': 2 } as React.CSSProperties}>
          <Image
            src={third}
            alt={'me'}
            width={180}
            height={200}
            className='pointer-events-none absolute inset-0 -top-24 left-[50%] rotate-12 rounded-xl bg-gray-400 object-cover shadow-md md:left-[60%] md:w-56'
            priority
          />
        </div>
      </div>
      <div className='hidden md:block'>{/* <Gallery /> */}</div>
      <div
        className='flex animate-in flex-col gap-16 md:gap-24'
        style={{ '--index': 3 } as React.CSSProperties}
      >
        <Section heading='About' headingAlignment='left'>
          <div className='flex flex-col gap-6'>
            <p>
              Hi, I&apos;m Andrew, born in Novosibirsk, Russia, and I moved to Kazan for my studies.
              I used to be a professional hockey player. I have been coding for{' '}
              {new Date().getFullYear() - 2021} years. As a software engineer, I specialize in
              full-stack web development.
            </p>
            <p>
              When I&apos;m not at my desk, I am probably lifting weights, playing soccer or hockey.
            </p>
          </div>
        </Section>
        <Section heading='Connect' headingAlignment='left'>
          <ul className='animated-list grid flex-grow grid-cols-1 gap-3 md:grid-cols-2'>
            {connectLinks.map(link => (
              <li className='col-span-1 transition-opacity' key={link.label}>
                <Link
                  href={link.href}
                  className='inline-grid w-full rounded-lg bg-secondary p-4 no-underline transition-opacity '
                >
                  <div className='flex items-center gap-3'>
                    <span className='text-xl'>{link.icon}</span>
                    {link.label}
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                      className='ml-auto h-5 w-5 text-secondary'
                    >
                      <path
                        fillRule='evenodd'
                        d='M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Section>
        <Section heading='Education' headingAlignment='left'>
          <div className='flex w-full flex-col gap-8'>
            <p>
              I am currently pursuing a Bachelor&apos;s degree in Information Technology and
              Computer Science. My goal is to continue my education and personal development in this
              field, constantly striving to enhance my skills and knowledge.
            </p>
            <Places items={educationplaces} />
          </div>
        </Section>
        <Section heading='Work' headingAlignment='left'>
          <div className='flex w-full flex-col gap-8'>
            <p>
              I specialize in React, web development, UI/UX. But I am always learning new things.
              Here are some of the places I have worked.
            </p>
            <Places items={workplaces} />
          </div>
        </Section>
      </div>
    </div>
  )
}

const workplaces = [
  {
    title: 'Full Stack Engineer',
    company: 'Mageinn',
    time: '2022 -',
    imageSrc: mageinnLogo,
    link: 'https://hines.com'
  }
]

const educationplaces = [
  {
    title: 'Bachelor Student',
    company: 'KGEU',
    time: '2021 - 2025',
    imageSrc: kgeuLogo,
    link: 'https://www.kgeu.ru/'
  }
]

interface ConnectLink {
  label: string
  href: string
  icon: ReactNode
}

const connectLinks: ConnectLink[] = [
  {
    label: 'Telegram',
    href: 'https://t.me/andrxw66',
    icon: <FaTelegram />
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/andrxw66/',
    icon: <FaInstagram />
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com/_andrxw66',
    icon: <FaXTwitter />
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/andrxw66/',
    icon: <FaLinkedin />
  },
  {
    label: 'GitHub',
    href: 'https://github.com/andrxw66',
    icon: <FaGithub />
  }
]

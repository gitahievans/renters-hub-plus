'use client'

import Link from 'next/link'
import React from 'react'
import Logo from '@/public/icons/apartment.png'
import Image from 'next/image'
import { NavLinks } from '@/Constants/constants';
import callIcon from '@/public/icons/phone-call.svg';
import emailIcon from '@/public/icons/email.svg';
import onlineIcon from '@/public/icons/onlineIcon.svg';
import avatar from '@/public/icons/avatar-man.svg';
import termsIcon from '@/public/icons/information.svg';
import { usePathname } from 'next/navigation';
import MobileNav from './MobileNav'

const Navbar = () => {

  const pathname = usePathname()
  const inactiveLinkStyles = 'px-3 lg:px-6 py-2 text-sm lg:text-lg font-medium hover:bg-gray-200 border-b-2 border-b-transparent rounded-3xl  transition-all duration-500'
  const activeLinkStyles = `border-b-2 border-b-accent-color px-3 lg:px-6 py-2 text-sm lg:text-lg font-medium transition-all duration-500 `


  return (
    <nav className='flex flex-col border'>
      <section className='hidden md:flex items-center justify-between text-sm font-normal md:px-16 lg:px-48'>
        <div className='flex items-center md:gap-4 lg:gap-8 flex-wrap'>
          <div className='flex gap-1 items-center'>
            <Image src={callIcon} alt='call' className='w-4 h-6' />
            <p>+2547227395</p>
          </div>
          <div className='flex gap-1 items-center'>
            <Image src={emailIcon} alt='email' className='w-4 h-6' />
            <p>hello@rentershub.co.ke</p>
          </div>
          <div className='flex gap-1 items-center'>
            <Image src={onlineIcon} alt='online' className='w-4 h-6' />
            <p>Always online</p>
          </div>
        </div>
        <div className='flex items-center md:gap-2 lg:gap-8 flex-wrap'>
          <div className='flex gap-1 items-center'>
            <Image src={avatar} alt='avatar' className='w-4 h-6' />
            <p>Login</p>
          </div>
          <div className='flex gap-1 items-center'>
            <Image src={termsIcon} alt='terms' className='w-4 h-6' />
            <p>Terms & Conditions</p>
          </div>

        </div>
      </section>
      <hr />
      <section className='flex items-center justify-between py-2 px-1 lg:px-10 '>
        <Link href='/' className='flex gap-1 items-center'>
          <Image src={Logo} alt="logo" className='h-12 w-16 rounded-2xl' />
          <h1 className='text-xl md:text-4xl font-semibold text-accent-color'>Renters Hub</h1>
        </Link>
        <MobileNav />
        <div className='lg:flex hidden gap-4 xl:gap-7'>
          {NavLinks.map(link => {
            return (
              <Link href={link.href} key={link.id} className={pathname === link.href ? activeLinkStyles : inactiveLinkStyles}>
                {link.text}
              </Link>
            )
          })}
        </div>
      </section>
    </nav >
  )
}

export default Navbar;
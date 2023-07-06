'use client'

import Link from 'next/link'
import React from 'react'
import Logo from '@/public/images/logo.png'
import Image from 'next/image'
import menuIcon from '@/public/icons/menu.svg';
import { NavLinks } from '@/Constants/constants';
import callIcon from '@/public/icons/phone-call.svg';
import emailIcon from '@/public/icons/email.svg';
import avatar from '@/public/icons/avatar-man.svg';
import termsIcon from '@/public/icons/information.svg';
import CustomButton from './CustomButton';
import { usePathname } from 'next/navigation';
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button, Group } from '@mantine/core';
const Navbar = () => {
  const [opened, { open, close }] = useDisclosure(false);

  const pathname = usePathname()

  return (
    <nav className='flex flex-col'>
      <section className='hidden md:flex items-center justify-between text-sm font-normal md:px-32 lg:px-48'>
        <div className='flex items-center md:gap-2 lg:gap-8 flex-wrap'>
          <div className='flex gap-1 items-center'>
            <Image src={callIcon} alt='call' className='w-4 h-6' />
            <p>+2547227395</p>
          </div>
          <div className='flex gap-1 items-center'>
            <Image src={emailIcon} alt='email' className='w-4 h-6' />
            <p>hello@rentershub.co.ke</p>
          </div>
          <div className='flex gap-1 items-center'>
            <Image src={emailIcon} alt='email' className='w-4 h-6' />
            <p>Always online</p>
          </div>
        </div>
        <div className='flex items-center md:gap-2 lg:gap-8 flex-wrap'>
          <div className='flex gap-1 items-center'>
            <Image src={avatar} alt='email' className='w-4 h-6' />
            <p>Login</p>
          </div>
          <div className='flex gap-1 items-center'>
            <Image src={termsIcon} alt='email' className='w-4 h-6' />
            <p>Terms & Conditions</p>
          </div>

        </div>
      </section>
      <hr />
      <section className='flex items-center justify-between py-2 px-1 lg:px-20 '>
        <Link href='/' className='flex gap-1 items-center'>
          <Image src={Logo} alt="logo" className='h-14 w-20' />
          <h1 className='text-xl md:text-4xl font-semibold'>Renters Hub</h1>
        </Link>
        <>
          <Image onClick={open} src={menuIcon} alt="menu" className='lg:hidden' />
          <Drawer position='right' size='50%' opened={opened} onClose={close}>
            <div className='flex flex-col gap-3'>
              {NavLinks.map(link => {
                return (
                  <Link onClick={close} href={link.href} key={link.id} className={pathname === link.href ? `bg-accent-color px-3 lg:px-4 py-2 border text-sm md:text-lg font-medium rounded-lg text-white` : `px-3 lg:px-4 py-2 border text-sm md:text-lg font-medium rounded-lg hover:bg-accent-color hover:text-white`}>
                    {link.text}
                  </Link>
                )
              })}
            </div>
          </Drawer>
        </>
        <ul className='lg:flex hidden text-small md:gap-4 xl:gap-7'>
          {NavLinks.map(link => {
            return (
              <Link href={link.href} key={link.id} className={pathname === link.href ? `bg-accent-color px-3 lg:px-4 py-2 border text-sm lg:text-base font-medium rounded-lg text-white` : `px-3 lg:px-4 py-2 border text-sm lg:text-base font-medium rounded-lg hover:bg-accent-color hover:text-white`}>
                {link.text}
              </Link>
            )
          })}
        </ul>
      </section>
    </nav >
  )
}

export default Navbar;
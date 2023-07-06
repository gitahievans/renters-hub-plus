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

const Navbar = () => {
  return (
    <nav className='flex flex-col'>
      <section className='hidden md:flex items-center justify-between text-sm font-normal px-56 mx-20'>
        <div className='flex items-center gap-8'>
          <div className='flex gap-1 items-center'>
            <Image src={callIcon} alt='call' className='w-4 h-6'/>
            <p>+2547227395</p>
          </div>
          <div className='flex gap-1 items-center'>
            <Image src={emailIcon} alt='email' className='w-4 h-6'/>
            <p>hello@rentershub.co.ke</p>
          </div>
        </div>
        <div className='flex items-center gap-8'>
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
      <section className='flex items-center justify-between py-2 px-1 mx-20'>
        <Link href='/' className='flex gap-1 items-center'>
          <Image src={Logo} alt="logo" className='h-14 w-20' />
          <h1 className='text-xl md:text-4xl font-semibold'>Renters Hub</h1>
        </Link>
        <Image src={menuIcon} alt="menu" className='md:hidden' />
        <ul className='md:flex hidden text-small gap-7'>
          {NavLinks.map(link => (
            <Link href={link.href} key={link.id}>{link.text}</Link>
          ))}
        </ul>
      </section>
    </nav>
  )
}

export default Navbar
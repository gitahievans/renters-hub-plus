'use client'

import React from 'react'
import { Drawer, Button, Group } from '@mantine/core';
import menuIcon from '@/public/icons/menu.svg';
import Image from 'next/image'
import { NavLinks } from '@/Constants/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useDisclosure } from '@mantine/hooks';

const MobileNav = () => {
    const [opened, { open, close }] = useDisclosure(false);
    const pathname = usePathname()

    return (
        <>
            <Image onClick={open} src={menuIcon} alt="menu" className='lg:hidden md:w-12 cursor-pointer' />
            <Drawer position='right' size='50%' opened={opened} onClose={close}>
                <div className='flex flex-col gap-6'>
                    {NavLinks.map(link => {
                        return (
                            <Link onClick={close} href={link.href} key={link.id} className={pathname === link.href ? `bg-accent-color px-3 lg:px-4 py-2 border text-sm md:text-lg font-medium rounded-lg text-white` : `px-3 lg:px-4 py-2 border text-sm md:text-lg font-medium rounded-lg hover:bg-gray-200 transition-all duration-500`}>
                                {link.text}
                            </Link>
                        )
                    })}
                </div>
            </Drawer>
        </>
    )
}

export default MobileNav
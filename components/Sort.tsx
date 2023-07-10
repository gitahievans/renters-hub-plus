'use client'

import React from 'react'
import { Menu } from '@mantine/core'
import Image from 'next/image'
import { useDisclosure } from '@mantine/hooks'
import sortIcon from '@/public/images/sort50.png';
import { menuItems } from '@/Constants/constants'
import { SortButtonType } from '@/Types'


const Sort = ({ width, gap, hidden, mdTextSize, lgTextSize, btnBg, hoverBg }: SortButtonType) => {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <Menu shadow="xl" width={360} closeOnItemClick={false} >
            {/* Trigger button */}
            <Menu.Target>
                <div className={`flex items-center w-${width} gap-${gap} bg-${btnBg} hover:bg-${hoverBg} rounded-2xl px-4 border-2 justify-center py-2 border-gray-300 cursor-pointer`}>
                    <Image src={sortIcon} alt='sorting' className={`w-8 lg:w-6 ${hidden ? 'hidden' : null}`} />
                    <span className={`md:text-${mdTextSize} lg:text-${lgTextSize} capitalize`}>Sort</span>
                </div>
            </Menu.Target>
            {/* Dropdown content */}
            <Menu.Dropdown>
                {/* Drop down label */}
                <Menu.Label>
                    <span className='text-base font-semibold'>Sort Property</span>
                </Menu.Label>
                {/* Dropdown items */}
                {
                    menuItems.map(menuItem => (
                        <Menu.Item key={crypto.randomUUID()}>
                            <div className='flex items-center pr-10 justify-between'>
                                <label htmlFor="houseType" className='text-base'>{menuItem.labelText}</label>
                                <input type="checkbox" className='checkbox' />
                            </div>
                        </Menu.Item>
                    )
                    )}
                {/* Dropdown items */}
            </Menu.Dropdown>
        </Menu>

    )
}

export default Sort
'use client'

import React from 'react'
import CustomButton from './CustomButton'
import { Button, Drawer, Group, Input, Menu, Select } from '@mantine/core'
import Image from 'next/image'
import filtersIcon from '@/public/images/filter.png'
import { useDisclosure } from '@mantine/hooks'
import sortIcon from '@/public/images/sort.png';

const Sort = () => {
    const [opened, { open, close }] = useDisclosure(false);

    const menuItems = [
        {
            labelText: "Highest Price",
        },
        {
            labelText: "Lowest Price",
        },
        {
            labelText: "Recently Added",
        }
    ]
    return (
        <>
            <Menu shadow="xl" width={360} >
                {/* Trigger button */}
                <Menu.Target>
                    <button type='button' className='btn flex flex-1'>
                        <Image src={sortIcon} alt='filter' className='w-8 ' />
                        <span>Sort by</span>
                    </button>
                </Menu.Target>
                {/* Dropdown content */}
                <Menu.Dropdown>
                    {/* Drop down label */}
                    <Menu.Label>
                        <span className='text-lg font-semibold'>Filter Property</span>
                    </Menu.Label>
                    {/* Dropdown items */}
                    {
                        menuItems.map(menuItem => (
                            <Menu.Item key={crypto.randomUUID()}>
                                <div className='flex items-center pr-10 justify-between'>
                                    <label htmlFor="houseType">{menuItem.labelText}</label>
                                    <input type="checkbox" className='checkbox' />
                                </div>
                            </Menu.Item>
                        )
                        )}
                    {/* Dropdown items */}
                </Menu.Dropdown>
            </Menu>

        </>
    )
}

export default Sort
'use client'

import React from 'react'
import CustomButton from './CustomButton'
import { Button, Drawer, Group, Input, Menu, Select } from '@mantine/core'
import Image from 'next/image'
import filtersIcon from '@/public/images/filter.png'
import { useDisclosure } from '@mantine/hooks';

const Filter = () => {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
            <Menu shadow="xl" width={360} closeOnItemClick={false}>
                {/* Trigger button */}
                <Menu.Target>
                    <button type='button' className='btn flex md:gap-4 hover:bg-app-green rounded-3xl'>
                        <Image src={filtersIcon} alt='filter' className='w-8 md:w-10 rotate-90' />
                        <span className='md:text-lg capitalize'>Filters</span>
                    </button>
                </Menu.Target>
                {/* Dropdown content */}
                <Menu.Dropdown>
                    {/* Drop down label */}
                    <Menu.Label>
                        <span className='text-base font-semibold'>Filter Property</span>
                    </Menu.Label>
                    {/* Dropdown items */}
                    <Menu.Item>
                        <div className='flex items-center gap-4'>
                            <div className='w-2/5'>
                                <label htmlFor="houseType">Property Category</label></div>
                            <div className='w-3/5'>
                                <Select
                                    data={[
                                        { value: 'Residential', label: 'Residential' },
                                        { value: 'Commercial', label: 'Commercial' },

                                    ]}
                                    placeholder="Select category"
                                    searchable
                                    maxDropdownHeight={400}
                                    nothingFound="Not found"
                                    size='lg'
                                />
                            </div>
                        </div>
                    </Menu.Item>
                    <Menu.Item>
                        <div className='flex items-center gap-4'>
                            <div className='w-2/5'>
                                <label htmlFor="houseType">House Type</label>
                            </div>
                            <div className='w-3/5'>
                                <Select
                                    data={[
                                        { value: 'Bedsitters', label: 'Bedsitters' },
                                        { value: '2 Bedrooms', label: '2 Bedrooms' },
                                        { value: '3 Bedrooms', label: '3 Bedrooms' },
                                        { value: '4 Bedrooms', label: '4 Bedrooms' },
                                        { value: '5+', label: '5+' },
                                        { value: 'Student Hostels', label: 'Student Hostels' },
                                        { value: 'Singles', label: 'Singles' },
                                        { value: 'Doubles', label: 'Doubles' },
                                    ]}
                                    placeholder="Pick one"
                                    searchable
                                    maxDropdownHeight={400}
                                    nothingFound="Not found"
                                    size='lg'
                                />
                            </div>
                        </div>
                    </Menu.Item>
                    <Menu.Item>
                        <div className='flex items-center gap-4'>
                            <div className='w-2/5'>
                                <label htmlFor="houseType">Price</label>
                            </div>
                            <div className='w-3/5'>
                                <Input placeholder='Max price' size='lg' />
                            </div>
                        </div>
                    </Menu.Item>
                    <Menu.Item>
                        <div className='flex items-center gap-4'>
                            <div className='w-2/5'><label htmlFor="houseType">Location</label></div>
                            <div className='w-3/5'>
                                <Input placeholder='Kitengela' size='lg' />
                            </div>
                        </div>
                    </Menu.Item>

                    <div className='flex items-center justify-between'>
                        <Menu.Item >
                            <CustomButton text='Clear filters' btnType='button' />
                        </Menu.Item>
                        <Menu.Item closeMenuOnClick>
                            <CustomButton text='Show Results' btnType='button' />
                        </Menu.Item>
                    </div>
                    {/* Dropdown items */}
                </Menu.Dropdown>
            </Menu>
        </>
    )
}

export default Filter
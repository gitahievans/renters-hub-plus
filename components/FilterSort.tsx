'use client'

import React from 'react'
import Filter from './Filter'
import Sort from './Sort'
import { NumberInput, Select, TextInput } from '@mantine/core'
import CustomButton from './CustomButton'
const FilterSort = () => {

    return (
        <section className='flex items-end justify-between'>
            <div className='lg:flex items-end gap-4 hidden '>
                {/* <div className='flex items-center justify-center px-2 gap-2 border py-2 rounded-lg bg-app-green'>
                    <Image src={filtersIcon} alt='filter' className='w-6 h-6 rotate-90' />
                    <span className='md:text-lg'>Filters</span>
                </div> */}

                <Select
                    data={[
                        { value: 'Residential', label: 'Residential' },
                        { value: 'Commercial', label: 'Commercial' },

                    ]}
                    placeholder="Select category"
                    searchable
                    label="Property category"
                    maxDropdownHeight={300}
                    nothingFound="Not found"
                    size='sm'
                    radius='lg'
                />

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
                    label="House type"
                    size='sm'
                    radius='lg'
                    maxDropdownHeight={300}
                    nothingFound="Not found"
                />

                <NumberInput label="Max price" size='sm' placeholder='15000' hideControls radius='lg' />

                <TextInput label="Enter Location" size='sm' placeholder='Kitengela' radius='lg' />

                <CustomButton text='Show Results' btnType='button' styles='bg-app-green capitalize' />
            </div>
            <div className='hidden lg:block'>
                <Sort hidden={true} mdTextSize='lg' lgTextSize='sm' btnBg='app-green' hoverBg='none' />
            </div>
            <div className='lg:hidden grid grid-cols-2 w-full gap-4 '>
                <Filter />
                <Sort gap='4' hidden={false} mdTextSize='lg' hoverBg='app-green' />
            </div>

            {/* <>
                <Drawer position='top' opened={opened} onClose={close} title="Authentication">
                </Drawer>

                <Group position="center">
                    <Button onClick={open}>Open Drawer</Button>
                </Group>
            </> */}
        </section>
    )
}

export default FilterSort;
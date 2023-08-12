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

                <NumberInput label="Max rent" size='sm' placeholder='15000' hideControls radius='lg' />

                <TextInput label="Enter Location" size='sm' placeholder='Kitengela' radius='lg' />

                <CustomButton text='Show Results' btnType='button' styles='bg-transparent hover:bg-accent-color text-accent-color hover:text-white border border-gray-700 capitalize transition-all duration-500  ease-in-out' />
            </div>
            <div className='hidden lg:block'>
                <Sort hidden={true} mdTextSize='lg' lgTextSize='sm' btnBg='none' hoverBg='accent-color' />
            </div>
            <div className='lg:hidden grid grid-cols-2 w-full gap-4 '>
                <Filter />
                <Sort gap='4' hidden={false} mdTextSize='lg' hoverBg='accent-color' />
            </div>
        </section>
    )
}

export default FilterSort;
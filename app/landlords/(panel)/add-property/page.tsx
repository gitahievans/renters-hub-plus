'use client'

import { propertyFeatures } from '@/Constants/constants'
import CustomButton from '@/components/CustomButton'
import CustomInput from '@/components/CustomInput'
import { Select, Textarea } from '@mantine/core'
import React, { useState } from 'react'

const AddProperty = () => {
  const [value, setValue] = useState<string | null>('10');

  return (
    <div className='flex flex-col gap-3 min-h-full p-1 my-2 max-w-7xl mx-auto'>
      <h1 className='text-2xl font-semibold'>Add New Property</h1>
      <form action="" className='flex flex-col gap-3' >
        <div className='flex flex-col md:grid md:grid-cols-2 gap-3 w-full bg-gray-100 p-2 rounded-lg md:mx-auto'>
          <Select data={[
            { value: '5', label: '5' },
            { value: '10', label: '10' },
            { value: '25', label: '25' },
          ]}
            placeholder="Select category"
            searchable
            size='md'
            value={value}
            radius='md'
            width={10}
            onChange={setValue}
            label='Property Category'
            styles={
              { label: { color: 'black', fontWeight: 'bold' }}}
          />
          <CustomInput forHtml='location' type='number' labelText='Enter Location Number (You can edit)' placeholderTxt='0739832893' required={true} />
          <Select data={[
            { value: '5', label: '5' },
            { value: '10', label: '10' },
            { value: '25', label: '25' },
          ]}
            placeholder="Select category"
            searchable
            size='md'
            value={value}
            radius='md'
            width={10}
            onChange={setValue}
            label='Select County'
            styles={{ label: { color: 'black', fontWeight: 'bold' } }}
          />
          <CustomInput forHtml='location' type='number' labelText='Managed by' placeholderTxt='0739832893' required={true} />
          <CustomInput forHtml='location' type='number' labelText='Property Name' placeholderTxt='0739832893' required={true} />
          <CustomInput forHtml='location' type='number' labelText='Enter Rental Price' placeholderTxt='0739832893' required={true} />
          <Select data={[
            { value: '5', label: '5' },
            { value: '10', label: '10' },
            { value: '25', label: '25' },
          ]}
            placeholder="Select category"
            searchable
            size='md'
            value={value}
            radius='md'
            width={10}
            onChange={setValue}
            label='Select Payment Basis:'
            styles={{ label: { color: 'black', fontWeight: 'bold' } }}
          />
          <Textarea label="Property description" styles={{ label: { color: 'black', fontWeight: 'bold' } }} />
        </div>

        <div className='flex flex-col gap-3 bg-gray-100 rounded-lg mt-2 p-2'>
          <h1 className='text-xl font-semibold'>Features List (Tick appropriately)
          </h1>
          <div className='flex flex-col md:grid md:grid-cols-4 gap-3'>
            {
              propertyFeatures.map((feature) => (
                <div key={crypto.randomUUID()} className='flex gap-3 items-center'>
                  <input type="checkbox" className='checkbox' />
                  <p>{feature}</p>
                </div>
              ))
            }
          </div>
        </div>
        <div className='flex flex-col gap-3 mt-6 p-2 bg-gray-100 rounded-lg'>
          <h1 className='text-xl font-semibold'>Select Images</h1>
          <div className='flex flex-col md:flex-row gap-3'>
            <div className='flex flex-col gap-1'>
              <label className="block mb-2 text-sm font-semibold text-gray-900 ">Profile Image <span className='text-red-600'>(Required)</span></label>
              <input type='file' className="shadow-sm bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 hover:bg-gray-200 focus:bg-gray-50 transition-all duration-500" required />
            </div>
            <div className='flex flex-col gap-1'>
              <label className="block mb-2 text-sm font-semibold text-gray-900 ">Multiple Images</label>
              <input type='file' className="shadow-sm bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 hover:bg-gray-200 focus:bg-gray-50 transition-all duration-500" required />
            </div>
          </div>

        </div>
        <CustomButton text='Upload property' btnType='submit' styles='rounded-lg bg-accent-color text-white hover:bg-blue-800 md:w-2/5 lg:w-1/5' />
      </form>
    </div>
  )
}

export default AddProperty;
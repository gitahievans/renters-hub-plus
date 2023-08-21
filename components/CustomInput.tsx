import { CustomInputProps } from '@/Types'
import React from 'react'

const CustomInput = ({ labelText, placeholderTxt, styles, type, forHtml }: CustomInputProps) => {
  return (
      <div className='flex-1'>
          <label htmlFor={forHtml} className="block mb-2 text-sm font-semibold text-gray-900 ">{labelText}</label>
          <input type={type} className="shadow-sm border border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 hover:bg-gray-200 focus:bg-gray-50 transition-all duration-500 " placeholder={placeholderTxt} required />
      </div>
  )
}

export default CustomInput
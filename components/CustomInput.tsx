import { CustomInputProps } from '@/Types'
import React from 'react'

const CustomInput = ({ labelText, placeholderTxt, styles, type, forHtml }: CustomInputProps) => {
  return (
      <div className='flex flex-col gap-1'>
          <label htmlFor={forHtml} className="block text-sm font-semibold text-gray-950 ">{labelText}</label>
          <input type={type} className="border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:outline-blue-300 block w-full p-2.5 focus:bg-gray-50 transition-all duration-500 " placeholder={placeholderTxt} required />
      </div>
  )
}

export default CustomInput
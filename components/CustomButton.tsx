'use client'

import React from 'react'
import { CustomButtonProps } from '@/Types'
import Image from 'next/image'

const CustomButton = ({ text, btnType, handleClick, styles}: CustomButtonProps) => {
    return (
        <button
            type={btnType}
            className={`btn rounded-3xl ${styles}`}
            onClick={() => { handleClick }}
        >
            <span className='flex-1'>{text}</span>
        </button>
    )
}

export default CustomButton
'use client'

import React from 'react'
import { CustomButtonProps } from '@/Types'
import Image from 'next/image'

const CustomButton = ({ text, btnType, handleClick, styles, source, altText}: CustomButtonProps) => {
    return (
        <button
            type={btnType}
            className={`btn rounded-3xl ${styles}`}
            onClick={() => { handleClick }}
        >
            {source ? <Image src={source} alt={altText || ''} className='h-4 w-4' /> : null}
            <span className='flex-1'>{text}</span>
        </button>
    )
}

export default CustomButton
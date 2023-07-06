'use client'

import React from 'react'
import { CustomButtonProps } from '@/Types'

const CustomButton = ({ text, btnType, handleClick, styles }: CustomButtonProps) => {
    return (
        <button
            type={btnType}
            className={`btn ${styles}`}
            onClick={() => { handleClick }}
        >
            <span className='flex-1'>{text}</span>
        </button>
    )
}

export default CustomButton
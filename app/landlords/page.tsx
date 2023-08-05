/* eslint-disable react/no-unescaped-entities */
import CustomButton from '@/components/CustomButton';
import SignUpForm from '@/components/SignUpForm';
import Link from 'next/link';
import React from 'react'

const Landlords = () => {
    return (
        <div className='min-h-[100dvh] min-w-full py-4 px-1 lg:px-10'>
            <section className='flex flex-col items-center '>
                <h1 className='text-base font-medium'>Register as a Landlord/Property Manager</h1>
                <SignUpForm />
            </section>
        </div>
    )
}

export default Landlords;
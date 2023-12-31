import React from 'react'
import Logo from '@/public/icons/apartment.png'
import Image from 'next/image';
import SignUpForm from '@/components/Landlords/SignUpForm';

const Signup = () => {
    return (
        <div className='min-h-[100dvh] min-w-full py-4 px-1 lg:px-10'>
            <section className='flex flex-col items-center'>
                <Image src={Logo} alt='RentersHub' className='mb-12' />
                <h1 className='text-xl font-medium text-center'>Register as a Landlord (Property Manager)
                </h1>
                <SignUpForm />
            </section>
        </div>
    )
}

export default Signup;